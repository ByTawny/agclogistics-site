"use server"

import { z } from "zod"

const contactSchema = z.object({
  type: z.enum(["pharmacie", "patient", "aidant", "autre"]),
  nom: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  commune: z.string().min(2, "Veuillez indiquer votre commune"),
  message: z.string().min(10, "Le message doit comporter au moins 10 caractères"),
  honeypot: z.string().max(0, "Spam détecté"), // Anti-spam honeypot field
})

export type ContactFormData = z.infer<typeof contactSchema>

export type ContactResult = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function sendContactForm(
  formData: FormData
): Promise<ContactResult> {
  // Anti-spam: check honeypot
  const honeypot = formData.get("website") as string
  if (honeypot && honeypot.length > 0) {
    return { success: false, message: "Requête invalide." }
  }

  const rawData = {
    type: formData.get("type"),
    nom: formData.get("nom"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
    commune: formData.get("commune"),
    message: formData.get("message"),
    honeypot: honeypot || "",
  }

  const parsed = contactSchema.safeParse(rawData)

  if (!parsed.success) {
    return {
      success: false,
      message: "Veuillez corriger les erreurs ci-dessous.",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const { type, nom, email, telephone, commune, message } = parsed.data

  const typeLabels: Record<string, string> = {
    pharmacie: "Pharmacie",
    patient: "Patient",
    aidant: "Aidant / Structure",
    autre: "Autre",
  }

  // Try Resend first, fallback to nodemailer
  const resendApiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL || "contact@agclogistics.mq"

  const emailSubject = `[AGC Logistics] Nouveau contact — ${typeLabels[type]} — ${nom}`
  const emailBody = `
Nouveau message reçu via le formulaire de contact AGC Logistics.

Type de demande : ${typeLabels[type]}
Nom : ${nom}
Email : ${email}
Téléphone : ${telephone || "Non renseigné"}
Commune : ${commune}

Message :
${message}

---
Envoyé depuis agclogistics.mq
  `.trim()

  try {
    if (resendApiKey) {
      const { Resend } = await import("resend")
      const resend = new Resend(resendApiKey)

      await resend.emails.send({
        from: "AGC Logistics <noreply@agclogistics.mq>",
        to: [contactEmail],
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
      })
    } else if (process.env.SMTP_HOST) {
      const nodemailer = await import("nodemailer")
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"AGC Logistics" <${process.env.SMTP_USER}>`,
        to: contactEmail,
        replyTo: email,
        subject: emailSubject,
        text: emailBody,
      })
    } else {
      // Development mode: log to console
      console.log("=== CONTACT FORM SUBMISSION (dev mode) ===")
      console.log(emailBody)
      console.log("=========================================")
    }

    return {
      success: true,
      message:
        "Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.",
    }
  } catch (error) {
    console.error("Email send error:", error)
    return {
      success: false,
      message:
        "Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement par téléphone.",
    }
  }
}

import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, AlertCircle, Shield } from "lucide-react"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/constants"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Nous contacter — AGC Logistics",
  description:
    "Contactez AGC Logistics pour une demande de livraison, un devis pharmacie ou toute question sur notre service en Martinique.",
}

export default function ContactPage() {
  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)" }}
      >
        <div className="container-xl max-w-2xl">
          <Badge variant="default" className="mb-4">Contact</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed">
            Pharmacien, patient ou aidant — remplissez ce formulaire et nous vous répondons
            rapidement. Délai de réponse habituel : 24 à 48h ouvrées.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#0f172a]">Nos coordonnées</h2>
              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-start gap-3 text-[#475569] hover:text-[#0b5fff] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#eff6ff] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Téléphone</div>
                    <div className="font-medium">{CONTACT_PHONE}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-3 text-[#475569] hover:text-[#0b5fff] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#eff6ff] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Email</div>
                    <div className="font-medium">{CONTACT_EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-[#475569]">
                  <div className="w-10 h-10 bg-[#eff6ff] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#0b5fff]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#94a3b8] uppercase tracking-wider">Adresse</div>
                    <div className="font-medium">{CONTACT_ADDRESS}</div>
                  </div>
                </div>
              </div>

              {/* RGPD notice */}
              <Card className="p-4 bg-[#eff6ff] border-[#0b5fff]/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#0b5fff] shrink-0 mt-0.5" />
                  <div className="text-sm text-[#1d4ed8]">
                    <p className="font-semibold mb-1">Confidentialité</p>
                    <p className="text-xs leading-relaxed text-[#3b82f6]">
                      Ne transmettez jamais de données médicales sensibles (ordonnances,
                      diagnostics, traitements) via ce formulaire. Pour toute question
                      médicale, contactez directement votre médecin ou pharmacien.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-[#fffbeb] border-[#f59e0b]/20">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-[#92400e] mb-1">Urgence médicale</p>
                    <p className="text-xs leading-relaxed text-[#78716c]">
                      En cas d&apos;urgence médicale, appelez le <strong>15 (SAMU)</strong> ou le{" "}
                      <strong>18 (Pompiers)</strong>. AGC Logistics n&apos;est pas un service d&apos;urgence.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

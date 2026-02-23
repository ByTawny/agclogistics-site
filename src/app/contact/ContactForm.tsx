"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { sendContactForm } from "./actions"

const typeOptions = [
  { value: "pharmacie", label: "Pharmacie — Demande de partenariat / devis" },
  { value: "patient", label: "Patient — Information sur le service" },
  { value: "aidant", label: "Aidant / Structure — Coordination" },
  { value: "autre", label: "Autre demande" },
]

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      const res = await sendContactForm(formData)
      setResult({ success: res.success, message: res.message })
      setErrors(res.errors || {})
      if (res.success) {
        ;(e.target as HTMLFormElement).reset()
      }
    })
  }

  if (result?.success) {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-[#ecfdf5] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#10b981]" />
        </div>
        <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Message envoyé !</h2>
        <p className="text-[#64748b] leading-relaxed">{result.message}</p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setResult(null)}
        >
          Envoyer un autre message
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6 md:p-8">
      {result && !result.success && (
        <div className="mb-6 p-4 bg-red-50 rounded-xl flex items-start gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm">{result.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot anti-spam */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
          aria-hidden="true"
        />

        {/* Type */}
        <div className="space-y-2">
          <Label htmlFor="type">
            Type de demande <span className="text-red-500">*</span>
          </Label>
          <select
            id="type"
            name="type"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0b5fff] focus:border-transparent"
          >
            <option value="" disabled>Choisissez votre profil…</option>
            {typeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {errors.type && <p className="text-xs text-red-500">{errors.type[0]}</p>}
        </div>

        {/* Nom */}
        <div className="space-y-2">
          <Label htmlFor="nom">
            Nom / Raison sociale <span className="text-red-500">*</span>
          </Label>
          <Input
            id="nom"
            name="nom"
            placeholder="Votre nom ou le nom de votre officine"
            required
            aria-describedby={errors.nom ? "nom-error" : undefined}
          />
          {errors.nom && <p id="nom-error" className="text-xs text-red-500">{errors.nom[0]}</p>}
        </div>

        {/* Email + Téléphone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="vous@exemple.fr"
              required
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-xs text-red-500">{errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="telephone">Téléphone</Label>
            <Input
              id="telephone"
              name="telephone"
              type="tel"
              placeholder="+596 6XX XXX XXX"
            />
          </div>
        </div>

        {/* Commune */}
        <div className="space-y-2">
          <Label htmlFor="commune">
            Commune / Zone <span className="text-red-500">*</span>
          </Label>
          <Input
            id="commune"
            name="commune"
            placeholder="Ex : Fort-de-France, Le Robert…"
            required
            aria-describedby={errors.commune ? "commune-error" : undefined}
          />
          {errors.commune && <p id="commune-error" className="text-xs text-red-500">{errors.commune[0]}</p>}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Décrivez votre besoin ou votre question. N'incluez pas de données médicales ou d'ordonnances dans ce message."
            rows={5}
            required
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <p id="message-error" className="text-xs text-red-500">{errors.message[0]}</p>}
        </div>

        {/* RGPD notice */}
        <p className="text-xs text-[#94a3b8] leading-relaxed">
          En soumettant ce formulaire, vous acceptez que vos données soient utilisées
          pour traiter votre demande. Aucune donnée médicale ne doit être partagée ici.
          Consultez notre{" "}
          <a href="/politique-confidentialite" className="underline hover:text-[#0b5fff]">
            politique de confidentialité
          </a>
          .
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="w-full"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            "Envoyer le message"
          )}
        </Button>
      </form>
    </Card>
  )
}

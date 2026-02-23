import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Shield } from "lucide-react"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/constants"

const footerLinks = {
  services: [
    { label: "Livraison médicaments", href: "/services" },
    { label: "Dispositifs médicaux", href: "/services" },
    { label: "Traçabilité & conformité", href: "/services" },
    { label: "Comment ça marche", href: "/comment-ca-marche" },
  ],
  pages: [
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Zones couvertes", href: "/zones-couvertes" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Contact", href: "/contact" },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: "#0B3C5D" }} className="text-white" role="contentinfo">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Colonne 1 : Marque */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="AGC Logistics - Accueil">
              <Image
                src="/logo-agc.png"
                alt="AGC Logistics"
                width={130}
                height={38}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Spécialiste de la logistique pharmaceutique en Martinique. Livraison sécurisée,
              traçabilité complète et conformité réglementaire.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-[#1F6FEB]" />
                {CONTACT_PHONE}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-[#1F6FEB]" />
                {CONTACT_EMAIL}
              </a>
              <div
                className="flex items-start gap-2.5 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#1F6FEB]" />
                {CONTACT_ADDRESS}
              </div>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {footerLinks.pages.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Légal + Badge conformité */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Informations
            </h3>
            <ul className="flex flex-col gap-3 mb-8" role="list">
              {footerLinks.legal.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Badge conformité */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Shield className="w-5 h-5 text-[#1E8E5A] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white mb-1">
                  Conforme réglementation
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Activité encadrée selon les BPD et la réglementation pharmaceutique française.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {year} AGC Logistics — Tous droits réservés
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Logistique pharmaceutique · Martinique (972)
          </p>
        </div>
      </div>
    </footer>
  )
}

import React from "react"
import Link from "next/link"
import { Package2, Phone, Mail, MapPin, Shield, Lock } from "lucide-react"
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "@/lib/constants"

const footerLinks = {
  services: [
    { label: "Livraison à domicile", href: "/services" },
    { label: "Tournées pharmacies", href: "/services#tournees" },
    { label: "Suivi livraisons", href: "/services#suivi" },
    { label: "Comment ça marche", href: "/comment-ca-marche" },
    { label: "Zones couvertes", href: "/zones-couvertes" },
  ],
  audiences: [
    { label: "Pour les pharmacies", href: "/pharmacies" },
    { label: "Pour les patients", href: "/patients" },
    { label: "FAQ", href: "/faq" },
    { label: "À propos", href: "/a-propos" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Contact", href: "/contact" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white" role="contentinfo">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-white hover:text-[#60a5fa] transition-colors mb-4"
              aria-label="AGC Logistics"
            >
              <div className="w-8 h-8 bg-[#0b5fff] rounded-lg flex items-center justify-center">
                <Package2 className="w-5 h-5 text-white" />
              </div>
              AGC Logistics
            </Link>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
              Livraison à domicile de médicaments et produits de santé en Martinique.
              Fiable, confidentiel, rapide.
            </p>
            {/* Trust badges */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-[#64748b]">
                <Shield className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Confidentialité garantie</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#64748b]">
                <Lock className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Conforme RGPD</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Informations
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.audiences.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="flex items-start gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#0b5fff]" />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#0b5fff]" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-[#94a3b8]">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#0b5fff]" />
                  <span>{CONTACT_ADDRESS}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e293b] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} AGC Logistics — Martinique. Tous droits réservés.
          </p>
          <ul className="flex items-center gap-4" role="list">
            {footerLinks.legal.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-[#64748b] hover:text-[#94a3b8] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

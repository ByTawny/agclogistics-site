import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Truck,
  Clock,
  MapPin,
  ClipboardList,
  HeartHandshake,
  Bell,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nos services de livraison santé",
  description:
    "Découvrez les services d'AGC Logistics : livraison à domicile planifiée, tournées pharmacies, coordination aidants et suivi des livraisons en Martinique.",
}

const services = [
  {
    icon: Truck,
    title: "Livraison à domicile planifiée",
    desc: "Nous livrons les médicaments et produits de santé directement au domicile des patients, selon un créneau horaire convenu. Idéal pour les patients réguliers avec un traitement continu.",
    features: [
      "Créneaux horaires définis",
      "Remise en main propre ou en boîte aux lettres sécurisée",
      "Confirmation de livraison auprès de la pharmacie",
      "Couverture toute la Martinique",
    ],
    badge: "Service principal",
  },
  {
    icon: ClipboardList,
    title: "Tournées pharmacies partenaires",
    desc: "Pour les pharmacies partenaires, nous organisons des tournées régulières de livraison. Vous nous confiez vos commandes préparées, nous gérons l'acheminement vers vos patients.",
    features: [
      "Tournées structurées par zone",
      "Fréquence adaptable (quotidienne, hebdomadaire)",
      "Reporting et traçabilité des livraisons",
      "Gestion des absences et créneaux manqués",
    ],
    badge: "B2B pharmacies",
  },
  {
    icon: HeartHandshake,
    title: "Coordination aidants et structures",
    desc: "Infirmiers à domicile, structures médico-sociales, EHPAD : nous coordonnons les livraisons pour vos patients selon vos protocoles.",
    features: [
      "Coordination avec les équipes soignantes",
      "Livraisons adaptées aux contraintes institutionnelles",
      "Traçabilité pour chaque bénéficiaire",
      "Contact dédié pour les structures",
    ],
    badge: "Sur devis — TODO",
  },
  {
    icon: Bell,
    title: "Suivi et notifications",
    desc: "Chaque livraison effectuée est confirmée auprès de la pharmacie partenaire. Un suivi structuré est mis en place pour les tournées régulières.",
    features: [
      "Confirmation de livraison systématique",
      "Rapport de tournée pour les pharmacies",
      "Gestion des retours et injoignables",
      "Option notification patient — TODO",
    ],
    badge: "Inclus",
  },
]

const inclus = [
  "Prise en charge depuis la pharmacie partenaire",
  "Transport sécurisé des produits de santé",
  "Livraison au domicile du patient",
  "Confirmation de livraison",
  "Rapport pour la pharmacie partenaire",
]

const nonInclus = [
  "Stockage de médicaments (nous ne sommes pas une pharmacie)",
  "Gestion des ordonnances",
  "Service de nuit ou d'urgence immédiate (TODO)",
  "Livraison hors Martinique (TODO — extension prévue)",
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)" }}
      >
        <div className="container-xl">
          <Badge variant="default" className="mb-4">Nos offres</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 max-w-2xl">
            Des services logistiques pensés pour la santé
          </h1>
          <p className="text-xl text-[#475569] max-w-2xl leading-relaxed mb-8">
            AGC Logistics propose une gamme de services de livraison adaptés aux besoins
            des pharmacies, patients et structures de soins en Martinique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?type=pharmacie">
                Demander un devis <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Poser une question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Card key={s.title} className="p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-[#0b5fff]" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">{s.badge}</Badge>
                        <CardTitle>{s.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-[#64748b] text-sm leading-relaxed">{s.desc}</p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#475569]">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus / non inclus */}
      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-10 text-center">
            Ce que couvre notre service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-[#10b981]/30">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-[#10b981]">
                  <CheckCircle2 className="w-5 h-5" />
                  Inclus dans notre service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2.5">
                  {inclus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#f59e0b]/30">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-[#f59e0b]">
                  <AlertCircle className="w-5 h-5" />
                  Non inclus (précisions)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2.5">
                  {nonInclus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#475569]">
                      <AlertCircle className="w-4 h-4 text-[#f59e0b] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-white">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-[#64748b] mb-8 max-w-xl mx-auto">
            Chaque situation est unique. Contactez-nous pour une discussion sans engagement
            et un devis adapté à vos besoins.
          </p>
          <Button size="xl" asChild>
            <Link href="/contact">
              Nous contacter <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ChevronRight, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Zones de livraison couvertes en Martinique",
  description:
    "AGC Logistics couvre toutes les communes de la Martinique pour la livraison de médicaments à domicile. Découvrez les zones desservies.",
}

const communesNord = [
  "Saint-Pierre", "Le Carbet", "Bellefontaine", "Case-Pilote",
  "Le Morne-Rouge", "Ajoupa-Bouillon", "Fonds-Saint-Denis",
  "Basse-Pointe", "Macouba", "Grand'Rivière",
]

const communesCentre = [
  "Fort-de-France", "Schoelcher", "Le Lamentin", "Ducos",
  "Rivière-Salée", "Le Robert", "Trinité", "Sainte-Marie",
  "Gros-Morne", "Lorrain",
]

const communesSud = [
  "Les Trois-Îlets", "Le Diamant", "Anses-d'Arlet",
  "Le Marin", "Sainte-Anne", "Le Vauclin", "Le François",
  "Rivière-Pilote", "Saint-Esprit", "Sainte-Luce",
]

export default function ZonesPage() {
  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #0b5fff 0%, #0044cc 100%)" }}
      >
        <div className="container-xl">
          <Badge variant="white" className="mb-4">Couverture géographique</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl">
            Toute la Martinique couverte
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">
            AGC Logistics livre dans l'ensemble des communes de la Martinique, du nord
            au sud, de la côte Atlantique à la côte Caraïbe.
          </p>
          <div className="flex items-center gap-3 text-blue-100">
            <MapPin className="w-5 h-5 text-[#10b981]" />
            <span>Extension aux autres îles des Antilles en cours — TODO</span>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-10 text-center">
            Communes desservies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nord */}
            <div>
              <h3 className="font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0b5fff] rounded-full" />
                Nord Martinique
              </h3>
              <ul className="space-y-2">
                {communesNord.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[#475569] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            {/* Centre */}
            <div>
              <h3 className="font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-[#10b981] rounded-full" />
                Centre Martinique
              </h3>
              <ul className="space-y-2">
                {communesCentre.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[#475569] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            {/* Sud */}
            <div>
              <h3 className="font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full" />
                Sud Martinique
              </h3>
              <ul className="space-y-2">
                {communesSud.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-[#475569] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 p-5 bg-[#eff6ff] rounded-2xl text-sm text-[#1d4ed8] text-center">
            Votre commune n'est pas dans la liste ? Contactez-nous — nous étudions toute
            demande spécifique selon sa faisabilité.
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Vérifier votre zone
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Contactez-nous avec votre commune pour confirmer la disponibilité du service
            et les créneaux de livraison dans votre secteur.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Vérifier ma zone <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

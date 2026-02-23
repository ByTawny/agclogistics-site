import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart, Target, Eye, ChevronRight, MapPin, Shield, Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "À propos d'AGC Logistics",
  description:
    "Découvrez AGC Logistics, société de logistique santé en Martinique. Notre mission : rendre les médicaments accessibles à tous, partout sur l'île.",
}

const valeurs = [
  {
    icon: Shield,
    titre: "Fiabilité",
    desc: "Nous honorons nos engagements. Chaque livraison confirmée est une livraison réalisée.",
  },
  {
    icon: Heart,
    titre: "Bienveillance",
    desc: "Nos livreurs sont formés à l'accueil des personnes fragiles, seniors et patients en convalescence.",
  },
  {
    icon: Eye,
    titre: "Transparence",
    desc: "Processus clairs, tarifs lisibles, communication directe avec nos pharmacies partenaires.",
  },
  {
    icon: MapPin,
    titre: "Ancrage local",
    desc: "Nous sommes martiniquais. Notre connaissance du terrain est un atout pour nos clients.",
  },
]

export default function AProposPage() {
  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #ecfdf5 100%)" }}
      >
        <div className="container-xl max-w-3xl">
          <Badge variant="default" className="mb-4">Notre histoire</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Qui est AGC Logistics ?
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed">
            AGC Logistics est une société martiniquaise spécialisée dans la logistique de
            santé. Nous avons été créés avec une conviction simple : l'accès aux
            médicaments ne devrait pas dépendre de la capacité à se déplacer.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-[#0b5fff]" />
                <h2 className="text-2xl font-bold text-[#0f172a]">Notre mission</h2>
              </div>
              <p className="text-[#475569] leading-relaxed text-lg">
                Rendre les médicaments et produits de santé accessibles à tous les
                Martiniquais, quel que soit leur lieu de résidence ou leur mobilité, en
                proposant un service de livraison fiable, discret et respectueux.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-6 h-6 text-[#10b981]" />
                <h2 className="text-2xl font-bold text-[#0f172a]">Notre vision</h2>
              </div>
              <p className="text-[#475569] leading-relaxed text-lg">
                Devenir le partenaire logistique de référence pour le secteur de la santé
                en Martinique, et à terme dans les Antilles françaises, en construisant un
                réseau de pharmacies partenaires de confiance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((v) => {
                const Icon = v.icon
                return (
                  <Card key={v.titre} className="p-6 text-center">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-[#0b5fff]" />
                      </div>
                      <h3 className="font-bold text-[#0f172a] mb-2">{v.titre}</h3>
                      <p className="text-sm text-[#64748b] leading-relaxed">{v.desc}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-[#0b5fff] shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Notre équipe</h2>
                <p className="text-[#475569] leading-relaxed mb-3">
                  AGC Logistics est portée par une équipe martiniquaise passionnée par
                  l'amélioration de l'accès aux soins sur notre île. Nos livreurs
                  connaissent parfaitement le terrain et sont formés aux spécificités de la
                  logistique santé.
                </p>
                <p className="text-[#94a3b8] text-sm">
                  TODO : Présentation de l'équipe fondatrice et des livreurs (photos, bios)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Vous partagez notre vision ?
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Que vous soyez pharmacien, patient ou partenaire potentiel, nous serions heureux
            d'échanger avec vous.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Prendre contact <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

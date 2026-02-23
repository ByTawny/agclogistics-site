import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone, ClipboardList, PackageCheck, Truck, Bell,
  CheckCircle2, ChevronRight, AlertCircle, Shield, Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Comment fonctionne la livraison de médicaments",
  description:
    "Découvrez comment fonctionne la livraison à domicile de médicaments avec AGC Logistics en Martinique. Processus étape par étape, règles et délais.",
}

const etapesDetaillees = [
  {
    icon: Phone,
    titre: "1. Demande de livraison",
    desc: "La demande peut être initiée de deux façons :",
    detail: [
      "Via votre pharmacie partenaire : votre pharmacien contacte AGC Logistics lors de la préparation de votre commande.",
      "Directement : vous contactez AGC Logistics pour savoir si votre pharmacie est partenaire ou pour nous soumettre votre demande.",
    ],
    note: null,
  },
  {
    icon: ClipboardList,
    titre: "2. Préparation de la commande",
    desc: "Votre pharmacien prépare et valide votre commande comme à l'habitude. Il conditionne les médicaments dans un emballage approprié et transmet à AGC Logistics les informations de livraison (nom, adresse, créneau).",
    detail: [],
    note: "Important : AGC Logistics ne reçoit aucune information sur le contenu médical de votre commande.",
  },
  {
    icon: PackageCheck,
    titre: "3. Collecte auprès de la pharmacie",
    desc: "Notre livreur récupère la commande préparée directement à l'officine, selon un horaire convenu avec la pharmacie. La prise en charge est documentée.",
    detail: [],
    note: null,
  },
  {
    icon: Truck,
    titre: "4. Livraison à votre domicile",
    desc: "Votre commande est acheminée vers votre domicile dans le créneau horaire convenu. Notre livreur vous remet la commande en main propre ou la dépose en boîte aux lettres si vous l'avez demandé.",
    detail: [
      "Remise en main propre (par défaut)",
      "Dépôt en boîte aux lettres sécurisée (sur demande)",
      "Contacté par téléphone si absence au moment de la livraison",
    ],
    note: null,
  },
  {
    icon: Bell,
    titre: "5. Confirmation et suivi",
    desc: "La livraison est confirmée auprès de la pharmacie partenaire. Pour les tournées régulières, un rapport est communiqué en fin de journée.",
    detail: [],
    note: null,
  },
]

const regles = [
  { ok: true, texte: "Médicaments préparés et conditionnés par votre pharmacien" },
  { ok: true, texte: "Produits de parapharmacie et hygiène" },
  { ok: true, texte: "Dispositifs médicaux légers (pansements, matériel de soin)" },
  { ok: true, texte: "Ordonnances déjà validées et médicaments dispensés" },
  { ok: false, texte: "Médicaments non préparés par un pharmacien" },
  { ok: false, texte: "Produits nécessitant une chaîne du froid non adaptée (TODO)" },
  { ok: false, texte: "Livraisons d'urgence immédiate — appelez le 15 ou le 18" },
  { ok: false, texte: "Gestion et collecte des ordonnances" },
]

export default function CommentCaMarchePage() {
  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)" }}
      >
        <div className="container-xl">
          <Badge variant="default" className="mb-4">Processus détaillé</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 max-w-2xl">
            Comment fonctionne la livraison ?
          </h1>
          <p className="text-xl text-[#475569] max-w-2xl leading-relaxed">
            Un processus transparent, sécurisé et respectueux de votre vie privée — de la
            demande à la livraison en Martinique.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="space-y-8">
            {etapesDetaillees.map((etape, i) => {
              const Icon = etape.icon
              return (
                <div key={i} className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 bg-[#0b5fff] rounded-2xl flex items-center justify-center shadow-md shadow-[#0b5fff]/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <Card className="flex-1 p-6">
                    <CardContent className="p-0">
                      <h2 className="text-xl font-bold text-[#0f172a] mb-3">{etape.titre}</h2>
                      <p className="text-[#475569] leading-relaxed mb-3">{etape.desc}</p>
                      {etape.detail.length > 0 && (
                        <ul className="space-y-1.5 mb-3">
                          {etape.detail.map((d, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#475569]">
                              <CheckCircle2 className="w-4 h-4 text-[#10b981] mt-0.5 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                      {etape.note && (
                        <div className="flex items-start gap-2 bg-[#eff6ff] rounded-lg p-3 text-sm text-[#1d4ed8]">
                          <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>{etape.note}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">
            Ce que nous livrons (et ce que nous ne livrons pas)
          </h2>
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {regles.map((r, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#f8fafc]">
                  {r.ok ? (
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${r.ok ? "text-[#374151]" : "text-[#6b7280]"}`}>
                    {r.texte}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">Délais indicatifs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-[#0b5fff]" />
                <h3 className="font-bold text-[#0f172a]">Livraisons planifiées</h3>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Généralement sous 24 à 48h après la demande, selon les tournées prévues
                dans votre commune. Les créneaux sont confirmés à la réservation.
              </p>
              <p className="text-xs text-[#94a3b8] mt-3">TODO : Préciser les délais exacts par zone</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="w-6 h-6 text-[#10b981]" />
                <h3 className="font-bold text-[#0f172a]">Tournées régulières</h3>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Pour les pharmacies partenaires ayant des tournées régulières, les livraisons
                sont intégrées au planning hebdomadaire ou journalier défini ensemble.
              </p>
            </Card>
          </div>
          <div className="mt-6 p-4 bg-[#fffbeb] rounded-xl border border-[#f59e0b]/30 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
            <p className="text-sm text-[#78716c]">
              AGC Logistics ne propose pas de livraison express immédiate. En cas d'urgence médicale,
              contactez le SAMU (15) ou rendez-vous aux urgences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">Des questions ?</h2>
          <p className="text-lg text-[#64748b] mb-8">
            Notre équipe est disponible pour vous expliquer le fonctionnement du service et
            vous aider à bénéficier de la livraison à domicile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Nous contacter <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/faq">Voir la FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

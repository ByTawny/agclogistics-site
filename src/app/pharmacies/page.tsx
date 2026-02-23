import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle2,
  ChevronRight,
  UserCheck,
  Clock,
  TrendingUp,
  Shield,
  Phone,
  FileText,
  Handshake,
  Truck,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Solution de livraison pour pharmacies — Partenaire B2B",
  description:
    "AGC Logistics est votre partenaire logistique pour la livraison à domicile de médicaments. Externalisez vos tournées, améliorez l'expérience patient. Martinique.",
}

const problemes = [
  {
    icon: Clock,
    titre: "Comptoir surchargé",
    desc: "Vos équipes passent du temps à gérer les demandes de livraison en plus des consultations au comptoir.",
  },
  {
    icon: UserCheck,
    titre: "Patients éloignés ou immobiles",
    desc: "Certains de vos patients ne peuvent plus se déplacer facilement mais ont besoin de leur traitement régulier.",
  },
  {
    icon: TrendingUp,
    titre: "Image et fidélisation",
    desc: "Proposer la livraison à domicile renforce la fidélité de vos patients et améliore l'image de votre officine.",
  },
]

const benefices = [
  "Déchargez votre équipe des livraisons, concentrez-vous sur le conseil pharmaceutique",
  "Fidélisez vos patients avec un service premium sans investissement logistique",
  "Couverture de toutes les zones de Martinique, y compris les communes éloignées",
  "Traçabilité complète de chaque livraison pour votre dossier qualité",
  "Interlocuteur unique et réactif pour toutes vos demandes",
  "Tarification adaptée au volume de livraisons",
]

const etapesOnboarding = [
  {
    num: "01",
    icon: Phone,
    titre: "Premier contact",
    desc: "Appelez-nous ou remplissez le formulaire de contact. Nous organisons un échange pour comprendre vos besoins.",
  },
  {
    num: "02",
    icon: FileText,
    titre: "Devis personnalisé",
    desc: "Sur base de votre volume et zone, nous vous soumettons une proposition tarifaire claire et sans engagement.",
  },
  {
    num: "03",
    icon: Handshake,
    titre: "Convention de partenariat",
    desc: "Nous formalisons notre collaboration par une convention précisant les modalités et engagements mutuels.",
  },
  {
    num: "04",
    icon: Truck,
    titre: "Démarrage des tournées",
    desc: "Vos premières livraisons sont organisées. Nous ajustons les tournées selon vos retours dans les premières semaines.",
  },
]

const faqPharmacie = [
  {
    q: "Comment fonctionne la prise en charge des commandes ?",
    a: "Vous préparez les commandes comme à votre habitude. AGC Logistics les collecte à votre officine aux horaires convenus et les achemine vers vos patients. Vous restez maître de la préparation et de la validation pharmaceutique.",
  },
  {
    q: "Quelles informations transmettez-vous à vos livreurs ?",
    a: "Nous transmettons uniquement les informations nécessaires à la livraison : nom du patient, adresse, créneau horaire. Aucune donnée médicale ou d'ordonnance n'est partagée avec nos livreurs.",
  },
  {
    q: "Que se passe-t-il si un patient est absent lors de la livraison ?",
    a: "Nous tentons de joindre le patient. En cas d'absence confirmée, le colis est retourné à votre officine et un nouveau créneau est planifié selon votre souhait.",
  },
  {
    q: "Quel est votre tarif ?",
    a: "Nos tarifs dépendent du volume de livraisons et des zones à couvrir. Contactez-nous pour un devis personnalisé sans engagement.",
  },
  {
    q: "Peut-on commencer avec un volume limité ?",
    a: "Oui. Nous nous adaptons à votre rythme, même pour de petits volumes initiaux. C'est aussi l'occasion de tester notre service avant de l'élargir.",
  },
]

export default function PharmaciesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)" }}
      >
        <div className="container-xl">
          <Badge variant="default" className="mb-4">Pour les pharmacies</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 max-w-2xl">
            Externalisez vos livraisons,{" "}
            <span className="text-[#0b5fff]">fidélisez vos patients</span>
          </h1>
          <p className="text-xl text-[#475569] max-w-2xl leading-relaxed mb-8">
            AGC Logistics prend en charge la livraison à domicile de vos médicaments et
            produits de santé. Vous gagnez du temps, vos patients bénéficient d&apos;un
            service de proximité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?type=pharmacie">
                Devenir pharmacie partenaire <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Demander un devis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problèmes résolus */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Les défis que nous résolvons pour vous
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              La livraison à domicile est un vrai besoin patient — mais la gérer en interne
              coûte du temps et des ressources.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemes.map((p) => {
              const Icon = p.icon
              return (
                <Card key={p.titre} className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#0b5fff]" />
                  </div>
                  <CardTitle className="mb-3">{p.titre}</CardTitle>
                  <p className="text-sm text-[#64748b] leading-relaxed">{p.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="accent" className="mb-4">Vos bénéfices</Badge>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                Ce que vous gagnez avec AGC Logistics
              </h2>
              <ul className="space-y-4">
                {benefices.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 shrink-0" />
                    <span className="text-[#475569]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Card className="p-8 bg-[#0b5fff] border-0 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold">Notre engagement</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-6">
                AGC Logistics respecte scrupuleusement la confidentialité des données patient.
                Nos livreurs ne sont jamais informés du contenu médical des colis.
                La relation pharmaceutique reste entre vous et votre patient.
              </p>
              <div className="space-y-2">
                {[
                  "Confidentialité des données",
                  "Respect du secret médical",
                  "Conformité RGPD",
                  "Traçabilité documentée",
                ].map((e) => (
                  <div key={e} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                    {e}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus d'onboarding */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Comment devenir pharmacie partenaire ?
            </h2>
            <p className="text-lg text-[#64748b] max-w-xl mx-auto">
              Un processus simple et rapide pour démarrer votre collaboration avec AGC Logistics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapesOnboarding.map((e, i) => {
              const Icon = e.icon
              return (
                <div key={e.num} className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-14 h-14 bg-[#0b5fff] rounded-2xl flex items-center justify-center shadow-md shadow-[#0b5fff]/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f172a] rounded-full text-white text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">{e.titre}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{e.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link href="/contact?type=pharmacie">
                Démarrer maintenant <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ B2B */}
      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">
            Questions des pharmaciens
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-2xl border border-[#e2e8f0] px-6">
            {faqPharmacie.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-py bg-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Prêt à simplifier vos livraisons ?
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Discutons de votre situation. Nous vous proposons un devis personnalisé sans engagement
            dans les 48h suivant votre demande.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/contact?type=pharmacie">
                Demander un devis <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

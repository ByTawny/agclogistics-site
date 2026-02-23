import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Shield,
  Clock,
  MapPin,
  CheckCircle2,
  Building2,
  UserCheck,
  HeartHandshake,
  PackageCheck,
  ClipboardList,
  Truck,
  Bell,
  ChevronRight,
  Star,
  Lock,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Livraison de médicaments à domicile en Martinique",
  description:
    "AGC Logistics assure la livraison à domicile de médicaments et produits de santé en Martinique. Service fiable, confidentiel et rapide pour pharmacies et patients.",
}

const garanties = [
  {
    icon: Shield,
    title: "Confidentialité totale",
    desc: "Vos données de santé ne transitent jamais par nos systèmes. Chaque livraison est traitée avec la plus grande discrétion.",
    color: "text-[#0b5fff]",
    bg: "bg-[#eff6ff]",
  },
  {
    icon: Clock,
    title: "Livraisons planifiées",
    desc: "Des créneaux de livraison définis pour que vous sachiez précisément quand attendre votre commande.",
    color: "text-[#10b981]",
    bg: "bg-[#ecfdf5]",
  },
  {
    icon: MapPin,
    title: "Couverture Martinique",
    desc: "Nous intervenons dans toutes les communes de la Martinique, du nord au sud, est et ouest.",
    color: "text-[#f59e0b]",
    bg: "bg-[#fffbeb]",
  },
  {
    icon: PackageCheck,
    title: "Traçabilité assurée",
    desc: "Chaque livraison est documentée. Les pharmacies partenaires bénéficient d'un suivi structuré de leurs tournées.",
    color: "text-[#8b5cf6]",
    bg: "bg-[#f5f3ff]",
  },
]

const audiences = [
  {
    icon: Building2,
    title: "Pharmacies",
    subtitle: "Partenaire B2B",
    desc: "Externalisez vos livraisons à domicile. Concentrez-vous sur votre cœur de métier pendant qu'AGC Logistics gère vos tournées et satisfait vos patients éloignés.",
    cta: "Devenir partenaire",
    href: "/pharmacies",
    color: "border-[#0b5fff]",
    badge: "Pour les pharmacies",
    badgeVariant: "default" as const,
  },
  {
    icon: UserCheck,
    title: "Patients & Seniors",
    subtitle: "Service B2C",
    desc: "Recevez vos médicaments directement chez vous, sans contrainte de déplacement. Un service pensé pour les personnes à mobilité réduite et les seniors.",
    cta: "Comprendre le service",
    href: "/patients",
    color: "border-[#10b981]",
    badge: "Pour les patients",
    badgeVariant: "accent" as const,
  },
  {
    icon: HeartHandshake,
    title: "Aidants & Structures",
    subtitle: "Coordination",
    desc: "Infirmiers à domicile, EHPAD, structures médico-sociales : coordonnez les livraisons pour vos patients avec traçabilité et flexibilité.",
    cta: "Nous contacter",
    href: "/contact",
    color: "border-[#8b5cf6]",
    badge: "Pour les aidants",
    badgeVariant: "secondary" as const,
  },
]

const etapes = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Demande de livraison",
    desc: "La pharmacie partenaire ou le patient contacte AGC Logistics pour planifier une livraison.",
  },
  {
    num: "02",
    icon: PackageCheck,
    title: "Préparation & collecte",
    desc: "Nous récupérons la commande préparée directement auprès de votre pharmacie habituelle.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Livraison à domicile",
    desc: "Votre commande est livrée à l'adresse convenue, dans le créneau horaire défini.",
  },
  {
    num: "04",
    icon: Bell,
    title: "Confirmation & suivi",
    desc: "La livraison est confirmée auprès de la pharmacie. Traçabilité assurée pour chaque tournée.",
  },
]

const temoignages = [
  {
    texte: "AGC Logistics nous a permis de proposer la livraison à domicile sans surcharger notre équipe. Nos patients éloignés sont ravis.",
    auteur: "Pharmacien partenaire",
    lieu: "Fort-de-France",
    note: 5,
  },
  {
    texte: "Ma mère de 78 ans reçoit ses médicaments chaque semaine sans avoir à se déplacer. Le service est ponctuel et discret.",
    auteur: "Aidant familial",
    lieu: "Le Lamentin",
    note: 5,
  },
  {
    texte: "Un partenaire sérieux pour la livraison. La coordination avec leur équipe est simple et efficace.",
    auteur: "Pharmacien partenaire",
    lieu: "Le Robert",
    note: 5,
  },
]

const faqItems = [
  {
    q: "Qui peut bénéficier du service de livraison AGC Logistics ?",
    a: "Notre service s'adresse aux patients dont la pharmacie est partenaire d'AGC Logistics, aux seniors et personnes à mobilité réduite, ainsi qu'aux aidants et structures de soins. Contactez-nous pour savoir si votre pharmacie fait partie de notre réseau.",
  },
  {
    q: "Les médicaments sur ordonnance peuvent-ils être livrés ?",
    a: "Oui, dans le cadre d'un partenariat avec votre pharmacie. La commande est préparée et validée par le pharmacien avant d'être confiée à AGC Logistics pour la livraison. Nous ne manipulons pas directement les ordonnances.",
  },
  {
    q: "Quelles zones sont couvertes en Martinique ?",
    a: "Nous couvrons l'ensemble des communes de la Martinique. Certaines zones éloignées peuvent nécessiter un délai supplémentaire. Consultez notre page Zones couvertes pour le détail.",
  },
  {
    q: "Comment sont protégées mes données personnelles ?",
    a: "AGC Logistics ne collecte que les informations strictement nécessaires à la livraison (nom, adresse, contact). Aucune donnée de santé n'est conservée par nos soins. Nous sommes conformes au RGPD.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8f5f0 50%, #f0f9ff 100%)",
        }}
        aria-labelledby="hero-title"
      >
        <div className="container-xl py-24 md:py-32">
          <div className="max-w-3xl">
            <Badge variant="default" className="mb-6">
              🇲🇶 Service en Martinique
            </Badge>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 leading-tight"
            >
              La livraison de médicaments{" "}
              <span className="text-[#0b5fff]">fiable et confidentielle</span>{" "}
              en Martinique
            </h1>
            <p className="text-xl text-[#475569] mb-8 leading-relaxed max-w-2xl">
              AGC Logistics accompagne les pharmacies et leurs patients pour la livraison à
              domicile de médicaments et produits de santé. Traçabilité, confidentialité,
              ponctualité — sur toute la Martinique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild>
                <Link href="/contact?type=pharmacie">
                  Devenir pharmacie partenaire
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/comment-ca-marche">Comment ça marche</Link>
              </Button>
            </div>
            {/* Social proof */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[#64748b]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Pharmacies partenaires en Martinique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Conforme RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Service local, équipe martiniquaise</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, #0b5fff 0%, transparent 70%)",
          }}
        />
      </section>

      {/* Garanties */}
      <section className="section-py bg-white" aria-labelledby="garanties-title">
        <div className="container-xl">
          <div className="text-center mb-14">
            <Badge variant="default" className="mb-4">
              Nos engagements
            </Badge>
            <h2 id="garanties-title" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Pourquoi choisir AGC Logistics ?
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Nous avons construit notre service autour de ce qui compte vraiment dans la
              logistique de santé : fiabilité, discrétion et couverture locale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {garanties.map((g) => {
              const Icon = g.icon
              return (
                <Card key={g.title} className="text-center p-6 hover:border-[#0b5fff]/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div
                      className={`w-12 h-12 ${g.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${g.color}`} />
                    </div>
                    <CardTitle className="text-lg">{g.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-[#64748b] leading-relaxed">{g.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section
        className="section-py"
        style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
        aria-labelledby="audiences-title"
      >
        <div className="container-xl">
          <div className="text-center mb-14">
            <Badge variant="accent" className="mb-4">
              Nos services
            </Badge>
            <h2 id="audiences-title" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Un service adapté à chaque besoin
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Que vous soyez pharmacien, patient ou aidant, AGC Logistics a une solution pensée
              pour vous.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((a) => {
              const Icon = a.icon
              return (
                <Card key={a.title} className={`border-t-4 ${a.color} p-6`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#f8fafc] rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0b5fff]" />
                      </div>
                      <Badge variant={a.badgeVariant}>{a.badge}</Badge>
                    </div>
                    <CardTitle>{a.title}</CardTitle>
                    <CardDescription className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
                      {a.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-[#475569] leading-relaxed mb-5">{a.desc}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={a.href}>
                        {a.cta}
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="section-py bg-white" aria-labelledby="process-title">
        <div className="container-xl">
          <div className="text-center mb-14">
            <Badge variant="default" className="mb-4">
              Processus simple
            </Badge>
            <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              De la demande à la livraison, un processus clair et transparent en 4 étapes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapes.map((etape, i) => {
              const Icon = etape.icon
              return (
                <div key={etape.num} className="relative text-center">
                  {/* Connector line */}
                  {i < etapes.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:block absolute top-7 left-1/2 w-full h-0.5 bg-[#e2e8f0]"
                    />
                  )}
                  <div className="relative">
                    <div className="w-14 h-14 bg-[#0b5fff] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#0b5fff]/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f172a] rounded-full text-white text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0f172a] mb-2">{etape.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{etape.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/comment-ca-marche">
                Voir le processus détaillé
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Zones couvertes — teaser */}
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #0b5fff 0%, #0044cc 100%)" }}
        aria-labelledby="zones-title"
      >
        <div className="container-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-xl">
              <Badge variant="white" className="mb-4">
                Couverture géographique
              </Badge>
              <h2 id="zones-title" className="text-3xl md:text-4xl font-bold mb-4">
                Toute la Martinique couverte
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Du nord au sud, d&apos;est en ouest — AGC Logistics intervient dans toutes les
                communes de la Martinique. Fort-de-France, Le Lamentin, Sainte-Marie, Le Marin,
                Rivière-Pilote et bien d&apos;autres.
              </p>
              <div className="flex items-center gap-3 text-blue-100 text-sm mb-6">
                <MapPin className="w-4 h-4 text-[#10b981]" />
                <span>Extension aux Antilles en cours — TODO</span>
              </div>
              <Button variant="accent" asChild>
                <Link href="/zones-couvertes">
                  Voir toutes les zones
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 shrink-0">
              {[
                "Fort-de-France",
                "Le Lamentin",
                "Schoelcher",
                "Le Robert",
                "Sainte-Marie",
                "Trinité",
                "Le François",
                "Le Vauclin",
                "Le Marin",
                "Rivière-Pilote",
                "Saint-Pierre",
                "Le Diamant",
              ].map((ville) => (
                <div
                  key={ville}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-sm text-white"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                  {ville}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-py bg-white" aria-labelledby="temoignages-title">
        <div className="container-xl">
          <div className="text-center mb-14">
            <Badge variant="accent" className="mb-4">
              Ils nous font confiance
            </Badge>
            <h2 id="temoignages-title" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Ce que disent nos partenaires
            </h2>
            <p className="text-lg text-[#64748b] max-w-xl mx-auto">
              Témoignages de pharmaciens et d&apos;aidants qui font confiance à AGC Logistics.
              <span className="text-xs text-[#94a3b8] block mt-1">(Prénoms et détails anonymisés)</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {temoignages.map((t, i) => (
              <Card key={i} className="p-6">
                <CardContent className="p-0">
                  <div className="flex mb-3" aria-label={`Note : ${t.note} étoiles sur 5`}>
                    {Array.from({ length: t.note }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-[#f59e0b] fill-[#f59e0b]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-[#475569] text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.texte}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#94a3b8]">
                    <div className="w-8 h-8 bg-[#f8fafc] rounded-full flex items-center justify-center">
                      <UserCheck className="w-4 h-4 text-[#64748b]" />
                    </div>
                    <div>
                      <div className="font-medium text-[#374151]">{t.auteur}</div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {t.lieu}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section
        className="section-py"
        style={{ background: "#f8fafc" }}
        aria-labelledby="faq-title"
      >
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Badge variant="default" className="mb-4">
                Questions fréquentes
              </Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
                Vous avez des questions ?
              </h2>
              <p className="text-lg text-[#64748b]">
                Voici les réponses aux questions les plus fréquentes.
              </p>
            </div>
            <Accordion type="single" collapsible className="bg-white rounded-2xl border border-[#e2e8f0] px-6">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/faq">
                  Voir toutes les questions
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="section-py bg-white"
        aria-labelledby="cta-title"
      >
        <div className="container-xl">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#0b5fff]" />
              </div>
              <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#10b981]" />
              </div>
              <div className="w-12 h-12 bg-[#fffbeb] rounded-xl flex items-center justify-center">
                <Phone className="w-6 h-6 text-[#f59e0b]" />
              </div>
            </div>
            <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Prêt à démarrer ?
            </h2>
            <p className="text-lg text-[#64748b] mb-8">
              Pharmacien, patient ou aidant — contactez-nous pour discuter de votre situation
              et découvrir comment AGC Logistics peut vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact?type=pharmacie">
                  Demander un devis pharmacie
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Poser une question</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Shield,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Home,
  UserCheck,
  AlertCircle,
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Livraison de médicaments à domicile — Pour les patients",
  description:
    "Recevez vos médicaments directement chez vous en Martinique. Service de livraison à domicile confidentiel pour patients, seniors et personnes à mobilité réduite.",
}

const avantages = [
  {
    icon: Home,
    titre: "Restez chez vous",
    desc: "Plus besoin de vous déplacer jusqu'à la pharmacie. Vos médicaments arrivent directement à votre domicile.",
  },
  {
    icon: Shield,
    titre: "Totalement confidentiel",
    desc: "Votre traitement reste entre vous et votre pharmacien. Nos livreurs ne savent pas ce qu'ils transportent.",
  },
  {
    icon: Clock,
    titre: "Créneau horaire choisi",
    desc: "Vous convenez d'un créneau de livraison qui vous convient. Pas de surprise, pas d'attente indéfinie.",
  },
  {
    icon: Heart,
    titre: "Pensé pour tous",
    desc: "Seniors, personnes à mobilité réduite, patients en convalescence — notre service s'adapte à votre situation.",
  },
]

const etapes = [
  {
    num: "01",
    titre: "Parlez-en à votre pharmacien",
    desc: "Demandez à votre pharmacie habituelle si elle fait partie du réseau AGC Logistics. C'est elle qui organise la livraison pour vous.",
  },
  {
    num: "02",
    titre: "Définissez votre créneau",
    desc: "Avec votre pharmacien ou directement avec AGC Logistics, vous choisissez le jour et l'heure qui vous conviennent.",
  },
  {
    num: "03",
    titre: "Votre pharmacien prépare la commande",
    desc: "La commande est préparée et validée par votre pharmacien, comme d'habitude. Nous prenons le relais ensuite.",
  },
  {
    num: "04",
    titre: "Réception à domicile",
    desc: "Notre livreur se présente dans le créneau convenu et vous remet votre commande en main propre ou en boîte aux lettres.",
  },
]

const reassurance = [
  "Votre pharmacie garde la maîtrise totale de votre traitement",
  "Aucune donnée médicale ne transite par nos systèmes",
  "Nos livreurs sont formés à la discrétion",
  "En cas de question, votre pharmacien reste votre interlocuteur principal",
  "Vous pouvez suspendre ou annuler la livraison à tout moment",
]

const faqPatient = [
  {
    q: "Comment savoir si ma pharmacie fait partie du réseau AGC Logistics ?",
    a: "Demandez directement à votre pharmacien. Si votre pharmacie n'est pas encore partenaire, nous pouvons la contacter à votre demande. Vous pouvez aussi nous appeler pour vérifier.",
  },
  {
    q: "Est-ce que je dois payer plus cher pour la livraison ?",
    a: "Les modalités de tarification dépendent de votre pharmacie partenaire. Certaines pharmacies incluent la livraison dans leur service, d'autres peuvent facturer un petit supplément. Renseignez-vous auprès de votre pharmacien.",
  },
  {
    q: "Mes médicaments sont-ils en sécurité pendant le transport ?",
    a: "Oui. Les colis sont remis directement par votre pharmacien à nos livreurs dans des emballages adaptés. Nous respectons les conditions de transport requises pour les produits de santé.",
  },
  {
    q: "Que se passe-t-il si je suis absent lors de la livraison ?",
    a: "Notre livreur tentera de vous contacter. Si vous êtes absent, le colis est retourné à votre pharmacie et un nouveau créneau sera planifié selon vos disponibilités.",
  },
  {
    q: "Puis-je recevoir mes médicaments sur ordonnance par ce service ?",
    a: "Oui, dans la mesure où votre pharmacie partenaire gère votre ordonnance comme à l'habitude. AGC Logistics assure uniquement le transport — la validation médicale et pharmaceutique reste du ressort de votre pharmacie.",
  },
]

export default function PatientsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 100%)" }}
      >
        <div className="container-xl">
          <Badge variant="accent" className="mb-4">Pour les patients</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4 max-w-2xl">
            Vos médicaments livrés chez vous,{" "}
            <span className="text-[#10b981]">en toute confidentialité</span>
          </h1>
          <p className="text-xl text-[#475569] max-w-2xl leading-relaxed mb-8">
            AGC Logistics assure la livraison à domicile de vos médicaments et produits de
            santé en Martinique. Un service pensé pour les patients qui ne peuvent pas
            toujours se déplacer jusqu'à leur pharmacie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Nous contacter <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/comment-ca-marche">Comment ça marche</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Un service fait pour vous
            </h2>
            <p className="text-lg text-[#64748b] max-w-xl mx-auto">
              Que vous soyez senior, en convalescence ou simplement éloigné de votre pharmacie,
              nous livrons votre traitement à la maison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a) => {
              const Icon = a.icon
              return (
                <Card key={a.titre} className="p-6 text-center hover:border-[#10b981]/30 transition-colors">
                  <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <CardTitle className="text-lg mb-2">{a.titre}</CardTitle>
                  <p className="text-sm text-[#64748b] leading-relaxed">{a.desc}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Comment recevoir votre livraison ?
            </h2>
            <p className="text-lg text-[#64748b] max-w-xl mx-auto">
              La démarche est simple. Votre pharmacien joue un rôle central dans le processus.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {etapes.map((e, i) => (
              <div key={e.num} className="flex items-start gap-5">
                <div className="w-10 h-10 bg-[#10b981] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div className="bg-white rounded-xl p-5 border border-[#e2e8f0] flex-1">
                  <h3 className="font-bold text-[#0f172a] mb-1">{e.titre}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réassurance */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="default" className="mb-4">Votre tranquillité d'esprit</Badge>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                  Votre santé, notre discrétion
                </h2>
                <ul className="space-y-3">
                  {reassurance.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#10b981] mt-0.5 shrink-0" />
                      <span className="text-[#475569] text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="p-6 bg-[#fffbeb] border-[#f59e0b]/30">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#0f172a] mb-2">Important</h3>
                    <p className="text-sm text-[#78716c] leading-relaxed">
                      AGC Logistics n&apos;est pas une pharmacie et ne délivre pas de médicaments
                      directement. Nous assurons uniquement le transport de commandes préparées
                      et validées par votre pharmacien.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#10b981] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#78716c] leading-relaxed">
                    Ne transmettez jamais d&apos;informations médicales sensibles via un
                    formulaire en ligne. Pour toute question de santé, contactez directement
                    votre pharmacien.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Patients */}
      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-8 text-center">
            Vos questions, nos réponses
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-2xl border border-[#e2e8f0] px-6">
            {faqPatient.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#ecfdf5] rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#10b981]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Une question ? Appelez-nous.
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Notre équipe est disponible pour répondre à toutes vos questions et vous aider
            à bénéficier du service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Nous contacter <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/faq">Voir la FAQ complète</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

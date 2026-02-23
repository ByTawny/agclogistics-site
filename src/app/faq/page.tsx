import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronRight, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur la livraison de médicaments",
  description:
    "Réponses aux questions fréquentes sur la livraison de médicaments à domicile en Martinique par AGC Logistics.",
}

const faqCategories = [
  {
    cat: "Le service",
    items: [
      {
        q: "Qu'est-ce qu'AGC Logistics ?",
        a: "AGC Logistics est une société de logistique spécialisée dans la livraison à domicile de médicaments et produits de santé en Martinique. Nous travaillons en partenariat avec des pharmacies locales pour acheminer les commandes préparées directement chez les patients.",
      },
      {
        q: "AGC Logistics est-il une pharmacie ?",
        a: "Non. AGC Logistics est un prestataire logistique et non une pharmacie. Nous ne dispensons pas de médicaments et ne gérons pas les ordonnances. Nous assurons uniquement le transport des commandes préparées et validées par votre pharmacien.",
      },
      {
        q: "Dans quelles zones intervenez-vous ?",
        a: "Nous couvrons l'ensemble des communes de la Martinique, du nord au sud. Pour les zones éloignées, des délais supplémentaires peuvent s'appliquer. Consultez notre page Zones couvertes pour le détail.",
      },
    ],
  },
  {
    cat: "Pour les patients",
    items: [
      {
        q: "Comment demander une livraison à domicile ?",
        a: "La première étape est de vérifier si votre pharmacie habituelle est partenaire d'AGC Logistics. Si c'est le cas, votre pharmacien organise la livraison pour vous. Sinon, contactez-nous — nous pouvons proposer un partenariat à votre pharmacie.",
      },
      {
        q: "Est-ce que les médicaments sur ordonnance peuvent être livrés ?",
        a: "Oui, dans le cadre du partenariat avec votre pharmacie. L'ordonnance est gérée par votre pharmacien comme d'habitude. AGC Logistics assure uniquement le transport après préparation et validation pharmaceutique.",
      },
      {
        q: "Combien coûte la livraison ?",
        a: "Les tarifs dépendent de votre pharmacie partenaire. Certaines pharmacies incluent la livraison dans leurs services, d'autres peuvent facturer un supplément. Renseignez-vous directement auprès de votre pharmacien.",
      },
      {
        q: "Puis-je choisir mon créneau horaire ?",
        a: "Oui. Lors de la mise en place de votre livraison, un créneau horaire est défini selon les disponibilités de votre secteur. Nous faisons notre possible pour respecter vos préférences.",
      },
      {
        q: "Que se passe-t-il si je suis absent lors de la livraison ?",
        a: "Notre livreur tente de vous contacter par téléphone. Si vous êtes absent, le colis est retourné à votre pharmacie et un nouveau créneau est planifié. Vous pouvez aussi indiquer à l'avance qu'une remise en boîte aux lettres est possible.",
      },
    ],
  },
  {
    cat: "Pour les pharmacies",
    items: [
      {
        q: "Comment devenir pharmacie partenaire ?",
        a: "Contactez-nous via le formulaire ou par téléphone. Nous organisons un échange pour comprendre vos besoins, puis vous soumettons un devis personnalisé. La mise en place est rapide et sans investissement de votre part.",
      },
      {
        q: "Quels engagements prenez-vous sur la confidentialité ?",
        a: "AGC Logistics s'engage à ne transmettre à ses livreurs que les informations strictement nécessaires à la livraison (nom, adresse, créneau). Aucune information sur le contenu médical n'est partagée. Nous sommes conformes au RGPD.",
      },
      {
        q: "Quel est le minimum de livraisons requis pour un partenariat ?",
        a: "Aucun minimum strict n'est imposé. Nous nous adaptons à votre volume, même pour débuter avec quelques livraisons par semaine. Contactez-nous pour en discuter.",
      },
    ],
  },
  {
    cat: "RGPD et confidentialité",
    items: [
      {
        q: "Quelles données AGC Logistics collecte-t-il ?",
        a: "Nous collectons uniquement les données nécessaires à l'exécution du service : nom, adresse de livraison, numéro de téléphone et commune. Aucune donnée de santé, d'ordonnance ou médicale n'est stockée par nos soins.",
      },
      {
        q: "Mes données sont-elles partagées avec des tiers ?",
        a: "Non. Vos données ne sont pas vendues ni transmises à des tiers à des fins commerciales. Elles sont utilisées uniquement dans le cadre de l'exécution de votre livraison.",
      },
      {
        q: "Comment exercer mes droits RGPD ?",
        a: "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en nous contactant à l'adresse indiquée dans notre Politique de confidentialité.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      <section
        className="section-py"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)" }}
      >
        <div className="container-xl max-w-3xl mx-auto text-center">
          <Badge variant="default" className="mb-4">Aide et questions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Questions fréquentes
          </h1>
          <p className="text-xl text-[#475569] leading-relaxed">
            Retrouvez les réponses aux questions les plus souvent posées sur notre service
            de livraison de médicaments en Martinique.
          </p>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container-xl max-w-3xl mx-auto">
          <div className="space-y-10">
            {faqCategories.map((cat) => (
              <div key={cat.cat}>
                <h2 className="text-xl font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#0b5fff] rounded-full" />
                  {cat.cat}
                </h2>
                <Accordion type="single" collapsible className="bg-white rounded-2xl border border-[#e2e8f0] px-6">
                  {cat.items.map((item, i) => (
                    <AccordionItem key={i} value={`${cat.cat}-${i}`}>
                      <AccordionTrigger>{item.q}</AccordionTrigger>
                      <AccordionContent>{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: "#f8fafc" }}>
        <div className="container-xl max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-6 h-6 text-[#0b5fff]" />
          </div>
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-lg text-[#64748b] mb-8">
            Notre équipe est disponible pour répondre à vos questions spécifiques.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Poser une question <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

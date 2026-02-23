import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'AGC Logistics, société de livraison de médicaments en Martinique.",
}

export default function MentionsLegalesPage() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl max-w-3xl mx-auto">
        <Badge variant="default" className="mb-4">Informations légales</Badge>
        <h1 className="text-4xl font-bold text-[#0f172a] mb-8">Mentions légales</h1>

        <div className="prose prose-slate max-w-none space-y-8 text-[#475569]">

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Éditeur du site</h2>
            <p className="leading-relaxed">
              <strong>Raison sociale :</strong> AGC Logistics<br />
              <strong>Forme juridique :</strong> TODO — SARL / SAS / EURL (à préciser)<br />
              <strong>SIRET :</strong> TODO — XX XXX XXX XXXXX<br />
              <strong>Siège social :</strong> TODO — Adresse complète, Martinique (972)<br />
              <strong>Téléphone :</strong> TODO — +596 6XX XXX XXX<br />
              <strong>Email :</strong> contact@agclogistics.mq (TODO — à confirmer)<br />
              <strong>Directeur de la publication :</strong> TODO — Nom du responsable légal
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Hébergement</h2>
            <p className="leading-relaxed">
              Ce site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723 — États-Unis<br />
              <a href="https://vercel.com" className="text-[#0b5fff] underline">vercel.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Propriété intellectuelle</h2>
            <p className="leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, logos, structure) est la propriété
              exclusive d&apos;AGC Logistics, sauf mention contraire. Toute reproduction, même partielle,
              est interdite sans autorisation préalable écrite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Responsabilité</h2>
            <p className="leading-relaxed">
              AGC Logistics s&apos;efforce de maintenir les informations publiées sur ce site à jour et
              exactes. Toutefois, nous ne saurions être tenus responsables des erreurs, omissions
              ou résultats qui pourraient être obtenus par un mauvais usage de ces informations.
            </p>
            <p className="leading-relaxed mt-3">
              Le contenu de ce site est fourni à titre informatif uniquement et ne constitue pas
              un conseil médical ou pharmaceutique. Consultez toujours un professionnel de santé
              qualifié pour vos questions médicales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Données personnelles</h2>
            <p className="leading-relaxed">
              Le traitement de vos données personnelles est décrit dans notre{" "}
              <a href="/politique-confidentialite" className="text-[#0b5fff] underline">
                Politique de confidentialité
              </a>
              . Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
              et de suppression de vos données.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Cookies</h2>
            <p className="leading-relaxed">
              Ce site utilise uniquement des cookies techniques strictement nécessaires à son
              fonctionnement. Aucun cookie publicitaire ou de tracking tiers n&apos;est déposé sans
              votre consentement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">7. Droit applicable</h2>
            <p className="leading-relaxed">
              Le présent site et ses mentions légales sont soumis au droit français.
              Tout litige relatif à l&apos;utilisation de ce site sera soumis à la compétence
              des juridictions françaises.
            </p>
          </div>

          <p className="text-sm text-[#94a3b8] border-t border-[#e2e8f0] pt-6">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>
      </div>
    </section>
  )
}

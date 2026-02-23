import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité d'AGC Logistics. Comment nous traitons vos données personnelles, vos droits RGPD.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl max-w-3xl mx-auto">
        <Badge variant="default" className="mb-4">Protection des données</Badge>
        <h1 className="text-4xl font-bold text-[#0f172a] mb-2">Politique de confidentialité</h1>
        <p className="text-[#64748b] mb-8">Conforme au Règlement Général sur la Protection des Données (RGPD)</p>

        <div className="space-y-8 text-[#475569]">
          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">1. Responsable du traitement</h2>
            <p className="leading-relaxed">
              AGC Logistics, dont le siège social est situé à <strong>TODO — Adresse, Martinique</strong>,
              est responsable du traitement de vos données personnelles collectées via ce site.
              Contact : <a href="mailto:contact@agclogistics.mq" className="text-[#0b5fff] underline">contact@agclogistics.mq</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">2. Données collectées</h2>
            <p className="leading-relaxed mb-3">
              Nous collectons uniquement les données strictement nécessaires à la prestation de service :
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li><strong>Via le formulaire de contact :</strong> nom, email, téléphone (optionnel), commune, message</li>
              <li><strong>Via la prestation de livraison :</strong> nom, adresse de livraison, numéro de téléphone</li>
            </ul>
            <div className="mt-4 p-4 bg-[#ecfdf5] rounded-xl border border-[#10b981]/20 text-sm text-[#065f46]">
              <strong>Important :</strong> AGC Logistics ne collecte, ne stocke et ne traite aucune
              donnée de santé (ordonnances, diagnostics, médicaments prescrits). Ces informations
              restent entre vous et votre pharmacien.
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">3. Finalités du traitement</h2>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Traitement et suivi de votre demande de contact</li>
              <li>Exécution du service de livraison commandé</li>
              <li>Communication relative à votre livraison</li>
              <li>Amélioration de nos services (données agrégées anonymisées)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">4. Base légale</h2>
            <p className="leading-relaxed">
              Le traitement de vos données repose sur l&apos;exécution du contrat de service (livraison)
              et votre consentement pour les demandes de contact. Nous ne traitons vos données
              que dans la mesure nécessaire à ces finalités.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">5. Durée de conservation</h2>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Données de contact : 3 ans à compter du dernier contact</li>
              <li>Données de livraison : 5 ans (obligations comptables et légales)</li>
              <li>Données supprimées sur demande dans les délais légaux</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">6. Partage des données</h2>
            <p className="leading-relaxed mb-3">
              Vos données ne sont pas vendues ni partagées à des fins commerciales. Elles peuvent être
              transmises à :
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Notre prestataire d&apos;hébergement (Vercel Inc.) — dans le cadre de l&apos;hébergement du site</li>
              <li>Notre prestataire d&apos;envoi d&apos;emails (Resend Inc.) — pour la réception de vos messages</li>
              <li>La pharmacie partenaire concernée — uniquement les informations de livraison</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">7. Sécurité</h2>
            <p className="leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte ou altération.
              Les communications entre votre navigateur et notre site sont chiffrées (HTTPS/TLS).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">8. Vos droits</h2>
            <p className="leading-relaxed mb-3">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&laquo; droit à l&apos;oubli &raquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de limitation du traitement</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Pour exercer vos droits, contactez-nous à :{" "}
              <a href="mailto:contact@agclogistics.mq" className="text-[#0b5fff] underline">
                contact@agclogistics.mq
              </a>
              . Nous répondrons dans un délai de 30 jours.
            </p>
            <p className="leading-relaxed mt-3">
              Vous pouvez également adresser une réclamation à la{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b5fff] underline"
              >
                CNIL
              </a>{" "}
              si vous estimez que vos droits ne sont pas respectés.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0f172a] mb-3">9. Cookies</h2>
            <p className="leading-relaxed">
              Ce site n&apos;utilise pas de cookies publicitaires ou de suivi comportemental.
              Seuls des cookies techniques strictement nécessaires au fonctionnement du site
              peuvent être déposés (session, sécurité). TODO : si analytics ajouté (Plausible / GA4),
              mettre à jour cette section.
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

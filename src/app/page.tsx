import Link from "next/link"
import Image from "next/image"
import {
  AlertCircle,
  Clock,
  ShieldCheck,
  Truck,
  ClipboardList,
  BarChart3,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Package,
  FileCheck,
  Thermometer,
} from "lucide-react"
import { CONTACT_PHONE } from "@/lib/constants"

/* ─── Data ────────────────────────────────────────────────────────── */

const problems = [
  {
    icon: AlertCircle,
    title: "Ruptures de stock critiques",
    desc: "Les pharmacies font face à des délais d'approvisionnement imprévisibles qui mettent en danger la continuité des soins.",
  },
  {
    icon: Clock,
    title: "Délais de livraison non maîtrisés",
    desc: "Sans partenaire logistique dédié, la chaîne du médicament est exposée à des retards inacceptables en milieu de soins.",
  },
  {
    icon: ShieldCheck,
    title: "Exigences réglementaires strictes",
    desc: "Le transport pharmaceutique impose des protocoles précis (chaîne du froid, traçabilité BPD) difficiles à gérer en interne.",
  },
]

const solutions = [
  {
    icon: Truck,
    title: "Livraison express sécurisée",
    desc: "Transport dédié aux médicaments et dispositifs médicaux avec respect de la chaîne du froid et des délais garantis.",
    color: "var(--cyan)",
  },
  {
    icon: ClipboardList,
    title: "Traçabilité en temps réel",
    desc: "Suivi numérique complet de chaque livraison — de la pharmacie jusqu'au patient — conforme aux BPD françaises.",
    color: "var(--coral)",
  },
  {
    icon: BarChart3,
    title: "Reporting & conformité",
    desc: "Tableaux de bord et rapports d'activité pour vos audits réglementaires, disponibles à tout moment.",
    color: "var(--cyan)",
  },
]

const steps = [
  {
    num: "01",
    icon: PhoneCall,
    title: "Prise de commande",
    desc: "La pharmacie partenaire transmet sa commande via notre interface ou par téléphone.",
  },
  {
    num: "02",
    icon: Package,
    title: "Préparation sécurisée",
    desc: "Colisage contrôlé avec respect de la chaîne du froid et des conditions de stockage requises.",
  },
  {
    num: "03",
    icon: Truck,
    title: "Livraison en Martinique",
    desc: "Nos livreurs certifiés acheminent les produits dans les délais convenus, partout sur l'île.",
  },
  {
    num: "04",
    icon: FileCheck,
    title: "Preuve de livraison",
    desc: "Signature électronique et rapport de traçabilité envoyés automatiquement à la pharmacie.",
  },
]

const stats = [
  { value: "98%", label: "Taux de livraisons dans les délais" },
  { value: "<4h", label: "Délai moyen de livraison express" },
  { value: "100%", label: "Conformité BPD sur chaque livraison" },
]

const credentials = [
  "Opérateur agréé logistique pharmaceutique en Martinique",
  "Respect strict des Bonnes Pratiques de Distribution (BPD)",
  "Véhicules équipés et température contrôlée",
  "Formation réglementaire continue des équipes",
  "Couverture totale de la Martinique (972)",
]

const zones = [
  "Fort-de-France", "Le Lamentin", "Schoelcher", "Le Robert",
  "Trinité", "Sainte-Marie", "Le François", "Le Vauclin",
  "Rivière-Pilote", "Le Marin", "Les Trois-Îlets", "Le Diamant",
  "Sainte-Anne", "Sainte-Luce", "Ducos", "Rivière-Salée",
  "Saint-Pierre", "Le Carbet", "Case-Pilote", "Basse-Pointe",
]

const testimonials = [
  {
    quote: "AGC Logistics a transformé notre gestion des livraisons. Fini les retards, fini le stress. La traçabilité est irréprochable.",
    name: "Pharmacien partenaire",
    location: "Fort-de-France",
  },
  {
    quote: "Nous livrons des produits thermosensibles. Avoir un partenaire qui maîtrise la chaîne du froid est indispensable. AGC est notre solution.",
    name: "Responsable approvisionnement",
    location: "Le Lamentin",
  },
  {
    quote: "La réactivité et le professionnalisme de l'équipe AGC nous permettent de nous concentrer sur notre cœur de métier : le soin.",
    name: "Directeur de pharmacie",
    location: "Le Robert",
  },
]

/* ─── Page ────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="bg-hero section-py pt-32 md:pt-40 overflow-hidden relative">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(26,181,213,0.10) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="container-xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <div className="badge badge-cyan mb-6">
                <MapPin className="w-3 h-3" />
                Martinique · Logistique pharmaceutique
              </div>

              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#0B3A50] mb-6"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                La livraison pharmaceutique{" "}
                <span style={{ color: "var(--cyan)" }}>rapide & conforme</span>{" "}
                en Martinique
              </h1>

              <p className="text-lg text-[#374151] mb-8 max-w-xl leading-relaxed">
                AGC Logistics assure la distribution sécurisée de médicaments et dispositifs médicaux
                pour les pharmacies et établissements de santé de Martinique — traçabilité complète,
                chaîne du froid maîtrisée, conformité BPD garantie.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
                  Demander un devis gratuit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/comment-ca-marche" className="btn btn-outline text-base px-8 py-4">
                  Voir comment ça marche
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10 flex-wrap">
                {["Livraison J+0", "Chaîne du froid", "Conforme BPD"].map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-sm text-[#374151]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: "var(--cyan)" }} />
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div className="hidden lg:flex justify-center items-center fade-up">
              <div
                className="relative w-full max-w-md aspect-square rounded-3xl flex items-center justify-center float"
                style={{
                  background: "linear-gradient(135deg, rgba(26,181,213,0.08) 0%, rgba(11,58,80,0.05) 100%)",
                  border: "1px solid rgba(26,181,213,0.15)",
                }}
              >
                <svg
                  viewBox="0 0 400 400"
                  width="320"
                  height="320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M200 80 C160 85 130 110 115 140 C100 170 105 195 110 215 C115 235 125 250 140 265 C155 280 170 295 180 310 C190 325 195 340 200 350 C205 340 215 320 230 305 C245 290 265 278 275 260 C285 242 290 220 285 198 C280 176 270 158 255 142 C240 126 220 95 200 80Z"
                    fill="rgba(26,181,213,0.12)"
                    stroke="rgba(26,181,213,0.4)"
                    strokeWidth="2"
                  />
                  {[
                    { cx: 185, cy: 155, label: "Fort-de-France" },
                    { cx: 220, cy: 185, label: "Lamentin" },
                    { cx: 240, cy: 230, label: "François" },
                    { cx: 175, cy: 270, label: "Marin" },
                    { cx: 160, cy: 200, label: "Trois-Îlets" },
                  ].map(({ cx, cy, label }) => (
                    <g key={label}>
                      <circle cx={cx} cy={cy} r="8" fill="var(--cyan)" opacity="0.9" />
                      <circle cx={cx} cy={cy} r="14" fill="var(--cyan)" opacity="0.2" />
                      <circle cx={cx} cy={cy} r="20" fill="var(--cyan)" opacity="0.08" />
                    </g>
                  ))}
                  <g transform="translate(178, 165)">
                    <rect x="0" y="8" width="32" height="18" rx="3" fill="#0B3A50" />
                    <rect x="22" y="4" width="10" height="12" rx="2" fill="#0B3A50" />
                    <circle cx="8" cy="28" r="4" fill="#1AB5D5" />
                    <circle cx="24" cy="28" r="4" fill="#1AB5D5" />
                  </g>
                </svg>

                <div
                  className="absolute -bottom-4 -right-4 card px-5 py-3 flex items-center gap-3"
                  style={{ boxShadow: "0 8px 30px rgba(26,181,213,0.2)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(26,181,213,0.12)" }}
                  >
                    <Thermometer className="w-5 h-5" style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B3A50]">Chaîne du froid</div>
                    <div className="text-xs text-[#6B7280]">Contrôlée & certifiée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLÈME ──────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="badge badge-coral mb-5">Le problème</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A50] mb-4">
              La chaîne du médicament a besoin
              <br className="hidden md:block" /> d&apos;un maillon fiable
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
              En Martinique, la logistique pharmaceutique reste un défi quotidien pour les acteurs de santé.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {problems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(242,99,85,0.10)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "var(--coral)" }} />
                </div>
                <h3 className="text-lg font-bold text-[#0B3A50] mb-3">{title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTION ──────────────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="badge badge-cyan mb-5">Notre solution</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A50] mb-4">
              Une logistique pharmaceutique
              <br className="hidden md:block" /> pensée pour la Martinique
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
              AGC Logistics prend en charge toute la chaîne — de la pharmacie jusqu&apos;au patient —
              avec rigueur et traçabilité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="card p-8 group">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "rgba(26,181,213,0.08)", border: "1.5px solid rgba(26,181,213,0.2)" }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0B3A50] mb-3">{title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-outline">
              Découvrir tous nos services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. FONCTIONNEMENT ────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="text-center mb-16">
            <div className="badge badge-navy mb-5">Processus</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A50] mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-[#6B7280] max-w-lg mx-auto text-lg">
              Un process rodé en 4 étapes pour garantir la livraison de vos produits pharmaceutiques.
            </p>
          </div>

          {/* Timeline desktop */}
          <div className="hidden md:block timeline-wrap">
            {steps.map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="timeline-step">
                <div className="timeline-dot">
                  <span className="text-sm font-bold">{num}</span>
                </div>
                <div className="mt-4 text-center px-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "rgba(26,181,213,0.08)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--cyan)" }} />
                  </div>
                  <h3 className="font-bold text-[#0B3A50] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline mobile — vertical */}
          <div className="md:hidden flex flex-col gap-6">
            {steps.map(({ num, icon: Icon, title, desc }) => (
              <div key={num} className="flex gap-5 items-start">
                <div className="timeline-dot flex-shrink-0">
                  <span className="text-sm font-bold">{num}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4" style={{ color: "var(--cyan)" }} />
                    <h3 className="font-bold text-[#0B3A50]">{title}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/comment-ca-marche" className="btn btn-outline">
              En savoir plus sur le processus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. CHIFFRES CLÉS ─────────────────────────────────────────── */}
      <section className="section-py bg-navy-gradient text-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <div
              className="badge mb-5"
              style={{ background: "rgba(26,181,213,0.2)", color: "#7DE3F5" }}
            >
              Chiffres clés
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Des performances qui parlent d&apos;elles-mêmes
            </h2>
            <p className="max-w-lg mx-auto text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
              AGC Logistics, c&apos;est la rigueur au service de la santé — mesurée, prouvée et certifiée.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-10 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="stat-number mb-3" style={{ color: "var(--cyan)" }}>
                  {value}
                </div>
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CRÉDIBILITÉ / CONFORMITÉ ──────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-green mb-6">Conformité & Réglementation</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A50] mb-6">
                Une activité encadrée et certifiée
              </h2>
              <p className="text-[#374151] text-lg mb-8 leading-relaxed">
                AGC Logistics opère dans le strict respect des réglementations pharmaceutiques françaises
                et européennes. Notre engagement : zéro compromis sur la sécurité des produits de santé.
              </p>

              <ul className="flex flex-col gap-4">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#1E8E5A" }}
                    />
                    <span className="text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <div
                className="w-full max-w-sm rounded-3xl p-10 text-white text-center"
                style={{
                  background: "linear-gradient(145deg, #0B3A50 0%, #0D5870 100%)",
                  boxShadow: "0 20px 60px rgba(11,58,80,0.25)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ background: "rgba(26,181,213,0.15)" }}
                >
                  <ShieldCheck className="w-10 h-10" style={{ color: "var(--cyan)" }} />
                </div>
                <h3 className="text-2xl font-extrabold mb-3">BPD Certifié</h3>
                <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Bonnes Pratiques de Distribution pharmaceutique respectées à chaque étape
                  de la chaîne logistique.
                </p>
                <div
                  className="rounded-xl p-4 text-left"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    className="flex justify-between text-xs mb-2"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span>Taux de conformité</span>
                    <span style={{ color: "var(--cyan)" }}>100%</span>
                  </div>
                  <div
                    className="w-full h-2 rounded-full"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: "100%", background: "var(--cyan)" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. ZONES COUVERTES ───────────────────────────────────────── */}
      <section className="section-py" style={{ background: "var(--bg)" }}>
        <div className="container-xl text-center">
          <div className="badge badge-cyan mb-5">
            <MapPin className="w-3 h-3" />
            Zones de livraison
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A50] mb-4">
            Toute la Martinique couverte
          </h2>
          <p className="text-[#6B7280] max-w-lg mx-auto text-lg mb-10">
            Du nord au sud, de Fort-de-France aux communes les plus reculées, AGC Logistics livre
            partout sur l&apos;île.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {zones.map((zone) => (
              <span key={zone} className="badge badge-navy">
                {zone}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/zones-couvertes" className="btn btn-outline">
              Voir la carte complète
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. TÉMOIGNAGES ───────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-xl">
          <div className="text-center mb-14">
            <div className="badge badge-navy mb-5">Pharmacies partenaires</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B3A50] mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-[#6B7280] max-w-lg mx-auto text-lg">
              Les pharmacies et établissements de santé de Martinique choisissent AGC Logistics
              pour leur distribution pharmaceutique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, location }) => (
              <div key={name} className="card p-8 flex flex-col gap-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M8 1L10 6H15L11 9.5L12.5 15L8 12L3.5 15L5 9.5L1 6H6L8 1Z"
                        fill="#F59E0B"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-[#374151] italic leading-relaxed flex-1">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-[#0B3A50] text-sm">{name}</div>
                  <div className="text-xs text-[#6B7280] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA FINAL ─────────────────────────────────────────────── */}
      <section className="section-py bg-navy-gradient text-white">
        <div className="container-xl text-center">
          <div
            className="badge mb-6"
            style={{ background: "rgba(242,99,85,0.2)", color: "#FAA59D" }}
          >
            Prêt à démarrer ?
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Sécurisez votre chaîne
            <br className="hidden md:block" /> logistique pharmaceutique
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            Contactez AGC Logistics pour un audit gratuit de votre chaîne de distribution
            et un devis personnalisé sous 24h.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="btn btn-white-outline text-base px-8 py-4"
            >
              Nous appeler directement
            </a>
          </div>

          <p className="text-xs mt-8" style={{ color: "rgba(255,255,255,0.35)" }}>
            Réponse garantie sous 24h — Devis gratuit et sans engagement
          </p>
        </div>
      </section>
    </>
  )
}

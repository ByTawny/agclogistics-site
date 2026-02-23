import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield,
  Clock,
  MapPin,
  CheckCircle,
  AlertTriangle,
  FileText,
  Truck,
  PackageCheck,
  ClipboardList,
  Bell,
  ArrowRight,
  Star,
  Lock,
  Award,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AGC Logistics – Logistique pharmaceutique fiable et traçable en Martinique",
  description:
    "AGC Logistics assure la livraison sécurisée de médicaments et dispositifs médicaux en Martinique. Traçabilité en temps réel, conformité réglementaire, service B2B pour pharmacies et cliniques.",
}

// ── Section : Hero ──────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-hero">
      {/* Décoration fond */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #1F6FEB 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #1E8E5A 0%, transparent 70%)" }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="animate-fade-in-up">
            <span className="badge-pill badge-blue mb-6 inline-flex">
              <Star className="w-3.5 h-3.5" />
              Logistique pharmaceutique Martinique
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] leading-[1.1] mb-6">
              La logistique pharmaceutique,{" "}
              <span style={{ color: "#1F6FEB" }}>fiable</span> et{" "}
              <span style={{ color: "#1E8E5A" }}>traçable.</span>
            </h1>

            <p className="text-lg text-[#4B5563] mb-10 max-w-lg leading-relaxed">
              AGC Logistics sécurise la chaîne de distribution de vos médicaments et
              dispositifs médicaux en Martinique — avec traçabilité complète et
              conformité réglementaire garantie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un rendez-vous
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Découvrir nos services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              {[
                { icon: Shield, label: "100% traçable" },
                { icon: CheckCircle, label: "Conformité réglementaire" },
                { icon: Clock, label: "< 24h de délai" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-[#6B7280]">
                  <Icon className="w-4 h-4 text-[#1E8E5A]" />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration / carte Martinique stylisée */}
          <div className="hidden lg:flex justify-center items-center animate-float">
            <div
              className="relative rounded-2xl p-8 shadow-2xl"
              style={{
                background: "white",
                border: "1px solid #E2E8F0",
                boxShadow: "0 24px 80px rgba(31,111,235,0.15)",
              }}
            >
              {/* Fausse carte */}
              <div
                className="w-[340px] h-[280px] rounded-xl flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)" }}
              >
                {/* SVG Martinique simplifié */}
                <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-30 absolute" fill="none">
                  <path
                    d="M100 20 C120 25, 160 60, 155 100 C150 140, 120 170, 100 175 C80 170, 50 145, 45 110 C40 75, 60 30, 100 20 Z"
                    fill="#1F6FEB"
                  />
                </svg>

                {/* Pins GPS */}
                {[
                  { x: "30%", y: "25%", delay: "0s" },
                  { x: "60%", y: "45%", delay: "0.5s" },
                  { x: "45%", y: "65%", delay: "1s" },
                  { x: "70%", y: "30%", delay: "1.5s" },
                ].map((pin, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: pin.x, top: pin.y, animationDelay: pin.delay }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "#1F6FEB", boxShadow: "0 0 0 6px rgba(31,111,235,0.2)" }}
                    >
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}

                {/* Camion */}
                <div
                  className="absolute bottom-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "#0B3C5D" }}
                >
                  <Truck className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Stats overlay */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { value: "98%", label: "Dans les délais" },
                  { value: "24h", label: "Délai moyen" },
                  { value: "100%", label: "Traçabilité" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center p-2 rounded-lg"
                    style={{ background: "#F5F7FA" }}
                  >
                    <div className="text-lg font-bold text-[#0B3C5D]">{s.value}</div>
                    <div className="text-xs text-[#6B7280]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Section : Problème ──────────────────────────────────────────
function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Manque de traçabilité",
      desc: "Sans système de suivi dédié, la chaîne du médicament est exposée à des ruptures d'information critiques pouvant engager votre responsabilité.",
      color: "#EF4444",
      bg: "#FEF2F2",
    },
    {
      icon: Clock,
      title: "Retards de livraison",
      desc: "Des délais non maîtrisés fragilisent la continuité des soins, détériorent la satisfaction patient et nuisent à votre réputation.",
      color: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      icon: FileText,
      title: "Charge administrative",
      desc: "La gestion interne des tournées mobilise des ressources humaines précieuses au détriment de votre cœur de métier.",
      color: "#6B7280",
      bg: "#F9FAFB",
    },
  ]

  return (
    <section className="section-py" style={{ background: "#F5F7FA" }}>
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="badge-pill badge-blue mb-4 inline-flex">Le constat</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Les défis de la logistique pharmaceutique
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
            Sans prestataire spécialisé, la distribution de médicaments expose
            pharmacies et cliniques à des risques opérationnels et réglementaires.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="card-premium p-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: bg }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mb-3">{title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section : Solution ──────────────────────────────────────────
function SolutionSection() {
  const solutions = [
    {
      icon: PackageCheck,
      title: "Livraison sécurisée",
      desc: "Transport dédié aux produits pharmaceutiques avec respect de la chaîne du froid et des conditions réglementaires de transport.",
      color: "#1F6FEB",
      bg: "#EFF6FF",
    },
    {
      icon: MapPin,
      title: "Traçabilité en temps réel",
      desc: "Chaque livraison est horodatée, documentée et accessible. Vos pharmaciens gardent le contrôle à chaque étape.",
      color: "#1E8E5A",
      bg: "#F0FDF4",
    },
    {
      icon: Shield,
      title: "Conformité réglementaire",
      desc: "Nos processus sont alignés sur les exigences de l'ANSM et les bonnes pratiques de distribution pharmaceutique.",
      color: "#0B3C5D",
      bg: "#EFF6FF",
    },
  ]

  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="badge-pill badge-green mb-4 inline-flex">Notre réponse</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Une solution pensée pour la santé
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
            AGC Logistics prend en charge toute la chaîne logistique avec une expertise
            sectorielle et une infrastructure dédiée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="text-center group">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                style={{ background: bg }}
              >
                <Icon className="w-8 h-8" style={{ color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mb-3">{title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section : Timeline / Fonctionnement ─────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      icon: ClipboardList,
      title: "Réception commande",
      desc: "Votre pharmacie transmet la demande de livraison via notre interface ou par appel.",
    },
    {
      num: "2",
      icon: PackageCheck,
      title: "Préparation",
      desc: "Le colis est préparé selon les normes pharmaceutiques en vigueur.",
    },
    {
      num: "3",
      icon: Truck,
      title: "Livraison",
      desc: "Notre chauffeur qualifié achemine le médicament dans les délais convenus.",
    },
    {
      num: "4",
      icon: Bell,
      title: "Confirmation digitale",
      desc: "La livraison est confirmée en temps réel avec preuve de remise documentée.",
    },
  ]

  return (
    <section className="section-py" style={{ background: "#F5F7FA" }}>
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="badge-pill badge-blue mb-4 inline-flex">Processus</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
            Un processus simple, structuré et entièrement traçable en 4 étapes.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start gap-0 relative">
          {steps.map(({ num, icon: Icon, title, desc }, i) => (
            <div key={num} className="timeline-step">
              {/* Ligne entre steps */}
              {i < steps.length - 1 && <div className="timeline-line" />}

              <div className="timeline-circle">
                {num}
              </div>
              <div
                className="p-5 rounded-2xl w-full"
                style={{ background: "white", border: "1px solid #E2E8F0" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "#EFF6FF" }}
                >
                  <Icon className="w-5 h-5 text-[#1F6FEB]" />
                </div>
                <h3 className="font-semibold text-[#111827] mb-2 text-sm">{title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: "#1F6FEB" }}
              >
                {num}
              </div>
              <div
                className="flex-1 p-4 rounded-xl"
                style={{ background: "white", border: "1px solid #E2E8F0" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-[#1F6FEB]" />
                  <h3 className="font-semibold text-[#111827] text-sm">{title}</h3>
                </div>
                <p className="text-xs text-[#6B7280]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section : Chiffres clés ──────────────────────────────────────
function StatsSection() {
  const stats = [
    { value: "98%", label: "Livraisons dans les délais", sub: "Taux de ponctualité" },
    { value: "< 24h", label: "Délai moyen de livraison", sub: "Sur l'île entière" },
    { value: "100%", label: "Traçabilité garantie", sub: "Sur chaque commande" },
    { value: "5★", label: "Satisfaction partenaires", sub: "Pharmacies & cliniques" },
  ]

  return (
    <section className="section-py" style={{ background: "#0B3C5D" }}>
      <div className="container-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Des résultats qui parlent d&apos;eux-mêmes
          </h2>
          <p className="text-blue-200 text-lg">
            La confiance de nos partenaires, mesurée en chiffres.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label, sub }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="stat-number">{value}</div>
              <div className="mt-2 text-white font-semibold text-sm">{label}</div>
              <div className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section : Crédibilité / Conformité ──────────────────────────
function CredibilitySection() {
  const items = [
    {
      icon: Shield,
      title: "Conformité ANSM",
      desc: "Nos processus respectent les bonnes pratiques de distribution en gros (BPD) et les exigences de l'Agence Nationale de Sécurité du Médicament.",
    },
    {
      icon: Lock,
      title: "Données protégées",
      desc: "Aucune donnée patient ne transite dans nos systèmes. Confidentialité médicale préservée à chaque étape de la livraison.",
    },
    {
      icon: Award,
      title: "Process certifié",
      desc: "Protocoles de transport validés, véhicules adaptés, personnel formé aux spécificités du transport pharmaceutique.",
    },
    {
      icon: Zap,
      title: "Réactivité opérationnelle",
      desc: "Capacité d'intervention rapide sur l'ensemble du territoire martiniquais, y compris dans les zones les plus éloignées.",
    },
  ]

  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="badge-pill badge-green mb-5 inline-flex">Confiance & sécurité</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-5">
              Une infrastructure à la hauteur des enjeux de santé
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
              Travailler avec AGC Logistics, c&apos;est choisir un partenaire qui comprend
              les contraintes réglementaires et opérationnelles de la chaîne pharmaceutique.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Discuter de votre besoin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl"
                style={{ background: "#F5F7FA", border: "1px solid #E2E8F0" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "#EFF6FF" }}
                >
                  <Icon className="w-5 h-5 text-[#1F6FEB]" />
                </div>
                <h3 className="font-semibold text-[#111827] mb-2 text-sm">{title}</h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Section : CTA Final ─────────────────────────────────────────
function CtaSection() {
  return (
    <section
      className="section-py"
      style={{
        background: "linear-gradient(135deg, #0B3C5D 0%, #1F6FEB 100%)",
      }}
    >
      <div className="container-xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 max-w-2xl mx-auto">
          Optimisez votre logistique pharmaceutique dès aujourd&apos;hui.
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Rejoignez les pharmacies et cliniques de Martinique qui font confiance
          à AGC Logistics pour leur distribution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-[#0B3C5D] bg-white hover:bg-blue-50 transition-colors"
          >
            Demander un rendez-vous
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/40 hover:border-white transition-colors"
          >
            Voir nos services
          </Link>
        </div>
      </div>
    </section>
  )
}

// ── Page principale ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <StatsSection />
      <CredibilitySection />
      <CtaSection />
    </main>
  )
}

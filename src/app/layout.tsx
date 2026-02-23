import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Livraison de médicaments en Martinique`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "livraison médicaments Martinique",
    "livraison domicile pharmacie",
    "AGC Logistics",
    "pharmacie partenaire",
    "livraison santé Antilles",
  ],
  authors: [{ name: "AGC Logistics" }],
  creator: "AGC Logistics",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Livraison de médicaments en Martinique`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Livraison de médicaments en Martinique`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AGC Logistics",
              description: SITE_DESCRIPTION,
              url: SITE_URL,
              telephone: "TODO: +596 6XX XXX XXX",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Fort-de-France",
                addressRegion: "Martinique",
                addressCountry: "FR",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Martinique",
              },
              serviceType: [
                "Livraison de médicaments à domicile",
                "Livraison pour pharmacies",
                "Logistique santé",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0b5fff] text-white px-4 py-2 rounded-lg z-[100]"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

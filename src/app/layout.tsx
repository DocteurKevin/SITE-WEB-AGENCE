import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K-Tout-Risk | Ghostwriter Expert - Transforme les mots en revenus",
  description: "Ex-conducteur de car devenu Ghostwriter. Top 11% LinkedIn France. Je crée du contenu qui génère 150k impressions en 6 mois. Zéro diplôme, 100% transformation.",
  keywords: [
    "ghostwriter",
    "linkedin",
    "rédaction web",
    "content marketing",
    "génération de leads",
    "kevin barret",
    "k-tout-risk",
    "transport",
    "conversion"
  ],
  authors: [{ name: "Kevin Barret", url: "https://www.linkedin.com/in/kevinbarret337688264" }],
  creator: "Kevin Barret",
  metadataBase: new URL("https://ghostwriter-agence.netlify.app"),
  openGraph: {
    title: "K-Tout-Risk | Ghostwriter Expert",
    description: "Le ghostwriter qui transforme les mots en revenus. Top 11% LinkedIn France, 150k impressions en 6 mois.",
    url: "https://ghostwriter-agence.netlify.app",
    siteName: "Agence K-Tout-Risk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "K-Tout-Risk - Ghostwriter Expert",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K-Tout-Risk | Ghostwriter Expert",
    description: "Le ghostwriter qui transforme les mots en revenus. Top 11% LinkedIn France.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "verification-code-here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ghostwriter-agence.netlify.app" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="language" content="French" />

        {/* Google Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics code will be added here
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Agence K-Tout-Risk",
              "description": "Service de ghostwriting et rédaction de contenu LinkedIn professionnel",
              "url": "https://ghostwriter-agence.netlify.app",
              "founder": {
                "@type": "Person",
                "name": "Kevin Barret",
                "sameAs": "https://www.linkedin.com/in/kevinbarret337688264"
              },
              "serviceType": "Content Writing",
              "areaServed": "France",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}

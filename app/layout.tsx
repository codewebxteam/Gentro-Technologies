import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gentrotechnologies.com";

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gentro Technologies | Official WhatsApp Marketing API & Smart CRM Software",
    template: "%s | Gentro Technologies",
  },
  description:
    "Gentro Technologies (Gentro) - India's most affordable & powerful WhatsApp Marketing API & Smart CRM. Broadcast messages at ₹0.15/msg with complete yearly software at ₹7,999. High delivery rate, instant setup.",
  applicationName: "Gentro Technologies",
  authors: [{ name: "Gentro Technologies", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Gentro",
    "Gentro Technologies",
    "Gentro Tech",
    "Gentro WhatsApp",
    "Gentro CRM",
    "Gentro API",
    "WhatsApp Marketing API",
    "WhatsApp Business API India",
    "15 Paisa WhatsApp Message",
    "WhatsApp Bulk SMS Alternative",
    "WhatsApp Bulk Broadcast Software",
    "WhatsApp CRM Software India",
    "Gentro Official Website",
    "WhatsApp Automation Platform",
    "Gentro New Delhi"
  ],
  creator: "Gentro Technologies",
  publisher: "Gentro Technologies",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Gentro Technologies",
    title: "Gentro Technologies | WhatsApp Marketing API & Smart CRM Software",
    description:
      "Send WhatsApp marketing messages at just ₹0.15/msg with 99% delivery rate. Complete yearly software at ₹7,999. Official platform of Gentro Technologies.",
    images: [
      {
        url: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
        width: 1200,
        height: 630,
        alt: "Gentro Technologies - WhatsApp API & Smart CRM Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gentro Technologies | WhatsApp Marketing API & Smart CRM",
    description:
      "Send WhatsApp marketing messages at just ₹0.15/msg. Official platform of Gentro Technologies.",
    images: ["https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"],
    creator: "@GentroTech",
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
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png" },
      { url: "/icon.png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
    apple: [
      { url: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png" },
    ],
  },
  category: "Technology & Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for Google Rich Snippets
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Gentro Technologies",
    alternateName: ["Gentro", "Gentro Tech", "Gentro Technologies India", "Gentro WhatsApp"],
    url: siteUrl,
    logo: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
    image: "https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png",
    description:
      "Gentro Technologies provides high-performance WhatsApp Business API, Smart CRM, and Bulk Messaging Software in India starting at ₹0.15 per message.",
    email: "gentrotechnology@gmail.com",
    telephone: "+91-8084037252",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Laxmi Nagar",
      addressLocality: "New Delhi",
      postalCode: "110092",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8084037252",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Gentro Technologies",
    alternateName: "Gentro",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gentro WhatsApp Marketing & CRM Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based, Cloud, Windows, macOS, Android, iOS",
    offers: {
      "@type": "Offer",
      price: "7999",
      priceCurrency: "INR",
      priceValidUntil: "2028-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
    },
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://ik.imagekit.io/0s0fb4b2b/Gentro/Glossy%20Gentro%20Technologies%20Logo.png"
        />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="New Delhi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

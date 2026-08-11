import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.trystop.in";

export const viewport: Viewport = {
  themeColor: "#0b1120",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TryStop - Hyperlocal Fashion & Dining Vouchers in Mansarovar, Jaipur",
    template: "%s | TryStop - Hyperlocal Deals & Store Cashbacks",
  },
  description:
    "Discover verified local fashion boutiques, cafes, and restaurants in Mansarovar, Jaipur. Browse active collections, chat directly with store owners on WhatsApp, scan counter QR codes for instant wallet cashback, and claim platform value vouchers.",
  keywords: [
    "TryStop",
    "TryStop Jaipur",
    "Mansarovar Jaipur fashion boutiques",
    "Mansarovar food cafe vouchers",
    "Local store cashback Jaipur",
    "Thadi market shopping Jaipur",
    "Hyperlocal store deals",
    "Instant counter QR discount",
    "Direct merchant WhatsApp chat",
    "Offline retail discounts Jaipur",
    "Dual referral rewards app",
  ],
  authors: [{ name: "TryStop India", url: siteUrl }],
  creator: "TryStop India",
  publisher: "TryStop Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "TryStop - Hyperlocal Fashion & Dining Vouchers in Jaipur",
    description:
      "Discover verified local fashion boutiques and food spots in Mansarovar, Jaipur. Connect directly with merchants on WhatsApp and earn instant wallet cashbacks.",
    siteName: "TryStop",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TryStop - Hyperlocal Fashion and Dining Platform in Jaipur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TryStop - Hyperlocal Fashion & Food Outlets in Jaipur",
    description:
      "Connect with neighborhood boutiques & dining outlets in Mansarovar. Claim instant counter discounts and wallet cashback.",
    images: [`${siteUrl}/og-image.png`],
  },
  category: "Shopping & Dining Deals",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "TCa_-LaMP3jXroYu6OVwnf4aCp7P4VFLUrX8f_kIElY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "TryStop",
        description:
          "Hyperlocal marketplace connecting shoppers with verified fashion boutiques and dining outlets in Mansarovar, Jaipur.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "TryStop Technologies",
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        sameAs: ["https://wa.me/919694092261"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Thadi Market, Mansarovar",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@trystop.in",
          telephone: "+91-9694092261",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "TryStop App",
        operatingSystem: "Android, iOS",
        applicationCategory: "ShoppingApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "1280",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}

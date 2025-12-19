import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Prabhat World - AI Automation Expert",
    default: "Prabhat World | AI Automation & Business Solutions",
  },
  description: "Helping small businesses reduce manual work, save time, and minimize errors using AI and smart workflows. Get a free automation audit today.",
  keywords: ["AI Automation", "Business Workflows", "Tender Automation", "Web Solutions", "Prabhat Yadav"],
  authors: [{ name: "Prabhat Yadav" }],
  creator: "Prabhat Yadav",
  metadataBase: new URL("https://prabhatworld.tech"),
  openGraph: {
    title: "Prabhat World | AI Automation & Business Solutions",
    description: "Automate your business operations with AI. Save time and reduce errors.",
    url: "https://prabhatworld.tech",
    siteName: "Prabhat World",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prabhat World | AI Automation Expert",
    description: "Expert AI automation and business workflow solutions for Indian businesses.",
    // creator: "@yourhandle", // Add if available
  },
  verification: {
    google: "pending-verification", // User to replace
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Prabhat Yadav",
        "jobTitle": "AI Automation Specialist",
        "url": "https://prabhatworld.tech",
        "sameAs": [
          // "https://www.linkedin.com/in/...", // Add links later
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Prabhat World",
        "description": "AI Automation and Business Solutions for small and medium businesses.",
        "url": "https://prabhatworld.tech",
        "areaServed": "India",
        "priceRange": "$$"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingWhatsApp />
        {/* Google Analytics Placeholder */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
      </body>
    </html>
  );
}

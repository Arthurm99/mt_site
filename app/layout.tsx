import type { Metadata } from "next";
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

const SITE_URL = "https://mightytechfl.com";

const SITE_TITLE =
  "Commercial Networking & Technology Services | Mighty Tech Solutions";

const SITE_DESCRIPTION =
  "Commercial networking, WiFi, structured cabling, security cameras, access control, AV and technology support across Orlando and Central Florida.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: SITE_TITLE,

  description: SITE_DESCRIPTION,

  applicationName: "Mighty Tech Solutions",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Mighty Tech Solutions",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,

  name: "Mighty Tech Solutions",
  legalName: "Mighty Tech Solutions LLC",

  url: SITE_URL,

  logo: `${SITE_URL}/Logo_Horizontal_FB.JPG`,

  description:
    "Commercial technology services company providing business networking, WiFi, structured cabling, security cameras, access control, gate automation, commercial AV and technology support across Central Florida.",

  telephone: "+1-689-272-8874",

  email: "mightytechsolutionsllc@gmail.com",

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-689-272-8874",
    email: "mightytechsolutionsllc@gmail.com",
    contactType: "customer service",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Orlando",
    },
    {
      "@type": "City",
      name: "Kissimmee",
    },
    {
      "@type": "City",
      name: "Davenport",
    },
    {
      "@type": "City",
      name: "Clermont",
    },
    {
      "@type": "City",
      name: "Winter Garden",
    },
    {
      "@type": "City",
      name: "Haines City",
    },
  ],

  knowsAbout: [
    "Commercial Networking",
    "Business WiFi",
    "Structured Cabling",
    "Ethernet Cabling",
    "Security Camera Installation",
    "Video Surveillance",
    "Access Control",
    "Gate Automation",
    "Commercial AV",
    "Technology Troubleshooting",
    "Smart Home Technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}
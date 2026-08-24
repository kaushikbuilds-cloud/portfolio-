import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Work_Sans } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const siteUrl = "https://kaushik.codes";
const title = "Kaushik S — Web & App Developer in Coimbatore";
const description =
  "Kaushik S is a full-stack web and app developer based in Coimbatore, Tamil Nadu, building fast Next.js websites, React Native mobile apps, and GenAI-powered products for clients across India. Available for freelance and full-time work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Kaushik S",
  },
  description,
  applicationName: "Kaushik S — Portfolio",
  keywords: [
    "web developer",
    "app developer",
    "web developer in Coimbatore",
    "app developer in Coimbatore",
    "freelance web developer Coimbatore",
    "freelance app developer Tamil Nadu",
    "web developer India",
    "app developer India",
    "full stack developer",
    "full stack web developer",
    "mobile app developer",
    "React Native developer",
    "Next.js developer",
    "Kaushik S",
    "Kaushik S developer",
    "Kaushik S Karunya",
    "Karunya Institute of Technology",
  ],
  authors: [{ name: "Kaushik S", url: siteUrl }],
  creator: "Kaushik S",
  publisher: "Kaushik S",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    ICBM: "11.0168, 76.9558",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Kaushik S",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/kaushik.png",
        width: 800,
        height: 800,
        alt: "Kaushik S — Full-Stack Web & App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/kaushik.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaushik S",
  url: siteUrl,
  image: `${siteUrl}/kaushik.png`,
  jobTitle: "Web & App Developer",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  homeLocation: {
    "@type": "Place",
    name: "Coimbatore, Tamil Nadu, India",
  },
  workLocation: {
    "@type": "Place",
    name: "Coimbatore, Tamil Nadu, India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Karunya Institute of Technology and Sciences",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  knowsAbout: [
    "Web Development",
    "App Development",
    "Full-Stack Development",
    "React",
    "Next.js",
    "React Native",
    "GenAI Integration",
  ],
  sameAs: [
    "https://github.com/kaushikbuilds-cloud",
    "https://linkedin.com/in/kaushik-s-0012a93b7",
    "https://x.com/kaushik_code",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "dark" }}
      className={`${archivoBlack.variable} ${jetbrainsMono.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink overflow-x-hidden">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

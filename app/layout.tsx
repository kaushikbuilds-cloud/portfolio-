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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kaushik S — Full Stack App & Web Developer",
  description:
    "Portfolio of Kaushik S — Computer Engineering student at Karunya Institute, building GenAI-powered products, mobile apps, and client websites across two studios.",
  openGraph: {
    title: "Kaushik S — Full Stack App & Web Developer",
    description:
      "Projects, skills, and services from a founder shipping full-stack products, voice AI assistants, and design-led web builds.",
    url: siteUrl,
    siteName: "Kaushik S",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik S — Full Stack App & Web Developer",
    description:
      "Computer Engineering student and founder shipping full-stack products and GenAI tools.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      style={{ colorScheme: "dark" }}
      className={`${archivoBlack.variable} ${jetbrainsMono.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { ScanPopup } from "@/components/site/scan-popup";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const SITE_URL = "https://absolute-keukens.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Absolute Keukens — De slimme make-over voor jouw keuken",
    template: "%s · Absolute Keukens",
  },
  description:
    "Een compleet nieuwe keuken zonder verbouwen. Absolute Keukens wrapt en vernieuwt jouw keuken in stijl: strak, duurzaam en vaak binnen één dag. Vraag je prijsindicatie aan.",
  keywords: [
    "keuken wrappen",
    "keukenrenovatie",
    "keuken make-over",
    "keukenfolie",
    "Rotterdam",
    "Absolute Keukens",
  ],
  openGraph: {
    title: "Absolute Keukens — De slimme make-over voor jouw keuken",
    description:
      "Een compleet nieuwe keuken zonder verbouwen. Strak, duurzaam en vaak binnen één dag.",
    type: "website",
    locale: "nl_NL",
    url: SITE_URL,
    siteName: "Absolute Keukens",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScanPopup />
      </body>
    </html>
  );
}

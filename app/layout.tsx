import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blomsterkollektivet — Finn din florist. Motta tilbud. Velg.",
  description:
    "Send én blomsterforespørsel og motta tilbud fra 3 lokale florister innen 48 timer. Gratis for deg som kunde — floristen betaler kun ved bekreftet oppdrag.",
  keywords: "florist, bryllupsblomster, blomster, tilbud, Norge, blomsterkollektivet, floristfellesskap",
  openGraph: {
    title: "Blomsterkollektivet — Finn din florist",
    description: "Send én blomsterforespørsel. Motta tilbud fra lokale florister innen 48 timer.",
    url: "https://blomsterkollektivet.no",
    siteName: "Blomsterkollektivet",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Script
          defer
          src="https://umami-ten-fawn.vercel.app/script.js"
          data-website-id="6edbc44e-b244-44f5-b911-71ca9ad03bb0"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

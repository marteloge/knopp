import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Knopp — Finn din florist. Motta tilbud. Velg.",
  description:
    "Send én blomsterforespørsel og motta tilbud fra 3 lokale florister innen 48 timer. Gratis for deg som kunde — floristen betaler kun ved bekreftet oppdrag.",
  keywords: "florist, bryllupsblomster, blomster, tilbud, Norge, floristmarkedsplass",
  openGraph: {
    title: "Knopp — Finn din florist",
    description: "Send én blomsterforespørsel. Motta tilbud fra lokale florister innen 48 timer.",
    url: "https://knopp.no",
    siteName: "Knopp",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

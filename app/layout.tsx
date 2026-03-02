import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

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
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KingReus IA — Assistente & Site Vitrine",
  description: "Automatize atendimento no WhatsApp e tenha um site vitrine profissional."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <main className="min-h-screen bg-black text-white">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

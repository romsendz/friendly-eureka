import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import WhatsAppButton from "@/components/whatsapp-button";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Climasur - La Comodidad Empieza Aquí!",
  description:
    "Soluciones Confiables de Climatización, Calefacción y Gas para Cada Hogar. Desde aire acondicionado hasta suelo radiante, nuestro equipo de expertos ofrece soluciones personalizadas para que tu espacio sea siempre cómodo y eficiente. Nos especializamos en sistemas modernos de climatización, instalaciones de gas y calefacción, brindando seguridad, calidad y un rendimiento duradero en el que puedes confiar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anuphan.variable} flex min-h-screen flex-col antialiased md:!overflow-auto`}
      >
        <Header />
        <main className="mt-16 flex-grow lg:mt-20">{children}</main>
        <Toaster />
        <Footer />
        <WhatsAppButton className="!fixed !right-4 !bottom-4 !z-10 !size-12 lg:!hidden" />
      </body>
    </html>
  );
}

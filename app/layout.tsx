import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Empresa",
  description: "Empresa Empresa Empresa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anuphan.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow pt-[85px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

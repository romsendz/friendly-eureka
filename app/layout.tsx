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
      <body className={`${anuphan.variable} antialiased`}>
        <Header />
        <main className="pt-[85px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

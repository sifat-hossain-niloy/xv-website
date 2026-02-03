import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XV Apparels | Crafted in Bangladesh, Carried Everywhere",
  description: "Premium apparel and bags manufacturer based in Bangladesh. We specialize in hoodies, sweatshirts, t-shirts, jackets, tote bags, and custom merchandise with no minimum order quantity.",
  keywords: "apparel manufacturer, Bangladesh garments, tote bags, canvas bags, custom clothing, wholesale apparel, hoodies, sweatshirts, t-shirts",
  authors: [{ name: "XV Apparels" }],
  openGraph: {
    title: "XV Apparels | Crafted in Bangladesh, Carried Everywhere",
    description: "Premium apparel and bags manufacturer based in Bangladesh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}

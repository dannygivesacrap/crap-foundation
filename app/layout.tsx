import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "The Crap Foundation | Clean Water & Toilets for Everyone",
  description:
    "We're working to ensure everyone on earth has access to clean water and a toilet. Radically transparent. 100% to impact. Founded by Who Gives A Crap.",
  keywords: ["water", "sanitation", "WASH", "charity", "foundation", "Who Gives A Crap", "toilets", "clean water"],
  openGraph: {
    title: "The Crap Foundation | Give a Crap",
    description: "Everyone deserves a safe place to poop. We're working to make that happen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

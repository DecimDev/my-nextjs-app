import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";
import ResponsiveNavigation from "@/components/ResponsiveNavigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decim Dev",
  description: "Decim Dev's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ParticleBackground />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
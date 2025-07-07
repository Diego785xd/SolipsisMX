import { NavMenu } from "@/components/navigation-menu";
import Footer from '@/components/ui/footer';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metroDF = localFont({
  src: "../fonts/metro-df.ttf",
  variable: "--font-metro-df",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solipsis – IA para Espacios Físicos",
  description: "Detecta marcas, emociones y patrones de tus clientes en tiempo real con visión computacional.",
  icons: {
    icon: [
      { url: '/icons/icon.png', sizes: 'any' },
    ],
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${metroDF.variable} antialiased flex flex-col items-center`}>
                <NavMenu />
                {children}
                <Footer />
            </body>
        </html>
    )
}

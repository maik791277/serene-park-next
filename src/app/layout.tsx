import React from "react";
import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const cormorant = Cormorant({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Парк Отель – Гостиница в Калининграде",
  description: "Уют и комфорт в номерах нашего отеля в Калининграде. Наслаждайтесь отдыхом в тихой лесной зоне с современными удобствами.",
  keywords: "отель, Калининград, комфорт, отдых, номера, парковка, Wi-Fi",
  applicationName: "Парк Отель",
  authors: [{ name: "Park Hotel Team", url: "https://parkhotel39.com" }],
  creator: "Park Hotel Team",
  publisher: "Park Hotel",
  openGraph: {
    type: "website",
    url: "https://parkhotel39.com",
    title: "Парк Отель – Гостиница в Калининграде",
    description: "Уютные номера и удобное местоположение для отдыха в Калининграде.",
    images: [
      {
        url: "https://example.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Парк Отель в Калининграде",
      },
    ],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
    <body className={cormorant.className}>
    <Header />
    {children}
    <Footer />
    </body>
    </html>
  );
}

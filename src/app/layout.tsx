import React from "react";
import type { Metadata } from "next";
import { Cormorant } from 'next/font/google';
import "@/styles/globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";

const cormorant = Cormorant({
  weight: [ '300', '400', '600', '700'], // Укажите нужные веса шрифта
  subsets: ['latin'], // Укажите нужные наборы символов
});

export const metadata: Metadata = {
  title: "Парк отель",
  description: "Гостеприимство и комфорт для каждого в номерах отеля",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru">
    <body className={cormorant.className}>
    <Header/>
      {children}
    <Footer/>
    </body>
    </html>
  );
}

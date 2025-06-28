import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import Script from 'next/script';
import React from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "@/styles/globals.css";



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
    icon: "/images/logo.svg",
    apple: "/images/logo.png",
  },
  verification: {
    google: "mboTFKJVcCkGNHZovbO5N67lRk0ahSdHHTzkpaYgfeE",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              window.ym = window.ym || function() { (window.ym.a = window.ym.a || []).push(arguments); };
              window.ym.l = 1 * new Date();

              ym(103109042, "init", {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/103109042" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
      </head>
      <body className={`flex flex-col min-h-screen ${cormorant.className}`}>
        <Header/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

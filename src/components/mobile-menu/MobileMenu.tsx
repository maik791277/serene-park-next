"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UiLink from "../ui/ui-link";
import {NavItemsLink} from "@/data/nav-items";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsButtonDisabled(true);
      setIsMenuOpen(false);
      setIsButtonDisabled(false);
      document.body.classList.remove("no-scroll");
    } else {
      setIsMenuOpen(true);
      setIsButtonDisabled(true);
      document.body.classList.add("no-scroll");
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 600);
    }
  };

  type menuItemsProps = {
    id: number,
    label: string,
    href: string,
  }

  const Navigation = ({menuItems}: {menuItems:menuItemsProps[] } ) => {
    return (
      <nav>
        <ul className="text-center text-sm py-4 space-y-3">
          {menuItems.map(item => (
            <li key={item.id}>
              <Link href={item.href} onClick={toggleMenu}
                    className="font-semibold tracking-[0.5px] text-[21px] text-black">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <div className="lg:hidden bg-gray-50 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center p-4 bg-myCustomColor">
        <div className="text-lg font-bold">
          <Link href="/public" className="text-[20px] font-light">
            𝒫𝒶𝓇𝓀 𝒪𝓉𝑒𝓁
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex items-center justify-center"
          disabled={isButtonDisabled} // Отключаем кнопку, если isButtonDisabled равно true
        >
          <span
            className={`absolute bg-white h-0.5 w-6 transition-all duration-[200ms] ease-in-out ${
              isMenuOpen ? "rotate-45 translate-custom-1" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`absolute bg-white h-0.5 w-6 transition-all duration-[200ms] ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`absolute bg-white h-0.5 w-6 transition-all duration-[200ms] ease-in-out ${
              isMenuOpen ? "-rotate-45 translate-custom-1" : "translate-y-2"
            }`}
          ></span>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={`absolute w-full bg-gray-50 h-screen ${
            isMenuOpen ? "animate-slide-down" : "opacity-0"
          }`}
        >
          <div className={` flex flex-col items-center justify-evenly h-[80%]`}>
            <div className="h-20 w-24">
              <Image
                src="/images/logo.png"
                width={80}
                height={100}
                alt="Логотип Парк Отель"
                className="object-contain h-full w-full"
              />
            </div>
            <Navigation menuItems={NavItemsLink}/>
            <div
              className="text-center md:text-left text-sm text-gray-600 flex flex-col gap-3 justify-center items-center max-w-[400px] w-full">
              <address className="text-sm text-gray-600 mx-auto text-center md:text-left">
                <p className="text-xl font-bold text-black max-w-[270px] text-center">
                  Россия, г. Калининград, ул. Аллея Смелых 187
                </p>
              </address>
              <div className="flex gap-3 justify-center items-center">
                <a
                  href="https://wa.me/+79003459591"
                  aria-label="WhatsApp"
                  title="Связаться через WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={30} height={30}/>
                </a>
                <a
                  href="https://t.me/+79003459591"
                  aria-label="Telegram"
                  title="Связаться через Telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/icons/telegram.svg" alt="Telegram" width={30} height={30}/>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 text-center">
              <address className="flex flex-col items-center">
                <a
                  href="tel:+79003459591"
                  className="text-xl font-bold block text-black"
                  aria-label="Позвонить на ресепшн"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +7 (900) 345-95-91
                  <span>(ресепшн)</span>
                </a>
                <a
                  href="mailto:parkhotel@internet.ru"
                  className="text-xl font-bold block text-black"
                  aria-label="Написать на электронную почту"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  parkhotel@internet.ru
                </a>
              </address>
              <div className="max-w-[150px] w-full">
                <UiLink href={"https://park-hotel39.netlify.app/"} isExternal={true}>
                  3D-тур по отелю
                </UiLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


import Image from "next/image";
import Link from "next/link";
import InteractiveHeader from "./InteractiveHeader";
import UiLink from "@/components/ui/ui-link";
import MobileMenu from "@/components/mobile-menu/MobileMenu";

const NAV_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "Номера", href: "/rooms" },
  { label: "Об отеле", href: "#об отеле" },
  { label: "Преимущества", href: "#преимущества" },
  { label: "Местоположение", href: "#местоположение" },
  { label: "Отзывы", href: "#отзывы" },
  { label: "Фото", href: "#фото" },
  { label: "Контакты", href: "#контакты" },
  { label: "Оплата", href: "#оплата" },
];

const ContactInfo = () => (
  <div className="text-center md:text-left text-sm text-gray-600 flex flex-col gap-3 justify-center items-center max-w-[400px] w-full">
    <address className="text-sm text-gray-600 mx-auto text-center md:text-left">
      <p className="text-xl font-bold text-stone-500">
        Россия, г. Калининград, ул. Аллея Смелых 187
      </p>
    </address>
    <div className="flex gap-3 justify-center items-center">
      <a href="https://wa.me/+79003459591" aria-label="WhatsApp" title="Связаться через WhatsApp">
        <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
      </a>
      <a href="https://t.me/+79003459591" aria-label="Telegram" title="Связаться через Telegram">
        <Image src="/icons/telegram.svg" alt="Telegram" width={30} height={30} />
      </a>
    </div>
  </div>
);

const Logo = () => (
  <div className="h-20 w-24">
    <Image src="/images/logo.png" width={80} height={100} alt="Логотип Парк Отель" className="object-contain h-full w-full" />
  </div>
);

const ContactLinks = () => (
  <div className="flex items-center gap-5 text-center md:text-right space-y-1 text-sm max-md:gap-3 max-md:flex-col max-w-[400px] w-full">
    <address className="flex flex-col items-center">
      <a href="tel:+79003459591" className="text-xl font-bold text-stone-500 block hover:text-gray-900" aria-label="Позвонить на ресепшн">
        +7 (900) 345-95-91
        <span>(ресепшн)</span>
      </a>
      <a href="mailto:parkhotel@internet.ru" className="text-xl font-bold text-stone-500 block hover:text-gray-900" aria-label="Написать на электронную почту">
        parkhotel@internet.ru
      </a>
    </address>
    <div className="max-w-[150px] w-full">
      <UiLink href={"https://park-hotel39.netlify.app/"} isExternal={true}>
        3D-тур по отелю
      </UiLink>
    </div>
  </div>
);

const Navigation = () => (
  <nav>
    <ul className="flex flex-wrap justify-center md:justify-between gap-4 px-4 py-3 text-gray-700 text-sm">
      {NAV_ITEMS.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="navbar-link transition-colors-opacity hover:text-gray-900 hover:opacity-30"
            title={item.label}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default function Header() {
  return (
    <header>
      <div className="hidden lg:block">
        <InteractiveHeader>
          <div className="bg-gray-100 bg-opacity-80 py-4 shadow-md">
            <div className="max-w-screen-xl mx-auto">
              <div className="mx-auto flex flex-col items-center md:flex-row md:justify-evenly">
                <ContactInfo />
                <Logo />
                <ContactLinks />
              </div>
              <Navigation />
            </div>
          </div>
        </InteractiveHeader>
      </div>
      <MobileMenu />
    </header>
  );
}

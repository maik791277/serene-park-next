import Image from "next/image";
import Link from "next/link";
import InteractiveHeader from "./InteractiveHeader";
import UiLink from "@/components/ui/ui-link";
import MobileMenu from "@/components/mobile-menu/MobileMenu";
import {NavItemsLink} from "@/data/nav-items";

type NavItemsProps = {
  id: number,
  label: string,
  href: string,
}

const Navigation = ({NavItems}: {NavItems: NavItemsProps[]}) => (
  <nav>
    <ul className="flex flex-wrap justify-center md:justify-between gap-4 px-4 py-3 text-gray-700 text-sm">
      {NavItems.map((item) => (
        <li key={item.id}>
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
                <div
                  className="text-center md:text-left text-sm text-gray-600 flex flex-col gap-3 justify-center items-center max-w-[400px] w-full">
                  <address className="text-sm text-gray-600 mx-auto text-center md:text-left">
                    <a
                      href="https://yandex.ru/maps/org/park_otel/131144376859/?from=mapframe&ll=20.519444%2C54.669056&z=17"
                      className="text-xl font-bold text-stone-500 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Открыть адрес на карте"
                    >
                      Россия, г. Калининград, ул. Аллея Смелых 187
                    </a>

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
                    <a  href="https://t.me/+79003459591"
                        aria-label="Telegram"
                        title="Связаться через Telegram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Image src="/icons/telegram.svg" alt="Telegram" width={30} height={30}/>
                    </a>
                  </div>
                </div>
                <div className="h-20 w-24">
                  <Image src="/images/logo.png" width={80} height={100} alt="Логотип Парк Отель"
                         className="object-contain h-full w-full"/>
                </div>
                <div
                  className="flex items-center gap-5 text-center md:text-right space-y-1 text-sm max-md:gap-3 max-md:flex-col max-w-[400px] w-full">
                  <address className="flex flex-col items-center">
                    <a href="tel:+79003459591" className="text-xl font-bold text-stone-500 block hover:text-gray-900"
                       aria-label="Позвонить на ресепшн"
                       rel="noopener noreferrer"
                       target="_blank"
                    >
                      +7 (900) 345-95-91
                      <span>(ресепшн)</span>
                    </a>
                    <a href="mailto:parkhotel@internet.ru"
                       className="text-xl font-bold text-stone-500 block hover:text-gray-900"
                       aria-label="Написать на электронную почту"
                       rel="noopener noreferrer"
                       target="_blank"
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
              <Navigation NavItems={NavItemsLink}/>
            </div>
          </div>
        </InteractiveHeader>
      </div>
      <MobileMenu/>
    </header>
  );
}

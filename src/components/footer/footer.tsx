import Image from "next/image";
import Link from "next/link";
import { NavItemsLink } from "@/data/nav-items";

type MenuItemProps = {
  id: number;
  label: string;
  href: string;
};

const Navigation = ({ menuItems }: { menuItems: MenuItemProps[] }) => (
  <nav>
    <h3 className="text-xl font-semibold text-white mb-6">Навигация</h3>
    <ul className="space-y-4">
      {menuItems.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className="text-gray-300 hover:text-white transition-all duration-300 text-lg"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const ContactInfo = () => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-6">Контакты</h3>
    <address className="not-italic space-y-4 text-gray-300">
      <p>
        <span className="block font-medium text-gray-400">Адрес:</span>
        Россия, г. Калининград, ул. Аллея Смелых 187
      </p>
      <p>
        <span className="block font-medium text-gray-400">Телефон:</span>
        <a
          href="tel:+79003459591"
          className="hover:text-white transition-all duration-300"
        >
          +7 (900) 345-95-91
        </a>
      </p>
      <p>
        <span className="block font-medium text-gray-400">Email:</span>
        <a
          href="mailto:parkhotel@internet.ru"
          className="hover:text-white transition-all duration-300"
        >
          parkhotel@internet.ru
        </a>
      </p>
    </address>
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-6">Социальные сети</h3>
    <div className="flex space-x-6">
      <a
        href="https://wa.me/+79003459591"
        aria-label="WhatsApp"
        className="group"
      >
        <div className="bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300">
          <Image
            src="/icons/whatsapp.svg"
            alt="WhatsApp"
            width={30}
            height={30}
            className="group-hover:opacity-80"
          />
        </div>
      </a>
      <a
        href="https://t.me/+79003459591"
        aria-label="Telegram"
        className="group"
      >
        <div className="bg-gray-700 p-3 rounded-full hover:scale-110 transition-all duration-300">
          <Image
            src="/icons/telegram.svg"
            alt="Telegram"
            width={30}
            height={30}
            className="group-hover:opacity-80"
          />
        </div>
      </a>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo.svg"
              alt="Парк Отель"
              width={120}
              height={100}
              className="mx-auto"
            />
            <p className="mt-6 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Парк Отель. Все права защищены.
            </p>
          </div>
          <Navigation menuItems={NavItemsLink} />
          <ContactInfo />
          <SocialLinks />
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-sm">
          Сделано с ❤️ в Калининграде, Россия
        </p>
      </div>
    </footer>
  );
};

export default Footer;



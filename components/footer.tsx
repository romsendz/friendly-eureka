import MENU_ITEMS from "@/lib/MENU_ITEMS";
import Logo from "./logo";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <footer
      className="bg-primary flex w-full flex-col items-center gap-8 bg-cover bg-no-repeat px-4 py-6 shadow-2xl lg:gap-2"
      style={{ backgroundImage: "url('/footer-background.png')" }}
    >
      <div className="text-primary-foreground container space-y-8 lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <span>{`© ${date.getFullYear()} Nombre de empresa`}</span>
        </div>
        <ul>
          {MENU_ITEMS.map((menuItem) => (
            <li key={menuItem.name} className="my-2 text-center">
              <Link
                href={menuItem.href}
                className="inline-flex gap-2 hover:underline"
              >
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Link href={"tel:+34000000000"} className="hover:underline">
              +34 000 000 000
            </Link>
            <Link
              href={"mailto:example@example.com"}
              className="hover:underline"
            >
              ejemplo@ejemplo.com
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SocialIcon
              title="Facebook"
              url="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "2rem", width: "2rem" }}
              className="transition-all duration-200 hover:scale-125 hover:brightness-125 hover:filter"
            />

            <SocialIcon
              title="Instagram"
              url="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: "2rem", width: "2rem" }}
              className="transition-all duration-200 hover:scale-125 hover:brightness-125 hover:filter"
            />
            <SocialIcon
              title="Whatsapp"
              url="https://api.whatsapp.com/"
              style={{ height: "2rem", width: "2rem" }}
              className="transition-all duration-200 hover:scale-125 hover:brightness-125 hover:filter"
            />
          </div>
        </div>
      </div>
      <ul className="flex gap-8 text-gray-400">
        <li className="my-2 text-center">
          <Link href={"/legal"} className="inline-flex gap-2 hover:underline">
            Aviso Legal
          </Link>
        </li>
        <li className="my-2 text-center">
          <Link
            href={"/privacy-policy"}
            className="inline-flex gap-2 hover:underline"
          >
            Política de privacidad
          </Link>
        </li>
        <li className="my-2 text-center">
          <Link
            href={"/cookies-policy"}
            className="inline-flex gap-2 hover:underline"
          >
            Política de Cookies
          </Link>
        </li>
      </ul>
      <span className="text-sm text-gray-400 italic">
        Diseñado y desarrollado por{" "}
        <Link
          href={"https://portfolio-romsendz.vercel.app/"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 hover:text-blue-500 hover:underline"
        >
          Roman Sendziuk
        </Link>
      </span>
    </footer>
  );
};

export default Footer;

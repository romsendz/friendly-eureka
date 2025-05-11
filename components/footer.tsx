import MENU_ITEMS from "@/lib/MENU_ITEMS";
import Logo from "./logo";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import WhatsAppButton from "./whatsapp-button";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-primary relative flex w-full flex-col items-center gap-8 bg-no-repeat px-4 py-6 shadow-2xl before:absolute before:top-[0] before:left-[0] before:z-0 before:h-full before:w-full before:bg-[url(/footer-background.png)] before:blur-[5px] before:filter before:content-[''] lg:gap-2">
      <div className="text-primary-foreground z-1 container space-y-8 lg:grid lg:w-full lg:grid-cols-[repeat(3,_1fr)] lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <span>{`© ${date.getFullYear()} Santecnica Iberica 2021 SL`}</span>
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
            <Link href={"tel:+34610664584"} className="hover:underline">
              +34 610 664 584
            </Link>
            <Link
              href={"mailto:santecnicaiberica2021@gmail.com"}
              className="hover:underline"
            >
              santecnicaiberica2021@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SocialIcon
              title="Facebook"
              url="https://www.facebook.com/people/ClimaSur/61576015197280"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 hover:scale-110 hover:brightness-125 hover:filter"
            />
            <WhatsAppButton />
          </div>
        </div>
      </div>
      <ul className="z-1 grid grid-cols-[repeat(5,_1fr)] items-center justify-items-center text-sm text-gray-400">
        <li className="my-2 text-center">
          <Link href={"/legal"} className="inline-flex gap-2 hover:underline">
            Aviso Legal
          </Link>
        </li>
        <li>|</li>
        <li className="my-2 text-center">
          <Link
            href={"/privacy-policy"}
            className="inline-flex gap-2 hover:underline"
          >
            Política de privacidad
          </Link>
        </li>
        <li>|</li>
        <li className="my-2 text-center">
          <Link
            href={"/cookies-policy"}
            className="inline-flex gap-2 hover:underline"
          >
            Política de Cookies
          </Link>
        </li>
      </ul>
      <span className="right-2 bottom-2 z-1 text-xs text-gray-400 italic lg:absolute">
        Diseñado y desarrollado por{" "}
        <Link
          href={"https://portfolio-romsendz.vercel.app/"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 underline hover:text-blue-500"
        >
          Roman Sendziuk
        </Link>
      </span>
    </footer>
  );
};

export default Footer;

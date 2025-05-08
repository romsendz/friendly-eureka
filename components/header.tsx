"use client";

import React, { useState, useRef, useEffect } from "react";
import Logo from "./logo";
import { Button } from "./ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import ContactButton from "./contact-button";
import { Separator } from "./ui/separator";
import MENU_ITEMS from "@/lib/MENU_ITEMS";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/SERVICES";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.maxHeight = isOpen
        ? menuRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-primary fixed z-50 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Logo
          className={clsx(
            "after:bg-primary-foreground !max-w-38 transition-all after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:duration-300 xl:!max-w-52",
            {
              ["relative ml-4 text-fuchsia-400 duration-400 after:w-full"]:
                isOpen,
            },
          )}
        />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className={clsx(
                  "text-primary-foreground md:text-md lg:text-lg xl:text-xl",
                  navigationMenuTriggerStyle(),
                )}
              >
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-primary-foreground md:text-md lg:text-lg xl:text-xl">
                <Link href={"/services"}>Nuestros servicios</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {SERVICES.map((service) => (
                    <ListItem
                      key={service.header}
                      title={service.header}
                      href={service.link}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/projects"
                className={clsx(
                  "text-primary-foreground md:text-md lg:text-lg xl:text-xl",
                  navigationMenuTriggerStyle(),
                )}
              >
                Nuestros proyectos
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ContactButton />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-foreground md:hidden"
          >
            {isOpen ? (
              <XIcon className="!h-3/4 !w-3/4" />
            ) : (
              <MenuIcon className="!h-3/4 !w-3/4" />
            )}
          </Button>
        </div>
      </div>

      <Separator className="md:hidden" />

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 top-[100px] z-1 bg-black/30 backdrop-blur-[2px] md:hidden"
        />
      )}

      <nav
        ref={menuRef}
        className="bg-secondary relative z-50 overflow-hidden transition-all duration-300 ease-in-out md:hidden"
        style={{ maxHeight: 0 }}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 py-8">
          {MENU_ITEMS.map((linkItem) => (
            <li
              key={linkItem.name}
              className="text-secondary-foreground active:bg-primary hover:bg-primary active:text-primary-foreground hover:text-primary-foreground m-0 w-full py-4 transition-colors"
            >
              <Link
                href={linkItem.href}
                onClick={() => {
                  if (pathname === linkItem.href) {
                    setIsOpen(false);
                    window.scrollTo(0, 0);
                  }
                }}
                className="inline-flex w-full items-center justify-center gap-2 align-middle active:underline"
              >
                {linkItem.icon}
                {linkItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

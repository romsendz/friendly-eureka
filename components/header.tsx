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
import WhatsAppButton from "./whatsapp-button";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setServicesOpen(false);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (menuRef.current && menuInnerRef.current) {
      if (isOpen) {
        menuRef.current.style.maxHeight =
          menuInnerRef.current.scrollHeight + "px";
      } else {
        menuRef.current.style.maxHeight = "0px";
      }
    }
  }, [isOpen, servicesOpen]); // Add servicesOpen too!

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-primary fixed z-50 w-full shadow-md">
      <div className="relative container mx-auto flex items-center justify-between px-4 py-2">
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
            {MENU_ITEMS.map((item) => {
              if (item.href === "/contact") return;
              const isActive = pathname === item.href;
              return (
                <NavigationMenuItem
                  key={item.href}
                  className={clsx({
                    ["border-b border-amber-50 hover:border-0"]: isActive,
                  })}
                >
                  {item.subs ? (
                    <>
                      <NavigationMenuTrigger className="text-primary-foreground md:text-md lg:text-lg xl:text-xl">
                        <Link href={item.href}>{item.name}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.subs.map((service) => (
                            <ListItem
                              key={service.header}
                              title={service.header}
                              href={service.link}
                            >
                              {service.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>{" "}
                    </>
                  ) : (
                    <>
                      <NavigationMenuLink
                        href={item.href}
                        className={clsx(
                          "text-primary-foreground md:text-md inline-flex flex-row lg:text-lg xl:text-xl",
                          navigationMenuTriggerStyle(),
                        )}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </>
                  )}
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ContactButton />
          <WhatsAppButton className="!hidden !size-10 lg:!block" />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-background md:hidden"
          >
            {isOpen ? (
              <XIcon className="!h-full !w-full" />
            ) : (
              <MenuIcon className="!h-full !w-full" />
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
        <div ref={menuInnerRef}>
          <ul className="flex flex-col items-center justify-center space-y-24 py-8">
            {MENU_ITEMS.map((linkItem) => {
              const isServices = linkItem.href === "/services";
              return (
                <li
                  key={linkItem.href}
                  className="text-secondary-foreground active:bg-primary hover:bg-primary active:text-primary-foreground hover:text-primary-foreground m-0 w-full transition-colors"
                >
                  {isServices ? (
                    <>
                      <div
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className="flex items-center justify-center"
                      >
                        <Link
                          href={"/services"}
                          onClick={
                            servicesOpen ? () => {} : (e) => e.preventDefault()
                          }
                          className="inline-flex gap-2 py-4"
                        >
                          <span>{linkItem.icon}</span>
                          <span>{linkItem.name}</span>
                        </Link>
                      </div>

                      {servicesOpen && (
                        <ul className="bg-secondary pb-4 text-black">
                          {linkItem.subs?.map((service) => (
                            <li key={service.header}>
                              <Link
                                href={service.link}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-primary active:bg-primary active:text-primary-foreground hover:text-primary-foreground block px-6 py-2 text-center text-sm"
                              >
                                {service.header}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={linkItem.href}
                      onClick={() => {
                        if (pathname === linkItem.href) {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }
                      }}
                      className="inline-flex w-full items-center justify-center gap-2 py-4"
                    >
                      <span>{linkItem.icon}</span>
                      <span>{linkItem.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

import HeroImagePreview from "@/components/hero-image-preview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import WhatsAppLink from "@/components/whatsapp-link";
import { BENEFITS } from "@/lib/BENEFITS";
import { SERVICES } from "@/lib/SERVICES";
import { ArrowRight, MailIcon, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroImagePreview />
      <Separator className="mt-0 lg:hidden" />
      <section className="lg:hidden">
        <div className="container mx-auto px-4 py-8">
          <h2 className="mb-6 text-4xl">
            La Comodidad Empieza{" "}
            <span className="text-brand bg-secondary rounded-sm whitespace-nowrap italic">
              &nbsp; Aquí! &nbsp;
            </span>
          </h2>
          <br />
          <p className="px-8">
            Soluciones Confiables de Climatización, Calefacción y Gas para Cada
            Hogar. <br /> <br /> Desde aire acondicionado hasta suelo radiante,
            nuestro equipo de expertos ofrece soluciones personalizadas para que
            tu espacio sea siempre cómodo y eficiente.
            <br /> <br /> Nos especializamos en sistemas modernos de
            climatización, instalaciones de gas y calefacción, brindando
            seguridad, calidad y un rendimiento duradero en el que puedes
            confiar.
          </p>
        </div>
      </section>
      <Separator className="my-4 lg:mt-0" />
      <section>
        <div className="container mx-auto px-4 py-8 text-center lg:px-24 xl:px-64">
          <h2 className="mb-6 text-4xl">
            Por Qué <span className="text-brand italic">Nos Eligen</span>
          </h2>
          <br />
          <div className="grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(3,_1fr)] gap-x-16 gap-y-8">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                {benefit.icon}
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Separator className="my-4" />
      <section>
        <div className="container mx-auto px-4 py-8 md:px-12 lg:px-36 xl:px-68">
          <h2 className="mb-6 text-center text-4xl">
            Nuestros <span className="text-brand italic">servicios</span>
          </h2>
          <br />
          <div className="grid grid-cols-[repeat(2,_1fr)] grid-rows-[repeat(2,_1fr)] gap-4 md:gap-8">
            {SERVICES.map((service) => (
              <Card
                className="border-brand h-full justify-between transition-transform hover:scale-105"
                key={service.header}
              >
                <CardHeader>
                  <CardTitle className="md:text-2xl">
                    {service.header}
                  </CardTitle>
                  <CardDescription className="md:text-md">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-1">
                    {service.subs.map((sub) => (
                      <li key={sub} className="md:text-md text-sm">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={service.link}>
                      más <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Separator className="my-4" />
      <section>
        <div className="container mx-auto px-4 py-8">
          <h2 className="mb-6 text-center text-4xl">Contáctanos</h2>
          <br />
          <p className="text-center">
            Valoramos a cada cliente y nos enorgullece construir relaciones
            duraderas a lo largo de nuestras colaboraciones.
          </p>
          <br />
          <div className="flex flex-col items-center gap-3">
            <Link
              href={"tel:+34000000000"}
              className="inline-flex items-center gap-2 text-purple-900 hover:underline"
            >
              <PhoneCallIcon className="text-lime-500" />
              +34 000 000 000
            </Link>
            <Link
              href={"mailto:ejemplo@ejemplo.com"}
              className="inline-flex gap-2 text-purple-900 hover:underline"
            >
              <MailIcon className="text-lime-500" />
              ejemplo@ejemplo.com
            </Link>
            <WhatsAppLink />
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "Inicio | Empresa",
  description: "Empresa Empresa Empresa",
};

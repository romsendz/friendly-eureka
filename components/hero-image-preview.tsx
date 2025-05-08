"use client";

import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";

const HeroImagePreview = () => {
  const plugin = useRef([
    Autoplay({
      delay: 3500,
    }),
    Fade({}),
  ]);
  return (
    <section className="lg:grid lg:grid-cols-[1fr_1fr]">
      <div className="relative hidden bg-[linear-gradient(90deg,rgba(212,201,190,1)_0%,rgba(212,201,190,0)_100%)] px-6 py-6 lg:flex lg:flex-col lg:justify-evenly">
        <h2 className="mb-6 text-2xl lg:text-3xl xl:text-4xl">
          La Comodidad Empieza{" "}
          <span className="text-brand bg-secondary rounded-sm whitespace-nowrap italic">
            &nbsp; Aquí! &nbsp;
          </span>
        </h2>
        <p className="text-md xl:text-md lg:text-md px-2 xl:pr-48 2xl:text-xl">
          Soluciones Confiables de Climatización, Calefacción y Gas para Cada
          Hogar. <br /> <br /> Desde aire acondicionado hasta suelo radiante,
          nuestro equipo de expertos ofrece soluciones personalizadas para que
          tu espacio sea siempre cómodo y eficiente.{" "}
          <br className="hidden 2xl:block" />{" "}
          <br className="hidden 2xl:block" /> Nos especializamos en sistemas
          modernos de climatización, instalaciones de gas y calefacción,
          brindando seguridad, calidad y un rendimiento duradero en el que
          puedes confiar.
        </p>
      </div>
      <Carousel plugins={plugin.current} className="relative w-full">
        <CarouselContent>
          <CarouselItem className="relative">
            <Image
              priority
              src={"/hero_image_1.jpg"}
              alt="Constructor profesional que instala calefacción por suelo radiante"
              width={600}
              height={600}
              className="w-full brightness-75"
            />
            <span className="absolute top-3/4 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-amber-100 lg:hidden">
              Text 1
            </span>
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              priority
              src={"/hero_image_2.jpg"}
              alt="El constructor profesional y el cliente se dan un apretón de manos amistoso."
              width={600}
              height={600}
              className="w-full brightness-75"
            />
            <span className="absolute top-3/4 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-amber-100 lg:hidden">
              Text 2
            </span>
          </CarouselItem>
          <CarouselItem className="relative">
            <Image
              priority
              src={"/hero_image_3.jpg"}
              alt="Una mujer se recuesta en el sofá y disfruta de la comodidad del hogar."
              width={600}
              height={600}
              className="w-full brightness-75"
            />
            <span className="absolute top-3/4 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-amber-100 lg:hidden">
              Text 3
            </span>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute top-0 right-0 bottom-0 left-0 hidden bg-[linear-gradient(90deg,rgba(241,239,236,1)_1%,rgba(241,239,236,0)_25%)] lg:block" />
      </Carousel>
    </section>
  );
};

export default HeroImagePreview;

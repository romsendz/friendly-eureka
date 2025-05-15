import { Metadata } from "next";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h2 className="mb-12 text-center text-4xl font-bold">Gas</h2>
      <p className="mb-4">
        Ofrecemos instalaciones seguras y mantenimiento completo de sistemas de
        gas, incluyendo:
      </p>

      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Calderas y calentadores</li>
        <li>Instalación de gas y tomas de combustión</li>
        <li>Corrección de anomalías detectadas</li>
        <li>Certificados oficiales de instalación y térmicos</li>
        <li>Justificantes de corrección de anomalías</li>
      </ul>

      <p className="mb-4">
        Trabajamos cumpliendo todas las normativas vigentes para garantizar tu
        seguridad y confort.
      </p>

      <p className="font-semibold">
        ¿Necesitas ayuda con tu sistema de gas?
        <br />
        <br />
        <Link href="#contact" className="text-blue-600 hover:underline">
          Contáctanos
        </Link>{" "}
        y recibe asesoramiento profesional sin compromiso.
      </p>
    </>
  );
}

export const metadata: Metadata = {
  title: "Gas | Nuestros servicios | Climasur",
};

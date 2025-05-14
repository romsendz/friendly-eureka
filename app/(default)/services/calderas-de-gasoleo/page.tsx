import { Metadata } from "next";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <h2 className="mb-12 text-center text-4xl font-bold">
        Calderas de gasóleo
      </h2>
      <br />
      <p>Instalamos, páramos y mantenemos su caldera.</p>
      <br />
      <Link href={"#contact"} className="italic underline">
        Por favor póngase en contacto con nosotros para más detalles.
      </Link>
    </>
  );
}

export const metadata: Metadata = {
  title: "Calderas de gasóleo | Nuestros servicios | Climasur",
};

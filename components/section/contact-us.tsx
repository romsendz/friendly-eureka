import { MailIcon, MapPinCheckInsideIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import WhatsAppLink from "../whatsapp-link";
import { Card } from "../ui/card";

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="">
          <div>
            <h2 className="mb-6 text-center text-4xl">Contáctanos</h2>
            <br />
            <p className="text-center">
              Valoramos a cada cliente y nos enorgullece construir relaciones
              duraderas a lo largo de nuestras colaboraciones.
            </p>
            <br />
            <div className="flex flex-col items-center gap-3 text-[rgb(30,14,98,100%)]">
              <Link
                href={"tel:+34610664584"}
                className="inline-flex items-center gap-2"
              >
                <PhoneCallIcon className="text-lime-800" />
                +34 610 664 584
              </Link>
              <WhatsAppLink />
              <Link
                href={"mailto:santecnicaiberica2021@gmail.com"}
                className="inline-flex gap-2"
              >
                <MailIcon className="text-lime-800" />
                santecnicaiberica2021@gmail.com
              </Link>
              <span className="inline-flex gap-2">
                <MapPinCheckInsideIcon className="text-lime-800" />
                C/ Rio Lozoya 22, El Álamo, España
              </span>
            </div>
          </div>
          <br />
          <div>
            <h2 className="mb-6 hidden text-center text-4xl">
              Puedes enviarnos un correo
            </h2>
            <br />
            <p className="text-center">
              O si lo prefieres,
              <br />
              déjanos un mensaje y te respondemos en cuanto podamos:
            </p>
            <Card></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

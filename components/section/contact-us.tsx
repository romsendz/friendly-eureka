import { MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import WhatsAppLink from "../whatsapp-link";

const ContactUs = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-center text-4xl">Contáctanos</h2>
        <br />
        <div>
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
      </div>
    </section>
  );
};

export default ContactUs;

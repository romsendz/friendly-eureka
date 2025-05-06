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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

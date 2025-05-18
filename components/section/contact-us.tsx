import { MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import WhatsAppLink from "../whatsapp-link";
import ContactForm from "../form/contact-form";
import { Separator } from "../ui/separator";
import Image from "next/image";
import CompanyName from "../company-name";

const ContactUs = ({ className }: { className?: string }) => {
  return (
    <section className={className} id="contact">
      <div className="container mx-auto lg:px-16 xl:px-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-6 text-center text-4xl lg:block">
              Puedes enviarnos un correo
            </h2>
            <ContactForm className="mx-8" />
          </div>
          <div className="mt-16 lg:mt-0 lg:flex lg:flex-col lg:justify-between">
            <div>
              <h2 className="mb-6 text-center text-4xl">Contáctanos</h2>
              <br className="lg:hidden" />
              <p className="text-center xl:px-24">
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
                <CompanyName />
              </div>
            </div>
            <Separator className="bg-primary-foreground hidden lg:my-8 lg:block" />
            <div className="relative mx-auto hidden h-2/3 min-h-auto w-2/3 lg:block">
              <Image
                priority
                src={"/contact-image.png"}
                fill
                alt={"herramientas"}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

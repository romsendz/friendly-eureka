"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const WhatsAppLink = () => {
  return (
    <div className="inline-flex items-center gap-2">
      <SocialIcon
        title="Whatsapp"
        onClick={(e) => e.preventDefault()}
        url="https://api.whatsapp.com/"
        style={{ height: "1.5rem", width: "1.5rem" }}
      />
      <Link
        href={`https://api.whatsapp.com/send?phone=34610664584&text=${encodeURIComponent(
          `Estoy interesado(a) en obtener más información sobre sus servicios de climatización, aerotermia, suelo radiante, aire acondicionado o bombas de calor.\n\nMe gustaría saber:\n\nPor favor, contáctenme. Aquí están mis datos:\n\nNombre: [Tu nombre]\nTeléfono: [Tu número]\nUbicación: [Tu ciudad]\n\n¡Gracias! Espero su respuesta.`,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex gap-2 text-[rgb(30,14,98,100%)]"
      >
        Escribe en whatsapp
      </Link>
    </div>
  );
};

export default WhatsAppLink;

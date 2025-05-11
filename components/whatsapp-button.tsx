import clsx from "clsx";
import { SocialIcon } from "react-social-icons";

const WhatsAppButton = ({ className }: { className?: string }) => {
  return (
    <SocialIcon
      title="Whatsapp"
      url={`https://api.whatsapp.com/send?phone=34610664584&text=${encodeURIComponent(
        `Estoy interesado(a) en obtener más información sobre sus servicios de climatización, aerotermia, suelo radiante, aire acondicionado o bombas de calor.\n\nMe gustaría saber:\n\nPor favor, contáctenme. Aquí están mis datos:\n\nNombre: [Tu nombre]\nTeléfono: [Tu número]\nUbicación: [Tu ciudad]\n\n¡Gracias! Espero su respuesta.`,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "transition-all duration-200 hover:scale-110 hover:brightness-110 hover:filter",
        className,
      )}
    />
  );
};
export default WhatsAppButton;

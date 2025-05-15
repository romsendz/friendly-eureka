import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";

export const SERVICES = [
  {
    header: "Climatización",
    description:
      "Soluciones eficientes para controlar la temperatura interior.",
    link: "/services/climatizacion",
    buttonIcon: <ArrowRightIcon />,
    buttonText: "más",
    subs: [
      "Aire Acondicionado",
      "Aerotermia",
      "Fancoils",
      "Conductos de fibra",
    ],
  },
  {
    header: "Gas",
    description: (
      <>
        Instalaciones seguras y mantenimiento de sistemas de gas. <br />
        <span className="text-primary italic">
          Por favor póngase en contacto con nosotros para una consulta.
        </span>
      </>
    ),
    link: "/services/gas",

    buttonLink: "#contact",
    buttonText: "contáctanos",
    buttonIcon: <ArrowDownIcon />,
    subs: [
      "Calderas",
      "Calentadores",
      "Instalación de gas",
      "Toma de combustión",
      "Corrección de anomalías",
      "Certificados de instalaciones de gas",
      "Certificados termicos",
      "Justificante de correccion de anomalias",
    ],
  },
  {
    header: "Calefacción",
    description: "Sistemas modernos para un calor confortable en casa.",
    link: "/services/calefaccion",
    buttonIcon: <ArrowRightIcon />,
    buttonText: "más",
    subs: ["Suelo radiante", "Radiadores"],
  },
  {
    header: "Calderas de gasóleo",
    description: (
      <>
        Instalamos, reparamos y mantenemos su caldera. <br />
        <span className="text-primary italic">
          Por favor póngase en contacto con nosotros para una consulta.
        </span>
      </>
    ),
    link: "/services/calderas-de-gasoleo",
    buttonLink: "#contact",
    buttonText: "contáctanos",
    buttonIcon: <ArrowDownIcon />,
    subs: [],
  },
];

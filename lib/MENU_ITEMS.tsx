import {
  BriefcaseIcon,
  HandshakeIcon,
  HardHatIcon,
  HomeIcon,
} from "lucide-react";
import { SERVICES } from "./SERVICES";

const MENU_ITEMS = [
  {
    name: <span className="font-bold">Inicio</span>,
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: (
      <>
        Nuestros <span className="font-bold">servicios</span>
      </>
    ),
    href: "/services",
    icon: <HardHatIcon />,
    subs: SERVICES,
  },
  {
    name: (
      <>
        Nuestros <span className="font-bold">proyectos</span>
      </>
    ),
    href: "/projects",
    icon: <BriefcaseIcon />,
  },
  {
    name: <span className="font-bold">Contacto</span>,
    href: "/contact",
    icon: <HandshakeIcon />,
  },
];

export default MENU_ITEMS;

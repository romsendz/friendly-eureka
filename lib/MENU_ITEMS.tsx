import {
  BriefcaseIcon,
  HandshakeIcon,
  HardHatIcon,
  HomeIcon,
} from "lucide-react";

const MENU_ITEMS = [
  { name: "Inicio", href: "/", icon: <HomeIcon /> },
  { name: "Nuestros servicios", href: "/services", icon: <HardHatIcon /> },
  {
    name: "Nuestros proyectos",
    href: "/projects",
    icon: <BriefcaseIcon />,
  },
  { name: "Contacto", href: "/contact", icon: <HandshakeIcon /> },
];

export default MENU_ITEMS;

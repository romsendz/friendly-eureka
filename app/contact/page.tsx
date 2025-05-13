import ContactUs from "@/components/section/contact-us";
import { Metadata } from "next";

export default function Page() {
  return <ContactUs className="py-12" />;
}

export const metadata: Metadata = {
  title: "Contacto | Climasur",
};

import Link from "next/link";
import styles from "./contact-button.module.css";
import { Button } from "./ui/button";
import clsx from "clsx";

const ContactButton = () => {
  return (
    <Button
      asChild
      className={clsx(styles.contactButton, "md:text-md lg:text-lg xl:text-xl")}
    >
      <Link href="/contact">Contáctenos</Link>
    </Button>
  );
};

export default ContactButton;

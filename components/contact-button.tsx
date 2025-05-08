import Link from "next/link";
import styles from "./contact-button.module.css";
import { Button } from "./ui/button";
import clsx from "clsx";

const ContactButton = () => {
  return (
    <Button
      asChild
      className={clsx(
        styles.contactButton,
        "lg:text-md text-xs md:text-sm xl:text-lg",
      )}
    >
      <Link href="/contact">Contáctenos</Link>
    </Button>
  );
};

export default ContactButton;

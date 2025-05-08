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
      <Link
        className="!px-3 text-white shadow-2xl [box-shadow:rgba(136,_165,_191,_0.3)_6px_2px_16px_0px,_rgba(255,_255,_255,_0.2)_-6px_-2px_16px_0px] md:![padding:auto] xl:!px-5 xl:!py-5"
        href="/contact"
      >
        Contáctenos
      </Link>
    </Button>
  );
};

export default ContactButton;

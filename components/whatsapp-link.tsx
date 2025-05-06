"use client";

import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const WhatsAppLink = () => {
  return (
    <div className="inline-flex items-center gap-2 text-purple-900 hover:underline">
      <SocialIcon
        title="Whatsapp"
        onClick={(e) => e.preventDefault()}
        url="https://api.whatsapp.com/"
        style={{ height: "1.5rem", width: "1.5rem" }}
      />
      <Link
        href={"https://api.whatsapp.com/"}
        className="inline-flex gap-2 text-purple-900 hover:underline"
      >
        Escribe en whatsapp
      </Link>
    </div>
  );
};

export default WhatsAppLink;

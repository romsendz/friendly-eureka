import { clsx } from "clsx";
import { StarsIcon } from "lucide-react";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={clsx(
        "text-primary-foreground flex items-center gap-2 text-2xl leading-tight font-bold hover:text-white lg:text-3xl",
        className,
      )}
    >
      <StarsIcon />
      Empresa
    </Link>
  );
};

export default Logo;

import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  className,
  maxWidth = 216,
}: {
  className?: string;
  maxWidth?: number;
}) => {
  const aspectRatio = 3;
  return (
    <Link
      href={"/"}
      className={clsx(
        "relative inline-block leading-tight hover:text-white",
        className,
      )}
      style={{
        maxWidth: `${maxWidth}px`,
        aspectRatio: aspectRatio,
        width: "100%",
      }}
    >
      <Image
        priority
        src={"/logo.png"}
        quality={80}
        fill
        alt={"Logo"}
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;

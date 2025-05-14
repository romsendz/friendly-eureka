import Image from "next/image";
import { ReactNode } from "react";

type ServiceProps = {
  name: string;
  description: ReactNode;
  image: string;
  imageAlt: string;
};

const Service = ({ name, description, image, imageAlt }: ServiceProps) => {
  return (
    <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
      <div className="relative aspect-video w-full max-w-xl">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="mt-2 rounded-xl object-cover shadow-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div>
        <h2 className="mb-4 text-3xl font-semibold text-blue-900">{name}</h2>
        {description}
      </div>
    </section>
  );
};

export default Service;

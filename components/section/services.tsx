import { SERVICES } from "@/lib/SERVICES";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import clsx from "clsx";

const Services = ({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <section style={style}>
      <div
        className={clsx(
          "container mx-auto md:px-12 lg:px-36 xl:px-68",
          className,
        )}
      >
        <h2 className="mb-6 text-center text-4xl">
          Nuestros <span className="text-brand italic">servicios</span>
        </h2>
        <br />
        <div className="grid gap-6 md:grid-cols-[repeat(2,_1fr)] md:grid-rows-[repeat(2,_1fr)] md:gap-8">
          {SERVICES.map((service) => (
            <Card
              className="border-brand h-full justify-between transition-transform hover:scale-105"
              key={service.header}
            >
              <CardHeader>
                <CardTitle className="md:text-2xl">{service.header}</CardTitle>
                <CardDescription className="md:text-md">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mb-auto">
                <ul className="flex flex-col gap-1">
                  {service.subs.map((sub) => (
                    <li
                      key={sub}
                      className="md:text-md flex items-center gap-2 text-xs"
                    >
                      <CheckIcon className="size-4 shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="mx-auto w-2/3"
                  variant={service.buttonLink ? "secondary" : "default"}
                >
                  <Link href={service.buttonLink || service.link}>
                    {service.buttonText} {service.buttonIcon}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

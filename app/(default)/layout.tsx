import ContactUs from "@/components/section/contact-us";
import { Separator } from "@/components/ui/separator";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container mx-auto px-8 py-16">{children}</div>
      <Separator className="mb-4 border-8" />
      <ContactUs className="py-12" />
    </>
  );
}

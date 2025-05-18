"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2Icon, SendIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

// Define schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z
    .string()
    .email({ message: "Dirección de correo electrónico no válida" }),
  phone: z.string(),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

const ContactForm = ({ className }: { className?: string }) => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
    mode: "onSubmit", // Validate on blur
    reValidateMode: "onChange", // Revalidate on change
  });

  const { formState, reset } = form;

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        <span className="text-lime-800">
          Su mensaje ha sido enviado exitosamente.
        </span>,
        {
          description: (
            <span className="text-gray-600">
              Nos pondremos en contacto con usted lo antes posible.
            </span>
          ),
        },
      );

      setEmailSent(true); // ✅ Only show success message on real success

      reset();

      const contactSection = document.getElementById("contact");
      setTimeout(() => {
        contactSection?.scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth",
        });
      }, 10);

      // Reset success state after a delay
    } catch (error) {
      console.error(error);
      toast.error(<span className="text-red-800">Algo salió mal.</span>, {
        description: (
          <span className="text-gray-600">Por favor, inténtalo de nuevo </span>
        ),
      });
    }
  };

  return (
    <div className="mx-auto mt-12 w-full max-w-md">
      {emailSent && (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-center text-green-700">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </div>
      )}
      <Card
        className={clsx("bg-primary px-6", className, {
          ["hidden"]: emailSent,
        })}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div>
              <h3 className="text-primary-foreground text-md mb-2 font-semibold lg:text-lg">
                Nombre *
              </h3>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="on"
                        placeholder="Su nombre"
                        className="text-background h-8 rounded-full border-gray-200 px-5 lg:h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <h3 className="text-primary-foreground text-md mb-2 font-semibold lg:text-lg">
                Mensaje
              </h3>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Describa su solicitud"
                        className="text-background border-primary-foreground min-h-24 rounded-lg p-4 lg:min-h-42"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <h3 className="text-primary-foreground text-md mb-2 font-semibold lg:text-lg">
                Email *
              </h3>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="on"
                        placeholder="Tu correo electrónico"
                        className="text-background border-primary-foreground h-8 rounded-full px-5 lg:h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <h3 className="text-primary-foreground text-md mb-2 font-semibold lg:text-lg">
                Teléfono *
              </h3>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoComplete="on"
                        placeholder="Tu número de teléfono"
                        className="text-background border-primary-foreground h-8 rounded-full px-5 lg:h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-6 flex flex-col justify-end gap-4 lg:mt-12">
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex cursor-pointer flex-row items-center space-x-1">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="text-primary-foreground">
                      <FormLabel className="inline cursor-pointer">
                        Al hacer clic en el botón acepto la{" "}
                        <Link
                          className="underline hover:text-amber-700 active:text-amber-700"
                          href={"/privacy-policy"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          política de privacidad.
                        </Link>
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size={"lg"}
                disabled={formState.isSubmitting}
                className="w-full bg-teal-400 px-8 py-2 text-white hover:bg-teal-500"
              >
                {formState.isSubmitting ? (
                  <>
                    <Loader2Icon className="mr-2 animate-spin" />
                    Envío...
                  </>
                ) : (
                  <>
                    Enviar <SendIcon />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default ContactForm;

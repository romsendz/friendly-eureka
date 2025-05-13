import ProjectsImageGallery from "@/components/projects-image-gallery";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <h2 className="mb-12 text-center text-4xl">Nuestros proyectos</h2>
      <p className="mx-auto max-w-3xl px-4 text-center">
        Expertos en soluciones de climatización y bienestar. Desde hace muchos
        años ofrecemos productos y servicios de calidad para clientes
        particulares y empresas.
        <br />
        <br />
        Nuestro equipo profesional garantiza el máximo confort y eficiencia
        energética. Colaboramos con fabricantes de renombre, brindando sistemas
        avanzados de climatización, aire acondicionado y energías renovables.
        <br />
        <br />
        Tu satisfacción es nuestra prioridad. Establecemos relaciones basadas en
        la confianza y el compromiso, cumpliendo los más altos estándares de
        calidad en cada proyecto.
        <br />
        <br />
        ¡Gracias por elegir CLIMASUR !Esperamos mejorar tu hogar o negocio.
        Contáctanos para más información.
      </p>
      <br />
      <br />
      <br />
      <div className="relative mx-auto lg:max-w-5xl">
        <ProjectsImageGallery />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Nuestros proyectos | Climasur",
};

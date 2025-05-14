import Service from "@/components/service";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <h2 className="mb-12 text-center text-4xl font-bold">Calefacción</h2>
      <Service
        name={"Suelo radiante"}
        image={"/other/suelo-radiante.jpg"}
        imageAlt="Suelo radiante"
        description={
          <>
            <p>
              El suelo radiante por agua es un sistema de calefacción y, en
              algunos casos, de refrigeración, que utiliza una red de tuberías
              bajo el suelo para distribuir agua caliente o fría. Este sistema
              es eficiente, ya que el suelo acumula calor y lo libera
              gradualmente, proporcionando una temperatura uniforme y
              confortable.
            </p>
            <h3 className="mt-4 mb-1 text-2xl font-semibold">Cómo funciona:</h3>
            <ol className="list-inside list-decimal space-y-1">
              <li>
                <strong>Circuito de tuberías:</strong> Se instalan tuberías,
                generalmente de polietileno o cobre, bajo el suelo.
              </li>
              <li>
                <strong>Agua caliente/fría:</strong> El agua se calienta o se
                enfría en una caldera o bomba de calor y se bombea a través del
                circuito de tuberías.
              </li>
              <li>
                <strong>Radiación de calor:</strong> El calor o frío del agua se
                transfiere al suelo, que a su vez lo irradia al ambiente.
              </li>
              <li>
                <strong>Temperatura uniforme:</strong> Al no depender de
                convección, el sistema evita los puntos fríos y las temperaturas
                desiguales.
              </li>
            </ol>
            <h3 className="mt-4 mb-1 text-2xl font-semibold">Ventajas:</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Ahorro energético:</strong> Utiliza agua a baja
                temperatura, lo que reduce el consumo de energía, especialmente
                si se combina con fuentes de energía renovables.
              </li>
              <li>
                <strong>Comodidad:</strong> Proporciona una temperatura uniforme
                y confortable, con una sensación de calor agradable en los pies.
              </li>
              <li>
                <strong>Salud:</strong> Reduce la circulación de polvo,
                mejorando la calidad del aire y favoreciendo la salud de las
                personas.
              </li>
              <li>
                <strong>Flexibilidad:</strong> Puede instalarse en diferentes
                tipos de suelos y en diversos espacios.
              </li>
              <li>
                <strong>Versatilidad:</strong> Se puede utilizar tanto para
                calefacción como para refrigeración.
              </li>
            </ul>
            <h3 className="mt-4 mb-1 text-2xl font-semibold">Desventajas:</h3>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>Instalación:</strong> El sistema requiere una
                instalación más compleja que otros sistemas de calefacción.
              </li>
              <li>
                <strong>Tiempo de respuesta:</strong> El sistema tarda más
                tiempo en calentar o enfriar el ambiente que otros sistemas.
              </li>
              <li>
                <strong>Mantenimiento:</strong> Requiere un mantenimiento
                periódico para asegurar el buen funcionamiento del sistema.
              </li>
            </ul>
          </>
        }
      />
      <Service
        name={"Radiadores"}
        image={"/other/radiadores.jpg"}
        imageAlt="Radiadores"
        description={
          <>
            <p>
              Nos especializamos en la instalación, mantenimiento y reparación
              de sistemas de calefacción por radiadores, ofreciendo soluciones
              eficientes, seguras y adaptadas a las necesidades de cada espacio.
            </p>
          </>
        }
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "Calefacción | Nuestros servicios | Climasur",
};

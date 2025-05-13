import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climatización | Climasur",
};

export default function Page() {
  return (
    <div className="px-4 lg:px-20">
      <h2 className="mb-12 text-center text-4xl font-bold">Climatización</h2>

      {/* Aire Acondicionado */}
      <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video w-full max-w-xl">
          <Image
            src={"/other/aire-acondicionado.jpg"}
            alt="Aire acondicionado"
            fill
            className="rounded-xl object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-blue-900">
            Aire Acondicionado
          </h2>
          <p className="mb-4">Tipos principales de aire acondicionado:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Split (1x1):</strong> Unidad interior y exterior, ideal
              para una habitación.
            </li>
            <li>
              <strong>Multisplit:</strong> Una unidad exterior conecta con
              varias interiores.
            </li>
            <li>
              <strong>Portátiles:</strong> Sin instalación fija, menos
              eficientes.
            </li>
            <li>
              <strong>Centralizado:</strong> Ideal para viviendas grandes o
              edificios, con conductos de aire.
            </li>
            <li>
              <strong>Cassette:</strong> Se instala en techos, común en oficinas
              y comercios.
            </li>
          </ul>
          <div className="mt-6">
            <p className="mb-2 font-semibold text-blue-800">
              Diferencias con la aerotermia:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                El aire acondicionado se enfoca en climatización (frío/calor),
                mientras que la aerotermia también produce agua caliente
                sanitaria (ACS).
              </li>
              <li>
                La aerotermia es más eficiente y sostenible para uso integral
                durante todo el año.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Aerotermia */}
      <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video w-full max-w-xl">
          <Image
            src={"/other/aerotermia.jpg"}
            alt="aerotermia"
            fill
            className="rounded-xl object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-blue-900">
            Aerotermia
          </h2>
          <p className="mb-4">
            Aerotermia es una tecnología que aprovecha la energía térmica del
            aire exterior para climatizar espacios y producir agua caliente
            sanitaria (ACS). Funciona mediante una bomba de calor aerotérmica.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Eficiencia energética:</strong> Consume poca electricidad
              porque gran parte de la energía que utiliza proviene del aire.
            </li>
            <li>
              <strong>Versatilidad:</strong> Funciona para calefacción,
              refrigeración y agua caliente todo el año.
            </li>
            <li>
              <strong>Sostenibilidad:</strong> Es una energía renovable
              reconocida por la Unión Europea.
            </li>
            <li>
              <strong>Compatibilidad:</strong> Se integra con suelo radiante,
              radiadores de baja temperatura y fan coils.
            </li>
          </ul>
        </div>
      </section>

      {/* Fancoils */}
      <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video w-full max-w-xl">
          <Image
            src={"/other/fancoil.jpg"}
            alt="Fancoil"
            fill
            className="rounded-xl object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-blue-900">
            Fancoils
          </h2>
          <p className="mb-4">
            Un fancoil es un componente clave en sistemas de climatización que
            permite calentar o enfriar el aire en espacios interiores. Existen
            diversos tipos según su instalación:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Fancoil horizontal de conductos</li>
            <li>Fancoil tipo cassette de techo</li>
            <li>Fancoil de suelo o consola</li>
            <li>Fancoil vertical de alto rendimiento</li>
          </ul>
        </div>
      </section>

      <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-video w-full max-w-xl">
          <Image
            src={"/other/conductos-de-fibra.jpg"}
            alt="conductos-de-fibra"
            fill
            className="rounded-xl object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-semibold text-blue-900">
            Conductos de fibra
          </h2>
          <p>
            Los conductos de fibra son una solución eficiente y ligera para la
            distribución del aire en sistemas de climatización. Ofrecen un buen
            aislamiento térmico y acústico, son resistentes a la humedad y
            permiten una instalación más rápida y limpia que los conductos
            metálicos tradicionales.
          </p>
        </div>
      </section>
    </div>
  );
}

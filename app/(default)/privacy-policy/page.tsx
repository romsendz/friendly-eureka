import { Metadata } from "next";

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Política de privacidad
      </h2>

      <div className="space-y-8 text-lg leading-relaxed text-gray-800">
        <p>
          La presente Política de Privacidad tiene el objetivo de dar a conocer
          el modo en que se recaban, tratan y protegen los datos de carácter
          personal que pudieran proporcionarse por los usuarios de este sitio
          web.
        </p>
        <h3 className="text-2xl font-semibold">
          Uso y tratamiento de los datos de carácter personal
        </h3>
        <p>
          SANTECNICA IBERICA 2021 SL recopila y trata datos personales de los
          usuarios (como nombre, dirección, teléfono, dirección de correo
          electrónico y otros similares) para poder prestarle nuestros
          servicios, facilitarle los productos que solicite de acuerdo a sus
          gustos y preferencias o mantenerle informado de nuestras novedades.
        </p>
        <p>
          La información de carácter personal que pudiera proporcionar a través
          de la página web será incorporada a un fichero titularidad de
          SANTECNICA IBERICA 2021 SL.
        </p>
        <p>
          Utilizamos Facebook Pixel para analizar el comportamiento de
          navegación de los usuarios y medir la eficacia de nuestras campañas
          publicitarias. Esta herramienta solo se activa tras obtener su
          consentimiento a través del banner de cookies. La información
          recopilada puede ser compartida con Meta. Para más detalles, consulte
          la{" "}
          <a
            href="https://www.facebook.com/about/privacy/"
            className="text-blue-600 underline"
          >
            Política de privacidad de Facebook
          </a>
          .
        </p>
        <p>
          Los empleados de SANTECNICA IBERICA 2021 SL serán los destinatarios de
          la información recogida. Esta compañía no venderá, cederá ni
          distribuirá la información personal que es recopilada sin su
          consentimiento.
        </p>

        <h3 className="text-2xl font-semibold">
          Ejercicio de derechos: acceso, rectificación, cancelación y oposición
        </h3>
        <p>
          Los usuarios que hayan facilitado sus datos personales En cualquier
          momento pueden revocar el consentimiento otorgado para el tratamiento
          de sus datos personales por escrito, a través de correo electronico
          santecnicaiberica2021@gmail.com, remitiéndonos una copia de su DNI.
        </p>

        <h3 className="text-2xl font-semibold">
          Seguridad de su información personal
        </h3>
        <p>
          Utilizamos medidas de seguridad para proteger sus datos personales y
          evitar su divulgación no autorizada, uso indebido o alteración.
        </p>
        <p>
          No obstante, el usuario debe conocer que las medidas de seguridad en
          internet no son completamente infranqueables y ninguna transmisión en
          internet es completamente segura o libre de errores, en cuyo caso
          Santecnica Iberica 2021 SL no podrá hacerse responsable.
        </p>

        <h3 className="text-2xl font-semibold">Enlaces a sitios de terceros</h3>
        <p>
          Este sitio web podría contener enlaces a sitios de terceros. Estos
          sitios cuentan con sus propias políticas de privacidad que le instamos
          a revisar.
        </p>

        <h3 className="text-2xl font-semibold">Menores</h3>
        <p>
          Si alguno de los productos o servicios fuera dirigido a menores de 14
          años, Santecnica Iberica 2021 no recopilará datos personales del menor
          a menos que lo permitan las leyes vigentes y tenga el consentimiento
          expreso de sus padres o tutores legales.
        </p>

        <h3 className="text-2xl font-semibold">
          Cambios en la política de privacidad
        </h3>
        <p>
          Santecnica Iberica 2021 SL se reserva el derecho a actualizar o
          modificar los términos de su política de privacidad en cualquier
          momento y sin previo aviso debido a cambios en la legislación o a su
          propio criterio. Las modificaciones se aplicarán sólo a la información
          recabada después de su efectiva publicación.
        </p>

        <h3 className="text-2xl font-semibold">Legislación aplicable</h3>
        <p>
          La relación con el usuario y cualquier controversia derivada del uso
          del site se regirá y someterá a las leyes de España.
        </p>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Política de privacidad | Climasur",
};

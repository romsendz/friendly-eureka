import { Metadata } from "next";

export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="mb-8 text-center text-4xl font-bold">Aviso Legal</h2>

      <div className="space-y-6 text-lg leading-relaxed text-gray-800">
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, del 11 de julio, de
          servicios de la Sociedad de la Información y Comercio Electrónico
          (LSSICE) se exponen a continuación los datos identificativos de la
          empresa titular de esta página web.
        </p>

        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>Denominación social:</strong> Santecnica Iberica 2021 SL
          </li>
          <li>
            <strong>Número de identificación fiscal:</strong> B06802763
          </li>
          <li>
            <strong>Domicilio social:</strong> C/ Río Lozoya 22, El Álamo
          </li>
          <li>
            <strong>Correo electrónico:</strong>
            <br className="md:hidden" /> santecnicaiberica2021@gmail.com
          </li>
          <li>
            <strong>Teléfono:</strong> 610664584
          </li>
        </ul>

        <p>
          Este sitio web ha sido creado por la empresa Santecnica Iberica 2021
          SL con carácter informativo y para uso personal de los usuarios.
        </p>

        <p>
          A través de este Aviso legal, se pretende regular el acceso y uso de
          este sitio web, así como la relación entre el sitio web y sus
          usuarios.
        </p>

        <p>
          Accediendo a este sitio web se aceptan los siguientes términos y
          condiciones:
        </p>

        <ul className="list-inside list-disc space-y-1">
          <li>
            El acceso a este sitio web es responsabilidad exclusiva de los
            usuarios.
          </li>
          <li>
            El simple acceso a este sitio web no supone entablar ningún tipo de
            relación comercial entre Santecnica Iberica 2021 y el usuario.
          </li>
          <li>
            El acceso y la navegación en este sitio web supone aceptar y conocer
            las advertencias legales, condiciones y términos de uso contenidas
            en ella.
          </li>
          <li>
            El titular del sitio web puede ofrecer servicios o productos que
            podrán encontrarse sometidos a unas condiciones particulares propias
            que, según los casos, sustituyan, completen y/o modifiquen las
            presentes condiciones, y sobre las cuales se informará al usuario en
            cada caso concreto.
          </li>
        </ul>

        <p>
          Este sitio web ha sido creado por la empresa Santecnica Iberica 2021
          SL con carácter informativo y para uso personal de los usuarios.
        </p>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Aviso Legal | Climasur",
};

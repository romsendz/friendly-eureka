import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h2>Nuevo mensaje del formulario de contacto</h2>
    <p>
      <strong>Nombre:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Teléfono:</strong> {phone}
    </p>
    {message && (
      <p>
        <strong>Mensaje:</strong>
        <br />
        {message}
      </p>
    )}
  </div>
);

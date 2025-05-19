import { EmailTemplate } from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message, name_confirm } = await req.json();

  // 🐝 Honeypot check
  if (name_confirm && name_confirm.trim() !== "") {
    console.warn("❌ Spam bot blocked");
    return NextResponse.json({ error: "Bot detected" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Climasur | mail service <onboarding@resend.dev>",
      to: "santecnicaiberica2021@gmail.com",
      subject: `Climasur: Su solicitud | ${name}`,
      replyTo: email,
      react: (
        <EmailTemplate
          name={name}
          email={email}
          phone={phone}
          message={message}
        />
      ),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

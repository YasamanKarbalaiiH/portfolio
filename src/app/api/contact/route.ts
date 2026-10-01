import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["yasamankarbalaii@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json(
      { message: "Email sent successfully." },
      { status: 200 },
    );
  } catch {
    return Response.json({ error: "Something went wrong." }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, type, city, email, message } = await req.json();

    if (!type) {
      return NextResponse.json({ error: "Mangler type" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.migadu.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const typeLabel =
      type === "florist" ? "Blomsterbutikk / florist"
      : type === "bonde" ? "Blomsterbonde / dyrker"
      : type === "region" ? "By eller region"
      : type;

    // Varsle admin
    await transporter.sendMail({
      from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
      to: "dibber@amdal.dev",
      subject: `💡 Nytt forslag: ${typeLabel}${name ? ` — ${name}` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf7f2; padding: 40px; border-radius: 16px;">
          <h2 style="color: #2d5a27;">Nytt forslag fra Blomsterkollektivet</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; width: 120px;">Type</td><td style="color: #1a1a1a; font-weight: bold;">${typeLabel}</td></tr>
            ${name ? `<tr style="border-top:1px solid #eee;"><td style="padding: 8px 0; color: #888;">Navn</td><td style="color: #1a1a1a;">${name}</td></tr>` : ""}
            ${city ? `<tr style="border-top:1px solid #eee;"><td style="padding: 8px 0; color: #888;">By</td><td style="color: #1a1a1a;">${city}</td></tr>` : ""}
            ${email ? `<tr style="border-top:1px solid #eee;"><td style="padding: 8px 0; color: #888;">E-post</td><td style="color: #1a1a1a;">${email}</td></tr>` : ""}
            ${message ? `<tr style="border-top:1px solid #eee;"><td style="padding: 8px 0; color: #888; vertical-align:top;">Melding</td><td style="color: #1a1a1a;">${message}</td></tr>` : ""}
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">${new Date().toLocaleString("nb-NO")}</p>
        </div>
      `,
    });

    // Bekreftelse til innsender (hvis e-post oppgitt)
    if (email) {
      await transporter.sendMail({
        from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Takk for forslaget ditt 🌸",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf7f2; padding: 40px; border-radius: 16px;">
            <h2 style="color: #2d5a27;">Takk for forslaget! 🌸</h2>
            <p style="color: #444; line-height: 1.7;">
              Vi har mottatt forslaget ditt${name ? ` om <strong>${name}</strong>` : ""} og ser på det snart.
              Blomsterkollektivet bygges av — og for — folk som elsker norske blomster.
            </p>
            <p style="color: #888; font-size: 13px;">Spørsmål? Svar på denne e-posten.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Forslag-feil:", err);
    return NextResponse.json({ error: "Serverfeil" }, { status: 500 });
  }
}

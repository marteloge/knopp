import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      navn, butikknavn, by, epost, telefon,
      instagram, nettside, spesialer, melding,
    } = body;

    if (!navn || !butikknavn || !by || !epost) {
      return NextResponse.json({ error: "Mangler felt" }, { status: 400 });
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

    const spesialerText = Array.isArray(spesialer) && spesialer.length > 0
      ? spesialer.join(", ")
      : "Ikke oppgitt";

    await transporter.sendMail({
      from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
      to: "dibber@amdal.dev",
      replyTo: epost,
      subject: `🌿 Ny florist-registrering — ${butikknavn} (${by})`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f0f7ee; padding: 40px; border-radius: 16px;">
          <h1 style="color: #2d5a27; font-size: 28px; margin-bottom: 4px;">Ny florist på Blomsterkollektivet 🌿</h1>
          <p style="color: #666; font-size: 14px; margin-bottom: 32px;">Innsendt ${new Date().toLocaleString("nb-NO")}</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #888; font-size: 14px; width: 140px;">Navn</td><td style="padding: 10px 0; color: #1a1a1a; font-weight: bold;">${navn}</td></tr>
            <tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px;">Butikk</td><td style="padding: 10px 0; color: #1a1a1a;">${butikknavn}</td></tr>
            <tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px;">By</td><td style="padding: 10px 0; color: #1a1a1a;">${by}</td></tr>
            <tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px;">E-post</td><td style="padding: 10px 0; color: #1a1a1a;">${epost}</td></tr>
            ${telefon ? `<tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px;">Telefon</td><td style="padding: 10px 0; color: #1a1a1a;">${telefon}</td></tr>` : ""}
            ${instagram ? `<tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px;">Instagram</td><td style="padding: 10px 0; color: #1a1a1a;">${instagram}</td></tr>` : ""}
            ${nettside ? `<tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px;">Nettside</td><td style="padding: 10px 0; color: #1a1a1a;"><a href="${nettside}" style="color: #3d7a35;">${nettside}</a></td></tr>` : ""}
            <tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px; vertical-align: top;">Spesialer</td><td style="padding: 10px 0; color: #1a1a1a;">${spesialerText}</td></tr>
            ${melding ? `<tr style="border-top: 1px solid #d5e8d0;"><td style="padding: 10px 0; color: #888; font-size: 14px; vertical-align: top;">Om seg selv</td><td style="padding: 10px 0; color: #1a1a1a;">${melding}</td></tr>` : ""}
          </table>

          <p style="color: #888; font-size: 12px; margin-top: 24px;">Sendt via blomsterkollektivet.no/florist</p>
        </div>
      `,
    });

    // Bekreftelse til florist
    await transporter.sendMail({
      from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
      to: epost,
      subject: `Velkommen til Blomsterkollektivet, ${navn}! 🌿`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f0f7ee; padding: 40px; border-radius: 16px;">
          <h1 style="color: #2d5a27; font-size: 28px;">Velkommen, ${navn}! 🌿</h1>
          <p style="color: #444; line-height: 1.6;">
            Vi har mottatt registreringen din for <strong>${butikknavn}</strong>.
            Du er nå på listen vår og vil bli kontaktet innen 2 virkedager.
          </p>
          <div style="margin: 24px 0; padding: 20px; background: white; border-radius: 12px; border: 1px solid #d5e8d0;">
            <h3 style="color: #2d5a27; margin: 0 0 12px;">🌟 Du er grunnlegger-florist!</h3>
            <p style="color: #444; margin: 0; font-size: 14px; line-height: 1.6;">
              De første 50 floristene på Blomsterkollektivet får <strong>permanent 10% provisjon</strong>
              (istedenfor standard 12%) og et grunnlegger-badge på profilen din.
              Ingen månedlig avgift — du betaler kun per bekreftet oppdrag.
            </p>
          </div>
          <p style="color: #888; font-size: 13px;">Spørsmål? Svar på denne e-posten eller skriv til hei@blomsterkollektivet.no</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Florist-feil:", err);
    return NextResponse.json({ error: "Serverfeil" }, { status: 500 });
  }
}

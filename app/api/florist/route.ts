import { NextRequest, NextResponse } from "next/server";

const FROM = "Blomsterkollektivet <hei@blomsterkollektivet.no>";
const ADMIN = "dibber@amdal.dev";

async function sendEmail(to: string | string[], subject: string, html: string, replyTo?: string) {
  const body: Record<string, unknown> = {
    from: FROM,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
  };
  if (replyTo) body.reply_to = replyTo;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { navn, butikknavn, by, epost, telefon, instagram, nettside, spesialer, melding } = body;

    if (!navn || !butikknavn || !by || !epost)
      return NextResponse.json({ error: "Mangler felt" }, { status: 400 });

    const spesialerText = Array.isArray(spesialer) && spesialer.length > 0
      ? spesialer.join(", ") : "Ikke oppgitt";

    await sendEmail(
      ADMIN,
      `🌿 Ny florist-registrering — ${butikknavn} (${by})`,
      `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#f0f7ee;padding:40px;border-radius:16px;">
        <h1 style="color:#2d5a27;font-size:28px;margin-bottom:4px;">Ny florist 🌿</h1>
        <p style="color:#666;font-size:14px;margin-bottom:32px;">${new Date().toLocaleString("nb-NO")}</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#888;font-size:14px;width:140px;">Navn</td><td style="color:#1a1a1a;font-weight:bold;">${navn}</td></tr>
          <tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;">Butikk</td><td style="color:#1a1a1a;">${butikknavn}</td></tr>
          <tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;">By</td><td style="color:#1a1a1a;">${by}</td></tr>
          <tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;">E-post</td><td style="color:#1a1a1a;">${epost}</td></tr>
          ${telefon ? `<tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;">Telefon</td><td style="color:#1a1a1a;">${telefon}</td></tr>` : ""}
          ${instagram ? `<tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;">Instagram</td><td style="color:#1a1a1a;">${instagram}</td></tr>` : ""}
          ${nettside ? `<tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;">Nettside</td><td style="color:#1a1a1a;"><a href="${nettside}" style="color:#3d7a35;">${nettside}</a></td></tr>` : ""}
          <tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;vertical-align:top;">Spesialer</td><td style="color:#1a1a1a;">${spesialerText}</td></tr>
          ${melding ? `<tr style="border-top:1px solid #d5e8d0;"><td style="padding:10px 0;color:#888;font-size:14px;vertical-align:top;">Om seg selv</td><td style="color:#1a1a1a;">${melding}</td></tr>` : ""}
        </table>
      </div>`,
      epost
    );

    await sendEmail(
      epost,
      `Velkommen til Blomsterkollektivet, ${navn}! 🌿`,
      `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#f0f7ee;padding:40px;border-radius:16px;">
        <h1 style="color:#2d5a27;font-size:28px;">Velkommen, ${navn}! 🌿</h1>
        <p style="color:#444;line-height:1.6;">Vi har mottatt registreringen for <strong>${butikknavn}</strong> og tar kontakt innen 2 virkedager.</p>
        <div style="margin:24px 0;padding:20px;background:white;border-radius:12px;border:1px solid #d5e8d0;">
          <h3 style="color:#2d5a27;margin:0 0 12px;">🌟 Du er grunnlegger-florist!</h3>
          <p style="color:#444;margin:0;font-size:14px;line-height:1.6;">
            De første 50 floristene får <strong>permanent 10% provisjon</strong> (vs. standard 12%) og grunnlegger-badge. Ingen månedlig avgift.
          </p>
        </div>
        <p style="color:#888;font-size:13px;">Spørsmål? Skriv til hei@blomsterkollektivet.no</p>
      </div>`
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Florist-feil:", err);
    return NextResponse.json({ error: "Serverfeil" }, { status: 500 });
  }
}

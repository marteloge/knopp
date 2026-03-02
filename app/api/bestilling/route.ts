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
    const { anledning, dato, sted, budsjett, beskrivelse, norskdyrket, navn, epost } = body;

    if (!anledning || !dato || !sted || !budsjett || !beskrivelse || !navn || !epost)
      return NextResponse.json({ error: "Mangler felt" }, { status: 400 });

    const norskdyrketText = ["Ikke viktig", "Litt viktig", "Middels", "Viktig", "Veldig viktig"];
    const norskdyrketLabel = norskdyrketText[Number(norskdyrket) - 1] || norskdyrket;

    await sendEmail(
      ADMIN,
      `🌸 Ny blomsterforespørsel — ${anledning} i ${sted}`,
      `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#faf7f2;padding:40px;border-radius:16px;">
        <h1 style="color:#2d5a27;font-size:28px;margin-bottom:4px;">Ny forespørsel 🌸</h1>
        <p style="color:#666;font-size:14px;margin-bottom:32px;">${new Date().toLocaleString("nb-NO")}</p>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#888;font-size:14px;width:140px;">Anledning</td><td style="color:#1a1a1a;font-weight:bold;">${anledning}</td></tr>
          <tr style="border-top:1px solid #e8e8e8;"><td style="padding:10px 0;color:#888;font-size:14px;">Dato</td><td style="color:#1a1a1a;">${dato}</td></tr>
          <tr style="border-top:1px solid #e8e8e8;"><td style="padding:10px 0;color:#888;font-size:14px;">Sted</td><td style="color:#1a1a1a;">${sted}</td></tr>
          <tr style="border-top:1px solid #e8e8e8;"><td style="padding:10px 0;color:#888;font-size:14px;">Budsjett</td><td style="color:#1a1a1a;">${budsjett}</td></tr>
          <tr style="border-top:1px solid #e8e8e8;"><td style="padding:10px 0;color:#888;font-size:14px;">Norskdyrket</td><td style="color:#1a1a1a;">${norskdyrketLabel}</td></tr>
          <tr style="border-top:1px solid #e8e8e8;"><td style="padding:10px 0;color:#888;font-size:14px;vertical-align:top;">Beskrivelse</td><td style="color:#1a1a1a;">${beskrivelse}</td></tr>
        </table>
        <div style="margin-top:32px;padding:20px;background:white;border-radius:12px;border:1px solid #e8e8e8;">
          <h3 style="color:#2d5a27;margin:0 0 8px;">Kontakt</h3>
          <p style="margin:0;color:#1a1a1a;">${navn}</p>
          <p style="margin:4px 0 0;"><a href="mailto:${epost}" style="color:#3d7a35;">${epost}</a></p>
        </div>
      </div>`,
      epost
    );

    await sendEmail(
      epost,
      "Forespørselen din er mottatt 🌸",
      `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#faf7f2;padding:40px;border-radius:16px;">
        <h1 style="color:#2d5a27;font-size:28px;">Hei, ${navn}! 🌸</h1>
        <p style="color:#444;line-height:1.6;">Vi har mottatt blomsterforespørselen din og videresender den til relevante florister i <strong>${sted}</strong>.</p>
        <p style="color:#444;line-height:1.6;">Du vil høre fra oss innen <strong>48 timer</strong> med konkrete tilbud.</p>
        <div style="margin:24px 0;padding:16px 20px;background:white;border-radius:12px;border-left:4px solid #3d7a35;">
          <strong style="color:#2d5a27;">Din forespørsel:</strong><br/>
          ${anledning} • ${dato} • ${sted} • ${budsjett}
        </div>
        <p style="color:#888;font-size:13px;">Spørsmål? Skriv til hei@blomsterkollektivet.no</p>
      </div>`
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Bestilling-feil:", err);
    return NextResponse.json({ error: "Serverfeil" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

const FROM = "Blomsterkollektivet <hei@blomsterkollektivet.no>";
const ADMIN = "marte.loge@gmail.com";

async function sendEmail(to: string | string[], subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to: Array.isArray(to) ? to : [to], subject, html }),
  });
  if (!res.ok) throw new Error(`Resend error ${res.status}: ${await res.text()}`);
}

function encodeReferralCode(email: string): string {
  return Buffer.from(email.toLowerCase().trim()).toString("base64url");
}
function decodeReferralCode(code: string): string | null {
  try { return Buffer.from(code, "base64url").toString("utf-8"); } catch { return null; }
}

export async function POST(req: NextRequest) {
  try {
    const { email, ref } = await req.json();
    if (!email || !email.includes("@"))
      return NextResponse.json({ error: "Ugyldig e-post" }, { status: 400 });

    const referralCode = encodeReferralCode(email);
    const referralLink = `https://blomsterkollektivet.no/join?ref=${referralCode}`;
    const referrerEmail = ref ? decodeReferralCode(ref) : null;

    await sendEmail(
      email,
      "Du er på ventelisten 🌸",
      `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#faf7f2;padding:40px;border-radius:16px;">
        <h1 style="color:#2d5a27;font-size:28px;margin-bottom:8px;">Velkommen til ventelisten! 🌸</h1>
        ${referrerEmail ? `<p style="color:#3d7a35;font-size:15px;margin-bottom:24px;">Du ble invitert av <strong>${referrerEmail}</strong> — hyggelig!</p>` : ""}
        <p style="color:#444;line-height:1.7;">Du er på ventelisten for Blomsterkollektivet — Norges første blomstermarkedsplass. Vi varsler deg når vi åpner.</p>
        <div style="margin:32px 0;padding:24px;background:#f0f7ee;border-radius:12px;border-left:4px solid #3d7a35;">
          <p style="color:#2d5a27;font-size:15px;font-weight:bold;margin:0 0 8px;">Del din lenke 🌿</p>
          <p style="color:#555;font-size:14px;margin:0 0 12px;">Kjenner du noen som elsker blomster?</p>
          <a href="${referralLink}" style="display:inline-block;background:#2d5a27;color:white;text-decoration:none;padding:12px 24px;border-radius:50px;font-size:14px;">Min ventelistelenke →</a>
          <p style="color:#888;font-size:12px;margin:12px 0 0;">${referralLink}</p>
        </div>
        <p style="color:#888;font-size:13px;">Spørsmål? Skriv til hei@blomsterkollektivet.no</p>
      </div>`
    );

    await sendEmail(
      ADMIN,
      `🌸 Ny ventelistepåmelding: ${email}`,
      `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#faf7f2;padding:40px;border-radius:16px;">
        <h2 style="color:#2d5a27;">Ny ventelistepåmelding</h2>
        <p><strong>E-post:</strong> ${email}</p>
        ${referrerEmail ? `<p><strong>Henvist av:</strong> ${referrerEmail}</p>` : "<p><em>Ingen referral</em></p>"}
        <p style="color:#888;font-size:12px;">${new Date().toLocaleString("nb-NO")}</p>
      </div>`
    );

    if (referrerEmail && referrerEmail !== email) {
      await sendEmail(
        referrerEmail,
        "Noen brukte vervingslenken din! 🌿",
        `<div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#faf7f2;padding:40px;border-radius:16px;">
          <h2 style="color:#2d5a27;">Noen meldte seg på via deg! 🌿</h2>
          <p style="color:#444;line-height:1.7;">En venn meldte seg på ventelisten via vervningslenken din. Takk!</p>
          <p style="color:#888;font-size:13px;margin-top:16px;">Din lenke: <a href="https://blomsterkollektivet.no/join?ref=${encodeReferralCode(referrerEmail)}" style="color:#3d7a35;">blomsterkollektivet.no/join?ref=…</a></p>
        </div>`
      );
    }

    return NextResponse.json({ ok: true, referralLink });
  } catch (err) {
    console.error("Waitlist-feil:", err);
    return NextResponse.json({ error: "Serverfeil" }, { status: 500 });
  }
}

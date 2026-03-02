import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function encodeReferralCode(email: string): string {
  return Buffer.from(email.toLowerCase().trim()).toString("base64url");
}

function decodeReferralCode(code: string): string | null {
  try {
    return Buffer.from(code, "base64url").toString("utf-8");
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, ref } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Ugyldig e-post" }, { status: 400 });
    }

    const referralCode = encodeReferralCode(email);
    const referralLink = `https://blomsterkollektivet.no/join?ref=${referralCode}`;
    const referrerEmail = ref ? decodeReferralCode(ref) : null;

    const transporter = nodemailer.createTransport({
      host: "smtp.migadu.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Bekreftelse til den som melder seg på
    await transporter.sendMail({
      from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Du er på ventelisten 🌸",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf7f2; padding: 40px; border-radius: 16px;">
          <h1 style="color: #2d5a27; font-size: 28px; margin-bottom: 8px;">Velkommen til ventelisten! 🌸</h1>
          ${referrerEmail ? `<p style="color: #3d7a35; font-size: 15px; margin-bottom: 24px;">Du ble invitert av <strong>${referrerEmail}</strong> — hyggelig!</p>` : ""}
          <p style="color: #444; line-height: 1.7; font-size: 16px;">
            Du er nå på ventelisten for Blomsterkollektivet — Norges første blomstermarkedsplass som kobler deg direkte med lokale florister og blomsterbønder.
          </p>
          <p style="color: #444; line-height: 1.7; font-size: 16px;">
            Vi varsler deg når vi åpner. Du vil bli blant de første til å prøve tjenesten.
          </p>

          <div style="margin: 32px 0; padding: 24px; background: #f0f7ee; border-radius: 12px; border-left: 4px solid #3d7a35;">
            <p style="color: #2d5a27; font-size: 15px; font-weight: bold; margin: 0 0 8px;">Del videre og hjelp oss å vokse 🌿</p>
            <p style="color: #555; font-size: 14px; margin: 0 0 12px;">
              Kjenner du noen som elsker blomster? Del lenken din og de kommer rett inn på ventelisten.
            </p>
            <a href="${referralLink}" style="display: inline-block; background: #2d5a27; color: white; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-size: 14px;">
              Min ventelistelenke →
            </a>
            <p style="color: #888; font-size: 12px; margin: 12px 0 0;">${referralLink}</p>
          </div>

          <p style="color: #888; font-size: 13px; margin-top: 24px;">
            Spørsmål? Svar på denne e-posten eller skriv til hei@blomsterkollektivet.no
          </p>
        </div>
      `,
    });

    // 2. Varsle admin
    await transporter.sendMail({
      from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
      to: "dibber@amdal.dev",
      subject: `🌸 Ny ventelistepåmelding: ${email}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf7f2; padding: 40px; border-radius: 16px;">
          <h2 style="color: #2d5a27;">Ny ventelistepåmelding</h2>
          <p><strong>E-post:</strong> ${email}</p>
          ${referrerEmail ? `<p><strong>Henvist av:</strong> ${referrerEmail}</p>` : "<p><em>Ingen referral</em></p>"}
          <p style="color: #888; font-size: 12px;">${new Date().toLocaleString("nb-NO")}</p>
        </div>
      `,
    });

    // 3. Hvis henvist — varsle den som delte lenken
    if (referrerEmail && referrerEmail !== email) {
      await transporter.sendMail({
        from: `"Blomsterkollektivet" <${process.env.SMTP_USER}>`,
        to: referrerEmail,
        subject: "Noen brukte vervingslenken din! 🌿",
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf7f2; padding: 40px; border-radius: 16px;">
            <h2 style="color: #2d5a27;">Noen meldte seg på via deg! 🌿</h2>
            <p style="color: #444; line-height: 1.7;">
              En venn meldte seg på ventelisten via vervningslenken din. Takk for at du sprer ordet om Blomsterkollektivet!
            </p>
            <p style="color: #444; line-height: 1.7;">
              Vi sees snart når vi åpner 🌸
            </p>
            <p style="color: #888; font-size: 13px;">
              Har du ikke delt lenken ennå? Her er den:<br/>
              <a href="https://blomsterkollektivet.no/join?ref=${encodeReferralCode(referrerEmail)}" style="color: #3d7a35;">
                blomsterkollektivet.no/join?ref=${encodeReferralCode(referrerEmail)}
              </a>
            </p>
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true, referralLink });
  } catch (err) {
    console.error("Waitlist-feil:", err);
    return NextResponse.json({ error: "Serverfeil" }, { status: 500 });
  }
}

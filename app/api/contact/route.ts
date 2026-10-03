import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const DESTINATION_EMAIL = "mightytechsolutionsllc@gmail.com";

const MAX_LENGTHS = {
  name: 100,
  email: 150,
  phone: 40,
  city: 100,
  service: 120,
  message: 3000,
};

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot: real users never see or fill this field.
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, MAX_LENGTHS.name);
    const email = clean(body.email, MAX_LENGTHS.email);
    const phone = clean(body.phone, MAX_LENGTHS.phone);
    const city = clean(body.city, MAX_LENGTHS.city);
    const service = clean(body.service, MAX_LENGTHS.service);
    const message = clean(body.message, MAX_LENGTHS.message);

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.CONTACT_EMAIL_USER;
    const smtpPassword = process.env.CONTACT_EMAIL_APP_PASSWORD;

    if (!smtpUser || !smtpPassword) {
      console.error("Contact email environment variables are not configured.");
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please call us." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    const subject = `Website Lead: ${service} - ${name}`;

    const text = [
      "New website contact request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `City: ${city || "Not provided"}`,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.6">
        <h2 style="margin-bottom:16px">New website contact request</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td><strong>City</strong></td><td>${escapeHtml(city || "Not provided")}</td></tr>
          <tr><td><strong>Service</strong></td><td>${escapeHtml(service)}</td></tr>
        </table>
        <h3 style="margin-top:24px;margin-bottom:8px">Message</h3>
        <div style="white-space:pre-wrap">${escapeHtml(message)}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Mighty Tech Website" <${smtpUser}>`,
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send your message right now. Please call us." },
      { status: 500 }
    );
  }
}

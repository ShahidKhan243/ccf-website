import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters long."),
  collegeOrOrg: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email("Please provide a valid email address."),
  subject: z.string().trim().min(2, "Subject must be at least 2 characters long."),
  message: z.string().trim().min(10, "Message must be at least 10 characters long."),
});

/**
 * POST /api/contact
 * Handles message submissions from the Contact Us page.
 * Validates the payload and securely delivers or logs inquiries.
 */
export async function POST(req: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON in request body.",
        },
        { status: 400 }
      );
    }

    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0]?.message || "Invalid contact input.";
      return NextResponse.json(
        {
          success: false,
          error: firstError,
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, collegeOrOrg, email, subject, message } = parseResult.data;

    // Log safely for auditing
    console.info(`[CONTACT] Message received from ${email} (${name}) regarding "${subject}"`);

    // If Resend API key is configured, attempt sending notification to club email
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || "crescentcluboffinance26@gmail.com";
    const sender = process.env.EMAIL_FROM || "CCF Contact <notifications@crescentcluboffinance.com>";

    if (apiKey && apiKey.startsWith("re_")) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: sender,
          to: recipient,
          replyTo: email,
          subject: `[CCF Inquiries] ${subject} — from ${name}`,
          text: `New contact inquiry received:\n\nName: ${name}\nEmail: ${email}\nCollege/Organisation: ${collegeOrOrg || "N/A"}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });
      } catch (sendErr) {
        // Log error but don't fail user if logging succeeded
        console.error("[CONTACT] Failed to forward email via Resend:", sendErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. Our team will review your inquiry shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT] Unexpected error handling message submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your message. Please try emailing us directly.",
      },
      { status: 500 }
    );
  }
}

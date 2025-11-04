import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/schemas/contact";
import { sendContactEmail } from "@/lib/resend";
import { addContactToMailchimp } from "@/lib/mailchimp";
import { sendTelegramNotification } from "@/lib/telegram";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, phone, message } = validationResult.data;

    // Send Telegram notification (PRIMARY METHOD)
    try {
      const telegramResult = await sendTelegramNotification({
        name,
        email,
        company,
        phone,
        message,
      });

      if (!telegramResult.success && !telegramResult.skipped) {
        throw new Error("Failed to send Telegram notification");
      }

      if (telegramResult.skipped) {
        return NextResponse.json(
          { error: "Telegram is not configured. Please contact the administrator." },
          { status: 500 }
        );
      }
    } catch (telegramError) {
      console.error("Failed to send Telegram notification:", telegramError);
      return NextResponse.json(
        { error: "Failed to send notification. Please try again later." },
        { status: 500 }
      );
    }

    // Send email via Resend (optional - non-blocking)
    try {
      await sendContactEmail({
        name,
        email,
        company,
        phone,
        message,
      });
    } catch (emailError) {
      // Log but don't fail - email is optional
      console.error("Failed to send email (optional):", emailError);
    }

    // Add contact to Mailchimp (optional - non-blocking)
    try {
      const nameParts = name.split(" ");
      const firstName = nameParts[0] || name;
      const lastName = nameParts.slice(1).join(" ") || "";

      await addContactToMailchimp({
        email,
        firstName,
        lastName,
        company,
        phone,
      });
    } catch (mailchimpError) {
      // Log but don't fail - Mailchimp is optional
      console.error("Failed to add contact to Mailchimp (optional):", mailchimpError);
    }

    return NextResponse.json(
      { success: true, message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in contact form handler:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}


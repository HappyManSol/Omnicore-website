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

    // Send email via Resend
    try {
      await sendContactEmail({
        name,
        email,
        company,
        phone,
        message,
      });
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    // Add contact to Mailchimp (non-blocking - we don't fail the request if this fails)
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
      // Log the error but don't fail the request
      console.error("Failed to add contact to Mailchimp:", mailchimpError);
    }

    // Send Telegram notification (non-blocking)
    try {
      await sendTelegramNotification({
        name,
        email,
        company,
        phone,
        message,
      });
    } catch (telegramError) {
      // Log the error but don't fail the request
      console.error("Failed to send Telegram notification:", telegramError);
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


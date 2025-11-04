import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendTelegramNotification } from "@/lib/telegram";
import { addContactToMailchimp } from "@/lib/mailchimp";

const leadMagnetSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validationResult = leadMagnetSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Invalid email", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { email, name } = validationResult.data;

    // Send Telegram notification
    try {
      await sendTelegramNotification({
        name: name || "Lead Magnet Download",
        email: email,
        company: "Lead Magnet",
        message: "Downloaded Web3 Launch Readiness Checklist",
      });
    } catch (error) {
      console.error("Failed to send Telegram notification:", error);
    }

    // Add to Mailchimp with lead magnet tag
    try {
      const nameParts = (name || email).split(" ");
      const firstName = nameParts[0] || "Subscriber";
      const lastName = nameParts.slice(1).join(" ") || "";

      await addContactToMailchimp({
        email,
        firstName,
        lastName,
        company: "Lead Magnet",
      });
    } catch (error) {
      console.error("Failed to add to Mailchimp:", error);
    }

    return NextResponse.json(
      { success: true, message: "Checklist sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead magnet error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}


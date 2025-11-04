interface SendTelegramMessageParams {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

export async function sendTelegramNotification({
  name,
  email,
  company,
  phone,
  message,
}: SendTelegramMessageParams) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Skip if not configured
  if (!botToken || !chatId) {
    console.warn("Telegram bot not configured. Skipping notification.");
    return { success: false, skipped: true };
  }

  try {
    const telegramMessage = `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
🏢 <b>Company:</b> ${company}
${phone ? `📱 <b>Phone:</b> ${phone}\n` : ''}
💬 <b>Message:</b>
${message}

⏰ <b>Time:</b> ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
    `.trim();

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      }
    );

    const result = await response.json();

    if (!result.ok) {
      console.error("Telegram API error:", result);
      throw new Error("Failed to send Telegram message");
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
    // Don't throw - we don't want to fail the whole form submission
    return { success: false, error };
  }
}


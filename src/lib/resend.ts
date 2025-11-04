import { Resend } from "resend";

// Initialize Resend with API key, using a placeholder if not set (for build time)
export const resend = new Resend(process.env.RESEND_API_KEY || "placeholder-key-for-build");

interface SendContactEmailParams {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  company,
  phone,
  message,
}: SendContactEmailParams) {
  // Check for API key at runtime
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined in environment variables");
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "OmniCore Solutions <noreply@omnicoresolutions.io>",
      to: ["info@omnicoresolutions.io"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #4361ee 0%, #9333ea 100%); padding: 30px; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px;">
              <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #4361ee; margin-top: 0; font-size: 20px;">Contact Information</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                      <strong style="color: #666;">Name:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                      ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                      <strong style="color: #666;">Email:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                      <a href="mailto:${email}" style="color: #4361ee; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                      <strong style="color: #666;">Company:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                      ${company}
                    </td>
                  </tr>
                  ${phone ? `
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                        <strong style="color: #666;">Phone:</strong>
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5;">
                        <a href="tel:${phone}" style="color: #4361ee; text-decoration: none;">${phone}</a>
                      </td>
                    </tr>
                  ` : ''}
                </table>
                
                <h3 style="color: #4361ee; margin-top: 25px; margin-bottom: 15px; font-size: 18px;">Message</h3>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 6px; border-left: 4px solid #4361ee;">
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <p style="margin-top: 20px; font-size: 12px; color: #999; text-align: center;">
                This email was sent from the OmniCore Solutions contact form.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("Failed to send email");
    }

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}


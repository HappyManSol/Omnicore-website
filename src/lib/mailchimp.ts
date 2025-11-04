import mailchimp from "@mailchimp/mailchimp_marketing";

if (!process.env.MAILCHIMP_API_KEY || !process.env.MAILCHIMP_SERVER_PREFIX || !process.env.MAILCHIMP_AUDIENCE_ID) {
  console.warn("Mailchimp environment variables are not fully configured. Mailchimp integration will be skipped.");
}

const isMailchimpConfigured = 
  process.env.MAILCHIMP_API_KEY && 
  process.env.MAILCHIMP_SERVER_PREFIX && 
  process.env.MAILCHIMP_AUDIENCE_ID;

if (isMailchimpConfigured) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });
}

interface AddContactToMailchimpParams {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  phone?: string;
}

export async function addContactToMailchimp({
  email,
  firstName,
  lastName,
  company,
  phone,
}: AddContactToMailchimpParams) {
  if (!isMailchimpConfigured) {
    console.warn("Mailchimp is not configured. Skipping Mailchimp integration.");
    return { success: false, skipped: true };
  }

  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        COMPANY: company,
        ...(phone && { PHONE: phone }),
      },
      tags: ["contact-form"],
    });

    return { success: true, data: response };
  } catch (error: any) {
    // If the contact already exists, update them
    if (error.status === 400 && error.response?.body?.title === "Member Exists") {
      try {
        const subscriberHash = require("crypto")
          .createHash("md5")
          .update(email.toLowerCase())
          .digest("hex");

        const updateResponse = await mailchimp.lists.updateListMember(
          process.env.MAILCHIMP_AUDIENCE_ID!,
          subscriberHash,
          {
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName,
              COMPANY: company,
              ...(phone && { PHONE: phone }),
            },
          }
        );

        return { success: true, data: updateResponse, updated: true };
      } catch (updateError) {
        console.error("Error updating Mailchimp contact:", updateError);
        throw updateError;
      }
    }

    console.error("Error adding contact to Mailchimp:", error);
    throw error;
  }
}


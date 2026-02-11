"use server";

import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailResponse {
  success: boolean;
  error?: string;
}

export async function sendEmail(formData: FormData): Promise<SendEmailResponse> {
  // Extract values and ensure they are strings
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const message = formData.get("message") as string | null;

  // Basic validation to ensure required fields exist
  if (!name || !email || !message) {
    return { success: false, error: "Missing required fields." };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['your-email@gmail.com'], // Replace with your verified email
      subject: `New Message from ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone ?? 'Not provided'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: unknown) {
    // Type-safe error handling
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return { success: false, error: errorMessage };
  }
}
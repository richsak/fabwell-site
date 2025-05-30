"use server";

import { Resend } from 'resend';

// Initialize Resend with your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define an interface for the expected form data
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string; // Optional field
  projectType: string;
  projectDetails: string;
}

export async function submitContactForm(formData: ContactFormData) {
  const { firstName, lastName, email, company, projectType, projectDetails } = formData;

  // Basic validation
  if (!firstName || !lastName || !email || !projectType || !projectDetails) {
    return { success: false, message: "Please fill out all required fields." };
  }

  // Construct email content
  const emailHtml = `
    <h1>New Project Inquiry from Fabwell Website</h1>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    <p><strong>Project Type:</strong> ${projectType}</p>
    <p><strong>Project Details:</strong></p>
    <p>${projectDetails.replace(/\n/g, '<br>')}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Fabwell Contact Form <onboarding@resend.dev>', // Replace with your verified sending email in production
      to: ['info@fabwell.ca'], // Your receiving email address
      subject: `New Project Inquiry: ${projectType} from ${firstName} ${lastName}`,
      html: emailHtml,
      replyTo: email, // Corrected: Set the sender's email as the reply-to address
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, message: `Failed to send message: ${error.message}` };
    }

    console.log("Email sent successfully:", data);
    return { success: true, message: "Thank you! Your message has been sent successfully." };

  } catch (exception) {
    console.error("Exception sending email:", exception);
    // Type guard for exception
    if (exception instanceof Error) {
      return { success: false, message: `An unexpected error occurred: ${exception.message}` };
    }
    return { success: false, message: "An unexpected error occurred." };
  }
}
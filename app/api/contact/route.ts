import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically send an email or save to a database
    // For now, we'll just log it and return success
    console.log("Contact form submission:", body);
    
    // TODO: Integrate with email service (Resend, SendGrid, etc.) or database
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'Nailedstudioandacademy@gmail.com',
    //   subject: `Contact Form: ${body.inquiryType || 'General Inquiry'}`,
    //   html: `<p>Message from ${body.name}</p><p>${body.message}</p>`
    // });
    
    return NextResponse.json({ success: true, message: "Contact form submitted" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Error processing contact form" },
      { status: 500 }
    );
  }
}


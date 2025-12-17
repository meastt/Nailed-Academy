import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically send an email or save to a database
    // For now, we'll just log it and return success
    console.log("Training signup:", body);
    
    // TODO: Integrate with email service (Resend, SendGrid, etc.) or database
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'Nailedstudioandacademy@gmail.com',
    //   subject: 'New Training Signup',
    //   html: `<p>New training signup from ${body.name}</p>...`
    // });
    
    return NextResponse.json({ success: true, message: "Training signup received" });
  } catch (error) {
    console.error("Error processing training signup:", error);
    return NextResponse.json(
      { success: false, message: "Error processing training signup" },
      { status: 500 }
    );
  }
}


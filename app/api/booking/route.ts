import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Here you would typically send an email or save to a database
    // For now, we'll just log it and return success
    console.log("Booking request:", body);
    
    // TODO: Integrate with email service (Resend, SendGrid, etc.) or database
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'Nailedstudioandacademy@gmail.com',
    //   subject: 'New Booking Request',
    //   html: `<p>New booking request from ${body.name}</p>...`
    // });
    
    return NextResponse.json({ success: true, message: "Booking request received" });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, message: "Error processing booking request" },
      { status: 500 }
    );
  }
}


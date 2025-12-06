export const runtime = "nodejs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log(request)
    const body = await request.json();
    console.log(body)
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!process.env.WEB3FORMS_KEY) {
      console.error("WEB3FORMS_KEY is missing");
      return NextResponse.json(
        { success: false, message: "Server config error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name: body.name,
        email: body.email,
        subject: `[Pho Nam Giang] ${body.subject}`,
        message: body.message,
        from_name: "Pho Nam Giang Website",
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to send message" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    working: true,
    hasKey: !!process.env.WEB3FORMS_KEY
  });
}


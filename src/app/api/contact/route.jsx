export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Send to Web3Forms
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
      return Response.json({ success: true, message: "Message sent successfully!" });
    } else {
      return Response.json(
        { success: false, message: result.message || "Failed to send message" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, message: "Server error occurred" },
      { status: 500 }
    );
  }
}
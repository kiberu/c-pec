import { NextRequest, NextResponse } from "next/server";

const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

export async function POST(request: NextRequest) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Web3Forms is not configured. Please add WEB3FORMS_ACCESS_KEY to your .env file." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const payload = {
      access_key: accessKey,
      ...body,
      // Add bot check - Web3Forms uses this for spam protection
      botcheck: body.botcheck ?? "",
    };

    const response = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: data.message || "Form submission failed" },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while submitting the form" },
      { status: 500 }
    );
  }
}

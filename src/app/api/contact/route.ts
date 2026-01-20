import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxH_IclIAwH5WphoHsmiGe5WjDc6MMmWIfQlkOP-W2U4GgYMCMfMFr5GAIJd1CspIHi/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Submission failed" },
      { status: 500 }
    );
  }
}

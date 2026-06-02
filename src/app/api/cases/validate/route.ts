import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate user
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    const apiKey = process.env.HELLO_DROP_CHOO;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API configuration secret is not set." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const {
      defaulterName,
      entityType,
      phone,
      email,
      address,
      stuckAmount,
      dueDate,
      policeStationName,
      policeStationAddress
    } = body;

    // Validate request has required fields
    if (!defaulterName || !address || !policeStationName || !policeStationAddress) {
      return NextResponse.json({ error: "Missing required text fields for validation." }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const systemPrompt = `
      Act as an automated validation assistant for a professional legal recovery and notice dispatch platform.
      Your task is to analyze user-inputted case details and determine if any of the fields contain "absurd false words", gibberish (e.g. 'asdfghjk', 'qwerty', 'testtest'), obvious placeholders, joke names/entities, offensive terms, or logically fake data.

      **Input fields to evaluate**:
      1. Defaulter Name: "${defaulterName}" (should be a plausible individual or business name, not gibberish or a joke).
      2. Defaulter Address: "${address}" (should look like a plausible street, area, city, or pincode address, not a single word, placeholder, or gibberish).
      3. Police Station Name: "${policeStationName}" (should be a plausible location or sector name of a police station, e.g. "Gurugram Sector 56", not placeholder/gibberish).
      4. Police Station Address: "${policeStationAddress}" (should look like a plausible street or area location).

      **Validation Criteria**:
      - If ANY field contains obvious gibberish (like "asdf", "zxccvb", "test1234"), profanity/abuse, obvious fake details ("Mickey Mouse", "Batman"), or extreme nonsense placeholders, classify it as INVALID.
      - Be reasonably lenient with formatting, spelling errors, or short valid Indian/international names and locations, but strictly catch absolute non-serious fake entries and random keyboard typing.

      **Return ONLY a valid JSON object with this exact structure**:
      {
        "isValid": true or false,
        "reason": "A polite, concise 1-sentence warning message explaining which field is invalid and why (e.g. 'The Defaulter Name contains incoherent keyboard typing.'), or null if isValid is true."
      }
    `;

    console.log(`[AI Validation] Auditing input fields for Defaulter: "${defaulterName}"...`);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Please validate the following input data: Defaulter: "${defaulterName}", Address: "${address}", Police Station: "${policeStationName}", Police Station Address: "${policeStationAddress}"` }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1, // Low temperature for high consistency
    });

    const resultText = completion.choices[0]?.message?.content || "{}";
    const resultJson = JSON.parse(resultText);

    console.log("[AI Validation] Analysis result:", JSON.stringify(resultJson));

    return NextResponse.json({
      success: true,
      isValid: resultJson.isValid ?? true,
      reason: resultJson.reason ?? null
    });

  } catch (error: any) {
    console.error("[AI Validation API] Error:", error);
    // Graceful fallback to avoid locking the UI in case of API failure
    return NextResponse.json({
      success: false,
      isValid: true,
      reason: null,
      details: error.message
    });
  }
}

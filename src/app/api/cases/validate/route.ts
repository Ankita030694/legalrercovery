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
      phone2,
      email,
      email2,
      address,
      stuckAmount,
      dueDate,
      policeStationName,
      policeStationAddress
    } = body;

    // Validate request has required fields
    if (!defaulterName || !address || !phone || !email || !stuckAmount || !dueDate || !policeStationName || !policeStationAddress) {
      return NextResponse.json({ error: "Missing required fields for validation." }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const systemPrompt = `
      Act as an automated validation assistant for a professional legal recovery and notice dispatch platform.
      Your task is to analyze user-inputted case details and determine if any of the fields contain "absurd false words", gibberish (e.g. 'asdfghjk', 'qwerty', 'testtest'), obvious placeholders, joke names/entities, offensive terms, or logically fake data.

      **Input fields to evaluate**:
      1. Defaulter Name: "${defaulterName}" (should be a plausible individual or business name, not gibberish, single letter, or a joke).
      2. Defaulter Address: "${address}" (should look like a plausible street, area, city, or pincode address, not a single word, placeholder, or gibberish).
      3. Defaulter Phone: "${phone}" (should be a standard 10-digit Indian number, not fake sequential/repeating numbers like "9999999999" or "1234567890").
      4. Defaulter Phone 2 (Optional): "${phone2 || 'Not provided'}" (if provided, should be a standard 10-digit Indian number, not fake sequential/repeating numbers like "9999999999" or "1234567890", and must not equal Defaulter Phone).
      5. Defaulter Email: "${email}" (should be a valid email format, not obviously fake/offensive domains or handles like "fuckyou@gmail.com").
      6. Defaulter Email 2 (Optional): "${email2 || 'Not provided'}" (if provided, should be a valid email format, not obviously fake/offensive, and must not equal Defaulter Email).
      7. Stuck Amount: "${stuckAmount}" (should be a realistic, plausible outstanding dues amount. Values above ₹1,00,00,000 (1 Crore) are considered absurd and highly likely to be fake/placeholder entries).
      8. Due Date: "${dueDate}" (should be a realistic past or near-present due date, not futuristic or decades in the past).
      9. Police Station Name: "${policeStationName}" (should be a plausible location or sector name of a police station, e.g. "Gurugram Sector 56", not placeholder/gibberish).
      10. Police Station Address: "${policeStationAddress}" (should look like a plausible street or area location).

      **Validation Criteria**:
      - If ANY field contains obvious gibberish (like "asdf", "zxccvb", "test1234"), profanity/abuse (e.g., "fuckyou@gmail.com"), obvious fake details ("Mickey Mouse", "Batman"), fake repeating digits ("9999999999"), or extreme nonsense placeholders/stuck amounts (like ₹99,99,99,999), classify it as INVALID.
      - Be reasonably lenient with formatting, spelling errors, or short valid Indian/international names and locations, but strictly catch absolute non-serious fake entries and random keyboard typing.

      **Return ONLY a valid JSON object with this exact structure**:
      {
        "isValid": true or false,
        "reason": "A polite, concise 1-sentence warning message explaining which field is invalid and why (e.g. 'The Defaulter Email contains offensive terms.', 'The Stuck Amount seems logically unrealistic.'), or null if isValid is true."
      }
    `;

    console.log(`[AI Validation] Auditing input fields for Defaulter: "${defaulterName}"...`);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Please validate the following input data: Defaulter: "${defaulterName}", Address: "${address}", Police Station: "${policeStationName}", Police Station Address: "${policeStationAddress}", Phone: "${phone}", Phone 2: "${phone2 || ''}", Email: "${email}", Email 2: "${email2 || ''}", Stuck Amount: "${stuckAmount}", Due Date: "${dueDate}"` }
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

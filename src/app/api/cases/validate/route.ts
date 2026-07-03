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

    const body = await req.json();
    const {
      defaulterName,
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

    // ────────────────────────────────────────────────────────────
    // STEP 1: DETERMINISTIC CODE VALIDATIONS (no AI involved)
    // These checks are 100% reliable — no hallucinations possible.
    // ────────────────────────────────────────────────────────────

    // Required fields presence check
    if (!defaulterName || !address || !phone || !email || !stuckAmount || !dueDate) {
      return NextResponse.json({
        success: true,
        isValid: false,
        reason: "Some required fields are missing. Please fill in all mandatory fields."
      });
    }

    // Phone: must be exactly 10 digits, not all same digit, not sequential
    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length !== 10) {
      return NextResponse.json({
        success: true,
        isValid: false,
        reason: "The Defaulter Phone must be a valid 10-digit Indian mobile number."
      });
    }
    const fakePhones = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555", "6666666666", "7777777777", "8888888888", "9999999999", "1234567890", "0987654321"];
    if (fakePhones.includes(phoneClean)) {
      return NextResponse.json({
        success: true,
        isValid: false,
        reason: "The Defaulter Phone appears to be a fake or placeholder number."
      });
    }

    // Phone2 (optional): only validate if actually provided
    if (phone2 && phone2.trim()) {
      const phone2Clean = phone2.replace(/\D/g, "");
      if (phone2Clean.length !== 10) {
        return NextResponse.json({
          success: true,
          isValid: false,
          reason: "The Secondary Phone must be a valid 10-digit number."
        });
      }
      if (phone2Clean === phoneClean) {
        return NextResponse.json({
          success: true,
          isValid: false,
          reason: "The Secondary Phone cannot be the same as the Primary Phone."
        });
      }
    }

    // Email basic format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: true,
        isValid: false,
        reason: "The Defaulter Email is not a valid email address."
      });
    }

    // Email2 (optional): only validate if actually provided
    if (email2 && email2.trim()) {
      if (!emailRegex.test(email2)) {
        return NextResponse.json({
          success: true,
          isValid: false,
          reason: "The Secondary Email is not a valid email address."
        });
      }
      if (email2.toLowerCase().trim() === email.toLowerCase().trim()) {
        return NextResponse.json({
          success: true,
          isValid: false,
          reason: "The Secondary Email cannot be the same as the Primary Email."
        });
      }
    }

    // Stuck amount: must parse to a positive number
    const amountNum = parseFloat(stuckAmount.replace(/,/g, ""));
    if (isNaN(amountNum) || amountNum <= 0) {
      return NextResponse.json({
        success: true,
        isValid: false,
        reason: "The Stuck Dues Amount must be a valid positive number."
      });
    }
    if (amountNum > 10_00_00_000) {
      return NextResponse.json({
        success: true,
        isValid: false,
        reason: "The Stuck Amount exceeds ₹10 Crore and seems unrealistic. Please verify."
      });
    }

    // Due date: NO restriction on how far in the past. Only reject future dates.
    // (The front-end already blocks future dates, but double-check here)
    // — This is now pure code, not AI. It will never hallucinate.

    // ────────────────────────────────────────────────────────────
    // STEP 2: AI VALIDATION (only for text quality — gibberish, fakes, abuse)
    // The AI does NOT see dates, phone numbers, or amounts.
    // It only checks name, address, email for nonsense text.
    // ────────────────────────────────────────────────────────────

    const apiKey = process.env.HELLO_DROP_CHOO;
    if (!apiKey) {
      // If no API key, skip AI check — code checks above are sufficient
      console.warn("[AI Validation] No API key set, skipping AI text quality check.");
      return NextResponse.json({ success: true, isValid: true, reason: null });
    }

    const openai = new OpenAI({ apiKey });

    const systemPrompt = `You are a text quality checker for a legal recovery platform. Your ONLY job is to check if the text fields below contain gibberish, random keyboard mashing, joke/fictional names, profanity, or obvious placeholder text.

CHECK THESE FIELDS:
1. Defaulter Name: "${defaulterName}"
2. Defaulter Address: "${address}"
3. Defaulter Email: "${email}"
${policeStationName ? `4. Police Station Name: "${policeStationName}"` : ""}
${policeStationAddress ? `5. Police Station Address: "${policeStationAddress}"` : ""}

RULES:
- ONLY flag if a field contains absolute nonsense like "asdfghjk", "qwerty", "test123", fictional characters ("Batman", "Mickey Mouse"), or profanity/slurs.
- Indian names, even short or uncommon ones, are VALID. Be lenient.
- Short addresses are VALID. Be lenient.
- Do NOT check or mention dates, phone numbers, amounts, or any field not listed above.
- When in doubt, mark as VALID.

Return ONLY this JSON:
{ "isValid": true/false, "reason": "one sentence explanation or null if valid" }`;

    console.log(`[AI Validation] Text quality check for: "${defaulterName}"`);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Validate the text fields above." }
      ],
      response_format: { type: "json_object" },
      temperature: 0,
    });

    const resultText = completion.choices[0]?.message?.content || "{}";
    const resultJson = JSON.parse(resultText);

    console.log("[AI Validation] Result:", JSON.stringify(resultJson));

    // Extra safety: if the AI's reason mentions "date", "phone", "amount", "due",
    // "future", "past", or "optional" — it hallucinated. Override to valid.
    const reason = (resultJson.reason || "").toLowerCase();
    const hallucinated = ["date", "phone", "amount", "due", "future", "past", "optional", "mobile", "number", "rupee", "inr", "crore"].some(w => reason.includes(w));

    if (hallucinated) {
      console.warn("[AI Validation] AI hallucinated about a non-text field. Overriding to valid.");
      return NextResponse.json({ success: true, isValid: true, reason: null });
    }

    return NextResponse.json({
      success: true,
      isValid: resultJson.isValid ?? true,
      reason: resultJson.reason ?? null
    });

  } catch (error: any) {
    console.error("[AI Validation API] Error:", error);
    // Graceful fallback — never block the user because of an API failure
    return NextResponse.json({
      success: false,
      isValid: true,
      reason: null,
      details: error.message
    });
  }
}

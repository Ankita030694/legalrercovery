import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 1. Authenticate user
    const session = await getServerSession(authOptions);
    if (!session || !(session.user as any).id) {
      return NextResponse.json({ error: "Unauthorized. Please log in first." }, { status: 401 });
    }

    const { db } = await getDbAndBucket("fs");
    const userId = (session.user as any).id;

    // 2. Verify user is advocate (hasUnlimitedCases === true)
    const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
    if (!user || user.hasUnlimitedCases !== true) {
      return NextResponse.json({ error: "Access denied. Only advocate profiles can use bulk recovery features." }, { status: 403 });
    }

    const apiKey = process.env.HELLO_DROP_CHOO;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API configuration secret is not set." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { text } = body;

    if (!text || !text.trim()) {
      return NextResponse.json({ error: "No text data provided." }, { status: 400 });
    }

    // 3. Call OpenAI to parse the text
    const openai = new OpenAI({
      apiKey: apiKey,
    });

    const systemPrompt = `
      Act as an AI data parsing assistant for a legal recovery platform.
      Your task is to take a raw, unstructured, copy-pasted table or text block containing outstanding dues/defaulter details and parse them into a clean, structured JSON array of cases.
      
      We expect the output to conform to a specific schema. Make sure you extract details for EVERY single row/defaulter present in the text.
      
      **Schema Details**:
      For each case, extract the following:
      - defaulterName: Legal name of the individual or clinic/company (e.g. "Dr. Amrita Sharma", "Ladivya Dental Clinic")
      - entityType: "Company" or "Individual" (infer from name, e.g. names starting with "Dr." or individuals are "Individual", clinics/shops/corporates are "Company")
      - phone: A 10-digit primary phone number of the defaulter, cleaned of spaces/hyphens (e.g. "9716030793"). If multiple, extract the first one here.
      - phone2: An optional secondary phone number, if available.
      - email: Primary email of the defaulter (e.g. "zumaxaa@gmail.com"). Crucially, you MUST identify and rectify obvious domain typos in email addresses (e.g., "ggmail.com", "gamil.com", "gmial.com", "gmal.com" should be corrected to "gmail.com", and "yaho.com" to "yahoo.com").
      - email2: An optional secondary email, if available (also rectifying obvious domain typos).
      - address: Complete physical address of the defaulter. If it contains a state name, clean/keep the full text.
      - state: Standardized Indian State or UT name matching the address (e.g. "Haryana", "Delhi", "Rajasthan").
      - stuckAmount: The outstanding dues amount as a number (float/integer). Clean all commas, spaces, currency symbols (e.g., "1,461,994.00" -> 1461994).
      - dueDate: The original payment due date. Ensure the parsed due date is ALWAYS in the past (before today, June 11, 2026). If the due date specified is partial (e.g. '24-Nov'), you MUST infer the year from the invoice date (e.g. if the invoice date is '31-Jan-24', the due date '24-Nov' is likely '2024-11-24'). If no year is specified or can be inferred, default to the most logical past year (e.g. 2025 or 2024) such that the due date is not in the future relative to today, June 11, 2026. Format as standard YYYY-MM-DD.
      - invoiceNo: A string representation of all invoice numbers associated with the case. If there are multiple (e.g. separated by newlines/quotes), combine them into a single string (e.g. "GGN FY 23-24 Sales 5848, GGN FY 23-24 Sales 5849").
      - invoiceDate: The invoice date in "YYYY-MM-DD" format (e.g. "31-Jan-24" -> "2024-01-31", "22-Aug-24" -> "2024-08-22"). If not present, set to null.

      **Today's Current Date Context**: June 11, 2026. Do not generate due dates in the future.

      **Return ONLY a valid JSON object with this exact structure**:
      {
        "cases": [
          {
            "defaulterName": "...",
            "entityType": "...",
            "phone": "...",
            "phone2": "...",
            "email": "...",
            "email2": "...",
            "address": "...",
            "state": "...",
            "stuckAmount": 1234.56,
            "dueDate": "YYYY-MM-DD",
            "invoiceNo": "...",
            "invoiceDate": "YYYY-MM-DD"
          },
          ...
        ]
      }
    `;

    console.log(`[Bulk AI Parse] Parsing text input of length ${text.length}...`);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1,
    });

    const resultText = completion.choices[0]?.message?.content || "{}";
    const resultJson = JSON.parse(resultText);
    const parsedCases = resultJson.cases || [];

    console.log(`[Bulk AI Parse] Successfully parsed ${parsedCases.length} cases.`);

    // 4. Fetch police station directory to auto-populate jurisdictional SHO details
    const stations = await db.collection("police_stations").find({}).toArray();
    
    // 5. Map police station details based on state
    const finalCases = parsedCases.map((c: any) => {
      let policeStationName = "";
      let policeStationEmail = "";
      let policeStationAddress = "";

      if (c.state) {
        const stationMatch = stations.find(
          (s) => s.state.toLowerCase() === c.state.toLowerCase()
        );
        if (stationMatch) {
          policeStationName = stationMatch.hqName;
          policeStationEmail = stationMatch.emails[0] || "";
          policeStationAddress = stationMatch.hqAddress;
        }
      }

      return {
        ...c,
        policeStationName,
        policeStationEmail,
        policeStationAddress
      };
    });

    return NextResponse.json({
      success: true,
      count: finalCases.length,
      cases: finalCases
    });

  } catch (error: any) {
    console.error("[Bulk AI Parse API] Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

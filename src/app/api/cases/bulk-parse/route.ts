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
      - dueDate: The original payment due date in "YYYY-MM-DD" format. If the input contains due dates in formats like '24-Nov', '25-Nov', '24-Dec', '25-Dec', '24-Jun':
        - The day is the number (e.g., 24, 25).
        - The month is from the month name abbreviation (e.g., 'Nov' -> November, 'Dec' -> December, 'Jun' -> June).
        - The year is 2024 if the corresponding invoice date is in 2024 (e.g. '31-Jan-24' or '22-Aug-24') or in 2023. If the invoice date specifies a year like 2025 (e.g., '9-Dec-25'), the year is 2025. Otherwise, if no invoice year can be inferred, use 2024.
        - Examples:
          * '24-Nov' with invoice date '31-Jan-24' -> '2024-11-24'
          * '25-Nov' with invoice date '22-Aug-24' -> '2024-11-25'
          * '24-Dec' with invoice date '25-Nov-24' -> '2024-12-24'
          * '25-Dec' with invoice date '9-Dec-25' -> '2025-12-25'
          * '24-Jun' with invoice dates in 2023 -> '2024-06-24'
      - invoiceNo: A string representation of all invoice numbers associated with the case. If there are multiple (e.g. separated by newlines/quotes), combine them into a single string (e.g. "GGN FY 23-24 Sales 5848, GGN FY 23-24 Sales 5849").
      - invoiceDate: The invoice date in "YYYY-MM-DD" format. Translate abbreviations and dots (e.g., "31-Jan-24" -> "2024-01-31", "22-Aug-24" -> "2024-08-22", "30.0ct.23" -> "2023-10-30", "9.Nov.23" -> "2023-11-09", "12.Dec.23" -> "2023-12-12"). If there are multiple dates, pick the latest/most recent one. If not present, set to null.

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

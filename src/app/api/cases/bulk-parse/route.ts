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
      Act as a highly intelligent, flexible AI data parsing assistant for a legal recovery platform.
      Your task is to take raw, unstructured, or semi-structured copy-pasted text (which could be in any sequence, format, or tabular arrangement) containing outstanding dues and defaulter details, and intelligently parse it into a clean, structured JSON array of cases.
      
      **Crucial Guidelines for Handling Messy Data:**
      1. **Order Independence**: The data might not be in a strict order. Use heuristics to identify names, phone numbers, emails, addresses, dates, and amounts regardless of the column sequence.
      2. **Inheritance for Merged/Sparse Cells**: In tabular data, a single defaulter name (along with contact, address, email) might be listed once, followed by multiple rows of different invoices, amounts, and dates (where the name and contact columns are left blank). You MUST inherit the name, contact, and address from the last seen populated row and apply them to these blank rows.
      3. **Group by Defaulter**: You MUST group all invoices and amounts for a single defaulter into a SINGLE case object. Do NOT create separate case objects for the same defaulter.
      4. **Calculate Total Amount**: Calculate and set the \`stuckAmount\` to be the SUM of all invoices for that defaulter.
      5. **Extract Invoices Array**: Extract each individual invoice into an \`invoices\` array within the case object. Each item should have \`invoiceNo\`, \`invoiceDate\`, and \`amount\`.
      
      **Schema Details**:
      For EACH individual case, extract the following:
      - defaulterName: Legal name of the individual or clinic/company (e.g. "Dr. Amrita Sharma", "Ladivya Dental Clinic").
      - entityType: "Company" or "Individual" (infer from name, e.g. names starting with "Dr." or individuals are "Individual", clinics/shops/corporates are "Company").
      - phone: A 10-digit primary phone number, cleaned of spaces/hyphens (e.g. "9716030793"). If multiple, extract the first one here.
      - phone2: An optional secondary phone number, if available.
      - email: Primary email of the defaulter. Crucially, you MUST identify and rectify obvious domain typos in email addresses (e.g., "ggmail.com", "gamil.com", "gmial.com", "gmal.com" should be corrected to "gmail.com").
      - email2: An optional secondary email, if available (also rectifying obvious domain typos).
      - ccEmails: Extract any emails designated as CC (carbon copy). If CC emails are provided globally for the entire batch in the text (e.g. "cc emails: a@b.com, c@d.com"), you MUST apply these same CC emails to EVERY single case you extract. Combine multiple CC emails with a comma. Return empty string if none found.
      - address: Complete physical address of the defaulter.
      - state: Standardized Indian State or UT name matching the address (e.g. "Haryana", "Maharashtra", "Madhya Pradesh"). Extract this from the address or state column.
      - stuckAmount: The TOTAL sum of all outstanding dues for this defaulter (all their invoices combined) as a number (float/integer). Clean all commas and currency symbols.
      - dueDate: The earliest or most relevant payment due date in "YYYY-MM-DD" format. Handle formats like '30.06.2026', '24-Nov' (infer year from context/invoice date). Dates in the future are ACCEPTABLE.
      - invoices: An array of objects representing each individual invoice, containing:
          - invoiceNo: A string representation of the invoice number.
          - invoiceDate: The invoice date in "YYYY-MM-DD" format. Set to null if not present.
          - dueDate: The payment due date of this specific invoice in "YYYY-MM-DD" format. Set to null if not present.
          - amount: The specific outstanding amount for this invoice as a number.

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
            "ccEmails": "...",
            "address": "...",
            "state": "...",
            "stuckAmount": 1234.56,
            "dueDate": "YYYY-MM-DD",
            "invoices": [
              {
                "invoiceNo": "INV-001",
                "invoiceDate": "YYYY-MM-DD",
                "dueDate": "YYYY-MM-DD",
                "amount": 1234.56
              }
            ]
          }
        ]
      }
    `;

    console.log(`[Bulk AI Parse] Parsing text input of length ${text.length}...`);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: text }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1,
      max_tokens: 16384,
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

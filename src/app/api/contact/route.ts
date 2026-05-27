import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  state: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidIndianMobile(phone: string) {
  return /^\d{10}$/.test(phone);
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const phone = body.phone?.trim() ?? "";
    const serviceCategory = body.serviceCategory?.trim() ?? "";
    const state = body.state?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(phone) ||
      !isNonEmptyString(serviceCategory) ||
      !isNonEmptyString(state) ||
      !isNonEmptyString(message)
    ) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!isValidIndianMobile(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    const { db } = await getDbAndBucket("fs");

    const doc = {
      name,
      email,
      phone,
      serviceCategory,
      state,
      message,
      source: "contact-form",
      userAgent: req.headers.get("user-agent") || "",
      ip:
        req.headers.get("x-forwarded-for") ||
        req.headers.get("x-real-ip") ||
        "",
      createdAt: new Date().toISOString(),
    };

    const result = await db.collection("contact_submissions").insertOne(doc);

    return NextResponse.json({
      success: true,
      submissionId: result.insertedId.toString(),
    });
  } catch (error: any) {
    console.error("Contact Submission API Error:", error);
    return NextResponse.json({ error: error?.message || "Server error" }, { status: 500 });
  }
}


import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { INBOUND_COLLECTION, createNotificationForInbound } from "@/lib/inbound-email-router";

export const dynamic = "force-dynamic";

const STATUSES = ["needs_review", "unmatched", "auto_linked", "assigned", "dismissed", "recorded"] as const;

const CASE_SUMMARY_PROJECTION = {
  caseId: 1, defaulterName: 1, clientName: 1, clientEmail: 1, email: 1, email2: 1, phone: 1,
  stuckAmount: 1, status: 1, userId: 1, representeeId: 1, createdAt: 1, invoices: 1, invoiceNo: 1,
};

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session || !(session.user as any).id || (session.user as any).role !== "admin") {
    return null;
  }
  return session;
}

function summarizeCase(c: any) {
  if (!c) return null;
  return {
    caseId: c.caseId,
    defaulterName: c.defaulterName,
    clientName: c.clientName ? String(c.clientName).split(",")[0].trim() : "",
    clientEmail: c.clientEmail || "",
    accusedEmail: c.email || "",
    accusedEmail2: c.email2 || "",
    accusedPhone: c.phone || "",
    stuckAmount: c.stuckAmount || 0,
    status: c.status || "",
    hasOwner: !!c.userId,
    isRepresentation: !!c.representeeId,
    loanId: c.invoices?.[0]?.invoiceNo || c.invoiceNo || "",
    createdAt: c.createdAt || "",
  };
}

export async function GET(req: NextRequest) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "Unauthorized. Admin access required." }, { status: 401 });
  }

  try {
    const { db } = await getDbAndBucket("fs");
    const sp = req.nextUrl.searchParams;
    const type = sp.get("type") || "list";

    // ── Counts per routing status ──
    if (type === "counts") {
      const agg = await db.collection(INBOUND_COLLECTION).aggregate([
        { $group: { _id: "$routing.status", n: { $sum: 1 } } },
      ]).toArray();
      const counts: Record<string, number> = Object.fromEntries(STATUSES.map((s) => [s, 0]));
      for (const a of agg) if (a._id) counts[a._id] = a.n;
      return NextResponse.json({ success: true, counts });
    }

    // ── Case search for manual assignment ──
    if (type === "caseSearch") {
      const q = (sp.get("q") || "").trim();
      if (q.length < 2) return NextResponse.json({ success: true, data: [] });
      const rx = { $regex: escapeRegex(q), $options: "i" };
      const found = await db.collection("cases").find({
        $or: [
          { caseId: rx }, { defaulterName: rx }, { clientName: rx }, { email: rx }, { email2: rx },
          { phone: rx }, { invoiceNo: rx }, { "invoices.invoiceNo": rx },
        ],
      }, { projection: CASE_SUMMARY_PROJECTION }).sort({ createdAt: -1 }).limit(20).toArray();
      return NextResponse.json({ success: true, data: found.map(summarizeCase) });
    }

    // ── List ──
    const status = sp.get("status") || "needs_review";
    const search = (sp.get("search") || "").trim();
    const page = Math.max(1, parseInt(sp.get("page") || "1"));
    const limit = Math.min(100, Math.max(1, parseInt(sp.get("limit") || "25")));

    const match: any = {};
    if (status === "open") match["routing.status"] = { $in: ["needs_review", "unmatched"] };
    else if (status !== "all") match["routing.status"] = status;
    if (search) {
      const rx = { $regex: escapeRegex(search), $options: "i" };
      match.$or = [{ subject: rx }, { fromEmail: rx }, { fromName: rx }, { cleanBody: rx }, { "routing.caseId": rx }];
    }

    const [total, docs] = await Promise.all([
      db.collection(INBOUND_COLLECTION).countDocuments(match),
      db.collection(INBOUND_COLLECTION)
        .find(match, { projection: { bodyText: 0 } })
        .sort({ receivedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray(),
    ]);

    const caseIds = new Set<string>();
    for (const d of docs) {
      if (d.routing?.caseId) caseIds.add(d.routing.caseId);
      for (const c of d.routing?.candidates || []) caseIds.add(c.caseId);
    }
    const caseDocs = caseIds.size > 0
      ? await db.collection("cases").find({ caseId: { $in: [...caseIds] } }, { projection: CASE_SUMMARY_PROJECTION }).toArray()
      : [];
    const caseMap = new Map(caseDocs.map((c) => [c.caseId, summarizeCase(c)]));

    const data = docs.map((d) => ({
      _id: d._id.toString(),
      zohoMessageId: d.zohoMessageId,
      receivedAt: d.receivedAt,
      fromEmail: d.fromEmail,
      fromName: d.fromName,
      to: d.to || [],
      cc: d.cc || [],
      subject: d.subject,
      cleanBody: d.cleanBody,
      classification: d.classification,
      source: d.source,
      notificationId: d.notificationId,
      routing: {
        ...d.routing,
        linkedCase: d.routing?.caseId ? caseMap.get(d.routing.caseId) || null : null,
        candidates: (d.routing?.candidates || []).map((c: any) => ({ ...c, case: caseMap.get(c.caseId) || null })),
      },
    }));

    return NextResponse.json({ success: true, total, page, limit, totalPages: Math.ceil(total / limit) || 1, data });
  } catch (error: any) {
    console.error("[Admin Inbound Emails API] GET error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

/**
 * POST { action: "assign", inboundId, caseId }   → links the email to a case and notifies the case owner
 * POST { action: "dismiss", inboundId, note? }   → marks as not related to any case
 * POST { action: "reopen", inboundId }           → moves a dismissed email back to review
 */
export async function POST(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized. Admin access required." }, { status: 401 });
  }

  try {
    const { db } = await getDbAndBucket("fs");
    const body = await req.json();
    const { action, inboundId, caseId, note } = body || {};
    if (!inboundId || !ObjectId.isValid(inboundId)) {
      return NextResponse.json({ error: "Valid inboundId is required" }, { status: 400 });
    }

    const inbound = await db.collection(INBOUND_COLLECTION).findOne({ _id: new ObjectId(inboundId) });
    if (!inbound) return NextResponse.json({ error: "Inbound email not found" }, { status: 404 });

    const actor = (session.user as any).email || (session.user as any).id;
    const nowIso = new Date().toISOString();

    if (action === "assign") {
      if (!caseId) return NextResponse.json({ error: "caseId is required" }, { status: 400 });
      if (inbound.classification === "dispatcher") {
        return NextResponse.json({ error: "Dispatcher emails are not linked to cases" }, { status: 400 });
      }
      const caseDoc = await db.collection("cases").findOne({ caseId: String(caseId).trim() });
      if (!caseDoc) return NextResponse.json({ error: `Case ${caseId} not found` }, { status: 404 });
      if (!caseDoc.userId) return NextResponse.json({ error: `Case ${caseId} has no owner account to notify` }, { status: 400 });

      const notificationId = await createNotificationForInbound(db, inbound, caseDoc, "manual");
      await db.collection(INBOUND_COLLECTION).updateOne(
        { _id: inbound._id },
        {
          $set: {
            notificationId,
            "routing.status": "assigned",
            "routing.method": "manual",
            "routing.caseId": caseDoc.caseId,
            "routing.decidedAt": nowIso,
            "routing.decidedBy": actor,
            "routing.previousCaseId": inbound.routing?.caseId || null,
          },
        }
      );
      return NextResponse.json({ success: true, caseId: caseDoc.caseId, notificationId });
    }

    if (action === "dismiss") {
      if (inbound.notificationId) {
        return NextResponse.json({ error: "This email is already linked to a case; reassign it instead of dismissing." }, { status: 400 });
      }
      await db.collection(INBOUND_COLLECTION).updateOne(
        { _id: inbound._id },
        { $set: { "routing.status": "dismissed", "routing.decidedAt": nowIso, "routing.decidedBy": actor, "routing.note": note || "" } }
      );
      return NextResponse.json({ success: true });
    }

    if (action === "reopen") {
      if (inbound.routing?.status !== "dismissed") {
        return NextResponse.json({ error: "Only dismissed emails can be reopened" }, { status: 400 });
      }
      const next = (inbound.routing?.candidates || []).length > 0 ? "needs_review" : "unmatched";
      await db.collection(INBOUND_COLLECTION).updateOne(
        { _id: inbound._id },
        { $set: { "routing.status": next, "routing.decidedAt": nowIso, "routing.decidedBy": actor } }
      );
      return NextResponse.json({ success: true, status: next });
    }

    return NextResponse.json({ error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    console.error("[Admin Inbound Emails API] POST error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

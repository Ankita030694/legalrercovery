import { NextRequest, NextResponse } from "next/server";
import { getDbAndBucket } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

/* ── Helpers ─────────────────────────────────────────── */

/** Escape special regex characters in user input */
function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build a MongoDB filter that fuzzy-matches `search` across
 * name, phone, email, and state.
 *
 * Each whitespace-separated word must match at least one field
 * (AND across words, OR across fields).
 */
function buildSearchFilter(search: string): Record<string, unknown> {
  if (!search) return {};
  const words = search.split(/\s+/).filter(Boolean);
  if (words.length === 0) return {};

  const perWord = words.map((w) => {
    const pat = escapeRegex(w);
    return {
      $or: [
        { name: { $regex: pat, $options: "i" } },
        { phone: { $regex: pat, $options: "i" } },
        { email: { $regex: pat, $options: "i" } },
        { state: { $regex: pat, $options: "i" } },
      ],
    };
  });

  return perWord.length === 1 ? perWord[0] : { $and: perWord };
}

/** Safely merge multiple Mongo filters with $and */
function mergeFilters(...parts: Record<string, unknown>[]): Record<string, unknown> {
  const nonEmpty = parts.filter((p) => Object.keys(p).length > 0);
  if (nonEmpty.length === 0) return {};
  if (nonEmpty.length === 1) return nonEmpty[0];
  return { $and: nonEmpty };
}

/** Map a raw Mongo document to a unified FunnelItem shape */
function mapDoc(doc: any, status: string) {
  const base = {
    id: doc._id.toString(),
    name: doc.name || "Anonymous",
    phone: doc.phone || "",
    email: doc.email || "No Email",
    state: doc.state || "Not Specified",
    oppositionCount: doc.oppositionCount || 1,
    status,
    createdAt: doc.createdAt
      ? new Date(doc.createdAt).toISOString()
      : new Date().toISOString(),
  };

  if (status === "pending_verification") {
    return {
      ...base,
      details: {
        failedAttempts: doc.failedAttempts || 0,
        otpExpires: doc.otpExpires
          ? new Date(doc.otpExpires).toISOString()
          : null,
      },
    };
  }

  if (status === "pending_payment") {
    return {
      ...base,
      details: {
        verifiedAt: doc.verifiedAt
          ? new Date(doc.verifiedAt).toISOString()
          : null,
        txnid: doc.txnid || null,
      },
    };
  }

  // completed
  return {
    ...base,
    details: {
      amountPaid: doc.amountPaid || 0,
      payuTxnId: doc.payuTxnId || null,
      paymentDate: doc.paymentDate
        ? new Date(doc.paymentDate).toISOString()
        : null,
      caseId: doc.caseId || null,
      lastLoginAt: doc.lastLoginAt
        ? new Date(doc.lastLoginAt).toISOString()
        : null,
    },
  };
}

/* ── Route Handler ───────────────────────────────────── */

export async function GET(req: NextRequest) {
  // Auth gate
  const session = await getServerSession(authOptions);
  if (
    !session ||
    !(session.user as any).id ||
    (session.user as any).role !== "admin"
  ) {
    return NextResponse.json(
      { error: "Unauthorized. Admin access required." },
      { status: 401 }
    );
  }

  try {
    const { db } = await getDbAndBucket("fs");

    // Parse query params
    const url = new URL(req.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page") || "1"));
    const limit = Math.min(
      500,
      Math.max(1, parseInt(url.searchParams.get("limit") || "200"))
    );
    const status = url.searchParams.get("status") || "all";
    const search = (url.searchParams.get("search") || "").trim();

    const skip = (page - 1) * limit;
    const searchFilter = buildSearchFilter(search);

    // ── Global summary counts (always unfiltered) ──
    const [pvTotal, ppTotal, compTotal] = await Promise.all([
      db.collection("pending_verification").countDocuments({}),
      db.collection("pending_payment").countDocuments({}),
      db.collection("users").countDocuments({ isPaid: true, hasUnlimitedCases: { $ne: true } }),
    ]);

    const grandTotal = pvTotal + ppTotal + compTotal;
    const summary = {
      totalSubmitted: grandTotal,
      pendingVerificationCount: pvTotal,
      pendingPaymentCount: ppTotal,
      completedCount: compTotal,
      conversionRate:
        grandTotal > 0
          ? parseFloat(((compTotal / grandTotal) * 100).toFixed(2))
          : 0,
    };

    // ── Build per-collection query descriptors ──
    interface ColQuery {
      name: string;
      filter: Record<string, unknown>;
      statusLabel: string;
    }
    const queries: ColQuery[] = [];

    if (status === "all" || status === "pending_verification") {
      queries.push({
        name: "pending_verification",
        filter: mergeFilters(searchFilter),
        statusLabel: "pending_verification",
      });
    }
    if (status === "all" || status === "pending_payment") {
      queries.push({
        name: "pending_payment",
        filter: mergeFilters(searchFilter),
        statusLabel: "pending_payment",
      });
    }
    if (status === "all" || status === "completed") {
      queries.push({
        name: "users",
        filter: mergeFilters({ isPaid: true, hasUnlimitedCases: { $ne: true } }, searchFilter),
        statusLabel: "completed",
      });
    }

    // ── Single-collection path (specific status) ──
    // Uses native Mongo skip/limit — most efficient.
    if (queries.length === 1) {
      const q = queries[0];
      const [totalFiltered, docs] = await Promise.all([
        db.collection(q.name).countDocuments(q.filter),
        db
          .collection(q.name)
          .find(q.filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limit)
          .toArray(),
      ]);

      const items = docs.map((d: any) => mapDoc(d, q.statusLabel));

      return NextResponse.json({
        success: true,
        summary,
        items,
        totalFiltered,
        hasMore: skip + items.length < totalFiltered,
        page,
        limit,
      });
    }

    // ── Multi-collection path (status === "all") ──
    // Fetch `skip + limit` from each collection (capped read),
    // merge-sort by createdAt desc, then slice for the requested page.
    const ceiling = skip + limit;

    const [docSets, filteredCounts] = await Promise.all([
      Promise.all(
        queries.map(async (q) => {
          const docs = await db
            .collection(q.name)
            .find(q.filter)
            .sort({ createdAt: -1 })
            .limit(ceiling)
            .toArray();
          return docs.map((d: any) => mapDoc(d, q.statusLabel));
        })
      ),
      Promise.all(
        queries.map((q) => db.collection(q.name).countDocuments(q.filter))
      ),
    ]);

    const totalFiltered = filteredCounts.reduce((a, b) => a + b, 0);

    const merged = docSets
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    const items = merged.slice(skip, skip + limit);

    return NextResponse.json({
      success: true,
      summary,
      items,
      totalFiltered,
      hasMore: skip + items.length < totalFiltered,
      page,
      limit,
    });
  } catch (error: any) {
    console.error(
      "[Funnel API] Error loading conversion funnel data:",
      error
    );
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

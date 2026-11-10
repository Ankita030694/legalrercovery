import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import {
  batchCountsAsMailed,
  getEligibleDispatchStep,
  getCompletedNoticeNumbers,
  resolveBatchNoticeNumber,
} from "@/lib/dispatch-eligibility";
import { authorizeSpecialUser } from "@/lib/dispatch-auth";
import { getDispatchPool } from "@/lib/dispatch-batch";

export const dynamic = 'force-dynamic';

/**
 * GET /api/notice-dispatch
 * Returns all cases managed under the special admin pool with:
 * - Person / Defaulter Name
 * - Address
 * - Phone
 * - Email
 * - Recovered Amount
 * - Total Stuck/Claim Amount
 * - Notice status and dispatch timelines
 * Optional query param: representeeId to filter by a specific client representation
 */
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await getDbAndBucket("fs");

    const authCheck = await authorizeSpecialUser(session, db);
    if (!authCheck.authorized) {
      return authCheck.errorResponse;
    }

    const representeeIdParam = req.nextUrl.searchParams.get("representeeId");

    // Find all admin accounts matching the special phone numbers, and the cases they manage
    const { adminIds, adminIdStrings, conditions: queryConditions } = await getDispatchPool(db);

    // Fetch all representees to map client/organization names
    const representees = await db.collection("representees").find({
      $or: [
        { userId: { $in: adminIds } },
        { userId: { $in: adminIdStrings } }
      ]
    }).toArray();
    const representeeMap = new Map(representees.map(r => [r._id.toString(), r]));

    // Query all cases belonging to these admin IDs or client phones
    let query: any = { $or: queryConditions };

    if (req.nextUrl.searchParams.get("scope") === "physical") {
      // Retail cases whose owner paid for Speed Post (outside the special admin pool)
      query = { physicalDispatch: true };
    } else if (representeeIdParam) {
      if (representeeIdParam === "self" || representeeIdParam === "direct") {
        query = {
          $and: [
            { $or: queryConditions },
            { $or: [{ representeeId: { $exists: false } }, { representeeId: null }, { representeeId: "" }] }
          ]
        };
      } else {
        let repObjectId: any = representeeIdParam;
        try { repObjectId = new ObjectId(representeeIdParam); } catch (e) {}
        query = {
          $and: [
            { $or: queryConditions },
            { $or: [{ representeeId: repObjectId }, { representeeId: representeeIdParam }] }
          ]
        };
      }
    }

    const cases = await db.collection("cases").find(query).sort({ createdAt: -1 }).toArray();

    // Fetch all dispatch batches that include any of these cases
    const caseObjectIds = cases.map((c: any) => c._id);
    const caseIdStrings = cases.map((c: any) => c._id.toString());
    const caseByIdMap = new Map<string, any>(cases.map((c: any) => [c._id.toString(), c]));

    const rawBatches = caseObjectIds.length > 0
      ? await db
          .collection("dispatch_batches")
          .find({
            $or: [
              { caseIds: { $in: caseObjectIds } },
              { caseIds: { $in: caseIdStrings } },
            ],
          })
          .sort({ createdAt: 1 })
          .toArray()
      : [];

    // Map per-case dispatched steps (keyed by step number, keeping the latest successful dispatch for each step)
    const perCaseDispatchedSteps = new Map<string, Map<number, any>>();
    cases.forEach((c: any) => {
      perCaseDispatchedSteps.set(c._id.toString(), new Map<number, any>());
    });

    rawBatches.forEach((batch: any) => {
      const bCaseIds = Array.isArray(batch.caseIds) ? batch.caseIds : [];
      bCaseIds.forEach((rawCid: any) => {
        const cidStr = String(rawCid);
        const c = caseByIdMap.get(cidStr);
        if (!c || !batchCountsAsMailed(batch, cidStr)) return;
        const step = resolveBatchNoticeNumber(c, batch);
        const stepMap = perCaseDispatchedSteps.get(cidStr);
        if (!stepMap) return;
        const prev = stepMap.get(step);
        stepMap.set(step, {
          step,
          label: `Notice ${step}`,
          batchId: batch.batchId,
          dispatcherEmail: batch.dispatcherEmail,
          dispatchedAt: new Date(batch.dispatchedAt || batch.createdAt || Date.now()).toISOString(),
          downloadCount: batch.downloadCount || 0,
          lastDownloadedAt: batch.lastDownloadedAt
            ? new Date(batch.lastDownloadedAt).toISOString()
            : null,
          emailSent: batch.emailSent !== false,
          dispatchCount: (prev?.dispatchCount || 0) + 1,
        });
      });
    });

    let totalRecovered = 0;
    let totalDebt = 0;
    let activeCount = 0;
    let recoveredCount = 0;
    let completedCount = 0;
    let pausedCount = 0;

    const formattedCases = cases.map((c: any) => {
      const debt = Number(c.stuckAmount || c.debtAmount || 0);
      const recovered = Number(c.recoveredAmount || (c.status === "recovered" ? debt : 0));

      totalDebt += debt;
      totalRecovered += recovered;

      if (c.status === "active") activeCount++;
      else if (c.status === "recovered") recoveredCount++;
      else if (c.status === "completed") completedCount++;
      else if (c.status === "paused") pausedCount++;

      let repName = "";
      if (c.representeeId) {
        const rep = representeeMap.get(c.representeeId.toString());
        if (rep) repName = rep.name;
      }
      if (!repName && c.clientName) {
        repName = c.clientName;
      }

      const cidStr = c._id.toString();
      const dispatchStep = getEligibleDispatchStep(c);
      const completedNotices = getCompletedNoticeNumbers(c);
      const stepMap = perCaseDispatchedSteps.get(cidStr) || new Map<number, any>();
      const dispatchedNotices = Array.from(stepMap.values()).sort((a, b) => a.step - b.step);
      const dispatchedSteps = dispatchedNotices.map((d: any) => d.step);
      const isCurrentStepDispatched = dispatchStep !== null && stepMap.has(dispatchStep);
      const currentStepDispatchInfo = dispatchStep !== null ? stepMap.get(dispatchStep) || null : null;

      return {
        id: cidStr,
        _id: cidStr,
        caseId: c.caseId || `LR-${cidStr.slice(-4)}`,
        defaulterName: c.defaulterName || c.opponentName || "Unspecified Person",
        address: c.address || c.opponentAddress || "Address not provided",
        phone: c.phone || c.opponentPhone || "",
        phone2: c.phone2 || "",
        email: c.email || c.opponentEmail || "",
        email2: c.email2 || "",
        recoveredAmount: recovered,
        stuckAmount: debt,
        status: c.status || "active",
        category: c.category || "general-recovery",
        currentStep: c.currentStep || 1,
        // Latest notice number (1 | 2 | 3) delivered via Email & WhatsApp (null = not eligible for dispatch)
        dispatchStep,
        // All notice numbers (1 | 2 | 3) already delivered via Email & WhatsApp for this case
        completedNotices,
        // Notices already dispatched to the physical dispatcher via mail
        dispatchedNotices,
        dispatchedSteps,
        isCurrentStepDispatched,
        currentStepDispatchInfo,
        clientName: repName || "Direct Advocate Case",
        representeeId: c.representeeId ? c.representeeId.toString() : null,
        policeStationName: c.policeStationName || "",
        policeStationEmail: c.policeStationEmail || "",
        policeStationAddress: c.policeStationAddress || "",
        timeline: c.timeline || [],
        createdAt: c.createdAt || new Date().toISOString(),
        updatedAt: c.updatedAt || new Date().toISOString(),
        dueDate: c.dueDate || c.invoiceDate || "",
        invoices: c.invoices || []
      };
    });

    const dispatchBatches = rawBatches
      .slice()
      .reverse()
      .map((b: any) => {
        const bCaseIdSet = new Set(
          (Array.isArray(b.caseIds) ? b.caseIds : []).map((id: any) => String(id))
        );
        const matchedCasesInBatch = cases.filter((c: any) => bCaseIdSet.has(c._id.toString()));
        const notices = matchedCasesInBatch.map((c: any) => {
          const step = resolveBatchNoticeNumber(c, b);
          return {
            caseId: c._id.toString(),
            caseRef: c.caseId || `LR-${c._id.toString().slice(-4)}`,
            defaulterName: c.defaulterName || c.opponentName || "Unspecified Person",
            phone: c.phone || c.opponentPhone || "",
            email: c.email || c.opponentEmail || "",
            stuckAmount: Number(c.stuckAmount || c.debtAmount || 0),
            step,
            label: `Notice ${step}`,
            createdAt: c.createdAt || new Date().toISOString(),
          };
        });
        const stepCounts: Record<number, number> = {};
        notices.forEach((n: any) => {
          stepCounts[n.step] = (stepCounts[n.step] || 0) + 1;
        });
        return {
          batchId: b.batchId,
          token: b.token,
          source: b.source || "manual",
          failedNotices: Array.isArray(b.failedCases) ? b.failedCases : [],
          downloadUrl:
            b.source === "auto"
              ? `/api/notice-dispatch/download-pdf?token=${b.token}`
              : `/notice-dispatch/download?token=${b.token}`,
          dispatcherEmail: b.dispatcherEmail,
          notes: b.notes || "",
          createdAt: new Date(b.dispatchedAt || b.createdAt || Date.now()).toISOString(),
          expiresAt: b.expiresAt ? new Date(b.expiresAt).toISOString() : null,
          emailSent: b.emailSent !== false,
          downloadCount: b.downloadCount || 0,
          lastDownloadedAt: b.lastDownloadedAt ? new Date(b.lastDownloadedAt).toISOString() : null,
          totalCasesInBatch: b.totalCases || bCaseIdSet.size,
          matchedCasesCount: notices.length,
          stepBreakdown: Object.entries(stepCounts)
            .map(([s, count]) => ({ step: Number(s), label: `Notice ${s}`, count }))
            .sort((a, b) => a.step - b.step),
          notices,
        };
      });

    return NextResponse.json({
      success: true,
      count: formattedCases.length,
      cases: formattedCases,
      dispatchBatches,
      stats: {
        totalCases: formattedCases.length,
        totalDebt,
        totalRecovered,
        activeCount,
        recoveredCount,
        completedCount,
        pausedCount
      }
    });

  } catch (error: any) {
    console.error("[Notice Dispatch API] GET Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

/**
 * PUT /api/notice-dispatch
 * Updates the recovered amount and/or status for a case
 */
export async function PUT(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { db } = await getDbAndBucket("fs");

    const authCheck = await authorizeSpecialUser(session, db);
    if (!authCheck.authorized) {
      return authCheck.errorResponse;
    }

    const body = await req.json();
    const { id, recoveredAmount, status } = body;

    if (!id) {
      return NextResponse.json({ error: "Case ID is required." }, { status: 400 });
    }

    // Find the case
    let targetCase: any;
    try {
      targetCase = await db.collection("cases").findOne({ _id: new ObjectId(id) });
    } catch (e) {
      targetCase = await db.collection("cases").findOne({ _id: id });
    }

    if (!targetCase) {
      return NextResponse.json({ error: "Case not found." }, { status: 404 });
    }

    const updateDoc: any = {
      updatedAt: new Date().toISOString()
    };

    if (recoveredAmount !== undefined) {
      const parsedAmt = parseFloat(recoveredAmount);
      if (isNaN(parsedAmt) || parsedAmt < 0) {
        return NextResponse.json({ error: "Invalid recovered amount." }, { status: 400 });
      }
      updateDoc.recoveredAmount = parsedAmt;
      // If recovered amount equals or exceeds stuck amount, auto-set status to recovered if not provided
      if (!status && parsedAmt >= (targetCase.stuckAmount || 0) && (targetCase.stuckAmount || 0) > 0) {
        updateDoc.status = "recovered";
      }
    }

    if (status) {
      updateDoc.status = status;
      if (status === "recovered" && recoveredAmount === undefined && !targetCase.recoveredAmount) {
        updateDoc.recoveredAmount = targetCase.stuckAmount || 0;
      }
    }

    await db.collection("cases").updateOne(
      { _id: targetCase._id },
      { $set: updateDoc }
    );

    return NextResponse.json({
      success: true,
      message: "Case recovery details updated successfully.",
      data: {
        id: targetCase._id.toString(),
        ...updateDoc
      }
    });

  } catch (error: any) {
    console.error("[Notice Dispatch API] PUT Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}

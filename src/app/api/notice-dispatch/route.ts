import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getDbAndBucket } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getEligibleDispatchStep } from "@/lib/dispatch-eligibility";

export const dynamic = 'force-dynamic';

/**
 * Checks if the session user is one of the designated special administrators:
 * '8700343611' or '8130104447'
 */
async function authorizeSpecialUser(session: any, db: any) {
  if (!session || !session.user || !(session.user as any).id) {
    return { authorized: false, errorResponse: NextResponse.json({ error: "Unauthorized access. Please log in." }, { status: 401 }) };
  }

  const userId = (session.user as any).id;
  const userRole = (session.user as any).role;
  const userEmail = (session.user as any).email;

  // Direct admin bypass
  if (userId === "admin-env-root" || userRole === "admin" || userEmail === "admin@legalrecovery.in") {
    return {
      authorized: true,
      user: {
        _id: "admin-env-root",
        phone: "8700343611",
        name: "Super Administrator",
        email: "admin@legalrecovery.in"
      },
      cleanPhone: "8700343611"
    };
  }

  let user: any;
  try {
    user = await db.collection("users").findOne({ _id: new ObjectId(userId) });
  } catch (e) {
    user = await db.collection("users").findOne({ _id: userId });
  }

  if (!user) {
    return { authorized: false, errorResponse: NextResponse.json({ error: "User profile not found." }, { status: 404 }) };
  }

  const cleanPhone = (user.phone || "").replace(/\D/g, "");
  const isSpecial = cleanPhone.endsWith("8700343611") || cleanPhone.endsWith("8130104447") || user.role === "admin";

  if (!isSpecial) {
    return { 
      authorized: false, 
      errorResponse: NextResponse.json({ 
        error: "Access Denied. The Notice Dispatch console is restricted exclusively to authorized administrator accounts." 
      }, { status: 403 }) 
    };
  }

  return { authorized: true, user, cleanPhone };
}

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

    // Find all admin accounts matching the special phone numbers
    const admins = await db.collection("users").find({
      phone: { $regex: /(8700343611|8130104447)$/ }
    }).toArray();
    const adminIds = admins.map(a => a._id);
    const adminIdStrings = admins.map(a => a._id.toString());

    // Fetch all representees to map client/organization names
    const representees = await db.collection("representees").find({
      $or: [
        { userId: { $in: adminIds } },
        { userId: { $in: adminIdStrings } }
      ]
    }).toArray();
    const representeeMap = new Map(representees.map(r => [r._id.toString(), r]));

    // Query all cases belonging to these admin IDs or client phones
    const queryConditions: any[] = [
      { userId: { $in: adminIds } },
      { userId: { $in: adminIdStrings } },
      { clientPhone: { $regex: /(8700343611|8130104447)$/ } }
    ];

    let query: any = { $or: queryConditions };

    if (representeeIdParam) {
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

    // Resolve the notice step that was dispatched for a case in a specific batch
    const resolveCaseStepAtBatch = (c: any, batch: any): number => {
      if (Array.isArray(batch?.caseDispatches)) {
        const found = batch.caseDispatches.find(
          (cd: any) => String(cd?.caseId) === c._id.toString()
        );
        if (found && typeof found.step === "number" && found.step > 0) {
          return found.step;
        }
      }
      if (typeof batch?.targetStep === "number" && batch.targetStep > 0) {
        return batch.targetStep;
      }
      const batchDate = batch?.createdAt ? new Date(batch.createdAt) : null;
      const policeStep = c?.category === "loan-recovery" ? 2 : 4;
      let stepAtBatch: number | null = null;
      const timeline = Array.isArray(c?.timeline) ? c.timeline : [];
      timeline.forEach((t: any, idx: number) => {
        if (!t || t.status !== "completed") return;
        const sNo = Number(t.step) || idx + 1;
        if (sNo === policeStep) return;
        const compRaw = t.completedAt || t.lockedAt;
        const compAt = compRaw ? new Date(compRaw) : null;
        if (!batchDate || !compAt || isNaN(compAt.getTime()) || compAt <= batchDate) {
          if (stepAtBatch === null || sNo > stepAtBatch) {
            stepAtBatch = sNo;
          }
        }
      });
      return stepAtBatch ?? getEligibleDispatchStep(c) ?? 1;
    };

    // Map per-case dispatched steps (keyed by step number, keeping the latest successful dispatch for each step)
    const perCaseDispatchedSteps = new Map<string, Map<number, any>>();
    cases.forEach((c: any) => {
      perCaseDispatchedSteps.set(c._id.toString(), new Map<number, any>());
    });

    rawBatches.forEach((batch: any) => {
      if (batch.emailSent === false) return;
      const bCaseIds = Array.isArray(batch.caseIds) ? batch.caseIds : [];
      bCaseIds.forEach((rawCid: any) => {
        const cidStr = String(rawCid);
        const c = caseByIdMap.get(cidStr);
        if (!c) return;
        const step = resolveCaseStepAtBatch(c, batch);
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
        // Latest notice delivered via Email & WhatsApp (null = not eligible for dispatch)
        dispatchStep,
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
      .filter((b: any) => b.emailSent !== false)
      .slice()
      .reverse()
      .map((b: any) => {
        const bCaseIdSet = new Set(
          (Array.isArray(b.caseIds) ? b.caseIds : []).map((id: any) => String(id))
        );
        const matchedCasesInBatch = cases.filter((c: any) => bCaseIdSet.has(c._id.toString()));
        const notices = matchedCasesInBatch.map((c: any) => {
          const step = resolveCaseStepAtBatch(c, b);
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
          downloadUrl: `/notice-dispatch/download?token=${b.token}`,
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

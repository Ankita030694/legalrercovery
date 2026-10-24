"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Send,
  Building2,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  Search,
  Filter,
  RefreshCw,
  Copy,
  Check,
  Loader2,
  X,
  FileText,
  Mail,
  Phone,
  Shield,
  Layers,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  IndianRupee
} from "lucide-react";

interface DispatchedNoticeInfo {
  step: number;
  label: string;
  batchId: string;
  dispatcherEmail: string;
  dispatchedAt: string;
  downloadCount: number;
  lastDownloadedAt?: string | null;
  emailSent: boolean;
  dispatchCount?: number;
}

interface DispatchBatchNoticeItem {
  caseId: string;
  caseRef: string;
  defaulterName: string;
  phone: string;
  email: string;
  stuckAmount: number;
  step: number;
  label: string;
  createdAt: string;
}

interface DispatchBatchInfo {
  batchId: string;
  token: string;
  downloadUrl: string;
  dispatcherEmail: string;
  notes: string;
  createdAt: string;
  expiresAt?: string | null;
  emailSent: boolean;
  downloadCount: number;
  lastDownloadedAt?: string | null;
  totalCasesInBatch: number;
  matchedCasesCount: number;
  stepBreakdown: { step: number; label: string; count: number }[];
  notices: DispatchBatchNoticeItem[];
}

interface CaseItem {
  id: string;
  _id: string;
  caseId: string;
  defaulterName: string;
  address: string;
  phone: string;
  email: string;
  recoveredAmount: number;
  stuckAmount: number;
  status: string;
  category: string;
  currentStep: number;
  dispatchStep?: number | null;
  completedNotices?: number[];
  dispatchedNotices?: DispatchedNoticeInfo[];
  dispatchedSteps?: number[];
  isCurrentStepDispatched?: boolean;
  currentStepDispatchInfo?: DispatchedNoticeInfo | null;
  clientName: string;
  policeStationName?: string;
  timeline?: any[];
  createdAt: string;
}

const DEFAULT_DISPATCHER_EMAIL = "jatinder991425@gmail.com";
const DISPATCHER_EMAIL_STORAGE_KEY = "ama_dispatcher_email";
const NOTICE_NUMBERS: Array<1 | 2 | 3> = [1, 2, 3];

export default function ScopedRepresentationDispatchPage() {
  const params = useParams();
  const router = useRouter();
  const repId = String(params?.repId || "");
  const isDirect = repId === "direct";

  const [representee, setRepresentee] = useState<any>(null);
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [dispatchBatches, setDispatchBatches] = useState<DispatchBatchInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Selection & Dispatch states
  const [selectedCaseIds, setSelectedCaseIds] = useState<string[]>([]);
  const [dispatcherEmail, setDispatcherEmail] = useState(DEFAULT_DISPATCHER_EMAIL);

  // Restore the last dispatcher email the user entered (if any)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DISPATCHER_EMAIL_STORAGE_KEY);
      if (saved && saved.includes("@")) setDispatcherEmail(saved);
    } catch {}
  }, []);

  const saveDispatcherEmail = (value: string) => {
    const trimmed = value.trim();
    try {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        localStorage.setItem(DISPATCHER_EMAIL_STORAGE_KEY, trimmed);
      }
    } catch {}
  };
  const [dispatchNotes, setDispatchNotes] = useState("");
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<any>(null);

  // Filters: Lot (null = not chosen yet) -> Notice (1 | 2 | 3) -> search
  const [searchQuery, setSearchQuery] = useState("");
  const [lotFilter, setLotFilter] = useState<string | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<1 | 2 | 3>(1);
  const [expandedBatchIds, setExpandedBatchIds] = useState<Record<string, boolean>>({});
  const [showAllBatchesInLog, setShowAllBatchesInLog] = useState(false);

  const toggleExpandBatch = (batchId: string) => {
    setExpandedBatchIds(prev => ({ ...prev, [batchId]: !prev[batchId] }));
  };

  // Whether a case has completed a specific physical Notice Number (1, 2, or 3) via Email & WhatsApp
  const hasCompletedNotice = (c: CaseItem, n: 1 | 2 | 3): boolean => {
    if (Array.isArray(c.completedNotices) && c.completedNotices.length > 0) {
      return c.completedNotices.includes(n);
    }
    return (c.dispatchStep || 0) >= n;
  };

  // Whether a specific physical Notice Number (1, 2, or 3) has been emailed to the dispatcher
  const isNoticeMailed = (c: CaseItem, n: 1 | 2 | 3): boolean => {
    return (c.dispatchedSteps || []).includes(n);
  };

  // Human-readable mapping between category timeline step and Notice Number
  // Loan Recovery:    Step 1 = Notice 1, Step 2 = Police Complaint (excluded), Step 3 = Notice 2, Step 4 = Notice 3
  // General Recovery: Step 1 = Notice 1, Step 2 = Notice 2, Step 3 = Notice 3, Step 4 = Police Complaint (excluded)
  const getNoticeCategorySublabel = (c: CaseItem, n: 1 | 2 | 3): string => {
    const isLoan = c.category === "loan-recovery";
    const timelineStep = isLoan ? (n === 1 ? 1 : n === 2 ? 3 : 4) : n;
    return `${isLoan ? "Loan Recovery" : "General Recovery"} • Step ${timelineStep}`;
  };

  // Lots are cases grouped by creation date (same grouping as the Cases page batches)
  const getLotKey = (c: any): string => {
    const toKey = (d: Date) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    if (c.createdAt) {
      const d = new Date(c.createdAt);
      if (!isNaN(d.getTime())) return toKey(d);
    }
    const idStr = String(c._id || c.id || "");
    if (idStr.length === 24) {
      const d = new Date(parseInt(idStr.substring(0, 8), 16) * 1000);
      if (!isNaN(d.getTime())) return toKey(d);
    }
    return "legacy";
  };

  const formatLotDate = (key: string) => {
    if (key === "legacy") return "Earlier Records";
    const [y, m, d] = key.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  };

  const formatShortDateTime = (iso?: string | null) => {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso;
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  const formatShortDate = (iso?: string | null) => {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso;
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return iso;
    }
  };

  // Only notices already delivered via Email & WhatsApp are eligible for dispatch here.
  // (Pending / partially delivered / failed notices and Police Complaints are excluded.)
  const eligibleCases = useMemo(
    () => cases.filter(c => c.dispatchStep !== null && c.dispatchStep !== undefined),
    [cases]
  );
  const excludedCount = cases.length - eligibleCases.length;

  // Overall bifurcation of Notice 1, Notice 2, and Notice 3 across all eligible cases
  const globalNoticeBifurcation = useMemo(() => {
    return NOTICE_NUMBERS.map(n => {
      let total = 0;
      let mailed = 0;
      eligibleCases.forEach(c => {
        if (hasCompletedNotice(c, n)) {
          total++;
          if (isNoticeMailed(c, n)) mailed++;
        }
      });
      return {
        notice: n,
        label: `Notice ${n}`,
        total,
        mailed,
        pending: total - mailed,
      };
    });
  }, [eligibleCases]);

  // Overall mail dispatch metrics across eligible cases
  const totalDispatchedNoticesCount = useMemo(
    () => eligibleCases.reduce((sum, c) => sum + (c.dispatchedNotices?.length || 0), 0),
    [eligibleCases]
  );

  const computeGroupNoticeBreakdown = (group: CaseItem[]) => {
    return NOTICE_NUMBERS.map(n => {
      let total = 0;
      let mailed = 0;
      group.forEach(c => {
        if (hasCompletedNotice(c, n)) {
          total++;
          if (isNoticeMailed(c, n)) mailed++;
        }
      });
      return {
        notice: n,
        total,
        mailed,
        pending: total - mailed,
      };
    });
  };

  const lots = useMemo(() => {
    const map = new Map<string, CaseItem[]>();
    eligibleCases.forEach(c => {
      const key = getLotKey(c);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(c);
    });
    const keys = Array.from(map.keys()).sort((a, b) => {
      // Oldest first, latest last; undated "legacy" records are the oldest
      if (a === "legacy") return -1;
      if (b === "legacy") return 1;
      return a.localeCompare(b);
    });
    return keys.map((key, i) => {
      const group = map.get(key)!;
      const noticeBreakdown = computeGroupNoticeBreakdown(group);
      return {
        key,
        number: i + 1,
        label: formatLotDate(key),
        count: group.length,
        amount: group.reduce((s, c) => s + Number(c.stuckAmount || 0), 0),
        noticeBreakdown,
      };
    });
  }, [eligibleCases]);

  const lotCases = useMemo(() => {
    if (lotFilter === null) return [];
    return lotFilter === "all" ? eligibleCases : eligibleCases.filter(c => getLotKey(c) === lotFilter);
  }, [eligibleCases, lotFilter]);

  // Clear 3-way bifurcation of Notice 1, Notice 2, Notice 3 for the selected Lot
  const lotNoticeOptions = useMemo(() => {
    return computeGroupNoticeBreakdown(lotCases);
  }, [lotCases]);

  const handleSelectLot = (key: string) => {
    setLotFilter(key);
    const group = key === "all" ? eligibleCases : eligibleCases.filter(c => getLotKey(c) === key);
    const breakdown = computeGroupNoticeBreakdown(group);
    // Auto-select the latest Notice (1, 2, or 3) that has pending mail dispatches;
    // otherwise the latest Notice that has completed cases.
    const withPending = breakdown.filter(b => b.pending > 0);
    const withTotal = breakdown.filter(b => b.total > 0);
    const autoNotice: 1 | 2 | 3 =
      withPending.length > 0
        ? withPending[withPending.length - 1].notice
        : withTotal.length > 0
        ? withTotal[withTotal.length - 1].notice
        : 1;
    setSelectedNotice(autoNotice);
    setSelectedCaseIds([]);
    setSearchQuery("");
  };

  const handleSelectNotice = (n: 1 | 2 | 3) => {
    setSelectedNotice(n);
    setSelectedCaseIds([]);
  };

  const handleResetLot = () => {
    setLotFilter(null);
    setSelectedNotice(1);
    setSelectedCaseIds([]);
    setSearchQuery("");
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (!isDirect) {
        const repRes = await fetch(`/api/representees?_t=${Date.now()}`);
        if (repRes.ok) {
          const repData = await repRes.json();
          if (repData.success && repData.data) {
            const currentRep = repData.data.find((r: any) => r._id === repId || r.id === repId);
            setRepresentee(currentRep || null);
          }
        }
      } else {
        setRepresentee({
          _id: "direct",
          name: "Direct AMA Claims",
          state: "Delhi"
        });
      }

      // Fetch dispatch cases and mail dispatch batches for this representee
      const res = await fetch(`/api/notice-dispatch?representeeId=${repId}&_t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.cases) {
          setCases(data.cases);
        }
        if (data.success && Array.isArray(data.dispatchBatches)) {
          setDispatchBatches(data.dispatchBatches);
        }
      }
    } catch (err) {
      console.error("Failed to load scoped dispatch cases:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (repId) {
      fetchData();
    }
  }, [repId]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val || 0);
  };

  // Selection helpers
  const handleToggleSelect = (caseId: string) => {
    setSelectedCaseIds(prev =>
      prev.includes(caseId) ? prev.filter(id => id !== caseId) : [...prev, caseId]
    );
  };

  const handleSelectAll = () => {
    if (filteredCases.length > 0 && filteredCases.every(c => selectedCaseIds.includes(c.id || c._id))) {
      setSelectedCaseIds([]);
    } else {
      setSelectedCaseIds(filteredCases.map(c => c.id || c._id));
    }
  };

  const handleSelectUndispatched = () => {
    const undispatched = filteredCases.filter(c => !isNoticeMailed(c, selectedNotice));
    setSelectedCaseIds(undispatched.map(c => c.id || c._id));
  };

  // Trigger Zoho Batch Dispatch
  const handleSendBatch = async () => {
    if (!dispatcherEmail || visibleSelectedIds.length === 0) return;
    saveDispatcherEmail(dispatcherEmail);
    setIsDispatching(true);
    setDispatchResult(null);

    try {
      const res = await fetch("/api/notice-dispatch/send-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseIds: visibleSelectedIds,
          dispatcherEmail,
          notes: dispatchNotes,
          targetNotice: selectedNotice,
        })
      });

      const data = await res.json();
      if (!res.ok) {
        setDispatchResult({
          success: false,
          message: data?.error || "Failed to dispatch batch."
        });
      } else {
        setDispatchResult({
          success: true,
          message: data.message || "Batch dispatched successfully via Zoho Mail!",
          batchId: data.batchId,
          downloadUrl: data.downloadUrl,
          totalCases: data.totalCases,
          dispatcherEmail: data.dispatcherEmail || dispatcherEmail,
          dispatchedAt: data.dispatchedAt,
          dispatchedNotices: data.dispatchedNotices || []
        });
        setSelectedCaseIds([]);
        fetchData();
      }
    } catch (err: any) {
      setDispatchResult({
        success: false,
        message: err?.message || "An unexpected error occurred during dispatch."
      });
    } finally {
      setIsDispatching(false);
    }
  };

  // Cases in the selected Lot that have completed the selected Notice (Notice 1, Notice 2, or Notice 3)
  const noticeFilteredCases = useMemo(() => {
    return lotCases.filter(c => hasCompletedNotice(c, selectedNotice));
  }, [lotCases, selectedNotice]);

  // Filtered cases (Lot + Selected Notice + Search)
  const filteredCases = useMemo(() => {
    return noticeFilteredCases.filter(c => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (c.defaulterName || "").toLowerCase().includes(q) ||
               (c.phone || "").includes(q) ||
               (c.email || "").toLowerCase().includes(q) ||
               (c.caseId || c._id || "").toLowerCase().includes(q);
      }
      return true;
    });
  }, [noticeFilteredCases, searchQuery]);

  // Only cases currently visible (matching lot/notice/search) can be dispatched
  const visibleSelectedIds = useMemo(() => {
    const visible = new Set(filteredCases.map(c => c.id || c._id));
    return selectedCaseIds.filter(id => visible.has(id));
  }, [filteredCases, selectedCaseIds]);

  const selectedCasesForModal = useMemo(() => {
    const set = new Set(visibleSelectedIds);
    return filteredCases.filter(c => set.has(c.id || c._id));
  }, [filteredCases, visibleSelectedIds]);

  // Filter dispatchBatches to current lot if a specific lot is selected (unless showAllBatchesInLog is toggled)
  const visibleDispatchBatches = useMemo(() => {
    if (showAllBatchesInLog || !lotFilter || lotFilter === "all") {
      return dispatchBatches;
    }
    const lotCaseIdSet = new Set(lotCases.map(c => c.id || c._id));
    return dispatchBatches
      .map(b => {
        const lotNotices = b.notices.filter(n => lotCaseIdSet.has(n.caseId));
        if (lotNotices.length === 0) return null;
        const stepCounts: Record<number, number> = {};
        lotNotices.forEach(n => {
          stepCounts[n.step] = (stepCounts[n.step] || 0) + 1;
        });
        return {
          ...b,
          notices: lotNotices,
          matchedCasesCount: lotNotices.length,
          stepBreakdown: Object.entries(stepCounts)
            .map(([s, count]) => ({ step: Number(s), label: `Notice ${s}`, count }))
            .sort((a, b) => a.step - b.step),
        };
      })
      .filter(Boolean) as DispatchBatchInfo[];
  }, [dispatchBatches, lotFilter, lotCases, showAllBatchesInLog]);

  return (
    <div className="space-y-8 select-none text-left">
      
      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/authority/ama-cases" className="hover:text-slate-900 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Representations</span>
        </Link>
        <span className="text-slate-300">/</span>
        <Link href={`/authority/ama-cases/${repId}/dashboard`} className="hover:text-slate-900">
          {representee?.name || "Client"}
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-bold">Notice Dispatch</span>
      </div>

      {/* ── DISPATCH CONTROLS & SMART SELECTION BAR ── */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight">
              Notice Dispatch Console • {representee?.name || "Client"}
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Only Legal Notices (Notice 1, Notice 2, Notice 3) already delivered via Email &amp; WhatsApp are dispatched to the physical dispatcher. Police Complaints are never sent to the dispatcher.
            </p>
            {!isLoading && excludedCount > 0 && (
              <p className="text-[11px] text-amber-600 font-semibold mt-1">
                {excludedCount} case(s) hidden — Notice 1 not yet delivered via Email &amp; WhatsApp.
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setDispatchResult(null);
                setIsDispatchModalOpen(true);
              }}
              disabled={visibleSelectedIds.length === 0}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>
                Dispatch Notice {selectedNotice} ({visibleSelectedIds.length})
              </span>
            </button>

            <button
              onClick={fetchData}
              className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-xl transition-colors cursor-pointer"
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── NOTICE 1 / NOTICE 2 / NOTICE 3 BIFURCATION STRIP ── */}
        {!isLoading && eligibleCases.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
            <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                  Total Mailed to Dispatcher
                </div>
                <div className="text-lg font-black text-emerald-900 mt-0.5">
                  {totalDispatchedNoticesCount} Notices{" "}
                  <span className="text-xs font-bold text-emerald-700">
                    ({dispatchBatches.length} {dispatchBatches.length === 1 ? "batch" : "batches"})
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            {globalNoticeBifurcation.map((nb) => (
              <div
                key={nb.notice}
                className="flex flex-col justify-between px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                    {nb.label} Bifurcation
                  </span>
                  <span className="text-xs font-black text-slate-900">
                    {nb.total} eligible
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold">
                    ✓ {nb.mailed} mailed
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                      nb.pending > 0
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {nb.pending} pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 — choose a Lot */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">1</span>
              Select Lot
            </div>
            {lotFilter !== null && (
              <button
                type="button"
                onClick={handleResetLot}
                className="text-[11px] font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3 h-3" /> Change Lot
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {lots.length > 0 && (
              <button
                type="button"
                onClick={() => handleSelectLot("all")}
                className={`px-3.5 py-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                  lotFilter === "all"
                    ? "bg-slate-900 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                }`}
              >
                <div className="font-extrabold">All Lots</div>
                <div className={`text-[11px] ${lotFilter === "all" ? "text-slate-300" : "text-slate-400"}`}>
                  {eligibleCases.length} cases
                </div>
                <div className="mt-1.5 flex flex-wrap items-center gap-1">
                  {globalNoticeBifurcation
                    .filter(nb => nb.total > 0)
                    .map(nb => (
                      <span
                        key={nb.notice}
                        className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                          nb.pending > 0
                            ? lotFilter === "all"
                              ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                            : lotFilter === "all"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {nb.pending > 0
                          ? `Notice ${nb.notice}: ${nb.pending} pending`
                          : `✓ Notice ${nb.notice} (${nb.mailed})`}
                      </span>
                    ))}
                </div>
              </button>
            )}
            {lots.map(l => {
              const isSelected = lotFilter === l.key;
              const activeNotices = l.noticeBreakdown.filter(nb => nb.total > 0);
              return (
                <button
                  key={l.key}
                  type="button"
                  onClick={() => handleSelectLot(l.key)}
                  className={`px-3.5 py-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <div className="font-extrabold">Lot #{l.number} · {l.label}</div>
                  <div className={`text-[11px] ${isSelected ? "text-slate-300" : "text-slate-400"}`}>
                    {l.count} cases · {formatCurrency(l.amount)}
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-1">
                    {activeNotices.map(nb => (
                      <React.Fragment key={nb.notice}>
                        {nb.mailed > 0 && (
                          <span
                            className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              isSelected
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                            title={`Notice ${nb.notice} mailed to dispatcher for ${nb.mailed} case(s)`}
                          >
                            ✓ Notice {nb.notice} ({nb.mailed})
                          </span>
                        )}
                        {nb.pending > 0 && (
                          <span
                            className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              isSelected
                                ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                                : "bg-amber-50 text-amber-700 border border-amber-200"
                            }`}
                            title={`Notice ${nb.notice} pending mail dispatch for ${nb.pending} case(s)`}
                          >
                            Notice {nb.notice}: {nb.pending} pending
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </button>
              );
            })}
            {!isLoading && lots.length === 0 && (
              <span className="text-xs text-slate-400">No lots found for this client.</span>
            )}
          </div>
        </div>

        {/* STEP 2 — Clear Bifurcation of Notice 1, Notice 2, Notice 3 (Never Police Complaints) */}
        {lotFilter !== null && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">2</span>
                Select Notice to Dispatch (Notices Only • No Police Complaints)
              </div>
              <span className="text-[11px] font-semibold text-slate-400">
                Loan Recovery: Step 1 = Notice 1, Step 3 = Notice 2, Step 4 = Notice 3 (Step 2 Police Complaint excluded) • General: Step 1–3 = Notice 1–3 (Step 4 excluded)
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {lotNoticeOptions.map((stats) => {
                const isSelected = selectedNotice === stats.notice;
                const noticeTitle =
                  stats.notice === 1
                    ? "Notice 1 • First Demand Notice"
                    : stats.notice === 2
                    ? "Notice 2 • Second Demand Notice"
                    : "Notice 3 • Final Demand Notice";
                return (
                  <button
                    key={stats.notice}
                    type="button"
                    onClick={() => handleSelectNotice(stats.notice)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#DC2626] text-white border-[#DC2626] shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-sm">{noticeTitle}</div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? "text-red-100" : "text-slate-400"}`}>
                        {stats.total} {stats.total === 1 ? "case" : "cases"} eligible in this lot
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      {stats.mailed > 0 && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          }`}
                        >
                          ✓ {stats.mailed} mailed
                        </span>
                      )}
                      {stats.pending > 0 && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                            isSelected
                              ? "bg-black/25 text-white"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {stats.pending} pending
                        </span>
                      )}
                      {stats.total === 0 && (
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            isSelected ? "bg-white/15 text-red-100" : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          0 reached
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3 — select cases & dispatch */}
        {lotFilter !== null && (
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5 text-xs">
            <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-500 mr-1">
              <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px]">3</span>
              Select Cases for Notice {selectedNotice}
            </span>
            <button
              type="button"
              onClick={handleSelectAll}
              disabled={filteredCases.length === 0}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 disabled:opacity-40 cursor-pointer"
            >
              {filteredCases.length > 0 && visibleSelectedIds.length === filteredCases.length
                ? "Deselect All"
                : `Select All Notice ${selectedNotice} (${filteredCases.length})`}
            </button>
            {filteredCases.some(c => !isNoticeMailed(c, selectedNotice)) && (
              <button
                type="button"
                onClick={handleSelectUndispatched}
                className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg font-bold text-amber-800 cursor-pointer"
              >
                Select Pending Mail ({filteredCases.filter(c => !isNoticeMailed(c, selectedNotice)).length})
              </button>
            )}

            <div className="relative ml-auto">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, phone, email, case ID"
                className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs w-64 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>
        )}
      </div>

      {/* ── CASES READY FOR DISPATCH TABLE ── */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Loading Dispatch Queue...
            </span>
          </div>
        ) : lotFilter === null ? (
          <div className="p-16 text-center">
            <Layers className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">Select a Lot to begin</h4>
            <p className="text-xs text-slate-400 mt-1">Choose a lot above, then pick Notice 1, Notice 2, or Notice 3 to view and dispatch notices.</p>
          </div>
        ) : filteredCases.length === 0 ? (
          <div className="p-16 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">No Cases for Notice {selectedNotice}</h4>
            <p className="text-xs text-slate-400 mt-1">
              No cases in this lot have completed Notice {selectedNotice} via Email &amp; WhatsApp yet.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E5E7EB] text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280]">
                  <th className="py-3 px-5 w-12 text-center">
                    <input
                      type="checkbox"
                      checked={filteredCases.length > 0 && visibleSelectedIds.length === filteredCases.length}
                      onChange={handleSelectAll}
                      className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer"
                    />
                  </th>
                  <th className="py-3 px-5">Defaulter &amp; Case ID</th>
                  <th className="py-3 px-5">Contact Details</th>
                  <th className="py-3 px-5">Claim Amount</th>
                  <th className="py-3 px-5">Selected Notice Stage</th>
                  <th className="py-3 px-5">Notices Dispatched to Dispatcher (Mail)</th>
                  <th className="py-3 px-5">Police Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredCases.map((c) => {
                  const caseId = c.id || c._id;
                  const isSelected = visibleSelectedIds.includes(caseId);
                  const dispatchedNotices = c.dispatchedNotices || [];
                  const selectedNoticeMailed = isNoticeMailed(c, selectedNotice);

                  return (
                    <tr 
                      key={caseId} 
                      onClick={() => handleToggleSelect(caseId)}
                      className={`hover:bg-slate-50/60 transition-colors cursor-pointer ${isSelected ? 'bg-red-50/40' : ''}`}
                    >
                      <td className="py-3.5 px-5 text-center" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleSelect(caseId)}
                          className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer"
                        />
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="font-bold text-slate-900 text-sm">{c.defaulterName}</div>
                        <div className="text-[11px] text-slate-400">{c.caseId || caseId}</div>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="text-slate-800 font-semibold">{c.phone}</div>
                        <div className="text-slate-400 text-[11px] truncate max-w-[200px]">{c.email}</div>
                      </td>

                      <td className="py-3.5 px-5 font-bold text-slate-900">
                        {formatCurrency(c.stuckAmount)}
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="flex flex-col items-start gap-1">
                          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-extrabold">
                            Notice {selectedNotice}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">
                            {getNoticeCategorySublabel(c, selectedNotice)}
                          </span>
                          {selectedNoticeMailed ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span>Notice {selectedNotice} Mailed</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold">
                              <Clock className="w-3 h-3 text-amber-600" />
                              <span>Pending Mail Dispatch</span>
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="py-3.5 px-5">
                        {dispatchedNotices.length === 0 ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-semibold">
                            <Mail className="w-3 h-3 text-slate-300" />
                            <span>No notices mailed yet</span>
                          </span>
                        ) : (
                          <div className="flex flex-col gap-1.5">
                            <div className="flex flex-wrap items-center gap-1.5">
                              {dispatchedNotices.map((dn) => (
                                <div
                                  key={dn.step}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50/90 border border-emerald-200 text-emerald-900 text-[11px]"
                                  title={`Batch ${dn.batchId} • Sent to ${dn.dispatcherEmail} on ${formatShortDateTime(dn.dispatchedAt)}`}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                  <span className="font-extrabold">{dn.label}</span>
                                  <span className="text-[10px] text-emerald-700 font-semibold">
                                    • {formatShortDate(dn.dispatchedAt)}
                                  </span>
                                  {dn.downloadCount > 0 && (
                                    <span className="px-1.5 py-0.2 bg-emerald-600 text-white rounded text-[9px] font-extrabold uppercase">
                                      ZIP Downloaded
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="text-[10px] text-slate-500 flex items-center gap-1.5">
                              <Mail className="w-3 h-3 text-slate-400 shrink-0" />
                              <span className="truncate max-w-[260px]">
                                Latest: <strong className="text-slate-700">{dispatchedNotices[dispatchedNotices.length - 1].dispatcherEmail}</strong> ({dispatchedNotices[dispatchedNotices.length - 1].batchId})
                              </span>
                            </div>
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="text-slate-600 text-xs font-medium truncate max-w-[180px] block">
                          {c.policeStationName || "Not configured"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── NOTICES SUCCESSFULLY DISPATCHED TO DISPATCHER VIA MAIL (BATCH LOG) ── */}
      {!isLoading && dispatchBatches.length > 0 && (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <h3 className="text-base font-black text-slate-900 tracking-tight">
                  Notices Successfully Dispatched to Dispatcher via Mail
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-extrabold">
                  {visibleDispatchBatches.length} {visibleDispatchBatches.length === 1 ? "Batch" : "Batches"}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Audit log of all Bar-Stamped Notice PDF batches emailed to the physical dispatcher for printing and postal dispatch.
              </p>
            </div>

            {lotFilter && lotFilter !== "all" && (
              <button
                type="button"
                onClick={() => setShowAllBatchesInLog(prev => !prev)}
                className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer self-start sm:self-auto"
              >
                {showAllBatchesInLog ? "Filter by Selected Lot" : `Show All Client Batches (${dispatchBatches.length})`}
              </button>
            )}
          </div>

          {visibleDispatchBatches.length === 0 ? (
            <div className="p-10 text-center text-xs text-slate-400 font-semibold">
              No mail dispatch batches have been sent for the selected lot yet.
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {visibleDispatchBatches.map((batch) => {
                const isExpanded = !!expandedBatchIds[batch.batchId];
                return (
                  <div key={batch.batchId} className="p-5 hover:bg-slate-50/40 transition-colors">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                            {batch.batchId}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-extrabold">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Emailed to {batch.dispatcherEmail}</span>
                          </span>
                          {batch.stepBreakdown.map((sb) => (
                            <span
                              key={sb.step}
                              className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[11px] font-extrabold"
                            >
                              {sb.count} × {sb.label}
                            </span>
                          ))}
                          {batch.downloadCount > 0 ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold">
                              <Download className="w-3 h-3" />
                              <span>
                                ZIP Downloaded by Dispatcher ({batch.downloadCount}×)
                              </span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-bold">
                              <Clock className="w-3 h-3" />
                              <span>Sent • Awaiting ZIP Download</span>
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 font-medium">
                          <span>
                            Dispatched on <strong className="text-slate-700">{formatShortDateTime(batch.createdAt)}</strong>
                          </span>
                          {batch.lastDownloadedAt && (
                            <span>
                              • Last downloaded <strong className="text-slate-700">{formatShortDateTime(batch.lastDownloadedAt)}</strong>
                            </span>
                          )}
                          {batch.notes && (
                            <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                              Note: &ldquo;{batch.notes}&rdquo;
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 self-start lg:self-center">
                        <a
                          href={batch.downloadUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition-colors"
                        >
                          <Download className="w-3.5 h-3.5 text-[#DC2626]" />
                          <span>Download ZIP</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleExpandBatch(batch.batchId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>
                            {isExpanded ? "Hide" : "View"} Dispatched Notices ({batch.notices.length})
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-4 border border-slate-200 rounded-2xl overflow-hidden bg-white">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                              <th className="py-2.5 px-4 w-10">#</th>
                              <th className="py-2.5 px-4">Defaulter Name</th>
                              <th className="py-2.5 px-4">Case ID</th>
                              <th className="py-2.5 px-4">Phone &amp; Email</th>
                              <th className="py-2.5 px-4">Claim Amount</th>
                              <th className="py-2.5 px-4">Dispatched Notice</th>
                              <th className="py-2.5 px-4">Mail Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {batch.notices.map((n, idx) => (
                              <tr key={`${batch.batchId}-${n.caseId}`} className="hover:bg-slate-50/60">
                                <td className="py-2.5 px-4 text-slate-400 font-bold">{idx + 1}</td>
                                <td className="py-2.5 px-4 font-bold text-slate-900">{n.defaulterName}</td>
                                <td className="py-2.5 px-4 font-mono text-[11px] text-slate-500">{n.caseRef}</td>
                                <td className="py-2.5 px-4 text-[11px] text-slate-600">
                                  <div>{n.phone}</div>
                                  <div className="text-slate-400">{n.email}</div>
                                </td>
                                <td className="py-2.5 px-4 font-bold text-slate-900">
                                  {formatCurrency(n.stuckAmount)}
                                </td>
                                <td className="py-2.5 px-4">
                                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold">
                                    {n.label}
                                  </span>
                                </td>
                                <td className="py-2.5 px-4">
                                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Dispatched to {batch.dispatcherEmail}</span>
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── BATCH DISPATCH MODAL ── */}
      {isDispatchModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                Execute Notice {selectedNotice} Dispatch Batch
              </h3>
              <button onClick={() => setIsDispatchModalOpen(false)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {selectedCasesForModal.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs text-slate-500">
                  You are dispatching <strong className="text-slate-800">{selectedCasesForModal.length} × Notice {selectedNotice}</strong> to the physical dispatcher. Notices will be compiled, stamped with the Advocate Bar Stamp, and sent via Zoho Mail:
                </p>
                <div className="max-h-40 overflow-y-auto border border-slate-200 rounded-xl divide-y divide-slate-100 bg-slate-50/50 text-xs">
                  {selectedCasesForModal.map((c, idx) => (
                    <div key={c.id || c._id} className="px-3 py-2 flex items-center justify-between gap-2">
                      <div className="truncate">
                        <span className="text-slate-400 font-bold mr-1.5">{idx + 1}.</span>
                        <span className="font-bold text-slate-900">{c.defaulterName}</span>
                        <span className="text-[11px] text-slate-400 ml-1.5">({c.caseId})</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold">
                          Notice {selectedNotice}
                        </span>
                        {isNoticeMailed(c, selectedNotice) && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                            Already Mailed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Dispatcher Email (Receives Batch)
              </label>
              <input
                type="email"
                value={dispatcherEmail}
                onChange={(e) => setDispatcherEmail(e.target.value)}
                onBlur={(e) => saveDispatcherEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <p className="text-[11px] text-slate-400 mt-1">
                The batch download link is emailed to this address.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Internal Batch Notes (Optional)
              </label>
              <textarea
                value={dispatchNotes}
                onChange={(e) => setDispatchNotes(e.target.value)}
                placeholder="e.g. June Week 2 Demand Notice Run"
                rows={2}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            {dispatchResult && (
              <div className={`p-4 rounded-2xl text-xs space-y-3 ${dispatchResult.success ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                <div className="flex items-start gap-2">
                  {dispatchResult.success ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <div className="font-extrabold">{dispatchResult.message}</div>
                    {dispatchResult.batchId && (
                      <div className="text-[11px] text-emerald-800">
                        Batch Reference: <strong className="font-mono">{dispatchResult.batchId}</strong> • Sent to <strong>{dispatchResult.dispatcherEmail}</strong>
                      </div>
                    )}
                  </div>
                </div>

                {dispatchResult.success && Array.isArray(dispatchResult.dispatchedNotices) && dispatchResult.dispatchedNotices.length > 0 && (
                  <div className="bg-white/90 border border-emerald-200 rounded-xl overflow-hidden">
                    <div className="px-3 py-2 bg-emerald-100/60 border-b border-emerald-200 text-[10px] font-extrabold uppercase tracking-wider text-emerald-900 flex items-center justify-between">
                      <span>Notices Dispatched via Mail ({dispatchResult.dispatchedNotices.length})</span>
                      <span>Status</span>
                    </div>
                    <div className="max-h-44 overflow-y-auto divide-y divide-emerald-100">
                      {dispatchResult.dispatchedNotices.map((dn: any, idx: number) => (
                        <div key={dn.caseId || idx} className="px-3 py-2 flex items-center justify-between gap-2 text-[11px]">
                          <div className="truncate text-slate-800">
                            <span className="font-bold">{dn.defaulterName}</span>
                            <span className="text-slate-400 ml-1">({dn.caseRef})</span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-extrabold">
                              ✓ {dn.label || `Notice ${dn.step}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {dispatchResult.downloadUrl && (
                  <a
                    href={dispatchResult.downloadUrl}
                    download
                    className="inline-flex items-center gap-1.5 font-extrabold text-emerald-800 underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Batch ZIP / CSV</span>
                  </a>
                )}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsDispatchModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              {selectedCasesForModal.length > 0 && (
                <button
                  onClick={handleSendBatch}
                  disabled={isDispatching}
                  className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_4px_16px_rgba(220,38,38,0.15)]"
                >
                  {isDispatching && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>{isDispatching ? "Sending via Zoho..." : `Send ${selectedCasesForModal.length} Notice(s) Now`}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

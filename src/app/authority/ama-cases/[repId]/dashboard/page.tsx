"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Building2,
  FolderClosed,
  ArrowLeft,
  Briefcase,
  Send,
  MessageSquare,
  FileText,
  IndianRupee,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Play,
  Pause,
  Zap,
  Download,
  Plus,
  Phone,
  Mail,
  MapPin,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Shield,
  Loader2
} from "lucide-react";

export default function ScopedRepresentationDashboard() {
  const params = useParams();
  const router = useRouter();
  const repId = String(params?.repId || "");

  const isDirect = repId === "direct";

  const [representee, setRepresentee] = useState<any>(null);
  const [cases, setCases] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDispatching, setIsDispatching] = useState(false);
  const [isForceDispatching, setIsForceDispatching] = useState<Record<string, boolean>>({});

  // Fetch scoped data
  const fetchData = async () => {
    setIsLoading(true);
    try {
      // 1. Fetch representees to get metadata (unless direct)
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
          email: "notice@amalegalsolutions.com",
          phone: "+91 8700343611",
          state: "Delhi",
          address: "Chambers of AMA Legal Solutions",
          authRepName: "Chambers Counsel"
        });
      }

      // 2. Fetch cases scoped to this representee
      const casesRes = await fetch(`/api/cases?workspace=ama&representeeId=${repId}&_t=${Date.now()}`);
      if (casesRes.ok) {
        const casesData = await casesRes.json();
        if (casesData.success && casesData.data) {
          setCases(casesData.data);
        }
      }
    } catch (err) {
      console.error("Failed to load scoped representation dashboard:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (repId) {
      fetchData();
    }
  }, [repId]);

  // Currency Formatter
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val || 0);
  };

  // Helper to extract next notice dispatch information for a case
  const getNextNoticeDispatchInfo = (c: any) => {
    if (!c.timeline || !Array.isArray(c.timeline) || c.timeline.length === 0) {
      return {
        step: c.currentStep || 1,
        label: `Notice ${c.currentStep || 1}`,
        status: "pending",
        dateStr: "Awaiting dispatch",
        timestamp: c.createdAt ? new Date(c.createdAt).getTime() : 0,
        isDue: false
      };
    }

    // Find the next active/pending/scheduled notice step that hasn't been completed or cancelled
    const nextStep = c.timeline.find((t: any) => 
      t.status === "scheduled" || 
      t.status === "pending" || 
      t.status === "active" || 
      t.status === "partially_delivered" || 
      t.status === "failed"
    ) || c.timeline[(c.currentStep || 1) - 1] || c.timeline[c.timeline.length - 1];

    let timestamp = 0;
    let dateStr = nextStep?.date || "Awaiting dispatch";

    if (nextStep?.scheduledAt) {
      const parsed = new Date(nextStep.scheduledAt).getTime();
      if (!isNaN(parsed)) {
        timestamp = parsed;
        dateStr = new Date(nextStep.scheduledAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
      }
    } else if (nextStep?.date && nextStep.date !== "Awaiting dispatch") {
      const parsed = new Date(nextStep.date).getTime();
      if (!isNaN(parsed)) {
        timestamp = parsed;
      }
    }

    if (timestamp === 0 && c.createdAt) {
      timestamp = new Date(c.createdAt).getTime();
    }

    const isDue = timestamp > 0 && timestamp <= Date.now();

    return {
      step: nextStep?.step || c.currentStep || 1,
      label: nextStep?.label || `Notice ${c.currentStep || 1}`,
      status: nextStep?.status || "pending",
      dateStr,
      timestamp,
      isDue
    };
  };

  // Metrics
  const totalStuck = useMemo(() => cases.reduce((acc, c) => acc + (c.stuckAmount || 0), 0), [cases]);
  const totalRecovered = useMemo(() => cases.reduce((acc, c) => acc + (c.recoveredAmount || 0), 0), [cases]);
  const activeCases = useMemo(() => cases.filter(c => c.status === "active"), [cases]);
  const pausedCases = useMemo(() => cases.filter(c => c.status === "paused"), [cases]);
  const recoveredCases = useMemo(() => cases.filter(c => c.status === "recovered"), [cases]);

  // Active cases sorted in order of whose next notice is latest to dispatch
  const sortedActiveCases = useMemo(() => {
    return [...activeCases].sort((a, b) => {
      const infoA = getNextNoticeDispatchInfo(a);
      const infoB = getNextNoticeDispatchInfo(b);
      // Descending order: latest dispatch scheduled date first
      if (infoB.timestamp !== infoA.timestamp) {
        return infoB.timestamp - infoA.timestamp;
      }
      return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    });
  }, [activeCases]);

  // Dispatch Due Batch for this representee
  const handleDispatchDueBatch = async () => {
    if (isDispatching) return;
    setIsDispatching(true);
    try {
      const res = await fetch("/api/cron/dispatch-queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ representeeId: repId })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        alert(`Dispatched ${data.processed} due notices for ${representee?.name || "this client"}!`);
        fetchData();
      } else {
        alert(`Dispatch failed: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      alert(`Network error during dispatch: ${err.message || err}`);
    } finally {
      setIsDispatching(false);
    }
  };

  // Force dispatch next notice for a specific case
  const handleForceDispatchCase = async (caseId: string) => {
    setIsForceDispatching(prev => ({ ...prev, [caseId]: true }));
    try {
      const res = await fetch("/api/cron/dispatch-queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ forceCaseId: caseId })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        alert("Next notice dispatched successfully!");
        fetchData();
      } else {
        alert(`Error triggering dispatch: ${data.error || "Unknown error"}`);
      }
    } catch (err: any) {
      alert(`Network error: ${err.message || err}`);
    } finally {
      setIsForceDispatching(prev => ({ ...prev, [caseId]: false }));
    }
  };

  // Export cases as CSV
  const handleExportCSV = () => {
    if (cases.length === 0) {
      alert("No cases to export.");
      return;
    }

    const headers = [
      "Case ID",
      "Defaulter Name",
      "Entity Type",
      "Phone",
      "Email",
      "Stuck Amount",
      "Recovered Amount",
      "Status",
      "Current Step",
      "Created Date"
    ];

    const rows = cases.map(c => [
      c.caseId || c._id,
      `"${(c.defaulterName || '').replace(/"/g, '""')}"`,
      c.entityType || "Company",
      c.phone || "",
      c.email || "",
      c.stuckAmount || 0,
      c.recoveredAmount || 0,
      c.status || "active",
      c.currentStep || 1,
      c.createdAt ? new Date(c.createdAt).toLocaleDateString("en-IN") : ""
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${representee?.name || "representation"}_cases_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Loading Representation Dashboard...
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-8 select-none text-left w-full">
      
      {/* ── BREADCRUMB & SWITCHER ── */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/authority/ama-cases" className="hover:text-slate-900 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Representations</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-bold">{representee?.name || "Client"}</span>
      </div>

      {/* ── SCOPED CLIENT IDENTITY CARD ── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200 text-[#DC2626] flex items-center justify-center shrink-0">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {representee?.name || "Direct AMA Claims"}
              </h1>
              <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 text-[10px] font-bold rounded-full border border-slate-200">
                {representee?.state || "Delhi"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-500 font-medium">
              {representee?.authRepName && (
                <span className="flex items-center gap-1.5">
                  <span className="text-slate-400 font-normal">Auth Rep:</span>
                  <span className="font-bold text-slate-800">{representee.authRepName}</span>
                </span>
              )}
              {representee?.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400" />
                  <span>{representee.phone}</span>
                </span>
              )}
              {representee?.email && (
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>{representee.email}</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Controls for this Representation */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDispatchDueBatch}
            disabled={isDispatching}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#152331] hover:bg-[#1E3048] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs cursor-pointer disabled:opacity-50"
          >
            <Send className={`w-4 h-4 ${isDispatching ? 'animate-spin' : ''}`} />
            <span>{isDispatching ? "Dispatching..." : "Dispatch Due Batch"}</span>
          </button>

          <Link
            href={`/authority/ama-cases/${repId}/new-recovery`}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Case</span>
          </Link>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer"
            title="Export CSV"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export CSV</span>
          </button>

          <button
            onClick={fetchData}
            className="p-2.5 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 rounded-xl transition-colors cursor-pointer"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── SCOPED KPI METRICS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Total Cases</span>
            <FileText className="w-4 h-4" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {cases.length}
          </div>
          <span className="text-[11px] font-semibold text-slate-500 mt-1 inline-block">
            All registered claims
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Active Cases</span>
            <Zap className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-emerald-600">
            {activeCases.length}
          </div>
          <span className="text-[11px] font-semibold text-slate-500 mt-1 inline-block">
            In active notice cadence
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Completed Cases</span>
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-blue-600">
            {cases.filter(c => c.status === "completed" || c.status === "recovered").length}
          </div>
          <span className="text-[11px] font-semibold text-slate-500 mt-1 inline-block">
            Resolved & closed cases
          </span>
        </div>

        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Claims Stuck</span>
            <IndianRupee className="w-4 h-4 text-[#DC2626]" />
          </div>
          <div className="text-2xl sm:text-3xl font-black text-slate-900">
            {formatCurrency(totalStuck)}
          </div>
          <span className="text-[11px] font-semibold text-emerald-600 mt-1 inline-block">
            Recovered: {formatCurrency(totalRecovered)}
          </span>
        </div>
      </div>

      {/* ── ACTIVE CASES PREVIEW TABLE ── */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold text-slate-900">
                Active Cases ({activeCases.length})
              </h3>
              <span className="px-2.5 py-0.5 bg-red-50 text-[#DC2626] text-[10px] font-bold rounded-full border border-red-200">
                Ordered by Latest Next Notice
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Showing active recovery cases sorted in order of whose next notice is latest to dispatch
            </p>
          </div>

          <Link
            href={`/authority/ama-cases/${repId}/cases`}
            className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All Records Ledger</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {activeCases.length === 0 ? (
          <div className="p-12 text-center">
            <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">No active cases in queue</p>
            <p className="text-xs text-slate-400 mt-1">
              Add a new recovery case for {representee?.name || "this representation"} to initiate notice dispatches.
            </p>
            <Link
              href={`/authority/ama-cases/${repId}/new-recovery`}
              className="inline-flex items-center gap-1.5 px-4 py-2 mt-4 bg-[#DC2626] text-white rounded-xl text-xs font-bold hover:bg-[#B91C1C] shadow-[0_4px_16px_rgba(220,38,38,0.15)]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Create First Case</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E5E7EB] text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280]">
                  <th className="py-3.5 px-5 w-[20%]">Defaulter Details</th>
                  <th className="py-3.5 px-5 w-[18%]">Contact</th>
                  <th className="py-3.5 px-5 w-[15%]">Claim Dues</th>
                  <th className="py-3.5 px-5 w-[18%]">Next Notice to Dispatch</th>
                  <th className="py-3.5 px-5 w-[15%]">Scheduled Date</th>
                  <th className="py-3.5 px-5 w-[8%]">Status</th>
                  <th className="py-3.5 px-5 w-[6%] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {sortedActiveCases.map((c) => {
                  const caseId = c._id || c.id;
                  const isForcing = isForceDispatching[caseId];
                  const nextInfo = getNextNoticeDispatchInfo(c);

                  return (
                    <tr key={caseId} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-5">
                        <div className="font-bold text-slate-900 text-sm">{c.defaulterName}</div>
                        <div className="text-[11px] text-slate-400">{c.caseId || caseId}</div>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="text-slate-900 font-semibold">{c.phone}</div>
                        <div className="text-slate-400 truncate max-w-full text-[11px]">{c.email}</div>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="font-bold text-slate-900">{formatCurrency(c.stuckAmount)}</div>
                        {c.recoveredAmount > 0 && (
                          <div className="text-emerald-600 font-semibold text-[10px]">
                            Recovered: {formatCurrency(c.recoveredAmount)}
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-bold">
                          <FileText className="w-3 h-3 text-[#DC2626]" />
                          <span>Step {nextInfo.step}: {nextInfo.label}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="flex items-center gap-1 text-slate-700 font-semibold">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{nextInfo.dateStr}</span>
                        </div>
                        {nextInfo.isDue && (
                          <span className="inline-block mt-0.5 px-2 py-0.5 bg-rose-50 text-rose-700 border border-rose-200 rounded text-[9px] font-bold">
                            Due for Dispatch
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active
                        </span>
                      </td>

                      <td className="py-3.5 px-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleForceDispatchCase(caseId)}
                            disabled={isForcing}
                            title="Force Next Notice"
                            className="p-1.5 hover:bg-red-50 text-[#DC2626] border border-red-200 rounded-lg transition-colors cursor-pointer"
                          >
                            <Zap className={`w-3.5 h-3.5 ${isForcing ? 'animate-spin' : ''}`} />
                          </button>
                          <Link
                            href={`/authority/ama-cases/${repId}/cases`}
                            className="p-1.5 hover:bg-slate-100 text-slate-600 rounded-lg transition-colors"
                            title="Manage in Ledger"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}

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
  IndianRupee
} from "lucide-react";

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
  clientName: string;
  policeStationName?: string;
  timeline?: any[];
  createdAt: string;
}

export default function ScopedRepresentationDispatchPage() {
  const params = useParams();
  const router = useRouter();
  const repId = String(params?.repId || "");
  const isDirect = repId === "direct";

  const [representee, setRepresentee] = useState<any>(null);
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Selection & Dispatch states
  const [selectedCaseIds, setSelectedCaseIds] = useState<string[]>([]);
  const [dispatcherEmail, setDispatcherEmail] = useState("notice@amalegalsolutions.com");
  const [dispatchNotes, setDispatchNotes] = useState("");
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<any>(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [stepFilter, setStepFilter] = useState("all");

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

      // Fetch dispatch cases for this representee
      const res = await fetch(`/api/notice-dispatch?representeeId=${repId}&_t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.cases) {
          setCases(data.cases);
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
    if (selectedCaseIds.length === filteredCases.length) {
      setSelectedCaseIds([]);
    } else {
      setSelectedCaseIds(filteredCases.map(c => c.id || c._id));
    }
  };

  const handleSmartSelect = (type: "all" | "step1" | "complaints" | "none") => {
    if (type === "all") {
      setSelectedCaseIds(cases.map(c => c.id || c._id));
    } else if (type === "step1") {
      setSelectedCaseIds(cases.filter(c => (c.currentStep || 1) === 1).map(c => c.id || c._id));
    } else if (type === "complaints") {
      setSelectedCaseIds(cases.filter(c => (c.currentStep || 1) >= 4 || c.category === "loan-recovery" && (c.currentStep || 1) === 2).map(c => c.id || c._id));
    } else if (type === "none") {
      setSelectedCaseIds([]);
    }
  };

  // Trigger Zoho Batch Dispatch
  const handleSendBatch = async () => {
    if (!dispatcherEmail || selectedCaseIds.length === 0) return;
    setIsDispatching(true);
    setDispatchResult(null);

    try {
      const res = await fetch("/api/notice-dispatch/send-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseIds: selectedCaseIds,
          dispatcherEmail,
          notes: dispatchNotes
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
          totalCases: data.totalCases
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

  // Filtered cases
  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      if (stepFilter !== "all" && String(c.currentStep || 1) !== stepFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (c.defaulterName || "").toLowerCase().includes(q) ||
               (c.phone || "").includes(q) ||
               (c.email || "").toLowerCase().includes(q) ||
               (c.caseId || c._id || "").toLowerCase().includes(q);
      }
      return true;
    });
  }, [cases, stepFilter, searchQuery]);

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
              Select cases to generate automated Bar-Stamped legal notice PDFs and dispatch via Zoho Mail
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDispatchModalOpen(true)}
              disabled={selectedCaseIds.length === 0}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Dispatch Selected ({selectedCaseIds.length})</span>
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

        {/* Smart Selectors */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Smart Select:</span>
          <button
            onClick={() => handleSmartSelect("all")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700"
          >
            All Cases ({cases.length})
          </button>
          <button
            onClick={() => handleSmartSelect("step1")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700"
          >
            Step 1 Notices
          </button>
          <button
            onClick={() => handleSmartSelect("complaints")}
            className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-[#DC2626] border border-red-200 rounded-lg font-bold"
          >
            Police Complaints
          </button>
          <button
            onClick={() => handleSmartSelect("none")}
            className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 rounded-lg font-semibold text-slate-500"
          >
            Deselect All
          </button>
        </div>
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
        ) : filteredCases.length === 0 ? (
          <div className="p-16 text-center">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">Dispatch Queue Clear</h4>
            <p className="text-xs text-slate-400 mt-1">No pending notices currently awaiting dispatch for this client.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E5E7EB] text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280]">
                  <th className="py-3 px-5 w-12 text-center">
                    <input
                      type="checkbox"
                      checked={selectedCaseIds.length === filteredCases.length && filteredCases.length > 0}
                      onChange={handleSelectAll}
                      className="rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer"
                    />
                  </th>
                  <th className="py-3 px-5">Defaulter & Case ID</th>
                  <th className="py-3 px-5">Contact Details</th>
                  <th className="py-3 px-5">Claim Amount</th>
                  <th className="py-3 px-5">Dispatch Stage</th>
                  <th className="py-3 px-5">Police Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredCases.map((c) => {
                  const caseId = c.id || c._id;
                  const isSelected = selectedCaseIds.includes(caseId);

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
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                          Step {c.currentStep || 1}
                        </span>
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

      {/* ── BATCH DISPATCH MODAL ── */}
      {isDispatchModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">Execute Notice Dispatch Batch</h3>
              <button onClick={() => setIsDispatchModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-500">
              You are dispatching notices for <strong className="text-slate-800">{selectedCaseIds.length}</strong> selected cases. Notices will be compiled, stamped with the Advocate Bar Stamp, and sent from Zoho Mail.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Sender Email (Zoho Outbox)
              </label>
              <input
                type="email"
                value={dispatcherEmail}
                onChange={(e) => setDispatcherEmail(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
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
              <div className={`p-4 rounded-xl text-xs ${dispatchResult.success ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                <div className="font-bold">{dispatchResult.message}</div>
                {dispatchResult.downloadUrl && (
                  <a
                    href={dispatchResult.downloadUrl}
                    download
                    className="mt-2 inline-flex items-center gap-1 font-bold text-emerald-700 underline"
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
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={handleSendBatch}
                disabled={isDispatching}
                className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer disabled:opacity-50 shadow-[0_4px_16px_rgba(220,38,38,0.15)]"
              >
                {isDispatching && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                <span>{isDispatching ? "Sending via Zoho..." : "Send Batch Now"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

"use client";

import React, { useState, useEffect, useMemo } from "react";
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
  IndianRupee,
  Scale
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
  dispatchStep?: number | null;
  completedNotices?: number[];
  dispatchedNotices?: any[];
  dispatchedSteps?: number[];
  isCurrentStepDispatched?: boolean;
  clientName: string;
  representeeId?: string | null;
  policeStationName?: string;
  timeline?: any[];
  createdAt: string;
}

const DEFAULT_DISPATCHER_EMAIL = "jatinder991425@gmail.com";
const DISPATCHER_EMAIL_STORAGE_KEY = "ama_dispatcher_email";

export default function GlobalAmaDispatchPage() {
  const [representees, setRepresentees] = useState<any[]>([]);
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [selectedRepFilter, setSelectedRepFilter] = useState("all");
  const [stepFilter, setStepFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [repRes, dispatchRes] = await Promise.all([
        fetch(`/api/representees?_t=${Date.now()}`),
        fetch(`/api/notice-dispatch?_t=${Date.now()}`)
      ]);

      if (repRes.ok) {
        const repData = await repRes.json();
        if (repData.success && repData.data) {
          setRepresentees(repData.data);
        }
      }

      if (dispatchRes.ok) {
        const data = await dispatchRes.json();
        if (data.success && data.cases) {
          setCases(data.cases);
        }
      }
    } catch (err) {
      console.error("Failed to load global dispatch data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const eligibleCases = useMemo(
    () => cases.filter(c => c.dispatchStep !== null && c.dispatchStep !== undefined),
    [cases]
  );

  const handleSmartSelect = (type: "all" | "notice1" | "notice2" | "notice3" | "loan" | "none") => {
    if (type === "all") {
      setSelectedCaseIds(filteredCases.map(c => c.id || c._id));
    } else if (type === "notice1") {
      setSelectedCaseIds(filteredCases.filter(c => (c.dispatchStep || 1) === 1).map(c => c.id || c._id));
    } else if (type === "notice2") {
      setSelectedCaseIds(filteredCases.filter(c => (c.dispatchStep || 1) === 2).map(c => c.id || c._id));
    } else if (type === "notice3") {
      setSelectedCaseIds(filteredCases.filter(c => (c.dispatchStep || 1) === 3).map(c => c.id || c._id));
    } else if (type === "loan") {
      setSelectedCaseIds(filteredCases.filter(c => c.category === "loan-recovery").map(c => c.id || c._id));
    } else if (type === "none") {
      setSelectedCaseIds([]);
    }
  };

  // Trigger Zoho Batch Dispatch
  const handleSendBatch = async () => {
    if (!dispatcherEmail || selectedCaseIds.length === 0) return;
    saveDispatcherEmail(dispatcherEmail);
    setIsDispatching(true);
    setDispatchResult(null);

    try {
      const res = await fetch("/api/notice-dispatch/send-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseIds: selectedCaseIds,
          dispatcherEmail,
          notes: dispatchNotes,
          targetNotice: stepFilter !== "all" ? Number(stepFilter) : undefined,
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

  // Filtered cases (only eligible notices — Police Complaints are excluded)
  const filteredCases = useMemo(() => {
    return eligibleCases.filter(c => {
      // Representee filter
      if (selectedRepFilter !== "all") {
        if (selectedRepFilter === "direct") {
          if (c.representeeId) return false;
        } else {
          if (String(c.representeeId) !== String(selectedRepFilter)) return false;
        }
      }

      // Notice filter (Notice 1, Notice 2, Notice 3)
      if (stepFilter !== "all" && String(c.dispatchStep || 1) !== stepFilter) return false;

      // Category filter
      if (categoryFilter !== "all" && c.category !== categoryFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (c.defaulterName || "").toLowerCase().includes(q) ||
               (c.phone || "").includes(q) ||
               (c.email || "").toLowerCase().includes(q) ||
               (c.caseId || c._id || "").toLowerCase().includes(q);
      }
      return true;
    });
  }, [eligibleCases, selectedRepFilter, stepFilter, categoryFilter, searchQuery]);

  return (
    <div className="space-y-8 select-none text-left">
      
      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/authority/ama-cases" className="hover:text-slate-900 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>AMA Legal Cases</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-bold">Notice Dispatch Console</span>
      </div>

      {/* ── HEADER ── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 bg-red-50 text-[#DC2626] text-[10px] font-bold rounded-full border border-red-200 uppercase tracking-wider">
              LegalRecovery Dispatch Console
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Notice Dispatch Console
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Dispatch advocate-stamped legal notices (Notice 1, Notice 2, Notice 3) via Zoho Mail across all client representations. Police Complaints are never sent to the physical dispatcher.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDispatchModalOpen(true)}
            disabled={selectedCaseIds.length === 0}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-[0_4px_16px_rgba(220,38,38,0.15)] disabled:opacity-40 cursor-pointer"
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

      {/* ── FILTERS & SMART SELECTION BAR ── */}
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Representation Selector */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Representation Pool
            </label>
            <select
              value={selectedRepFilter}
              onChange={(e) => setSelectedRepFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="all">All Representations ({eligibleCases.length})</option>
              <option value="direct">Direct AMA Claims</option>
              {representees.map((r) => (
                <option key={r._id || r.id} value={r._id || r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </div>

          {/* Notice Stage Selector (Notices Only — No Police Complaints) */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Notice Bifurcation
            </label>
            <select
              value={stepFilter}
              onChange={(e) => setStepFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="all">All Notices (Notice 1, 2 &amp; 3)</option>
              <option value="1">Notice 1 • First Demand Notice</option>
              <option value="2">Notice 2 • Second Demand Notice</option>
              <option value="3">Notice 3 • Final Demand Notice</option>
            </select>
          </div>

          {/* Category Selector */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Category
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="general-recovery">General Recovery</option>
              <option value="loan-recovery">Loan Recovery</option>
            </select>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Search Defaulter
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Name, phone, email..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Smart Select Chips */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 font-semibold mr-1">Smart Select:</span>
          <button
            onClick={() => handleSmartSelect("all")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 cursor-pointer"
          >
            All Matching ({filteredCases.length})
          </button>
          <button
            onClick={() => handleSmartSelect("notice1")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 cursor-pointer"
          >
            Notice 1 Only
          </button>
          <button
            onClick={() => handleSmartSelect("notice2")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 cursor-pointer"
          >
            Notice 2 Only
          </button>
          <button
            onClick={() => handleSmartSelect("notice3")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 cursor-pointer"
          >
            Notice 3 Only
          </button>
          <button
            onClick={() => handleSmartSelect("loan")}
            className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold text-slate-700 cursor-pointer"
          >
            Loan Recovery
          </button>
          <button
            onClick={() => handleSmartSelect("none")}
            className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 rounded-lg font-semibold text-slate-500 cursor-pointer"
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
            <p className="text-xs text-slate-400 mt-1">No pending notices currently awaiting dispatch for this filter.</p>
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
                  <th className="py-3 px-5">Defaulter &amp; Case ID</th>
                  <th className="py-3 px-5">Client Representation</th>
                  <th className="py-3 px-5">Contact Details</th>
                  <th className="py-3 px-5">Claim Amount</th>
                  <th className="py-3 px-5">Notice Stage</th>
                  <th className="py-3 px-5">Police Authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredCases.map((c) => {
                  const caseId = c.id || c._id;
                  const isSelected = selectedCaseIds.includes(caseId);
                  const linkedRep = representees.find(r => String(r._id || r.id) === String(c.representeeId));

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
                        <span className="font-bold text-slate-800 block">
                          {linkedRep?.name || "Direct AMA Claim"}
                        </span>
                        <span className="text-[10px] text-slate-400 capitalize">{c.category}</span>
                      </td>

                      <td className="py-3.5 px-5">
                        <div className="text-slate-800 font-semibold">{c.phone}</div>
                        <div className="text-slate-400 text-[11px] truncate max-w-[180px]">{c.email}</div>
                      </td>

                      <td className="py-3.5 px-5 font-bold text-slate-900">
                        {formatCurrency(c.stuckAmount)}
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                          Notice {c.dispatchStep || 1}
                        </span>
                      </td>

                      <td className="py-3.5 px-5">
                        <span className="text-slate-600 text-xs font-medium truncate max-w-[160px] block">
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
              You are dispatching notices for <strong className="text-slate-800">{selectedCaseIds.length}</strong> selected cases across AMA client representations. Notices will be stamped with the Advocate Bar Stamp and sent via Zoho Mail.
            </p>

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
                placeholder="e.g. Chambers Weekly Recovery Batch"
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
                    <span>Download Batch ZIP / Tracking CSV</span>
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

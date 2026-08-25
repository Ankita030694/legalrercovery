"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Send,
  User,
  MapPin,
  Phone,
  Mail,
  IndianRupee,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  PauseCircle,
  Building2,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  Edit3,
  Loader2,
  RefreshCw,
  X,
  FileText,
  ShieldAlert,
  ArrowUpDown
} from "lucide-react";

interface CaseItem {
  id: string;
  _id: string;
  caseId: string;
  defaulterName: string;
  address: string;
  phone: string;
  phone2?: string;
  email: string;
  email2?: string;
  recoveredAmount: number;
  stuckAmount: number;
  status: string;
  category: string;
  currentStep: number;
  clientName: string;
  representeeId?: string | null;
  policeStationName?: string;
  policeStationEmail?: string;
  timeline?: any[];
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
}

interface StatsData {
  totalCases: number;
  totalDebt: number;
  totalRecovered: number;
  activeCount: number;
  recoveredCount: number;
  completedCount: number;
  pausedCount: number;
}

/**
 * Resolves the accurate notice stage, label, and police complaint status based on the case's completed timeline.
 */
function getEffectiveNoticeInfo(c: CaseItem) {
  const completedTimelineSteps = (c.timeline || [])
    .filter((t: any) => t.status === "completed")
    .map((t: any) => Number(t.step))
    .filter((n: number) => !isNaN(n) && n > 0);

  let step = 1;
  if (completedTimelineSteps.length > 0) {
    step = Math.max(...completedTimelineSteps);
  } else if (c.currentStep && typeof c.currentStep === "number" && c.currentStep > 0) {
    step = c.currentStep;
  }

  // Cap step strictly between 1 and 4 (there are only 4 steps max in the recovery protocol)
  if (step > 4) {
    step = 4;
  }
  if (step < 1) {
    step = 1;
  }

  const isLoan = c.category === "loan-recovery";
  let label = `Notice ${step}`;
  let isPoliceComplaint = false;

  if (isLoan) {
    if (step === 1) {
      label = "Notice 1";
    } else if (step === 2) {
      label = "Police Complaint";
      isPoliceComplaint = true;
    } else if (step === 3) {
      label = "Notice 2";
    } else if (step === 4) {
      label = "Notice 3";
    }
  } else {
    if (step === 1) {
      label = "Notice 1";
    } else if (step === 2) {
      label = "Notice 2";
    } else if (step === 3) {
      label = "Notice 3";
    } else if (step === 4) {
      label = "Police Complaint";
      isPoliceComplaint = true;
    }
  }

  return {
    step,
    displayStep: step,
    label,
    isPoliceComplaint,
    isLoan,
  };
}

export default function NoticeDispatchPage() {
  const router = useRouter();

  const [cases, setCases] = useState<CaseItem[]>([]);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [authError, setAuthError] = useState<string | null>(null);

  // Filter & search states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [clientFilter, setClientFilter] = useState("all");
  const [sortBy, setSortBy] = useState<"date" | "recovered" | "amount" | "name">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Selection state for physical dispatching
  const [selectedCaseIds, setSelectedCaseIds] = useState<string[]>([]);
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false);
  const [dispatcherEmail, setDispatcherEmail] = useState("notice@amalegalsolutions.com");
  const [dispatchNotes, setDispatchNotes] = useState("");
  const [modalSearchQuery, setModalSearchQuery] = useState("");
  const [isDispatching, setIsDispatching] = useState(false);
  const [dispatchResult, setDispatchResult] = useState<{
    success: boolean;
    message: string;
    batchId?: string;
    downloadUrl?: string;
    totalCases?: number;
  } | null>(null);

  // Smart Selection Category Counts
  const loanCount = useMemo(() => cases.filter(c => c.category === "loan-recovery").length, [cases]);
  const commercialCount = useMemo(() => cases.filter(c => c.category !== "loan-recovery").length, [cases]);
  const step1Count = useMemo(() => cases.filter(c => getEffectiveNoticeInfo(c).step === 1).length, [cases]);
  const complaintCount = useMemo(
    () => cases.filter(c => getEffectiveNoticeInfo(c).isPoliceComplaint).length,
    [cases]
  );

  // Copy feedback state
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Edit Recovered Amount Modal state
  const [editingCase, setEditingCase] = useState<CaseItem | null>(null);
  const [newRecoveredAmount, setNewRecoveredAmount] = useState<string>("");
  const [newStatus, setNewStatus] = useState<string>("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);

  // View Dossier Modal
  const [viewingCase, setViewingCase] = useState<CaseItem | null>(null);

  // Format currency helper
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val || 0);
  };

  // Copy text to clipboard helper
  const handleCopy = (text: string, key: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
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

  const handleSmartSelect = (type: "all" | "loan" | "commercial" | "step1" | "complaints" | "active" | "none") => {
    if (type === "all") {
      setSelectedCaseIds(cases.map(c => c.id || c._id));
    } else if (type === "loan") {
      setSelectedCaseIds(cases.filter(c => c.category === "loan-recovery").map(c => c.id || c._id));
    } else if (type === "commercial") {
      setSelectedCaseIds(cases.filter(c => c.category !== "loan-recovery").map(c => c.id || c._id));
    } else if (type === "step1") {
      setSelectedCaseIds(cases.filter(c => getEffectiveNoticeInfo(c).step === 1).map(c => c.id || c._id));
    } else if (type === "complaints") {
      setSelectedCaseIds(cases.filter(c => getEffectiveNoticeInfo(c).isPoliceComplaint).map(c => c.id || c._id));
    } else if (type === "active") {
      setSelectedCaseIds(cases.filter(c => c.status === "active").map(c => c.id || c._id));
    } else if (type === "none") {
      setSelectedCaseIds([]);
    }
  };

  // Dispatch Batch API Trigger
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
          notes: dispatchNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setDispatchResult({
          success: false,
          message: data?.error || "Failed to create and dispatch notice batch.",
        });
      } else {
        setDispatchResult({
          success: true,
          message: data.message || "Dispatch batch sent successfully.",
          batchId: data.batchId,
          downloadUrl: data.downloadUrl,
          totalCases: data.totalCases,
        });
      }
    } catch (err: any) {
      setDispatchResult({
        success: false,
        message: err?.message || "An unexpected error occurred during dispatch.",
      });
    } finally {
      setIsDispatching(false);
    }
  };

  // Fetch Cases and Verify Authorization
  const fetchDispatchData = async () => {
    setIsLoading(true);
    try {
      // 1. Verify user profile first
      const profileRes = await fetch("/api/users/profile");
      if (!profileRes.ok) {
        setIsAuthorized(false);
        setAuthError("Please log in to access this console.");
        setIsLoading(false);
        return;
      }

      const profileData = await profileRes.json();
      const phone = profileData?.profile?.phone || "";
      const cleanPhone = phone.replace(/\D/g, "");
      const isSpecial = cleanPhone.endsWith("8700343611") || cleanPhone.endsWith("8130104447");

      setUserProfile(profileData?.profile);

      if (!isSpecial) {
        setIsAuthorized(false);
        setAuthError("Access Restricted: This console is strictly reserved for Authorized Special Administrators.");
        setIsLoading(false);
        return;
      }

      setIsAuthorized(true);

      // 2. Fetch Notice Dispatch Case Records
      const res = await fetch("/api/notice-dispatch");
      const data = await res.json();

      if (res.ok && data.success) {
        setCases(data.cases || []);
        setStats(data.stats || null);
      } else {
        setAuthError(data.error || "Failed to load dispatch records.");
      }
    } catch (err: any) {
      console.error("Notice Dispatch loading error:", err);
      setAuthError(err.message || "Failed to communicate with server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDispatchData();
  }, []);

  // Unique clients list for dropdown
  const uniqueClients = useMemo(() => {
    const clients = new Set<string>();
    cases.forEach(c => {
      if (c.clientName) clients.add(c.clientName);
    });
    return Array.from(clients).sort();
  }, [cases]);

  // Filtered & Sorted Cases
  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      // Status filter
      if (statusFilter !== "all" && c.status !== statusFilter) return false;

      // Category filter
      if (categoryFilter !== "all" && c.category !== categoryFilter) return false;

      // Client filter
      if (clientFilter !== "all" && c.clientName !== clientFilter) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = c.defaulterName?.toLowerCase().includes(q);
        const matchAddress = c.address?.toLowerCase().includes(q);
        const matchPhone = c.phone?.includes(q) || c.phone2?.includes(q);
        const matchEmail = c.email?.toLowerCase().includes(q) || c.email2?.toLowerCase().includes(q);
        const matchCaseId = c.caseId?.toLowerCase().includes(q);
        const matchClient = c.clientName?.toLowerCase().includes(q);
        return matchName || matchAddress || matchPhone || matchEmail || matchCaseId || matchClient;
      }

      return true;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortBy === "recovered") {
        comparison = (a.recoveredAmount || 0) - (b.recoveredAmount || 0);
      } else if (sortBy === "amount") {
        comparison = (a.stuckAmount || 0) - (b.stuckAmount || 0);
      } else if (sortBy === "name") {
        comparison = a.defaulterName.localeCompare(b.defaulterName);
      } else {
        // Date
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });
  }, [cases, searchQuery, statusFilter, categoryFilter, clientFilter, sortBy, sortOrder]);

  // Export to CSV
  const handleExportCSV = () => {
    if (filteredCases.length === 0) return;

    const headers = [
      "Case ID",
      "Defaulter Legal Name",
      "Physical Address",
      "Phone Number",
      "Secondary Phone",
      "Email Address",
      "Secondary Email",
      "Recovered Amount (INR)",
      "Total Claim Amount (INR)",
      "Status",
      "Category",
      "Current Notice Step",
      "Represented Client",
      "Created At"
    ];

    const rows = filteredCases.map(c => {
      const noticeInfo = getEffectiveNoticeInfo(c);
      return [
        `"${c.caseId || ""}"`,
        `"${(c.defaulterName || "").replace(/"/g, '""')}"`,
        `"${(c.address || "").replace(/"/g, '""')}"`,
        `"${c.phone || ""}"`,
        `"${c.phone2 || ""}"`,
        `"${c.email || ""}"`,
        `"${c.email2 || ""}"`,
        c.recoveredAmount || 0,
        c.stuckAmount || 0,
        `"${c.status || ""}"`,
        `"${c.category || ""}"`,
        `"${noticeInfo.label}"`,
        `"${(c.clientName || "").replace(/"/g, '""')}"`,
        `"${c.createdAt || ""}"`
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Notice_Dispatch_Directory_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportSelectedCSV = () => {
    const targetCases = cases.filter(c => selectedCaseIds.includes(c.id || c._id));
    if (targetCases.length === 0) return;

    const headers = [
      "Case ID",
      "Defaulter Legal Name",
      "Physical Address",
      "Phone Number",
      "Secondary Phone",
      "Email Address",
      "Secondary Email",
      "Recovered Amount (INR)",
      "Total Claim Amount (INR)",
      "Status",
      "Category",
      "Current Notice Stage",
      "Represented Client",
      "Created At"
    ];

    const rows = targetCases.map(c => {
      const noticeInfo = getEffectiveNoticeInfo(c);
      return [
        `"${c.caseId || ""}"`,
        `"${(c.defaulterName || "").replace(/"/g, '""')}"`,
        `"${(c.address || "").replace(/"/g, '""')}"`,
        `"${c.phone || ""}"`,
        `"${c.phone2 || ""}"`,
        `"${c.email || ""}"`,
        `"${c.email2 || ""}"`,
        c.recoveredAmount || 0,
        c.stuckAmount || 0,
        `"${c.status || ""}"`,
        `"${c.category || ""}"`,
        `"${noticeInfo.label}"`,
        `"${(c.clientName || "").replace(/"/g, '""')}"`,
        `"${c.createdAt || ""}"`
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8,\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Notice_Dispatch_Selected_${selectedCaseIds.length}_Cases.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Open Edit Modal
  const handleOpenEdit = (item: CaseItem) => {
    setEditingCase(item);
    setNewRecoveredAmount(item.recoveredAmount ? String(item.recoveredAmount) : "");
    setNewStatus(item.status || "active");
    setUpdateError(null);
  };

  // Submit Recovered Amount Update
  const handleSaveRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCase) return;

    setIsUpdating(true);
    setUpdateError(null);

    try {
      const res = await fetch("/api/notice-dispatch", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingCase.id,
          recoveredAmount: newRecoveredAmount ? parseFloat(newRecoveredAmount) : 0,
          status: newStatus
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        // Update local state
        setCases(prev => prev.map(c => {
          if (c.id === editingCase.id) {
            return {
              ...c,
              recoveredAmount: newRecoveredAmount ? parseFloat(newRecoveredAmount) : 0,
              status: newStatus
            };
          }
          return c;
        }));

        // Refresh stats
        fetchDispatchData();
        setEditingCase(null);
      } else {
        setUpdateError(data.error || "Failed to update recovery details.");
      }
    } catch (err: any) {
      setUpdateError(err.message || "Failed to communicate with server.");
    } finally {
      setIsUpdating(false);
    }
  };

  // Render Access Denied
  if (isLoading) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 animate-spin text-[#DC2626]" />
        <p className="text-sm font-bold text-slate-600">Verifying secure credentials &amp; loading live dispatch ledger...</p>
      </div>
    );
  }

  if (isAuthorized === false) {
    return (
      <div className="w-full max-w-xl mx-auto my-12 p-8 bg-white border border-red-200 rounded-3xl shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-red-50 text-[#DC2626] rounded-2xl flex items-center justify-center mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-black text-slate-900">Access Restricted</h2>
        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
          {authError || "Notice Dispatch is strictly reserved for Special Administrator Accounts."}
        </p>
        <button
          onClick={() => router.push("/user/dashboard")}
          className="mt-6 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          Return to Claims Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-4 space-y-4 animate-fadeIn pb-24">
      {/* ── HEADER BLOCK ── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Special Administrator Console
            </span>
            <span className="text-xs text-slate-400 font-bold">•</span>
            <span className="text-xs font-bold text-slate-500">Live Case Ledger</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
            <Send className="w-7 h-7 text-[#DC2626]" />
            Notice Dispatch
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Complete dossier directory of all debtor notices, contact coordinates, and recovered dues across all clients.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              if (selectedCaseIds.length === 0) {
                setSelectedCaseIds(filteredCases.map(c => c.id || c._id));
              }
              setDispatchResult(null);
              setIsDispatchModalOpen(true);
            }}
            disabled={filteredCases.length === 0}
            className="px-4 py-2 text-xs font-black text-white bg-[#DC2626] hover:bg-red-700 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 hover:-translate-y-0.5"
            title="Send notice batch to physical dispatcher"
          >
            <Send className="w-3.5 h-3.5" />
            Dispatch to Dispatcher {selectedCaseIds.length > 0 ? `(${selectedCaseIds.length})` : `(All ${filteredCases.length})`}
          </button>
          <button
            onClick={fetchDispatchData}
            disabled={isLoading}
            className="px-3 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            title="Refresh Data"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
            Refresh
          </button>
          <button
            onClick={handleExportCSV}
            disabled={filteredCases.length === 0}
            className="px-3.5 py-2 text-xs font-extrabold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV
          </button>
        </div>
      </div>

      {/* ── TOOLBAR: SEARCH & FILTERS ── */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 shadow-sm space-y-3.5">
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by Defaulter Name, Address, Phone, Email, Case ID..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 hover:bg-slate-100/60 border border-slate-200 focus:border-[#DC2626] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold outline-none transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Status Filter */}
            <div className="relative">
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none hover:bg-slate-100 cursor-pointer"
              >
                <option value="all">All Statuses ({cases.length})</option>
                <option value="active">Active</option>
                <option value="recovered">Recovered</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none hover:bg-slate-100 cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="loan-recovery">Loan Recovery</option>
                <option value="general-recovery">General Commercial</option>
              </select>
            </div>

            {/* Client Filter */}
            {uniqueClients.length > 0 && (
              <div className="relative">
                <select
                  value={clientFilter}
                  onChange={e => setClientFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none hover:bg-slate-100 cursor-pointer max-w-[200px] truncate"
                >
                  <option value="all">All Clients</option>
                  {uniqueClients.map(client => (
                    <option key={client} value={client}>
                      {client}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={e => {
                  const [by, order] = e.target.value.split("-") as [any, any];
                  setSortBy(by);
                  setSortOrder(order);
                }}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 outline-none hover:bg-slate-100 cursor-pointer"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="recovered-desc">Highest Recovered</option>
                <option value="amount-desc">Highest Claim Dues</option>
                <option value="name-asc">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Smart Category Selection Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2.5 border-t border-slate-100">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            ⚡ Smart Select:
          </span>
          <button
            onClick={() => handleSmartSelect("all")}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer"
          >
            All ({cases.length})
          </button>
          <button
            onClick={() => handleSmartSelect("loan")}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 transition-all cursor-pointer"
          >
            Loan Recovery ({loanCount})
          </button>
          <button
            onClick={() => handleSmartSelect("commercial")}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-all cursor-pointer"
          >
            Commercial ({commercialCount})
          </button>
          <button
            onClick={() => handleSmartSelect("step1")}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 transition-all cursor-pointer"
          >
            Notice 1 ({step1Count})
          </button>
          <button
            onClick={() => handleSmartSelect("complaints")}
            className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-all cursor-pointer"
          >
            Police Complaints ({complaintCount})
          </button>
          {selectedCaseIds.length > 0 && (
            <button
              onClick={() => handleSmartSelect("none")}
              className="px-2.5 py-1 text-[11px] font-bold rounded-lg text-[#DC2626] hover:underline cursor-pointer ml-auto"
            >
              Clear Selection ({selectedCaseIds.length})
            </button>
          )}
        </div>

        {/* Filter Stats Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-100 pt-2.5">
          <span>
            Showing <strong className="text-slate-900">{filteredCases.length}</strong> of{" "}
            <strong className="text-slate-900">{cases.length}</strong> debtor cases
          </span>
          {(searchQuery || statusFilter !== "all" || categoryFilter !== "all" || clientFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setCategoryFilter("all");
                setClientFilter("all");
              }}
              className="text-[#DC2626] hover:underline font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* ── CORE CASES TABLE & CARDS ── */}
      {filteredCases.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-sm">
          <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No cases match your filters</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try adjusting your search query, status filters, or client selection.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden w-full">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto w-full">
            <table className="w-full text-left border-collapse table-auto">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  <th className="py-3.5 px-3 text-center w-10">
                    <input
                      type="checkbox"
                      checked={filteredCases.length > 0 && selectedCaseIds.length === filteredCases.length}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer"
                      title="Select All Filtered Cases"
                    />
                  </th>
                  <th className="py-3.5 px-3.5">Case Ref / Client</th>
                  <th className="py-3.5 px-3.5">Person Name</th>
                  <th className="py-3.5 px-3.5">Address</th>
                  <th className="py-3.5 px-3.5">Contact (Phone & Email)</th>
                  <th className="py-3.5 px-3.5 text-right">Recovered / Claim</th>
                  <th className="py-3.5 px-3.5 text-center">Status</th>
                  <th className="py-3.5 px-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                {filteredCases.map(item => {
                  const isRecovered = item.status === "recovered" || (item.recoveredAmount > 0 && item.recoveredAmount >= item.stuckAmount);
                  const isPartiallyRecovered = item.recoveredAmount > 0 && item.recoveredAmount < item.stuckAmount;
                  const isSelected = selectedCaseIds.includes(item.id || item._id);
                  const noticeInfo = getEffectiveNoticeInfo(item);

                  return (
                    <tr key={item.id} className={`hover:bg-slate-50/70 transition-colors group ${isSelected ? "bg-red-50/20" : ""}`}>
                      {/* Selection Checkbox */}
                      <td className="py-3.5 px-3 text-center align-top">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggleSelect(item.id || item._id)}
                          className="w-4 h-4 rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer mt-1"
                        />
                      </td>

                      {/* Case Ref / Client */}
                      <td className="py-3.5 px-3.5 align-top min-w-[150px]">
                        <div className="font-extrabold text-slate-900 font-mono text-xs flex items-center gap-1.5">
                          {item.caseId}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium truncate max-w-[160px] mt-0.5" title={item.clientName}>
                          🏢 {item.clientName}
                        </div>
                        <div className="mt-1.5 flex items-center gap-1 flex-wrap">
                          <span
                            className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${
                              item.category === "loan-recovery"
                                ? "bg-purple-50 text-purple-700 border border-purple-200"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {item.category === "loan-recovery" ? "Loan Recovery" : "Commercial"}
                          </span>
                          <span
                            className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider ${
                              noticeInfo.isPoliceComplaint
                                ? "bg-red-50 text-red-700 border border-red-200"
                                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {noticeInfo.label}
                          </span>
                        </div>
                      </td>

                      {/* Person / Defaulter Name */}
                      <td className="py-3.5 px-3.5 align-top min-w-[160px]">
                        <div className="font-extrabold text-slate-900 text-sm flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{item.defaulterName}</span>
                        </div>
                        {item.policeStationName && (
                          <div className="text-[10px] text-slate-400 font-medium mt-1 truncate max-w-[170px]" title={item.policeStationName}>
                            📍 SHO: {item.policeStationName}
                          </div>
                        )}
                      </td>

                      {/* Complete Physical Address */}
                      <td className="py-3.5 px-3.5 align-top min-w-[240px]">
                        <div className="flex items-start gap-1.5 text-slate-600 text-[11px] leading-relaxed">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-2" title={item.address}>
                            {item.address}
                          </span>
                        </div>
                        {item.address && item.address !== "Address not provided" && (
                          <button
                            onClick={() => handleCopy(item.address, `addr-${item.id}`)}
                            className="mt-1 text-[10px] font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            {copiedKey === `addr-${item.id}` ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-600">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Address</span>
                              </>
                            )}
                          </button>
                        )}
                      </td>

                      {/* Contact: Phone & Email */}
                      <td className="py-3.5 px-3.5 align-top">
                        {/* Phone */}
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a
                            href={`tel:${item.phone}`}
                            className="font-mono text-slate-800 hover:text-[#DC2626] transition-colors"
                          >
                            {item.phone || "N/A"}
                          </a>
                          {item.phone && (
                            <button
                              onClick={() => handleCopy(item.phone, `p-${item.id}`)}
                              className="text-slate-400 hover:text-slate-600 p-0.5 rounded cursor-pointer"
                              title="Copy Phone"
                            >
                              {copiedKey === `p-${item.id}` ? (
                                <Check className="w-3 h-3 text-emerald-600" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-1.5 mt-1 text-slate-500">
                          <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <a
                            href={`mailto:${item.email}`}
                            className="hover:text-[#DC2626] transition-colors truncate max-w-[160px]"
                            title={item.email}
                          >
                            {item.email || "N/A"}
                          </a>
                        </div>
                      </td>

                      {/* Recovered vs Total Claim Amount */}
                      <td className="py-3.5 px-3.5 align-top text-right">
                        {/* Recovered Badge */}
                        <div className="flex justify-end">
                          <div
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-black ${
                              isRecovered
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                : isPartiallyRecovered
                                ? "bg-amber-100 text-amber-800 border border-amber-200"
                                : "bg-slate-100 text-slate-500 border border-slate-200"
                            }`}
                          >
                            <IndianRupee className="w-3 h-3" />
                            <span>{formatCurrency(item.recoveredAmount || 0).replace("₹", "")} Recovered</span>
                          </div>
                        </div>

                        {/* Total Stuck / Claim Amount */}
                        <div className="text-[11px] text-slate-400 font-semibold mt-1">
                          Total Dues: <span className="text-slate-700 font-bold">{formatCurrency(item.stuckAmount)}</span>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="py-3.5 px-3.5 align-top text-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            item.status === "recovered"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : item.status === "active"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : item.status === "paused"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {item.status}
                        </span>
                        <div className="text-[10px] text-slate-400 font-medium mt-1">
                          Step {noticeInfo.displayStep} of 4
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-3.5 align-top text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="p-1.5 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-emerald-200"
                            title="Update Recovered Amount"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setViewingCase(item)}
                            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                            title="View Full Case Dossier"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="md:hidden divide-y divide-slate-100">
            {filteredCases.map(item => {
              const isRecovered = item.status === "recovered" || (item.recoveredAmount > 0 && item.recoveredAmount >= item.stuckAmount);
              const isSelected = selectedCaseIds.includes(item.id || item._id);

              return (
                <div key={item.id} className={`p-4 space-y-3 ${isSelected ? "bg-red-50/25" : ""}`}>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleToggleSelect(item.id || item._id)}
                        className="w-4 h-4 rounded border-slate-300 text-[#DC2626] focus:ring-[#DC2626] cursor-pointer"
                      />
                      <span className="font-mono text-xs font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                        {item.caseId}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                        item.status === "recovered"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : item.status === "active"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Person Name & Client */}
                  <div>
                    <h4 className="text-base font-black text-slate-900 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-slate-400" />
                      {item.defaulterName}
                    </h4>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      Client: <strong>{item.clientName}</strong>
                    </p>
                  </div>

                  {/* Address */}
                  <div className="bg-slate-50 p-2.5 rounded-xl text-xs text-slate-600 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p>{item.address}</p>
                      <button
                        onClick={() => handleCopy(item.address, `m-addr-${item.id}`)}
                        className="mt-1 text-[10px] font-bold text-[#DC2626] flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === `m-addr-${item.id}` ? "Address Copied" : "Copy Address"}
                      </button>
                    </div>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Phone</span>
                      <a href={`tel:${item.phone}`} className="font-bold text-slate-800 font-mono">
                        {item.phone || "N/A"}
                      </a>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl truncate">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block">Email</span>
                      <a href={`mailto:${item.email}`} className="font-bold text-slate-800 truncate block">
                        {item.email || "N/A"}
                      </a>
                    </div>
                  </div>

                  {/* Recovered & Dues */}
                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Claim Dues</span>
                      <span className="text-xs font-black text-slate-800">{formatCurrency(item.stuckAmount)}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-emerald-700 uppercase block">Recovered Amount</span>
                      <span className="text-sm font-black text-emerald-700">{formatCurrency(item.recoveredAmount || 0)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleOpenEdit(item)}
                      className="flex-1 py-2 text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Update Recovery
                    </button>
                    <button
                      onClick={() => setViewingCase(item)}
                      className="px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 flex items-center gap-1 cursor-pointer"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── EDIT RECOVERED AMOUNT MODAL ── */}
      {editingCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-emerald-600" />
                  Update Recovery Details
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Case Ref: <strong className="font-mono">{editingCase.caseId}</strong> ({editingCase.defaulterName})
                </p>
              </div>
              <button
                onClick={() => setEditingCase(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {updateError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-[#DC2626] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{updateError}</span>
              </div>
            )}

            <form onSubmit={handleSaveRecovery} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Total Outstanding Claim: <span className="font-black text-slate-900">{formatCurrency(editingCase.stuckAmount)}</span>
                </label>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Recovered Amount (₹ INR) <span className="text-[#DC2626]">*</span>
                </label>
                <div className="relative">
                  <IndianRupee className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="number"
                    step="any"
                    required
                    min="0"
                    placeholder="Enter recovered amount in INR"
                    value={newRecoveredAmount}
                    onChange={e => setNewRecoveredAmount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-emerald-600 rounded-xl pl-10 pr-4 py-2.5 text-sm font-bold text-slate-900 outline-none"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setNewRecoveredAmount(String(editingCase.stuckAmount))}
                    className="text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-lg border border-emerald-200 cursor-pointer"
                  >
                    Mark 100% Full Settlement ({formatCurrency(editingCase.stuckAmount)})
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Case Status
                </label>
                <select
                  value={newStatus}
                  onChange={e => setNewStatus(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-bold text-slate-800 outline-none cursor-pointer"
                >
                  <option value="active">Active (Notices Ongoing)</option>
                  <option value="recovered">Recovered (Dues Settled)</option>
                  <option value="completed">Completed (Notices Concluded)</option>
                  <option value="paused">Paused</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingCase(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-5 py-2 text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  {isUpdating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                  Save Recovery
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── VIEW CASE DOSSIER MODAL ── */}
      {viewingCase && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-100 space-y-5 max-h-[85vh] overflow-y-auto animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DC2626] bg-red-50 px-2 py-0.5 rounded border border-red-100">
                  {viewingCase.category === "loan-recovery" ? "Loan Recovery" : "Commercial Recovery"}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  {viewingCase.defaulterName}
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">Ref: {viewingCase.caseId}</p>
              </div>
              <button
                onClick={() => setViewingCase(null)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Dossier Grid */}
            <div className="space-y-4 text-xs">
              {/* Represented Entity */}
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Represented Client</span>
                <span className="text-sm font-extrabold text-slate-900">{viewingCase.clientName}</span>
              </div>

              {/* Contact Coordinates */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Phone Coordinates</span>
                  <p className="font-mono font-bold text-slate-800 mt-0.5">{viewingCase.phone || "None"}</p>
                  {viewingCase.phone2 && <p className="font-mono text-slate-500 text-[11px]">{viewingCase.phone2}</p>}
                </div>
                <div className="bg-slate-50 p-3 rounded-xl truncate">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Email Coordinates</span>
                  <p className="font-bold text-slate-800 mt-0.5 truncate">{viewingCase.email || "None"}</p>
                  {viewingCase.email2 && <p className="text-slate-500 text-[11px] truncate">{viewingCase.email2}</p>}
                </div>
              </div>

              {/* Complete Address */}
              <div className="bg-slate-50 p-3 rounded-xl">
                <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Registered Address</span>
                <p className="text-slate-700 leading-relaxed font-medium">{viewingCase.address}</p>
              </div>

              {/* Police Station */}
              {viewingCase.policeStationName && (
                <div className="bg-slate-50 p-3 rounded-xl">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Police Authority Jurisdiction</span>
                  <p className="font-bold text-slate-800">{viewingCase.policeStationName}</p>
                  {viewingCase.policeStationEmail && (
                    <p className="text-slate-500 text-[11px] font-mono mt-0.5">{viewingCase.policeStationEmail}</p>
                  )}
                </div>
              )}

              {/* Claim vs Recovered */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50/60 border border-red-100 p-3 rounded-xl">
                  <span className="text-[10px] font-bold uppercase text-red-700 block">Total Claim Amount</span>
                  <span className="text-base font-black text-red-900">{formatCurrency(viewingCase.stuckAmount)}</span>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
                  <span className="text-[10px] font-bold uppercase text-emerald-700 block">Total Recovered Amount</span>
                  <span className="text-base font-black text-emerald-800">{formatCurrency(viewingCase.recoveredAmount || 0)}</span>
                </div>
              </div>

              {/* Notice Timeline */}
              {viewingCase.timeline && viewingCase.timeline.length > 0 && (
                <div>
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-2">Notice Dispatch Stages</span>
                  <div className="space-y-2">
                    {viewingCase.timeline.map((step: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-700">
                            {step.step}
                          </span>
                          <div>
                            <span className="font-bold text-slate-800 block leading-tight">{step.label}</span>
                            <span className="text-[10px] text-slate-400">{step.description}</span>
                          </div>
                        </div>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                            step.status === "completed"
                              ? "bg-emerald-100 text-emerald-800"
                              : step.status === "scheduled"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {step.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-100">
              <button
                onClick={() => setViewingCase(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── FLOATING SELECTION ACTION BAR ── */}
      {selectedCaseIds.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 z-40 backdrop-blur-md animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white font-black text-xs flex items-center justify-center">
              {selectedCaseIds.length}
            </span>
            <span className="text-xs font-bold text-slate-200">
              case{selectedCaseIds.length > 1 ? "s" : ""} selected for dispatch
            </span>
          </div>

          <div className="h-4 w-px bg-slate-700" />

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setDispatchResult(null);
                setIsDispatchModalOpen(true);
              }}
              className="px-3.5 py-1.5 bg-[#DC2626] hover:bg-red-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-md cursor-pointer transition-all hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              Dispatch to Dispatcher
            </button>
            <button
              onClick={handleExportSelectedCSV}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Export Selected CSV
            </button>
            <button
              onClick={() => setSelectedCaseIds([])}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 cursor-pointer transition-all"
              title="Deselect all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── DISPATCH TO PHYSICAL DISPATCHER MODAL ── */}
      {isDispatchModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 space-y-4 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-[#DC2626]">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Dispatch Physical Notice Package
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Review debtor names, contact coordinates, and dispatch 1-click ZIP package
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (!isDispatching) setIsDispatchModalOpen(false);
                }}
                disabled={isDispatching}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer disabled:opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content / Result State */}
            {dispatchResult ? (
              <div className="space-y-4 overflow-y-auto">
                <div className={`p-4 rounded-2xl border ${dispatchResult.success ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
                  <div className="flex items-start gap-3">
                    {dispatchResult.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <h4 className={`text-sm font-black ${dispatchResult.success ? "text-emerald-900" : "text-red-900"}`}>
                        {dispatchResult.success ? "Dispatch Package Sent Successfully!" : "Dispatch Package Failed"}
                      </h4>
                      <p className={`text-xs mt-1 leading-relaxed ${dispatchResult.success ? "text-emerald-700" : "text-red-700"}`}>
                        {dispatchResult.message}
                      </p>
                      {dispatchResult.batchId && (
                        <p className="text-xs font-mono font-bold text-emerald-800 mt-2 bg-emerald-100/70 px-2.5 py-1 rounded-lg inline-block">
                          Batch Ref: {dispatchResult.batchId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {dispatchResult.downloadUrl && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                    <span className="text-xs font-bold text-slate-700 block">
                      Direct Admin 1-Click ZIP Download:
                    </span>
                    <a
                      href={dispatchResult.downloadUrl}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-extrabold shadow-md transition-all"
                    >
                      <Download className="w-4 h-4" />
                      Download Notice Package (.ZIP) Now
                    </a>
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => {
                      setIsDispatchModalOpen(false);
                      setDispatchResult(null);
                    }}
                    className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold cursor-pointer hover:bg-slate-800"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 overflow-y-auto pr-1 flex-1">
                {/* Batch Count Info */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Selected Queue
                    </span>
                    <span className="text-lg font-black text-slate-900">
                      {selectedCaseIds.length} of {cases.length} Debtor Notice{cases.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold bg-[#DC2626]/10 text-[#DC2626] border border-[#DC2626]/20 px-3 py-1 rounded-full">
                    Separate PDFs in 1 ZIP
                  </span>
                </div>

                {/* Interactive Debtor Notice List with Radio/Checkbox Deselection */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs">
                  <div className="bg-slate-50/90 px-3.5 py-2 border-b border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                    <span className="text-xs font-black text-slate-800">
                      Debtor Roster &amp; Phone ({selectedCaseIds.length} selected)
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={modalSearchQuery}
                        onChange={e => setModalSearchQuery(e.target.value)}
                        placeholder="Search name or phone..."
                        className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs outline-none focus:border-[#DC2626] w-36 sm:w-44"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (selectedCaseIds.length === cases.length) {
                            setSelectedCaseIds([]);
                          } else {
                            setSelectedCaseIds(cases.map(c => c.id || c._id));
                          }
                        }}
                        className="text-[11px] font-extrabold text-[#DC2626] hover:underline cursor-pointer shrink-0"
                      >
                        {selectedCaseIds.length === cases.length ? "Deselect All" : "Select All"}
                      </button>
                    </div>
                  </div>

                  {/* Scrollable list of debtors */}
                  <div className="max-h-56 overflow-y-auto divide-y divide-slate-100 p-1">
                    {cases
                      .filter(c => {
                        if (!modalSearchQuery) return true;
                        const q = modalSearchQuery.toLowerCase();
                        return (
                          (c.defaulterName || "").toLowerCase().includes(q) ||
                          (c.phone || "").includes(q) ||
                          (c.caseId || "").toLowerCase().includes(q)
                        );
                      })
                      .map(c => {
                        const isSelected = selectedCaseIds.includes(c.id || c._id);
                        const isLoan = c.category === "loan-recovery";
                        const noticeInfo = getEffectiveNoticeInfo(c);

                        return (
                          <div
                            key={c.id || c._id}
                            onClick={() => handleToggleSelect(c.id || c._id)}
                            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-red-50/40 hover:bg-red-50/70"
                                : "opacity-40 hover:opacity-75 bg-slate-50/40"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Custom Radio / Toggle Circle */}
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                  isSelected
                                    ? "bg-[#DC2626] border-[#DC2626] text-white shadow-sm"
                                    : "border-slate-300 bg-white"
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-extrabold text-xs text-slate-900 truncate">
                                    {c.defaulterName}
                                  </span>
                                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-white px-1.5 py-0.2 rounded border border-slate-200">
                                    {c.caseId}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                                  <span className="font-mono font-semibold text-slate-700">{c.phone || "No Phone"}</span>
                                  <span>•</span>
                                  <span className="truncate max-w-[140px]">{c.clientName || "AMA"}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0 ml-2">
                              <span
                                className={`px-2 py-0.5 rounded text-[9.5px] font-black uppercase ${
                                  noticeInfo.isPoliceComplaint
                                    ? "bg-red-100 text-red-800"
                                    : isLoan
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {noticeInfo.label}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Dispatcher Email Input */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                    Dispatcher Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    <input
                      type="email"
                      value={dispatcherEmail}
                      onChange={e => setDispatcherEmail(e.target.value)}
                      placeholder="e.g. notice@amalegalsolutions.com or dispatch@..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#DC2626] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-semibold outline-none transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    An email will be dispatched containing the visible debtor names, phone numbers, hidden audit metadata, and a secure 1-click link to download all PDFs.
                  </p>
                </div>

                {/* Admin Dispatch Notes */}
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-600 mb-1.5">
                    Mailing Instructions / Batch Notes <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    value={dispatchNotes}
                    onChange={e => setDispatchNotes(e.target.value)}
                    placeholder="e.g. Priority dispatch for ACTOLOAN cases; please print on official letterhead..."
                    rows={2}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#DC2626] rounded-xl px-3.5 py-2.5 text-xs font-semibold outline-none transition-all resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsDispatchModalOpen(false)}
                    disabled={isDispatching}
                    className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all cursor-pointer disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSendBatch}
                    disabled={isDispatching || !dispatcherEmail || selectedCaseIds.length === 0}
                    className="px-5 py-2.5 text-xs font-black text-white bg-[#DC2626] hover:bg-red-700 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
                  >
                    {isDispatching ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Generating Package &amp; Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Dispatch Package ({selectedCaseIds.length})
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Mail,
  Phone,
  Calendar,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Loader2,
  Briefcase,
  Shield,
  Clock,
  Inbox,
  Bell
} from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface UserAccount {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  isPaid: boolean;
  amountPaid: number;
  createdAt: string;
  role: string;
}

interface TimelineItem {
  step: number;
  label: string;
  description: string;
  date: string;
  status: "pending" | "locked" | "scheduled" | "completed" | "cancelled";
  scheduledAt?: string;
  completedAt?: string;
}

interface CaseDetails {
  _id: string;
  caseId: string;
  defaulterName: string;
  entityType: string;
  phone: string;
  phone2?: string;
  email: string;
  email2?: string;
  address: string;
  stuckAmount: number;
  dueDate: string;
  policeStationName: string;
  policeStationEmail: string;
  policeStationAddress: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress?: string;
  status: "active" | "recovered" | "cancelled";
  currentStep: number;
  createdAt: string;
  updatedAt: string;
  timeline: TimelineItem[];
}

interface DispatchLog {
  _id: string;
  caseNumber: string;
  step: number;
  dispatchedAt: string;
  recipientEmail: string;
  recipientPhone: string;
  channels: {
    email?: {
      status: "success" | "failed";
      error: string | null;
    };
    whatsapp?: {
      status: "success" | "failed";
      error: string | null;
    };
  };
  noticeRef?: string;
}

export default function CaseInspectorPage() {
  return (
    <Suspense fallback={
      <div className="py-32 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-10 h-10 text-[#DC2626] animate-spin" />
        <p className="text-xs font-bold text-gray-450 uppercase tracking-widest">
          Loading Case Inspector...
        </p>
      </div>
    }>
      <CaseInspector />
    </Suspense>
  );
}

function CaseInspector() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Search parameters & results
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CaseDetails[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Inspector details
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [caseDetails, setCaseDetails] = useState<CaseDetails | null>(null);
  const [userAccount, setUserAccount] = useState<UserAccount | null>(null);
  const [dispatchLogs, setDispatchLogs] = useState<DispatchLog[]>([]);
  const [clientNotifications, setClientNotifications] = useState<any[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // UX Tabs
  const [detailTab, setDetailTab] = useState<"profiles" | "timeline" | "notifications">("profiles");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 450);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Load caseId from URL query parameter ?id=...
  useEffect(() => {
    const urlId = searchParams.get("id");
    if (urlId) {
      setSelectedCaseId(urlId);
      setSearchQuery(urlId);
    }
  }, [searchParams]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Fetch search results
  useEffect(() => {
    const searchCases = async () => {
      if (!debouncedQuery.trim()) {
        setSearchResults([]);
        return;
      }
      setIsSearching(true);
      try {
        const res = await fetch(`/api/admin/cases?search=${encodeURIComponent(debouncedQuery)}`);
        if (!res.ok) throw new Error("Search failed");
        const data = await res.json();
        if (data.success) {
          setSearchResults(data.cases);
          setShowDropdown(true);
        }
      } catch (err) {
        console.error("Search API Error:", err);
      } finally {
        setIsSearching(false);
      }
    };

    searchCases();
  }, [debouncedQuery]);

  // Fetch single case details when selectedCaseId changes
  useEffect(() => {
    const loadDetails = async () => {
      if (!selectedCaseId) return;
      setIsLoadingDetails(true);
      setErrorMessage(null);
      try {
        const res = await fetch(`/api/admin/cases?caseId=${encodeURIComponent(selectedCaseId)}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load case details.");
        
        if (data.success) {
          setCaseDetails(data.caseDetails);
          setUserAccount(data.userAccount);
          setDispatchLogs(data.dispatchLogs);
          setClientNotifications(data.clientNotifications || []);
          setDetailTab("profiles"); // default tab back to profile on case change
        }
      } catch (err: any) {
        console.error("Details API Error:", err);
        setErrorMessage(err.message || "Case not found.");
        setCaseDetails(null);
        setUserAccount(null);
        setDispatchLogs([]);
        setClientNotifications([]);
      } finally {
        setIsLoadingDetails(false);
      }
    };

    loadDetails();
  }, [selectedCaseId]);

  const selectCase = (caseId: string) => {
    setSelectedCaseId(caseId);
    setSearchQuery(caseId);
    setShowDropdown(false);
    
    // Update URL query string
    const params = new URLSearchParams(window.location.search);
    params.set("id", caseId);
    router.replace(`/authority/cases?${params.toString()}`);
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    } catch (e) {
      return isoString;
    }
  };

  return (
    <div className="relative max-w-8xl mx-auto select-none text-left p-2 sm:p-4" style={{ zoom: 0.8 }}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-5 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Case Inspector & Client Profile
          </h1>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            Audit case metadata, client profiles, timelines, and live communication logs.
          </p>
        </div>
      </div>

      {/* Case search box section */}
      <div className="max-w-xl mx-auto mb-8 relative" ref={dropdownRef}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            {isSearching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Search className="w-4 h-4" />
            )}
          </div>
          <input
            type="text"
            placeholder="Search Case ID, Client Name, Defaulter or Phone..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 focus:border-[#DC2626] rounded-2xl text-sm text-gray-900 placeholder-slate-400 font-medium focus:outline-none focus:ring-4 focus:ring-[#DC2626]/5 transition-all bg-white shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCaseId(null);
                setCaseDetails(null);
                setUserAccount(null);
                setDispatchLogs([]);
                setClientNotifications([]);
                router.replace("/authority/cases");
              }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-gray-600 cursor-pointer"
            >
              <span className="text-sm">✕</span>
            </button>
          )}
        </div>

        {/* Floating results dropdown */}
        <AnimatePresence>
          {showDropdown && searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute z-40 w-full mt-1 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden max-h-60 overflow-y-auto"
            >
              <div className="py-1">
                {searchResults.map((item) => (
                  <button
                    key={item._id}
                    onClick={() => selectCase(item.caseId)}
                    className="w-full px-4 py-2.5 hover:bg-slate-50 flex items-center justify-between text-left cursor-pointer transition-colors border-b border-gray-50/50 last:border-b-0"
                  >
                    <div>
                      <div className="font-extrabold text-xs text-[#111827]">{item.caseId}</div>
                      <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                        {item.clientName} ➔ {item.defaulterName}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black text-slate-900">
                        ₹{item.stuckAmount.toLocaleString("en-IN")}
                      </span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider ${
                        item.status === "recovered"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                          : item.status === "cancelled"
                          ? "bg-gray-100 text-gray-800 border border-gray-200"
                          : "bg-blue-50 text-blue-700 border border-blue-100"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Details Inspection Container */}
      {isLoadingDetails ? (
        <div className="py-24 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Loading case files...
          </p>
        </div>
      ) : errorMessage ? (
        <div className="max-w-md mx-auto py-10 px-5 bg-red-50 rounded-xl border border-red-100 text-center flex flex-col items-center">
          <AlertCircle className="w-10 h-10 text-red-500 mb-2" />
          <h3 className="font-bold text-red-950 text-xs">Error Inspecting Case</h3>
          <p className="text-[11px] text-red-700 font-semibold mt-1">{errorMessage}</p>
        </div>
      ) : caseDetails ? (
        /* ── Case Inspection Layout ── */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          {/* Main Title Row - Concise & Clean */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                <Briefcase className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-black text-[#111827] tracking-tight">{caseDetails.caseId}</h2>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                    caseDetails.status === "recovered"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                      : caseDetails.status === "cancelled"
                      ? "bg-gray-100 text-gray-800 border border-gray-200"
                      : "bg-blue-50 text-blue-700 border border-blue-100"
                  }`}>
                    {caseDetails.status}
                  </span>
                </div>
                <p className="text-slate-400 text-[11px] font-semibold mt-0.5">
                  Client: <span className="text-slate-600 font-bold">{caseDetails.clientName}</span> | Opponent: <span className="text-slate-600 font-bold">{caseDetails.defaulterName}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-left sm:text-right">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Claim Amount</span>
                <span className="text-xl font-black text-[#111827] tracking-tight block">
                  ₹{caseDetails.stuckAmount.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="text-right hidden sm:block border-l border-gray-100 pl-6">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Registered</span>
                <span className="text-xs font-bold text-slate-600 block mt-0.5">
                  {new Date(caseDetails.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                </span>
              </div>
            </div>
          </div>

          {/* Section Tab Selector - UX Friendly & Space Saving */}
          <div className="flex bg-gray-100/70 p-1 rounded-xl border border-gray-200/40 self-start max-w-xl">
            <button
              onClick={() => setDetailTab("profiles")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                detailTab === "profiles"
                  ? "bg-white text-gray-900 shadow-xs border border-gray-200/20"
                  : "text-slate-500 hover:text-gray-900"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Profiles & Contacts
            </button>
            <button
              onClick={() => setDetailTab("timeline")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                detailTab === "timeline"
                  ? "bg-white text-gray-900 shadow-xs border border-gray-200/20"
                  : "text-slate-500 hover:text-gray-900"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              Notice Timeline & Audit
            </button>
            <button
              onClick={() => setDetailTab("notifications")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                detailTab === "notifications"
                  ? "bg-white text-gray-900 shadow-xs border border-gray-200/20"
                  : "text-slate-500 hover:text-gray-900"
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              Client Dashboard feed ({clientNotifications.length})
            </button>
          </div>

          {/* Dynamic Sections */}
          <div className="mt-4">
            {detailTab === "profiles" && (
              /* ── Profiles & Contacts Tab ── */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Client Profile Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-5">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    Client Account Details
                  </h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Name</span>
                      <span className="font-extrabold text-[#111827]">{caseDetails.clientName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-semibold">Phone</span>
                      <span className="font-semibold text-slate-700">{caseDetails.clientPhone}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] text-slate-400 block font-semibold">Email</span>
                      <span className="font-semibold text-slate-700">{caseDetails.clientEmail}</span>
                    </div>
                    {caseDetails.clientAddress && (
                      <div className="col-span-2">
                        <span className="text-[10px] text-slate-400 block font-semibold">Address</span>
                        <span className="font-semibold text-slate-600 text-[11px] leading-relaxed">{caseDetails.clientAddress}</span>
                      </div>
                    )}
                  </div>

                  {userAccount && (
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-[11px] space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 font-semibold">Billing Status</span>
                        <span className={`font-black ${userAccount.isPaid ? "text-emerald-600" : "text-amber-600"}`}>
                          {userAccount.isPaid ? `Paid Subscriber (₹${userAccount.amountPaid})` : "Unpaid Lead"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center border-t border-gray-100 pt-1.5">
                        <span className="text-slate-400 font-semibold">Database ID</span>
                        <span className="font-mono text-[9px] text-slate-400 select-all">{userAccount._id}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Opponent & Police Station */}
                <div className="space-y-6">
                  {/* Opponent Profile Card */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-5">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2.5 flex items-center gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-slate-400" />
                      Opponent (Defaulter) Profile
                    </h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Defaulter Name</span>
                        <span className="font-extrabold text-[#111827]">{caseDetails.defaulterName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Entity Type</span>
                        <span className="font-bold text-slate-700 capitalize">{caseDetails.entityType}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Phone</span>
                        <span className="font-semibold text-slate-700">
                          {caseDetails.phone} {caseDetails.phone2 ? `/ ${caseDetails.phone2}` : ""}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Email</span>
                        <span className="font-semibold text-slate-700 truncate block">
                          {caseDetails.email || "—"}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Outstanding Due Date</span>
                        <span className="font-bold text-slate-800">{caseDetails.dueDate}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] text-slate-400 block font-semibold">Full Address</span>
                        <span className="font-semibold text-slate-600 text-[11px] leading-relaxed">{caseDetails.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Police Station details Card */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-slate-400" />
                      Jurisdiction Police Station
                    </h3>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Station Name</span>
                        <span className="font-bold text-slate-850">{caseDetails.policeStationName}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-semibold">Station Email</span>
                        <span className="font-semibold text-slate-700 truncate block">{caseDetails.policeStationEmail}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] text-slate-400 block font-semibold">Address</span>
                        <span className="font-semibold text-slate-650 text-[11px] leading-relaxed">{caseDetails.policeStationAddress}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {detailTab === "timeline" && (
              /* ── Timeline & Audit Logs Tab ── */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Timeline Progress */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-5">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Notice Release timeline track
                  </h3>
                  <div className="relative border-l-2 border-gray-100 pl-5 ml-2.5 space-y-5 py-2">
                    {caseDetails.timeline.map((step, idx) => {
                      const isCompleted = step.status === "completed";
                      const isScheduled = step.status === "scheduled";
                      const isCancelled = step.status === "cancelled";

                      return (
                        <div key={idx} className="relative">
                          <span className={`absolute -left-[28px] top-0.5 w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${
                            isCompleted
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : isScheduled
                              ? "bg-blue-500 border-blue-500 text-white animate-pulse"
                              : isCancelled
                              ? "bg-gray-400 border-gray-400 text-white"
                              : "bg-white border-gray-200"
                          }`}>
                            {isCompleted && <span className="text-[7px]">✓</span>}
                          </span>

                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-[#111827] text-xs">
                                Notice {step.step}: {step.label}
                              </span>
                              <span className={`px-1.5 py-0.2 rounded-full text-[8px] font-black uppercase tracking-wider ${
                                isCompleted
                                  ? "bg-emerald-50 text-emerald-700"
                                  : isScheduled
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-slate-100 text-slate-500"
                              }`}>
                                {step.status}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium">{step.description}</p>
                            <div className="text-[9px] text-slate-400 font-semibold mt-0.5">
                              {step.scheduledAt && `Scheduled Release: ${formatDate(step.scheduledAt)}`}
                              {step.completedAt && `Dispatched: ${formatDate(step.completedAt)}`}
                              {!step.scheduledAt && !step.completedAt && step.date && `Target Date: ${step.date}`}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Delivery Logs */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2.5 flex items-center gap-1.5">
                    <Inbox className="w-3.5 h-3.5 text-slate-400" />
                    Delivery Audit Logs
                  </h3>
                  {dispatchLogs.length === 0 ? (
                    <div className="py-12 text-center bg-slate-50 rounded-xl border border-dashed border-gray-200">
                      <p className="text-xs text-slate-400 font-semibold">No notice delivery attempts logged yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                      {dispatchLogs.map((log) => (
                        <div key={log._id} className="border border-gray-100 rounded-xl p-3 space-y-2 bg-slate-50/50 text-[11px]">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-800">Notice {log.step} Dispatch</span>
                            <span className="text-slate-400 font-bold">{formatDate(log.dispatchedAt)}</span>
                          </div>
                          {log.noticeRef && <div className="text-[9px] text-slate-400 font-mono">Ref: {log.noticeRef}</div>}
                          <div className="flex gap-2">
                            {log.channels?.email && (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-bold text-[9px] ${
                                log.channels.email.status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                              }`}>
                                Mail: {log.channels.email.status}
                              </span>
                            )}
                            {log.channels?.whatsapp && (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-bold text-[9px] ${
                                log.channels.whatsapp.status === "success" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                              }`}>
                                WhatsApp: {log.channels.whatsapp.status}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {detailTab === "notifications" && (
              /* ── Client Notifications Tab ── */
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4 w-full">
                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2.5 flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-slate-400" />
                  Client Dashboard Notification Feed
                </h3>
                {clientNotifications.length === 0 ? (
                  <div className="py-12 text-center bg-slate-50 rounded-xl border border-dashed border-gray-200">
                    <p className="text-xs text-slate-400 font-semibold">No alerts dispatched to the client's dashboard feed.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
                    {clientNotifications.map((notif) => (
                      <div key={notif._id} className={`border border-gray-100 rounded-xl p-3.5 space-y-1.5 hover:bg-slate-50/50 transition-colors text-xs ${
                        notif.isRead ? "bg-slate-50/20" : "bg-blue-50/5 border-blue-100/40"
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-slate-800 flex items-center gap-1.5">
                            {!notif.isRead && <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 animate-pulse" />}
                            {notif.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold">{formatDate(notif.date)}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 whitespace-pre-line leading-relaxed bg-white p-2.5 rounded-lg border border-gray-100 font-mono max-h-24 overflow-y-auto">
                          {notif.description}
                        </p>
                        <div className="flex items-center justify-between text-[9px] text-slate-400 font-semibold">
                          <span>Source: {notif.type}</span>
                          <span className={notif.isRead ? "text-slate-400" : "text-blue-600 font-bold"}>
                            {notif.isRead ? "Read by Client" : "Unread"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        /* Empty Welcome State */
        <div className="max-w-md mx-auto py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-xs p-8 mt-12">
          <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="font-black text-slate-800 text-base">Select Case to Inspect</h3>
          <p className="text-slate-500 text-xs font-semibold mt-1.5 leading-relaxed">
            Pasting or typing a Case ID in the search bar above will immediately render the case details, onboarding contacts, notification timelines, and communication logs.
          </p>
        </div>
      )}
    </div>
  );
}

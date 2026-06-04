"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Calendar, 
  History, 
  User, 
  Mail, 
  Phone, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Loader2,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Info,
  Clock
} from "lucide-react";

/* ── Types ───────────────────────────────────────────── */

interface DispatchMetrics {
  totalDispatched: number;
  totalFailed: number;
  totalScheduled: number;
  scheduledSoon: number;
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
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  defaulterName: string;
}

interface ScheduledDispatch {
  _id: string;
  caseId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  defaulterName: string;
  stuckAmount: number;
  step: number;
  label: string;
  scheduledAt: string;
  dateText: string;
  description: string;
}

export default function DispatchLogsPage() {
  const [activeTab, setActiveTab] = useState<"history" | "scheduled">("history");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  
  // Stats & States
  const [metrics, setMetrics] = useState<DispatchMetrics | null>(null);
  const [historyData, setHistoryData] = useState<DispatchLog[]>([]);
  const [scheduledData, setScheduledData] = useState<ScheduledDispatch[]>([]);
  
  // Loading/Pagination
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 20;

  // Selected Log Details Modal
  const [selectedLog, setSelectedLog] = useState<DispatchLog | null>(null);

  // Search Debounce Effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // Reset page to 1 on new search query
    }, 600);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Metrics (runs on load and refresh)
  const fetchMetrics = async () => {
    setIsLoadingMetrics(true);
    try {
      const res = await fetch(`/api/admin/dispatch-logs?type=metrics&_t=${Date.now()}`);
      if (!res.ok) throw new Error("Failed to load metrics");
      const data = await res.json();
      if (data.success) {
        setMetrics(data.metrics);
      }
    } catch (err) {
      console.error("Error loading dispatch metrics:", err);
    } finally {
      setIsLoadingMetrics(false);
    }
  };

  // Fetch Page Data
  const fetchData = async () => {
    setIsLoadingData(true);
    try {
      const qParams = new URLSearchParams({
        type: activeTab,
        search: debouncedSearch,
        page: page.toString(),
        limit: limit.toString(),
        _t: Date.now().toString()
      });
      const res = await fetch(`/api/admin/dispatch-logs?${qParams.toString()}`);
      if (!res.ok) throw new Error("Failed to load data");
      const data = await res.json();
      if (data.success) {
        if (activeTab === "history") {
          setHistoryData(data.data);
        } else {
          setScheduledData(data.data);
        }
        setTotalPages(Math.ceil(data.total / limit) || 1);
      }
    } catch (err) {
      console.error("Error loading dispatch data:", err);
    } finally {
      setIsLoadingData(false);
    }
  };

  // Trigger data fetches
  useEffect(() => {
    fetchMetrics();
  }, []);

  useEffect(() => {
    fetchData();
  }, [activeTab, debouncedSearch, page]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await Promise.all([fetchMetrics(), fetchData()]);
    setIsRefreshing(false);
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E7EB]/50 pb-6 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
            Dispatch Queue & Audit Logs
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
            Track notice delivery outcomes and review upcoming automated pre-litigation schedules.
          </p>
        </div>

        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-gray-50 transition-colors bg-white shadow-sm cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
          Refresh Audit Logs
        </button>
      </div>

      {/* KPI stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Metric Card: Total Dispatched */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Total Notices Sent
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-[#111827]">
              {metrics?.totalDispatched.toLocaleString("en-IN") || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            Total delivery attempts logged
          </p>
        </div>

        {/* Metric Card: Total Failed */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Failed Attempts
            </span>
            <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-red-600">
              {metrics?.totalFailed.toLocaleString("en-IN") || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            Notices needing admin attention
          </p>
        </div>

        {/* Metric Card: Total Scheduled */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Total Scheduled
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-[#111827]">
              {metrics?.totalScheduled.toLocaleString("en-IN") || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            Notices in queue for future dates
          </p>
        </div>

        {/* Metric Card: Scheduled Soon */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
              Scheduled Next 24h
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-amber-600" />
            </div>
          </div>
          {isLoadingMetrics ? (
            <div className="h-8 w-16 bg-gray-100 animate-pulse rounded-md mt-2" />
          ) : (
            <h3 className="text-2xl font-black text-amber-600">
              {metrics?.scheduledSoon.toLocaleString("en-IN") || 0}
            </h3>
          )}
          <p className="text-[10px] text-slate-400 font-semibold mt-1">
            Releasing automatically in 24 hours
          </p>
        </div>
      </div>

      {/* Tabs & Search controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        {/* Navigation Tabs */}
        <div className="flex bg-gray-100/80 p-1 rounded-xl border border-gray-200/50 self-start">
          <button
            onClick={() => {
              setActiveTab("history");
              setPage(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === "history"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200/30"
                : "text-slate-500 hover:text-gray-900"
            }`}
          >
            <History className="w-3.5 h-3.5" />
            Dispatch History
          </button>
          <button
            onClick={() => {
              setActiveTab("scheduled");
              setPage(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === "scheduled"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200/30"
                : "text-slate-500 hover:text-gray-900"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            Upcoming Schedules ({metrics?.totalScheduled || 0})
          </button>
        </div>

        {/* User Search Input */}
        <div className="relative w-full sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search by client, defaulter, phone or case ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-white"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-gray-600 cursor-pointer"
            >
              <span className="text-lg">✕</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Data Section */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden">
        {isLoadingData ? (
          <div className="py-24 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Retrieving Audit Entries...
            </p>
          </div>
        ) : activeTab === "history" ? (
          /* ── Tab 1: Dispatch History ── */
          <div className="overflow-x-auto">
            {historyData.length === 0 ? (
              <div className="py-24 text-center">
                <Info className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-gray-400 text-sm font-semibold">No dispatch logs found matching the search criteria.</p>
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-gray-100 text-[10px] font-black text-slate-400 uppercase tracking-wider text-left">
                    <th className="px-6 py-4">Timestamp</th>
                    <th className="px-6 py-4">Case Details</th>
                    <th className="px-6 py-4">Client / Complainant</th>
                    <th className="px-6 py-4">Defaulter</th>
                    <th className="px-6 py-4">Stage</th>
                    <th className="px-6 py-4">Channels & Status</th>
                    <th className="px-6 py-4 text-center">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                  {historyData.map((log) => {
                    const emailStatus = log.channels?.email?.status;
                    const waStatus = log.channels?.whatsapp?.status;
                    const isAllSuccess = emailStatus === "success" && waStatus === "success";
                    const isAnyFail = emailStatus === "failed" || waStatus === "failed";

                    return (
                      <tr key={log._id} className="hover:bg-slate-50/40 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-500">
                          {formatDate(log.dispatchedAt)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-extrabold text-[#111827]">{log.caseNumber}</div>
                          {log.noticeRef && (
                            <div className="text-[10px] text-slate-400 font-mono mt-0.5">{log.noticeRef}</div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-[#111827]">{log.clientName || "—"}</div>
                          <div className="flex items-center gap-2 mt-0.5 text-slate-400">
                            <span className="flex items-center gap-0.5"><Mail className="w-3 h-3" />{log.clientEmail || "—"}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-[#111827]">{log.defaulterName}</div>
                          <div className="flex flex-col gap-0.5 mt-0.5 text-slate-400 text-[10px]">
                            <span className="flex items-center gap-0.5"><Phone className="w-2.5 h-2.5" />{log.recipientPhone}</span>
                            <span className="flex items-center gap-0.5"><Mail className="w-2.5 h-2.5" />{log.recipientEmail}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gray-100 text-gray-800 border border-gray-200">
                            Notice {log.step}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2.5">
                            {/* Email Pill */}
                            {log.channels?.email ? (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                log.channels.email.status === "success" 
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                                  : "bg-red-50 text-red-700 border border-red-100"
                              }`}>
                                <Mail className="w-3 h-3" />
                                {log.channels.email.status === "success" ? "Sent" : "Failed"}
                              </span>
                            ) : null}

                            {/* WhatsApp Pill */}
                            {log.channels?.whatsapp ? (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                log.channels.whatsapp.status === "success" 
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                                  : "bg-red-50 text-red-700 border border-red-100"
                              }`}>
                                <Phone className="w-3 h-3" />
                                {log.channels.whatsapp.status === "success" ? "Sent" : "Failed"}
                              </span>
                            ) : null}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => setSelectedLog(log)}
                            className="text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] cursor-pointer hover:underline"
                          >
                            Inspect
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          /* ── Tab 2: Upcoming Scheduled ── */
          <div className="overflow-x-auto">
            {scheduledData.length === 0 ? (
              <div className="py-24 text-center">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-gray-400 text-sm font-semibold">No scheduled notice dispatches found.</p>
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-gray-100 text-[10px] font-black text-slate-400 uppercase tracking-wider text-left">
                    <th className="px-6 py-4">Scheduled Date</th>
                    <th className="px-6 py-4">Case Details</th>
                    <th className="px-6 py-4">Client</th>
                    <th className="px-6 py-4">Defaulter</th>
                    <th className="px-6 py-4">Dues</th>
                    <th className="px-6 py-4">Next Target</th>
                    <th className="px-6 py-4">Queue Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                  {scheduledData.map((sched) => (
                    <tr key={`${sched._id}-${sched.step}`} className="hover:bg-slate-50/40 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap font-extrabold text-blue-600">
                        {formatDate(sched.scheduledAt)}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#111827]">
                        {sched.caseId}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#111827]">{sched.clientName}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">{sched.clientPhone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#111827]">{sched.defaulterName}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">{sched.clientEmail}</div>
                      </td>
                      <td className="px-6 py-4 font-black text-slate-900 whitespace-nowrap">
                        ₹{sched.stuckAmount.toLocaleString("en-IN")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wider">
                          {sched.label} (Step {sched.step})
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 max-w-xs truncate">
                        {sched.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Server Side Pagination Controls */}
        {totalPages > 1 && !isLoadingData && (
          <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 bg-slate-50/50">
            <span className="text-xs text-slate-500 font-semibold">
              Page <span className="text-gray-900 font-bold">{page}</span> of{" "}
              <span className="text-gray-900 font-bold">{totalPages}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="p-1.5 border border-gray-200 rounded-lg text-gray-500 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="p-1.5 border border-gray-200 rounded-lg text-gray-500 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:hover:bg-white cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Drilldown Inspect Modal ── */}
      <AnimatePresence>
        {selectedLog && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-2xl max-w-lg w-full overflow-hidden text-left"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-slate-50/75">
                <div>
                  <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">
                    Dispatch Inspector
                  </h3>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                    Detailed audit record for Case {selectedLog.caseNumber}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLog(null)}
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-slate-500 font-bold flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6 text-slate-700">
                {/* Meta details */}
                <div className="grid grid-cols-2 gap-4 border-b border-gray-100 pb-5">
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Notice Stage</span>
                    <span className="font-extrabold text-slate-800 text-xs">Step {selectedLog.step} Notice</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Dispatch Time</span>
                    <span className="font-bold text-slate-700 text-[11px]">{formatDate(selectedLog.dispatchedAt)}</span>
                  </div>
                  <div className="col-span-2 mt-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Recipient Details</span>
                    <div className="mt-1 space-y-0.5">
                      <div className="flex items-center gap-1.5 text-xs text-slate-800 font-bold">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        {selectedLog.defaulterName} (Defaulter)
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        {selectedLog.recipientEmail}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        {selectedLog.recipientPhone}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Channels Status */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">
                    Delivery Channels Audit
                  </h4>

                  {/* Email */}
                  {selectedLog.channels?.email && (
                    <div className={`p-4 rounded-2xl border ${
                      selectedLog.channels.email.status === "success" 
                        ? "bg-emerald-50/50 border-emerald-100/50" 
                        : "bg-red-50/50 border-red-100/50"
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className={`w-4 h-4 ${
                            selectedLog.channels.email.status === "success" ? "text-emerald-600" : "text-red-600"
                          }`} />
                          <span className="font-bold text-slate-900 text-xs">Email Delivery Channel</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                          selectedLog.channels.email.status === "success" 
                            ? "bg-emerald-100 text-emerald-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {selectedLog.channels.email.status}
                        </span>
                      </div>
                      {selectedLog.channels.email.error && (
                        <p className="mt-2 text-[10px] font-semibold text-red-600 bg-red-100/50 p-2 rounded-lg font-mono">
                          Error: {selectedLog.channels.email.error}
                        </p>
                      )}
                    </div>
                  )}

                  {/* WhatsApp */}
                  {selectedLog.channels?.whatsapp && (
                    <div className={`p-4 rounded-2xl border ${
                      selectedLog.channels.whatsapp.status === "success" 
                        ? "bg-emerald-50/50 border-emerald-100/50" 
                        : "bg-red-50/50 border-red-100/50"
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <Phone className={`w-4 h-4 ${
                            selectedLog.channels.whatsapp.status === "success" ? "text-emerald-600" : "text-red-600"
                          }`} />
                          <span className="font-bold text-slate-900 text-xs">WhatsApp Delivery Channel</span>
                        </div>
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider ${
                          selectedLog.channels.whatsapp.status === "success" 
                            ? "bg-emerald-100 text-emerald-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {selectedLog.channels.whatsapp.status}
                        </span>
                      </div>
                      {selectedLog.channels.whatsapp.error && (
                        <p className="mt-2 text-[10px] font-semibold text-red-600 bg-red-100/50 p-2 rounded-lg font-mono">
                          Error: {selectedLog.channels.whatsapp.error}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 flex justify-end bg-slate-50/50">
                <button
                  onClick={() => setSelectedLog(null)}
                  className="px-4 py-2 bg-[#111827] text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Close Audit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

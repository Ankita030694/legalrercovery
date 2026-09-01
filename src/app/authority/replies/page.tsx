"use client";

import React, { useState, useEffect, useCallback, useTransition } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Mail,
  Search,
  RotateCw,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  User,
  Phone,
  Hash,
  Clock,
  Filter,
  ShieldAlert,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Inbox,
  Send,
  Building2,
  Calendar,
  X,
  FileText
} from "lucide-react";

interface ReplyItem {
  _id: string;
  userId: string;
  caseId: string;
  caseName: string;
  type: "email_reply" | "whatsapp_reply";
  title: string;
  description: string;
  date: string;
  isRead: boolean;
  metadata: {
    messageId?: string;
    senderEmail?: string;
    senderPhone?: string;
    senderRole?: "accused" | "client";
    senderDisplayName?: string;
    subject?: string;
    loanId?: string;
    accusedName?: string;
    accusedPhone?: string;
    accusedPhone2?: string;
    accusedEmail?: string;
    accusedEmail2?: string;
    clientName?: string;
    clientEmail?: string;
    clientPhone?: string;
    claimAmount?: number;
    caseStatus?: string;
  };
}

interface Metrics {
  totalReplies: number;
  emailReplies: number;
  whatsappReplies: number;
  repliesToday: number;
  accusedReplies: number;
  clientReplies: number;
}

export default function AuthorityRepliesPage() {
  const [replies, setReplies] = useState<ReplyItem[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    totalReplies: 0,
    emailReplies: 0,
    whatsappReplies: 0,
    repliesToday: 0,
    accusedReplies: 0,
    clientReplies: 0
  });

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Filters & Pagination State
  const [searchQuery, setSearchQuery] = useState("");
  const [channelFilter, setChannelFilter] = useState<"all" | "email" | "whatsapp">("all");
  const [senderFilter, setSenderFilter] = useState<"all" | "accused" | "client">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  // Interactive UI states
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedMessageIds, setExpandedMessageIds] = useState<Set<string>>(new Set());
  const [inspectReply, setInspectReply] = useState<ReplyItem | null>(null);

  // Fetch KPI Metrics
  const fetchMetrics = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/replies?type=metrics&_t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.metrics) {
          setMetrics(data.metrics);
        }
      }
    } catch (err) {
      console.error("Failed to fetch reply metrics:", err);
    }
  }, []);

  // Fetch Replies List
  const fetchReplies = useCallback(async (pageToLoad = 1, isManualRefresh = false) => {
    if (isManualRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }
    setError(null);

    try {
      const params = new URLSearchParams({
        type: "list",
        page: pageToLoad.toString(),
        limit: "20",
        channel: channelFilter,
        senderRole: senderFilter,
        search: searchQuery.trim(),
        _t: Date.now().toString()
      });

      const res = await fetch(`/api/admin/replies?${params.toString()}`);
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}: Failed to load inbound replies.`);
      }

      const data = await res.json();
      if (data.success) {
        setReplies(data.data || []);
        setTotalPages(data.totalPages || 1);
        setTotalCount(data.total || 0);
        setCurrentPage(data.page || 1);
      } else {
        throw new Error(data.error || "Failed to retrieve replies");
      }
    } catch (err: any) {
      console.error("Error fetching inbound replies:", err);
      setError(err.message || "Failed to load inbound replies.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [channelFilter, senderFilter, searchQuery]);

  // Initial load
  useEffect(() => {
    fetchMetrics();
    fetchReplies(1);
  }, [fetchMetrics, fetchReplies]);

  // Debounced search trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      startTransition(() => {
        fetchReplies(1);
      });
    }, 450);

    return () => clearTimeout(timer);
  }, [searchQuery, channelFilter, senderFilter, fetchReplies]);

  const handleRefresh = () => {
    fetchMetrics();
    fetchReplies(currentPage, true);
  };

  // Copy debtor details in format: [AccusedName] [AccusedPhone] [LoanID]
  const handleCopyAccusedInfo = (item: ReplyItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const name = (item.metadata.accusedName || item.caseName || "").trim();
    const phone = (item.metadata.accusedPhone || item.metadata.senderPhone || "").trim();
    const loanId = (item.metadata.loanId || "").trim();

    const copyText = [name, phone, loanId].filter(Boolean).join(" ");
    if (!copyText) return;

    navigator.clipboard.writeText(copyText);
    setCopiedId(item._id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === item._id ? null : prev));
    }, 2000);
  };

  const toggleMessageExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMessageIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Date formatter
  const formatDateTime = (isoDateStr: string) => {
    try {
      const d = new Date(isoDateStr);
      return d.toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      });
    } catch {
      return isoDateStr;
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto w-full pb-16 font-sans">
      
      {/* ── 1. PAGE HEADER & REFRESH ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-5">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#DC2626] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
                Inbound Accused Replies
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                Live inbox auditing all WhatsApp messages & Email responses received from accused debtors and clients across all legal cases.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-center">
          <button
            onClick={handleRefresh}
            disabled={refreshing || loading}
            className="px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            title="Refresh feed"
          >
            <RotateCw className={`w-4 h-4 text-slate-500 ${refreshing ? "animate-spin text-[#DC2626]" : ""}`} />
            <span>{refreshing ? "Syncing..." : "Refresh Feed"}</span>
          </button>
        </div>
      </div>

      {/* ── 2. KPI METRIC CARDS ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Total Inbound Replies */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
              Total Inbound
            </span>
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {metrics.totalReplies.toLocaleString()}
            </span>
            <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
              All logged responses
            </p>
          </div>
        </div>

        {/* WhatsApp Chats */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-150 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">
              WhatsApp Chats
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
              <MessageSquare className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-black text-emerald-900 tracking-tight">
              {metrics.whatsappReplies.toLocaleString()}
            </span>
            <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
              WATI Inbound messages
            </p>
          </div>
        </div>

        {/* Email Responses */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-150 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700">
              Email Replies
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Mail className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight">
              {metrics.emailReplies.toLocaleString()}
            </span>
            <p className="text-[11px] text-blue-600 font-semibold mt-0.5">
              Inbound notice email threads
            </p>
          </div>
        </div>

        {/* Received Today */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-150 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700">
              Received Today
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl sm:text-3xl font-black text-amber-900 tracking-tight">
              {metrics.repliesToday.toLocaleString()}
            </span>
            <p className="text-[11px] text-amber-600 font-semibold mt-0.5">
              Since 12:00 AM IST
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. FILTER CONTROLS & SEARCH BAR ── */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Accused Name, Phone, Email, Loan ID, Case ID, Client Name, Message..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#DC2626] rounded-xl text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills / Dropdowns */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Channel Filter */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setChannelFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                channelFilter === "all"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              All Channels
            </button>
            <button
              onClick={() => setChannelFilter("whatsapp")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                channelFilter === "whatsapp"
                  ? "bg-emerald-600 text-white shadow-2xs"
                  : "text-emerald-700 hover:text-emerald-800"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => setChannelFilter("email")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                channelFilter === "email"
                  ? "bg-blue-600 text-white shadow-2xs"
                  : "text-blue-700 hover:text-blue-800"
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </button>
          </div>

          {/* Sender Role Filter */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setSenderFilter("all")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                senderFilter === "all"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              All Senders
            </button>
            <button
              onClick={() => setSenderFilter("accused")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                senderFilter === "accused"
                  ? "bg-red-600 text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Accused (Debtors)
            </button>
            <button
              onClick={() => setSenderFilter("client")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                senderFilter === "client"
                  ? "bg-purple-600 text-white shadow-2xs"
                  : "text-purple-700 hover:text-purple-900"
              }`}
            >
              Clients
            </button>
          </div>
        </div>
      </div>

      {/* ── 4. REPLIES LIST FEED ── */}
      <div className="flex flex-col gap-3.5">
        {loading ? (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-16 text-center flex flex-col items-center justify-center">
            <RotateCw className="w-8 h-8 text-slate-400 animate-spin" />
            <p className="text-xs text-slate-500 font-bold mt-3">
              Loading inbound communications from database...
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border border-red-200 rounded-2xl p-12 text-center flex flex-col items-center">
            <ShieldAlert className="w-10 h-10 text-red-500 mb-2" />
            <h4 className="text-sm font-black text-red-700">Unable to Fetch Inbound Replies</h4>
            <p className="text-xs text-red-500 font-semibold mt-1 max-w-md">{error}</p>
            <button
              onClick={() => fetchReplies(1)}
              className="mt-4 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-xl hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : replies.length === 0 ? (
          <div className="bg-white border border-slate-200/80 rounded-2xl p-16 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-3 border border-slate-100 text-slate-400">
              <Inbox className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-black text-slate-800">No Inbound Replies Found</h4>
            <p className="text-xs text-slate-400 font-semibold mt-1 max-w-sm">
              {searchQuery
                ? `No replies matched your query "${searchQuery}". Try changing or clearing your search filters.`
                : "When an accused or client replies to a notice via WhatsApp or Email, their response will appear here."}
            </p>
          </div>
        ) : (
          replies.map((reply) => {
            const isWhatsApp = reply.type === "whatsapp_reply";
            const isEmail = reply.type === "email_reply";
            const isClientSender = reply.metadata?.senderRole === "client";
            const isExpanded = expandedMessageIds.has(reply._id);

            const accusedName = reply.metadata?.accusedName || reply.caseName || "Borrower";
            const accusedPhone = reply.metadata?.accusedPhone || reply.metadata?.senderPhone || "";
            const accusedEmail = reply.metadata?.accusedEmail || (isEmail && !isClientSender ? reply.metadata?.senderEmail : "") || "";
            const loanId = reply.metadata?.loanId || "";
            const clientName = reply.metadata?.clientName || "Client";
            const clientEmail = reply.metadata?.clientEmail || "";
            const claimAmount = reply.metadata?.claimAmount || 0;

            const isLongMessage = (reply.description || "").length > 280 || (reply.description || "").split("\n").length > 4;

            return (
              <div
                key={reply._id}
                className={`bg-white rounded-2xl border transition-all duration-200 shadow-2xs hover:shadow-md p-4 sm:p-5 flex flex-col gap-3.5
                  ${isEmail
                    ? (isClientSender ? "border-purple-250 hover:border-purple-400" : "border-blue-250 hover:border-blue-400")
                    : "border-emerald-250 hover:border-emerald-400"}`}
              >
                {/* Top Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-2.5 border-b border-slate-100">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Channel Badge */}
                    {isWhatsApp ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-emerald-50 border border-emerald-200 text-emerald-800">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WHATSAPP CHAT</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-blue-50 border border-blue-200 text-blue-800">
                        <Mail className="w-3.5 h-3.5 text-blue-600" />
                        <span>INBOUND EMAIL</span>
                      </span>
                    )}

                    {/* Sender Classification Badge */}
                    {isClientSender ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-purple-100 text-purple-800 border border-purple-200">
                        <User className="w-3 h-3 text-purple-600" />
                        <span>Client Response ({clientName})</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-extrabold bg-red-50 text-red-800 border border-red-150">
                        <User className="w-3 h-3 text-red-600" />
                        <span>Accused Response ({accusedName})</span>
                      </span>
                    )}

                    {/* Case Link */}
                    {reply.caseId && (
                      <Link
                        href={`/authority/cases?id=${reply.caseId}`}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-700 hover:text-[#DC2626] bg-slate-50 hover:bg-red-50 px-2.5 py-1 rounded-lg border border-slate-200 hover:border-red-200 transition-colors"
                        title="Inspect full case file in Case Inspector"
                      >
                        <Hash className="w-3 h-3 text-slate-400" />
                        <span>{reply.caseId}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </Link>
                    )}

                    {claimAmount > 0 && (
                      <span className="text-[10.5px] font-black text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        Claim: ₹{claimAmount.toLocaleString("en-IN")}
                      </span>
                    )}
                  </div>

                  {/* Timestamp */}
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{formatDateTime(reply.date)}</span>
                  </div>
                </div>

                {/* Debtor & Victim Quick Contact Strip */}
                <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/70 flex flex-wrap items-center justify-between gap-2 select-text">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Accused Name Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-2xs">
                      <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Accused: <span className="font-extrabold text-slate-900">{accusedName}</span></span>
                    </div>

                    {/* Loan / Invoice ID Badge */}
                    {loanId && (
                      <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-900 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-2xs">
                        <Hash className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                        <span>Loan ID: <span className="font-extrabold text-indigo-700 tracking-wide">{loanId}</span></span>
                      </div>
                    )}

                    {/* Phone Badge */}
                    {accusedPhone && (
                      <a
                        href={`tel:${accusedPhone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250 text-emerald-900 text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer shadow-2xs"
                        title="Call Accused Phone"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{accusedPhone}</span>
                      </a>
                    )}

                    {/* Email Badge */}
                    {accusedEmail && (
                      <a
                        href={`mailto:${accusedEmail}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-250 text-blue-900 text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer shadow-2xs"
                        title="Email Accused"
                      >
                        <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate max-w-[200px]">{accusedEmail}</span>
                      </a>
                    )}

                    {/* Victim / Client Reference */}
                    <div className="inline-flex items-center gap-1 text-slate-500 text-[11px] font-semibold pl-1">
                      <span>Victim/Client:</span>
                      <span className="font-bold text-slate-800">{clientName}</span>
                      {clientEmail && <span className="text-slate-400 text-[10px]">({clientEmail})</span>}
                    </div>
                  </div>

                  {/* One-Click Copy Debtor Info Button */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => handleCopyAccusedInfo(reply, e)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer shadow-2xs border
                        ${copiedId === reply._id
                          ? "bg-emerald-600 border-emerald-700 text-white"
                          : "bg-slate-900 hover:bg-black border-slate-900 text-white active:scale-95"}`}
                      title="Copy Accused: Name Number Loan ID"
                    >
                      {copiedId === reply._id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                          <span>Copy Info</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setInspectReply(reply)}
                      className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 font-bold text-[11px] rounded-lg border border-slate-200 transition-colors"
                      title="Inspect Raw Metadata"
                    >
                      Inspect
                    </button>
                  </div>
                </div>

                {/* Email Subject Line (if available) */}
                {reply.metadata?.subject && (
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="text-slate-400 font-extrabold uppercase text-[10px]">Subject:</span>
                    <span className="text-slate-800">{reply.metadata.subject}</span>
                  </div>
                )}

                {/* Message Content Chat Box */}
                <div className="bg-slate-50/90 rounded-xl p-4 border border-slate-200/80 flex flex-col gap-2 relative">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 border-b border-slate-200/60 pb-1.5">
                    <span className="flex items-center gap-1.5 uppercase tracking-wider font-extrabold text-slate-600">
                      {isWhatsApp ? "💬 Incoming Message Body" : "✉️ Cleaned Inbound Text"}
                    </span>
                    <span className="font-mono text-slate-500">
                      {isWhatsApp ? reply.metadata?.senderPhone : reply.metadata?.senderEmail}
                    </span>
                  </div>

                  <p
                    className={`text-xs sm:text-[13px] font-medium font-sans leading-relaxed text-slate-800 whitespace-pre-line select-text
                      ${!isExpanded && isLongMessage ? "line-clamp-4" : ""}`}
                  >
                    {reply.description || "Empty message body"}
                  </p>

                  {/* Expand / Collapse toggle for long text */}
                  {isLongMessage && (
                    <button
                      onClick={(e) => toggleMessageExpand(reply._id, e)}
                      className="text-[11px] font-extrabold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 mt-1 cursor-pointer self-start"
                    >
                      {isExpanded ? (
                        <>Show less <ChevronUp className="w-3.5 h-3.5" /></>
                      ) : (
                        <>Show full message ({((reply.description || "").length)} chars) <ChevronDown className="w-3.5 h-3.5" /></>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ── 5. PAGINATION CONTROLS ── */}
      {!loading && totalPages > 1 && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
          <span className="text-xs font-bold text-slate-500">
            Showing <span className="text-slate-900 font-extrabold">{((currentPage - 1) * 20) + 1}</span> to{" "}
            <span className="text-slate-900 font-extrabold">{Math.min(currentPage * 20, totalCount)}</span> of{" "}
            <span className="text-slate-900 font-extrabold">{totalCount}</span> replies
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchReplies(currentPage - 1)}
              disabled={currentPage <= 1 || loading}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>

            <span className="text-xs font-extrabold text-slate-700 px-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => fetchReplies(currentPage + 1)}
              disabled={currentPage >= totalPages || loading}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── 6. INSPECT METADATA MODAL ── */}
      {inspectReply && (
        <div 
          onClick={() => setInspectReply(null)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Inbound Reply Metadata Inspector</h3>
                  <p className="text-xs text-slate-500 font-semibold">Notification ID: {inspectReply._id}</p>
                </div>
              </div>
              <button
                onClick={() => setInspectReply(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex flex-col gap-4 text-xs font-medium">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Case ID</span>
                  <p className="font-extrabold text-slate-900 mt-0.5">{inspectReply.caseId || "N/A"}</p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Channel Type</span>
                  <p className="font-extrabold text-slate-900 mt-0.5">{inspectReply.type}</p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Sender Role</span>
                  <p className="font-extrabold text-slate-900 mt-0.5">{inspectReply.metadata?.senderRole || "accused"}</p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Timestamp</span>
                  <p className="font-extrabold text-slate-900 mt-0.5">{formatDateTime(inspectReply.date)}</p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Message ID Key</span>
                  <p className="font-mono text-slate-700 mt-0.5 truncate">{inspectReply.metadata?.messageId || "N/A"}</p>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-slate-400">Loan / Invoice ID</span>
                  <p className="font-mono text-slate-700 mt-0.5">{inspectReply.metadata?.loanId || "N/A"}</p>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase text-slate-400">Full Raw Description</span>
                <div className="mt-1 p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-[11px] whitespace-pre-wrap max-h-60 overflow-y-auto">
                  {inspectReply.description}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <Link
                  href={`/authority/cases?id=${inspectReply.caseId}`}
                  target="_blank"
                  className="px-4 py-2 bg-[#DC2626] hover:bg-red-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <span>Open in Case Inspector</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setInspectReply(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Inbox,
  Star,
  Mail,
  MessageSquare,
  Archive,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
  Clock,
  Shield,
  Check,
  Copy,
  Printer,
  CheckCircle2,
  Loader2,
  FileText,
  Phone
} from "lucide-react";
import EmailBodyViewer, { getEmailSnippet, parseEmailContent } from "@/components/EmailBodyViewer";

interface ReplyMetadata {
  messageId?: string;
  senderEmail?: string;
  senderPhone?: string;
  senderRole?: string;
  senderDisplayName?: string;
  batchId?: string;
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
  representeeId?: string;
}

interface ReplyItem {
  _id: string;
  userId?: string;
  caseId?: string;
  caseName?: string;
  type: "email_reply" | "whatsapp_reply";
  title?: string;
  description?: string;
  date: string;
  isRead?: boolean;
  metadata?: ReplyMetadata;
}

export default function ScopedRepresentationRepliesPage() {
  const params = useParams();
  const router = useRouter();
  const repId = String(params?.repId || "");
  const isDirect = repId === "direct";

  const [representee, setRepresentee] = useState<any>(null);
  const [replies, setReplies] = useState<ReplyItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFolder, setActiveFolder] = useState<
    "inbox" | "starred" | "email" | "whatsapp" | "trash"
  >("inbox");

  // Selection & Interactivity
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [starredIds, setStarredIds] = useState<Set<string>>(new Set());
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const [trashedIds, setTrashedIds] = useState<Set<string>>(new Set());

  // Reading Pane (Thread View)
  const [selectedReply, setSelectedReply] = useState<ReplyItem | null>(null);

  const [copiedText, setCopiedText] = useState(false);

  // Load stored preferences (stars / read items)
  useEffect(() => {
    try {
      const storedStars = localStorage.getItem(`ama_rep_stars_${repId}`);
      if (storedStars) setStarredIds(new Set(JSON.parse(storedStars)));

      const storedReads = localStorage.getItem(`ama_rep_reads_${repId}`);
      if (storedReads) setReadIds(new Set(JSON.parse(storedReads)));
    } catch (e) {}
  }, [repId]);

  const saveStars = (newStars: Set<string>) => {
    setStarredIds(newStars);
    try {
      localStorage.setItem(`ama_rep_stars_${repId}`, JSON.stringify(Array.from(newStars)));
    } catch (e) {}
  };

  const saveReads = (newReads: Set<string>) => {
    setReadIds(newReads);
    try {
      localStorage.setItem(`ama_rep_reads_${repId}`, JSON.stringify(Array.from(newReads)));
    } catch (e) {}
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

      const repliesRes = await fetch(
        `/api/admin/replies?workspace=ama&representeeId=${repId}&type=list&limit=100&_t=${Date.now()}`
      );
      if (repliesRes.ok) {
        const repliesData = await repliesRes.json();
        if (repliesData.success && repliesData.data) {
          setReplies(repliesData.data);
        }
      }
    } catch (err) {
      console.error("Failed to load replies:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (repId) {
      fetchData();
    }
  }, [repId]);

  // Folder Counts
  const counts = useMemo(() => {
    const validReplies = replies.filter((r) => !trashedIds.has(r._id));
    return {
      inbox: validReplies.length,
      starred: validReplies.filter((r) => starredIds.has(r._id)).length,
      email: validReplies.filter((r) => r.type === "email_reply").length,
      whatsapp: validReplies.filter((r) => r.type === "whatsapp_reply").length,
      trash: trashedIds.size
    };
  }, [replies, starredIds, trashedIds]);

  // Filtered List
  const filteredReplies = useMemo(() => {
    return replies.filter((r) => {
      const isTrashed = trashedIds.has(r._id);
      if (activeFolder === "trash") {
        return isTrashed;
      }
      if (isTrashed) return false;

      // Filter
      if (activeFolder === "starred" && !starredIds.has(r._id)) return false;
      if (activeFolder === "email" && r.type !== "email_reply") return false;
      if (activeFolder === "whatsapp" && r.type !== "whatsapp_reply") return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesCase = (r.caseName || "").toLowerCase().includes(q);
        const matchesSender = (
          r.metadata?.senderDisplayName ||
          r.metadata?.senderEmail ||
          r.metadata?.senderPhone ||
          ""
        )
          .toLowerCase()
          .includes(q);
        const cleanDesc = getEmailSnippet(r.description || r.title || "", 500).toLowerCase();
        const matchesDesc = cleanDesc.includes(q);
        const matchesLoan = (r.metadata?.loanId || "").toLowerCase().includes(q);
        return matchesCase || matchesSender || matchesDesc || matchesLoan;
      }

      return true;
    });
  }, [replies, activeFolder, starredIds, trashedIds, searchQuery]);

  // Star Toggle
  const toggleStar = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = new Set(starredIds);
    if (updated.has(id)) {
      updated.delete(id);
    } else {
      updated.add(id);
    }
    saveStars(updated);
  };

  // Selection Toggles
  const toggleSelectOne = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredReplies.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredReplies.map((r) => r._id));
    }
  };

  // Batch Actions
  const handleMarkAsRead = (isRead: boolean) => {
    const updated = new Set(readIds);
    selectedIds.forEach((id) => {
      if (isRead) updated.add(id);
      else updated.delete(id);
    });
    saveReads(updated);
    setSelectedIds([]);
  };

  const handleBatchStar = (isStarred: boolean) => {
    const updated = new Set(starredIds);
    selectedIds.forEach((id) => {
      if (isStarred) updated.add(id);
      else updated.delete(id);
    });
    saveStars(updated);
    setSelectedIds([]);
  };

  const handleBatchTrash = () => {
    const updated = new Set(trashedIds);
    selectedIds.forEach((id) => updated.add(id));
    setTrashedIds(updated);
    setSelectedIds([]);
    if (selectedReply && selectedIds.includes(selectedReply._id)) {
      setSelectedReply(null);
    }
  };

  // Open a message in thread view
  const openReply = (r: ReplyItem) => {
    setSelectedReply(r);
    if (!readIds.has(r._id)) {
      const updated = new Set(readIds);
      updated.add(r._id);
      saveReads(updated);
    }
  };

  // Next / Previous navigation in thread view
  const currentIdx = selectedReply ? filteredReplies.findIndex((r) => r._id === selectedReply._id) : -1;
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx >= 0 && currentIdx < filteredReplies.length - 1;

  const goToPrev = () => {
    if (hasPrev) openReply(filteredReplies[currentIdx - 1]);
  };

  const goToNext = () => {
    if (hasNext) openReply(filteredReplies[currentIdx + 1]);
  };

  // Date Formatter
  const formatListDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    const now = new Date();
    const isToday =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear();

    if (isToday) {
      return d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });
    }
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  };



  return (
    <div className="space-y-6 select-none text-left w-full">
      {/* ── BREADCRUMB (NO TOP NAVIGATION TABS) ── */}
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
        <span className="text-slate-900 font-bold">Inbound Replies</span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* ── FULL WIDTH GMAIL CLIENT CONTAINER (NO SIDEBAR, MAILS IN ROWS) ── */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="bg-white border border-slate-200/90 rounded-3xl shadow-xs overflow-hidden flex flex-col min-h-[750px] w-full">
        
        {/* ── TOP SEARCH & QUICK CATEGORY FILTER BAR ── */}
        <div className="p-4 sm:px-6 sm:py-4 bg-white border-b border-slate-200 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <div className="flex items-center bg-[#F8F9FA] hover:bg-[#F3F4F6] focus-within:bg-white focus-within:shadow-md focus-within:ring-2 focus-within:ring-[#DC2626]/20 rounded-full px-4 py-2.5 transition-all border border-slate-200/80 focus-within:border-[#DC2626]">
              <Search className="w-4 h-4 text-slate-400 shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search replies (debtor, phone, email, case)..."
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 hover:bg-slate-200 text-slate-400 hover:text-slate-700 rounded-full ml-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <button
              onClick={() => {
                setActiveFolder("inbox");
                setSelectedReply(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFolder === "inbox"
                  ? "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Inbox className="w-3.5 h-3.5" />
              <span>All ({counts.inbox})</span>
            </button>

            <button
              onClick={() => {
                setActiveFolder("starred");
                setSelectedReply(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFolder === "starred"
                  ? "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${activeFolder === "starred" ? "text-white fill-white" : "text-amber-500 fill-amber-500"}`} />
              <span>Starred ({counts.starred})</span>
            </button>

            <button
              onClick={() => {
                setActiveFolder("email");
                setSelectedReply(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFolder === "email"
                  ? "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <Mail className={`w-3.5 h-3.5 ${activeFolder === "email" ? "text-white" : "text-blue-600"}`} />
              <span>Email ({counts.email})</span>
            </button>

            <button
              onClick={() => {
                setActiveFolder("whatsapp");
                setSelectedReply(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                activeFolder === "whatsapp"
                  ? "bg-[#DC2626] text-white shadow-[0_4px_12px_rgba(220,38,38,0.2)]"
                  : "bg-slate-100/80 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <MessageSquare className={`w-3.5 h-3.5 ${activeFolder === "whatsapp" ? "text-white" : "text-emerald-600"}`} />
              <span>WhatsApp ({counts.whatsapp})</span>
            </button>

            <button
              onClick={fetchData}
              disabled={isLoading}
              title="Refresh Mailbox"
              className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer shrink-0 ml-1"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-[#DC2626]" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── FULL WIDTH MAILS VIEW OR THREAD VIEW ── */}
        <div className="flex-1 bg-white flex flex-col min-w-0 w-full">
          {selectedReply ? (
            /* ──────────────────────────────────────────────────────────── */
            /* FULL WIDTH THREAD READING VIEW */
            /* ──────────────────────────────────────────────────────────── */
            <div className="flex-1 flex flex-col overflow-y-auto w-full">
              {/* Top Thread Toolbar */}
              <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between gap-2 sticky top-0 bg-white z-10">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedReply(null)}
                    title="Back to inbox"
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer flex items-center gap-1 font-bold text-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Mails</span>
                  </button>

                  <div className="h-4 w-px bg-slate-200 mx-1"></div>

                  <button
                    onClick={() => {
                      const updated = new Set(trashedIds);
                      updated.add(selectedReply._id);
                      setTrashedIds(updated);
                      setSelectedReply(null);
                    }}
                    title="Delete"
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => toggleStar(e, selectedReply._id)}
                    title={starredIds.has(selectedReply._id) ? "Unstar" : "Star"}
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                  >
                    <Star
                      className={`w-4 h-4 ${
                        starredIds.has(selectedReply._id)
                          ? "text-amber-500 fill-amber-500"
                          : "text-slate-400"
                      }`}
                    />
                  </button>

                  <button
                    onClick={() => {
                      const updated = new Set(readIds);
                      updated.delete(selectedReply._id);
                      saveReads(updated);
                      setSelectedReply(null);
                    }}
                    title="Mark as unread"
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => window.print()}
                    title="Print thread"
                    className="p-2 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>

                {/* Pager */}
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>
                    {currentIdx + 1} of {filteredReplies.length}
                  </span>
                  <div className="flex items-center">
                    <button
                      onClick={goToPrev}
                      disabled={!hasPrev}
                      className="p-1.5 hover:bg-slate-100 disabled:opacity-30 rounded-full cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goToNext}
                      disabled={!hasNext}
                      className="p-1.5 hover:bg-slate-100 disabled:opacity-30 rounded-full cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Thread Content */}
              <div className="p-6 md:p-8 space-y-6 max-w-5xl w-full">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      {selectedReply.metadata?.subject ||
                        `Re: Legal Notice — ${selectedReply.caseName || "Recovery Case"}`}
                    </h2>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {selectedReply.type === "whatsapp_reply" && (
                        <span className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Case Context Ribbon */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-slate-900">
                            {selectedReply.caseName || "Recovery Case"}
                          </span>
                          {selectedReply.metadata?.loanId && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold">
                              {selectedReply.metadata.loanId}
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2">
                          <span>Claim: ₹{Number(selectedReply.metadata?.claimAmount || 0).toLocaleString("en-IN")}</span>
                          <span>•</span>
                          <span>Client: {representee?.name || selectedReply.metadata?.clientName || "AMA"}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/authority/ama-cases/${repId}/cases?search=${encodeURIComponent(selectedReply.caseName || "")}`}
                      className="px-3.5 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5 shrink-0 self-start sm:self-auto transition-colors"
                    >
                      <span>Open Case File</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </Link>
                  </div>
                </div>

                {/* Message Box */}
                <div className="border border-slate-200/90 rounded-2xl p-5 sm:p-6 bg-white shadow-xs space-y-4">
                  <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm uppercase shrink-0">
                        {(
                          selectedReply.metadata?.senderDisplayName ||
                          selectedReply.caseName ||
                          "D"
                        ).charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-black text-slate-900">
                            {selectedReply.metadata?.senderDisplayName ||
                              selectedReply.caseName ||
                              "Defaulter / Borrower"}
                          </span>
                          <span className="text-xs text-slate-500">
                            &lt;
                            {selectedReply.metadata?.senderEmail ||
                              selectedReply.metadata?.senderPhone ||
                              "noreply@defaulter.in"}
                            &gt;
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <span>to</span>
                          <span className="font-semibold text-slate-700">Legal Recovery Operations</span>
                          <span className="text-slate-400">&lt;notice@amalegalsolutions.com&gt;</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right text-xs text-slate-400 shrink-0">
                      <div>
                        {selectedReply.date
                          ? new Date(selectedReply.date).toLocaleString("en-IN", {
                              dateStyle: "medium",
                              timeStyle: "short"
                            })
                          : ""}
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <EmailBodyViewer content={selectedReply.description || selectedReply.title || ""} />
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-slate-400" />
                      <span>Security: Verified via Advocate Inbound Gateway (TLS 1.3)</span>
                    </div>
                    <button
                      onClick={() => {
                        const cleanToCopy = parseEmailContent(
                          selectedReply.description || selectedReply.title || ""
                        ).plainText;
                        navigator.clipboard.writeText(cleanToCopy);
                        setCopiedText(true);
                        setTimeout(() => setCopiedText(false), 2000);
                      }}
                      className="flex items-center gap-1 text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
                    >
                      {copiedText ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedText ? "Copied" : "Copy Text"}</span>
                    </button>
                  </div>
                </div>


              </div>
            </div>
          ) : (
            /* ──────────────────────────────────────────────────────────── */
            /* FULL WIDTH MAILS LIST IN ROWS */
            /* ──────────────────────────────────────────────────────────── */
            <div className="flex-1 flex flex-col min-w-0 w-full">
              {/* Batch Action Toolbar */}
              <div className="px-5 py-2.5 border-b border-slate-200 flex items-center justify-between gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={
                      filteredReplies.length > 0 &&
                      selectedIds.length === filteredReplies.length
                    }
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                  />

                  {selectedIds.length > 0 ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleBatchTrash()}
                        title="Delete selected"
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4 text-rose-500" />
                      </button>
                      <button
                        onClick={() => handleMarkAsRead(true)}
                        title="Mark as read"
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 cursor-pointer"
                      >
                        <Mail className="w-4 h-4 text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleBatchStar(true)}
                        title="Add star"
                        className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-600 cursor-pointer"
                      >
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      </button>
                      <span className="text-xs font-semibold text-slate-600 ml-1">
                        {selectedIds.length} selected
                      </span>
                    </div>
                  ) : (
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {activeFolder === "starred"
                        ? "Starred Replies"
                        : activeFolder === "email"
                        ? "Email Direct Replies"
                        : activeFolder === "whatsapp"
                        ? "WhatsApp Direct Replies"
                        : "All Debtor Communications"}
                    </span>
                  )}
                </div>

                {/* Counter */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>
                    {filteredReplies.length === 0
                      ? "0 of 0"
                      : `1–${filteredReplies.length} of ${filteredReplies.length}`}
                  </span>
                </div>
              </div>

              {/* Mails Rows List */}
              <div className="flex-1 overflow-y-auto divide-y divide-slate-100 w-full">
                {isLoading ? (
                  <div className="p-20 flex flex-col items-center justify-center gap-3">
                    <Loader2 className="w-8 h-8 text-[#DC2626] animate-spin" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Loading Communications...
                    </span>
                  </div>
                ) : filteredReplies.length === 0 ? (
                  <div className="p-20 text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
                      <Inbox className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800">
                      No communication records found
                    </h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      Inbound debtor replies will automatically appear here in rows.
                    </p>
                  </div>
                ) : (
                  filteredReplies.map((r) => {
                    const isSelected = selectedIds.includes(r._id);
                    const isStarred = starredIds.has(r._id);
                    const isRead = readIds.has(r._id);
                    const isEmail = r.type === "email_reply";
                    const senderName =
                      r.metadata?.senderDisplayName ||
                      r.metadata?.accusedName ||
                      r.caseName ||
                      "Debtor";
                    const snippet = getEmailSnippet(r.description || r.title || "", 120);

                    return (
                      <div
                        key={r._id}
                        onClick={() => openReply(r)}
                        className={`group flex items-center px-5 py-3.5 hover:bg-[#f2f6fc] transition-all cursor-pointer select-none text-xs w-full ${
                          !isRead ? "bg-white font-bold" : "bg-[#f8fafd] text-slate-600 font-normal"
                        } ${isSelected ? "bg-[#c2e7ff]/30" : ""}`}
                      >
                        {/* Checkbox & Star */}
                        <div className="flex items-center gap-3 shrink-0 mr-4">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onClick={(e) => toggleSelectOne(e, r._id)}
                            onChange={() => {}}
                            className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer"
                          />
                          <button
                            onClick={(e) => toggleStar(e, r._id)}
                            className="p-1 hover:bg-slate-200/70 rounded-full cursor-pointer text-slate-400 hover:text-amber-500"
                          >
                            <Star
                              className={`w-4 h-4 ${
                                isStarred
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-slate-300 group-hover:text-slate-400"
                              }`}
                            />
                          </button>
                        </div>

                        {/* Channel Badge (Only show WhatsApp; email tag removed) */}
                        {!isEmail && (
                          <div className="shrink-0 mr-4">
                            <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </span>
                          </div>
                        )}

                        {/* Sender Column */}
                        <div className="w-48 sm:w-56 shrink-0 truncate pr-4">
                          <span
                            className={`truncate text-xs ${
                              !isRead ? "font-black text-slate-900" : "font-semibold text-slate-700"
                            }`}
                          >
                            {senderName}
                          </span>
                          {(r.metadata?.senderEmail || r.metadata?.senderPhone) && (
                            <span className="block text-[10px] text-slate-400 truncate">
                              {r.metadata?.senderEmail || r.metadata?.senderPhone}
                            </span>
                          )}
                        </div>

                        {/* Subject & Snippet */}
                        <div className="flex-1 truncate pr-6">
                          <span className={`${!isRead ? "text-slate-900 font-black" : "text-slate-800 font-bold"}`}>
                            {r.caseName || "Legal Notice Case"}
                          </span>
                          <span className="text-slate-400 mx-2">—</span>
                          <span className="text-slate-500 truncate font-normal">
                            {snippet}
                          </span>
                        </div>



                        {/* Date or Quick Hover Actions */}
                        <div className="shrink-0 text-right min-w-[85px]">
                          <span className="group-hover:hidden text-[11px] text-slate-400 font-medium">
                            {formatListDate(r.date)}
                          </span>
                          <div className="hidden group-hover:flex items-center justify-end gap-1.5 text-slate-500">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const updated = new Set(trashedIds);
                                updated.add(r._id);
                                setTrashedIds(updated);
                              }}
                              title="Delete"
                              className="p-1 hover:bg-slate-200 rounded-full cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const updated = new Set(readIds);
                                if (isRead) updated.delete(r._id);
                                else updated.add(r._id);
                                saveReads(updated);
                              }}
                              title={isRead ? "Mark unread" : "Mark read"}
                              className="p-1 hover:bg-slate-200 rounded-full cursor-pointer"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

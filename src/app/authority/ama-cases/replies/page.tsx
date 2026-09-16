"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Inbox,
  Star,
  Mail,
  MessageSquare,
  AlertCircle,
  IndianRupee,
  Archive,
  Trash2,
  RefreshCw,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Pencil,
  ExternalLink,
  Clock,
  Shield,
  Check,
  Copy,
  Printer,
  CheckCircle2,
  Loader2,
  FileText,
  Building2,
  Layers
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

export default function GlobalGmailRepliesPage() {
  const [representees, setRepresentees] = useState<any[]>([]);
  const [replies, setReplies] = useState<ReplyItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search & Navigation
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRepFilter, setSelectedRepFilter] = useState("all");
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

  // Load stored preferences
  useEffect(() => {
    try {
      const storedStars = localStorage.getItem("ama_global_stars");
      if (storedStars) setStarredIds(new Set(JSON.parse(storedStars)));

      const storedReads = localStorage.getItem("ama_global_reads");
      if (storedReads) setReadIds(new Set(JSON.parse(storedReads)));
    } catch (e) {}
  }, []);

  const saveStars = (newStars: Set<string>) => {
    setStarredIds(newStars);
    try {
      localStorage.setItem("ama_global_stars", JSON.stringify(Array.from(newStars)));
    } catch (e) {}
  };

  const saveReads = (newReads: Set<string>) => {
    setReadIds(newReads);
    try {
      localStorage.setItem("ama_global_reads", JSON.stringify(Array.from(newReads)));
    } catch (e) {}
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [repRes, repliesRes] = await Promise.all([
        fetch(`/api/representees?_t=${Date.now()}`),
        fetch(`/api/admin/replies?workspace=ama&type=list&limit=100&_t=${Date.now()}`)
      ]);

      if (repRes.ok) {
        const repData = await repRes.json();
        if (repData.success && repData.data) {
          setRepresentees(repData.data);
        }
      }

      if (repliesRes.ok) {
        const repliesData = await repliesRes.json();
        if (repliesData.success && repliesData.data) {
          setReplies(repliesData.data);
        }
      }
    } catch (err) {
      console.error("Failed to load global replies:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      if (activeFolder === "trash") return isTrashed;
      if (isTrashed) return false;

      // Representee filter
      if (selectedRepFilter !== "all") {
        if (selectedRepFilter === "direct") {
          if (r.metadata?.representeeId) return false;
        } else {
          if (String(r.metadata?.representeeId) !== String(selectedRepFilter)) return false;
        }
      }

      // Folder filtering
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
        const matchesDesc = (r.description || r.title || "").toLowerCase().includes(q);
        return matchesCase || matchesSender || matchesDesc;
      }

      return true;
    });
  }, [replies, activeFolder, selectedRepFilter, starredIds, trashedIds, searchQuery]);

  const toggleStar = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const updated = new Set(starredIds);
    if (updated.has(id)) updated.delete(id);
    else updated.add(id);
    saveStars(updated);
  };

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

  const openReply = (r: ReplyItem) => {
    setSelectedReply(r);
    if (!readIds.has(r._id)) {
      const updated = new Set(readIds);
      updated.add(r._id);
      saveReads(updated);
    }
  };

  const currentIdx = selectedReply ? filteredReplies.findIndex((r) => r._id === selectedReply._id) : -1;
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx >= 0 && currentIdx < filteredReplies.length - 1;

  const goToPrev = () => {
    if (hasPrev) openReply(filteredReplies[currentIdx - 1]);
  };

  const goToNext = () => {
    if (hasNext) openReply(filteredReplies[currentIdx + 1]);
  };

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
      {/* ── BREADCRUMB ── */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link href="/authority/ama-cases" className="hover:text-slate-900 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Representation Folders</span>
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-bold">All Debtor Inbound Replies</span>
      </div>

      {/* ── GMAIL SHELL ── */}
      <div className="bg-[#f6f8fc] border border-slate-200/90 rounded-3xl shadow-xs overflow-hidden flex flex-col min-h-[780px] w-full">
        {/* Gmail Top Bar */}
        <div className="px-5 py-3.5 bg-white border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative w-full sm:max-w-xl">
            <div className="flex items-center bg-[#edf2fa] hover:bg-[#e4ebf5] focus-within:bg-white focus-within:shadow-md focus-within:ring-2 focus-within:ring-blue-500/20 rounded-full px-4 py-2.5 transition-all border border-transparent focus-within:border-blue-400">
              <Search className="w-4 h-4 text-slate-500 shrink-0 mr-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all client replies (debtor, email, phone)..."
                className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 hover:bg-slate-200 text-slate-400 hover:text-slate-700 rounded-full ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Representation Selector & Refresh */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <select
              value={selectedRepFilter}
              onChange={(e) => setSelectedRepFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="all">All Representations</option>
              <option value="direct">Direct AMA Claims</option>
              {representees.map((rep) => (
                <option key={rep._id || rep.id} value={rep._id || rep.id}>
                  {rep.name}
                </option>
              ))}
            </select>

            <button
              onClick={fetchData}
              disabled={isLoading}
              title="Refresh Mailbox"
              className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin text-[#DC2626]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Gmail Main Body */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-full md:w-60 lg:w-64 bg-slate-50 p-3 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between shrink-0">
            <div className="space-y-1">
              <div className="mb-4 px-1">
                <button
                  onClick={() => {
                    if (filteredReplies.length > 0) openReply(filteredReplies[0]);
                  }}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-2xl flex items-center gap-3 shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all cursor-pointer"
                >
                  <Pencil className="w-4 h-4 text-white" />
                  <span>Quick Response</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setActiveFolder("inbox");
                  setSelectedReply(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === "inbox"
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Inbox className={`w-4 h-4 ${activeFolder === "inbox" ? "text-white" : "text-slate-600"}`} />
                  <span>Inbox</span>
                </div>
                {counts.inbox > 0 && (
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${activeFolder === "inbox" ? "bg-white/20 text-white" : "bg-blue-100 text-blue-800"}`}>
                    {counts.inbox}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveFolder("starred");
                  setSelectedReply(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === "starred"
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Star className={`w-4 h-4 ${activeFolder === "starred" ? "text-white fill-white" : "text-amber-500 fill-amber-500"}`} />
                  <span>Starred</span>
                </div>
                {counts.starred > 0 && (
                  <span className={`text-[11px] font-bold ${activeFolder === "starred" ? "text-white/80" : "text-slate-500"}`}>{counts.starred}</span>
                )}
              </button>

              <button
                onClick={() => {
                  setActiveFolder("email");
                  setSelectedReply(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === "email"
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Mail className={`w-4 h-4 ${activeFolder === "email" ? "text-white" : "text-blue-600"}`} />
                  <span>Email Inbound</span>
                </div>
                <span className={`text-[11px] font-bold ${activeFolder === "email" ? "text-white/80" : "text-slate-500"}`}>{counts.email}</span>
              </button>

              <button
                onClick={() => {
                  setActiveFolder("whatsapp");
                  setSelectedReply(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === "whatsapp"
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className={`w-4 h-4 ${activeFolder === "whatsapp" ? "text-white" : "text-emerald-600"}`} />
                  <span>WhatsApp Inbound</span>
                </div>
                <span className={`text-[11px] font-bold ${activeFolder === "whatsapp" ? "text-white/80" : "text-slate-500"}`}>{counts.whatsapp}</span>
              </button>

              <button
                onClick={() => {
                  setActiveFolder("trash");
                  setSelectedReply(null);
                }}
                className={`w-full flex items-center justify-between px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFolder === "trash"
                    ? "bg-[#DC2626] text-white font-bold shadow-xs"
                    : "text-slate-700 hover:bg-slate-200/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Trash2 className={`w-4 h-4 ${activeFolder === "trash" ? "text-white" : "text-slate-500"}`} />
                  <span>Trash</span>
                </div>
                {counts.trash > 0 && (
                  <span className={`text-[10px] font-bold ${activeFolder === "trash" ? "text-white/80" : "text-slate-400"}`}>{counts.trash}</span>
                )}
              </button>
            </div>

            <div className="mt-6 p-3 bg-white/70 rounded-2xl border border-slate-200/70 text-[11px] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <Shield className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>Advocate Secure Thread</span>
              </div>
              <p className="text-slate-500 leading-tight text-[10px]">
                Inbound replies are matched to debtor records and logged under the Case Escalation Matrix.
              </p>
            </div>
          </div>

          {/* Right Pane */}
          <div className="flex-1 bg-white flex flex-col min-w-0">
            {selectedReply ? (
              /* Thread View */
              <div className="flex-1 flex flex-col overflow-y-auto">
                <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between gap-2 sticky top-0 bg-white z-10">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedReply(null)}
                      title="Back to inbox"
                      className="p-2 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div className="h-4 w-px bg-slate-200 mx-1"></div>
                    <button
                      onClick={() => {
                        const updated = new Set(trashedIds);
                        updated.add(selectedReply._id);
                        setTrashedIds(updated);
                        setSelectedReply(null);
                      }}
                      title="Delete / Move to Trash"
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

                <div className="p-6 md:p-8 space-y-6 max-w-4xl">
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
                  </div>

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
                        {selectedReply.date
                          ? new Date(selectedReply.date).toLocaleString("en-IN", {
                              dateStyle: "medium",
                              timeStyle: "short"
                            })
                          : ""}
                      </div>
                    </div>

                    <div className="py-2">
                      <EmailBodyViewer content={selectedReply.description || selectedReply.title || ""} />
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-slate-400" />
                        <span>Security: Verified via Advocate Inbound Gateway</span>
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
              /* List View */
              <div className="flex-1 flex flex-col min-w-0">
                <div className="px-4 py-2 border-b border-slate-200 flex items-center justify-between gap-3 bg-white">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={
                        filteredReplies.length > 0 &&
                        selectedIds.length === filteredReplies.length
                      }
                      onChange={toggleSelectAll}
                      className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500 cursor-pointer ml-1"
                    />

                    {selectedIds.length > 0 ? (
                      <div className="flex items-center gap-1.5 ml-2">
                        <button
                          onClick={() => handleBatchTrash()}
                          title="Delete selected"
                          className="p-1.5 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleMarkAsRead(true)}
                          title="Mark as read"
                          className="p-1.5 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleBatchStar(true)}
                          title="Add star"
                          className="p-1.5 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                        >
                          <Star className="w-4 h-4 text-amber-500" />
                        </button>
                        <span className="text-xs font-semibold text-slate-500 ml-2">
                          {selectedIds.length} selected
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 ml-2">
                        <button
                          onClick={fetchData}
                          title="Refresh"
                          className="p-1.5 hover:bg-slate-100 rounded-full text-slate-600 cursor-pointer"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>
                      {filteredReplies.length === 0
                        ? "0–0 of 0"
                        : `1–${filteredReplies.length} of ${filteredReplies.length}`}
                    </span>
                    <div className="flex items-center">
                      <button disabled className="p-1 hover:bg-slate-100 disabled:opacity-30 rounded-full cursor-pointer">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button disabled className="p-1 hover:bg-slate-100 disabled:opacity-30 rounded-full cursor-pointer">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>



                <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                  {isLoading ? (
                    <div className="p-20 flex flex-col items-center justify-center gap-3">
                      <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Syncing Representation Mailbox...
                      </span>
                    </div>
                  ) : filteredReplies.length === 0 ? (
                    <div className="p-20 text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-2">
                        <Inbox className="w-6 h-6" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-800">
                        {activeFolder === "starred"
                          ? "No starred messages"
                          : activeFolder === "trash"
                          ? "Trash is empty"
                          : "No inbound replies found"}
                      </h4>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Debtor replies sent via WhatsApp or formal email notices will sync and appear here in real-time.
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
                          className={`group flex items-center px-4 py-3 hover:bg-[#f2f6fc] transition-all cursor-pointer select-none text-xs ${
                            !isRead ? "bg-white font-bold" : "bg-[#f8fafd] text-slate-600 font-normal"
                          } ${isSelected ? "bg-[#c2e7ff]/30" : ""}`}
                        >
                          <div className="flex items-center gap-3 shrink-0 mr-3">
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

                          {!isEmail && (
                            <div className="shrink-0 mr-3">
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                <MessageSquare className="w-2.5 h-2.5" />
                                <span>WA</span>
                              </span>
                            </div>
                          )}

                          <div className="w-40 sm:w-48 shrink-0 truncate pr-3">
                            <span
                              className={`truncate ${
                                !isRead ? "font-black text-slate-900" : "font-semibold text-slate-700"
                              }`}
                            >
                              {senderName}
                            </span>
                          </div>

                          <div className="flex-1 truncate pr-4">
                            <span className={`${!isRead ? "text-slate-900 font-bold" : "text-slate-800"}`}>
                              {r.caseName || "Legal Notice Case"}
                            </span>
                            <span className="text-slate-400 mx-1.5">—</span>
                            <span className="text-slate-500 truncate font-normal">{snippet}</span>
                          </div>



                          <div className="shrink-0 text-right min-w-[75px]">
                            <span className="group-hover:hidden text-[11px] text-slate-400 font-medium">
                              {formatListDate(r.date)}
                            </span>
                            <div className="hidden group-hover:flex items-center justify-end gap-1 text-slate-500">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const updated = new Set(trashedIds);
                                  updated.add(r._id);
                                  setTrashedIds(updated);
                                }}
                                title="Trash"
                                className="p-1 hover:bg-slate-200 rounded-full"
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
                                className="p-1 hover:bg-slate-200 rounded-full"
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
    </div>
  );
}

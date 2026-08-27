"use client";

import React, { useState, useEffect } from "react";
import { 
  Bell, 
  CheckCircle2, 
  Info, 
  Clock, 
  ShieldAlert, 
  ExternalLink,
  MessageSquare,
  Mail,
  Trash2,
  Check,
  ChevronDown,
  ChevronUp,
  Loader2,
  User,
  Phone,
  Hash,
  Building2
} from "lucide-react";

export default function NotificationsLog() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isSpecialUser, setIsSpecialUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedReplyId, setExpandedReplyId] = useState<string | null>(null);

  // Fetch notifications from the backend MongoDB API
  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/notifications");
      if (!res.ok) {
        throw new Error("Failed to fetch notification feed.");
      }
      const data = await res.json();
      setNotifications(data.notifications || []);
      if (data.isSpecialUser !== undefined) {
        setIsSpecialUser(!!data.isSpecialUser);
      }
      setError(null);
    } catch (err: any) {
      console.error("Notifications fetch error:", err);
      setError(err.message || "Unable to load notifications.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();

    // Verify special user status from profile
    fetch("/api/users/profile")
      .then(res => res.json())
      .then(data => {
        if (data.success && data.profile?.phone) {
          const clean = data.profile.phone.replace(/\D/g, "");
          if (clean.endsWith("8700343611") || clean.endsWith("8130104447")) {
            setIsSpecialUser(true);
          }
        }
      })
      .catch(() => {});
  }, []);

  // Mark single notification as read in database
  const handleMarkAsRead = async (id: string) => {
    try {
      const res = await fetch("/api/notifications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notificationId: id })
      });
      if (res.ok) {
        setNotifications(prev => 
          prev.map(n => n._id === id ? { ...n, isRead: true } : n)
        );
      }
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  // Mark all unread notifications as read
  const handleMarkAllRead = async () => {
    try {
      const res = await fetch("/api/notifications", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ markAll: true })
      });
      if (res.ok) {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      }
    } catch (err) {
      console.error("Error marking all read:", err);
    }
  };

  // Delete single notification from database
  const handleDeleteNotification = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click triggers
    try {
      const res = await fetch(`/api/notifications?id=${id}`, {
        method: "DELETE"
      });
      if (res.ok) {
        setNotifications(prev => prev.filter(n => n._id !== id));
        if (expandedReplyId === id) setExpandedReplyId(null);
      }
    } catch (err) {
      console.error("Error deleting notification:", err);
    }
  };

  // Clear all notifications for the user
  const handleClearNotifications = async () => {
    if (!confirm("Clear all notifications permanently from your dashboard log?")) {
      return;
    }
    try {
      const res = await fetch("/api/notifications?clearAll=true", {
        method: "DELETE"
      });
      if (res.ok) {
        setNotifications([]);
        setExpandedReplyId(null);
      }
    } catch (err) {
      console.error("Error clearing notifications:", err);
    }
  };

  const toggleExpandReply = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedReplyId(prev => prev === id ? null : id);
    handleMarkAsRead(id);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-left border-b border-[#E5E7EB]/50 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Notifications & Activity Log</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1 font-sans">
            Track notice dispatch receipts and WhatsApp messaging delivery status in real time.
          </p>
        </div>

        {notifications.length > 0 && (
          <div className="flex items-center gap-2 self-start sm:self-center">
            {notifications.some(n => !n.isRead) && (
              <button
                onClick={handleMarkAllRead}
                className="px-4 py-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-250 hover:border-emerald-300 rounded-xl transition-all cursor-pointer focus:outline-none flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" /> Mark all read
              </button>
            )}
            
            <button
              onClick={handleClearNotifications}
              className="px-4 py-2 text-xs font-bold text-slate-550 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl transition-all cursor-pointer focus:outline-none flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Logs
            </button>
          </div>
        )}
      </div>

      {/* Main Feed Container */}
      <div className="max-w-3xl w-full flex flex-col gap-4 text-left">
        {loading ? (
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-16 text-center flex flex-col items-center">
            <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
            <p className="text-xs text-slate-400 font-semibold mt-2 font-sans">
              Loading live database notification logs...
            </p>
          </div>
        ) : error ? (
          <div className="bg-white border border-red-100 rounded-3xl p-12 text-center flex flex-col items-center">
            <ShieldAlert className="w-10 h-10 text-red-500 mb-2" />
            <h4 className="text-sm font-black text-red-700">Unable to Fetch Notifications</h4>
            <p className="text-xs text-red-400 font-semibold mt-1">
              {error}
            </p>
          </div>
        ) : notifications.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-12 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-3">
              <Bell className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="text-sm font-black text-slate-700">No New Notifications</h4>
            <p className="text-xs text-slate-400 font-semibold mt-1">
              Your live dispatch tracking reports, WhatsApp replies, and email responses will appear in this feed.
            </p>
          </div>
        ) : (
          notifications.map((n) => {
            const isUnread = !n.isRead;
            const isWhatsAppReply = n.type === "whatsapp_reply";
            const isEmailReply = n.type === "email_reply";
            const isCollapsibleReply = isWhatsAppReply || isEmailReply;
            const isExpanded = expandedReplyId === n._id;

            const isClientSender = n.metadata?.senderRole === "client";
            const accusedName = n.metadata?.accusedName || n.caseName || "Borrower";
            const clientName = n.metadata?.clientName || "Client";
            const loanId = n.metadata?.loanId || "";
            const accusedPhone = n.metadata?.accusedPhone || "";
            const accusedEmail = n.metadata?.accusedEmail || "";

            // Formats ISO date to readable string
            const formatEventDate = (isoStr: string) => {
              try {
                const date = new Date(isoStr);
                return date.toLocaleString("en-IN", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit"
                });
              } catch (e) {
                return isoStr;
              }
            };

            return (
              <div 
                key={n._id} 
                onClick={() => !n.isRead && handleMarkAsRead(n._id)}
                className={`border rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:shadow-slate-200/20 transition-all duration-200 cursor-pointer
                  ${isEmailReply 
                    ? (isUnread ? "bg-blue-50 border-blue-300 border-l-4 border-l-blue-600" : "bg-blue-50/30 border-blue-200 border-l-4 border-l-blue-400") 
                    : (isUnread ? "bg-indigo-50/10 border-indigo-150" : "bg-white border-[#E5E7EB]/70")}`}
              >
                <div className="flex items-start gap-4">
                  {/* Visual Type Indicators */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border
                    ${n.type === "courier_status" ? "bg-red-50 border-red-100 text-[#DC2626]" : ""}
                    ${isWhatsAppReply ? "bg-emerald-50 border-emerald-100 text-[#10B981]" : ""}
                    ${isEmailReply ? (isClientSender ? "bg-purple-50 border-purple-100 text-purple-600" : "bg-blue-50 border-blue-100 text-blue-600") : ""}
                    ${n.type === "whatsapp_status" ? "bg-emerald-50 border-emerald-50 text-[#10B981]" : ""}
                    ${n.type === "email_status" ? "bg-blue-50 border-blue-50 text-blue-600" : ""}
                    ${n.type === "security" ? "bg-indigo-50 border-indigo-100 text-indigo-650" : ""}
                    ${n.type === "billing" ? "bg-amber-50 border-amber-100 text-amber-600" : ""}`}
                  >
                    {n.type === "courier_status" && <CheckCircle2 className="w-4 h-4" />}
                    {isWhatsAppReply && <MessageSquare className="w-4 h-4 animate-bounce" />}
                    {isEmailReply && <Mail className="w-4 h-4 animate-bounce" />}
                    {n.type === "whatsapp_status" && <MessageSquare className="w-4 h-4" />}
                    {n.type === "email_status" && <Mail className="w-4 h-4" />}
                    {n.type === "security" && <ShieldAlert className="w-4 h-4" />}
                    {n.type === "billing" && <Clock className="w-4 h-4" />}
                  </div>

                  {/* Event Contents Text */}
                  <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {isUnread && (
                          <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" title="Unread event" />
                        )}
                        <span className="text-xs font-black text-[#111827] tracking-tight">{n.title}</span>
                        {isClientSender && (
                          <span className="text-[9px] font-black uppercase tracking-wider bg-purple-100/80 text-purple-700 border border-purple-200 px-1.5 py-0.5 rounded">
                            Client Response
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold sm:text-right shrink-0">
                        {formatEventDate(n.date)}
                      </span>
                    </div>
                    
                    <p className={`text-[11px] leading-relaxed font-semibold
                      ${isCollapsibleReply ? "text-indigo-950 font-bold" : "text-slate-500"}`}>
                      {isCollapsibleReply 
                        ? (isClientSender 
                            ? `${clientName} (Client) replied regarding ${accusedName}'s legal recovery notice.`
                            : `${accusedName} replied directly to your notice step.`)
                        : n.description}
                    </p>

                    {/* Option 1: Special User Accused Details Pill Strip */}
                    {isSpecialUser && (isEmailReply || isWhatsAppReply) && (
                      <div className="flex flex-wrap items-center gap-2 mt-2 pt-1 select-text">
                        {/* Accused Name Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-slate-100/90 border border-slate-200 text-slate-800 text-[10.5px] font-bold px-2.5 py-1 rounded-lg">
                          <User className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>Accused: <span className="font-extrabold text-slate-900">{accusedName}</span></span>
                        </div>

                        {/* Loan ID Badge */}
                        {loanId && (
                          <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-900 text-[10.5px] font-bold px-2.5 py-1 rounded-lg">
                            <Hash className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                            <span>Loan ID: <span className="font-extrabold text-indigo-700 tracking-wide">{loanId}</span></span>
                          </div>
                        )}

                        {/* Accused Phone Badge */}
                        {accusedPhone && (
                          <a 
                            href={`tel:${accusedPhone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-250 text-emerald-900 text-[10.5px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                            title="Call Accused Phone"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{accusedPhone}</span>
                          </a>
                        )}

                        {/* Accused Email Badge */}
                        {accusedEmail && (
                          <a 
                            href={`mailto:${accusedEmail}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-250 text-blue-900 text-[10.5px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                            title="Email Accused"
                          >
                            <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span className="truncate max-w-[220px]">{accusedEmail}</span>
                          </a>
                        )}
                      </div>
                    )}

                    {/* Metadata Badges & Toggle */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 select-none">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded text-slate-500">
                        🎯 {n.caseName || "System Notification"}
                      </span>

                      {/* Interactive toggle for WhatsApp or Email replies */}
                      {isCollapsibleReply && (
                        <button 
                          onClick={(e) => toggleExpandReply(n._id, e)}
                          className="text-[9px] font-extrabold text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded flex items-center gap-1 cursor-pointer"
                        >
                          {isExpanded ? (
                            <>Hide message reply <ChevronUp className="w-3 h-3" /></>
                          ) : (
                            <>Show exact message reply <ChevronDown className="w-3 h-3" /></>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Individual Delete Button */}
                  <button 
                    onClick={(e) => handleDeleteNotification(n._id, e)}
                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-50 transition-all shrink-0 cursor-pointer self-start"
                    title="Delete entry from logs"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Collapsible Chat Bubble for Accused/Client replies */}
                {isCollapsibleReply && isExpanded && (
                  <div className="mt-2 pl-13 border-t border-slate-100 pt-3 animate-in slide-in-from-top-2 duration-200">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60 flex flex-col gap-1.5 max-w-xl">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-500 border-b border-slate-200/50 pb-1.5 mb-1.5">
                        <span className="flex items-center gap-1.5 font-extrabold">
                          {isWhatsAppReply ? "💬 WHATSAPP CHAT INBOUND" : (
                            isClientSender 
                              ? `✉️ INBOUND EMAIL FROM CLIENT (${clientName})`
                              : "✉️ INBOUND EMAIL RESPONSE (ACCUSED)"
                          )}
                        </span>
                        <span className="font-mono text-slate-600">
                          {isWhatsAppReply ? n.metadata?.senderPhone : n.metadata?.senderEmail}
                        </span>
                      </div>
                      <p className="text-[11px] font-medium font-sans leading-relaxed text-slate-700 whitespace-pre-line">
                        {n.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

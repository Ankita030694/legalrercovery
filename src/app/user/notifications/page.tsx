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
  Loader2
} from "lucide-react";

export default function NotificationsLog() {
  const [notifications, setNotifications] = useState<any[]>([]);
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
              Your live dispatch tracking reports, WATI WhatsApp replies, and Zoho email responses will appear in this feed.
            </p>
          </div>
        ) : (
          notifications.map((n) => {
            const isUnread = !n.isRead;
            const isWhatsAppReply = n.type === "whatsapp_reply";
            const isEmailReply = n.type === "email_reply";
            const isCollapsibleReply = isWhatsAppReply || isEmailReply;
            const isExpanded = expandedReplyId === n._id;

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
                className={`bg-white border rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:shadow-slate-200/20 transition-all duration-200 cursor-pointer
                  ${isUnread ? "border-indigo-150 bg-indigo-50/10" : "border-[#E5E7EB]/70"}`}
              >
                <div className="flex items-start gap-4">
                  {/* Visual Type Indicators */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border
                    ${n.type === "courier_status" ? "bg-red-50 border-red-100 text-[#DC2626]" : ""}
                    ${isWhatsAppReply ? "bg-emerald-50 border-emerald-100 text-[#10B981]" : ""}
                    ${isEmailReply ? "bg-blue-50 border-blue-100 text-blue-600" : ""}
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
                      <div className="flex items-center gap-2">
                        {isUnread && (
                          <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0" title="Unread event" />
                        )}
                        <span className="text-xs font-black text-[#111827] tracking-tight">{n.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold sm:text-right shrink-0">
                        {formatEventDate(n.date)}
                      </span>
                    </div>
                    
                    <p className={`text-[11px] leading-relaxed font-semibold
                      ${isCollapsibleReply ? "text-indigo-950 font-bold" : "text-slate-500"}`}>
                      {isCollapsibleReply 
                        ? `${n.caseName} replied directly to your notice step.`
                        : n.description}
                    </p>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2 select-none">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded text-slate-500">
                        🎯 {n.caseName || "System Notification"}
                      </span>

                      {/* Speed Post track link removed */}

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

                {/* Collapsible Chat Bubble for Accused replies */}
                {isCollapsibleReply && isExpanded && (
                  <div className="mt-2 pl-13 border-t border-slate-100 pt-3 animate-in slide-in-from-top-2 duration-200">
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/60 flex flex-col gap-1.5 max-w-xl">
                      <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 border-b border-slate-200/50 pb-1.5 mb-1.5">
                        <span>
                          {isWhatsAppReply ? "💬 WHATSAPP CHAT INBOUND" : "✉️ INBOUND EMAIL RESPONSE"}
                        </span>
                        <span>
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

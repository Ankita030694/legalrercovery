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
  Trash2
} from "lucide-react";

export default function NotificationsLog() {
  const [cases, setCases] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);

  // Load cases to extract timeline events dynamically
  useEffect(() => {
    const loadCases = () => {
      try {
        const stored = localStorage.getItem("lr_cases");
        if (stored) {
          const parsed = JSON.parse(stored);
          setCases(parsed);

          // Extract completed timeline entries to construct dynamic notification feed
          const feed: any[] = [];
          
          parsed.forEach((c: any) => {
            c.timeline.forEach((step: any) => {
              if (step.status === "completed") {
                // Courier event
                feed.push({
                  id: `noti-${c.id}-${step.step}-courier`,
                  type: "courier",
                  title: `${step.label} Dispatched successfully`,
                  description: `automated speed post consignment dispatch for ${c.defaulterName} was accepted at the regional hub.`,
                  date: step.date,
                  speedPostId: step.speedPostId,
                  status: "success",
                  caseName: c.defaulterName
                });
                
                // WhatsApp event
                feed.push({
                  id: `noti-${c.id}-${step.step}-whatsapp`,
                  type: "whatsapp",
                  title: `WhatsApp notice served via Wati`,
                  description: `Legal demand letter digital copy shot directly to ${c.defaulterName}'s verified mobile (${c.phone}).`,
                  date: step.date,
                  status: "success",
                  caseName: c.defaulterName
                });
              } else if (step.status === "active") {
                // Active grace period alert
                feed.push({
                  id: `noti-${c.id}-${step.step}-grace`,
                  type: "grace",
                  title: `${step.label} grace period running`,
                  description: `A 1-hour buffer is active for ${c.defaulterName}. Click "Stop Notices" on the dashboard to cancel dispatch.`,
                  date: "Just now",
                  status: "warning",
                  caseName: c.defaulterName
                });
              } else if (step.status === "cancelled") {
                // Cancelled event
                feed.push({
                  id: `noti-${c.id}-${step.step}-cancel`,
                  type: "cancel",
                  title: `Notices progression suspended`,
                  description: `All future demand dispatches and police complaints for ${c.defaulterName} were halted upon your request.`,
                  date: "Today",
                  status: "info",
                  caseName: c.defaulterName
                });
              }
            });
          });

          // Add static security OTP welcome checks for realism
          feed.push({
            id: "noti-welcome-otp",
            type: "security",
            title: "Secured Phone OTP Login session active",
            description: "Successful login session authenticated from New Delhi, India. Valid for exactly 1 week.",
            date: "Today, 15:35",
            status: "success",
            caseName: "Account Secure"
          });

          feed.push({
            id: "noti-welcome-charge",
            type: "invoice",
            title: "Verification signature matches Zoho records",
            description: "Dynamic pricing checkout has cleared. Automated notices scheduling has been successfully bound to legal queues.",
            date: "May 15, 2026",
            status: "info",
            caseName: "Billing Gate"
          });

          setNotifications(feed);
        }
      } catch (err) {
        console.error("Failed to compile notifications list:", err);
      }
    };

    loadCases();
  }, []);

  const handleClearNotifications = () => {
    if (confirm("Clear recent notifications logs? (This will clear current view logs but will preserve active case dispatches)")) {
      setNotifications([]);
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-left border-b border-[#E5E7EB]/50 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Notification Log</h1>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1 font-sans">
            Review automatic dispatches, WhatsApp Wati transmission summaries, and physical courier deliveries.
          </p>
        </div>

        {notifications.length > 0 && (
          <button
            onClick={handleClearNotifications}
            className="self-start sm:self-center px-4 py-2 text-xs font-bold text-slate-550 hover:text-red-600 hover:bg-red-50 border border-slate-200 hover:border-red-200 rounded-xl transition-all cursor-pointer focus:outline-none flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear Logs
          </button>
        )}
      </div>

      {/* Timeline Notifications Log List */}
      <div className="max-w-3xl w-full flex flex-col gap-4 text-left">
        {notifications.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-12 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-3">
              <Bell className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="text-sm font-black text-slate-700">No New Notifications</h4>
            <p className="text-xs text-slate-400 font-semibold mt-1">
              Your live dispatch tracking reports and Zoho OTP verification triggers will appear in this log feed.
            </p>
          </div>
        ) : (
          notifications.map((n) => {
            const isSuccess = n.status === "success";
            const isWarning = n.status === "warning";
            const isInfo = n.status === "info";

            return (
              <div 
                key={n.id} 
                className="bg-white border border-[#E5E7EB]/70 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md hover:shadow-slate-200/20 transition-all duration-200"
              >
                {/* Visual Type Indicators */}
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border
                  ${n.type === "courier" ? "bg-red-50 border-red-100 text-[#DC2626]" : ""}
                  ${n.type === "whatsapp" ? "bg-emerald-50 border-emerald-100 text-[#10B981]" : ""}
                  ${n.type === "grace" ? "bg-amber-50 border-amber-100 text-amber-600 animate-pulse" : ""}
                  ${n.type === "cancel" ? "bg-slate-50 border-slate-100 text-slate-500" : ""}
                  ${n.type === "security" ? "bg-indigo-50 border-indigo-100 text-indigo-650" : ""}
                  ${n.type === "invoice" ? "bg-blue-50 border-blue-100 text-blue-600" : ""}`}
                >
                  {n.type === "courier" && <CheckCircle2 className="w-4 h-4" />}
                  {n.type === "whatsapp" && <MessageSquare className="w-4 h-4" />}
                  {n.type === "grace" && <Clock className="w-4 h-4" />}
                  {n.type === "cancel" && <Info className="w-4 h-4" />}
                  {n.type === "security" && <ShieldAlert className="w-4 h-4" />}
                  {n.type === "invoice" && <Mail className="w-4 h-4" />}
                </div>

                {/* Event Contents Text */}
                <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-xs font-black text-[#111827] tracking-tight">{n.title}</span>
                    <span className="text-[10px] text-slate-400 font-bold sm:text-right shrink-0">{n.date}</span>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    {n.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-1 select-none">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded text-slate-500">
                      🎯 {n.caseName}
                    </span>

                    {n.speedPostId && (
                      <a 
                        href="https://www.indiapost.gov.in/_layouts/15/dop.portal.tracking/trackconsignment.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[9px] font-black text-slate-650 hover:text-[#DC2626] flex items-center gap-1 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded"
                      >
                        Indian Post Consignment: {n.speedPostId} <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

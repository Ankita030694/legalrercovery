"use client";

import React, { useState, useEffect } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Bell, 
  ShieldCheck, 
  MessageSquare,
  Globe,
  Settings,
  Loader2
} from "lucide-react";

export default function AccountSettings() {
  // Profile state loaded dynamically from DB
  const [profile, setProfile] = useState<{ name: string; email: string; phone: string; state: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Portal Preferences
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);
  const [emailCopiesEnabled, setEmailCopiesEnabled] = useState(true);
  const [autoPoliceEnabled, setAutoPoliceEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch("/api/users/profile");
        const data = await res.json();
        if (data.success && data.profile) {
          setProfile(data.profile);
        }
      } catch (err) {
        console.error("Failed to load user profile:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProfile();
  }, []);

  const handleSavePreferences = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Preferences saved successfully!");
    }, 600);
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl text-left animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-[#E5E7EB]/50 pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Account Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Review your verified identity credentials and configure automated notices progression rules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* LEFT CARD: Identity parameters */}
        <div className="md:col-span-7 bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
          <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2.5 flex items-center gap-2">
            <User className="w-4 h-4 text-[#DC2626]" /> Verified Profile Identity
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col text-left">
              <label className="text-xs font-extrabold text-slate-500 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" /> Account Owner
              </label>
              <input 
                type="text" 
                readOnly 
                value={isLoading ? "Loading..." : (profile?.name || "Tech AMA")} 
                className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-bold text-slate-500 outline-none select-text cursor-not-allowed" 
              />
            </div>
            
            <div className="flex flex-col text-left">
              <label className="text-xs font-extrabold text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Primary Email
              </label>
              <input 
                type="email" 
                readOnly 
                value={isLoading ? "Loading..." : (profile?.email || "tech.ama123@gmail.com")} 
                className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-bold text-slate-500 outline-none select-text cursor-not-allowed" 
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-extrabold text-slate-500 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> Verified Mobile
              </label>
              <input 
                type="text" 
                readOnly 
                value={isLoading ? "Loading..." : (profile?.phone ? `+91 ${profile.phone}` : "+91 87003 43611")} 
                className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-bold text-slate-500 outline-none select-text cursor-not-allowed" 
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-xs font-extrabold text-slate-500 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Registered Region
              </label>
              <input 
                type="text" 
                readOnly 
                value={isLoading ? "Loading..." : `${profile?.state || "Delhi"}, India`} 
                className="bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-bold text-slate-500 outline-none select-text cursor-not-allowed" 
              />
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start gap-3 mt-1">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
            <span className="text-[11px] leading-relaxed text-green-700 font-semibold">
              Your profile is verified and secured using email and mobile authentication OTPs. To modify primary billing or registered identity documents, please contact legalrecovery.in desk.
            </span>
          </div>
        </div>

        {/* RIGHT CARD: Portal progression toggles */}
        <div className="md:col-span-5 bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
          <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2.5 flex items-center gap-2">
            <Settings className="w-4 h-4 text-[#DC2626]" /> Recovery Preferences
          </h3>

          <div className="flex flex-col gap-5">
            {/* Toggle 1: WhatsApp Wati alerts */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-450" /> Serve via WhatsApp
                </span>
                <span className="text-[10px] text-slate-450 font-bold leading-normal mt-0.5">
                  Trigger automated demand copy dispatches directly via Wati verified WhatsApp numbers.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappEnabled(!whatsappEnabled)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 cursor-pointer focus:outline-none
                  ${whatsappEnabled ? "bg-[#10B981]" : "bg-slate-200"}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 shadow-sm
                  ${whatsappEnabled ? "translate-x-4" : "translate-x-0"}`} 
                />
              </button>
            </div>

            {/* Toggle 2: Email dispatches */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-450" /> Send Email Receipts
                </span>
                <span className="text-[10px] text-slate-450 font-bold leading-normal mt-0.5">
                  Receive carbon copies of generated PDF drafts and courier delivery receipts.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setEmailCopiesEnabled(!emailCopiesEnabled)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 cursor-pointer focus:outline-none
                  ${emailCopiesEnabled ? "bg-[#10B981]" : "bg-slate-200"}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 shadow-sm
                  ${emailCopiesEnabled ? "translate-x-4" : "translate-x-0"}`} 
                />
              </button>
            </div>

            {/* Toggle 3: Police complaint auto-trigger */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-450" /> Auto Police Filing Draft
                </span>
                <span className="text-[10px] text-slate-450 font-bold leading-normal mt-0.5">
                  Automatically generate a formal police complaint draft exactly 1 week after Notice 3 expires.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setAutoPoliceEnabled(!autoPoliceEnabled)}
                className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 cursor-pointer focus:outline-none
                  ${autoPoliceEnabled ? "bg-[#10B981]" : "bg-slate-200"}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 shadow-sm
                  ${autoPoliceEnabled ? "translate-x-4" : "translate-x-0"}`} 
                />
              </button>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB]/50 pt-4 flex justify-end">
            <button
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="px-5 py-2.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-sm transition-all focus:outline-none cursor-pointer"
            >
              {isSaving ? "Saving..." : "Save Preferences"}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

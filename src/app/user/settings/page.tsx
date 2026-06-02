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
  Loader2,
  CheckCircle2,
  AlertCircle,
  Home
} from "lucide-react";

export default function AccountSettings() {
  // Load States
  const [profile, setProfile] = useState<{ name: string; email: string; phone: string; state: string; address: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateVal, setStateVal] = useState("Delhi");
  const [address, setAddress] = useState("");

  // Validation & Save States
  const [emailError, setEmailError] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSaveSuccess, setProfileSaveSuccess] = useState<string | null>(null);
  const [profileSaveError, setProfileSaveError] = useState<string | null>(null);

  // Portal Preferences
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);
  const [emailCopiesEnabled, setEmailCopiesEnabled] = useState(true);
  const [autoPoliceEnabled, setAutoPoliceEnabled] = useState(false);
  const [isSavingPref, setIsSavingPref] = useState(false);
  const [prefSaveSuccess, setPrefSaveSuccess] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        const res = await fetch("/api/users/profile");
        const data = await res.json();
        if (data.success && data.profile) {
          setProfile(data.profile);
          setName(data.profile.name || "");
          setEmail(data.profile.email || "");
          setPhone(data.profile.phone || "");
          setStateVal(data.profile.state || "Delhi");
          setAddress(data.profile.address || "");
        }
      } catch (err) {
        console.error("Failed to load user profile:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProfile();
  }, []);

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (!val) {
      setEmailError(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(val));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || emailError || !address.trim() || !stateVal.trim()) {
      setProfileSaveError("Please resolve validation errors before saving.");
      return;
    }

    setIsSavingProfile(true);
    setProfileSaveSuccess(null);
    setProfileSaveError(null);

    try {
      const res = await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          address: address.trim(),
          state: stateVal.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update profile.");
      }

      setProfileSaveSuccess("Profile updated successfully!");
      
      // Dispatch dynamic synchronization event for sidebar layouts
      window.dispatchEvent(
        new CustomEvent("lr_profile_updated", {
          detail: {
            name: name.trim(),
            email: email.trim(),
            address: address.trim(),
            state: stateVal.trim(),
          },
        })
      );

      // Dismiss success alert automatically after 3 seconds
      setTimeout(() => setProfileSaveSuccess(null), 3000);
    } catch (err: any) {
      console.error("Error saving profile settings:", err);
      setProfileSaveError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSavingProfile(false);
    }
  };

  const handleSavePreferences = () => {
    setIsSavingPref(true);
    setPrefSaveSuccess(false);
    setTimeout(() => {
      setIsSavingPref(false);
      setPrefSaveSuccess(true);
      setTimeout(() => setPrefSaveSuccess(false), 3000);
    }, 600);
  };

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Jammu and Kashmir", "Ladakh"
  ];

  return (
    <div className="flex flex-col gap-8 max-w-5xl text-left animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-[#E5E7EB]/50 pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Account Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Review your verified identity credentials and configure automated notices progression rules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT CARD: Profile identity edits */}
        <form onSubmit={handleSaveProfile} className="lg:col-span-7 bg-white border border-[#E5E7EB]/70 rounded-3xl p-5 sm:p-8 flex flex-col gap-6 shadow-sm">
          <div>
            <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2.5 flex items-center gap-2">
              <User className="w-4 h-4 text-[#DC2626]" /> Account Identity Settings
            </h3>
            <p className="text-[11px] text-slate-400 font-semibold mt-1.5 leading-relaxed">
              Ensure your name, primary email, and physical dispatch addresses match legal records. These details will be drawn as sender complainant identifiers inside active notices.
            </p>
          </div>

          {/* Success / Error Banners */}
          {profileSaveSuccess && (
            <div className="bg-emerald-50 border border-emerald-250 p-4 rounded-xl flex items-start gap-2.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-emerald-800">{profileSaveSuccess}</span>
            </div>
          )}

          {profileSaveError && (
            <div className="bg-red-50 border border-red-150 p-4 rounded-xl flex items-start gap-2.5 animate-in fade-in duration-200">
              <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-red-800">{profileSaveError}</span>
            </div>
          )}

          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#DC2626]" />
              <span className="text-xs font-semibold text-slate-400">Fetching profile details...</span>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Account Owner Name */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Owner / Entity Name
                  </label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name or legal company name"
                    className="bg-white border border-[#E5E7EB] hover:border-slate-350 focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-bold text-[#111827] outline-none transition-all" 
                  />
                </div>
                
                {/* Email Address */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> Primary Email ID
                  </label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    placeholder="example@domain.com"
                    className={`bg-white border rounded-xl px-4 py-3 text-sm font-bold outline-none transition-all
                      ${emailError 
                        ? "border-red-500 focus:border-red-500 text-red-700 bg-red-50/20" 
                        : "border-[#E5E7EB] hover:border-slate-350 focus:border-[#DC2626] text-[#111827]"}`}
                  />
                  {emailError && (
                    <span className="text-[10px] text-red-600 font-bold mt-1">Please enter a valid email format.</span>
                  )}
                </div>

                {/* Mobile Number - LOCKED */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-black text-slate-400 mb-1.5 flex items-center gap-1.5 select-none">
                    <Phone className="w-3.5 h-3.5 text-slate-300" /> Verified Mobile (Locked)
                  </label>
                  <div className="relative flex items-center">
                    <input 
                      type="text" 
                      readOnly 
                      disabled
                      value={phone ? `+91 ${phone}` : ""} 
                      className="w-full bg-slate-50 border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm font-bold text-slate-450 outline-none select-none cursor-not-allowed" 
                    />
                    <span className="absolute right-3 bg-slate-100 border border-slate-200 text-slate-400 text-[8px] font-black uppercase px-2 py-0.5 rounded select-none">
                      🔒 Verified
                    </span>
                  </div>
                </div>

                {/* State/Region */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" /> Registered Region
                  </label>
                  <select
                    value={stateVal}
                    onChange={(e) => setStateVal(e.target.value)}
                    className="bg-white border border-[#E5E7EB] hover:border-slate-350 focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-bold text-[#111827] outline-none transition-all cursor-pointer"
                  >
                    {statesOfIndia.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Physical Dispatch Sender Address */}
              <div className="flex flex-col text-left">
                <label className="text-xs font-black text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-slate-400" /> Sender dispatch Address
                </label>
                <textarea 
                  required
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter complete physical address (Office/Residence) with PIN code"
                  className="bg-white border border-[#E5E7EB] hover:border-slate-350 focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold text-[#111827] outline-none transition-all resize-none font-sans leading-relaxed"
                />
              </div>

              {/* Security Shield Card */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-start gap-3 mt-1 select-none">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-green-700 font-semibold">
                  Primary mobile number is locked as your cryptographic account key. Changing other identity attributes updates dispatch parameters instantly.
                </span>
              </div>

              {/* Action save button */}
              <div className="border-t border-[#E5E7EB]/50 pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSavingProfile || emailError}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-sm transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSavingProfile ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving changes...
                    </>
                  ) : (
                    "Update Profile"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* RIGHT CARD: Portal progression toggles */}
        <div className="lg:col-span-5 bg-white border border-[#E5E7EB]/70 rounded-3xl p-5 sm:p-8 flex flex-col gap-6 shadow-sm">
          <div>
            <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2.5 flex items-center gap-2">
              <Settings className="w-4 h-4 text-[#DC2626]" /> Recovery Preferences
            </h3>
            <p className="text-[11px] text-slate-400 font-semibold mt-1.5 leading-relaxed">
              Configure dispatch automation settings for legal demand notice queueing and timeline progressions.
            </p>
          </div>

          {prefSaveSuccess && (
            <div className="bg-emerald-50 border border-emerald-250 p-4 rounded-xl flex items-start gap-2.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold text-emerald-800">Preferences updated successfully!</span>
            </div>
          )}

          <div className="flex flex-col gap-5">
            {/* Toggle 1: WhatsApp Wati alerts */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col text-left">
                <span className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-slate-455" /> Serve via WhatsApp
                </span>
                <span className="text-[10px] text-slate-450 font-semibold leading-relaxed mt-1">
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
                  <Mail className="w-3.5 h-3.5 text-slate-455" /> Send Email Receipts
                </span>
                <span className="text-[10px] text-slate-450 font-semibold leading-relaxed mt-1">
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
                  <Globe className="w-3.5 h-3.5 text-slate-455" /> Auto Police Filing Draft
                </span>
                <span className="text-[10px] text-slate-450 font-semibold leading-relaxed mt-1">
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
              disabled={isSavingPref}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-sm transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-2"
            >
              {isSavingPref ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...
                </>
              ) : (
                "Save Preferences"
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

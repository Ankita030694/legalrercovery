"use client";

import React, { useState, useEffect } from "react";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Loader2,
  CheckCircle2,
  AlertCircle,
  Home,
  X,
  Edit2
} from "lucide-react";

export default function AccountSettings() {
  // Load States
  const [profile, setProfile] = useState<{ name: string; email: string; phone: string; state: string; address: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Modal Toggle State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Form Fields (temporary states for within the modal)
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editStateVal, setEditStateVal] = useState("Delhi");
  const [editAddress, setEditAddress] = useState("");

  // Validation & Save States
  const [emailError, setEmailError] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [profileSaveSuccess, setProfileSaveSuccess] = useState<string | null>(null);
  const [profileSaveError, setProfileSaveError] = useState<string | null>(null);

  // Onboarding Settings Tooltip State
  const [showOnboardingTooltip, setShowOnboardingTooltip] = useState(false);

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

    // Check onboarding tour
    const tour = localStorage.getItem("lr_onboarding_state");
    if (tour === "settings_check" || tour === "recovery_done") {
      setShowOnboardingTooltip(true);
    }
  }, []);

  const handleOpenEditModal = () => {
    if (profile) {
      setEditName(profile.name || "");
      setEditEmail(profile.email || "");
      setEditStateVal(profile.state || "Delhi");
      setEditAddress(profile.address || "");
      setEmailError(false);
      setProfileSaveError(null);
      setIsEditModalOpen(true);
    }
  };

  const handleEmailChange = (val: string) => {
    setEditEmail(val);
    if (!val) {
      setEmailError(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(val));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editName.trim() || !editEmail.trim() || emailError || !editAddress.trim() || !editStateVal.trim()) {
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
          name: editName.trim(),
          email: editEmail.trim(),
          address: editAddress.trim(),
          state: editStateVal.trim(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update profile.");
      }

      setProfileSaveSuccess("Profile updated successfully!");
      setProfile({
        name: editName.trim(),
        email: editEmail.trim(),
        state: editStateVal.trim(),
        address: editAddress.trim(),
        phone: profile?.phone || ""
      });
      
      // Dispatch dynamic synchronization event for sidebar layouts
      window.dispatchEvent(
        new CustomEvent("lr_profile_updated", {
          detail: {
            name: editName.trim(),
            email: editEmail.trim(),
            address: editAddress.trim(),
            state: editStateVal.trim(),
          },
        })
      );

      setIsEditModalOpen(false);

      // Dismiss success alert automatically after 3 seconds
      setTimeout(() => setProfileSaveSuccess(null), 3000);
    } catch (err: any) {
      console.error("Error saving profile settings:", err);
      setProfileSaveError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSavingProfile(false);
    }
  };

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Chandigarh", "Jammu and Kashmir", "Ladakh"
  ];

  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto text-left animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-[#E5E7EB]/50 pb-4 shrink-0">
        <h1 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">Settings & Profile</h1>
        <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
          Manage your user profile details and physical sender address for legal notices.
        </p>
      </div>

      {/* Success Banner */}
      {profileSaveSuccess && (
        <div className="bg-emerald-50 border border-emerald-250 p-3.5 rounded-xl flex items-start gap-2 animate-in fade-in duration-200 shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span className="text-[11px] font-bold text-emerald-800">{profileSaveSuccess}</span>
        </div>
      )}

      {/* Profile Details Container */}
      <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
        
        <div className="border-b border-slate-100 pb-3.5 flex justify-between items-center gap-4">
          <div>
            <h3 className="text-sm font-black text-[#111827] flex items-center gap-2">
              <User className="w-4 h-4 text-[#DC2626]" /> Profile & Dispatch Details
            </h3>
            <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
              These details represent the sender (complainant) details on your dispatches.
            </p>
          </div>
          
          {!isLoading && profile && (
            <div className="relative">
              <button
                onClick={handleOpenEditModal}
                className={`px-3.5 py-2 text-[10.5px] font-black text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none relative z-10
                  ${showOnboardingTooltip ? "ring-2 ring-red-500 animate-pulse border-red-500" : ""}`}
              >
                <Edit2 className="w-3.5 h-3.5" /> Edit Profile
              </button>

              {showOnboardingTooltip && (
                <div className="absolute right-0 top-[calc(100%+12px)] bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 w-80 text-left pointer-events-auto z-20 animate-in slide-in-from-top-4 duration-300 font-sans normal-case">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Final Step</span>
                    <button 
                      onClick={() => {
                        setShowOnboardingTooltip(false);
                        localStorage.setItem("lr_onboarding_state", "completed");
                      }} 
                      className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-xs font-semibold leading-relaxed text-slate-100">
                    Confirm your details (Name, Email, and Address). If there is a typo, click <strong>"Edit Profile"</strong> to correct it. Once checked, notices will be sent correctly!
                  </p>
                  <div className="flex justify-end mt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowOnboardingTooltip(false);
                        localStorage.setItem("lr_onboarding_state", "completed");
                      }}
                      className="px-3.5 py-1.5 text-[10px] font-black bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg cursor-pointer"
                    >
                      Got It! Finish Tour
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 gap-3">
            <Loader2 className="w-8 h-8 animate-spin text-[#DC2626]" />
            <span className="text-xs font-semibold text-slate-400">Fetching profile details...</span>
          </div>
        ) : !profile ? (
          <div className="text-center py-6 text-slate-400 text-xs font-semibold">
            Unable to load profile. Please refresh the page.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left font-sans text-xs">
            
            {/* Owner Name */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-black">Owner / Entity Name</span>
              <span className="font-extrabold text-slate-800 text-[13px]">{profile.name || "—"}</span>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-black">Primary Email ID</span>
              <span className="font-extrabold text-slate-800 text-[13px]">{profile.email || "—"}</span>
            </div>

            {/* Verified Mobile */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-black">Verified Mobile Number</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-extrabold text-slate-800 text-[13px]">{profile.phone ? `+91 ${profile.phone}` : "—"}</span>
                <span className="bg-green-50 border border-green-200 text-[#10B981] text-[8px] font-black uppercase px-1.5 py-0.5 rounded flex items-center gap-0.5 select-none">
                  🔒 Verified
                </span>
              </div>
            </div>

            {/* State */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-black">Registered Region</span>
              <span className="font-extrabold text-slate-800 text-[13px]">{profile.state || "—"}</span>
            </div>

            {/* Sender Address */}
            <div className="flex flex-col gap-1 sm:col-span-2 border-t border-slate-100 pt-3 mt-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-black">Sender Address</span>
              <span className="font-semibold text-slate-700 leading-relaxed text-[12.5px] mt-0.5">{profile.address || "—"}</span>
            </div>

          </div>
        )}
      </div>

      {/* ── EDIT PROFILE DETAILS OVERLAY MODAL ── */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl relative p-6 sm:p-8 flex flex-col gap-5 text-left select-none animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-650 hover:bg-slate-50 rounded-lg cursor-pointer focus:outline-none transition-colors"
              aria-label="Close edit profile modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="text-base font-black text-[#111827] tracking-tight">Edit Profile Details</h3>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                Update your dispatch sender parameters securely.
              </p>
            </div>

            {/* Error Banner inside Modal */}
            {profileSaveError && (
              <div className="bg-red-50 border border-red-150 p-3.5 rounded-xl flex items-start gap-2 animate-in fade-in duration-200 shrink-0">
                <AlertCircle className="w-4 h-4 text-red-650 shrink-0 mt-0.5" />
                <span className="text-[10px] font-bold text-red-800">{profileSaveError}</span>
              </div>
            )}

            <form onSubmit={handleSaveProfile} className="flex flex-col gap-4 font-sans text-xs">
              
              {/* Owner / Entity Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-600">Owner / Entity Name</label>
                <input 
                  type="text" 
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Enter full name or legal company name"
                  className="bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-[#DC2626] rounded-xl px-4 py-2.5 font-semibold text-slate-800 outline-none transition-all" 
                />
              </div>

              {/* Primary Email ID */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-600">Primary Email ID</label>
                <input 
                  type="email" 
                  required
                  value={editEmail}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  placeholder="example@domain.com"
                  className={`bg-slate-50 hover:bg-slate-100/50 focus:bg-white border rounded-xl px-4 py-2.5 font-semibold outline-none transition-all
                    ${emailError 
                      ? "border-red-300 focus:border-red-500 text-red-700 bg-red-50/20" 
                      : "border-slate-200 focus:border-[#DC2626] text-slate-800"}`}
                />
                {emailError && (
                  <span className="text-[9.5px] text-red-600 font-bold leading-none mt-0.5">Please enter a valid email format.</span>
                )}
              </div>

              {/* Registered Region / State */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-600">Registered Region</label>
                <select
                  value={editStateVal}
                  onChange={(e) => setEditStateVal(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-[#DC2626] rounded-xl px-4 py-2.5 font-semibold text-slate-800 outline-none transition-all cursor-pointer"
                >
                  {statesOfIndia.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Sender Physical Address */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-slate-600">Sender Address</label>
                <textarea 
                  required
                  rows={2}
                  value={editAddress}
                  onChange={(e) => setEditAddress(e.target.value)}
                  placeholder="Enter complete physical address with PIN code"
                  className="bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-[#DC2626] rounded-xl px-4 py-2.5 font-semibold text-slate-800 outline-none transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Verified Phone Notice */}
              <div className="bg-slate-50 border border-slate-150 p-3 rounded-xl flex items-start gap-2 mt-1 select-none">
                <ShieldCheck className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <span className="text-[10px] leading-normal text-slate-500 font-medium font-sans">
                  The primary verified phone number (<strong>+91 {profile?.phone}</strong>) is locked to secure your account. Contact support to update the phone number.
                </span>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-3 border-t border-[#E5E7EB]/50 pt-4 mt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  disabled={isSavingProfile}
                  className="flex-1 py-3 text-xs font-black text-slate-600 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all cursor-pointer text-center focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSavingProfile || emailError}
                  className="flex-1 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-md shadow-red-950/10 transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isSavingProfile ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

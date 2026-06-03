"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Check, 
  FileText, 
  Info,
  Calendar,
  IndianRupee,
  Building,
  User,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Building2,
  Lock,
  Plus
} from "lucide-react";
import Link from "next/link";

export default function NewRecoveryForm() {
  const router = useRouter();
  
  // ── FORM STATE: SECTION 1 (DEFAULTER & DUES) ──
  const [defaulterName, setDefaulterName] = useState("");
  const [entityType, setEntityType] = useState("Company");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [showPhone2, setShowPhone2] = useState(false);
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [showEmail2, setShowEmail2] = useState(false);
  const [address, setAddress] = useState("");
  const [stuckAmount, setStuckAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  // ── FORM STATE: SECTION 2 (POLICE AUTHORITY) ──
  const [policeStationName, setPoliceStationName] = useState("");
  const [policeStationEmail, setPoliceStationEmail] = useState("");
  const [policeStationAddress, setPoliceStationAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState(false);
  const [email2Error, setEmail2Error] = useState(false);
  const [generatedCaseId, setGeneratedCaseId] = useState("LR-0000-000000");
  const [mobileTab, setMobileTab] = useState<"form" | "preview">("form");

  // Client profile state for notice previews
  const [clientProfile, setClientProfile] = useState<{
    name: string;
    email: string;
    phone: string;
    state: string;
    address: string;
  } | null>(null);

  // Onboarding tour states
  const [onboardingState, setOnboardingState] = useState<string | null>(null);
  const [onboardingTourStep, setOnboardingTourStep] = useState(1);

  useEffect(() => {
    const fetchNextCaseId = async () => {
      try {
        const res = await fetch("/api/cases?nextId=true");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.caseId) {
            setGeneratedCaseId(data.caseId);
          }
        }
      } catch (err) {
        console.error("Failed to fetch next case ID:", err);
      }
    };

    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/users/profile");
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.profile) {
            setClientProfile(data.profile);
          }
        }
      } catch (err) {
        console.error("Failed to fetch user profile in new-recovery page:", err);
      }
    };

    fetchNextCaseId();
    fetchProfile();

    // Initialize onboarding
    const tour = localStorage.getItem("lr_onboarding_state");
    if (tour === "dashboard_new_recovery") {
      setOnboardingState("new_recovery");
      localStorage.setItem("lr_onboarding_state", "new_recovery");
    } else {
      setOnboardingState(tour);
    }
  }, []);

  // ── ON CHANGE VALIDATION AND FORMATTING HANDLERS ──
  const handleNameChange = (val: string) => {
    // Only alphabets and whitespaces allowed, no numerics or special characters
    const cleaned = val.replace(/[^A-Za-z\s]/g, "");
    setDefaulterName(cleaned);
  };

  const handlePhoneChange = (val: string) => {
    // Only numerics allowed, strictly limited to 10 digits
    const cleaned = val.replace(/\D/g, "").slice(0, 10);
    setPhone(cleaned);
  };

  const handlePhone2Change = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 10);
    setPhone2(cleaned);
  };

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (!val) {
      setEmailError(false);
      return;
    }
    // Standard robust email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(val));
  };

  const handleEmail2Change = (val: string) => {
    setEmail2(val);
    if (!val) {
      setEmail2Error(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail2Error(!emailRegex.test(val));
  };

  const handleStuckAmountChange = (val: string) => {
    // Strip all non-numeric characters first
    const clean = val.replace(/\D/g, "");
    if (!clean) {
      setStuckAmount("");
      return;
    }
    const num = parseInt(clean, 10);
    // Format with Indian standard numbering system (Intl en-IN)
    const formatted = new Intl.NumberFormat("en-IN").format(num);
    setStuckAmount(formatted);
  };

  const handleDueDateChange = (val: string) => {
    const today = new Date().toISOString().split("T")[0];
    if (val > today) {
      alert("Original payment due date cannot be a future date.");
      setDueDate(today);
    } else {
      setDueDate(val);
    }
  };



  // Live Preview selector: "notice1" | "notice2" | "notice3" | "police"
  const [previewTab, setPreviewTab] = useState<"notice1" | "notice2" | "notice3" | "police">("notice1");

  // Global validations
  const isFormValid = !!(
    defaulterName &&
    phone &&
    phone.length === 10 &&
    (!showPhone2 || (phone2 && phone2.length === 10 && phone2 !== phone)) &&
    email &&
    !emailError &&
    (!showEmail2 || (email2 && !email2Error && email2.toLowerCase().trim() !== email.toLowerCase().trim())) &&
    address &&
    stuckAmount &&
    dueDate &&
    (previewTab !== "police" || (policeStationName && policeStationEmail && policeStationAddress))
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    // 1. Intercept if modal is not shown yet: Validate inputs via ChatGPT HELLO_DROP_CHOO first
    if (!showPreviewModal) {
      setIsValidating(true);
      setValidationError(null);

      try {
        const res = await fetch("/api/cases/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            defaulterName,
            address,
            phone,
            phone2,
            email,
            email2,
            stuckAmount: stuckAmount.replace(/,/g, ""),
            dueDate,
            policeStationName,
            policeStationAddress
          }),
        });

        if (!res.ok) {
          throw new Error("Validation service failed. Proceeding with caution.");
        }

        const data = await res.json();
        if (data.success && !data.isValid) {
          setValidationError(data.reason || "Some fields contain invalid or placeholder data.");
          return;
        }

        // Passed AI input checking: Show the prominent review/preview modal
        setShowPreviewModal(true);
      } catch (err: any) {
        console.error("AI Validation error:", err);
        // Graceful fallback to let them proceed if the API key fails
        setShowPreviewModal(true);
      } finally {
        setIsValidating(false);
      }
      return;
    }

    // 2. Perform the actual case creation in the database
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/cases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          defaulterName,
          entityType,
          phone,
          phone2,
          email,
          email2,
          address,
          stuckAmount: stuckAmount.replace(/,/g, ""),
          dueDate,
          policeStationName,
          policeStationEmail,
          policeStationAddress,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create case.");
      }

      // Notify sidebar components to sync claims badge count
      window.dispatchEvent(new Event("lr_cases_updated"));

      const tour = localStorage.getItem("lr_onboarding_state");
      if (tour === "new_recovery" || tour === "new_recovery_hint_read" || !tour) {
        localStorage.setItem("lr_onboarding_state", "recovery_done");
      }

      router.push("/user/dashboard");
    } catch (err: any) {
      console.error("Failed to save claim record:", err);
      alert(err.message || "Failed to save claim record.");
    } finally {
      setIsSubmitting(false);
      setShowPreviewModal(false);
    }
  };

  return (
    <div className={`relative flex flex-col gap-6 mx-auto text-left animate-in fade-in duration-355 ${previewTab === "police" ? "max-w-7xl" : "max-w-5xl"}`}>
      
      {/* Back button */}
      <div>
        <Link 
          href="/user/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#DC2626] transition-colors bg-white px-3.5 py-2 rounded-xl border border-[#E5E7EB]/80 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Claims
        </Link>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Initiate Debt Recovery</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Enter the defaulter's details and claim information to generate and schedule your automated legal demand notices.
        </p>
      </div>

      {/* Form and Preview Layout Grid */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        {/* Mobile Tab Switcher */}
        <div className="flex lg:hidden bg-slate-100 border border-slate-200 rounded-2xl p-1 gap-1 select-none">
          <button
            type="button"
            onClick={() => setMobileTab("form")}
            className={`flex-1 py-3 text-xs font-black rounded-xl transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-1.5
              ${mobileTab === "form" 
                ? "bg-white text-[#DC2626] shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-200/30" 
                : "text-slate-500 hover:text-slate-700"}`}
          >
            📋 1. Configure Claim
          </button>
          <button
            type="button"
            onClick={() => setMobileTab("preview")}
            className={`flex-1 py-3 text-xs font-black rounded-xl transition-all focus:outline-none cursor-pointer flex items-center justify-center gap-1.5
              ${mobileTab === "preview" 
                ? "bg-white text-[#DC2626] shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-slate-200/30" 
                : "text-slate-500 hover:text-slate-700"}`}
          >
            👁️ 2. Live Preview
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
          
          {/* LEFT COLUMN: Defaulter details details */}
          <div className={`flex flex-col gap-6 lg:col-span-5 ${mobileTab === 'form' ? 'flex' : 'hidden lg:flex'}`}>
          
          {/* SECTION 1: DEFAULTER & CLAIM DETAILS */}
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
            <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2">
              1. Defaulter & Claim Details
            </h3>
            
            {/* Defaulter Name */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" /> Defaulter Legal Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g. Apex Digital Solutions"
                value={defaulterName}
                onChange={(e) => handleNameChange(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
              />
            </div>

            {/* Entity Type selection */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-slate-400" /> Entity Constitution Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Company", "Individual", "LLP / Partnership", "Proprietorship"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEntityType(type)}
                    className={`py-2 px-3 text-xs font-bold border rounded-xl transition-all cursor-pointer text-center
                      ${entityType === type 
                        ? "bg-red-50 border-[#DC2626] text-[#DC2626]" 
                        : "bg-white border-[#E5E7EB] text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Stuck Amount & Original Due Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <IndianRupee className="w-3.5 h-3.5 text-slate-400" /> Stuck Dues Amount (INR)
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 45,000"
                  value={stuckAmount}
                  onChange={(e) => handleStuckAmountChange(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Original Payment Due Date
                </label>
                <input 
                  type="date" 
                  required
                  max={new Date().toISOString().split("T")[0]}
                  value={dueDate}
                  onChange={(e) => handleDueDateChange(e.target.value)}
                />
              </div>
            </div>

            {/* Informational Help Alert for Multiple Contacts */}
            <div className="text-[11px] font-bold text-slate-500 flex items-center gap-2 bg-slate-50 border border-[#E5E7EB]/50 px-4 py-2.5 rounded-xl w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
              <span>You can enter up to 2 unique phone numbers for WhatsApp broadcasts and up to 2 unique email IDs for notice dispatches.</span>
            </div>

            {/* Defaulter Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" /> Defaulter Mobile Number 1
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>

              {!showPhone2 ? (
                <div className="flex items-center h-[46px]">
                  <button
                    type="button"
                    onClick={() => setShowPhone2(true)}
                    className="flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:text-[#DC2626]/80 bg-red-50 hover:bg-red-100/50 px-4 py-2.5 rounded-xl border border-dashed border-red-200 transition-all shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Secondary Mobile Number
                  </button>
                </div>
              ) : (
                <div className="flex flex-col relative group">
                  <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> Defaulter Mobile Number 2 (Optional)
                    </span>
                    <button 
                      type="button" 
                      onClick={() => { setShowPhone2(false); setPhone2(""); }}
                      className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="e.g. 9876543211"
                    value={phone2}
                    onChange={(e) => handlePhone2Change(e.target.value)}
                    className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                      ${phone2 && phone2 === phone ? "border-red-300 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
                  />
                  {phone2 && phone2 === phone && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1">
                      Must be unique from Mobile Number 1.
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Defaulter Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" /> Defaulter Email Address 1
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. billing@company.in"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
                {emailError && (
                  <span className="text-[11px] text-red-500 font-semibold mt-1">
                    Please enter a valid email address.
                  </span>
                )}
              </div>

              {!showEmail2 ? (
                <div className="flex items-center h-[46px]">
                  <button
                    type="button"
                    onClick={() => setShowEmail2(true)}
                    className="flex items-center gap-2 text-xs font-bold text-[#DC2626] hover:text-[#DC2626]/80 bg-red-50 hover:bg-red-100/50 px-4 py-2.5 rounded-xl border border-dashed border-red-200 transition-all shadow-sm cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Secondary Email Address
                  </button>
                </div>
              ) : (
                <div className="flex flex-col relative group">
                  <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> Defaulter Email Address 2 (Optional)
                    </span>
                    <button 
                      type="button" 
                      onClick={() => { setShowEmail2(false); setEmail2(""); setEmail2Error(false); }}
                      className="text-[10px] font-bold text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </label>
                  <input 
                    type="email" 
                    placeholder="e.g. contact@company.in"
                    value={email2}
                    onChange={(e) => handleEmail2Change(e.target.value)}
                    className={`bg-slate-50 hover:bg-slate-100/50 border rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors
                      ${email2Error || (email2 && email2.toLowerCase().trim() === email.toLowerCase().trim()) ? "border-red-300 focus:border-red-500" : "border-[#E5E7EB] focus:border-[#DC2626]"}`}
                  />
                  {email2Error && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1">
                      Please enter a valid email address.
                    </span>
                  )}
                  {email2 && email2.toLowerCase().trim() === email.toLowerCase().trim() && (
                    <span className="text-[11px] text-red-500 font-semibold mt-1">
                      Must be unique from Email Address 1.
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Defaulter Physical Address */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Physical Defaulter Address
              </label>
              <textarea 
                required
                rows={2}
                placeholder="e.g. Sector 62, Noida, Uttar Pradesh, 201301"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none transition-colors"
              />
            </div>

          </div>

          {/* SECTION 2: POLICE AUTHORITY DETAILS COMPLAINT CARD */}
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
             <div className="border-b border-[#E5E7EB]/50 pb-2.5 flex items-center justify-between gap-3">
              <h3 className="text-base font-black text-[#111827]">
                2. Jurisdictional Police Station Details
              </h3>
              <span className="text-[9px] font-black bg-slate-100 text-[#DC2626] px-2 py-0.5 rounded uppercase shrink-0">
                Notice 4 Setup
              </span>
            </div>

            {/* Jurisdictional Police Station Name */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-slate-400" /> Jurisdictional Police Station Name
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g. Sector 58 Police Station, Noida"
                value={policeStationName}
                onChange={(e) => setPoliceStationName(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
              />
            </div>

            {/* Police Station Email ID */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Police Station Email ID
              </label>
              <input 
                type="email" 
                required
                placeholder="e.g. sho.sec58.noida@uppolice.gov.in"
                value={policeStationEmail}
                onChange={(e) => setPoliceStationEmail(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
              />
            </div>

            {/* Police Station Address */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Police Station Physical Address
              </label>
              <textarea 
                required
                rows={2}
                placeholder="e.g. Sector 58 Police Station House, Noida, G.B. Nagar, UP 201301"
                value={policeStationAddress}
                onChange={(e) => setPoliceStationAddress(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none resize-none transition-colors"
              />
            </div>
          </div>

          {/* Submit Control at the bottom of form column */}
          <div className="flex flex-col gap-3 w-full">
            {validationError && (
              <div className="bg-red-50 border border-red-200 text-red-750 text-xs font-semibold p-4 rounded-xl flex flex-col gap-1 leading-normal">
                <span className="font-bold flex items-center gap-1">⚠️ AI Input Check Flagged:</span>
                <span>{validationError}</span>
                <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider mt-1">Please correct the fields before submitting.</span>
              </div>
            )}
            
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting || isValidating}
              className="w-full px-6 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none shadow-md shadow-red-950/15"
            >
              {isValidating ? (
                <>Auditing Inputs...</>
              ) : isSubmitting ? (
                <>Saving Claim Tracks...</>
              ) : (
                <>Confirm & Review Claim</>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive live notice switcher & dynamic draft letter letterhead */}
        <div className={`flex flex-col gap-4 lg:sticky lg:top-6 lg:col-span-7 ${mobileTab === 'preview' ? 'flex' : 'hidden lg:flex'}`}>
          
          {/* Tab selector */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">Select Demand Notice to Preview</span>
            <div className="grid grid-cols-4 gap-1.5 bg-slate-150 p-1.5 rounded-xl border border-slate-200/40 shadow-inner">
              {[
                { tab: "notice1", label: "Notice 1" },
                { tab: "notice2", label: "Notice 2" },
                { tab: "notice3", label: "Notice 3" },
                { tab: "police", label: "Police SHO" }
              ].map((d) => (
                <button
                  key={d.tab}
                  type="button"
                  onClick={() => setPreviewTab(d.tab as any)}
                  className={`py-2.5 text-[10.5px] sm:text-xs font-bold rounded-lg cursor-pointer transition-all text-center
                    ${previewTab === d.tab 
                      ? "bg-white text-[#DC2626] shadow-sm font-extrabold" 
                      : "text-slate-500 hover:text-[#111827] hover:bg-slate-50"}`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            
            {/* Active Schedule details status tag */}
            <span className="text-[9px] font-extrabold uppercase text-slate-400 block tracking-wider mt-0.5 leading-none">
              {previewTab === "notice1" && "⏰ Queued for immediate dispatch (1 Hour Grace)"}
              {previewTab === "notice2" && "🗓️ Queued for automated dispatch (Notice 1 + 1 Week)"}
              {previewTab === "notice3" && "🗓️ Queued for automated dispatch (Notice 2 + 1 Week)"}
              {previewTab === "police" && "👮 Queued for automatic Sho complaint draft (Notice 3 + 1 Week)"}
            </span>
          </div>

          {/* Letterhead Mock Paper */}
          <div 
            className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-4 relative select-text"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {/* Legal letterhead graphic banner */}
            <div className="flex flex-col text-center pb-2">
              <img src="/notices/header logo AMA .png" alt="AMA Logo" className="w-[220px] sm:w-[260px] h-auto block mx-auto mb-1" />
              <div className="text-center text-[9px] sm:text-[10px] leading-normal text-black font-semibold">
                <div className="font-bold text-[10px] sm:text-[11px] mb-0.5">Advocate & Solicitors</div>
                <div>2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)</div>
                <div className="font-bold text-[8.5px] sm:text-[9.5px] mt-1">
                  E: <span className="text-[#0066cc] underline">notice@amalegalsolutions.com</span>
                </div>
              </div>
              <table className="w-full border-collapse border-none mt-2.5 text-[8.5px] sm:text-[10px] text-black font-bold">
                <tbody>
                  <tr className="align-middle">
                    <td className="text-left p-0 pb-0.5 border-none">Advocate Anuj Anand Malik</td>
                    <td className="text-right p-0 pb-0.5 font-bold border-none">MEMBER - BAR COUNCIL OF DELHI</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-left p-0 pb-0.5 border-none">Advocate Shrey Arora</td>
                    <td className="text-right p-0 pb-0.5 font-bold border-none">MEMBER - MCIA (MUMBAI)</td>
                  </tr>
                  <tr className="align-middle">
                    <td className="text-left p-0 border-none"></td>
                    <td className="text-right p-0 font-bold border-none">ASSOCIATION MEMBER - IACC</td>
                  </tr>
                </tbody>
              </table>
              <table className="w-full border-collapse border-none mt-2 text-[8.5px] sm:text-[9.5px] text-slate-500 font-bold">
                <tbody>
                  <tr className="align-middle">
                    <td className="text-left p-0 border-none">
                      Ref: {previewTab === "notice2" ? `${generatedCaseId}-N2` : previewTab === "notice3" ? `${generatedCaseId}-N3` : previewTab === "police" ? `${generatedCaseId}-POLICE` : `${generatedCaseId}-N1`}
                    </td>
                    <td className="text-right p-0 border-none">Date: {new Date().toLocaleDateString("en-IN")}</td>
                  </tr>
                </tbody>
              </table>
              <div className="border-b-2 border-black mt-1.5"></div>
            </div>

            {/* ── DYNAMIC PREVIEW PANES ── */}
            <div className="w-full flex flex-col gap-4">
            
            {/* Notice 1 */}
            {previewTab === "notice1" && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="text-center font-bold text-slate-900 border-y border-[#E5E7EB] py-1.5 tracking-wide text-xs uppercase leading-tight">
                  LEGAL DEMAND NOTICE
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                  <div className="font-bold text-slate-600 flex flex-col gap-0.5">
                    <span>Date: {new Date().toLocaleDateString("en-IN")}</span>
                    <span className="mt-1">To,</span>
                    <span className="font-extrabold text-slate-900 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                      {defaulterName || "[Name of Opposite Party / Individual / Company]"}
                    </span>
                    {phone && <span className="text-slate-550 text-[8.5px]">Mobile: {phone}{phone2 ? `, ${phone2}` : ""}</span>}
                    {email && <span className="text-slate-550 text-[8.5px]">Email: {email}{email2 ? `, ${email2}` : ""}</span>}
                    <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                      {address || "[Address]"}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-slate-900 border-b border-[#E5E7EB] pb-1 uppercase leading-tight">
                    Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹{stuckAmount || "[Amount]"} Towards {clientProfile?.name || "Tech AMA"}
                  </div>

                  <p>Dear Sir/Madam,</p>
                  
                  <p>
                    Under instructions from and on behalf of our client {clientProfile?.name || "Tech AMA"}, residing at <strong className="bg-yellow-50 px-0.5">{clientProfile?.address || "Delhi, India"}</strong>, we hereby call upon you to address and resolve the pending amount/claim arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                  </p>
                  
                  <p>
                    It has been informed to us that despite repeated requests, reminders, and communications made by our client, the matter remains unresolved and an amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong> is still due/pending towards our client.
                  </p>
                  
                  <p>
                    Our client has acted in good faith and fulfilled their part of obligations; however, the pending dues/claim have not been settled by you till date.
                  </p>
                  
                  <div className="flex flex-col gap-1">
                    <span>You are therefore hereby requested to:</span>
                    <span>1. Clear/pay the outstanding amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong>; and/or</span>
                    <span>2. Resolve the matter amicably within 7 (Seven) days from the receipt of this notice.</span>
                  </div>
                  
                  <p>
                    In the event that you dispute the claim or amount, you are requested to provide your written response along with supporting documents within the aforesaid period for appropriate consideration.
                  </p>
                  
                  <p>
                    Please take notice that failure to respond or resolve the matter within the stipulated time may compel our client to initiate appropriate legal proceedings and remedies available under applicable laws, entirely at your own risk as to costs and consequences.
                  </p>
                  
                  <p>
                    This notice is being issued without prejudice to all rights, claims, remedies, and legal actions available to our client under law.
                  </p>
                  
                  <p>
                    A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                  </p>

                  <div className="mt-2 flex flex-col gap-0.5 text-left text-[8.5px] font-bold text-slate-500">
                    <span>For and on behalf of {clientProfile?.name || "Tech AMA"}</span>
                    <span className="text-slate-900 font-extrabold uppercase mt-1">Kindly treat this matter as urgent.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Notice 2 */}
            {previewTab === "notice2" && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="text-[9.5px] leading-relaxed text-slate-600 flex flex-col">
                  <span className="text-[8px] text-slate-450 font-bold uppercase tracking-wider mb-0.5">TO DEFAULTER:</span>
                  <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                    {defaulterName || "[DEFAULTER LEGAL NAME]"}
                  </span>
                  <span>Constitution: {entityType}</span>
                  {phone && <span>Mobile: {phone}{phone2 ? `, ${phone2}` : ""}</span>}
                  {email && <span>Email: {email}{email2 ? `, ${email2}` : ""}</span>}
                  <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                    {address || "[PHYSICAL STREET ADDRESS]"}
                  </span>
                </div>

                <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 uppercase leading-tight">
                  Subject: Demand Notice for Immediate Clearance of Outstanding Liability of ₹{stuckAmount || "[Amount]"} Towards {clientProfile?.name || "Tech AMA"}
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                  <p>Dear Sir/Madam,</p>
                  <p>
                    Under instructions and authority from our client <strong>{clientProfile?.name || "Tech AMA"}</strong>, residing/having office at <strong>{clientProfile?.address || "Delhi, India"}</strong>, we hereby issue the present Second and Final Legal Notice calling upon you to immediately clear the outstanding dues/claim amounting to <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong> payable towards our client arising out of transactions, services, agreements, commitments, business dealings, or financial obligations undertaken by you.
                  </p>
                  <p>
                    Despite repeated reminders, communications, and an earlier legal notice served upon you, you have failed to regularize the matter or provide any satisfactory response. Your conduct clearly reflects deliberate negligence, avoidance, and non-compliance towards lawful obligations owed to our client.
                  </p>
                  <p>
                    It is pertinent to mention that if any person dishonestly retains money, intentionally avoids payment despite liability, induces another party under false assurances, or causes wrongful financial loss, such actions may attract legal consequences under applicable provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong>, including but not limited to provisions relating to:
                  </p>
                  <div className="flex flex-col gap-1 pl-4">
                    <span>1. Cheating and dishonest inducement;</span>
                    <span>2. Criminal breach of trust;</span>
                    <span>3. Fraudulent or dishonest conduct causing wrongful loss.</span>
                  </div>
                  <p>
                    Our client still wishes to provide you with a final opportunity to amicably resolve the matter without initiating formal legal proceedings.
                  </p>
                  <p>You are therefore finally called upon to:</p>
                  <div className="flex flex-col gap-1 pl-4">
                    <span>1. Make payment of the outstanding amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount || "[Amount]"}</strong> within 7 (Seven) days from receipt of this notice; OR</span>
                    <span>2. Provide a written explanation along with documentary proof disputing the claim within the aforesaid period.</span>
                  </div>
                  <p>
                    Kindly take notice that upon failure to comply, our client shall be constrained to initiate appropriate civil and/or criminal proceedings before the competent authorities/courts/forum, including filing complaints before the appropriate police authorities and legal forums, entirely at your own risk as to costs, liabilities, and consequences.
                  </p>
                  <p>
                    Please further note that any continued avoidance, non-response, or intentional withholding of payment may be relied upon as adverse conduct in future legal proceedings.
                  </p>
                  <p>
                    This notice is issued without prejudice to all legal rights and remedies available to our client under applicable law.
                  </p>
                  <p>
                    A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                  </p>
                </div>
              </div>
            )}

            {/* Notice 3 */}
            {previewTab === "notice3" && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="text-[9.5px] leading-relaxed text-slate-650 flex flex-col">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">TO DEFAULTER:</span>
                  <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                    {defaulterName || "[DEFAULTER LEGAL NAME]"}
                  </span>
                  <span>Constitution: {entityType}</span>
                  {phone && <span>Mobile: {phone}{phone2 ? `, ${phone2}` : ""}</span>}
                  {email && <span>Email: {email}{email2 ? `, ${email2}` : ""}</span>}
                  <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                    {address || "[PHYSICAL STREET ADDRESS]"}
                  </span>
                </div>

                <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 uppercase leading-tight">
                  Subject: Final Pre-Litigation and Police Complaint Notice for Recovery of ₹{stuckAmount || "[Amount]"} Under Applicable Provisions of Bharatiya Nyaya Sanhita (BNS)
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                  <p>Dear Sir/Madam,</p>
                  <p>
                    Under instructions from and on behalf of my client <strong>{clientProfile?.name || "Tech AMA"}</strong>, I hereby issue the present Final Legal Notice against you with respect to the outstanding amount/claim of <strong className="bg-yellow-50 px-0.5">INR {stuckAmount || "[Amount]"}/-</strong> arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                  </p>
                  <p>
                    It is pertinent to note that despite repeated reminders, follow-ups, and opportunities extended to you for amicable resolution, you have deliberately failed and neglected to clear the outstanding liability and/or honour your commitments. Your conduct has caused substantial financial loss, harassment, mental agony, and inconvenience to my client.
                  </p>
                  <p>Your actions prima facie disclose elements of:</p>
                  <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                    <span>- dishonest intention,</span>
                    <span>- wrongful withholding of money/property,</span>
                    <span>- misrepresentation,</span>
                    <span>- criminal breach of trust,</span>
                    <span>- cheating, and</span>
                    <span>- intentional non-compliance despite repeated demands.</span>
                  </div>
                  <p>
                    Accordingly, your acts may attract penal consequences under the relevant provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong> including but not limited to:
                  </p>
                  <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                    <span>- <strong>Section 316 BNS</strong> – Criminal Breach of Trust</span>
                    <span>- <strong>Section 318 BNS</strong> – Cheating</span>
                    <span>- <strong>Section 351 BNS</strong> – Criminal Intimidation (where applicable)</span>
                    <span>- Any other applicable civil and criminal provisions based upon the facts and documents available on record.</span>
                  </div>
                  <p>You are therefore called upon for the <strong>FINAL</strong> time to:</p>
                  <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                    <span>1. Clear/pay the outstanding amount of <strong className="bg-yellow-50 px-0.5">INR {stuckAmount || "[Amount]"}/-</strong>;</span>
                    <span>2. Provide written confirmation of settlement; and</span>
                    <span>3. Resolve the matter within <strong>72 HOURS</strong> from receipt of this notice.</span>
                  </div>
                  <p>
                    Please take notice that in the event of your failure to comply within the aforesaid period, my client shall be constrained to initiate appropriate legal proceedings against you, including but not limited to:
                  </p>
                  <div className="flex flex-col gap-0.5 pl-3 text-slate-700 font-semibold">
                    <span>- filing of Police Complaint/FIR before the competent Police Authorities;</span>
                    <span>- initiation of criminal proceedings under applicable provisions of BNS;</span>
                    <span>- civil recovery proceedings before appropriate courts/forums;</span>
                    <span>- recovery of interest, damages, litigation costs, and legal expenses.</span>
                  </div>
                  <p>
                    Kindly note that the entire risk as to costs and legal consequences arising therefrom shall solely be attributable to you.
                  </p>
                  <p>
                    This notice is issued without prejudice to all other legal rights and remedies available to my client under applicable law.
                  </p>
                  <p>
                    A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                  </p>
                </div>
              </div>
            )}

            {/* SHO Police Complaint */}
            {previewTab === "police" && (
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-[9.5px] leading-relaxed text-slate-650 flex flex-col">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">TO POLICE AUTHORITY:</span>
                  <span className="font-extrabold text-slate-800">To,</span>
                  <span className="font-extrabold text-slate-800">The Station House Officer (SHO),</span>
                  <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit mt-0.5 leading-tight">
                    {policeStationName || "[POLICE STATION NAME]"}
                  </span>
                  <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                    {policeStationAddress || "[POLICE STATION ADDRESS]"}
                  </span>
                </div>
                <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 uppercase leading-tight">
                  Subject: Complaint Against {defaulterName || "[Accused Name]"} for Cheating, Criminal Breach of Trust, Dishonest Non-Payment and Other Applicable Offences Under Bharatiya Nyaya Sanhita (BNS)
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 select-text">
                  <div className="text-[10px] font-black uppercase text-slate-800 border-b border-[#E5E7EB] pb-0.5">COMPLAINANT DETAILS</div>
                  <div className="grid grid-cols-3 text-[9px] font-semibold text-slate-700 gap-y-0.5 pl-1">
                    <span className="font-bold text-slate-500">Name:</span><span className="col-span-2 text-slate-950">{clientProfile?.name || "Tech AMA"}</span>
                    <span className="font-bold text-slate-500">Phone Number:</span><span className="col-span-2">{clientProfile?.phone ? "+91 " + clientProfile.phone : "+91 87003 43611"}</span>
                    <span className="font-bold text-slate-500">Email ID:</span><span className="col-span-2">{clientProfile?.email || "notice@amalegalsolutions.com"}</span>
                    <span className="font-bold text-slate-500">Address:</span><span className="col-span-2">{clientProfile?.address || "2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)"}</span>
                  </div>

                  <div className="text-[10px] font-black uppercase text-slate-800 border-b border-[#E5E7EB] pb-0.5 mt-1">ACCUSED DETAILS</div>
                  <div className="grid grid-cols-3 text-[9px] font-semibold text-slate-700 gap-y-0.5 pl-1">
                    <span className="font-bold text-slate-500">Name:</span><span className="col-span-2 text-slate-950 font-black bg-yellow-50 border border-yellow-100 rounded px-1 w-fit">{defaulterName || "[Accused Name]"}</span>
                    <span className="font-bold text-slate-500">Phone Number(s):</span><span className="col-span-2">{phone}{phone2 ? `, ${phone2}` : ""}</span>
                    <span className="font-bold text-slate-500">Email ID(s):</span><span className="col-span-2">{email}{email2 ? `, ${email2}` : ""}</span>
                    <span className="font-bold text-slate-500">Address:</span><span className="col-span-2 bg-yellow-50 border border-yellow-100 rounded px-1 w-fit">{address || "[Accused Address]"}</span>
                  </div>

                  <p className="mt-1 font-semibold text-slate-950">Respected Sir/Madam,</p>

                  <p>
                    Under instructions from and on behalf of our client, namely <strong>{clientProfile?.name || "Tech AMA"}</strong>, we, AMA Legal Solutions, through our authorized legal representatives, hereby submit the present complaint against the above-mentioned accused for acts involving deliberate non-payment of legitimate dues, cheating, dishonest inducement, criminal breach of trust, and wrongful financial loss caused to our client.
                  </p>

                  <p>
                    That the accused had entered into a transaction/understanding with our client, pursuant to which an amount of <strong className="bg-yellow-50 px-1">INR {stuckAmount || "[Amount]"}/-</strong> became legally due and payable to our client.
                  </p>

                  <p>
                    Despite repeated follow-ups, calls, messages, reminders, and legal notices issued on behalf of our client, the accused has intentionally failed and neglected to clear the outstanding dues. The conduct of the accused clearly demonstrates dishonest intention from the very inception of the transaction and reflects wilful default and deliberate evasion of liability.
                  </p>

                  <p>
                    It is pertinent to mention that the accused has continuously avoided communication and has failed to provide any lawful justification for withholding the legitimate dues of our client. Such conduct has caused severe financial loss, mental harassment, business disruption, and unnecessary hardship to our client.
                  </p>

                  <p>
                    The actions of the accused prima facie attract offences punishable under the applicable provisions of the <strong>Bharatiya Nyaya Sanhita (BNS)</strong>, including but not limited to offences relating to:
                  </p>
                  <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                    <span>1. Cheating;</span>
                    <span>2. Criminal Breach of Trust;</span>
                    <span>3. Dishonest Misappropriation;</span>
                    <span>4. Fraudulent and dishonest inducement; and</span>
                    <span>5. Other allied offences as may be made out during investigation.</span>
                  </div>

                  <p>In view of the foregoing, we respectfully request your good office to:</p>
                  <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                    <span>1. Take cognizance of the present complaint;</span>
                    <span>2. Initiate appropriate inquiry/investigation against the accused;</span>
                    <span>3. Summon/call the accused for questioning;</span>
                    <span>4. Take necessary legal action in accordance with law; and</span>
                    <span>5. Protect the rights and interests of our client.</span>
                  </div>

                  <p className="font-bold text-slate-900 mt-1">
                    Kindly treat this matter as urgent and take appropriate action at the earliest.
                  </p>
                </div>
              </div>
            )}
            </div>

            {/* Signature & High Fidelity Repeating Footer */}
            <div className="mt-auto pt-2 flex flex-col gap-2">
              <div className="text-left px-1">
                <div style={{ marginBottom: "4px", whiteSpace: "nowrap", width: "fit-content", textAlign: "left" }}>
                  <img src="/notices/Signature.png" alt="Signature" className="h-[35px] sm:h-[45px] w-auto inline-block" style={{ verticalAlign: "bottom", marginRight: "12px" }} />
                  <img src="/notices/AMA stamp logo.png" alt="Stamp" className="h-[45px] sm:h-[55px] w-auto object-contain opacity-90 inline-block" style={{ verticalAlign: "bottom" }} />
                </div>
                <span className="font-bold text-slate-800 text-[10px] sm:text-[11px] block">For AMA Legal Solutions<sup>®</sup></span>
                <span className="text-slate-500 text-[9px] block mt-0.5">Through Authorized Signatory</span>
              </div>
              <div className="border-t border-b border-black py-1 flex items-center justify-between text-[6.5px] sm:text-[7.5px] font-bold text-black uppercase px-1">
                <div className="w-[30px]"></div>
                <div className="text-center tracking-wide whitespace-nowrap flex-1">
                  GURUGRAM - DELHI - NOIDA - BENGALURU - MUMBAI
                </div>
                <div className="w-[30px] flex justify-end">
                  <img src="/notices/AMA stamp logo.png" alt="Stamp" className="h-[20px] sm:h-[26px] w-auto object-contain opacity-90 block" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </form>

    {/* ── PREVIEW & FINAL CONFIRMATION MODAL ── */}
    {showPreviewModal && (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-in zoom-in-95 duration-200 text-left">
          <div>
            <h3 className="text-lg font-black text-slate-900 tracking-tight">Review Claim Details & Confirm</h3>
            <p className="text-xs text-slate-500 font-semibold mt-1">
              Verify that all information is completely accurate before beginning automated dispatch.
            </p>
          </div>

          {/* Structured Details Preview */}
          <div className="border border-slate-100 rounded-2xl overflow-hidden text-xs">
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
              Defaulter & Dues Summary
            </div>
            <div className="grid grid-cols-3 border-b border-slate-100 px-4 py-2.5 gap-y-2 gap-x-1.5">
              <span className="font-bold text-slate-500">Legal Name:</span>
              <span className="col-span-2 text-slate-900 font-extrabold">{defaulterName}</span>
              <span className="font-bold text-slate-500">Type:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{entityType}</span>
              <span className="font-bold text-slate-500">Mobile Phone 1:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{phone}</span>
              {phone2 && (
                <>
                  <span className="font-bold text-slate-500">Mobile Phone 2:</span>
                  <span className="col-span-2 text-slate-700 font-semibold">{phone2}</span>
                </>
              )}
              <span className="font-bold text-slate-500">Email Address 1:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{email}</span>
              {email2 && (
                <>
                  <span className="font-bold text-slate-500">Email Address 2:</span>
                  <span className="col-span-2 text-slate-700 font-semibold">{email2}</span>
                </>
              )}
              <span className="font-bold text-slate-500">Physical Address:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{address}</span>
              <span className="font-bold text-slate-500">Stuck Amount:</span>
              <span className="col-span-2 text-indigo-700 font-extrabold">₹{stuckAmount || ""}</span>
              <span className="font-bold text-slate-500">Due Date:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{dueDate}</span>
            </div>

            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 font-black text-slate-800 uppercase tracking-wider text-[9px]">
              Jurisdictional Police Station
            </div>
            <div className="grid grid-cols-3 px-4 py-2.5 gap-y-2 gap-x-1.5">
              <span className="font-bold text-slate-500">Station Name:</span>
              <span className="col-span-2 text-slate-900 font-bold">{policeStationName}</span>
              <span className="font-bold text-slate-500">Station Email:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{policeStationEmail}</span>
              <span className="font-bold text-slate-500">Station Address:</span>
              <span className="col-span-2 text-slate-700 font-semibold">{policeStationAddress}</span>
            </div>
          </div>

          {/* Prominent Legal Warning notice */}
          <div className="bg-red-50 border border-red-200 p-4 rounded-2xl flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#DC2626] shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5 text-[#DC2626] leading-relaxed">
              <span className="text-[10px] font-black uppercase tracking-wider">CRITICAL LEGAL NOTICE</span>
              <span className="text-xs font-bold font-sans">
                These details will not be edited or changed in future. Confirm them correctly.
              </span>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPreviewModal(false)}
              className="flex-1 px-4 py-3 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 rounded-xl transition-all cursor-pointer text-center"
            >
              No, Edit Details
            </button>
            <button
              type="button"
              onClick={(e) => {
                handleSubmit(e);
              }}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none shadow-md shadow-red-950/15"
            >
              {isSubmitting ? "Launching Claim..." : "Yes, Confirm & Submit"}
            </button>
          </div>
        </div>
      </div>
    )}

      {/* Onboarding Tour Tooltips */}
      {onboardingState === "new_recovery" && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          {onboardingTourStep === 1 ? (
            <div className="fixed sm:absolute top-[280px] left-4 right-4 sm:left-[20px] sm:top-[300px] bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-700 max-w-sm flex flex-col gap-3 animate-in slide-in-from-top-4 duration-300 pointer-events-auto">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Claim Setup (1/2)</span>
                <button onClick={() => setOnboardingState(null)} className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer">✕</button>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                Enter the details of the entity or individual you wish to recover money from. Fill in their legal name, outstanding amount, and local police station.
              </p>
              <div className="flex justify-end gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setOnboardingState(null)}
                  className="px-3 py-1.5 text-[10px] font-bold text-slate-350 hover:text-white cursor-pointer bg-transparent"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => setOnboardingTourStep(2)}
                  className="px-3.5 py-1.5 text-[10px] font-black bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg cursor-pointer"
                >
                  Next Hint →
                </button>
              </div>
            </div>
          ) : (
            <div className="fixed sm:absolute top-[200px] right-4 left-4 sm:left-auto sm:right-[20px] sm:top-[280px] bg-slate-900 text-white rounded-2xl p-5 shadow-2xl border border-slate-700 max-w-sm flex flex-col gap-3 animate-in slide-in-from-right-4 duration-300 pointer-events-auto">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/50 px-2 py-0.5 rounded select-none">Live Previews (2/2)</span>
                <button onClick={() => setOnboardingState(null)} className="text-slate-400 hover:text-white text-xs font-bold cursor-pointer">✕</button>
              </div>
              <p className="text-xs font-semibold leading-relaxed">
                Your legal demand notice drafts compile in real time on this letterhead! Use these tabs to toggle between Notice 1, Notice 2, Notice 3, and the Police SHO Complaint.
              </p>
              <div className="flex justify-end gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => {
                    setOnboardingState(null);
                    localStorage.setItem("lr_onboarding_state", "new_recovery_hint_read");
                  }}
                  className="px-4 py-2 text-[10px] font-black bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg cursor-pointer"
                >
                  Got It!
                </button>
              </div>
            </div>
          )}
        </div>
      )}

  </div>
  );
}

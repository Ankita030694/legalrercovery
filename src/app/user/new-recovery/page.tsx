"use client";

import React, { useState } from "react";
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
  Lock
} from "lucide-react";
import Link from "next/link";

export default function NewRecoveryForm() {
  const router = useRouter();
  
  // ── FORM STATE: SECTION 1 (DEFAULTER & DUES) ──
  const [defaulterName, setDefaulterName] = useState("");
  const [entityType, setEntityType] = useState("Company");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [stuckAmount, setStuckAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  // ── FORM STATE: SECTION 2 (POLICE AUTHORITY) ──
  const [policeStationName, setPoliceStationName] = useState("");
  const [policeStationEmail, setPoliceStationEmail] = useState("");
  const [policeStationAddress, setPoliceStationAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Live Preview selector: "notice1" | "notice2" | "notice3" | "police"
  const [previewTab, setPreviewTab] = useState<"notice1" | "notice2" | "notice3" | "police">("notice1");

  // Global validations
  const isFormValid = !!(
    defaulterName &&
    phone &&
    email &&
    address &&
    stuckAmount &&
    dueDate &&
    (previewTab !== "police" || (policeStationName && policeStationEmail && policeStationAddress))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const stored = localStorage.getItem("lr_cases");
        let casesList = stored ? JSON.parse(stored) : [];

        const today = new Date();
        const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
        const threeWeeksLater = new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000);

        const formatDate = (d: Date) => {
          return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
        };

        const newCase = {
          id: `case-${Date.now()}`,
          defaulterName,
          entityType,
          stuckAmount: parseFloat(stuckAmount),
          dueDate,
          phone,
          email,
          address,
          policeStationName,
          policeStationEmail,
          policeStationAddress,
          status: "active",
          currentStep: 1,
          createdAt: today.toISOString(),
          timeline: [
            { 
              step: 1, 
              label: "First Notice", 
              description: "Sent after 1 hour grace period", 
              date: "Today, Grace Active", 
              status: "active", 
              timeRemaining: "59 mins remaining" 
            },
            { 
              step: 2, 
              label: "Second Notice", 
              description: "Dispatched exactly 1 week after", 
              date: formatDate(oneWeekLater), 
              status: "locked" 
            },
            { 
              step: 3, 
              label: "Third Notice", 
              description: "Final demand notice prior to filing", 
              date: formatDate(twoWeeksLater), 
              status: "locked" 
            },
            { 
              step: 4, 
              label: "SHO Criminal Complaint", 
              description: `Drafted complaint copy shared for ${policeStationName}`, 
              date: formatDate(threeWeeksLater), 
              status: "locked" 
            }
          ]
        };

        casesList.unshift(newCase);
        localStorage.setItem("lr_cases", JSON.stringify(casesList));
        
        // Notify sidebar components to sync claims badge count
        window.dispatchEvent(new Event("lr_cases_updated"));

        router.push("/user/dashboard");
      } catch (err) {
        console.error("Failed to save claim record:", err);
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className={`flex flex-col gap-6 mx-auto text-left animate-in fade-in duration-355 ${previewTab === "police" ? "max-w-7xl" : "max-w-5xl"}`}>
      
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
        <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">New Dues Notice Wizard</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Provide claim placeholders and instantly preview your legal notices prior to Speed Post courier queuing.
        </p>
      </div>

      {/* Form and Preview Layout Grid */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
          
          {/* LEFT COLUMN: Defaulter details details */}
          <div className={`flex flex-col gap-6 ${previewTab === "police" ? "lg:col-span-4" : "lg:col-span-6"}`}>
          
          {/* SECTION 1: DEFAULTER & CLAIM DETAILS */}
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
            <h3 className="text-base font-black text-[#111827] border-b border-[#E5E7EB]/50 pb-2">
              1. Defaulter & Stuck Dues details
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
                onChange={(e) => setDefaulterName(e.target.value)}
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
                  type="number" 
                  required
                  placeholder="e.g. 45000"
                  value={stuckAmount}
                  onChange={(e) => setStuckAmount(e.target.value)}
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
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
                />
              </div>
            </div>

            {/* Defaulter Phone */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> Defaulter Mobile Number
              </label>
              <input 
                type="tel" 
                required
                placeholder="e.g. +91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
              />
            </div>

            {/* Defaulter Email */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-slate-600 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> Defaulter Email Address
              </label>
              <input 
                type="email" 
                required
                placeholder="e.g. billing@company.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-50 hover:bg-slate-100/50 border border-[#E5E7EB] focus:border-[#DC2626] rounded-xl px-4 py-3 text-sm font-semibold outline-none transition-colors"
              />
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

            {/* Submit Control */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full px-6 py-3 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none shadow-md shadow-red-950/15"
              >
                {isSubmitting ? "Saving Claim Tracks..." : "Confirm & Launch Claim Queue"}
              </button>
            </div>
          </div>
        </div>

          {/* MIDDLE COLUMN: POLICE AUTHORITY DETAILS COMPLAINT MODAL */}
          {previewTab === "police" && (
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
                <div className="border-b border-[#E5E7EB]/50 pb-2.5 flex items-center justify-between gap-3">
                  <h3 className="text-base font-black text-[#111827]">
                    2. Police Authority details
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
            </div>
          )}

        {/* RIGHT COLUMN: Interactive live notice switcher & dynamic draft letter letterhead */}
        <div className={`flex flex-col gap-4 lg:sticky lg:top-6 ${previewTab === "police" ? "lg:col-span-4" : "lg:col-span-6"}`}>
          
          {/* Tab selector */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-black text-[#111827] uppercase tracking-wider block">Live Placeholder Notice Switcher</span>
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
          <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-5 relative overflow-hidden font-serif aspect-[3/4] select-text">
            
            {/* Legal letterhead graphic banner */}
            <div className="flex flex-col items-center border-b-2 border-black pb-3 text-center">
              <img src="/ama4.png" alt="AMA Legal Solutions" className="h-14 sm:h-16 w-auto object-contain mb-1" />
              <span className="text-[8.5px] text-slate-500 uppercase tracking-wider font-bold font-sans">AMA LEGAL SOLUTIONS</span>
              <span className="text-[7.5px] text-slate-400 font-semibold font-sans mt-0.5">E: legal@amalegalsolutions.com | T: +91 87003 43611</span>
            </div>

            {/* References */}
            <div className="flex justify-between text-[10px] text-slate-450 font-bold font-sans">
              <span>Ref: AMA/LRN-{Date.now().toString().slice(-5)}</span>
              <span>Date: {new Date().toLocaleDateString("en-IN")}</span>
            </div>

            {/* ── DYNAMIC PREVIEW PANES ── */}
            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-4">
            
            {/* Notice 1 */}
            {previewTab === "notice1" && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="text-center font-bold text-slate-900 border-y border-[#E5E7EB] py-1.5 font-sans tracking-wide text-xs uppercase leading-tight">
                  LEGAL DEMAND NOTICE
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 font-serif select-text">
                  <div className="font-sans font-bold text-slate-600 flex flex-col gap-0.5">
                    <span>Date: {new Date().toLocaleDateString("en-IN")}</span>
                    <span className="mt-1">To,</span>
                    <span className="font-extrabold text-slate-900 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                      {defaulterName || "[Name of Opposite Party / Individual / Company]"}
                    </span>
                    <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                      {address || "[Address]"}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-slate-900 border-b border-[#E5E7EB] pb-1 font-sans uppercase leading-tight">
                    Subject: Notice for Resolution of Outstanding Payment / Pending Claim
                  </div>

                  <p>Dear Sir/Madam,</p>
                  
                  <p>
                    Under instructions from and on behalf of our client Tech AMA, residing at <strong className="bg-yellow-50 px-0.5">Delhi, India</strong>, we hereby call upon you to address and resolve the pending amount/claim arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                  </p>
                  
                  <p>
                    It has been informed to us that despite repeated requests, reminders, and communications made by our client, the matter remains unresolved and an amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[Amount]"}</strong> is still due/pending towards our client.
                  </p>
                  
                  <p>
                    Our client has acted in good faith and fulfilled their part of obligations; however, the pending dues/claim have not been settled by you till date.
                  </p>
                  
                  <div className="flex flex-col gap-1">
                    <span>You are therefore hereby requested to:</span>
                    <span>1. Clear/pay the outstanding amount of <strong className="bg-yellow-50 px-0.5">₹{stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[Amount]"}</strong>; and/or</span>
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

                  <div className="mt-2 flex flex-col gap-0.5 text-left font-sans text-[8.5px] font-bold text-slate-500">
                    <span>For and on behalf of Tech AMA</span>
                    <span className="text-slate-900 font-extrabold uppercase mt-1">Kindly treat this matter as urgent.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Notice 2 */}
            {previewTab === "notice2" && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="text-[9.5px] leading-relaxed text-slate-600 flex flex-col font-sans">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 font-sans">TO DEFAULTER:</span>
                  <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                    {defaulterName || "[DEFAULTER LEGAL NAME]"}
                  </span>
                  <span>Constitution: {entityType}</span>
                  {phone && <span>Mobile: {phone}</span>}
                  {email && <span>Email: {email}</span>}
                  <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                    {address || "[PHYSICAL STREET ADDRESS]"}
                  </span>
                </div>

                <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 font-sans uppercase leading-tight">
                  SUBJECT: SECOND LEGAL DEMAND NOTICE - FORMAL STRATIFIED WARNING AND INTENSE DEBT RECOVERY PIPELINE ACTIVATION IN REGARD TO THE EVASION OF MATURED DUES
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 font-serif select-text">
                  <p>Dear Sir/Madam,</p>
                  <p>
                    <strong>SUBSEQUENT SECOND DEMAND NOTICE:</strong> This notice constitutes a formal second warning follow-up demand. A primary legal demand notice was served to your registered office and email addresses previously, which you have chosen to ignore.
                  </p>
                  <p>
                    Our Client reports that you have continuously failed and neglected to honor your outstanding liability of <strong className="bg-yellow-50 px-1">INR {stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[STUCK AMOUNT]"}</strong> originally due since <strong className="bg-yellow-50 px-1">{dueDate ? new Date(dueDate).toLocaleDateString("en-IN") : "[DUE DATE]"}</strong>. This persistent non-payment and absolute lack of response indicates a calculated, dishonest intention to fraudulently misappropriate and retain our Client's hard-earned money, whether relating to pending employee salary, freelancer payouts, commercial rents, security deposits, or defective service compensation.
                  </p>
                  <p>
                    Be informed that our Client has already initiated comprehensive tracking of your corporate assets, property holdings, and business bank accounts. Additionally, steps are underway to report your non-compliance to regional registries, professional networks, credit rating agencies, and business circles.
                  </p>
                  <p>
                    Please be warned that unless you clear the entire outstanding balance along with penalty interest immediately, our Client will assign this debt to authorized recovery tribunals and corporate compliance channels. This will lead to extensive reputational damage and the immediate initiation of public corporate winding-up petitions.
                  </p>
                  <p className="mt-2">
                    This is without prejudice to any other legal remedies, reliefs, and interest charges that our Client may be entitled to claim under law.
                  </p>
                </div>
              </div>
            )}

            {/* Notice 3 */}
            {previewTab === "notice3" && (
              <div className="flex-1 flex flex-col gap-4">
                <div className="text-[9.5px] leading-relaxed text-slate-600 flex flex-col font-sans">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5 font-sans">TO DEFAULTER:</span>
                  <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit leading-tight mt-0.5">
                    {defaulterName || "[DEFAULTER LEGAL NAME]"}
                  </span>
                  <span>Constitution: {entityType}</span>
                  {phone && <span>Mobile: {phone}</span>}
                  {email && <span>Email: {email}</span>}
                  <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                    {address || "[PHYSICAL STREET ADDRESS]"}
                  </span>
                </div>

                <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 font-sans uppercase leading-tight">
                  SUBJECT: FINAL LEGAL NOTICE - DEMARKATION OF IMMEDIATE CIVIL LITIGATION & PUBLIC CRIMINAL PROSECUTION UNDER THE BNS PRIOR TO INTENSE FORFEITURE PROCEEDINGS
                </div>

                <div className="text-[9.5px] leading-relaxed text-slate-700 flex flex-col gap-3 font-serif select-text">
                  <p>Dear Sir/Madam,</p>
                  <p>
                    This is the <strong>Final Notice</strong> served upon you. You have actively ignored two formal demand notices served previously. Your continuous evasion and dishonest retention of <strong className="bg-yellow-50 px-1">INR {stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[STUCK AMOUNT]"}</strong> originally due since <strong className="bg-yellow-50 px-1">{dueDate ? new Date(dueDate).toLocaleDateString("en-IN") : "[DUE DATE]"}</strong> is now recognized as a deliberate criminal offense.
                  </p>
                  <p>
                    We have completed drafting the comprehensive civil recovery lawsuit under Order XXXVII of the Code of Civil Procedure (CPC) and a formal criminal complaint to be filed before the jurisdictional police and Judicial Magistrate under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                  </p>
                  <p>
                    Particularly, your conduct directly warrants prosecution under the following strict sections:
                    <br />
                    1. <strong>Section 316 of BNS (Criminal Breach of Trust)</strong>: For dishonestly misappropriating and converting our Client's services, labor, rental security deposit, or payments.
                    <br />
                    2. <strong>Section 318 of BNS (Cheating & Dishonestly Inducing Delivery of Property)</strong>: For fraudulently inducing our Client to deliver services/goods under false representations of timely payment.
                    <br />
                    3. <strong>Section 61 of BNS (Criminal Conspiracy)</strong>: For conniving to cause wrongful loss to our Client.
                  </p>
                  <p>
                    Unless the entire amount of <strong className="bg-yellow-50 px-1">INR {stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[STUCK AMOUNT]"}</strong> along with 24% interest compounded monthly is paid in full within 48 hours of this notice, these files will be formally registered. No further grace, notifications, or settlement negotiations will be offered.
                  </p>
                  <p className="mt-2">
                    This is without prejudice to any other legal remedies, reliefs, and interest charges that our Client may be entitled to claim under law.
                  </p>
                </div>
              </div>
            )}

            {/* SHO Police Complaint */}
            {previewTab === "police" && (
              <div className="flex-1 flex flex-col gap-3">
                <div className="text-[9.5px] leading-relaxed text-slate-650 flex flex-col font-sans">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">TO POLICE AUTHORITY:</span>
                  <span className="font-extrabold text-slate-800">To,</span>
                  <span className="font-extrabold text-slate-800">The Station House Officer (SHO),</span>
                  <span className="font-extrabold text-slate-800 bg-yellow-50 px-1 border border-yellow-100 rounded w-fit mt-0.5 leading-tight">
                    {policeStationName || "[POLICE STATION NAME]"}
                  </span>
                  {policeStationEmail && <span>Email: {policeStationEmail}</span>}
                  <span className="mt-0.5 bg-yellow-50 px-1 border border-yellow-100 rounded text-slate-800 font-bold max-w-[280px]">
                    {policeStationAddress || "[POLICE STATION ADDRESS]"}
                  </span>
                </div>

                <div className="text-xs font-bold text-center text-slate-900 border-y border-[#E5E7EB] py-1.5 font-sans uppercase leading-tight">
                  SUB: COMPLAINT UNDER SECTIONS 316, 318 AND 61 OF THE BHARATIYA NYAYA SANHITA, 2023 (BNS) FOR CRIMINAL BREACH OF TRUST, CHEATING, AND CRIMINAL CONSPIRACY IN RESPECT OF INR {stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[STUCK AMOUNT]"} AGAINST THE ACCUSED DEFAULTER {defaulterName || "[DEFAULTER LEGAL NAME]"}
                </div>

                <div className="text-[9px] leading-normal text-slate-700 flex flex-col gap-2 font-serif select-text">
                  <p>Dear Sir, </p>
                  <p>
                    We submit this formal complaint against the accused <strong>{defaulterName || "[DEFAULTER]"}</strong> located at <strong>{address || "[DEFAULTER ADDRESS]"}</strong> for registering a First Information Report (FIR) and initiating immediate prosecution under the provisions of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                  </p>
                  <p>
                    The accused fraudulently induced our Client to deliver services, labor, property, or lease values (including freelance services, labor, security deposits, or product payments) worth <strong className="bg-yellow-50 px-0.5">INR {stuckAmount ? parseFloat(stuckAmount).toLocaleString("en-IN") : "[STUCK AMOUNT]"}</strong> under the absolute representation of clearing the payment on <strong>{dueDate ? new Date(dueDate).toLocaleDateString("en-IN") : "[DUE DATE]"}</strong>.
                  </p>
                  <p>
                    The accused had a dishonest intention from the very inception of the transaction, and has since fraudulently misappropriated the values for their own unlawful gain, in direct violation of:
                    <br />
                    - <strong>Section 316 of BNS (Criminal Breach of Trust)</strong>: By dishonestly misappropriating the entrusted value.
                    <br />
                    - <strong>Section 318 of BNS (Cheating)</strong>: By inducing delivery of services under fraudulent claims.
                    <br />
                    - <strong>Section 61 of BNS (Criminal Conspiracy)</strong>: By coordinating actions to defraud.
                  </p>
                  <p>
                    Despite multiple legal demand notices, the accused has actively ignored all correspondence, indicating wilful evasion. We request your office to register a formal FIR, investigate this matter, and summon the accused immediately.
                  </p>
                  <p className="mt-2 font-sans text-[8px] text-slate-450 font-bold">
                    This is without prejudice to any other legal remedies, reliefs, and interest charges that our Client may be entitled to claim under law.
                  </p>
                </div>
              </div>
            )}
            </div>

            {/* Signature Block */}
            <div className="mt-auto pt-3 flex flex-col gap-0.5 border-t border-slate-100 text-left text-[9px] text-slate-450 font-bold font-sans">
              <span className="font-extrabold text-slate-750">For AMA Legal Solutions</span>
              <span>Advocate In-Charge</span>
              <span>Bar Council Registration: D/192/2018</span>
            </div>

          </div>
        </div>
      </div>
    </form>

  </div>
  );
}

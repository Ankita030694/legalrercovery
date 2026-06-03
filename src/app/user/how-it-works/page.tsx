"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Send, 
  ShieldCheck, 
  ArrowRight,
  User,
  IndianRupee,
  MapPin,
  Building,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="flex flex-col gap-5 max-w-4xl mx-auto text-left h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] min-h-[480px] max-h-[580px] justify-between animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="border-b border-slate-200/60 pb-3 shrink-0">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">How It Works</h1>
        <p className="text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5 font-sans">
          Our legally-backed, automated system works in three simple phases to recover your outstanding dues.
        </p>
      </div>

      {/* ── DESKTOP PORTAL LAYOUT (Split Side-by-Side) ── */}
      <div className="hidden md:flex flex-1 gap-6 min-h-0 items-stretch">
        
        {/* Left Side: Step Selector Cards */}
        <div className="w-[300px] flex flex-col gap-3 shrink-0">
          {[
            {
              num: 1,
              title: "1. Setup & Registration",
              desc: "Enter defaulter dues & contact details",
              icon: FileText,
              color: "text-red-650 bg-red-50 border-red-100"
            },
            {
              num: 2,
              title: "2. Warning Escalation",
              desc: "4-step automated lawyer dispatch",
              icon: Send,
              color: "text-orange-600 bg-orange-50 border-orange-100"
            },
            {
              num: 3,
              title: "3. Direct Payment & Stop",
              desc: "Close the claim once you are paid",
              icon: ShieldCheck,
              color: "text-green-600 bg-green-50 border-green-100"
            }
          ].map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.num;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer focus:outline-none flex gap-3.5
                  ${isActive 
                    ? "bg-white border-[#DC2626] shadow-md shadow-red-950/5 -translate-x-1" 
                    : "bg-slate-50/50 hover:bg-slate-50 border-slate-200/60 text-slate-500"}`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${isActive ? step.color : "bg-white border-slate-200 text-slate-400"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className={`text-[12px] font-black tracking-tight ${isActive ? "text-[#111827]" : "text-slate-700"}`}>
                    {step.title}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-450 leading-tight">
                    {step.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Step Detailed Content */}
        <div className="flex-1 bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col justify-center min-w-0">
          
          {/* Step 1 Details */}
          {activeStep === 1 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300">
              <div>
                <h3 className="text-sm font-black text-slate-900">Phase 1: Configure Claim Details</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Defaulter registration wizard</p>
              </div>
              <p className="text-xs leading-relaxed text-slate-500 font-semibold font-sans">
                Tell us about your unpaid dues. You will enter the defaulter's legal name, constitution, outstanding dues, and physical address.
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-2.5 font-sans">
                <span className="text-[11px] font-extrabold text-slate-750">💡 Information required to draft warning letters:</span>
                <div className="grid grid-cols-2 gap-3 text-[10.5px] font-bold text-slate-500">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-slate-400" /> Defaulter Name & Contacts</span>
                  <span className="flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5 text-slate-400" /> Stuck Amount (INR)</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Defaulter Physical Address</span>
                  <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-slate-400" /> Police Station Jurisdiction</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 Details */}
          {activeStep === 2 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <div>
                  <h3 className="text-sm font-black text-slate-900">Phase 2: Automated Escalation Timeline</h3>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Real-time dispatches</p>
                </div>
                <span className="text-[9px] font-black uppercase bg-orange-50 text-orange-650 border border-orange-100 px-2.5 py-0.5 rounded-full">
                  3-Week Schedule
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3 text-left font-sans mt-1">
                <div className="flex flex-col gap-1 border-r border-slate-100 pr-2">
                  <span className="text-[10px] font-extrabold text-red-650 uppercase tracking-wide">Notice 1</span>
                  <span className="text-[8.5px] text-slate-450 font-bold">Immediate</span>
                  <p className="text-[10px] text-slate-500 font-semibold leading-normal mt-1">
                    First warning letter sent via email & WhatsApp. Defaulter gets a 7-day window.
                  </p>
                </div>
                <div className="flex flex-col gap-1 border-r border-slate-100 pr-2 pl-1">
                  <span className="text-[10px] font-extrabold text-orange-600 uppercase tracking-wide">Notice 2</span>
                  <span className="text-[8.5px] text-slate-450 font-bold">Day 8 (+1 Wk)</span>
                  <p className="text-[10px] text-slate-500 font-semibold leading-normal mt-1">
                    Second notice specifying potential civil & criminal laws they might be breaking.
                  </p>
                </div>
                <div className="flex flex-col gap-1 border-r border-slate-100 pr-2 pl-1">
                  <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-wide">Notice 3</span>
                  <span className="text-[8.5px] text-slate-450 font-bold">Day 15 (+2 Wk)</span>
                  <p className="text-[10px] text-slate-500 font-semibold leading-normal mt-1">
                    Final warning notice demanding payment in 48 hours to prevent police case.
                  </p>
                </div>
                <div className="flex flex-col gap-1 pl-1">
                  <span className="text-[10px] font-extrabold text-blue-650 uppercase tracking-wide">Notice 4</span>
                  <span className="text-[8.5px] text-slate-450 font-bold">Day 22 (+3 Wk)</span>
                  <p className="text-[10px] text-slate-500 font-semibold leading-normal mt-1">
                    Signed police complaint draft sent directly to SHO & copy to defaulter.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3 Details */}
          {activeStep === 3 && (
            <div className="flex flex-col gap-4 animate-in fade-in duration-300">
              <div>
                <h3 className="text-sm font-black text-slate-900">Phase 3: Dues Recovery & Closure</h3>
                <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Direct Settlement</p>
              </div>
              <p className="text-xs leading-relaxed text-slate-500 font-semibold font-sans">
                The defaulter settles dues directly with you (via UPI, Bank Transfer, cash, etc.). We do not collect money on your behalf or charge commission.
              </p>
              <div className="bg-green-50/50 border border-green-100 rounded-2xl p-4 flex gap-3 items-start font-sans">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-black text-green-800">Your Action Item:</span>
                  <span className="text-[10.5px] text-slate-650 font-semibold leading-relaxed">
                    Once they pay, click "Stop Notices" on the case in your dashboard, enter the amount recovered, and our system will instantly halt future dispatches.
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── MOBILE PORTAL LAYOUT (Collapsible Inline Accordion) ── */}
      <div className="flex md:hidden flex-col gap-3 min-h-0 flex-1 overflow-y-auto pr-1">
        
        {/* Accordion 1 */}
        <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
          <button 
            type="button"
            onClick={() => setActiveStep(activeStep === 1 ? 0 : 1)}
            className="w-full px-4 py-3 flex items-center justify-between font-black text-xs text-slate-800 focus:outline-none cursor-pointer"
          >
            <span className="flex items-center gap-2">📋 1. Setup & Registration</span>
            {activeStep === 1 ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </button>
          
          {activeStep === 1 && (
            <div className="px-4 pb-4 flex flex-col gap-3 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500 font-semibold font-sans animate-in slide-in-from-top-1 duration-150">
              <p>Tell us who owes you money. Enter defaulter details and the outstanding amount. Our system will generate advocate-backed demand notices immediately.</p>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex flex-col gap-1.5 text-[10px] font-bold text-slate-600">
                <span>Required fields:</span>
                <span>• Defaulter Name & Contacts</span>
                <span>• Outstanding Dues (INR)</span>
                <span>• Police Station Jurisdiction</span>
              </div>
            </div>
          )}
        </div>

        {/* Accordion 2 */}
        <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
          <button 
            type="button"
            onClick={() => setActiveStep(activeStep === 2 ? 0 : 2)}
            className="w-full px-4 py-3 flex items-center justify-between font-black text-xs text-slate-800 focus:outline-none cursor-pointer"
          >
            <span className="flex items-center gap-2">✉️ 2. Warning Escalation</span>
            {activeStep === 2 ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </button>
          
          {activeStep === 2 && (
            <div className="px-4 pb-4 flex flex-col gap-3 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500 font-semibold font-sans animate-in slide-in-from-top-1 duration-150">
              <p>Notices are automatically emailed and WhatsApped to the defaulter over a 3-week queue:</p>
              <div className="flex flex-col gap-2 bg-slate-50 rounded-xl p-3 border border-slate-100 text-[10px]">
                <div className="flex justify-between border-b border-slate-200/50 pb-1"><span className="font-bold text-slate-700">Notice 1 (Day 1)</span><span className="text-slate-500">Initial demand (7-day window)</span></div>
                <div className="flex justify-between border-b border-slate-200/50 pb-1"><span className="font-bold text-slate-700">Notice 2 (Day 8)</span><span className="text-slate-500">Notice outlining legal violations</span></div>
                <div className="flex justify-between border-b border-slate-200/50 pb-1"><span className="font-bold text-slate-700">Notice 3 (Day 15)</span><span className="text-slate-500">Final warning before police copy</span></div>
                <div className="flex justify-between"><span className="font-bold text-slate-700">Notice 4 (Day 22)</span><span className="text-slate-500">Signed police complaint sent to SHO</span></div>
              </div>
            </div>
          )}
        </div>

        {/* Accordion 3 */}
        <div className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm">
          <button 
            type="button"
            onClick={() => setActiveStep(activeStep === 3 ? 0 : 3)}
            className="w-full px-4 py-3 flex items-center justify-between font-black text-xs text-slate-800 focus:outline-none cursor-pointer"
          >
            <span className="flex items-center gap-2">🤝 3. Payment & Close</span>
            {activeStep === 3 ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </button>
          
          {activeStep === 3 && (
            <div className="px-4 pb-4 flex flex-col gap-3 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-500 font-semibold font-sans animate-in slide-in-from-top-1 duration-150">
              <p>They pay you directly via UPI or Bank Transfer. We charge no commission.</p>
              <div className="bg-green-50/50 border border-green-100 rounded-xl p-3 flex gap-2 text-[10px] text-slate-700 font-bold">
                <span>💡</span>
                <span>Once paid, click "Stop Notices" on the dashboard to cancel remaining scheduled notices.</span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ── Footer CTA ── */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 flex items-center justify-between gap-4 shrink-0 shadow-sm">
        <div className="text-left">
          <span className="text-[11px] font-black text-white leading-tight block">Ready to start?</span>
          <span className="text-[9.5px] text-slate-400 font-bold leading-none block mt-0.5">Launch a claim in just 2 minutes.</span>
        </div>
        <Link 
          href="/user/new-recovery"
          className="px-4 py-2.5 text-[11px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all flex items-center gap-1 cursor-pointer"
        >
          Start Recovery <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}

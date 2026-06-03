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
  Mail,
  MessageSquare,
  AlertTriangle,
  Gavel,
  Calendar,
  Phone,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: 1,
    title: "File a Claim",
    shortTitle: "Claim",
    subtitle: "Enter defaulter details & dues",
    icon: FileText,
    accentFrom: "#DC2626",
    accentTo: "#EF4444",
    accentBg: "bg-red-50",
    accentBorder: "border-red-100",
    accentText: "text-red-600",
    dotColor: "bg-red-500",
  },
  {
    num: 2,
    title: "Auto Escalation",
    shortTitle: "Escalate",
    subtitle: "4 warnings over 3 weeks",
    icon: Send,
    accentFrom: "#EA580C",
    accentTo: "#F97316",
    accentBg: "bg-orange-50",
    accentBorder: "border-orange-100",
    accentText: "text-orange-600",
    dotColor: "bg-orange-500",
  },
  {
    num: 3,
    title: "Get Paid",
    shortTitle: "Settle",
    subtitle: "Defaulter pays you directly",
    icon: ShieldCheck,
    accentFrom: "#16A34A",
    accentTo: "#22C55E",
    accentBg: "bg-green-50",
    accentBorder: "border-green-100",
    accentText: "text-green-600",
    dotColor: "bg-green-500",
  },
];

function StepContent({ stepNum }: { stepNum: number }) {
  if (stepNum === 1) {
    return (
      <div className="flex flex-col gap-3 animate-in fade-in duration-200">
        <p className="text-[11px] sm:text-xs leading-relaxed text-slate-500 font-semibold font-sans">
          Tell us who owes you money. Fill in the defaulter&apos;s identity, dues, contact info &amp; police jurisdiction. Our system uses this to auto-generate advocate-backed demand notices.
        </p>
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 font-sans">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 block mb-2">
            📋 Section 1 — Defaulter &amp; Claim Details
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] sm:text-[10.5px] font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-slate-400 shrink-0" /> Legal Name
            </span>
            <span className="flex items-center gap-1.5">
              <Building className="w-3 h-3 text-slate-400 shrink-0" /> Entity Type
            </span>
            <span className="flex items-center gap-1.5">
              <IndianRupee className="w-3 h-3 text-slate-400 shrink-0" /> Stuck Amount (₹)
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-slate-400 shrink-0" /> Payment Due Date
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-slate-400 shrink-0" /> Mobile No. (up to 2)
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-slate-400 shrink-0" /> Email ID (up to 2)
            </span>
            <span className="flex items-center gap-1.5 col-span-2">
              <MapPin className="w-3 h-3 text-slate-400 shrink-0" /> Physical Address of Defaulter
            </span>
          </div>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 sm:p-4 font-sans">
          <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-700 block mb-2">
            🏛️ Section 2 — Police Station Details
          </span>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] sm:text-[10.5px] font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Building className="w-3 h-3 text-slate-400 shrink-0" /> Station Name
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-slate-400 shrink-0" /> Station Email ID
            </span>
            <span className="flex items-center gap-1.5 col-span-2">
              <MapPin className="w-3 h-3 text-slate-400 shrink-0" /> Station Physical Address
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (stepNum === 2) {
    const notices = [
      {
        label: "Notice 1",
        time: "Immediate",
        desc: "First demand letter sent via email & WhatsApp",
        icon: Mail,
        color: "text-red-500 bg-red-50",
      },
      {
        label: "Notice 2",
        time: "Day 8",
        desc: "Warning citing applicable civil & criminal laws",
        icon: MessageSquare,
        color: "text-orange-500 bg-orange-50",
      },
      {
        label: "Notice 3",
        time: "Day 15",
        desc: "Final warning — 48 hours to pay before complaint",
        icon: AlertTriangle,
        color: "text-amber-600 bg-amber-50",
      },
      {
        label: "Notice 4",
        time: "Day 22",
        desc: "Signed police complaint sent to SHO & defaulter",
        icon: Gavel,
        color: "text-blue-600 bg-blue-50",
      },
    ];

    return (
      <div className="flex flex-col gap-2 animate-in fade-in duration-200">
        <div className="flex items-center justify-between mb-0.5">
          <p className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Automated Dispatch Timeline
          </p>
          <span className="text-[8px] sm:text-[9px] font-black uppercase bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-full shrink-0">
            3-Week Schedule
          </span>
        </div>
        <div className="flex flex-col gap-1.5 font-sans">
          {notices.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.label}
                className="flex items-start gap-2.5 bg-white border border-slate-100 rounded-xl px-3 py-2 sm:py-2.5"
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 ${n.color}`}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-extrabold text-slate-800">
                      {n.label}
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      {n.time}
                    </span>
                  </div>
                  <p className="text-[9.5px] sm:text-[10.5px] text-slate-500 font-semibold leading-snug">
                    {n.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (stepNum === 3) {
    return (
      <div className="flex flex-col gap-3 animate-in fade-in duration-200">
        <p className="text-[11px] sm:text-xs leading-relaxed text-slate-500 font-semibold font-sans">
          The defaulter settles dues directly with you — via UPI, bank transfer,
          or cash. We don&apos;t collect money on your behalf or charge any
          commission.
        </p>
        <div className="bg-green-50/60 border border-green-100 rounded-xl p-3 sm:p-4 flex gap-2.5 items-start font-sans">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span className="text-[10.5px] sm:text-xs font-black text-green-800">
              Once they pay:
            </span>
            <span className="text-[10px] sm:text-[10.5px] text-slate-600 font-semibold leading-relaxed">
              Click &quot;Stop Notices&quot; on the case in your dashboard,
              enter the amount recovered, and future dispatches stop instantly.
            </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = steps.find((s) => s.num === activeStep) || steps[0];

  return (
    <div className="flex flex-col min-h-[calc(100dvh-128px)] sm:min-h-[calc(100dvh-128px)] lg:min-h-[calc(100dvh-80px)] max-w-4xl mx-auto text-left justify-between">
      {/* ── HEADER ── */}
      <div className="pb-3 sm:pb-4 shrink-0">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight">
          How It Works
        </h1>
        <p className="text-[10.5px] sm:text-xs text-slate-500 font-semibold mt-0.5 font-sans">
          Our legally-backed system works in 3 simple steps to recover your money.
        </p>
      </div>

      {/* ── STEP SELECTOR (Horizontal Stepper) ── */}
      <div className="flex items-center gap-0 shrink-0 mb-3 sm:mb-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === step.num;
          return (
            <React.Fragment key={step.num}>
              <button
                onClick={() => setActiveStep(step.num)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none border shrink-0
                  ${
                    isActive
                      ? "bg-white border-slate-200 shadow-md shadow-slate-900/5 scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-white/60 hover:border-slate-200/60"
                  }`}
              >
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200
                    ${
                      isActive
                        ? `${step.accentBg} ${step.accentBorder} border`
                        : "bg-slate-100 text-slate-400"
                    }`}
                >
                  <Icon
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                      isActive ? step.accentText : ""
                    }`}
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span
                    className={`text-[10px] sm:text-[11.5px] font-black leading-tight transition-colors duration-200
                      ${isActive ? "text-slate-900" : "text-slate-500"}`}
                  >
                    <span className="hidden sm:inline">{step.title}</span>
                    <span className="sm:hidden">{step.shortTitle}</span>
                  </span>
                  <span className="text-[8px] sm:text-[9.5px] font-semibold text-slate-400 leading-none hidden sm:block">
                    {step.subtitle}
                  </span>
                </div>
              </button>
              {idx < steps.length - 1 && (
                <div className="flex-1 flex items-center justify-center px-1">
                  <div
                    className={`h-[2px] w-full rounded-full transition-colors duration-300 ${
                      activeStep > step.num ? "bg-slate-300" : "bg-slate-200/60"
                    }`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="flex flex-col">
        <div className="bg-white border border-slate-200/60 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-sm">
          {/* Phase title */}
          <div className="flex items-center gap-2.5 mb-3 shrink-0">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0"
              style={{
                background: `linear-gradient(135deg, ${currentStep.accentFrom}, ${currentStep.accentTo})`,
              }}
            >
              {currentStep.num}
            </div>
            <h2 className="text-sm sm:text-[15px] font-black text-slate-900 tracking-tight">
              {currentStep.title}
            </h2>
          </div>

          {/* Dynamic content */}
          <StepContent stepNum={activeStep} />
        </div>
      </div>

      {/* ── FOOTER CTA ── */}
      <div className="bg-slate-900 text-white rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-4 shrink-0 shadow-sm mt-3 sm:mt-4">
        <div className="text-left">
          <span className="text-[10.5px] sm:text-[11px] font-black text-white leading-tight block">
            Ready to recover your money?
          </span>
          <span className="text-[9px] sm:text-[9.5px] text-slate-400 font-bold leading-none block mt-0.5">
            File a claim in under 2 minutes.
          </span>
        </div>
        <Link
          href="/user/new-recovery"
          className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10.5px] sm:text-[11px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all flex items-center gap-1 cursor-pointer shrink-0"
        >
          Start Recovery <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </Link>
      </div>
    </div>
  );
}

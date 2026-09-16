"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, getSession } from "next-auth/react";
import { 
  Folder, 
  FolderOpen,
  Briefcase, 
  ShieldCheck, 
  ArrowRight, 
  LogOut, 
  Building2, 
  Scale, 
  Users, 
  Send, 
  CreditCard, 
  MessageSquare,
  Sparkles,
  Layers,
  ChevronRight,
  Shield,
  Activity
} from "lucide-react";

export default function AuthorityRootLauncher() {
  const router = useRouter();
  const [adminName, setAdminName] = useState("Administrator");
  const [adminEmail, setAdminEmail] = useState("admin@legalrecovery.in");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      if (session && session.user) {
        setAdminName(session.user.name || "Administrator");
        setAdminEmail(session.user.email || "admin@legalrecovery.in");
      }
    });
  }, []);

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/nullify" });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#0F172A] font-sans antialiased flex flex-col justify-between selection:bg-red-500 selection:text-white">
      
      {/* ── TOP NAV HEADER ── */}
      <header className="h-20 bg-white border-b border-slate-200/80 px-6 sm:px-12 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-4">
          <Link href="/authority" className="flex items-center gap-3">
            <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 w-auto object-contain" />
          </Link>
          <div className="h-5 w-px bg-slate-200 hidden sm:block" />
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-slate-600 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-red-600" />
            Authority Portal
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <div className="w-7 h-7 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center font-black text-xs">
              AD
            </div>
            <div className="hidden md:flex flex-col text-left leading-tight">
              <span className="text-xs font-bold text-slate-800">{adminName}</span>
              <span className="text-[10px] font-medium text-slate-400">{adminEmail}</span>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer border border-slate-200/80 hover:border-red-200"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* ── MAIN WORKSPACE SELECTION CONTAINER ── */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 sm:px-10 py-12 sm:py-16 flex flex-col justify-center">
        
        {/* Header Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Chambers & Operations Workspaces
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Select Your Workspace
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
            Choose an operational environment to supervise public recovery claims or manage institutional advocate representations.
          </p>
        </div>

        {/* ── THE TWO WORKSPACE FOLDERS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* ════ FOLDER 1: LEGAL RECOVERY (RETAIL) ════ */}
          <Link
            href="/authority/dashboard"
            onMouseEnter={() => setHoveredCard("retail")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-red-300 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-red-500/5 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:from-red-500/10" />

            <div>
              {/* Folder Icon Top */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-red-50 border border-slate-200/80 group-hover:border-red-200 flex items-center justify-center text-slate-700 group-hover:text-red-600 transition-colors duration-300 shadow-xs">
                  {hoveredCard === "retail" ? (
                    <FolderOpen className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <Folder className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                  )}
                </div>
                <span className="px-3 py-1 bg-slate-100 group-hover:bg-red-100/60 text-slate-600 group-hover:text-red-700 text-xs font-bold rounded-full tracking-wide transition-colors">
                  Retail Platform
                </span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-2xl font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight">
                Legal Recovery
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                Public Cases & Consumer Claims
              </p>

              {/* Description */}
              <p className="text-slate-600 text-sm mt-4 leading-relaxed font-normal">
                Supervise automated public debtor notices, platform payment gateway settlements, inbound debtor replies, conversion funnels, and blog management.
              </p>

              {/* Features List */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-red-500 transition-colors" />
                  <span>Public Consumer Case Inspector</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-red-500 transition-colors" />
                  <span>Retail Inbound Debtor Replies</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-red-500 transition-colors" />
                  <span>Payment Transactions & Platform Funnel</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-red-500 transition-colors" />
                  <span>SEO Blogs & Contact Submissions</span>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                Open Legal Recovery
              </span>
              <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-red-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* ════ FOLDER 2: AMA LEGAL CASES (INSTITUTIONAL) ════ */}
          <Link
            href="/authority/ama-cases"
            onMouseEnter={() => setHoveredCard("ama")}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white rounded-3xl border border-slate-200/90 hover:border-slate-800 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
          >
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-slate-900/5 to-transparent rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:from-slate-900/10" />

            <div>
              {/* Folder Icon Top */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-[#152331] border border-slate-200/80 group-hover:border-[#152331] flex items-center justify-center text-slate-700 group-hover:text-white transition-colors duration-300 shadow-xs">
                  {hoveredCard === "ama" ? (
                    <FolderOpen className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                  ) : (
                    <Folder className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" />
                  )}
                </div>
                <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full tracking-wide">
                  Chambers • Special Users
                </span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-2xl font-black text-slate-900 group-hover:text-slate-900 transition-colors tracking-tight">
                AMA Legal Cases
              </h2>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                Advocates Pool (8700343611 & 8130104447)
              </p>

              {/* Description */}
              <p className="text-slate-600 text-sm mt-4 leading-relaxed font-normal">
                Direct advocate operations, client representation folders with dedicated scoped dashboards, bulk case parsing, Zoho batch dispatch, and police complaints.
              </p>

              {/* Features List */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors" />
                  <span>Client Representation Folders & Scoped Dashboards</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors" />
                  <span>Direct Zoho Batch Dispatch Console & CSV Exports</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors" />
                  <span>Case Controls: Pause, Resume, Force Next Notice, Stop</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-slate-900 transition-colors" />
                  <span>Police Complaint Enforcement Switch</span>
                </div>
              </div>
            </div>

            {/* Launch Button */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-900 transition-colors">
                Open AMA Legal Cases
              </span>
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

        </div>

      </main>

      {/* ── FOOTER STATUS BAR ── */}
      <footer className="h-16 border-t border-slate-200/80 bg-white px-6 sm:px-12 flex items-center justify-between text-xs text-slate-400 font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Operational Authority Node Active</span>
        </div>
        <div className="flex items-center gap-6">
          <span>Advocate Bar Stamp: Active</span>
          <span>AMA Legal Solutions</span>
        </div>
      </footer>

    </div>
  );
}

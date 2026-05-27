"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Wallet,
  Timer,
  Shield,
  FolderClosed,
  FileText,
  MessageSquare,
  Folder,
  CreditCard,
  User,
  Check,
  TrendingDown,
  Users,
  Clock,
  CheckCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  IndianRupee,
  AlertCircle,
  Home as HomeIcon,
  Key,
  Coins,
  Plane,
  Receipt,
  Building2,
  AlertTriangle,
  Lightbulb,
  Upload,
  FileSearch,
  Send,
  Handshake
} from "lucide-react";

export default function Home() {
  // Mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active status of start recovery dropdown
  const [startRecoveryDropdownOpen, setStartRecoveryDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden relative">

      {/* ================= HIGH FIDELITY BRAND NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 h-20 z-50 bg-white/72 backdrop-blur-md border-b border-[#E5E7EB]/60 flex items-center justify-between px-6 xl:px-12 transition-all">

        {/* Left Side: Brand Logo as seen in screenshot */}
        <a href="/" className="flex items-center select-none">
          <img src="/lrlogo.svg" alt="LegalRecovery" className="h-8 sm:h-9 w-auto object-contain" />
        </a>

        {/* Center Navigation Links (Matching screenshot items exactly) */}
        <nav className="hidden xl:flex items-center gap-6">
          {/* Active 'Home' item with red underline centered underneath */}
          <a
            href="/"
            className="relative py-2 text-[13.5px] font-bold text-[#111827] hover:text-[#DC2626] transition-colors flex flex-col items-center group"
          >
            Home
            <span className="absolute bottom-[-4px] w-5 h-[2.5px] bg-[#DC2626] rounded-full"></span>
          </a>

          <a
            href="/about"
            className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] transition-colors py-2"
          >
            About Us
          </a>

          <a
            href="/services"
            className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] transition-colors py-2"
          >
            Services
          </a>

          <a
            href="/how-it-works"
            className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] transition-colors py-2"
          >
            How It Works
          </a>

          <a
            href="/blog"
            className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] transition-colors py-2"
          >
            Blog
          </a>

          <a
            href="/contact"
            className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#DC2626] transition-colors py-2"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Buttons (Track Recovery & Start Recovery with left chevron) */}
        <div className="hidden xl:flex items-center gap-6 relative">

          {/* Track Recovery Text Link */}
          <a
            href="/contact"
            className="text-[13.5px] font-bold text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Track Recovery
          </a>

          {/* Start Recovery Red Rounded Button with inner Chevron Down on Left */}
          <div className="relative">
            <button
              onClick={() => setStartRecoveryDropdownOpen(!startRecoveryDropdownOpen)}
              className="flex items-center gap-2 px-5 py-2.5 text-[13.5px] font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[10px] shadow-[0_4px_12px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none select-none cursor-pointer"
            >
              <svg
                className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${startRecoveryDropdownOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
              Start Recovery
            </button>

            {/* Interactive Dropdown Menu */}
            {startRecoveryDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-[#E5E7EB]/80 overflow-hidden z-50">
                <div className="py-1">
                  <a
                    href="/contact"
                    onClick={() => setStartRecoveryDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold text-[#4B5563] hover:text-[#DC2626] hover:bg-[#F8F9FB] transition-colors"
                  >
                    💼 Salary Delay Recovery
                  </a>
                  <a
                    href="/contact"
                    onClick={() => setStartRecoveryDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold text-[#4B5563] hover:text-[#DC2626] hover:bg-[#F8F9FB] transition-colors"
                  >
                    🤝 Unpaid Freelancer Dues
                  </a>
                  <a
                    href="/contact"
                    onClick={() => setStartRecoveryDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold text-[#4B5563] hover:text-[#DC2626] hover:bg-[#F8F9FB] transition-colors"
                  >
                    🏢 Rental Security Deposit
                  </a>
                  <a
                    href="/contact"
                    onClick={() => setStartRecoveryDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs font-semibold text-[#4B5563] hover:text-[#DC2626] hover:bg-[#F8F9FB] transition-colors"
                  >
                    🛍️ Defective Consumer Grievance
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navbar Hamburger Toggle Button */}
        <button
          className="xl:hidden p-2 text-[#111827] focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Glass Menu Dropdown */}
      <div
        className={`fixed inset-x-0 top-20 z-40 xl:hidden bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.12)] transition-all duration-300 transform origin-top ${mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col gap-4">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#111827] hover:text-[#DC2626] transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#4B5563] hover:text-[#DC2626] transition-colors"
          >
            About Us
          </a>
          <a
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#4B5563] hover:text-[#DC2626] transition-colors"
          >
            Services
          </a>
          <a
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#4B5563] hover:text-[#DC2626] transition-colors"
          >
            How It Works
          </a>
          <a
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#4B5563] hover:text-[#DC2626] transition-colors"
          >
            Blog
          </a>
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-[#4B5563] hover:text-[#DC2626] transition-colors"
          >
            Contact
          </a>
          <div className="h-px bg-[#E5E7EB] my-2"></div>
          <div className="flex flex-col gap-3">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-[#4B5563] border border-[#E5E7EB] rounded-xl bg-white"
            >
              Track Recovery
            </a>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#DC2626] rounded-xl shadow-[0_4px_12px_rgba(220,38,38,0.15)]"
            >
              Start Recovery
            </a>
          </div>
        </nav>
      </div>

      {/* ================= HERO SECTION (Visual Matched to Screenshot) ================= */}
      <main className="pt-32 pb-12 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto overflow-hidden relative">

        {/* Soft Radial Ambient Lights to match modern theme */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-25" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* LEFT COLUMN: Hero content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">

            {/* Top Red Subheading */}
            <span className="text-[13.5px] font-bold text-[#DC2626] uppercase tracking-[0.02em] mb-4 select-text">
              India's Consumer & Money Recovery Platform
            </span>

            {/* Massive Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[54px] font-black tracking-tight text-[#111827] leading-[1.08] mb-6 select-text">
              Money Stuck?<br />
              We Help You<br />
              <span className="text-[#DC2626]">Recover It Legally.</span>
            </h1>

            {/* Subheading / Description Paragraph */}
            <p className="text-[15px] md:text-[16px] text-[#4B5563] font-medium leading-[1.6] mb-5 max-w-lg select-text">
              Stuck salaries, corporate refunds, freelancer dues, travel ticketing disputes, and consumer recoveries. We send 3 legal notices and 1 police complaint draft week-by-week to recover what is yours.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Stress. We handle it for you.
              </span>
            </div>

            {/* AI Engines Banner */}
            <div className="flex flex-col gap-2.5 mb-6 select-none">
              <span className="text-[10.5px] font-black uppercase tracking-wider text-[#6B7280] flex items-center gap-1.5">
                ⚡ Powered by India's Top Legal AI Pipeline
              </span>
              <div className="flex w-fit flex-wrap items-center gap-5 bg-white/65 backdrop-blur-sm border border-[#E5E7EB]/85 rounded-2xl px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.015)]">
                <img src="/ai/gemini-logo_svgstack_com_37141779345951.svg" className="h-[27px] w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="Gemini" title="Gemini" />
                <img src="/ai/claude-logo_svgstack_com_36971779345964.svg" className="h-[23px] w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="Claude" title="Claude" />
                <img src="/ai/chatgpt-logo_svgstack_com_36931779345935.svg" className="h-[23px] w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="ChatGPT" title="ChatGPT" />
                <img src="/ai/deepseek-logo_svgstack_com_37061779346052.svg" className="h-[27px] w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="DeepSeek" title="DeepSeek" />
                <img src="/ai/perplexity-logo-svg_svgstack_com_37421779345999.svg" className="h-[27px] w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="Perplexity" title="Perplexity" />
                <img src="/ai/grok-ai-app-logo_svgstack_com_37211779346040.svg" className="h-[23px] w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer" alt="Grok" title="Grok" />
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="w-full sm:w-auto mb-10 select-none">
              <button
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 text-[13.5px] sm:text-[15px] font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[10px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                Recover My Money
              </button>
            </div>

            {/* Trust Row badging underneath */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 w-full pt-4 border-t border-[#E5E7EB]/80">

              {/* Badge 1: Affordable */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#DEF7EC] text-[#10B981] flex items-center justify-center shrink-0">
                  <Wallet className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[12px] font-extrabold text-[#111827] leading-none">Affordable</span>
                  <span className="text-[8px] sm:text-[10px] text-[#6B7280] font-semibold mt-1 leading-none">Starting at ₹999</span>
                </div>
              </div>

              {/* Badge 2: Fast */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                  <Timer className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[12px] font-extrabold text-[#111827] leading-none">Fast</span>
                  <span className="text-[8px] sm:text-[10px] text-[#6B7280] font-semibold mt-1 leading-none">Notice in 24 Hours</span>
                </div>
              </div>

              {/* Badge 3: Secure */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-[12px] font-extrabold text-[#111827] leading-none">Secure</span>
                  <span className="text-[8px] sm:text-[10px] text-[#6B7280] font-semibold mt-1 leading-none">100% Confidential</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: High-Fidelity Dual-Pane Dashboard Mockup */}
          <div className="lg:col-span-7 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

              {/* Left Dark Sidebar Pane */}
              <div className="hidden lg:flex lg:col-span-4 bg-[#152331] p-5 flex-col items-stretch gap-6">

                {/* Active Tab */}
                <div className="px-3.5 py-2 rounded-lg bg-[#DC2626] text-white text-[12px] font-bold flex items-center gap-2 shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="7" height="9" />
                    <rect x="14" y="3" width="7" height="5" />
                    <rect x="14" y="12" width="7" height="9" />
                    <rect x="3" y="16" width="7" height="5" />
                  </svg>
                  Dashboard
                </div>

                {/* Vertical menu items stack */}
                <div className="flex flex-col gap-1.5">
                  <div className="px-3.5 py-2 text-[12px] font-bold text-[#9CA3AF] hover:text-white flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap">
                    <HelpCircle className="w-4 h-4" />
                    Knowledge Base
                  </div>
                  <div className="px-3.5 py-2 text-[12px] font-bold text-[#9CA3AF] hover:text-white flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap">
                    <FileSearch className="w-4 h-4" />
                    Documents Review
                  </div>
                  <div className="px-3.5 py-2 text-[12px] font-bold text-[#9CA3AF] hover:text-white flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap">
                    <CreditCard className="w-4 h-4" />
                    Payments
                  </div>
                  <div className="px-3.5 py-2 text-[12px] font-bold text-[#9CA3AF] hover:text-white flex items-center gap-2 cursor-pointer transition-colors whitespace-nowrap">
                    <User className="w-4 h-4" />
                    Profile
                  </div>
                </div>

              </div>



              {/* Right White Content Workspace Pane */}
              <div className="col-span-12 lg:col-span-8 bg-[#FFFFFF] p-4 sm:p-6 flex flex-col gap-6">

                {/* Greeting section */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-[17px] font-extrabold text-[#111827]">Welcome back, User</h3>
                    <span className="px-2 py-0.5 text-[9px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200/60 rounded-full uppercase tracking-wider leading-none">
                      Demo
                    </span>
                  </div>
                  <span className="text-[11.5px] text-[#6B7280] font-semibold mt-0.5">Here's the status of your recovery</span>
                </div>

                {/* Sub-card: Current Recovery Status */}
                <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] p-4 flex flex-col gap-4 relative">

                  {/* Status header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                    <div className="flex flex-col">
                      <span className="text-[11.5px] font-extrabold text-[#111827]">Current Recovery Status</span>
                      <span className="text-[10px] text-[#9CA3AF] font-bold mt-0.5">Recovery ID: REC123456</span>
                    </div>
                    {/* Sage-wash Status pill */}
                    <span className="px-2.5 py-1 text-[10px] font-extrabold text-[#03543F] bg-[#DEF7EC] border border-emerald-200/50 rounded-full">
                      In Progress
                    </span>
                  </div>

                  {/* Horizontal visual status timeline track */}
                  <div className="relative pt-3 pb-2 flex items-center justify-between">
                    {/* Visual Green connector path line */}
                    <div className="absolute left-3.5 right-3.5 top-[23px] h-[2.5px] bg-[#E5E7EB]">
                      <div className="w-[78%] h-full bg-[#10B981]"></div>
                    </div>

                    {/* Step 1: Submitted */}
                    <div className="flex flex-col items-center gap-1.5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[9px] font-bold text-[#111827]">Submitted</span>
                      <span className="text-[7.5px] text-[#9CA3AF] font-extrabold leading-none">12 May</span>
                    </div>

                    {/* Step 2: Notice Sent */}
                    <div className="flex flex-col items-center gap-1.5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[9px] font-bold text-[#111827]">Notice Sent</span>
                      <span className="text-[7.5px] text-[#9CA3AF] font-extrabold leading-none">14 May</span>
                    </div>

                    {/* Step 3: Responded */}
                    <div className="flex flex-col items-center gap-1.5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-[9px] font-bold text-[#111827]">Responded</span>
                      <span className="text-[7.5px] text-[#9CA3AF] font-extrabold leading-none">18 May</span>
                    </div>

                    {/* Step 4: Resolution */}
                    <div className="flex flex-col items-center gap-1.5 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-[#9CA3AF] text-[#9CA3AF] flex items-center justify-center shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                      </div>
                      <span className="text-[9px] font-bold text-[#4B5563]">Resolution</span>
                      <span className="text-[7.5px] text-[#DC2626] font-black leading-none uppercase">In Progress</span>
                    </div>

                  </div>

                </div>

                {/* Sub-card: Amount & Category column layout */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-[#9CA3AF] uppercase">Amount in Dispute</span>
                    <span className="text-xl font-black text-[#111827] mt-1 select-text">₹85,000</span>
                  </div>
                  <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                    <span className="text-[10px] font-bold text-[#9CA3AF] uppercase">Category</span>
                    <span className="text-[13px] font-bold text-[#111827] mt-1 select-text">Salary Recovery</span>
                  </div>
                </div>

                {/* Detail action trigger */}
                <button className="w-full text-center py-2.5 text-xs font-bold text-[#111827] border border-[#D1D5DB] hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                  View Details
                </button>

              </div>

            </div>
          </div>

        </div>

        {/* ================= BASE HORIZONTAL CREDIBILITY TRUST METRICS ROW ================= */}
        <div className="w-full max-w-7xl mx-auto mt-12 md:mt-24 bg-white border border-[#E5E7EB] rounded-2xl p-2 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] select-none">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-6 items-center">

            {/* Metric 1 */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 px-1 sm:px-4 py-1 sm:py-2 border-r border-[#E5E7EB]/80 last:border-0 justify-center text-center sm:text-left">
              <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-md sm:rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                <TrendingDown className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-xs sm:text-xl md:text-2xl font-black text-[#111827] leading-none select-text">₹4.2Cr+</span>
                <span className="text-[7.5px] sm:text-[11px] text-[#6B7280] font-bold mt-0.5 sm:mt-1.5 leading-none">Recoveries Processed</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 px-1 sm:px-4 py-1 sm:py-2 border-r border-[#E5E7EB]/80 last:border-0 justify-center text-center sm:text-left">
              <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-md sm:rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-xs sm:text-xl md:text-2xl font-black text-[#111827] leading-none select-text">12,000+</span>
                <span className="text-[7.5px] sm:text-[11px] text-[#6B7280] font-bold mt-0.5 sm:mt-1.5 leading-none">Users Assisted</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 px-1 sm:px-4 py-1 sm:py-2 last:border-0 justify-center text-center sm:text-left">
              <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-md sm:rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                <CheckCircle className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-xs sm:text-xl md:text-2xl font-black text-[#111827] leading-none select-text">91%</span>
                <span className="text-[7.5px] sm:text-[11px] text-[#6B7280] font-bold mt-0.5 sm:mt-1.5 leading-none">Resolution Rate</span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= JOINT BRANDING: POWERED BY AMA LEGAL SOLUTIONS ================= */}
        <section className="mt-12 md:mt-24 max-w-7xl mx-auto px-4 md:px-0">
          <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[32px] p-6 sm:p-10 md:p-14 shadow-[0_12px_50px_rgba(0,0,0,0.025)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Ambient Red/Green Glow in background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left side: Content block */}
            <div className="flex-1 text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">STRATEGIC ALLIANCE</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-black text-[#111827] leading-[1.15] tracking-tight mb-5">
                Legal Recovery is Powered by <br className="hidden sm:inline" />
                <span className="text-[#DC2626]">AMA Legal Solutions</span>
              </h2>
              
              <p className="text-[13px] sm:text-[14.5px] text-[#4B5563] leading-relaxed mb-6 font-medium max-w-2xl mx-auto lg:mx-0">
                To guarantee absolute validity and the highest resolution rates, Legal Recovery's cutting-edge legaltech platform is backed and legally powered by **AMA Legal Solutions**—a leading full-service legal firm. This powerful synergy combines digital convenience and advanced automation with institutional legal authority.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[12.5px] font-bold text-[#111827]">Advocate-Vetted Process</h4>
                    <p className="text-[11.5px] text-[#6B7280] leading-relaxed mt-0.5">Every step is designed and audited by senior legal professionals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[12.5px] font-bold text-[#111827]">Seamless Legal Escalation</h4>
                    <p className="text-[11.5px] text-[#6B7280] leading-relaxed mt-0.5">Direct transition to physical litigation or court proceedings if required.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Logos comparison visual */}
            <div className="w-full lg:w-[42%] flex flex-col items-center justify-center z-10 shrink-0">
              <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 md:p-10 w-full flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 shadow-[0_4px_30px_rgba(0,0,0,0.01)]">
                
                {/* Connecting light line */}
                <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 hidden sm:block pointer-events-none" />
                <div className="absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 sm:hidden pointer-events-none" />

                {/* Left Logo: Legal Recovery */}
                <div className="relative bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.02)] flex items-center justify-center w-[280px] h-[124px] hover:scale-105 transition-all duration-300">
                  <img src="/lrlogo.svg" alt="Legal Recovery Logo" className="h-[48px] w-auto object-contain" />
                </div>

                {/* Center Connector Badge */}
                <div className="relative z-10 bg-white border border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.03)] px-3.5 py-1.5 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap leading-none select-none">
                  POWERED BY
                </div>

                {/* Right Logo: AMA Legal Solutions */}
                <div className="relative bg-white rounded-2xl p-4 border border-slate-200/80 shadow-[0_6px_20px_rgba(0,0,0,0.02)] flex items-center justify-center w-[220px] h-[124px] hover:scale-105 transition-all duration-300">
                  <img src="/ama4.png" alt="AMA Legal Solutions Logo" className="h-[76px] w-auto object-contain" />
                </div>

              </div>
              
              <div className="mt-4 text-center">
                <span className="text-[11px] font-bold text-slate-400 select-none">Strategic technology and professional legal alliance</span>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                  aria-label="Download AMA Legal Solutions on the App Store"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M16.34 12.14a4.35 4.35 0 0 1 2.08-3.64 4.46 4.46 0 0 0-3.51-1.9c-1.49-.15-2.91.88-3.66.88s-1.92-.86-3.15-.84a4.68 4.68 0 0 0-3.94 2.4c-1.68 2.92-.43 7.24 1.2 9.59.8 1.15 1.76 2.44 3.01 2.39 1.2-.05 1.66-.78 3.12-.78s1.86.78 3.14.75c1.3-.02 2.11-1.17 2.9-2.33a10.42 10.42 0 0 0 1.32-2.72 4.24 4.24 0 0 1-2.51-3.8Zm-2.41-7.11a4.26 4.26 0 0 0 1-3.05 4.34 4.34 0 0 0-2.84 1.47 4.07 4.07 0 0 0-1.04 2.95 3.58 3.58 0 0 0 2.88-1.37Z" />
                  </svg>
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions&hl=en_IN"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-bold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-900"
                  aria-label="Get AMA Legal Solutions on Google Play"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path d="M2.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l10.9-10.8L2.6 2.4Z" fill="#00A0FF" />
                    <path d="M17 14.4 13.5 11 2.6 21.6c.5.5 1.4.6 2.4.1L17 14.4Z" fill="#FF3A44" />
                    <path d="M17.1 7.2 5 0C4 .5 3.1.6 2.6 1.1L13.5 11l3.6-3.8Z" fill="#32A071" />
                    <path d="M22 11.1c0-.7-.5-1.4-1.4-1.9L17 7.2 13.3 11l3.7 3.5 3.6-2.1c.9-.6 1.4-1.2 1.4-2.1Z" fill="#FFD400" />
                  </svg>
                  Google Play
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ================= HIGH FIDELITY SERVICES GRID SECTION ================= */}
        <ServicesSection />

        {/* ================= WHY CHOOSE US SECTION ================= */}
        <WhyChooseUsSection />

        {/* ================= HOW IT WORKS SECTION ================= */}
        <HowItWorksSection />

        {/* ================= PRICING SECTION ================= */}
        <PricingSection />

        {/* ================= CALL TO ACTION SECTION ================= */}
        <CTASection />

      </main>

    </div>
  );
}

function ServicesSection() {
  const cards = [
    {
      title: "Salary &\nEmployment Dues",
      slug: "/services/recovery-of-salary-and-employment-dues",
      pointers: [
        "Unpaid F&F dues",
        "Delayed salaries",
        "Unpaid bonuses",
        "Wrongful termination"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Briefcase className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <IndianRupee className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Refunds &\nConsumer Complaints",
      slug: "/services/refunds-and-consumer-complaints",
      pointers: [
        "E-commerce refunds",
        "Defective products",
        "Billing overcharges",
        "Warranty breaches"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Shield className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Security Deposits &\nRental Recoveries",
      slug: "/services/security-deposits-and-rental-recoveries",
      pointers: [
        "Unreturned deposits",
        "Commercial leases",
        "Deduction disputes",
        "Delayed rent dues"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <HomeIcon className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Key className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Freelancer &\nClient Payments",
      slug: "/services/recovery-of-freelancer-and-client-payments",
      pointers: [
        "Milestone payouts",
        "Contract breaches",
        "Unapproved work",
        "Retainer recovery"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <FileText className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Check className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Friend / Personal\nMoney Recovery",
      slug: "/services/recovery-of-money-from-a-friend",
      pointers: [
        "Personal loans",
        "Group expenses",
        "Cash advances",
        "Promissory notes"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Users className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Coins className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Airline &\nTravel Recoveries",
      slug: "/services/airline-and-travel-recoveries",
      pointers: [
        "Flight refunds",
        "Train booking dues",
        "Hotel overcharges",
        "Baggage loss recovery"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Plane className="w-10 h-10 text-[#111827] stroke-[2.2] -rotate-45" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Clock className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Vendor &\nInvoice Recovery",
      slug: "/services/vendor-and-invoice-recoveries",
      pointers: [
        "Supplier invoices",
        "Raw material costs",
        "Supply chain credit",
        "Service provider dues"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Receipt className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Timer className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      title: "Property &\nBuilder Disputes",
      slug: "/services/property-and-builder-disputes",
      pointers: [
        "Possession delays",
        "Booking token refund",
        "Maintenance dues",
        "Amenity breaches"
      ],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Building2 className="w-10 h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="mt-12 md:mt-24 max-w-7xl mx-auto select-none">
      {/* Centered Header */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-none mb-4">
          What Can We Help You Recover?
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-none">
          From unpaid dues to refund delays – we’ve got you covered.
        </p>
      </div>

      {/* Grid containing 8 cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 px-2 sm:px-4 md:px-0">
        {cards.map((card, idx) => {
          const CardContent = (
            <div
              className="flex flex-col items-start bg-white border border-[#E5E7EB] rounded-2xl p-3 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.035)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full"
            >
              {/* Visual Icon with hover micro-scales */}
              <div className="mb-2 transform transition-transform duration-300 group-hover:scale-105">
                {card.icon}
              </div>
              
              {/* Left Aligned Title */}
              <h3 className="text-[12px] sm:text-base font-extrabold text-[#111827] leading-[1.3] whitespace-pre-line mb-2">
                {card.title}
              </h3>

              {/* Pointers List */}
              <ul className="w-full text-left flex flex-col gap-1 sm:gap-2 pt-2 border-t border-[#E5E7EB]/60 mt-auto">
                {card.pointers.map((pointer, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-1 text-[9px] sm:text-xs text-[#4B5563] font-semibold leading-tight">
                    <span className="text-[#DC2626] font-black shrink-0 mt-[1px]">•</span>
                    <span>{pointer}</span>
                  </li>
                ))}
              </ul>
            </div>
          );

          if (card.slug) {
            return (
              <Link key={idx} href={card.slug} className="block h-full">
                {CardContent}
              </Link>
            );
          }

          return <div key={idx}>{CardContent}</div>;
        })}
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  const points = [
    {
      title: "Easy & Simple",
      description: "No legal jargon. We explain everything in simple words.",
      icon: <Lightbulb className="w-8 h-8 text-[#DC2626] stroke-[2]" />
    },
    {
      title: "Fast Resolution",
      description: "We act quickly and keep you updated at every step.",
      icon: <Clock className="w-8 h-8 text-[#111827] stroke-[2]" />
    },
    {
      title: "Affordable Pricing",
      description: "High-quality legal support without burning a hole in your pocket.",
      icon: <Coins className="w-8 h-8 text-[#111827] stroke-[2]" />
    },
    {
      title: "Trusted by Thousands",
      description: "12,000+ people have recovered what they were owed.",
      icon: <Users className="w-8 h-8 text-[#111827] stroke-[2]" />
    }
  ];

  return (
    <section className="mt-12 md:mt-24 max-w-7xl mx-auto px-4 md:px-0 select-none">
      <div className="bg-[#FFF9F9] rounded-[24px] border border-[#FEE2E2]/60 px-4 sm:px-6 md:px-12 py-6 sm:py-12 md:py-16 shadow-[0_8px_30px_rgba(220,38,38,0.015)]">
        {/* Centered Heading */}
        <h2 className="text-xl sm:text-2xl md:text-[28px] font-black text-[#111827] text-center mb-6 sm:mb-12 tracking-tight">
          Why people choose Legal Recovery?
        </h2>

        {/* 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Icon Container with hover effects and consistent style */}
              <div className="h-14 w-14 sm:h-16 sm:w-16 mb-4 sm:mb-5 flex items-center justify-center rounded-2xl bg-red-50/40 border border-[#FEE2E2]/50 transform transition-transform duration-300 hover:scale-110">
                {point.icon}
              </div>
              
              {/* Sub-headline */}
              <h3 className="text-[13px] sm:text-[15px] font-extrabold text-[#111827] mb-2 leading-none">
                {point.title}
              </h3>
              
              {/* Description Body */}
              <p className="text-[11px] sm:text-[13px] text-[#4B5563] font-medium leading-[1.6] max-w-[210px] mx-auto">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      title: "Provide Case Details",
      description: "Fill out custom dispute placeholder info, upload your proof, and specify the case details in just a few minutes.",
      icon: <Upload className="w-16 h-16 sm:w-24 sm:h-24 text-[#111827] stroke-[1.5]" />
    },
    {
      step: 2,
      title: "Enter Opposition Email",
      description: "Provide the email address of the individual or organization holding your funds to direct the automated notices.",
      icon: <FileSearch className="w-16 h-16 sm:w-24 sm:h-24 text-[#111827] stroke-[1.5]" />
    },
    {
      step: 3,
      title: "Systematic Weekly Escalation",
      description: "We automatically draft and send 3 legal notices and 1 formal police complaint draft week-by-week to ensure maximum impact.",
      icon: <Send className="w-16 h-16 sm:w-24 sm:h-24 text-[#111827] stroke-[1.5]" />
    },
    {
      step: 4,
      title: "Track Live Progress & Replies",
      description: "Monitor notice delivery, check when the opposition reads the email, and receive instant alerts if they reply to your recovery mail.",
      icon: <CheckCircle className="w-16 h-16 sm:w-24 sm:h-24 text-[#DC2626] stroke-[1.5]" />
    }
  ];

  const timelineNodes = [
    {
      label: "Submitted",
      date: "12 May",
      status: "completed",
      icon: <Check className="w-5 h-5 text-white stroke-[3]" />
    },
    {
      label: "Notice Sent",
      date: "14 May",
      status: "completed",
      icon: <Check className="w-5 h-5 text-white stroke-[3]" />
    },
    {
      label: "Response Received",
      date: "18 May",
      status: "completed",
      icon: <Check className="w-5 h-5 text-white stroke-[3]" />
    },
    {
      label: "In Progress",
      date: "20 May",
      status: "current",
      icon: (
        <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      label: "Resolved",
      date: "--",
      status: "upcoming",
      icon: <Handshake className="w-5 h-5 text-gray-400 stroke-[1.8]" />
    }
  ];

  return (
    <div className="mt-12 md:mt-24 w-full flex flex-col gap-12 md:gap-24 select-none">
      {/* PART 1: HOW IT WORKS */}
      <section className="w-full">
        {/* Centered Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-none mb-3 tracking-tight">
            How it works?
          </h2>
          <p className="text-sm text-[#6B7280] font-semibold tracking-wide">
            A simple 4-step process
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 md:gap-16 lg:gap-8 relative">
          {steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group">
              {/* Top Red Number Indicator */}
              <div className="absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-xs sm:text-2xl font-black h-8 w-8 sm:h-14 sm:w-14 rounded-full flex items-center justify-center border-2 border-white shadow-md z-20">
                {item.step}
              </div>

              {/* Responsive Circle for Icon */}
              <div className="relative h-28 w-28 sm:h-56 sm:w-56 rounded-full border-2 border-[#E5E7EB] bg-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.05)] z-10">
                {item.icon}
              </div>

              {/* Connecting arrow (only visible between items on large screens) */}
              {idx < 3 && (
                <div className="hidden lg:flex absolute top-[112px] left-[72%] w-[56%] h-px items-center justify-center z-0">
                  <span className="text-[#D1D5DB] text-4xl font-bold">→</span>
                </div>
              )}

              {/* Step Headline */}
              <h3 className="text-base sm:text-2xl md:text-3xl font-black text-[#111827] mt-4 sm:mt-8 mb-2 sm:mb-4 leading-tight">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-[11px] sm:text-base md:text-lg text-[#4B5563] font-medium leading-[1.6] max-w-[280px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PART 2: REAL-TIME UPDATES */}
      <section className="bg-[#F8F9FB] rounded-[32px] border border-[#E5E7EB]/60 px-4 sm:px-6 md:px-12 py-6 sm:py-12 md:py-16 shadow-[0_8px_30px_rgba(0,0,0,0.01)]">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-lg sm:text-xl md:text-[24px] font-black text-[#111827] leading-none mb-3 tracking-tight">
            Real-time updates, every step of the way.
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280] font-semibold">
            Track your recovery anytime from your dashboard.
          </p>
        </div>

        {/* Outer White Tracker Card */}
        <div className="bg-white rounded-[24px] border border-[#E5E7EB]/70 p-4 sm:p-6 md:p-8 max-w-5xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.015)] relative">
          
          {/* Connecting Line (Only visible on desktop/tablet) */}
          <div className="absolute top-[56px] left-[10%] right-[10%] h-[3px] bg-[#E5E7EB] hidden md:block z-0">
            {/* Green progress bar fill up to 4th node (75% completion of line span) */}
            <div className="absolute top-0 left-0 h-full bg-[#10B981] w-[75%]" />
          </div>

          {/* Vertical Connecting Line (Only visible on mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[56px] bottom-[56px] w-[3px] bg-[#E5E7EB] md:hidden z-0">
            {/* Green progress bar fill up to 4th node (75% height) */}
            <div className="absolute top-0 left-0 w-full bg-[#10B981] h-[75%]" />
          </div>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 md:grid md:grid-cols-5 md:gap-0 relative z-10 w-full">
            {timelineNodes.map((node, idx) => (
              <div key={idx} className="w-full relative z-10">
                
                {/* Mobile view with centered timeline and alternating text columns */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 w-full md:hidden">
                  
                  {/* Left Column (shows text for odd indexes) */}
                  <div className="text-right">
                    {idx % 2 === 0 && (
                      <div className="flex flex-col">
                        <h4 className="text-[13px] font-black text-[#111827] leading-tight mb-1">
                          {node.label}
                        </h4>
                        <span className="text-[11px] text-[#6B7280] font-bold leading-none">
                          {node.date}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Center Circle Column */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-transform duration-300 hover:scale-105 shrink-0 ${
                      node.status === "completed"
                        ? "bg-[#10B981] text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                        : node.status === "current"
                        ? "bg-[#111827] text-white shadow-[0_4px_12px_rgba(17,24,39,0.2)]"
                        : "bg-[#F3F4F6] text-gray-400"
                    }`}
                  >
                    {node.icon}
                  </div>

                  {/* Right Column (shows text for even indexes) */}
                  <div className="text-left">
                    {idx % 2 === 1 && (
                      <div className="flex flex-col">
                        <h4 className="text-[13px] font-black text-[#111827] leading-tight mb-1">
                          {node.label}
                        </h4>
                        <span className="text-[11px] text-[#6B7280] font-bold leading-none">
                          {node.date}
                        </span>
                      </div>
                    )}
                  </div>

                </div>

                {/* Desktop centered view */}
                <div className="hidden md:flex flex-col items-center text-center">
                  
                  {/* Node circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-transform duration-300 hover:scale-105 shrink-0 ${
                      node.status === "completed"
                        ? "bg-[#10B981] text-white shadow-[0_4px_12px_rgba(16,185,129,0.2)]"
                        : node.status === "current"
                        ? "bg-[#111827] text-white shadow-[0_4px_12px_rgba(17,24,39,0.2)]"
                        : "bg-[#F3F4F6] text-gray-400"
                    }`}
                  >
                    {node.icon}
                  </div>

                  {/* Text Wrapper */}
                  <div className="flex flex-col items-center mt-3.5">
                    {/* Node Label */}
                    <h4 className="text-[13px] font-black text-[#111827] mb-1 leading-tight">
                      {node.label}
                    </h4>

                    {/* Node Date / Pending state */}
                    <span className="text-[11px] text-[#6B7280] font-bold leading-none">
                      {node.date}
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

function PricingSection() {
  return (
    <section className="mt-12 md:mt-24 max-w-5xl mx-auto px-4 md:px-0 select-none">
      {/* Centered Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-none mb-3 tracking-tight">
          Affordable Pricing for Everyone
        </h2>
        <p className="text-xs sm:text-sm text-[#6B7280] font-semibold tracking-wide">
          One simple, unified plan to recover what is rightfully yours.
        </p>
      </div>

      {/* Unified Showcase Layout (Not a standard card) */}
      <div className="bg-white rounded-[32px] border-2 border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Block: Price and Scope details */}
          <div className="lg:col-span-5 bg-gray-50/50 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
            <div>
              <span className="px-3 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200 rounded-full uppercase tracking-wider mb-6 inline-block">
                Unified Plan
              </span>
              <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Legal Recovery</h3>
              <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                Get full-suite support from expert attorneys. Standardized flat pricing with absolutely zero commission on your recovered amount.
              </p>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black text-[#111827] tracking-tight">₹999</span>
                <span className="text-sm text-[#6B7280] font-bold">/ flat fee</span>
              </div>
              <p className="text-[12.5px] text-[#DC2626] font-bold leading-[1.5] max-w-sm">
                *This pricing is only for 1 case which includes sending to 1 opposition and covers 3 notices & 1 police complaint.
              </p>
            </div>
          </div>

          {/* Right Block: Included features & Call-to-action */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h4 className="text-[13.5px] font-extrabold text-[#111827] uppercase tracking-wider mb-6">What's included in this plan:</h4>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-3 sm:gap-x-6 mb-10">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">3 Legal Notices</span>
                    <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Progressive legal escalations</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">1 Police Complaint</span>
                    <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Expert draft validation</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Attorney Validation</span>
                    <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Verified by top legal experts</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Real-time Tracking</span>
                    <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Live dashboard case updates</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-[#E5E7EB]/85">
              <button className="w-full sm:w-auto px-8 py-3.5 text-[14px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                Get Started Now
              </button>
              <div className="flex items-center gap-2.5 text-left">
                <Shield className="w-5 h-5 text-[#2563EB] shrink-0" />
                <span className="text-[12px] text-[#6B7280] font-bold leading-tight">
                  100% transparent.<br />No commissions, no hidden fees.
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Trust Footer Badge */}
      <div className="w-full max-w-md mx-auto mt-12 md:mt-24 flex items-center gap-4 bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.015)] select-none">
        {/* Soft-blue circle shield icon */}
        <div className="w-12 h-12 rounded-full bg-blue-50/80 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100/50 shadow-inner">
          <Shield className="w-6 h-6 text-[#2563EB]" />
        </div>
        {/* Texts */}
        <div className="flex flex-col">
          <div className="text-[14px] font-black text-[#111827] leading-none mb-1.5">
            No hidden charges. No extra cost.
          </div>
          <div className="text-[12px] text-[#6B7280] font-bold leading-none">
            100% transparent pricing.
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-0 mt-12 md:mt-24 select-none">
      <div className="bg-[#152331] rounded-[32px] border border-gray-800/80 p-6 sm:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center">
        {/* Glowing Background Radial Accents */}
        <div className="absolute top-1/2 -left-[10%] w-[350px] h-[350px] bg-red-950/20 -translate-y-1/2 -z-10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 -right-[10%] w-[350px] h-[350px] bg-emerald-950/15 -translate-y-1/2 -z-10 rounded-full blur-[80px]" />

        {/* Tagline Pill */}
        <span className="px-3.5 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-500/10 border border-red-500/20 rounded-full uppercase tracking-wider mb-6 inline-block">
          Take Action Today
        </span>

        {/* Massive Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight mb-4 sm:mb-6 max-w-3xl mx-auto leading-[1.1] select-text">
          Ready to recover what is rightfully yours?
        </h2>

        {/* Subtitle description */}
        <p className="text-xs sm:text-base text-gray-400 font-semibold leading-[1.6] max-w-2xl mx-auto mb-8 sm:mb-10 select-text">
          Join over 12,000+ people who recovered their stuck salaries, security deposits, client dues, and refunds. Start your recovery in less than 5 minutes.
        </p>

        {/* CTA Buttons Row - compact & horizontal on mobile */}
        <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto mb-10 sm:mb-12 select-none">
          <button className="flex-1 sm:flex-none px-3 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-[14.5px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-red-950/30 cursor-pointer text-center whitespace-nowrap">
            Start Recovery
          </button>
          <button className="flex-1 sm:flex-none px-3 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-[14.5px] font-black text-white bg-[#1E293B]/40 hover:bg-[#1E293B]/80 border border-gray-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center whitespace-nowrap">
            Talk to Expert
          </button>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs font-semibold text-gray-400 border-t border-gray-800/40 pt-6 sm:pt-8 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] stroke-[3.5]" />
            <span>No Hidden Fees</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] stroke-[3.5]" />
            <span>Notice in 24 Hours</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] stroke-[3.5]" />
            <span>91% Success Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}

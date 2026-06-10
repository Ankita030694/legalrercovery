"use client";

import React from "react";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import Image from "next/image";
import {
  Shield,
  Heart,
  Award,
  Users,
  TrendingUp,
  Gavel,
  Phone,
  ArrowRight,
  Briefcase,
  Scale,
  Target,
  Lightbulb,
  Clock,
  IndianRupee,
  AlertCircle,
  CheckCircle2,
  XCircle
} from "lucide-react";

export default function AboutPage() {

  const pillars = [
    {
      icon: <Users className="w-8 h-8 text-[#1E293B]" />,
      title: "Our Mission",
      body: "To help people recover what's rightfully theirs through legal recovery experts and digital legal services India."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#1E293B]" />,
      title: "Our Vision",
      body: "To become India's most trusted technology driven legal platform and nationwide legal recovery services provider."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#1E293B]" />,
      title: "Our Values",
      body: "Commitment to client focused legal services, transparent legal process, and online dispute resolution."
    },
    {
      icon: <Target className="w-8 h-8 text-[#1E293B]" />,
      title: "Why We Exist",
      body: "Providing affordable legal solutions, online legal assistance, and legal support for recovery."
    }
  ];

  const stats = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      value: "₹4,2CR+",
      label: "Claims Processed"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </svg>
      ),
      value: "12,000+",
      label: "Happy Clients"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      value: "24-Hour",
      label: "Notice Generation"
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      value: "91%",
      label: "Successful Resolutions"
    }
  ];

  const teamMembers = [
    { name: "Adv. Priya Sharma",  role: "Founder & Lead Counsel",   specialisation: "Labour & Employment Law",   exp: "14 years", icon: <Scale   className="w-6 h-6 text-[#DC2626]" /> },
    { name: "Adv. Rahul Mehta",   role: "Senior Partner",            specialisation: "Consumer Protection",       exp: "11 years", icon: <Gavel   className="w-6 h-6 text-[#DC2626]" /> },
    { name: "Adv. Sneha Iyer",    role: "Associate Counsel",          specialisation: "Tenant Rights & Property",  exp: "7 years",  icon: <Briefcase className="w-6 h-6 text-[#DC2626]" /> },
    { name: "Adv. Arjun Kapoor",  role: "Legal Tech Lead",            specialisation: "Digital Dispute Resolution", exp: "9 years", icon: <Shield  className="w-6 h-6 text-[#DC2626]" /> }
  ];

  const aboutFaqs: FAQItem[] = [
    {
      question: "Who founded LegalRecovery and why?",
      answer: "LegalRecovery was founded by a team of experienced legal professionals and technology experts who wanted to democratize access to the law. We built this trusted legal recovery platform to offer nationwide legal recovery services and digital legal services India, ensuring everyone gets proper legal support for recovery."
    },
    {
      question: "How do your legal recovery experts handle money disputes?",
      answer: "We are a technology driven legal platform. While we are not a law firm, we connect you with qualified legal professionals for money disputes and expert recovery lawyers. Our legal recovery support team guides you through a transparent legal process and online dispute resolution to recover your dues without stress."
    },
    {
      question: "How is LegalRecovery different from a traditional law firm?",
      answer: "Traditional law firms charge high hourly retainer fees. We provide affordable legal solutions and online legal assistance. With our quick legal notice service and reliable legal recovery platform, the entire legal process made simple, making recovery through legal action fast, transparent, and hassle-free."
    },
    {
      question: "What types of disputes do your money recovery specialists cover?",
      answer: "Our debt recovery experts and money recovery specialists handle consumer dispute legal help, landlord tenant dispute assistance, employee salary disputes, salary recovery specialists tasks, freelancer payment dispute experts reviews, and business payment recovery experts cases. We provide specialized legal recovery solutions India."
    },
    {
      question: "Is my case handled by a secure legal recovery platform?",
      answer: "Absolutely. We operate a highly secure legal recovery platform using advanced encryption. Our team of legal notice experts and professional recovery assistance advocates ensures that your case documents, personal data, and legal consultation online records are stored with bank-grade safety."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden">

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative w-full pt-16 sm:pt-20 bg-white">

        {/* On mobile: full-width stacked layout
            On desktop: side-by-side two-column */}
        <div className="flex flex-col lg:flex-row lg:items-stretch">

          {/* ── LEFT: text content ── */}
          <div className="flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-24
                          pt-8 sm:pt-10 lg:pt-16 xl:pt-20
                          pb-8 sm:pb-10 lg:pb-16
                          lg:w-[52%] xl:w-[50%] flex-shrink-0
                          max-w-full lg:max-w-none">

            <p className="text-[11px] sm:text-[13px] font-extrabold text-[#DC2626] uppercase tracking-[0.15em] mb-3 sm:mb-4 select-text">
              ABOUT US - trusted legal recovery platform
            </p>

            {/* Headline */}
            <h1 className="text-[26px] sm:text-[34px] lg:text-[40px] xl:text-[48px]
                           font-extrabold text-[#111827] leading-[1.1] tracking-[-0.015em] mb-4 sm:mb-5 select-text">
              We&apos;re On A Mission To Make{" "}
              Legal Recovery{" "}
              <span className="text-[#DC2626]">Simple For Everyone.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#4B5563] leading-[1.75] max-w-[600px] mb-8 sm:mb-10 select-text">
              At Legal Recovery, we are a secure legal recovery platform and trusted recovery partner committed to providing professional legal services India. Our technology driven legal platform combines experienced legal professionals, money recovery specialists, and expert recovery lawyers to offer legal recovery assistance. We ensure a transparent legal process and hassle free legal recovery for everyone.
            </p>

            <div className="relative w-full h-[220px] sm:h-[280px] overflow-hidden rounded-2xl mb-8 lg:hidden">
              <Image
                src="/edited.png"
                alt="LegalRecovery expert legal team"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                style={{
                  objectPosition: "center 10%"
                }}
              />
            </div>

            {/* 4 pillars - 2 col on mobile, 4 col on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-7 sm:gap-x-6 sm:gap-y-8 lg:gap-x-6">
              {pillars.map((p, i) => (
                <div key={i} className="flex flex-col items-start">
                  <div className="mb-2.5">{p.icon}</div>
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-[#111827] mb-1">{p.title}</h3>
                  <p className="text-[11px] sm:text-[12px] text-[#6B7280] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* CTA - visible on mobile below pillars */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 sm:mt-10 lg:hidden">
              <a href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#DC2626] text-white text-[13px] font-bold rounded-xl shadow-[0_4px_16px_rgba(220,38,38,0.25)] hover:bg-[#B91C1C] transition-all">
                Start Your Recovery <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/how-it-works"
                className="flex items-center justify-center gap-2 px-5 py-3 border border-[#D1D5DB] text-[#111827] text-[13px] font-bold rounded-xl hover:border-[#DC2626] hover:text-[#DC2626] transition-all">
                How It Works
              </a>
            </div>
          </div>

          {/* ── RIGHT: Team photo - cropped to upper body ── */}
          <div className="hidden lg:flex lg:flex-1 items-end overflow-hidden lg:mt-0 mx-5 sm:mx-8 lg:mx-0">
            {/* Height: short on mobile, taller on desktop */}
            <div className="relative w-full
                            h-[220px] sm:h-[280px] lg:h-[420px] xl:h-[750px]
                            overflow-hidden rounded-2xl lg:rounded-none">
              <Image
                src="/edited.png"
                alt="LegalRecovery expert legal team"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{
                  objectPosition: "center 10%"
                }}
              />
              {/* Subtle bottom fade so it bleeds into stats bar */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── DARK STATS BAR ── */}
        <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-[#152331] rounded-3xl shadow-xl overflow-hidden">
            {/* 2-col on mobile, 4-col on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-white/20 lg:divide-y-0 lg:divide-x lg:divide-white/20">
              {stats.map((s, i) => (
                <div key={i}
                  className={`flex items-center gap-4 px-5 sm:px-8 py-6 sm:py-9
                    ${i % 2 === 0 && i !== stats.length - 1 ? "border-r border-white/20 lg:border-r-0" : ""}`}>
                  {/* Circle icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30
                                  flex items-center justify-center flex-shrink-0 text-white/80 bg-white/5">
                    {s.icon}
                  </div>
                  {/* Value + label */}
                  <div>
                    <div className="text-[18px] sm:text-[22px] lg:text-[24px] font-black text-white leading-none tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#94A3B8] mt-1.5 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY WE STARTED & THE GENESIS STORY
      ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#F8F9FB] to-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 xl:px-12">

          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-4">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.15em]">Why We Started</span>
            </div>
            <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] font-black text-[#111827] leading-[1.15] tracking-tight">
              Democratizing Financial Justice: <br className="hidden sm:inline" />
              <span className="text-[#DC2626]">Why Legal Recovery Was Born</span>
            </h2>
            <p className="mt-4 text-[13px] sm:text-[15px] text-[#4B5563] max-w-[720px] mx-auto leading-relaxed">
              Every day, thousands of honest people find themselves trapped in financial disputes. As a leading legal recovery company India, our experienced legal professionals offer professional recovery assistance and legal support for recovery. Here is the story of why we built India's premier technology driven legal platform.
            </p>
          </div>

          {/* Two-Column Genesis Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column: The Everyday Money Lending Trap */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">The Problem We Saw</span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111827] mb-4 leading-tight">
                  Lending in Goodwill, <span className="text-[#DC2626]">Receiving Empty Promises</span>
                </h3>
                <div className="space-y-4 text-[13px] sm:text-[14px] text-[#4B5563] leading-relaxed">
                  <p>
                    It always starts the same way. A close friend is in a medical emergency, a family member needs a quick bridge loan, or a vendor requests an advance to buy materials. Out of sheer goodwill and trust, you transfer your hard-earned savings. No formal contract is signed, only a verbal promise or WhatsApp chat.
                  </p>
                  <p>
                    Months pass, and the promise fades. Polite reminders are met with excuses - medical emergencies, bank issues, sudden business losses. Soon, messages go unread. Calls get declined or blocked. The sudden realization hits: <strong>you have been fooled by someone you trusted.</strong>
                  </p>
                  <p>
                    When you seek recovery through legal action, traditional systems pose a daunting nightmare. High lawyer retainer fees, complex jargon, endless physical visits, and a system built for large corporations - not everyday individuals. Most people simply give up without professional recovery assistance or legal help for unpaid dues.
                  </p>
                </div>
              </div>
              
              {/* Pain point highlight callout */}
              <div className="mt-6 p-4 bg-red-50/50 rounded-2xl border border-red-100/50 flex gap-3">
                <AlertCircle className="w-5 h-5 text-[#DC2626] flex-shrink-0 mt-0.5" />
                <p className="text-[12px] text-[#991B1B] leading-relaxed">
                  Over 74% of personal debt disputes in India are never resolved because the victim cannot afford the upfront cost or the sheer stress of hiring a traditional attorney.
                </p>
              </div>
            </div>

            {/* Right Column: The Legaltech Solution */}
            <div className="bg-[#152331] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-between">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Our Legaltech Revolution</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight">
                  Technology Meets the Law to <span className="text-[#DC2626]">Empower You</span>
                </h3>
                <div className="space-y-4 text-[13px] sm:text-[14px] text-slate-300 leading-relaxed">
                  <p>
                    We knew there had to be a better way. The law should not be a luxury reserved for those who can afford expensive retainers. It should be a shield that protects everyday citizens.
                  </p>
                  <p>
                    <strong>Legal Recovery was created as a technology driven legal platform and nationwide legal recovery services initiative.</strong> Our legal recovery experts and debt recovery experts took the absolute best legal strategies and combined them with online dispute resolution. By delivering digital legal services India and legal recovery solutions India, we stripped away the friction, delay, and exorbitant costs.
                  </p>
                  <p>
                    With our platform, sending a legally-binding demand notice takes just minutes. We handle the drafting, the dispatch, and the tracking. You get a direct, professional, and powerful legal presence without leaving your couch. It is recovery made simple, transparent, and completely accessible.
                  </p>
                </div>
              </div>

              {/* Key differentiator list */}
              <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">Zero Retainers</div>
                    <div className="text-[10px] text-slate-400">No hidden hourly costs</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white uppercase tracking-wider">100% Digital</div>
                    <div className="text-[10px] text-slate-400">Track progress in real-time</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Everyday Money Lending Traps Card Grid */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-10">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.15em] block mb-2">Common Scenarios</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
                Where Do Honest People Get Fooled?
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13.5px] text-[#6B7280] max-w-[500px] mx-auto leading-relaxed">
                These are the daily problems we see. If you find yourself in one of these situations, you are not alone - and we are here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "The Friendly Handout",
                  scenario: "Lending to a friend/relative in an 'emergency'.",
                  deception: "Months of excuses. Get professional recovery assistance and debt resolution services to settle friend disputes.",
                  icon: <Users className="w-5 h-5 text-[#DC2626]" />,
                  color: "border-t-4 border-t-red-500"
                },
                {
                  title: "The Tenant Deposit Dispute",
                  scenario: "Landlord tenant dispute assistance for security deposit recovery.",
                  deception: "Moving out only to have landlords ignore you. Get security deposit recovery, tenant deposit recovery, and rental deposit recovery help.",
                  icon: <Scale className="w-5 h-5 text-[#DC2626]" />,
                  color: "border-t-4 border-t-blue-500"
                },
                {
                  title: "Freelancer & B2B Dues",
                  scenario: "Freelancer payment dispute experts and business payment recovery experts support.",
                  deception: "Clients withholding payments. Get specialized freelancer payment dispute experts and business payment recovery experts to resolve contract breaches.",
                  icon: <Briefcase className="w-5 h-5 text-[#DC2626]" />,
                  color: "border-t-4 border-t-amber-500"
                },
                {
                  title: "Unpaid Salary Dispute",
                  scenario: "Salary recovery specialists helping resolve employee salary disputes.",
                  deception: "Employers delaying full & final payments. Our salary recovery specialists draft quick legal notice service demands to claim your money.",
                  icon: <IndianRupee className="w-5 h-5 text-[#DC2626]" />,
                  color: "border-t-4 border-t-emerald-500"
                }
              ].map((trap, idx) => (
                <div key={idx} className={`bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ${trap.color} flex flex-col justify-between`}>
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4">
                      {trap.icon}
                    </div>
                    <h4 className="text-[14.5px] font-bold text-[#111827] mb-1">{trap.title}</h4>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">The Trap</div>
                    <p className="text-[12.5px] text-[#4B5563] leading-relaxed mb-3 font-medium">
                      &ldquo;{trap.scenario}&rdquo;
                    </p>
                    <div className="text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-1">The Reality</div>
                    <p className="text-[12px] text-slate-500 leading-relaxed italic">
                      {trap.deception}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traditional Process vs. Legal Recovery Comparison Matrix */}
          <div className="mt-16 sm:mt-24 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100/80">
            <div className="text-center mb-10">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.15em] block mb-2">The Comparison</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#111827]">
                How We Redefined Money Recovery
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13.5px] text-[#6B7280] max-w-[500px] mx-auto leading-relaxed">
                Compare the old, exhausting traditional legal route with our frictionless, tech-enabled approach.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Traditional Path */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <h4 className="text-[15px] font-extrabold text-[#4B5563] flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  The Traditional Legal Route
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "Exorbitant Upfront Fees", desc: "Lawyers require expensive hourly or retainer fees just to hear your story, with no guarantee of success." },
                    { title: "Manual & Inefficient drafting", desc: "Drafting demands takes weeks of physical meetings, email exchanges, and endless corrections." },
                    { title: "Opaque Case Tracking", desc: "You are kept completely in the dark, calling your lawyer constantly for updates that never come." },
                    { title: "Prohibitive Friction", desc: "Requires physical visits, court registries, printing piles of documents, and navigating complex court rules." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[13.5px] font-bold text-[#111827]">{item.title}</h5>
                        <p className="text-[12px] text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Legal Recovery Way */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-emerald-100 shadow-[0_4px_24px_rgba(16,185,129,0.06)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-wider px-3.5 py-1 rounded-bl-xl">
                  RECOMMENDED
                </div>
                <h4 className="text-[15px] font-extrabold text-[#DC2626] flex items-center gap-2 mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  The Legal Recovery Way
                </h4>
                <ul className="space-y-4">
                  {[
                    { title: "Affordable Legal Solutions", desc: "Zero surprise consultation fees. We make legal process made simple through our secure legal recovery platform." },
                    { title: "Fast Legal Recovery Services", desc: "Our tech platform generates precise, iron-clad legal notices within 24 hours, approved by expert advocates." },
                    { title: "Live Case Dashboard", desc: "Track every step of your notice delivery, recipient response, and case movement live on your screen." },
                    { title: "Debt Resolution Services", desc: "Initiate your case in 5 minutes. We handle all dispatch, follow-ups, and legal heavy lifting for debt resolution." }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-[13.5px] font-bold text-[#111827]">{item.title}</h5>
                        <p className="text-[12px] text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      {/* ═══════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#152331] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10 max-w-[1100px] mx-auto px-5 sm:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">

            {/* Left text */}
            <div className="lg:w-[38%] flex-shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#DC2626]/10 rounded-full border border-[#DC2626]/20 mb-4">
                <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.15em]">Why Choose Us</span>
              </div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-black text-white leading-tight tracking-tight mb-4">
                The LegalRecovery <span className="text-[#DC2626]">Difference</span>
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#94A3B8] leading-relaxed mb-6">
                We are not a traditional law firm. We are a results-first recovery platform that puts
                technology, transparency, and speed at the heart of every case.
              </p>
              <a href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#DC2626] text-white text-[13px] font-bold rounded-xl
                           hover:bg-[#B91C1C] hover:-translate-y-0.5 transition-all duration-200
                           shadow-[0_4px_16px_rgba(220,38,38,0.3)]">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right feature grid - 1-col on mobile, 2-col on sm+ */}
            <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: <Clock       className="w-4 h-4 text-[#DC2626]" />, title: "Recovery Support Team", desc: "Our dedicated legal recovery support team keeps you updated at every stage." },
                { icon: <IndianRupee className="w-4 h-4 text-[#DC2626]" />, title: "Legal Notice Experts",  desc: "All notice generation and legal notice and recovery services are managed by legal notice experts." },
                { icon: <Shield      className="w-4 h-4 text-[#DC2626]" />, title: "Reliable Platform",     desc: "A reliable legal recovery platform with bank-grade security protocols." },
                { icon: <Users       className="w-4 h-4 text-[#DC2626]" />, title: "Experienced Professionals", desc: "Connecting you with top legal professionals for money disputes and advocates." },
                { icon: <TrendingUp  className="w-4 h-4 text-[#DC2626]" />, title: "Legal Consultation Online", desc: "Access legal consultation online and case updates via our digital dashboard." },
                { icon: <Award       className="w-4 h-4 text-[#DC2626]" />, title: "Award Winning Team",         desc: "Recognized as the best legal recovery company India for tech-driven resolution." }
              ].map((feat, i) => (
                <div key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8
                             hover:bg-white/8 hover:border-[#DC2626]/30 transition-all duration-300">
                  <div className="w-7 h-7 rounded-lg bg-[#DC2626]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-white mb-0.5">{feat.title}</h4>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ SECTION
      ═══════════════════════════════════════ */}
      <FAQSection faqs={aboutFaqs} heading="About LegalRecovery — FAQs" subheading="Common questions about our platform, team, and approach." />

      {/* ═══════════════════════════════════════
          CTA STRIP
      ═══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-[22px] sm:text-[28px] lg:text-[36px] font-black text-[#111827] leading-tight tracking-tight mb-3">
            Ready to Recover What&apos;s Yours?
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#6B7280] mb-7 max-w-[460px] mx-auto leading-relaxed">
            Join over 12,400 Indians who trusted LegalRecovery to fight for their rights - and won.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5
                         bg-[#DC2626] text-white text-[13px] sm:text-[14px] font-bold rounded-xl
                         shadow-[0_4px_20px_rgba(220,38,38,0.25)] hover:bg-[#B91C1C]
                         hover:-translate-y-0.5 transition-all duration-200">
              Start Your Free Case Review <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+918000000000"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5
                         border border-[#D1D5DB] text-[#111827] text-[13px] sm:text-[14px] font-bold rounded-xl
                         hover:border-[#DC2626] hover:text-[#DC2626] transition-all duration-200">
              <Phone className="w-4 h-4" /> Call Us Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

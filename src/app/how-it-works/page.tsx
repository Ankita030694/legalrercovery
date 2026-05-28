"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
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
  Plane,
  Receipt,
  Building2,
  AlertTriangle,
  Lightbulb,
  Upload,
  FileSearch,
  Send,
  Handshake,
  ArrowRight,
  FilePlus,
  MailOpen,
  MessagesSquare,
  FileCheck
} from "lucide-react";

export default function HowItWorksPage() {

  const steps = useMemo(() => [
    {
      step: 1,
      label: "STEP 1",
      title: "Submit Your Case",
      description: "Upload your details and supporting documents related to your issue.",
      icon: <FilePlus className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#111827] group-hover:text-[#DC2626] transition-colors stroke-[1.8]" />
    },
    {
      step: 2,
      label: "STEP 2",
      title: "We Review & Analyze",
      description: "Our legal experts analyze your case, evaluate the situation and suggest the best action.",
      icon: <FileSearch className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#111827] group-hover:text-[#DC2626] transition-colors stroke-[1.8]" />
    },
    {
      step: 3,
      label: "STEP 3",
      title: "Legal Notice Issued",
      description: "A professional legal notice is drafted and sent to the respondent.",
      icon: <MailOpen className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#111827] group-hover:text-[#DC2626] transition-colors stroke-[1.8]" />
    },
    {
      step: 4,
      label: "STEP 4",
      title: "Escalation & Follow-up",
      description: "We follow up through multiple channels to ensure a response and negotiate resolution.",
      icon: <MessagesSquare className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#111827] group-hover:text-[#DC2626] transition-colors stroke-[1.8]" />
    },
    {
      step: 5,
      label: "STEP 5",
      title: "Resolution / Recovery",
      description: "We help you get your money or rightful settlement without unnecessary delays.",
      icon: <FileCheck className="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-[#111827] group-hover:text-[#DC2626] transition-colors stroke-[1.8]" />
    }
  ], []);

  const usps = useMemo(() => [
    {
      title: "Fast & Efficient",
      description: "Most notices issued within 24 hours",
      icon: (
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
          <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B5563] stroke-[1.8]" />
          <div className="absolute w-1.5 h-1.5 bg-[#DC2626] rounded-full top-[17px] left-[17px] sm:top-[21px] sm:left-[21px]" />
        </div>
      )
    },
    {
      title: "Affordable",
      description: "Transparent pricing, No hidden charges",
      icon: (
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
          <IndianRupee className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B5563] stroke-[1.8]" />
          <div className="absolute w-1.5 h-1.5 bg-[#DC2626] rounded-full top-[17px] left-[17px] sm:top-[21px] sm:left-[21px]" />
        </div>
      )
    },
    {
      title: "Expert Legal Team",
      description: "Experienced advocates and legal experts",
      icon: (
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B5563] stroke-[1.8]" />
          <div className="absolute w-1.5 h-1.5 bg-[#DC2626] rounded-full top-[17px] left-[17px] sm:top-[21px] sm:left-[21px]" />
        </div>
      )
    },
    {
      title: "Secure & Confidential",
      description: "Your data and case details are 100% safe",
      icon: (
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]">
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B5563] stroke-[1.8]" />
          <div className="absolute w-1.5 h-1.5 bg-[#DC2626] rounded-full top-[17px] left-[17px] sm:top-[21px] sm:left-[21px]" />
        </div>
      )
    }
  ], []);

  const testimonials = useMemo(() => [
    {
      name: "Rohan Kumar",
      initials: "RK",
      role: "Freelance UI/UX Designer",
      location: "Bengaluru",
      quote: "I had ₹1.8 Lakhs in unpaid dues from a client who went completely silent for 3 months. Within 2 weeks of starting the automated notice escalation on LegalRecovery, the client cleared my outstanding balance in full! Incredible service.",
      stars: 5
    },
    {
      name: "Ananya Mehta",
      initials: "AM",
      role: "Tech Lead & Ex-Employee",
      location: "Mumbai",
      quote: "My previous employer delayed my full and final settlement of ₹3.4 Lakhs for over half a year. The systematic weekly escalation notices sent by this platform did what 50 follow-up emails couldn't. I got my entire settlement last week.",
      stars: 5
    },
    {
      name: "Sandeep Rao",
      initials: "SR",
      role: "Startup Founder",
      location: "Gurgaon",
      quote: "An enterprise client was dragging our software development milestone payout of ₹8.5 Lakhs for months with arbitrary excuses. The attorney-verified notice drafted here was extremely professional and resolved the dispute in days.",
      stars: 5
    },
    {
      name: "Priya Sharma",
      initials: "PS",
      role: "IT Consultant & Tenant",
      location: "Pune",
      quote: "My former landlord refused to return my rental security deposit of ₹75,000, citing absurd painting charges. Sending the formal legal recovery notice through the portal made him transfer the full amount back in 24 hours.",
      stars: 5
    },
    {
      name: "Amit Verma",
      initials: "AV",
      role: "Independent Contractor",
      location: "Noida",
      quote: "Unpaid dues are the worst part of freelancing. I used the consumer notice automation for a ₹1.2 Lakhs default from an agency. The dashboard tracking let me know when they opened the mail, and they paid up shortly after.",
      stars: 5
    },
    {
      name: "Vikram Malhotra",
      initials: "VM",
      role: "Retail Business Owner",
      location: "Chennai",
      quote: "A wholesale distributor defaulted on ₹5.6 Lakhs of supply invoices. The multi-stage escalation notices drafted by the system were highly effective. I recovered ₹4.8 Lakhs immediately and structured the rest. Best decision ever.",
      stars: 5
    }
  ], []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden relative">

      {/* ================= HOW IT WORKS HERO ================= */}
      <main className="pt-15 pb-12 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto overflow-hidden relative">
        
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-25" />

        {/* Top-Left Heading Section */}
        <div className="text-left w-full max-w-8xl mx-auto mb-12 md:mb-16 pt-6 sm:pt-8 md:pt-12">
          <h1 className="text-3xl sm:text-4xl md:text-[52px] font-black tracking-tight text-[#111827] leading-[1.1] mb-4 select-text">
            A Simple 5 Step Process <br />
            To <span className="text-[#DC2626]">Recover</span> What's Yours
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#6B7280] font-semibold leading-relaxed max-w-2xl select-text">
            Reclaim your stuck funds systematically with our streamlined, attorney-verified legal recovery engine.
          </p>
        </div>

        {/* ================= 5 STEPS CIRCLES GRID ================= */}
        <div className="w-full max-w-8xl mx-auto relative mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-12 lg:gap-y-0 gap-x-0 lg:gap-x-4 xl:gap-8 relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative group w-full gap-4 lg:gap-0"
              >
                
                {/* Circle Container holding the Big Icon, Intercepting Step Number, & Mobile Down Arrow */}
                <div className="relative shrink-0 flex items-center justify-center">
                  
                  {/* Step Number Badge (Intercepting top-right border on mobile, top-middle border on desktop) */}
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:-translate-y-1/2 z-30 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-[10px] sm:text-xs lg:text-sm shadow-[0_3px_10px_rgba(220,38,38,0.25)] select-none">
                    {item.step < 10 ? `0${item.step}` : item.step}
                  </div>

                  {/* Main steps circle */}
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 lg:h-36 lg:w-36 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] z-10">
                    <div className="scale-75 sm:scale-90 lg:scale-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  {/* Vertical Down Arrow on Mobile */}
                  {idx < 4 && (
                    <div className="flex lg:hidden absolute top-[100%] left-1/2 -translate-x-1/2 z-20 h-8 flex-col items-center pointer-events-none mt-2.5">
                      <div className="flex-1 border-l-2 border-dashed border-[#9CA3AF]/60 w-0" />
                      <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-[#9CA3AF]/80 transform rotate-45 -mt-1.5 shrink-0" />
                    </div>
                  )}
                </div>

                {/* Horizontal Connecting Arrow on Desktop */}
                {idx < 4 && (
                  <div className="hidden lg:flex absolute right-0 translate-x-1/2 top-[72px] -translate-y-1/2 z-20 w-10 items-center justify-center pointer-events-none">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex-1 border-t-2 border-dashed border-[#9CA3AF]/60 h-0" />
                      <div className="w-2 h-2 border-t-2 border-r-2 border-[#9CA3AF]/80 transform rotate-45 -ml-1.5 shrink-0" />
                    </div>
                  </div>
                )}

                {/* Title & Description (Right of the circle on mobile, below the circle on desktop) */}
                <div className="flex flex-col text-left lg:text-center mt-0 lg:mt-6 pl-2 lg:pl-0 select-text pt-2 sm:pt-3 lg:pt-0">
                  <h3 className="text-sm sm:text-base lg:text-[27px] font-black text-[#111827] mb-1.5 sm:mb-2 lg:mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-base text-[#4B5563] font-medium leading-[1.6] max-w-[280px] lg:max-w-[310px] lg:mx-auto">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ================= TRUST BADGES BAR ================= */}
        <section className="w-full max-w-8xl mx-auto bg-white border border-[#E5E7EB] rounded-2xl p-4 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.012)] mb-16 md:mb-24 select-none">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-2 xl:gap-6 items-center">
            {usps.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 sm:gap-4 px-1 sm:px-4 py-1.5 lg:border-r border-[#E5E7EB]/80 last:border-0 justify-start text-left"
              >
                {/* Icon with Red Accent */}
                {item.icon}
                
                {/* Badge Copy */}
                <div className="flex flex-col select-text">
                  <span className="text-xs sm:text-base font-black text-[#111827] leading-tight">
                    {item.title}
                  </span>
                  <span className="text-[9px] sm:text-xs text-[#6B7280] font-semibold mt-0.5 sm:mt-1 leading-tight">
                    {item.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CALL TO ACTION STRIP ================= */}
        <section className="w-full max-w-8xl mx-auto px-0 mt-12 md:mt-24 select-none">
          <div className="bg-[#152331] border border-gray-800/80 rounded-2xl md:rounded-[24px] p-6 md:py-8 md:px-12 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Subtle Ambient light behind */}
            <div className="absolute top-1/2 right-[10%] w-[300px] h-[150px] bg-red-950/20 -translate-y-1/2 -z-10 rounded-full blur-3xl" />
            
            {/* Left Content */}
            <div className="flex flex-col items-start text-left select-text max-w-2xl">
              <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight tracking-tight">
                Not sure which category Fits your case?
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-400 font-semibold leading-normal mt-1 md:mt-2">
                Talk to your legal experts and get clarity
              </p>
            </div>

            {/* Right Button */}
            <div className="w-full md:w-auto shrink-0 select-none">
              <Link href="/contact" className="w-full md:w-auto inline-block">
                <span className="block w-full md:w-auto px-8 py-3.5 text-xs sm:text-[13.5px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-red-950/30 cursor-pointer text-center whitespace-nowrap">
                  Talk to Expert
                </span>
              </Link>
            </div>

          </div>
        </section>

        {/* ================= CLIENT TESTIMONIALS SECTION ================= */}
        <section className="w-full max-w-8xl mx-auto px-0 mt-16 md:mt-24 mb-12 md:mb-20 select-none">
          
          {/* Header */}
          <div className="text-left w-full mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black tracking-tight text-[#111827] leading-tight mb-3 select-text">
              Trusted By Thousands Of <span className="text-[#DC2626]">Recovered</span> Clients
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#6B7280] font-semibold leading-relaxed max-w-2xl select-text">
              Hear directly from freelancers, employees, tenants, and business owners who reclaimed their stuck funds using our systematic legal recovery engine.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-2xl sm:rounded-[20px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                    {[...Array(item.stars)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote Description */}
                  <p className="text-xs sm:text-[13.5px] text-[#4B5563] font-semibold leading-[1.6] select-text italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Profile */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]/60">
                  {/* Letter Avatar */}
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                    {item.initials}
                  </div>
                  
                  {/* Profile Copy */}
                  <div className="flex flex-col text-left select-text">
                    <span className="text-xs sm:text-sm font-black text-[#111827] leading-none">
                      {item.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#6B7280] font-bold mt-1 leading-none">
                      {item.role} • {item.location}
                    </span>
                    <span className="flex items-center gap-1 text-[9px] sm:text-[10px] text-emerald-600 font-extrabold mt-1.5">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Client
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </section>

      </main>

  

    </div>
  );
}

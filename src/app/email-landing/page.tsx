"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { RecoveryForm } from "@/components/RecoveryForm";
import { PaymentModal } from "@/components/PaymentModal";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import {
  Shield,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Clock,
  ArrowRight,
  FileText,
  Send,
  Scale,
  IndianRupee,
  Star,
  Users,
  Check,
  ChevronRight,
  TrendingUp,
  Sparkles,
  Building2,
  Briefcase,
  Receipt,
  Home as HomeIcon,
  CreditCard,
  FileCheck,
  Zap,
  Gavel,
  Award,
  AlertCircle,
  Lightbulb,
  Upload,
  FileSearch,
  Handshake,
  TrendingDown,
  Key,
  Timer,
  AlertTriangle,
  Plane
} from "lucide-react";

export default function EmailLandingPage() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCaseType, setSelectedCaseType] = useState<number>(0);
  const [claimAmount, setClaimAmount] = useState<number>(75000);

  // Recovery Calculator logic
  const calculatedSavings = useMemo(() => {
    const traditionalDraftingFee = Math.max(12000, Math.round(claimAmount * 0.08));
    const traditionalCommission = Math.round(claimAmount * 0.15);
    const traditionalTotalCost = traditionalDraftingFee + traditionalCommission;

    const lrFee = 999;
    const lrCommission = 0; // 0% commission
    const lrTotalCost = lrFee + lrCommission;

    const totalSavings = traditionalTotalCost - lrTotalCost;
    const retainedPercentage = Math.round(((claimAmount - lrTotalCost) / claimAmount) * 100);

    return {
      traditionalDraftingFee,
      traditionalCommission,
      traditionalTotalCost,
      lrFee,
      lrCommission,
      lrTotalCost,
      totalSavings,
      retainedPercentage: Math.max(90, Math.min(99, retainedPercentage))
    };
  }, [claimAmount]);

  const weeklyEscalationTimeline = [
    {
      week: "Week 1",
      day: "Day 01",
      title: "1st Legal Demand Notice",
      tag: "Formal Legal Notice",
      tagColor: "bg-red-50 text-[#DC2626] border-red-200",
      description: "Custom-drafted on official advocate letterhead citing statutory provisions (Contract Act, BNS, Labour laws, Sec 138). Demands full settlement within 7 days.",
      badge: "Immediate Action"
    },
    {
      week: "Week 2",
      day: "Day 07",
      title: "2nd Legal Notice / Follow-up Demand",
      tag: "Statutory Reminder",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200",
      description: "If unpaid after 7 days, a stronger reminder is automatically dispatched highlighting compounding interest liability, civil recovery, and legal defense costs.",
      badge: "Automated Escalation"
    },
    {
      week: "Week 3",
      day: "Day 14",
      title: "3rd Final Warning Legal Notice",
      tag: "Pre-Litigation Ultimatum",
      tagColor: "bg-orange-50 text-orange-700 border-orange-200",
      description: "Final statutory warning before formal court litigation and authority complaints. Sets a 7-day hard deadline for direct payment.",
      badge: "Final Notice"
    },
    {
      week: "Week 4",
      day: "Day 21",
      title: "Police Complaint / Authority Grievance Draft",
      tag: "Criminal Complaint Ready",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200",
      description: "A formal police complaint draft (Section 316/318 BNS Cheating & Fraud) and regulatory grievance draft ready to file at your local police station, cyber cell, or Labour Commissioner.",
      badge: "Authority Escalation"
    }
  ];

  const whatYouGet = [
    {
      title: "Advocate-Drafted Formal Legal Notice",
      description: "Custom-drafted by verified Supreme Court & High Court practicing advocates citing exact legal sections (BNS, Contract Act, Section 138 NI Act, Labour laws).",
      icon: <FileText className="w-6 h-6 text-[#DC2626]" />,
      points: [
        "Formatted on official Advocate letterhead with Bar Council credentials",
        "Clear claim computation with principal amount and legal interest",
        "Statutory warning of civil suit & criminal proceedings"
      ]
    },
    {
      title: "7-Day Interval Notice Escalation Process",
      description: "Systematic multi-stage recovery: 3 legal notices and 1 formal police complaint draft dispatched at 7-day intervals for maximum legal pressure.",
      icon: <Send className="w-6 h-6 text-[#DC2626]" />,
      points: [
        "Day 1: 1st Formal Legal Notice",
        "Day 7 & Day 14: 2nd and 3rd Escalation Warning Notices",
        "Day 21: Police Complaint & Authority Grievance Draft"
      ]
    },
    {
      title: "Real-Time Tracking Dashboard & Document Vault",
      description: "A centralized digital portal to monitor notice dispatch, track delivery, log debtor communications, and download digitally signed PDFs.",
      icon: <Zap className="w-6 h-6 text-[#DC2626]" />,
      points: [
        "Real-time status updates on notice delivery & opens",
        "Secure encrypted vault for agreements, chats, and bank statements",
        "Instant alerts when the debtor views or replies to notices"
      ]
    },
    {
      title: "Direct Settlement & 0% Commission",
      description: "The defaulter settles directly into your bank account. You can stop future notices anytime with one click upon receiving payment.",
      icon: <IndianRupee className="w-6 h-6 text-[#DC2626]" />,
      points: [
        "Flat ₹999 fee only — no hidden charges or retainers",
        "Keep 100% of the money recovered (0% commission)",
        "One-click 'Stop Notices' button as soon as you receive payment"
      ]
    }
  ];

  const homepageStyleSteps = [
    {
      step: 1,
      title: "Provide Basic Details",
      description: "You only need the opposing party's email, phone number, due date, and amount to be recovered. Rest everything is taken care of by us.",
      icon: <Upload className="w-10 h-10 sm:w-14 sm:h-14 text-[#111827] stroke-[1.8]" />
    },
    {
      step: 2,
      title: "Enter Opposition Contact Details",
      description: "Provide the email and contact details of the individual, landlord, or organization holding your funds to direct the automated notices.",
      icon: <FileSearch className="w-10 h-10 sm:w-14 sm:h-14 text-[#111827] stroke-[1.8]" />
    },
    {
      step: 3,
      title: "7-Day Interval Notice Escalation",
      description: "We automatically draft and send 3 legal notices and 1 formal police complaint draft week-by-week (every 7 days) to ensure maximum legal pressure.",
      icon: <Send className="w-10 h-10 sm:w-14 sm:h-14 text-[#111827] stroke-[1.8]" />
    },
    {
      step: 4,
      title: "Track Live Progress & Get Paid",
      description: "Monitor notice delivery from your dashboard. Debtor settles directly into your account — stop future notices anytime with 1 click.",
      icon: <CheckCircle2 className="w-10 h-10 sm:w-14 sm:h-14 text-[#DC2626] stroke-[1.8]" />
    }
  ];

  const timelineNodes = [
    { label: "Submitted", date: "Day 01", status: "completed", icon: <Check className="w-4 h-4 text-white stroke-[3]" /> },
    { label: "1st Legal Notice", date: "Day 01", status: "completed", icon: <Check className="w-4 h-4 text-white stroke-[3]" /> },
    { label: "2nd Notice (7 Days)", date: "Day 07", status: "completed", icon: <Check className="w-4 h-4 text-white stroke-[3]" /> },
    { label: "3rd Warning (14 Days)", date: "Day 14", status: "current", icon: <div className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" /> },
    { label: "Police Draft / Resolved", date: "Day 21", status: "upcoming", icon: <Handshake className="w-4 h-4 text-gray-400 stroke-[1.8]" /> }
  ];

  const useCases = [
    {
      title: "Salary &\nEmployment Dues",
      tagline: "Ex-employer withholding salary, bonus, or experience/relieving letter",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <Briefcase className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <IndianRupee className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Payment of Wages Act 1936, Industrial Disputes Act, Section 316 BNS",
      badge: "Most Common"
    },
    {
      title: "Freelancer &\nClient Payments",
      tagline: "Clients ghosting after work delivery or withholding contractual milestone payouts",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <FileText className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Indian Contract Act 1872, MSME Samadhaan Act 2006",
      badge: "High Success"
    },
    {
      title: "Security Deposits &\nRental Recoveries",
      tagline: "Landlords or PG owners refusing refund of advance deposit upon vacating",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <HomeIcon className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Key className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Transfer of Property Act 1882, Model Tenancy Act, Consumer Forum",
      badge: "95% Settlement"
    },
    {
      title: "Vendor &\nInvoice Recovery",
      tagline: "Unpaid invoices, commercial credit defaults, and purchase order disputes",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <IndianRupee className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Timer className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Commercial Courts Act, MSMED Act 45-day statutory rule",
      badge: "Commercial"
    },
    {
      title: "Friend / Personal\nMoney Recovery",
      tagline: "Money lent via UPI, bank transfer, or cash where borrower is refusing repayment",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <Users className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <IndianRupee className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Order 37 CPC Summary Suit, Section 318 BNS Cheating",
      badge: "Evidence-Backed"
    },
    {
      title: "Cheque Bounce\n(Sec 138 NI Act)",
      tagline: "Dishonoured cheques due to insufficient funds or account closed",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <CreditCard className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertCircle className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Section 138 Negotiable Instruments Act 1881",
      badge: "Criminal Action"
    },
    {
      title: "Refunds &\nConsumer Complaints",
      tagline: "Undelivered goods, refused refund policies, gym/coaching cancellations",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <Shield className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertCircle className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "Consumer Protection Act 2019, E-Commerce Rules",
      badge: "Consumer Forum"
    },
    {
      title: "Property &\nBuilder Disputes",
      tagline: "Delayed flat possession, builder forfeiture, or non-refund of token amount",
      icon: (
        <div className="relative w-11 h-11 flex items-center justify-center">
          <Building2 className="w-9 h-9 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertTriangle className="w-3.5 h-3.5 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      ),
      statutes: "RERA Section 18, National Consumer Disputes Redressal Commission",
      badge: "RERA Notice"
    }
  ];

  const whyChoosePoints = [
    {
      title: "Easy & Simple",
      description: "No legal jargon. Clear step-by-step process with automated weekly reminders.",
      icon: <Lightbulb className="w-7 h-7 text-[#DC2626] stroke-[2]" />
    },
    {
      title: "7-Day Escalation",
      description: "3 formal legal notices + 1 police complaint draft sent systematically every 7 days.",
      icon: <Clock className="w-7 h-7 text-[#111827] stroke-[2]" />
    },
    {
      title: "Affordable Pricing",
      description: "Flat ₹999 fee for the entire case with absolutely zero commission on recovery.",
      icon: <IndianRupee className="w-7 h-7 text-[#111827] stroke-[2]" />
    },
    {
      title: "Trusted Nationwide",
      description: "Over ₹4.2Cr+ in claims processed with a 91%+ pre-litigation resolution rate.",
      icon: <Users className="w-7 h-7 text-[#111827] stroke-[2]" />
    }
  ];

  const comparisonData = [
    {
      feature: "Upfront Cost",
      traditional: "₹10,000 – ₹25,000+",
      diy: "Free but legally flawed",
      legalRecovery: "Flat ₹999 for full case",
      highlight: true
    },
    {
      feature: "Success Commission",
      traditional: "15% – 25% of recovered amount",
      diy: "0%",
      legalRecovery: "0% Commission (Keep 100%)",
      highlight: true
    },
    {
      feature: "7-Day Interval Notice Escalation",
      traditional: "Billed separately (₹5,000 each notice)",
      diy: "Manual follow-ups (easily ignored)",
      legalRecovery: "3 Notices + Police Draft Included",
      highlight: true
    },
    {
      feature: "Advocate Letterhead",
      traditional: "Included",
      diy: "Not Available",
      legalRecovery: "Verified Advocate Letterhead",
      highlight: false
    },
    {
      feature: "Online Live Tracking Dashboard",
      traditional: "Manual phone calls to lawyer",
      diy: "None",
      legalRecovery: "Real-time 24/7 Web Dashboard",
      highlight: false
    },
    {
      feature: "100% Digital (Zero Physical Visits)",
      traditional: "Multiple chamber visits required",
      diy: "Post office visits required",
      legalRecovery: "100% Online from anywhere in India",
      highlight: true
    }
  ];

  const testimonials = [
    {
      quote: "My ex-employer was withholding 2 months salary of ₹1.4 Lakhs. After the 2nd legal notice sent at the 7-day interval, HR transferred the entire amount to my account.",
      name: "Rohit Verma",
      role: "Senior Software Engineer",
      city: "Bengaluru",
      recovered: "₹1,40,000 Recovered",
      time: "10 Days"
    },
    {
      quote: "A freelance client owed me ₹85,000 and stopped responding. The 7-day interval notice process created immense pressure, and they settled before the 3rd notice was dispatched.",
      name: "Ananya Sharma",
      role: "Freelance UI/UX Designer",
      city: "Gurugram",
      recovered: "₹85,000 Recovered",
      time: "8 Days"
    },
    {
      quote: "My landlord refused to refund my ₹65,000 security deposit. When he received the formal legal notice on an advocate's letterhead, he refunded within a week.",
      name: "Siddharth Nair",
      role: "Product Manager",
      city: "Mumbai",
      recovered: "₹65,000 Recovered",
      time: "7 Days"
    },
    {
      quote: "We had ₹3.2 Lakhs stuck in an unpaid B2B supplier invoice for 7 months. Traditional lawyers quoted ₹35,000. LegalRecovery resolved it for just ₹999 flat.",
      name: "Vikramaditya Rao",
      role: "Agency Founder",
      city: "Hyderabad",
      recovered: "₹3,20,000 Recovered",
      time: "14 Days"
    }
  ];

  const emailFaqs: FAQItem[] = [
    {
      question: "How does the 7-Day Interval Notice Escalation process work?",
      answer: "When you start a claim, our advocate drafts and sends the 1st Formal Legal Notice on Day 1. If the opposing party does not settle within 7 days, our system automatically prepares and dispatches the 2nd Legal Notice on Day 7, followed by the 3rd Final Warning Notice on Day 14. If still unresolved, on Day 21 you receive a formal Police Complaint / Authority Grievance draft ready to file."
    },
    {
      question: "Can I stop the notices if the debtor pays early?",
      answer: "Yes, absolutely! As soon as the opposing party settles your dues or reaches an agreement with you, you can click 'Stop Notices' directly from your dashboard at any time to halt further escalations."
    },
    {
      question: "Is this legal notice legally valid in Indian courts?",
      answer: "Yes, 100%. Every notice is drafted and vetted by qualified Indian advocates registered with the State Bar Council. It is issued on official advocate letterhead with statutory legal citations under the Bharatiya Nyaya Sanhita, Indian Contract Act, Negotiable Instruments Act, or Labour laws."
    },
    {
      question: "Why is the price only ₹999? Are there any hidden charges or commission?",
      answer: "No hidden charges or commissions. LegalRecovery is built to eliminate expensive traditional law firm retainers. For a flat ₹999 per opposing party, you get the complete 4-stage escalation process (3 legal notices + 1 police complaint draft), and you keep 100% of your recovered money."
    },
    {
      question: "What documents or details do I need to submit my case?",
      answer: "You only need the opposing party's (accused) email address, phone number, due date, and the amount to be recovered. Rest everything is taken care of by our legal advocates and automated recovery system."
    },
    {
      question: "Can I send a legal notice to someone in a different city or state in India?",
      answer: "Yes! LegalRecovery operates pan-India across all 28 states and 8 Union Territories. You can initiate a claim online from anywhere, and our notices are served legally to opposing parties across India."
    }
  ];

  const quickAmounts = [25000, 50000, 100000, 250000, 500000, 1000000];

  const scrollToHeroForm = () => {
    const el = document.getElementById("hero-form-container");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setIsPaymentModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] relative overflow-hidden font-sans select-none pt-20">
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#111827 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Ambient Top Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* ── TOP CAMPAIGN BANNER ── */}
      <div className="bg-[#111827] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold relative z-20 border-b border-white/10 shadow-sm">
        <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/90 text-white text-[11px] font-black tracking-wide uppercase animate-pulse">
            <Sparkles className="w-3 h-3" /> Special Campaign Offer
          </span>
          <span className="text-slate-200">
            Recover your stuck money with systematic 7-day interval legal notice escalation for just <span className="text-red-400 font-extrabold">Flat ₹999</span> (0% Commission).
          </span>
          <button
            onClick={scrollToHeroForm}
            className="hidden md:inline-flex items-center gap-1 text-white font-bold underline hover:text-red-300 transition-colors text-xs ml-1 cursor-pointer"
          >
            Start Claim in 2 Mins <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* ── HERO SECTION (20% MORE COMPACT • FORM FIRST ON MOBILE) ── */}
      <section className="relative z-10 pt-6 sm:pt-10 pb-10 sm:pb-14 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 w-full max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start w-full min-w-0">
          
          {/* Mobile Top Header (Visible only on mobile before the form) */}
          <div className="block lg:hidden order-1 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-[11px] font-bold text-[#DC2626] mb-2.5 w-fit shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>India&apos;s #1 Legal-Tech Money Recovery</span>
            </div>
            <p className="text-2xl sm:text-3xl font-black tracking-tight text-[#111827] leading-tight mb-2">
              Recover Your <span className="text-[#DC2626]">Stuck Money</span> Legally in 15–30 Days.
            </p>
            <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed mb-3">
              We draft & send <strong className="text-[#111827] font-bold">3 Legal Notices & 1 Police Complaint Draft</strong> at automated 7-day intervals.
            </p>
          </div>

          {/* Form Container (order-2 on mobile right after header, order-2 / right column on desktop) */}
          <div id="hero-form-container" className="order-2 lg:order-2 lg:col-span-5 w-full min-w-0 max-w-full">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_15px_50px_rgba(0,0,0,0.07)] border border-[#E5E7EB] hover:border-red-300/80 transition-all duration-300 relative w-full max-w-full sm:max-w-[480px] lg:max-w-none mx-auto min-w-0 overflow-hidden box-border">
              
              {/* Form Top Ribbon */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-red-100 text-[#DC2626] flex items-center justify-center font-black">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-[#111827] tracking-tight">Instant Recovery Setup</p>
                    <p className="text-[10px] text-slate-500 font-medium">Takes less than 2 minutes</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-slate-400 line-through font-semibold">₹2,999</div>
                  <div className="text-xs sm:text-sm font-black text-[#DC2626]">₹999 <span className="text-[9px] text-slate-500 font-bold">Flat</span></div>
                </div>
              </div>

              {/* Direct Embedded Recovery Form */}
              <div className="w-full min-w-0 max-w-full">
                <RecoveryForm />
              </div>

            </div>
          </div>

          {/* Left Column on Desktop / Content on Mobile (order-3 on mobile, order-1 / left column on desktop) */}
          <div className="order-3 lg:order-1 lg:col-span-7 w-full min-w-0 flex flex-col justify-center text-left pt-0 lg:pt-1">
            
            {/* Desktop Headline & Badge (Hidden on mobile to avoid duplication) */}
            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-[#DC2626] mb-3 w-fit shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                <span>India&apos;s #1 Legal-Tech Money Recovery Platform</span>
              </div>

              <h1 className="text-3xl lg:text-[42px] xl:text-[46px] font-black tracking-tight text-[#111827] leading-[1.12] mb-3">
                Recover Your <span className="text-[#DC2626]">Stuck Money</span> Legally in 15–30 Days.
              </h1>

              <p className="text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed mb-4 max-w-2xl">
                Don&apos;t let employers, clients, landlords, or debtors withhold what is rightfully yours. We draft and send <strong className="text-[#111827] font-bold">3 Legal Notices & 1 Police Complaint Draft</strong> at automated 7-day intervals.
              </p>
            </div>

            {/* Core Bullet Guarantees (Compact 2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-4">
              {[
                { title: "Advocate Letterhead Notice", desc: "Drafted by Supreme Court & HC Bar advocates" },
                { title: "7-Day Interval Notice Escalation", desc: "3 Legal Notices sent week-by-week" },
                { title: "Police Complaint Draft Included", desc: "Ready-to-file criminal complaint draft" },
                { title: "0% Commission Forever", desc: "Flat ₹999 fee. Keep 100% of your money" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs hover:border-red-200 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-xs font-black text-[#111827] leading-tight">{item.title}</p>
                    <p className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Trust Metrics Grid (Compact) */}
            <div className="grid grid-cols-3 gap-2 p-3 sm:p-3.5 rounded-xl bg-slate-900 text-white shadow-lg relative overflow-hidden mb-4">
              <div className="absolute top-0 right-0 w-28 h-28 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />
              <div className="border-r border-slate-800 pr-2">
                <div className="text-base sm:text-xl font-black text-white tracking-tight">₹4.2Cr+</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Dues Recovered</div>
              </div>
              <div className="border-r border-slate-800 px-2">
                <div className="text-base sm:text-xl font-black text-red-400 tracking-tight">91.4%</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Pre-Litigation Rate</div>
              </div>
              <div className="pl-2">
                <div className="text-base sm:text-xl font-black text-white tracking-tight">12,000+</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium mt-0.5">Users Assisted</div>
              </div>
            </div>

            {/* Social Proof / Security Badges (Compact) */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-slate-600">
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1">
                <Gavel className="w-3 h-3 text-[#DC2626]" />
                <span>Powered by AMA Legal Solutions</span>
              </div>
              <div className="flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-blue-600" />
                <span>PayU Verified Gateway</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── BASE HORIZONTAL CREDIBILITY TRUST METRICS ROW ── */}
      <div className="w-full max-w-7xl mx-auto mb-16 px-4 md:px-0">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-3 sm:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="grid grid-cols-3 gap-1.5 sm:gap-6 items-center">
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-2 sm:px-4 py-1 sm:py-2 border-r border-[#E5E7EB]/80 justify-center text-center sm:text-left">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-sm sm:text-xl md:text-2xl font-black text-[#111827] leading-none block">₹4.2Cr+</span>
                <span className="text-[9px] sm:text-[11px] text-[#6B7280] font-bold mt-1 leading-none block">Recoveries Processed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-2 sm:px-4 py-1 sm:py-2 border-r border-[#E5E7EB]/80 justify-center text-center sm:text-left">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-sm sm:text-xl md:text-2xl font-black text-[#111827] leading-none block">12,000+</span>
                <span className="text-[9px] sm:text-[11px] text-[#6B7280] font-bold mt-1 leading-none block">Users Assisted</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-2 sm:px-4 py-1 sm:py-2 justify-center text-center sm:text-left">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-sm sm:text-xl md:text-2xl font-black text-[#111827] leading-none block">91%</span>
                <span className="text-[9px] sm:text-[11px] text-[#6B7280] font-bold mt-1 leading-none block">Resolution Rate</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 7-DAY INTERVAL SYSTEMATIC NOTICE ESCALATION PROCESS (CORE HIGHLIGHT) ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E5E7EB] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 text-xs font-black text-[#DC2626] mb-3 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Systematic Escalation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight mb-3">
              The 7-Day Interval Notice Escalation Process
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium leading-relaxed">
              We send up to 3 legal notices and 1 police complaint draft week-by-week. You can stop notices anytime with 1 click when the debtor pays.
            </p>
          </div>

          {/* 4-Stage Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyEscalationTimeline.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FB] rounded-2xl p-6 border border-[#E5E7EB] hover:border-red-300 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#DC2626] uppercase font-mono tracking-wider">
                      {item.week} • {item.day}
                    </span>
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#111827] mb-2 leading-snug group-hover:text-[#DC2626] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4B5563] font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {item.badge}
                  </span>
                  <span className="text-xs font-black text-slate-400 font-mono">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Tracker Bar Preview (Nuance from Homepage) */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div className="text-left">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">LIVE CASE TRACKER SIMULATION</span>
                <h4 className="text-base font-black text-[#111827]">Automated Week-by-Week Escalation</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Active Case
                </span>
              </div>
            </div>

            {/* Timeline Nodes Bar */}
            <div className="grid grid-cols-5 gap-2 text-center relative py-2">
              {timelineNodes.map((node, nIdx) => (
                <div key={nIdx} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 shadow-xs ${
                    node.status === "completed" 
                      ? "bg-emerald-500 text-white" 
                      : node.status === "current" 
                      ? "bg-[#DC2626] text-white ring-4 ring-red-100" 
                      : "bg-slate-200 text-slate-400"
                  }`}>
                    {node.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-black text-[#111827] leading-tight mb-0.5">{node.label}</span>
                  <span className="text-[9px] text-slate-400 font-bold">{node.date}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 font-medium text-center sm:text-left">
                💡 <strong>Debtor Paid?</strong> Hit the <em>&quot;Stop Notices&quot;</em> button on your dashboard to instantly pause future dispatches.
              </span>
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold rounded-xl transition-colors shrink-0 cursor-pointer"
              >
                Start for ₹999
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS SECTION (4 SIMPLE STEPS - HOMEPAGE DESIGN) ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-none mb-3 tracking-tight">
            How it works?
          </h2>
          <p className="text-sm text-[#6B7280] font-semibold tracking-wide">
            A simple 4-step recovery process
          </p>
        </div>

        {/* 4 Circular Steps Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-8 relative">
          {homepageStyleSteps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group">
              {/* Top Red Number Indicator */}
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-xs sm:text-lg font-black h-8 w-8 sm:h-11 sm:w-11 rounded-full flex items-center justify-center border-2 border-white shadow-md z-20">
                {item.step}
              </div>

              {/* Responsive Circle for Icon */}
              <div className="relative h-24 w-24 sm:h-44 sm:w-44 rounded-full border-2 border-[#E5E7EB] bg-white flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.05)] z-10">
                {item.icon}
              </div>

              {/* Step Headline */}
              <h3 className="text-sm sm:text-lg md:text-xl font-black text-[#111827] mt-4 sm:mt-6 mb-2 leading-tight">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="text-[11px] sm:text-xs md:text-sm text-[#4B5563] font-medium leading-[1.6] max-w-[240px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT YOU WILL GET (DELIVERABLES) ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E5E7EB] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-xs font-black text-[#DC2626] mb-3 uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> What You Will Get
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight mb-3">
              Included in the <span className="text-[#DC2626]">₹999 Flat Recovery Plan</span>
            </h2>
            <p className="text-sm text-[#4B5563] font-normal leading-relaxed">
              Standardized legal notice drafting and escalation backed by verified legal advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatYouGet.map((item, index) => (
              <div
                key={index}
                className="bg-[#F8F9FB] rounded-3xl p-6 sm:p-7 border border-[#E5E7EB] hover:border-red-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-xs">
                    {item.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#111827] mb-2 tracking-tight group-hover:text-[#DC2626] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E5E7EB]">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── HIGH FIDELITY SERVICES GRID (HOMEPAGE DESIGN) ── */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-none mb-3">
            What Can We Help You Recover?
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] font-medium">
            From unpaid dues to refund delays – our 7-day interval legal notices cover every scenario.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {useCases.map((card, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCaseType(idx)}
              className={`bg-white border rounded-2xl p-4 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                selectedCaseType === idx
                  ? "border-[#DC2626] shadow-md ring-2 ring-red-100 -translate-y-1"
                  : "border-[#E5E7EB] hover:border-red-200 hover:shadow-md"
              }`}
            >
              <div>
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xs sm:text-base font-black text-[#111827] mb-1 leading-snug whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#6B7280] font-medium leading-relaxed mb-3">
                  {card.tagline}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-bold text-[#DC2626] uppercase">{card.badge}</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY PEOPLE CHOOSE US SECTION (HOMEPAGE DESIGN) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 select-none">
        <div className="bg-[#FFF9F9] rounded-[24px] border border-[#FEE2E2]/60 px-4 sm:px-8 py-8 sm:py-14 shadow-[0_8px_30px_rgba(220,38,38,0.015)]">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-black text-[#111827] text-center mb-8 sm:mb-12 tracking-tight">
            Why people choose Legal Recovery?
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChoosePoints.map((point, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 mb-4 flex items-center justify-center rounded-2xl bg-red-50/40 border border-[#FEE2E2]/50 transform transition-transform duration-300 hover:scale-110">
                  {point.icon}
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-extrabold text-[#111827] mb-2 leading-none">
                  {point.title}
                </h3>
                <p className="text-[11px] sm:text-[13px] text-[#4B5563] font-medium leading-[1.6] max-w-[210px] mx-auto">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRATEGIC ALLIANCE: POWERED BY AMA LEGAL SOLUTIONS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
        <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[32px] p-6 sm:p-10 md:p-12 shadow-[0_12px_50px_rgba(0,0,0,0.025)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">STRATEGIC ALLIANCE</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black text-[#111827] leading-[1.15] tracking-tight mb-4">
              Legal Recovery is Powered by <br className="hidden sm:inline" />
              <span className="text-[#DC2626]">AMA Legal Solutions</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-medium max-w-2xl mx-auto lg:mx-0">
              To guarantee absolute statutory validity and the highest resolution rates, our online legal recovery platform is backed by <strong>AMA Legal Solutions</strong> — a premier legal firm. Every notice and police complaint draft is audited by qualified advocates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-left">
                <div className="w-8 h-8 rounded-lg bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626] shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827]">Advocate-Vetted Notices</p>
                  <p className="text-[11px] text-[#6B7280] leading-tight mt-0.5">Audited by registered Bar Council advocates.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-left">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111827]">Seamless Escalation</p>
                  <p className="text-[11px] text-[#6B7280] leading-tight mt-0.5">Smooth transition to litigation if needed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[38%] flex flex-col items-center justify-center z-10 shrink-0">
            <div className="relative bg-slate-50 border border-slate-100 rounded-3xl p-6 w-full flex flex-col items-center justify-center gap-4 text-center">
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex items-center justify-center w-[130px] h-[70px]">
                  <img src="/lrlogo.svg" alt="Legal Recovery Logo" className="h-[32px] w-auto object-contain" />
                </div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">POWERED BY</span>
                <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex items-center justify-center w-[130px] h-[70px]">
                  <img src="/ama4.png" alt="AMA Legal Solutions Logo" className="h-[52px] w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SAVINGS CALCULATOR ── */}
      <section className="py-16 sm:py-20 bg-white border-y border-[#E5E7EB] relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-black text-emerald-700 mb-3 uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Instant Savings Calculator
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mb-2">
              See How Much You Save with LegalRecovery
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Traditional lawyers charge ₹10,000+ upfront and 15–20% cuts on recovery.
            </p>
          </div>

          <div className="bg-[#F8F9FB] rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-lg">
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <label className="text-xs font-black text-[#111827] uppercase tracking-wide">
                  Your Stuck Amount (₹):
                </label>
                <span className="text-2xl sm:text-3xl font-black text-[#DC2626]">
                  ₹{claimAmount.toLocaleString("en-IN")}
                </span>
              </div>

              <input
                type="range"
                min="10000"
                max="1500000"
                step="5000"
                value={claimAmount}
                onChange={(e) => setClaimAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626] mb-3"
              />

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500 mr-1">Quick Select:</span>
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setClaimAmount(amt)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      claimAmount === amt
                        ? "bg-[#111827] text-white"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    ₹{(amt / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-5 border border-slate-200 text-left">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <p className="text-xs font-black text-slate-700">Traditional Law Firm</p>
                  <span className="text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">High Cost</span>
                </div>

                <div className="space-y-2 text-xs text-slate-600 font-medium">
                  <div className="flex justify-between">
                    <span>Drafting Fee (per notice):</span>
                    <span className="font-bold text-slate-900">₹{calculatedSavings.traditionalDraftingFee.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contingency Cut (15%):</span>
                    <span className="font-bold text-slate-900">₹{calculatedSavings.traditionalCommission.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between text-xs sm:text-sm font-black text-slate-900">
                    <span>Total Cost to You:</span>
                    <span className="text-red-600">₹{calculatedSavings.traditionalTotalCost.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-700 text-left shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700">
                  <p className="text-xs font-black text-white">LegalRecovery.in</p>
                  <span className="text-[10px] font-black text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    0% Cut
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-medium">
                  <div className="flex justify-between">
                    <span>3 Notices + 1 Police Draft:</span>
                    <span className="font-bold text-emerald-400">₹999 Flat</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Commission:</span>
                    <span className="font-bold text-emerald-400">₹0 (0%)</span>
                  </div>
                  <div className="pt-2 border-t border-slate-700 flex justify-between text-xs sm:text-sm font-black text-white">
                    <span>Total Cost to You:</span>
                    <span className="text-emerald-400">₹999 Only</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Your Total Savings</div>
                <div className="text-lg sm:text-xl font-black text-emerald-600">
                  ₹{calculatedSavings.totalSavings.toLocaleString("en-IN")}{" "}
                  <span className="text-xs font-semibold text-slate-600">
                    ({calculatedSavings.retainedPercentage}% kept)
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                Recover ₹{claimAmount.toLocaleString("en-IN")} Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON MATRIX ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mb-2">
            Why LegalRecovery vs Traditional Lawyers
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] font-medium">
            Standardized flat ₹999 legal notice process with 7-day interval escalation.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-md overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-4 sm:p-5 font-black">Feature / Deliverable</th>
                  <th className="p-4 sm:p-5 font-semibold text-slate-300">Traditional Advocate</th>
                  <th className="p-4 sm:p-5 font-semibold text-slate-300">DIY Notice</th>
                  <th className="p-4 sm:p-5 font-black text-red-400 bg-slate-800/80">LegalRecovery.in</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      row.highlight ? "bg-red-50/20 font-bold" : ""
                    }`}
                  >
                    <td className="p-4 font-extrabold text-[#111827]">
                      {row.feature}
                    </td>
                    <td className="p-4 text-slate-600 font-medium">
                      {row.traditional}
                    </td>
                    <td className="p-4 text-slate-500 font-medium">
                      {row.diy}
                    </td>
                    <td className="p-4 font-black text-[#DC2626] bg-red-50/40">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
                        <span>{row.legalRecovery}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CLIENT TESTIMONIALS ── */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2">
              Real People. Real Recoveries.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              See how everyday professionals and businesses recovered their funds through our weekly legal notices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-black">
                      {t.recovered}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">in {t.time}</span>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed italic mb-4">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="font-bold text-xs text-white">{t.name}</div>
                  <div className="text-[10px] text-slate-400">{t.role} • {t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <FAQSection
        faqs={emailFaqs}
        heading="Frequently Asked Questions"
        subheading="Get clear answers about our 7-day interval notice escalation and legal recovery process."
      />

      {/* ── FINAL HIGH-IMPACT CONVERSION CTA ── */}
      <section className="py-16 sm:py-20 bg-linear-to-b from-[#111827] to-slate-950 text-white relative z-10 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-xs font-bold text-red-300 mb-4 border border-red-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Act Before Limitations Expire
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Ready to Get Your Money Back?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            Every day of delay weakens your claim. Initiate your advocate legal notice escalation now for just <strong className="text-white font-extrabold">₹999 flat</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-base rounded-2xl shadow-xl shadow-red-950/40 hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
            >
              <Shield className="w-5 h-5" />
              Start Your Recovery Claim for ₹999
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToHeroForm}
              className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-base rounded-2xl transition-colors cursor-pointer"
            >
              Fill Quick Form Above
            </button>
          </div>
        </div>
      </section>

      {/* ── STICKY BOTTOM MOBILE CONVERSION BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] p-3 px-4 sm:hidden flex items-center justify-between shadow-2xl">
        <div>
          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">3 Notices + 1 Police Draft</div>
          <div className="text-sm font-black text-[#111827]">
            ₹999 <span className="text-[10px] text-slate-400 font-semibold line-through">₹2,999</span>
          </div>
        </div>

        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black text-xs rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
        >
          <Shield className="w-3.5 h-3.5" /> Start Claim
        </button>
      </div>

      {/* ── PAYMENT MODAL ── */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />

      {/* ── SCHEMA STRUCTURED DATA (JSON-LD) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Legal Notice & Money Recovery Service",
            "provider": {
              "@type": "Organization",
              "name": "LegalRecovery.in",
              "url": "https://www.legalrecovery.in"
            },
            "serviceType": "Legal Notice Drafting & 7-Day Escalation",
            "areaServed": "India",
            "offers": {
              "@type": "Offer",
              "price": "999",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock"
            },
            "description": "Professional advocate-drafted legal notices sent at 7-day intervals (3 legal notices + 1 police complaint draft) to recover unpaid dues."
          })
        }}
      />
    </div>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Clock,
  Shield,
  CheckCircle2,
  FileText,
  AlertCircle,
  Scale,
  Send,
  Building2,
  Briefcase,
  IndianRupee,
  HelpCircle,
  Calendar,
  Lock,
  ArrowRight,
  Headphones,
  CheckCircle,
  MapPin,
  FileCheck,
  Timer,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { RecoveryForm } from "@/components/RecoveryForm";

interface ContactFAQ {
  question: string;
  answer: string;
}

const contactFaqs: ContactFAQ[] = [
  {
    question: "How quickly will LegalRecovery respond to my inquiry and draft my notice?",
    answer: "Our legal review desk processes initial submissions within 2 to 4 business hours. Once all required transaction records, invoices, and debtor details are verified, an advocate drafts and finalizes your formal legal notice within 24 to 48 hours. You receive a draft preview for verification prior to postal dispatch via India Post Speed Post and simultaneous digital service over Email and WhatsApp.",
  },
  {
    question: "Is a legal notice delivered through WhatsApp and Email legally valid in Indian courts?",
    answer: "Yes, absolutely. Under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (formerly Section 65B of the Indian Evidence Act, 1872) and Orders V & IX of the Code of Civil Procedure (CPC), service of legal demand notices through certified electronic channels such as registered email and WhatsApp messages is recognized as valid legal service. Our platform generates an electronic evidentiary audit certificate recording dispatch timestamps, delivery receipts, and blue-tick / read acknowledgements that are admissible in court.",
  },
  {
    question: "What happens after the statutory 15-day notice period expires without payment?",
    answer: "If the recipient fails to clear the outstanding debt, provide a legitimate justification, or initiate a settlement within the mandated 15-day or 30-day notice window, they become liable for formal legal litigation. Depending on the nature of your dispute, our legal alliance team can seamlessly assist you in filing a Summary Suit under Order 37 of the CPC, initiating a criminal complaint under Section 138 of the Negotiable Instruments Act for cheque bounce, lodging a complaint before the Consumer Commission (DCDRC/SCDRC/NCDRC), or approaching the MSME Samadhaan Facilitation Council.",
  },
  {
    question: "Can I recover money if there was no formal signed contract or agreement?",
    answer: "Yes. Under Section 10 of the Indian Contract Act, 1872, oral contracts and mutual understandings backed by valid consideration are legally binding. Furthermore, documentary evidence including bank account transfer statements, UPI reference IDs (UTR numbers), WhatsApp chat histories, SMS conversations, email acknowledgements of debt, and work handover notes can substantiate your legitimate claim. Our legal experts structure the demand notice around this electronic and circumstantial evidence to establish a clear cause of action.",
  },
  {
    question: "How do I track the delivery status of my notice?",
    answer: "Every legal notice dispatched by Legal Recovery is assigned an India Post Speed Post / Registered AD consignment tracking barcode and an electronic transmission tracking ID. You are provided real-time tracking access through your secure client dashboard, where you can monitor postal transit, delivery confirmation at the recipient's doorstep, and read receipts across digital channels.",
  },
  {
    question: "What is the fee structure for sending a legal notice through Legal Recovery?",
    answer: "We operate on a transparent, flat-fee pricing model starting at ₹999 with zero hidden charges, commission cuts, or open-ended hourly retainers. This includes dispute merit analysis, professional drafting by an experienced advocate, revision support, dual-channel dispatch via Speed Post and digital channels, and delivery tracking. We believe accessible legal recourse should be affordable for every Indian citizen.",
  },
  {
    question: "Can I send a legal notice to an employer who has withheld my salary or FnF settlement?",
    answer: "Yes. Employers are legally obligated under the Payment of Wages Act, 1936, the Industrial Disputes Act, 1947, and prevailing state Shops and Commercial Establishments Acts to disburse earned wages and clear Full & Final (FnF) settlements within 7 to 10 days of the wage period or resignation. If your previous employer has arbitrarily withheld salary, encashment of leave, gratuity, or your relieving letter, our specialized employment advocates issue a stern demand notice holding directors and HR personally accountable.",
  },
  {
    question: "Is my personal information and case evidence kept strictly confidential?",
    answer: "Yes, completely. All documents, financial records, identity proofs, and transaction details submitted through our platform are protected under bank-grade 256-bit SSL encryption. Furthermore, communications between claimants and our legal drafting counsel are privileged under Indian law. We never sell, monetize, or disclose your sensitive legal information to third parties without your explicit consent.",
  },
];

const DISPUTE_CATEGORIES = [
  {
    title: "Unpaid Salary & FnF Dues",
    statute: "Payment of Wages Act & Shops Act",
    desc: "When former employers withhold earned wages, delay Full and Final (FnF) settlement disbursements beyond 30 days, or illegally deduct notice pay while refusing your relieving letter.",
    icon: <IndianRupee className="w-5 h-5 text-[#DC2626]" />,
    link: "/services/recovery-of-salary-and-employment-dues",
  },
  {
    title: "Cheque Bounce (Sec 138 NI Act)",
    statute: "Negotiable Instruments Act, 1881",
    desc: "Dishonour of cheques due to insufficient funds, account closure, or stopped payments. Requires mandatory statutory demand notice served within 30 days of the bank return memo.",
    icon: <FileText className="w-5 h-5 text-[#DC2626]" />,
    link: "/cheque-bounce-notice-timeline-section-138",
  },
  {
    title: "Freelancer & B2B Invoices",
    statute: "Indian Contract Act & MSMED Act",
    desc: "Clients and business partners refusing to clear invoiced milestones after project completion. Eligible MSMEs can claim compound interest at 3x the RBI bank lending rate.",
    icon: <Briefcase className="w-5 h-5 text-[#DC2626]" />,
    link: "/services/recovery-of-freelancer-and-client-payments",
  },
  {
    title: "Tenant Security Deposit Refund",
    statute: "Model Tenancy Act & State Rent Laws",
    desc: "Landlords and PG/co-living operators withholding refundable security deposits after move-out or imposing inflated, undocumented repair and painting deductions.",
    icon: <Building2 className="w-5 h-5 text-[#DC2626]" />,
    link: "/services/security-deposits-and-rental-recoveries",
  },
  {
    title: "Personal Loans Given to Friends",
    statute: "Order 37 CPC & Contract Law",
    desc: "Friendly loans or hand loans given in good faith via UPI or bank transfer without a formal agreement. Recoverable using transaction receipts, chat admissions, and demand notes.",
    icon: <Scale className="w-5 h-5 text-[#DC2626]" />,
    link: "/services/recovery-of-money-from-a-friend",
  },
  {
    title: "Consumer Refunds & E-Commerce",
    statute: "Consumer Protection Act, 2019",
    desc: "Defective goods, cancelled airline tickets, undelivered products, insurance claim rejections, and builders delaying flat handover under RERA provisions.",
    icon: <Shield className="w-5 h-5 text-[#DC2626]" />,
    link: "/services/refunds-and-consumer-complaints",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Submit Dispute & Evidence",
    desc: "Fill in the counter-party's details and dispute specifics through our secure form. Attach transaction proofs, invoices, bank statements, contracts, or WhatsApp conversations.",
    icon: <FileCheck className="w-6 h-6 text-[#DC2626]" />,
  },
  {
    step: "02",
    title: "Advocate Review & Strategy",
    desc: "Our senior legal recovery advocates examine the merits of your claim, calculate statutory interest, confirm territorial jurisdiction, and identify relevant Indian legal provisions.",
    icon: <Scale className="w-6 h-6 text-[#DC2626]" />,
  },
  {
    step: "03",
    title: "Formal Notice Drafting",
    desc: "Your legal demand notice is drafted on official advocate letterhead with statutory warnings, precise financial claims, and strict 15-day compliance timelines.",
    icon: <FileText className="w-6 h-6 text-[#DC2626]" />,
  },
  {
    step: "04",
    title: "Multi-Channel Postal & Digital Dispatch",
    desc: "Dispatched simultaneously via India Post Speed Post / Registered AD with tracking numbers, accompanied by verified delivery over registered Email and WhatsApp.",
    icon: <Send className="w-6 h-6 text-[#DC2626]" />,
  },
  {
    step: "05",
    title: "Live Tracking & Resolution",
    desc: "Track delivery confirmations live on your client dashboard. If the counter-party fails to resolve within 15 days, our legal team guides you on next-step court or tribunal recourse.",
    icon: <Award className="w-6 h-6 text-[#DC2626]" />,
  },
];

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.legalrecovery.in/contact#webpage",
        url: "https://www.legalrecovery.in/contact",
        name: "Contact Legal Recovery | Recover Your Money Legally",
        description:
          "Contact Legal Recovery India for advocate-vetted legal notice drafting, money recovery consultation, and pre-litigation dispute resolution.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.legalrecovery.in",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Contact Us",
              item: "https://www.legalrecovery.in/contact",
            },
          ],
        },
      },
      {
        "@type": "LegalService",
        "@id": "https://www.legalrecovery.in/#organization",
        name: "Legal Recovery India",
        alternateName: "LegalRecovery",
        url: "https://www.legalrecovery.in",
        email: "notify@legalrecovery.in",
        priceRange: "₹999 - ₹4,999",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/contact#faq",
        mainEntity: contactFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div id="top" className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden relative scroll-smooth">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-28 sm:pt-32 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden relative">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-35" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-20" />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
            <li>
              <Link href="/" className="hover:text-[#DC2626] transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <li className="text-[#111827] font-bold" aria-current="page">
              Contact & Support Desk
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <div className="text-left w-full mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="text-[11px] font-black text-[#DC2626] uppercase tracking-[0.14em]">
              Legal Recovery Desk • 100% Advocate Vetted
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-[#111827] leading-[1.12] mb-4 select-text">
            Contact Legal Recovery & <br />
            <span className="text-[#DC2626]">Money Dispute Resolution Desk</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-medium leading-relaxed max-w-3xl select-text">
            Need urgent legal assistance recovering unpaid wages, bounced cheques, delayed freelance dues, or withheld security deposits? Submit your case below or reach our support advocates. We draft, verify, and dispatch formal advocate legal notices across India within 24 to 48 hours.
          </p>

          {/* Quick Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-[#1F2937]">24–48h Dispatch SLA</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Shield className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-[#1F2937]">AMA Legal Alliance</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Send className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-[#1F2937]">Speed Post + WhatsApp</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#DC2626] shrink-0" />
              <span className="text-xs font-bold text-[#1F2937]">Free Case Analysis</span>
            </div>
          </div>
        </div>

        {/* Split Columns Grid: Left details + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative mb-16 md:mb-24">
          
          {/* Left Column: Office details & Support hubs */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            
            {/* Card 1: Contact Operations */}
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col gap-5">
              <div className="border-b border-[#E5E7EB]/70 pb-3 flex items-center justify-between">
                <h2 className="text-lg font-black text-[#111827] flex items-center gap-2.5">
                  <Headphones className="w-5 h-5 text-[#DC2626]" />
                  Support Operations & Help Desk
                </h2>
                <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md border border-emerald-200">
                  Online
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Working Hours</span>
                  <span className="text-xs text-[#4B5563] font-medium mt-1 leading-normal">
                    Monday to Saturday: 9:00 AM – 7:00 PM IST
                  </span>
                  <span className="text-[11px] text-[#6B7280] mt-0.5">
                    Case intake open 24/7 online
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Official Email Desk</span>
                  <a
                    href="mailto:notify@legalrecovery.in"
                    className="text-xs text-[#DC2626] font-bold mt-1 hover:underline break-all"
                  >
                    notify@legalrecovery.in
                  </a>
                  <span className="text-[11px] text-[#6B7280] mt-0.5">
                    For case documents, invoices &amp; escalations
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                  <Timer className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Drafting Turnaround SLA</span>
                  <span className="text-xs text-[#4B5563] font-medium mt-1 leading-normal">
                    24 to 48 Hours for Notice Generation
                  </span>
                  <span className="text-[11px] text-[#6B7280] mt-0.5">
                    Fast-track priority for Section 138 cheque bounce matters
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left select-text">
                  <span className="text-sm font-black text-[#111827]">Pan-India Legal Jurisdiction</span>
                  <span className="text-xs text-[#4B5563] font-medium mt-1 leading-normal">
                    Covering all 28 States &amp; 8 Union Territories
                  </span>
                  <span className="text-[11px] text-[#6B7280] mt-0.5">
                    Service valid across all District &amp; High Courts in India
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Legal Governance & Alliance */}
            <div className="bg-[#152331] text-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#DC2626]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#DC2626]" />
                  <span className="text-sm font-bold tracking-wide uppercase">Legal Strategic Alliance</span>
                </div>
                <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                  Bar Enrolled
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed relative z-10">
                Legal Recovery is backed and legally powered by <b>AMA Legal Solutions</b>, a premier full-service law firm with extensive experience in commercial debt recovery, employment arbitrations, consumer litigation, and Section 138 NI Act proceedings.
              </p>

              <div className="relative z-10 grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Advocate Letterhead</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sec 63 BSA Evidentiary</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Speed Post Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pre-Litigation Recourse</span>
                </div>
              </div>
            </div>

            {/* Card 3: Urgency Notice Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-3.5 items-start">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <p className="font-bold mb-1">Time-Sensitive Limitation Alert:</p>
                <p>
                  Cheque bounce notices must be formally dispatched within <b>30 days</b> of the bank return memo under Section 138 of the Negotiable Instruments Act. For civil recovery, statutory limitation expires after <b>3 years</b>. Submit your dispute promptly to protect your legal claim.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.02)] relative order-1 lg:order-2">
            
            {/* Header above form */}
            <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#111827]">
                  Submit Your Dispute Details
                </h2>
                <p className="text-xs sm:text-sm text-[#6B7280] font-medium mt-1">
                  Start with a 100% free initial merit assessment by our legal counsel.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 font-bold shrink-0">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit SSL Encrypted</span>
              </div>
            </div>

            {/* Ambient Background glow inside form */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />

            <RecoveryForm />

            <p className="mt-5 text-[11px] text-center text-[#6B7280] leading-relaxed">
              Your details are protected under strict advocate-client legal privilege. We do not share case records with third parties.
            </p>

          </div>

        </div>

        {/* ================= PROCESS SECTION (5 STEPS) ================= */}
        <section className="mb-16 md:mb-24 bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-3">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.14em]">
                Transparent Workflow
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
              How Our Online Legal Notice &amp; Recovery Desk Works
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              From online case intake to registered multi-channel delivery, our streamlined legaltech process ensures maximum legal impact with zero court visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-[#DC2626] tracking-widest">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-[#111827] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DISPUTES HANDLED GRID ================= */}
        <section className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-3">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.14em]">
                Dispute Categories
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
              Types of Unpaid Dues &amp; Claims We Help You Recover
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Our advocates draft enforceable legal notices across civil, criminal, commercial, employment, and consumer matters under prevailing Indian statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISPUTE_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:border-[#DC2626]/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-extrabold text-[#6B7280] uppercase tracking-wider bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                      {cat.statute}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#111827] mb-2 group-hover:text-[#DC2626] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>
                <Link
                  href={cat.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC2626] hover:text-[#B91C1C] transition-colors pt-3 border-t border-gray-100"
                >
                  <span>Learn more about this recovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DOCUMENT CHECKLIST & STATUTORY DEADLINES ================= */}
        <section className="mb-16 md:mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Document Checklist */}
          <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full border border-red-200 mb-4">
                <FileCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-wider">
                  Checklist
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#111827] mb-3">
                Documents to Prepare Before Contacting Our Legal Team
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-medium">
                To accelerate your case evaluation and drafting turnaround, please gather whichever supporting documents are applicable to your dispute:
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                      Opposing Party Particulars
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-normal mt-0.5">
                      Full legal name, corporate identity (CIN/LLPIN if company), active phone number, registered email ID, and complete physical postal address for Speed Post dispatch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                      Proof of Debt &amp; Obligation
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-normal mt-0.5">
                      Signed agreements, offer letters, employment contracts, rental/lease deeds, purchase orders, invoices, statement of work (SOW), or promissory notes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                      Financial Transaction Proofs
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-normal mt-0.5">
                      Bank account statements highlighting debits, UPI transaction IDs (UTR numbers), cheque copies, bank return memos (for bounced cheques), or payment gateway receipts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827]">
                      Written Demands &amp; Chat Records
                    </h3>
                    <p className="text-xs text-[#6B7280] leading-normal mt-0.5">
                      WhatsApp chat exports, email threads requesting payment, debtor admissions, call recordings, or formal reminders showing demand before notice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-[#6B7280]">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Even without a signed formal contract, circumstantial transaction proof is sufficient under Indian law.</span>
            </div>
          </div>

          {/* Right: Statutory Limitation Deadlines */}
          <div className="bg-[#152331] text-white border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/15 rounded-full border border-red-500/30 mb-4">
                <Timer className="w-3.5 h-3.5 text-[#DC2626]" />
                <span className="text-[10px] font-black text-red-400 uppercase tracking-wider">
                  Statutory Limitation
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
                Statutory Limitation Deadlines in India: Why Timely Action Matters
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Under Indian jurisprudence, delay in issuing formal demand notices can extinguish your right to recover money in court. Keep these critical legal deadlines in mind:
              </p>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      Section 138 Cheque Bounce
                    </h3>
                    <span className="text-[10px] font-black text-red-400 bg-red-950/60 border border-red-800 px-2 py-0.5 rounded">
                      30 Days Mandatory
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Under the Negotiable Instruments Act, 1881, the legal notice must be issued within 30 days of receiving the cheque return memo from your bank. Missing this window forfeits criminal action.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      Civil Money Recovery (Summary Suit)
                    </h3>
                    <span className="text-[10px] font-black text-amber-400 bg-amber-950/60 border border-amber-800 px-2 py-0.5 rounded">
                      3 Years Limitation
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Under the Limitation Act, 1963, a civil suit for debt recovery or salary default must be initiated within 3 years from the date the cause of action first arose or acknowledgment was made.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      Consumer Disputes (DCDRC)
                    </h3>
                    <span className="text-[10px] font-black text-blue-400 bg-blue-950/60 border border-blue-800 px-2 py-0.5 rounded">
                      2 Years Window
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Under the Consumer Protection Act, 2019, complaints regarding unfair trade practice, defective products, or deficient services must be lodged within 2 years of the disputed event.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 text-xs text-slate-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>Do not wait until the last minute. Initiating your legal notice promptly establishes prima facie legal compliance.</span>
            </div>
          </div>

        </section>

        {/* ================= WHY CHOOSE LEGAL RECOVERY ================= */}
        <section className="mb-16 md:mb-24 bg-gradient-to-b from-white to-slate-50 border border-[#E5E7EB] rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-3">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.14em]">
                Why Legal Recovery
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
              Why 12,000+ Claimants Trust Legal Recovery Over Traditional Channels
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              We replaced the exhausting, opaque, and expensive traditional legal retainers with a fast, technology-driven dispute resolution platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-[#111827] mb-1">
                  24–48h Fast Turnaround
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Traditional law offices take 2 to 4 weeks just to draft a demand notice. We complete drafting, advocate vetting, and dispatch within 24 to 48 hours.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-[#111827] mb-1">
                  Fixed Transparent Pricing
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Fixed fees starting at ₹999 with zero commission deductions, zero surprise costs, and no open-ended hourly legal retainers.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-[#111827] mb-1">
                  AMA Legal Alliance
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Backed by seasoned Bar Council advocates ensuring strict statutory compliance, authoritative legal phrasing, and seamless courtroom escalation if needed.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-[#111827] mb-1">
                  91% Pre-Court Resolution
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Over 91% of recipient defaulters settle outstanding dues within the statutory 15-day notice period to avoid formal criminal and civil court litigation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION (CRAWLABLE DETAILS ACCORDION) ================= */}
        <section className="mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FEF2F2] rounded-full border border-[#FECACA] mb-3">
              <span className="text-[10px] font-black text-[#DC2626] uppercase tracking-[0.14em]">
                Questions &amp; Answers
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111827] tracking-tight">
              Frequently Asked Questions: Contact &amp; Support
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Find instant answers to common questions about submitting your case, notice validity, costs, and tracking your recovery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {contactFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm open:border-[#DC2626]/30 open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 sm:p-6 font-bold text-[#111827] text-sm sm:text-base list-none select-none hover:text-[#DC2626] transition-colors">
                  <span className="flex items-start gap-3 text-left">
                    <span className="text-[#DC2626] font-black text-sm mt-0.5 shrink-0">
                      Q.
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-[#DC2626] group-open:rotate-45 transition-transform text-2xl font-light leading-none shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-6 sm:px-6 pt-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-gray-100 pl-11">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA STRIP ================= */}
        <section className="bg-gradient-to-r from-[#152331] to-[#1E293B] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white">
              Ready to Recover Your Stuck Money Legally?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Do not let defaulters walk away with your hard-earned funds. Initiate an advocate-drafted legal notice in minutes and reclaim your money with full legal backing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#top"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#DC2626] text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_4px_20px_rgba(220,38,38,0.3)] hover:bg-[#B91C1C] transition-all"
              >
                Submit Your Case Now <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:notify@legalrecovery.in"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                Email Support Desk
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

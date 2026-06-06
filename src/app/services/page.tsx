"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQSection, { FAQItem } from "@/components/FAQSection";
import {
  Wallet,
  Timer,
  Shield,
  FolderClosed,
  FileText,
  Check,
  TrendingDown,
  Users,
  Clock,
  CheckCircle,
  HelpCircle,
  Briefcase,
  IndianRupee,
  AlertCircle,
  Home as HomeIcon,
  Key,
  Plane,
  Building2,
  AlertTriangle,
  Lightbulb,
  Handshake,
  ArrowRight,
  Scale,
  FileCheck
} from "lucide-react";

export default function ServicesPage() {

  const servicesFaqs: FAQItem[] = [
    {
      question: "When should I send a legal notice for money recovery?",
      answer: "You should send a legal notice as soon as a payment becomes overdue and informal communication fails. Informing the debtor formally of the pending dues helps avoid prolonged litigation."
    },
    {
      question: "Is it mandatory to send a legal notice before filing a lawsuit?",
      answer: "While not always mandatory, it is highly recommended to send a legal notice to establish your case and show the court you attempted an amicable resolution. In cheque bounce cases, it is a strict statutory requirement."
    },
    {
      question: "Can I send a legal notice for unpaid salary and employment dues?",
      answer: "Yes, you can send a legal notice citing the Payment of Wages Act to recover unpaid salaries, bonuses, or full and final settlements. Most employers settle upon receiving a formal advocate notice."
    },
    {
      question: "What happens after I send a legal notice and the recipient ignores it?",
      answer: "If you send a legal notice and the recipient ignores it, you can escalate the matter by filing a summary suit, a police complaint for criminal breach of trust, or taking other appropriate legal actions."
    },
    {
      question: "How much does it cost to send a legal notice through this platform?",
      answer: "You can send a legal notice starting at a flat fee of ₹999. This includes professional drafting, advocate review, printing, speed post dispatch, and digital tracking. There are no hidden charges."
    },
    {
      question: "Can a business send a legal notice to another business for unpaid invoices?",
      answer: "Yes, any business can send a legal notice to recover unpaid B2B invoices and contractual dues under the Indian Contract Act and MSME guidelines."
    },
    {
      question: "Do I need to meet a lawyer in person to send a legal notice?",
      answer: "No, you do not need to meet anyone in person. You can easily draft and send a legal notice online using our secure platform, saving time and money."
    },
    {
      question: "What details are required to send a legal notice?",
      answer: "You need the recipient's name and address, details of the dispute, the total amount due, and supporting evidence like invoices, chat logs, or bank records to send a legal notice."
    }
  ];

  const services = useMemo(() => [
    {
      id: "salary-dues",
      title: "Salary &\nEmployment Dues",
      slug: "/services/recovery-of-salary-and-employment-dues",
      pointers: [
        "Unpaid F&F dues",
        "Delayed salaries",
        "Unpaid bonuses",
        "Wrongful termination"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <Briefcase className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <IndianRupee className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "refunds-grievances",
      title: "Refunds &\nConsumer Complaints",
      slug: "/services/refunds-and-consumer-complaints",
      pointers: [
        "E-commerce refunds",
        "Defective products",
        "Billing overcharges",
        "Warranty breaches"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertCircle className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "rental-recoveries",
      title: "Security Deposits &\nRental Recoveries",
      slug: "/services/security-deposits-and-rental-recoveries",
      pointers: [
        "Unreturned deposits",
        "Commercial leases",
        "Deduction disputes",
        "Delayed rent dues"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <HomeIcon className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Key className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "freelancer-payments",
      title: "Freelancer &\nClient Payments",
      slug: "/services/recovery-of-freelancer-and-client-payments",
      pointers: [
        "Milestone payouts",
        "Contract breaches",
        "Unapproved work",
        "Retainer recovery"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <FileText className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "personal-money",
      title: "Friend / Personal\nMoney Recovery",
      slug: "/services/recovery-of-money-from-a-friend",
      pointers: [
        "Personal loans",
        "Group expenses",
        "Cash advances",
        "Promissory notes"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <Users className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <IndianRupee className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "airline-travel",
      title: "Airline &\nTravel Recoveries",
      slug: "/services/airline-and-travel-recoveries",
      pointers: [
        "Flight refunds",
        "Train booking dues",
        "Hotel overcharges",
        "Baggage loss recovery"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <Plane className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2] -rotate-45" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Clock className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "vendor-invoice",
      title: "Vendor &\nInvoice Recovery",
      slug: "/services/vendor-and-invoice-recoveries",
      pointers: [
        "Supplier invoices",
        "Raw material costs",
        "Supply chain credit",
        "Service provider dues"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <IndianRupee className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Timer className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "property-disputes",
      title: "Property &\nBuilder Disputes",
      slug: "/services/property-and-builder-disputes",
      pointers: [
        "Possession delays",
        "Booking token refund",
        "Maintenance dues",
        "Amenity breaches"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <Building2 className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <AlertTriangle className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    },
    {
      id: "other-legal",
      title: "Other Legal\nServices",
      slug: "/contact",
      pointers: [
        "General legal queries",
        "Document drafting",
        "Corporate disputes",
        "Custom notice review"
      ],
      icon: (
        <div className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
          <HelpCircle className="w-7 h-7 sm:w-10 sm:h-10 text-[#111827] stroke-[2.2]" />
          <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-white rounded-full p-0.5 shadow-sm border border-[#E5E7EB] flex items-center justify-center">
            <Check className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-[#DC2626] stroke-[2.5]" />
          </div>
        </div>
      )
    }
  ], []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased overflow-x-hidden relative">

      {/* ================= SERVICES HERO ================= */}
      <main className="pt-32 pb-12 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto overflow-hidden relative">
        
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full opacity-40 gpu-accelerated" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full opacity-25 gpu-accelerated" />

        {/* Hero Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full max-w-8xl mx-auto mb-8 md:mb-12">
          {/* Left Text Column */}
          <div className="flex flex-col items-start text-left max-w-2xl lg:w-1/2">
            <span className="text-[13px] sm:text-[14px] font-bold text-[#DC2626] uppercase tracking-[0.03em] mb-4 select-text">
              Professional Services to Send a Legal Notice
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Draft and <span className="text-[#DC2626]">Send a Legal Notice</span> Online
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-8 select-text">
              If you have outstanding salary dues, unreturned security deposits, unpaid freelancer bills, or consumer disputes, the most effective step is to send a legal notice. Our digital platform makes it easy to send a legal notice with professional advocate verification and real-time tracking.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Hidden Stress. Professional Legal Notice Dispatch.
              </span>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-end items-center w-full -mr-4 sm:-mr-6 md:-mr-16 relative h-[300px] sm:h-[380px] lg:h-[485px]">
            <Image
              src="/hatoda1.png"
              alt="Send a Legal Notice Online"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain select-none pointer-events-none mix-blend-multiply"
            />
          </div>
        </div>

        {/* ================= DIRECTORY GRID (4 columns responsive) ================= */}
        <div className="mt-6 md:mt-8 w-full max-w-8xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
            {services.map((service) => {
              const CardContent = (
                <div
                  className="bg-white border border-[#E5E7EB] rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.03)] hover:-translate-y-1 flex flex-col items-start relative select-none h-full w-full"
                >
                  {/* Icon in top left */}
                  <div className="mb-2 sm:mb-4 text-left">
                    {service.icon}
                  </div>

                  {/* Heading below the icon */}
                  <h2 className="text-[12px] sm:text-base md:text-[17px] font-black text-[#111827] leading-tight whitespace-pre-line mb-2 sm:mb-4 text-left select-text">
                    {service.title}
                  </h2>

                  {/* 4 pointers below the heading */}
                  <ul className="w-full text-left flex flex-col gap-1.5 sm:gap-2 pt-2 sm:pt-3 border-t border-[#E5E7EB]/60 mt-auto">
                    {service.pointers.map((pointer, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1 sm:gap-1.5 text-[9px] sm:text-xs text-[#4B5563] font-semibold leading-tight select-text">
                        <span className="text-[#DC2626] font-black shrink-0 mt-[0.5px] sm:mt-[1px]">.</span>
                        <span>{pointer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );

              if (service.slug) {
                return (
                  <Link key={service.id} href={service.slug} className="block h-full">
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div key={service.id} id={service.id} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= COMPREHENSIVE GUIDE TO LEGAL RECOVERY ================= */}
        <section className="mt-16 md:mt-28 max-w-8xl mx-auto px-4 md:px-0">
          <div className="bg-white rounded-[32px] border border-[#E5E7EB] p-6 sm:p-10 md:p-14 shadow-[0_12px_45px_rgba(0,0,0,0.02)]">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#DC2626] bg-red-50 px-3.5 py-1.5 rounded-full">
                Core Information
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-black text-[#111827] tracking-tight mt-4 leading-tight">
                Why You Should Send a Legal Notice for Money Recovery
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] font-medium leading-relaxed mt-4">
                Under Indian law, deciding to send a legal notice is the most systematic way to resolve financial disputes before going to court. When you send a legal notice, you formally notify the other party of their default and establish a legal record.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-6">
              <div className="flex flex-col gap-4 text-left">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#DC2626]" />
                  What happens when you send a legal notice?
                </h3>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#4B5563] leading-relaxed font-medium">
                  When you send a legal notice through an advocate, it establishes that you are taking the dispute seriously and are prepared to pursue legal remedies. It outlines the grievances, states the exact outstanding amount, and provides a strict timeline, typically 15 days, for settlement.
                </p>
                <p className="text-[13.5px] sm:text-[14.5px] text-[#4B5563] leading-relaxed font-medium">
                  Most disputes are resolved successfully when you choose to send a legal notice, because it prompts the debtor to negotiate rather than risk a public and costly court proceeding. It is a critical initial step to safeguard your financial rights.
                </p>
              </div>

              <div className="flex flex-col gap-4 text-left">
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#DC2626]" />
                  Key benefits when you send a legal notice with us
                </h3>
                <ul className="flex flex-col gap-3.5 mt-2">
                  <li className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-[#4B5563] font-medium">
                    <Check className="w-4 h-4 text-[#DC2626] stroke-[3.5] mt-1 shrink-0" />
                    <span><b>Professional Drafting:</b> Advocates draft your notice to ensure all relevant acts and penal codes are referenced.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-[#4B5563] font-medium">
                    <Check className="w-4 h-4 text-[#DC2626] stroke-[3.5] mt-1 shrink-0" />
                    <span><b>Digital Delivery Tracking:</b> You will receive updates as soon as we send a legal notice and it is delivered.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-[#4B5563] font-medium">
                    <Check className="w-4 h-4 text-[#DC2626] stroke-[3.5] mt-1 shrink-0" />
                    <span><b>Escalation Support:</b> If they ignore it, we guide you on subsequent steps like police complaints or filing summary suits.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] text-[#4B5563] font-medium">
                    <Check className="w-4 h-4 text-[#DC2626] stroke-[3.5] mt-1 shrink-0" />
                    <span><b>Transparent Pricing:</b> You can send a legal notice for a single flat fee starting at ₹999 with zero hidden commissions.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= THE 4-STAGE PROCESS ================= */}
        <section className="mt-16 md:mt-28 max-w-8xl mx-auto px-4 md:px-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-none mb-4">
              How We Help You Send a Legal Notice Online
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] font-medium leading-none">
              A systematic digital process designed to send a legal notice quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.01)] flex flex-col text-left">
              <span className="text-3xl font-black text-[#DC2626] mb-4">01</span>
              <h3 className="text-[16px] font-bold text-[#111827] mb-2">Provide Case Details</h3>
              <p className="text-[12.5px] sm:text-[13.5px] text-[#4B5563] leading-relaxed font-semibold">
                Submit transaction history, contracts, or unpaid bills. Our platform reviews the facts before you send a legal notice to ensure a strong position.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.01)] flex flex-col text-left">
              <span className="text-3xl font-black text-[#DC2626] mb-4">02</span>
              <h3 className="text-[16px] font-bold text-[#111827] mb-2">Advocate Review</h3>
              <p className="text-[12.5px] sm:text-[13.5px] text-[#4B5563] leading-relaxed font-semibold">
                Qualified advocates verify the details, choose the appropriate legal provisions, and draft a customized document tailored to your dispute.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.01)] flex flex-col text-left">
              <span className="text-3xl font-black text-[#DC2626] mb-4">03</span>
              <h3 className="text-[16px] font-bold text-[#111827] mb-2">Registered Dispatch</h3>
              <p className="text-[12.5px] sm:text-[13.5px] text-[#4B5563] leading-relaxed font-semibold">
                We print the document and send a legal notice via Registered Post AD or Speed Post, providing you with instant digital tracking information.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-[0_6px_25px_rgba(0,0,0,0.01)] flex flex-col text-left">
              <span className="text-3xl font-black text-[#DC2626] mb-4">04</span>
              <h3 className="text-[16px] font-bold text-[#111827] mb-2">Track & Settle</h3>
              <p className="text-[12.5px] sm:text-[13.5px] text-[#4B5563] leading-relaxed font-semibold">
                Monitor the recipient's response status. If they do not settle, you can send subsequent follow-up notices or choose to file a complaint.
              </p>
            </div>
          </div>
        </section>

        {/* ================= STATUTORY LEGAL PROVISIONS FOR RECOVERY ================= */}
        <section className="mt-16 md:mt-28 max-w-8xl mx-auto px-4 md:px-0">
          <div className="bg-[#FFF9F9] rounded-[32px] border border-[#FEE2E2]/60 p-6 sm:p-10 md:p-14 shadow-[0_8px_35px_rgba(220,38,38,0.01)]">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-tight mb-4">
                Statutory Framework to Send a Legal Notice
              </h2>
              <p className="text-sm sm:text-base text-[#4B5563] font-medium max-w-3xl mx-auto">
                We cite appropriate provisions under Indian statutes when we send a legal notice on your behalf, showing the debtor that you have robust legal grounds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl text-left">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-[15px] font-extrabold text-[#111827] mb-2">CPC Order 37</h4>
                <p className="text-xs text-[#4B5563] font-medium leading-relaxed">
                  Before filing a summary suit, you can send a legal notice to give the debtor a final chance to settle outstanding debts and avoid litigation.
                </p>
              </div>

              <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl text-left">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h4 className="text-[15px] font-extrabold text-[#111827] mb-2">Section 138, NI Act</h4>
                <p className="text-xs text-[#4B5563] font-medium leading-relaxed">
                  It is a mandatory statutory requirement to send a legal notice within 30 days of a cheque bounce to initiate criminal proceedings against the drawer.
                </p>
              </div>

              <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl text-left">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-[15px] font-extrabold text-[#111827] mb-2">Payment of Wages Act</h4>
                <p className="text-xs text-[#4B5563] font-medium leading-relaxed">
                  You can send a legal notice to defaulting employers who unlawfully withhold full and final dues, salaries, or bonuses.
                </p>
              </div>

              <div className="bg-white border border-[#E5E7EB] p-5 rounded-2xl text-left">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#DC2626] flex items-center justify-center mb-4 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="text-[15px] font-extrabold text-[#111827] mb-2">Contract Act, Sec 73</h4>
                <p className="text-xs text-[#4B5563] font-medium leading-relaxed">
                  In case of contract breaches, you send a legal notice to claim damages, unpaid freelancer invoices, or outstanding vendor bills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPARISON TABLE ================= */}
        <section className="mt-16 md:mt-28 max-w-8xl mx-auto px-4 md:px-0">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-tight mb-4">
              Comparing Options to Send a Legal Notice
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] font-medium">
              Understand why sending a legal notice through our digital platform is the modern, hassle free choice.
            </p>
          </div>

          <div className="w-full overflow-x-auto bg-white rounded-3xl border border-[#E5E7EB] shadow-[0_6px_25px_rgba(0,0,0,0.015)]">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#152331] text-white">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold">Feature</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold">Traditional Lawyer</th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#DC2626]">Send a Legal Notice Online</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#111827]">Financial Cost</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#4B5563] font-medium">Expensive hourly fees and retainers</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#111827] font-bold">Flat fee starting at ₹999</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#111827]">Turnaround Time</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#4B5563] font-medium">Several weeks of consultation and drafts</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#111827] font-bold">Drafted and sent within 24 hours</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#111827]">Process Transparency</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#4B5563] font-medium">No tracking without manual follow-up calls</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#111827] font-bold">Real-time status updates via dashboard</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#111827]">Physical Visits</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#4B5563] font-medium">Multiple physical visits to chambers required</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#111827] font-bold">100% digital, zero physical visits needed</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#111827]">Advocate Authority</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#4B5563] font-medium">Varies by individual advocate location</td>
                  <td className="p-4 sm:p-5 text-xs sm:text-sm text-[#111827] font-bold">Qualified drafts backed by AMA Legal Solutions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= WHY PEOPLE CHOOSE US SECTION ================= */}
        <section className="mt-16 md:mt-28 max-w-8xl mx-auto px-0 select-none">
          <div className="bg-[#FFF9F9] rounded-[24px] border border-[#FEE2E2]/60 px-4 sm:px-6 md:px-12 py-6 sm:py-12 md:py-16 shadow-[0_8px_30px_rgba(220,38,38,0.015)]">
            <h2 className="text-xl sm:text-2xl md:text-[28px] font-black text-[#111827] text-center mb-6 sm:mb-12 tracking-tight">
              Why people choose Legal Recovery?
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12 lg:gap-8">
              
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 mb-4 sm:mb-5 flex items-center justify-center rounded-2xl bg-red-50/40 border border-[#FEE2E2]/50 transform transition-transform duration-300 hover:scale-110">
                  <Lightbulb className="w-8 h-8 text-[#DC2626] stroke-[2]" />
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-extrabold text-[#111827] mb-2 leading-none">Easy & Simple</h3>
                <p className="text-[11px] sm:text-[13px] text-[#4B5563] font-medium leading-[1.6] max-w-[210px] mx-auto">
                  No complex legal jargon. We write everything in clear and plain language.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 mb-4 sm:mb-5 flex items-center justify-center rounded-2xl bg-red-50/40 border border-[#FEE2E2]/50 transform transition-transform duration-300 hover:scale-110">
                  <Clock className="w-8 h-8 text-[#111827] stroke-[2]" />
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-extrabold text-[#111827] mb-2 leading-none">Fast Resolution</h3>
                <p className="text-[11px] sm:text-[13px] text-[#4B5563] font-medium leading-[1.6] max-w-[210px] mx-auto">
                  We launch notices immediately and provide real-time reader updates.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 mb-4 sm:mb-5 flex items-center justify-center rounded-2xl bg-red-50/40 border border-[#FEE2E2]/50 transform transition-transform duration-300 hover:scale-110">
                  <IndianRupee className="w-8 h-8 text-[#111827] stroke-[2]" />
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-extrabold text-[#111827] mb-2 leading-none">Affordable Pricing</h3>
                <p className="text-[11px] sm:text-[13px] text-[#4B5563] font-medium leading-[1.6] max-w-[210px] mx-auto">
                  Get high-quality attorney verification for a single flat fee of ₹999.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 sm:h-16 sm:w-16 mb-4 sm:mb-5 flex items-center justify-center rounded-2xl bg-red-50/40 border border-[#FEE2E2]/50 transform transition-transform duration-300 hover:scale-110">
                  <Users className="w-8 h-8 text-[#111827] stroke-[2]" />
                </div>
                <h3 className="text-[13px] sm:text-[15px] font-extrabold text-[#111827] mb-2 leading-none">Trusted by Thousands</h3>
                <p className="text-[11px] sm:text-[13px] text-[#4B5563] font-medium leading-[1.6] max-w-[210px] mx-auto">
                  12,000+ happy clients have successfully processed and recovered their money.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <FAQSection faqs={servicesFaqs} heading="Legal Recovery Services: Frequently Asked Questions" subheading="Common questions about our specialized legal recovery services." />

        {/* ================= CALL TO ACTION STRIP ================= */}
        <section className="w-full max-w-8xl mx-auto px-0 mt-16 md:mt-28 select-none">
          <div className="bg-[#152331] border border-gray-800/80 rounded-2xl md:rounded-[24px] p-6 md:py-8 md:px-12 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Subtle Ambient light behind */}
            <div className="absolute top-1/2 right-[10%] w-[300px] h-[150px] bg-red-950/20 -translate-y-1/2 -z-10 rounded-full blur-xl gpu-accelerated" />
            
            {/* Left Content */}
            <div className="flex flex-col items-start text-left select-text max-w-2xl">
              <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight tracking-tight">
                Not sure which category fits your legal recovery case?
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-400 font-semibold leading-normal mt-1 md:mt-2">
                Talk to our legal experts and get absolute clarity.
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

      </main>

    </div>
  );
}

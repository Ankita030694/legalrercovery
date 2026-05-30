"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import FAQSection, { FAQItem } from "@/components/FAQSection";
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
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {

  const servicesFaqs: FAQItem[] = [
    {
      question: "What types of recovery services does LegalRecovery offer?",
      answer: "We offer 8 specialized recovery services: salary and employment dues recovery, freelancer and client payment recovery, rental security deposit recovery, consumer complaint refunds, vendor and invoice recoveries, property and builder dispute resolution, airline and travel refund claims, and recovery of personal loans from friends or family members."
    },
    {
      question: "How do I know which service is right for my case?",
      answer: "Each service page describes the specific scenarios it covers. If you're unsure, simply submit your case details through our contact form and our legal experts will analyze your situation and recommend the most appropriate recovery service for free."
    },
    {
      question: "Are the legal notices customized for each type of case?",
      answer: "Yes, every legal notice is custom-drafted by our qualified advocates based on the specific laws and provisions applicable to your case type. For example, salary recovery notices reference the Payment of Wages Act and employment contract clauses, while rental deposit notices cite the Rent Control Act and relevant state tenancy laws."
    },
    {
      question: "Can LegalRecovery handle cases involving large amounts?",
      answer: "Absolutely. We handle recovery cases ranging from ₹5,000 to ₹50 Lakhs and above. For high-value disputes, our senior advocates provide personalized legal strategy and escalation plans to maximize the chances of successful recovery."
    },
    {
      question: "What if my case doesn't fit into any listed service category?",
      answer: "If your dispute doesn't clearly fit into one of our listed categories, don't worry. Contact our team with the details and we'll evaluate whether we can assist. We regularly handle unique and complex recovery scenarios that require customized legal approaches."
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
              Professional Money Recovery Directory
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Our Recovery <span className="text-[#DC2626]">Services</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-8 select-text">
              Legal Recovery helps you reclaim your stuck salaries, security deposits, client dues, travel ticketing refunds, and consumer overcharges systematically. We draft and send 3 legal notices and 1 formal police complaint draft week-by-week.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Stress. We handle it for you.
              </span>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-end items-center w-full -mr-4 sm:-mr-6 md:-mr-16 relative h-[300px] sm:h-[380px] lg:h-[485px]">
            <Image
              src="/hatoda1.png"
              alt="Our Recovery Services"
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
                        <span className="text-[#DC2626] font-black shrink-0 mt-[0.5px] sm:mt-[1px]">•</span>
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

        {/* ================= WHY PEOPLE CHOOSE US SECTION ================= */}
        <section className="mt-12 md:mt-24 max-w-8xl mx-auto px-0 select-none">
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
        <FAQSection faqs={servicesFaqs} heading="Legal Recovery Services — FAQs" subheading="Common questions about our specialized recovery services." />

        {/* ================= CALL TO ACTION STRIP ================= */}
        <section className="w-full max-w-8xl mx-auto px-0 mt-12 md:mt-24 select-none">
          <div className="bg-[#152331] border border-gray-800/80 rounded-2xl md:rounded-[24px] p-6 md:py-8 md:px-12 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Subtle Ambient light behind */}
            <div className="absolute top-1/2 right-[10%] w-[300px] h-[150px] bg-red-950/20 -translate-y-1/2 -z-10 rounded-full blur-xl gpu-accelerated" />
            
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

      </main>



    </div>
  );
}

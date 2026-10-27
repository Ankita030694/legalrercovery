"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface GuideItem {
  title: string;
  href: string;
  tag: string;
  desc: string;
}

const CLUSTERS: Record<string, { heading: string; items: GuideItem[] }> = {
  employment: {
    heading: "Related Salary, F&F Settlement & Employment Legal Guides",
    items: [
      {
        title: "How to Recover Full & Final (F&F) Settlement from Employer",
        href: "/how-to-recover-full-and-final-settlement-from-employer",
        tag: "F&F Settlement",
        desc: "Enforce the 48-hour wage settlement rule, Samadhan portal complaint & Advocate Legal Notice.",
      },
      {
        title: "Legal Notice for Full & Final Settlement Delay (Format & Mail)",
        href: "/legal-notice-for-full-and-final-settlement-delay",
        tag: "Legal Notice",
        desc: "Copy-paste F&F reminder mail format and serve a 15-day statutory demand notice to HR/Directors.",
      },
      {
        title: "Salary Delay Law in India (7th–10th Payment Rule)",
        href: "/recovery/delayed-wages",
        tag: "Payment of Wages",
        desc: "Claim late salary payments plus up to 10x statutory compensation under Section 15.",
      },
      {
        title: "Employer Withholding Relieving Letter & Experience Certificate",
        href: "/employer-withholding-relieving-letter-legal-action",
        tag: "Exit Clearance",
        desc: "Force release of withheld relieving letters and experience certificates within 7–15 days.",
      },
      {
        title: "Legal Notice for Salary Withheld During Notice Period",
        href: "/legal-notice-for-salary-withheld-during-notice-period",
        tag: "Notice Period",
        desc: "Recover salary held back during notice period or challenge illegal notice pay recovery.",
      },
      {
        title: "Legal Steps to Recover Unpaid Salary from an Employer in India",
        href: "/what-are-the-legal-steps-to-recover-unpaid-salary-from-an-employer-in-india",
        tag: "Step-by-Step",
        desc: "Complete escalation hierarchy: Legal Notice, Labour Commissioner, Sec 33C(2) & Order 37 CPC.",
      },
      {
        title: "Notice Period Salary & PILON Recovery",
        href: "/recovery/notice-period-salary",
        tag: "Notice Pay",
        desc: "Challenge arbitrary buyout deductions and recover unpaid notice period wages.",
      },
    ],
  },
  consumer: {
    heading: "Related Consumer Refund, E-Commerce & Vendor Recovery Guides",
    items: [
      {
        title: "Flipkart Return Rejected or Refund Delayed Complaint Guide",
        href: "/flipkart-return-refund-complaint",
        tag: "E-Commerce",
        desc: "Escalate wrong/empty box deliveries via Grievance Officer, NCH 1915, e-Jagriti & Legal Notice.",
      },
      {
        title: "Legal Notice to Retailer for Wrong or Damaged Product Delivery",
        href: "/legal-notice-to-retailer-wrong-damaged-product-delivery",
        tag: "Defective Goods",
        desc: "Enforce marketplace fallback liability and claim 100% refund + mental harassment damages.",
      },
      {
        title: "Legal Notice to Vendor for Refund of Advance Payment",
        href: "/legal-notice-to-vendor-for-refund-of-advance-payment",
        tag: "Vendor Refund",
        desc: "Recover advance money paid to defaulting suppliers, contractors, or service vendors under Sec 73.",
      },
      {
        title: "Legal Notice to Car Dealer for Delayed Delivery or Defective Vehicle",
        href: "/legal-notice-to-car-dealer-delayed-delivery-defective-vehicle",
        tag: "Auto / PDI",
        desc: "Refuse defective cars at PDI, claim 100% booking refund, or demand replacement for lemon vehicles.",
      },
      {
        title: "Legal Notice to Interior Designer or Home Contractor for Refund",
        href: "/legal-notice-to-interior-designer-contractor-refund",
        tag: "Home Renovation",
        desc: "Recover advances for incomplete interior work, delayed handovers, and substandard materials.",
      },
      {
        title: "Legal Notice to Wedding Venue or Event Planner for Booking Refund",
        href: "/legal-notice-to-event-planner-wedding-venue-refund",
        tag: "Event Refund",
        desc: "Strike down unfair 'non-refundable' banquet hall clauses under Section 2(46) Consumer Act.",
      },
      {
        title: "Legal Notice for Gym, Club or Coaching Fee Refund",
        href: "/legal-notice-to-gym-subscription-fee-refund",
        tag: "Membership Refund",
        desc: "Challenge illegal no-refund policies and recover unused membership or tuition fees.",
      },
    ],
  },
  property: {
    heading: "Related Security Deposit, Landlord, PG & Builder Refund Guides",
    items: [
      {
        title: "PG or Hostel Owner Not Returning Security Deposit Legal Notice",
        href: "/legal-notice-to-pg-owner-for-security-deposit-refund",
        tag: "PG / Hostel",
        desc: "Recover withheld PG deposits and challenge arbitrary electricity or notice-period deductions.",
      },
      {
        title: "Recover Rental Security Deposit from Landlord in India",
        href: "/recover-security-deposit-from-landlord-india",
        tag: "Tenant Rights",
        desc: "Enforce Model Tenancy Act timelines, Order 37 Summary Suits & 18% interest on withheld deposits.",
      },
      {
        title: "Challenge Unreasonable Landlord Painting & Repair Deductions",
        href: "/legal-notice-landlord-unreasonable-security-deposit-deductions",
        tag: "Deposit Deductions",
        desc: "Stop illegal 1-month painting charges and normal wear-and-tear deductions after vacating.",
      },
      {
        title: "Flat Booking Cancellation Refund Legal Notice to Builder",
        href: "/builder-booking-cancellation-refund-legal-notice",
        tag: "RERA / Builder",
        desc: "Recover forfeited token money and flat booking advances under RERA & Supreme Court rulings.",
      },
      {
        title: "Legal Notice to Cooperative Housing Society / RWA for Maintenance",
        href: "/legal-notice-to-cooperative-housing-society-maintenance-disputes",
        tag: "Society / RWA",
        desc: "Challenge illegal transfer fees, non-occupancy caps, and NOC withholding by RWAs.",
      },
      {
        title: "Should Rental Agreements Be Notarized or Registered in India?",
        href: "/should-rental-agreements-be-notarized-in-india",
        tag: "11-Month Lease",
        desc: "Understand Section 17 Registration Act validity and evidentiary power in deposit recovery.",
      },
    ],
  },
  banking: {
    heading: "Related Cheque Bounce, Banking Auto-Debit & Cyber Fraud Guides",
    items: [
      {
        title: "Legal Notice to Bank for Unauthorized ECS / NACH Debit Reversal",
        href: "/legal-notice-to-bank-unauthorized-ecs-nach-debit-reversal",
        tag: "ECS / NACH",
        desc: "Reverse unauthorized loan auto-debits, bounce charges & claim Rs 100/day RBI penalty.",
      },
      {
        title: "Cheque Bounce Notice Timeline (Sec 138 NI Act): 30 + 15 Day Rule",
        href: "/cheque-bounce-notice-timeline-section-138",
        tag: "Section 138",
        desc: "Exact statutory deadlines from bank return memo to 15-day demand notice and court filing.",
      },
      {
        title: "Multiple Cheque Bounce Cases from Same Transaction (Joint Trial)",
        href: "/multiple-cheque-bounce-cases-same-transaction",
        tag: "Multiple Cheques",
        desc: "Send a single consolidated Section 138 notice and club multiple bounced cheques under Sec 219.",
      },
      {
        title: "Recover Fraudulent UPI, Credit Card & SIM Swap Transaction Amount",
        href: "/recovery/fraud-transaction-amount",
        tag: "RBI Zero Liability",
        desc: "Enforce 10-day shadow credit reversal under the RBI Limited Liability Circular.",
      },
      {
        title: "Unauthorized Bank Charges, Penal Interest & Lien Removal",
        href: "/recovery/unauthorized-bank-deduction",
        tag: "Bank Dispute",
        desc: "Remove wrongful account freezes/liens and recover illegal bank deductions via RBI Ombudsman.",
      },
      {
        title: "Bounced Post-Dated Cheque (PDC) & Security Cheque Recovery",
        href: "/recovery/post-dated-cheque-amount",
        tag: "PDC Recovery",
        desc: "Enforce dishonoured security cheques and claim 20% interim compensation under Section 143A.",
      },
    ],
  },
  general: {
    heading: "Essential Money Recovery Laws, Timelines & Legal Notice Guides",
    items: [
      {
        title: "Time Limit to File Money Recovery Case in India (3-Year Rule)",
        href: "/time-limit-to-file-money-recovery-case-india",
        tag: "Limitation Act",
        desc: "Learn the 3-year statutory limit, how UPI/WhatsApp restarts the clock & court timelines.",
      },
      {
        title: "What Happens If a Legal Notice Is Ignored or Refused in India?",
        href: "/what-to-do-if-legal-notice-is-ignored-india",
        tag: "Ignored Notice",
        desc: "Why refusing delivery counts as valid 'Deemed Service' under Section 27 and next court steps.",
      },
      {
        title: "How to Recover Money Lent Without a Written Agreement",
        href: "/how-to-recover-money-without-written-agreement",
        tag: "No Agreement",
        desc: "Use UPI transfers, bank statements, and WhatsApp chats under Section 10 Contract Act.",
      },
      {
        title: "Can WhatsApp Chat Be Used as Evidence in a Money Recovery Case?",
        href: "/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case",
        tag: "Sec 63 BSA / 65B",
        desc: "How WhatsApp messages, voice notes, and blue ticks prove debt in Indian courts.",
      },
      {
        title: "Legal Notice to Recover Friendly Loan from Friend or Relative",
        href: "/legal-notice-to-recovery-my-loan-from-friend",
        tag: "Friendly Loan",
        desc: "Draft and serve an Advocate Legal Notice to recover personal loans within 15 days.",
      },
      {
        title: "MSME Samadhaan Portal vs Legal Notice (45-Day Rule & 3x Interest)",
        href: "/msme-delayed-payment-recovery-samadhan-vs-legal-notice",
        tag: "MSME / B2B",
        desc: "Recover unpaid B2B invoices with 3x RBI compound interest under Section 16 MSMED Act.",
      },
      {
        title: "How to Recover Money Without Going to Court in India",
        href: "/how-to-recover-money-without-going-to-court-india",
        tag: "Out-of-Court",
        desc: "Pre-litigation recovery via Advocate Legal Notice, Statutory Ombudsmen & ODR.",
      },
    ],
  },
};

function detectCluster(pathname: string): { heading: string; items: GuideItem[] } {
  const p = pathname.toLowerCase();
  if (
    p.includes("salary") ||
    p.includes("wages") ||
    p.includes("fnf") ||
    p.includes("full-and-final") ||
    p.includes("relieving") ||
    p.includes("employer") ||
    p.includes("notice-period") ||
    p.includes("gratuity") ||
    p.includes("termination") ||
    p.includes("pf-") ||
    p.includes("incentive") ||
    p.includes("bonus")
  ) {
    return CLUSTERS.employment;
  }
  if (
    p.includes("flipkart") ||
    p.includes("myntra") ||
    p.includes("blinkit") ||
    p.includes("swiggy") ||
    p.includes("zomato") ||
    p.includes("retailer") ||
    p.includes("product") ||
    p.includes("car-dealer") ||
    p.includes("interior") ||
    p.includes("event-planner") ||
    p.includes("gym") ||
    p.includes("coaching") ||
    p.includes("college") ||
    p.includes("school") ||
    p.includes("airline") ||
    p.includes("flight") ||
    p.includes("travel") ||
    p.includes("vendor-for-refund") ||
    p.includes("consumer") ||
    p.includes("insurance")
  ) {
    return CLUSTERS.consumer;
  }
  if (
    p.includes("landlord") ||
    p.includes("pg-owner") ||
    p.includes("security-deposit") ||
    p.includes("rental") ||
    p.includes("tenant") ||
    p.includes("builder") ||
    p.includes("flat-booking") ||
    p.includes("housing-society") ||
    p.includes("property")
  ) {
    return CLUSTERS.property;
  }
  if (
    p.includes("cheque") ||
    p.includes("bank") ||
    p.includes("ecs") ||
    p.includes("nach") ||
    p.includes("fraud") ||
    p.includes("cyber") ||
    p.includes("scam") ||
    p.includes("upi") ||
    p.includes("ni-act")
  ) {
    return CLUSTERS.banking;
  }
  return CLUSTERS.general;
}

export default function RelatedRecoveryGuides() {
  const pathname = usePathname();

  if (
    !pathname ||
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-conditions" ||
    pathname.startsWith("/user") ||
    pathname.startsWith("/authority") ||
    pathname.startsWith("/notice-dispatch") ||
    pathname.startsWith("/payment") ||
    pathname.startsWith("/resume")
  ) {
    return null;
  }

  const cluster = detectCluster(pathname);
  const filtered = cluster.items.filter((item) => item.href !== pathname).slice(0, 6);

  return (
    <section
      aria-label="Related Legal Recovery Guides"
      className="bg-[#F8F9FB] border-t border-slate-200/80 py-12 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#DC2626] block mb-1">
              Contextual Legal Library
            </span>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              {cluster.heading}
            </h2>
          </div>
          <Link
            href="/send-a-legal-notice"
            className="text-xs font-extrabold text-[#DC2626] hover:underline shrink-0"
          >
            View All Legal Notice Categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white border border-slate-200/90 hover:border-[#DC2626]/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
            >
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-[#DC2626] bg-red-50 px-2.5 py-0.5 rounded-full mb-2.5">
                  {item.tag}
                </span>
                <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626] transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <span className="text-[11px] font-extrabold text-slate-900 group-hover:text-[#DC2626] mt-4 inline-flex items-center gap-1">
                Read Legal Guide <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

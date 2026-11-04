"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ProblemTab {
  id: string;
  tabLabel: string;
  title: string;
  cause: string;
  legalBasis: string;
  steps: {
    step: string;
    description: string;
  }[];
  statutoryRule: string;
}

const PROBLEMS: ProblemTab[] = [
  {
    id: "upwork-fixed-price-escrow",
    tabLabel: "Upwork Escrow Dispute",
    title: "Fixed-Price Milestone Funded in Escrow, Client Refuses to Release or Requests Refund",
    cause:
      "You completed the deliverables for an active Fixed-Price milestone, but the client either goes silent, repeatedly clicks 'Request Changes' with out-of-scope demands to reset the 14-day auto-release timer, or files an escrow refund request claiming 'poor quality'. Crucially, Upwork's internal dispute specialist cannot legally judge code or creative quality and can only propose a non-binding settlement.",
    legalBasis:
      "Under Upwork Fixed-Price Escrow Instructions, if you click 'Submit Work for Payment' and the client takes no action within 14 calendar days, escrow automatically releases 100% to you. If the client rejects the release and Upwork Mediation fails, Either party can trigger binding AAA Arbitration by paying their share of the fee (typically ~$350 each; if the client refuses to pay their share within the deadline, 100% of the escrow funds are automatically released to you). Outside escrow, Section 19 of the Copyright Act, 1957 ensures the client acquires zero legal ownership over unpaid work.",
    steps: [
      {
        step: "Always Use 'Submit Work for Payment' Button",
        description:
          "Never deliver final files only in chat. Upload the deliverable through the formal Milestone 'Submit Work for Payment' button so the 14-day automatic release clock starts ticking.",
      },
      {
        step: "Reject Unjustified Escrow Refund Within 7 Days",
        description:
          "If the client requests an escrow refund, formally reject it within 7 calendar days with a bulleted scope-vs-delivery comparison matrix to enter Upwork Escrow Mediation.",
      },
      {
        step: "Serve Section 19 IP Revocation & Demand Notice",
        description:
          "Remind the client in writing that under Upwork Terms of Service (Section 6) and Section 19 of the Copyright Act, intellectual property transfers only upon full payment, and serve a formal legal notice if they deploy the work.",
      },
    ],
    statutoryRule: "Upwork Fixed-Price Escrow Rules (14-Day Auto-Release) + Sec 19 Copyright Act",
  },
  {
    id: "upwork-hourly-declined",
    tabLabel: "Upwork Hourly Failed Charge",
    title: "Upwork Hourly Client's Card Declined on Monday Billing or Disputed Hours",
    cause:
      "You logged hours during the Monday–Sunday billing week, and on Monday afternoon when Upwork charged the client's payment method, the charge failed or the client filed a Friday dispute claiming the hours were unproductive. Many Indian freelancers lose thousands of dollars because they logged 'Manual Time' or clicked 'Allow Manual Time' at the client's request.",
    legalBasis:
      "Upwork Hourly Payment Protection guarantees payout (up to $2,500 per contract or the weekly limit) when a client's verified payment method fails, ONLY if every segment was tracked via the Upwork Desktop App with active keyboard/mouse activity, meaningful work memos, and work directly matching the contract scope. Manual time, idle screen captures, and bonus requests are 100% excluded from Hourly Protection.",
    steps: [
      {
        step: "Audit Your Work Diary Before Wednesday 23:59 UTC",
        description:
          "Ensure every 10-minute billing segment has a clear descriptive memo tied to a deliverable and was tracked automatically via the Desktop Tracker (zero manual time).",
      },
      {
        step: "Contest Client Hourly Disputes Within 3 Business Days",
        description:
          "If the client disputes hours during the Monday–Friday review window, respond immediately with Git commit hashes, Figma version history, and Work Diary screenshots.",
      },
      {
        step: "Escalate Unprotected / Manual Hours Directly to Client",
        description:
          "If Upwork claws back manual or over-limit hours due to client card failure, the debt remains legally owed by the client under Section 70 of the Indian Contract Act; serve a direct legal demand notice.",
      },
    ],
    statutoryRule: "Upwork Hourly Payment Protection Terms + Sec 70 Indian Contract Act",
  },
  {
    id: "fiverr-cancellation-chargeback",
    tabLabel: "Fiverr Dispute / Chargeback",
    title: "Fiverr Buyer Forces Post-Delivery Cancellation or Files PayPal / Card Chargeback",
    cause:
      "After you deliver the completed order on Fiverr, an unscrupulous buyer repeatedly hits 'Request Modification' with vague complaints, threatens a 1-star review, or persuades Fiverr Customer Support to cancel the order after downloading your files—or files a bank/PayPal chargeback weeks after the order auto-completed in 3 days.",
    legalBasis:
      "Under Fiverr Payment Terms, orders marked 'Delivered' auto-complete after 3 days (72 hours) unless the buyer requests a revision. For bank chargebacks where you delivered valid work inside the Fiverr order page, Fiverr's Chargeback Protection program disputes the reversal on your behalf and often restores eligible funds within 7–14 days. Crucially, under Fiverr Terms of Service ('Ownership'), if an order is cancelled for any reason, all intellectual property rights revert immediately to the seller.",
    steps: [
      {
        step: "Deliver Exclusively via 'Deliver Now' With Scope Proof",
        description:
          "Attach a Loom walkthrough video and completed checklist inside the official 'Deliver Now' box so Fiverr Trust & Safety can verify 100% fulfilment.",
      },
      {
        step: "Invoke Fiverr Seller Protection on Chargebacks",
        description:
          "Open a ticket with Fiverr Support attaching the original brief, buyer approval messages, and delivery proof to claim Seller Chargeback Protection.",
      },
      {
        step: "Enforce Immediate IP Reversion & DMCA Takedown",
        description:
          "Because Fiverr ToS explicitly strips the buyer of all ownership upon cancellation, send a DMCA Takedown (to Shopify, YouTube, Google, or web hosts) and a Legal Notice if the buyer uses the cancelled delivery.",
      },
    ],
    statutoryRule: "Fiverr ToS Ownership Reversion Clause + Sec 19 & 51 Copyright Act",
  },
  {
    id: "off-platform-ghosting",
    tabLabel: "Off-Platform Client Ghosted",
    title: "Client Moved You Off Upwork/Fiverr (or Direct Contract) and Stopped Paying Invoices",
    cause:
      "After an initial trial milestone on a platform—or via LinkedIn, Slack, or cold outreach—the client convinced you to work directly via Wise, Payoneer, SWIFT wire, or domestic bank transfer to 'save 10%–20% platform fees'. After you delivered 4–8 weeks of work, the client stopped clearing invoices, blocked you on Slack/WhatsApp, or revoked your workspace access.",
    legalBasis:
      "Moving off-platform forfeits escrow, but it does NOT forfeit your statutory contract rights. Under Trimex International v. Vedanta (Supreme Court), email, Slack, and WhatsApp chats detailing scope and rates form a binding contract under Section 10 of the Indian Contract Act, 1872. Under Section 70 (Quantum Meruit), a client who accepts non-gratuitous work must pay for it. If the client is in India and you hold Udyam Registration, Section 16 MSMED Act mandates 3× RBI Bank Rate compound interest.",
    steps: [
      {
        step: "Export Full Slack, WhatsApp & Email Trail Immediately",
        description:
          "Before the client deletes their workspace or revokes access, export all chat logs, Jira/Linear tickets, Git commits, and invoice delivery receipts with timestamps under Section 63 BSA 2023.",
      },
      {
        step: "Identify the Client's Legal Entity & Jurisdiction",
        description:
          "Trace the client's corporate registration (MCA CIN/GSTIN for Indian companies; Delaware/State Secretary, UK Companies House, or UAE trade license for overseas clients) and founder LinkedIn/addresses.",
      },
      {
        step: "Serve a 15-Day Advocate Legal Demand & IP Freeze Notice",
        description:
          "Dispatch a formal Advocate Legal Notice to the company and its directors demanding full invoice settlement within 15 days, backed by MSME ODR / Order 37 CPC (for India) or cross-border debt & IP escalation.",
      },
    ],
    statutoryRule: "Sections 10, 70 & 73 Indian Contract Act + Sec 16 MSMED Act + Order 37 CPC",
  },
  {
    id: "unpaid-work-live-ip-theft",
    tabLabel: "Client Using Unpaid Work",
    title: "Client Refused to Pay (or Cancelled Order) But Is Using Your Code, Design, or Video Live",
    cause:
      "The client rejected your milestone, cancelled the Fiverr order, or defaulted on your final invoice claiming 'we decided not to use your work'—yet you discover your source code in their production app, your UI/UX design on their live website, or your edited video running in their paid social ads.",
    legalBasis:
      "Under Section 19(1) of the Indian Copyright Act, 1957 (and equivalent US 17 U.S.C. § 204(a) / UK Copyright Act provisions), no assignment of copyright is valid unless it is in writing signed by the creator, and under Section 19(3) it must specify the royalty/consideration. Even standard 'Work-for-Hire' clauses in freelance contracts and Upwork/Fiverr ToS are expressly conditional upon FULL payment. Using unpaid work is direct copyright infringement under Section 51.",
    steps: [
      {
        step: "Capture Timestamped Proof of Live Infringement",
        description:
          "Archive the live URL on Wayback Machine, record a screen capture showing your code/assets in the browser inspector, and match it against your original creation source files (.psd, .fig, Git repo).",
      },
      {
        step: "Serve Formal Section 19 Copyright Revocation Notice",
        description:
          "Send an Advocate Cease-and-Desist + Payment Demand Notice putting the client (and their end-customer/investors) on formal notice that they are operating pirated intellectual property.",
      },
      {
        step: "File Host / App Store / Platform DMCA Takedown",
        description:
          "If unpaid after notice, file a formal Copyright / DMCA Takedown with their cloud/web host (AWS, Vercel, Shopify, GitHub, Apple App Store, Google Play, YouTube, or Meta), forcing immediate settlement.",
      },
    ],
    statutoryRule: "Sections 17, 19, 51 & 55 Indian Copyright Act, 1957 + 17 U.S.C. § 512 (DMCA)",
  },
];

export default function UpworkFiverrProblemTabs() {
  const [activeTab, setActiveTab] = useState<string>(PROBLEMS[0].id);

  const selectedProblem = PROBLEMS.find((p) => p.id === activeTab) || PROBLEMS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      {/* Header */}
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Interactive Freelancer Dispute Matrix
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Exact Upwork, Fiverr or Off-Platform Non-Payment Issue
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click your scenario below to inspect the platform rule, Indian statutory leverage, and 3-step recovery fix:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Upwork, Fiverr and Off-Platform Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {PROBLEMS.map((problem) => {
          const isSelected = activeTab === problem.id;
          return (
            <button
              key={problem.id}
              role="tab"
              id={`tab-${problem.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${problem.id}`}
              onClick={() => setActiveTab(problem.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {problem.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selectedProblem.id}`}
        aria-labelledby={`tab-${selectedProblem.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selectedProblem.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selectedProblem.statutoryRule}
          </span>
        </div>

        {/* Cause & Legal Basis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Why This Happens (Platform &amp; Client Trap)
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedProblem.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Platform Rule &amp; Indian Statutory Lever
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selectedProblem.legalBasis}
            </p>
          </div>
        </div>

        {/* 3-Step Action Plan */}
        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Recovery Plan For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selectedProblem.steps.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-6 h-6 rounded-full bg-[#404447] text-white font-bold text-xs flex items-center justify-center mb-2">
                    {idx + 1}
                  </span>
                  <strong className="text-xs sm:text-sm text-slate-900 font-bold block mb-1">
                    {s.step}
                  </strong>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Dispute Action Link */}
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Client using your work without paying or ignoring invoices?</strong> We serve an Advocate Demand &amp; Section 19 Copyright Revocation Notice within 24 hours.
          </span>
          <Link
            href="/how-freelancer-can-send-legal-notice-to-client-india"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            See Notice Process →
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CreatorScenarioTab {
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

const CREATOR_SCENARIOS: CreatorScenarioTab[] = [
  {
    id: "agency-blames-brand",
    tabLabel: "Agency Blames Brand (90+ Days)",
    title: "Influencer Marketing Agency Claims 'Brand Has Not Released Funds Yet'",
    cause:
      "You executed the Instagram Reels, YouTube integration, or static deliverables through a talent agency or PR middleman under a 30-day or 45-day credit cycle. Months after the campaign went live, the agency campaign manager keeps stalling with 'The brand finance team hasn't cleared our master invoice yet.' In reality, either the brand has already paid the agency (and the agency is diverting your payout for its own working capital) or the agency is hiding behind an unenforceable back-to-back payment excuse.",
    legalBasis:
      "Under Sections 70 and 73 of the Indian Contract Act, 1872, and the Supreme Court ruling in Ircon International Ltd. v. Vinay Heavy Equipments (2015) 13 SCC 680, primary contractual liability rests on the entity that issued your Release Order (the agency). Simultaneously, because the Brand is the principal beneficiary running your sponsored content under Section 226 of the Contract Act and ASCI Influencer Guidelines, serving a joint notice on both the Agency and the Brand's Chief Marketing Officer (CMO) forces immediate disclosure of whether the brand already paid the agency.",
    steps: [
      {
        step: "Check Form 26AS / AIS for TDS Deposit",
        description:
          "Log into the Income Tax e-Filing portal and check Form 26AS / AIS. If the agency has already deducted 10% TDS under Section 194J or 1%/2% under Section 194C, the debt is statutorily admitted in their books.",
      },
      {
        step: "Put Brand Marketing & Legal Team on Formal Copy",
        description:
          "Identify the Brand's Head of Marketing, Legal Counsel, and Registered Office. Brands fiercely protect campaign reputation and hate discovering their agency has pocketed creator funds.",
      },
      {
        step: "Serve Joint 15-Day Statutory Demand Notice",
        description:
          "Have an advocate serve a formal notice naming the Agency as Primary Debtor (Party No. 1) and the Brand as Principal Beneficiary (Party No. 2), demanding full invoice clearance plus 18%–20.25% interest.",
      },
    ],
    statutoryRule: "Sections 70, 73 & 226 Indian Contract Act + Ircon SC Precedent",
  },
  {
    id: "paid-ads-unpaid-content",
    tabLabel: "Brand Running Ads Unpaid",
    title: "Brand Boosting Your Reel / Video as Performance Ads Without Paying Your Fee",
    cause:
      "After you delivered raw footage or published a collaboration Reel/YouTube Short, the brand or agency whitelisted your handle or uploaded your video to Meta Ads Manager / YouTube Ads to run paid performance campaigns. Despite generating commercial sales from your face, voice, and creative work, your invoice remains unpaid past the due date.",
    legalBasis:
      "Under Section 17 and Section 19(1) of the Copyright Act, 1957, the creator/producer is the first owner of copyright in the video and performance unless there is a signed written assignment. Further, under Section 19(4) and judicial precedents (Pine Labs v. Gemalto), commercial usage rights are strictly conditional on payment of the agreed consideration. Using your content and likeness in paid ads without paying the contract fee constitutes statutory copyright infringement under Section 51 of the Copyright Act.",
    steps: [
      {
        step: "Archive Ad Library & Whitelisting Proof",
        description:
          "Capture timestamped screenshots from the Meta Ad Library (facebook.com/ads/library) showing the active Ad IDs, start dates, and sponsored impressions using your unpaid video.",
      },
      {
        step: "Revoke Brand Partner Ad Permissions in App",
        description:
          "Immediately toggle off 'Allow Brand Partner to Boost' in your Instagram post settings and revoke creator licensing permissions in Meta Brand Collabs Manager.",
      },
      {
        step: "Serve Copyright Revocation & Legal Demand Notice",
        description:
          "Dispatch an advocate legal notice revoking all usage licenses, warning of formal Copyright Infringement Takedown strikes on Meta/YouTube (which can suspend the brand's Ad Manager account) if dues are not cleared in 15 days.",
      },
    ],
    statutoryRule: "Sections 17, 19 & 51 Copyright Act, 1957 + Performers' Rights (s.38)",
  },
  {
    id: "whatsapp-dm-no-contract",
    tabLabel: "No Contract (WhatsApp / DM Brief)",
    title: "Collaboration Executed Over WhatsApp, Instagram DMs or Email Without a Signed Contract",
    cause:
      "In fast-moving festive or product-launch campaigns, agency coordinators urgently ask creators to shoot and post Reels based on a WhatsApp brief, voice note, or email rate confirmation, promising 'contract is with legal, send invoice after posting.' Once the post is live and campaign metrics are achieved, the agency ghosts your messages or claims no formal Purchase Order was signed.",
    legalBasis:
      "Under Section 10 of the Indian Contract Act, 1872, and Section 10A of the Information Technology Act, 2000, an agreement formed through electronic messages (WhatsApp chats, emails, Instagram DMs) with a clear rate offer, deliverable acceptance, and performance is a 100% binding contract. Moreover, Section 70 of the Contract Act (Quantum Meruit) mandates that since you did not publish the commercial promotion gratuitously and the brand enjoyed the promotional benefit, they are legally bound to pay.",
    steps: [
      {
        step: "Export Complete WhatsApp Chat & Email Thread",
        description:
          "Use WhatsApp's 'Export Chat with Media' feature to preserve the coordinator's phone number, brief PDF, rate negotiation, draft approval message, and live link confirmation.",
      },
      {
        step: "Capture Live Post Insights & Brand Engagement",
        description:
          "Take screenshots showing the Brand's official handle accepting the Instagram 'Collab' invite, commenting on the Reel, or resharing your Story—irrefutable proof of acceptance.",
      },
      {
        step: "Serve Section 70 & Section 63 BSA Demand Notice",
        description:
          "Serve a statutory notice attaching the electronic chat trail certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, demanding payment before filing an Order XXXVII CPC summary suit.",
      },
    ],
    statutoryRule: "Section 10 & 70 Contract Act + Section 10A IT Act + Section 63 BSA 2023",
  },
  {
    id: "views-reshoot-deduction",
    tabLabel: "Unfair 'Low Views' Cut",
    title: "Brand Demands Arbitrary 50% Fee Cut Citing 'Low Views' or Endless Free Reshoots",
    cause:
      "You shot the video strictly according to the approved script and storyboard, got draft approval from the agency, and published it on schedule. Weeks later, when the invoice is due, the brand refuses to pay the full amount claiming 'the Reel didn't hit 1 lakh organic views' or demands a complete free reshoot with a new hook that was never in the original brief.",
    legalBasis:
      "Unless your written agreement explicitly structured the payout as a performance-based affiliate/CPA deal with a guaranteed view threshold, an influencer collaboration is a deliverable-based service contract. Once the brand approves the draft and the content is published, performance is complete under Section 37 of the Contract Act. Under Section 74 of the Contract Act (Kailash Nath v. DDA), unilateral fee deductions or penalty cuts for organic algorithm fluctuations are illegal.",
    steps: [
      {
        step: "Compile Script & Pre-Publish Draft Approval Proof",
        description:
          "Gather the exact email or WhatsApp message where the agency/brand manager wrote 'Approved to go live' on your draft video and caption.",
      },
      {
        step: "Reject Unilateral Rate Renegotiation in Writing",
        description:
          "Reply firmly by email stating that organic reach depends on platform algorithms, deliverables were approved in advance, and post-facto rate cuts violate the agreed commercial terms.",
      },
      {
        step: "Issue Legal Notice for 100% Contract Value",
        description:
          "Serve a 15-day advocate demand notice for the full agreed fee plus interest, and if you hold Udyam MSME registration, invoke the 15-day deemed acceptance rule under Section 2(b) MSMED Act.",
      },
    ],
    statutoryRule: "Sections 37, 73 & 74 Indian Contract Act + Section 2(b) MSMED Act",
  },
  {
    id: "mcn-talent-agency-cut",
    tabLabel: "MCN / Talent Manager Holding Payout",
    title: "Exclusive Talent Management Agency or YouTube MCN Withholding Creator Payouts",
    cause:
      "Your exclusive talent management agency or Multi-Channel Network (MCN) collects 100% of brand sponsorship payments and YouTube revenue into its corporate bank account, supposed to deduct its 15%–20% commission and remit your 80%–85% creator share within 15 days. Instead, the agency withholds multiple lakhs of your earnings for months or refuses to release your money when you terminate the management contract.",
    legalBasis:
      "Under Sections 213, 217, and 218 of the Indian Contract Act, 1872, an agent is statutorily bound to render proper accounts to the principal (the creator) on demand and pay over all sums received on the creator's behalf. Dishonestly misappropriating funds collected in fiduciary trust for a creator also attracts criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
    steps: [
      {
        step: "Demand Statutory Account Statement Under Sec 213",
        description:
          "Send a formal demand requiring the talent agency to disclose all brand release orders, invoices raised in your name, and exact bank dates when brands paid the agency.",
      },
      {
        step: "Notify Brands Directly to Stop Paying the Ex-Agency",
        description:
          "If your talent contract has ended or been breached, send an official intimation to ongoing brand partners instructing them to remit all pending payouts directly to your bank account.",
      },
      {
        step: "Serve Fiduciary Breach & Recovery Legal Notice",
        description:
          "Serve a 15-day advocate notice invoking Sections 213–218 Contract Act and Section 316 BNS (criminal breach of trust), demanding immediate remittance of your 80%–85% share with 18% interest.",
      },
    ],
    statutoryRule: "Sections 213 & 218 Contract Act (Agent's Duty) + Section 316 BNS 2023",
  },
];

export default function InfluencerScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(CREATOR_SCENARIOS[0].id);

  const selected = CREATOR_SCENARIOS.find((s) => s.id === activeTab) || CREATOR_SCENARIOS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-6">
      <div>
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          Creator Dispute Diagnostic
        </span>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mt-2">
          Select Your Specific Brand Deal or Agency Payment Bottleneck
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Click any creator dispute scenario below to inspect the commercial trap, statutory protection, and immediate 3-step recovery action:
        </p>
      </div>

      {/* ARIA Tablist */}
      <div
        role="tablist"
        aria-label="Influencer and Creator Payment Dispute Scenarios"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
      >
        {CREATOR_SCENARIOS.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#404447] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${selected.id}`}
        aria-labelledby={`tab-${selected.id}`}
        className="space-y-5 focus:outline-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h4 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
            {selected.title}
          </h4>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
            {selected.statutoryRule}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Commercial Trap &amp; Why They Delay
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selected.cause}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 block mb-1">
              Statutory Legal Basis &amp; Creator Rights
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {selected.legalBasis}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h5 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">
            3-Step Legal Recovery Fix For This Scenario
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {selected.steps.map((s, idx) => (
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

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-950">
          <span>
            <strong>Need to escalate against both the Agency and the Brand?</strong> Our advocates dispatch a joint statutory notice within 24 hours.
          </span>
          <Link
            href="/send-a-legal-notice/agency-not-paying-the-creator"
            className="text-red-700 hover:text-red-900 font-bold underline shrink-0"
          >
            Agency Recovery Notice Portal →
          </Link>
        </div>
      </div>
    </div>
  );
}

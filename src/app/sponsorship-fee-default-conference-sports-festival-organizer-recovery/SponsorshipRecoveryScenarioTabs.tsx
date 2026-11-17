"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Scenario {
  id: string;
  tabLabel: string;
  headline: string;
  tag: string;
  sponsorProfile: string;
  defaultExcuse: string;
  organizerTrap: string;
  statutoryRemedy: string;
  evidenceAnchor: string;
  recommendedTimeline: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "po-stuck-sap",
    tabLabel: "The 'PO Stuck in ERP/SAP' Trap",
    headline: "Brand Promises Purchase Order Mid-Event & Freezes Finance Post-Event",
    tag: "Corporate Enterprise / Conglomerate",
    sponsorProfile: "Multinational Enterprise, FMCG or Tier-1 IT Company",
    defaultExcuse:
      "'Our CMO committed on email, but internal finance disapproved the budget release after leadership re-alignment. No PO was formally cut in SAP.'",
    organizerTrap:
      "Allowing on-ground main-stage branding, keynote address, and 50 VIP delegate passes based strictly on an email confirmation without an advance security deposit.",
    statutoryRemedy:
      "Indian Contract Act 1872 Section 70 (Obligation of person enjoying benefit of non-gratuitous act) read with Order XXXVII Rule 1(2) CPC on written admissions via official corporate domain emails.",
    evidenceAnchor:
      "CMO email approvals, approved deck logos, badge scans showing corporate VP attendance, keynote video footage, stage backdrop photos.",
    recommendedTimeline: "15-Day Advocate Notice -> Commercial Court Order XXXVII Summary Suit within 45 days.",
  },
  {
    id: "edtech-crypto-startup",
    tabLabel: "EdTech / Crypto / Fintech Startup Default",
    headline: "High-Flying Startup Takes Title Sponsorship Then Enters Liquidity Crisis",
    tag: "Venture-Backed Startup Default",
    sponsorProfile: "VC-funded EdTech, Web3/Crypto, Quick-Commerce or D2C Brand",
    defaultExcuse:
      "'Our Series B tranche was delayed by our lead investor. We cannot honor the remaining 70% sponsorship tranche until our next fundraise closes.'",
    organizerTrap:
      "Accepting 30% advance booking fee, giving away naming rights (e.g., 'Presented by Brand X'), and waiting 6–12 months on polite verbal promises while the startup burns cash or shuts down.",
    statutoryRemedy:
      "Order XXXVIII Rule 5 CPC (Attachment Before Judgment to freeze promoter/corporate bank balances) + MSME Samadhaan under MSMED Act 2006 Section 18 if organizer holds Udyam registration.",
    evidenceAnchor:
      "Signed Sponsorship MoU, GST e-invoices, event press releases mentioning brand name, social media livestream archives, WhatsApp chats with marketing head.",
    recommendedTimeline: "Immediate 7-Day Demand Notice -> Bank Account Attachment under CPC Order 38 Rule 5.",
  },
  {
    id: "real-estate-cheque-bounce",
    tabLabel: "Real Estate Post-Dated Cheque (PDC) Bounce",
    headline: "Luxury Developer Gives Security Cheque for Expo Stall & Stops Payment",
    tag: "Real Estate & Infrastructure",
    sponsorProfile: "Property Developer, Real Estate Infrastructure Group, Expo Exhibitor",
    defaultExcuse:
      "'Buyer footfall at the summit was lower than projected in your sales deck. We issued a Stop Payment on the post-dated cheque for misrepresentation.'",
    organizerTrap:
      "Believing the debtor's post-facto subjective footfall excuse. Under settled commercial law, sponsorship is a branding opportunity, not an actionable footfall warranty unless specifically contractually linked.",
    statutoryRemedy:
      "Negotiable Instruments Act 1881 Section 138 (Criminal liability for dishonor of cheque) + Section 141 (Vicarious liability of Managing Director and Signing Directors) + Section 143A interim compensation (up to 20%).",
    evidenceAnchor:
      "Dishonoured cheque, bank return memo ('Payment Stopped by Drawer'), speed post delivery tracking receipt, registration desk badge records showing footfall count.",
    recommendedTimeline: "Strict 30-Day NI Act Section 138 Notice -> Criminal Complaint in Judicial Magistrate Court within 30 days of notice expiry.",
  },
  {
    id: "sports-franchise-title",
    tabLabel: "Sports League / Cultural Festival Jersey Sponsor",
    headline: "Franchise Jersey Sponsor Enjoys Live Broadcast and Rebuffs Balance Tranches",
    tag: "Sports League / Music Festival IP",
    sponsorProfile: "Apparel Brand, Beverage Company, Gaming Platform sponsoring League/Concert",
    defaultExcuse:
      "'The live broadcast suffered buffering during Matchday 3, and our jersey logo was partially occluded during television interviews. We are offsetting 60% of the contract value.'",
    organizerTrap:
      "Allowing unilateral debit notes or subjective damage offsets without formal contract-specified cure periods or pre-event dispute notices.",
    statutoryRemedy:
      "Commercial Courts Act 2015 Pre-Institution Mediation (PIM under Section 12A) followed by Commercial Suit or Section 9 Interim Relief under Arbitration and Conciliation Act 1996 if an arbitration clause exists.",
    evidenceAnchor:
      "Official Broadcast Log (BARC/OTT viewership report), high-resolution match photos, social media influencer impressions deck, third-party media audit report.",
    recommendedTimeline: "Legal Notice with 10-day cure window -> Fast-Track Arbitration / Commercial Court.",
  },
];

export default function SponsorshipRecoveryScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  const selectedScenario = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 text-white shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
            Interactive Commercial Playbook
          </span>
          <p className="text-lg sm:text-xl font-bold text-white mt-0.5">
            Sponsorship Default Failure Modes & Statutory Escalation
          </p>
        </div>
        <span className="text-xs text-slate-400">Select debtor archetype:</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto py-3 scrollbar-thin">
        {SCENARIOS.map((scenario) => {
          const isActive = activeTab === scenario.id;
          return (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-semibold whitespace-nowrap transition-all text-left cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md shadow-red-950/50"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Card Content */}
      <div className="mt-4 bg-slate-800/60 border border-slate-700/80 rounded-xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-300 border border-red-800/50">
            {selectedScenario.tag}
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {selectedScenario.sponsorProfile}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
          {selectedScenario.headline}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 space-y-1.5">
            <span className="block text-[11px] font-bold uppercase tracking-wide text-amber-400">
              Debtor Brand&apos;s Default Excuse
            </span>
            <p className="text-slate-300 italic">{selectedScenario.defaultExcuse}</p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3.5 space-y-1.5">
            <span className="block text-[11px] font-bold uppercase tracking-wide text-red-400">
              Organizer Flaw / Contract Vulnerability
            </span>
            <p className="text-slate-300">{selectedScenario.organizerTrap}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-l-4 border-[#DC2626] rounded-r-lg p-4 space-y-2 text-xs sm:text-sm">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
              Statutory Recovery Weapon
            </span>
            <p className="text-slate-100 font-medium">{selectedScenario.statutoryRemedy}</p>
          </div>

          <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 font-bold uppercase text-[10px] block">
                Non-Negotiable Evidence
              </span>
              <p className="text-slate-300 mt-0.5">{selectedScenario.evidenceAnchor}</p>
            </div>
            <div>
              <span className="text-slate-400 font-bold uppercase text-[10px] block">
                Statutory Escalation Speed
              </span>
              <p className="text-amber-300 font-semibold mt-0.5">{selectedScenario.recommendedTimeline}</p>
            </div>
          </div>
        </div>

        <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-700/60">
          <span className="text-slate-400">
            Have multiple brand sponsors defaulting on this event?
          </span>
          <Link
            href="/bulk-recovery-cases-all-in-one-affordable-solutions"
            className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold"
          >
            <span>Upload Entire Event Sponsorship Roster (CSV)</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

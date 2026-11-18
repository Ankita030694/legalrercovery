"use client";

import React, { useState } from "react";

interface TmcScenario {
  id: string;
  tabLabel: string;
  title: string;
  failureMode: string;
  statutoryLeverage: string;
  actionSteps: {
    step: string;
    detail: string;
  }[];
  hook: string;
}

const TMC_SCENARIOS: TmcScenario[] = [
  {
    id: "startup-intl-default",
    tabLabel: "Startup ₹35L+ Flight Default",
    title: "Funded Startup or Export House Defaults on International Business-Class Credit",
    failureMode:
      "A Series-A startup or export house books ₹35–₹50 Lakh of international business-class tickets on a 30-day credit cycle. Before your invoice matures, IATA BSP auto-debits your agency's bank account on the 7-day/15-day remittance cycle—putting your IATA Bank Guarantee at immediate risk of invocation.",
    statutoryLeverage:
      "Because each ticket was issued on written corporate travel desk email instructions and shows 'Flown / Coupon Used' status in Amadeus, Galileo, or Sabre GDS, the debt is a liquidated, undisputed sum. You can file an Order XXXVII CPC Summary Suit paired with an urgent Order XXXVIII Rule 5 application to freeze the startup's operating bank accounts before cash burn wipes them out.",
    actionSteps: [
      {
        step: "Extract GDS Flown Manifest & Email Trail",
        detail:
          "Download the BSP billing statement, airline PNR 'Flown/Used' coupon status, and the corporate travel desk's approval emails with a Section 63 BSA 2023 certificate.",
      },
      {
        step: "Serve 7-Day Advocate Statutory Demand Notice",
        detail:
          "Issue a pre-litigation notice to the Managing Director, CFO, and Board warning of Order XXXVIII Rule 5 bank attachment, MSMED Act s.16 3x RBI interest, and Section 43B(h) tax disallowance.",
      },
      {
        step: "File Order XXXVII Summary Suit + Rule 5 Attachment",
        detail:
          "If unpaid on Day 8, move the Commercial Court for leave-to-defend denial and immediate attachment of the corporate client's bank accounts.",
      },
    ],
    hook: "Order XXXVII CPC + Order XXXVIII Rule 5 Bank Attachment",
  },
  {
    id: "lcc-wallet-default",
    tabLabel: "LCC Wallet Credit Default",
    title: "Corporate Client Defaults on IndiGo, Air India Express, or Akasa Wallet Bookings",
    failureMode:
      "Unlike GDS/BSP tickets, Low-Cost Carrier (LCC) corporate bookings require the TMC to pre-fund airline agency wallets in cash. When a corporate client flies 80–120 domestic sectors per month on credit and stops paying, your working capital is instantly trapped in already-consumed LCC wallet balances.",
    statutoryLeverage:
      "LCC portal GST invoices, PNR passenger manifests, and corporate employee boarding records establish completed performance under Section 73 of the Indian Contract Act, 1872. If your TMC holds Udyam Registration, you can simultaneously trigger MSMED Act Section 18 MSEFC conciliation after 45 days, forcing the corporate buyer to face Section 43B(h) Income Tax disallowance.",
    actionSteps: [
      {
        step: "Suspend Corporate Portal Access & Freeze Unflown PNRs",
        detail:
          "Immediately revoke self-booking tool credentials and cancel any refundable future-dated itineraries (per contract terms) to cap net BSP/LCC exposure.",
      },
      {
        step: "Compile Sector-Wise LCC Reconciliation Ledger",
        detail:
          "Pair each LCC PNR with the employee's corporate email ID, GSTIN tax invoice, and e-Invoice IRN to eliminate 'unauthorized booking' excuses.",
      },
      {
        step: "Trigger MSMED s.15–18 & Section 43B(h) Audit Notice",
        detail:
          "Notify the client's Statutory Auditor and CFO that overdue micro/small TMC dues beyond 45 days trigger mandatory Income Tax disallowance under Section 43B(h).",
      },
    ],
    hook: "MSMED Act s.15–18 + Section 43B(h) Income Tax Disallowance",
  },
  {
    id: "employee-left-dispute",
    tabLabel: "'Employee Left' Excuse",
    title: "Corporate Refuses Payment Claiming 'Authorized Signatory Resigned'",
    failureMode:
      "Finance controllers frequently stall TMC invoices by claiming the travel coordinator or VP who approved the international flights, visa fees, or hotel BTC stays has resigned—or that the trip exceeded internal company travel policy.",
    statutoryLeverage:
      "Under Section 237 of the Indian Contract Act, 1872 (Ostensible Authority), a company is bound by the acts of an employee it held out as its authorized travel coordinator. Once tickets are flown and GST input tax credit (ITC) is reflected on the corporate's GSTR-2B, the company is estopped from disputing liability.",
    actionSteps: [
      {
        step: "Pull GSTR-1 / GSTR-2B ITC Acceptance Proof",
        detail:
          "Document that your B2B GST invoices were uploaded against the corporate's GSTIN and never rejected on the GST portal.",
      },
      {
        step: "Map Historical Payment Pattern & Domain Emails",
        detail:
          "Attach prior paid invoices approved by the same corporate email domain (@company.com) to establish ostensible authority under Contract Act s.237.",
      },
      {
        step: "Serve Advocate Notice Rejecting Internal Policy Defense",
        detail:
          "Put the CFO on formal notice that internal HR exits do not extinguish third-party TMC debts for consumed airline seats.",
      },
    ],
    hook: "Contract Act s.237 (Ostensible Authority) + GST ITC Estoppel",
  },
  {
    id: "pdc-director-guarantee",
    tabLabel: "Bounced PDC & Guarantee",
    title: "Security Cheque Dishonoured & Personal Director Guarantee Invocation",
    failureMode:
      "Many TMCs collect an undated security cheque or a Personal Director Guarantee before opening a ₹25–₹50 Lakh monthly air-ticket credit line. When the corporate defaults and the TMC deposits the cheque, the client issues a 'Stop Payment' instruction or the cheque bounces for 'Insufficient Funds'.",
    statutoryLeverage:
      "Under the Supreme Court's ruling in Sripati Singh v. State of Jharkhand (2021), a security cheque presented after the underlying debt crystallizes is fully enforceable under Section 138 of the NI Act, 1881. Paired with Section 143A (20% interim compensation) and a signed Personal Director Guarantee under Section 128 of the Contract Act, directors face personal criminal and civil liability.",
    actionSteps: [
      {
        step: "Serve Mandatory Section 138 Notice Within 30 Days",
        detail:
          "Dispatch the statutory 15-day demand notice within 30 days of receiving the bank's Cheque Return Memo via Speed Post RPAD, email, and WhatsApp.",
      },
      {
        step: "Array Both Company & Signatory Directors (s.141 NI Act)",
        detail:
          "Include the Managing Director and cheque-signing officers who were in charge of day-to-day financial affairs at the time of default.",
      },
      {
        step: "Invoke Personal Guarantee Simultaneously Under s.128",
        detail:
          "Under Contract Act s.128, a guarantor's liability is co-extensive with the corporate debtor—allowing direct recovery against the director's personal assets.",
      },
    ],
    hook: "NI Act s.138/143A (Sripati Singh) + Contract Act s.128 Guarantee",
  },
];

export default function IataTmcScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(TMC_SCENARIOS[0].id);
  const active = TMC_SCENARIOS.find((s) => s.id === activeId) || TMC_SCENARIOS[0];

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="TMC Default Scenarios"
        className="flex flex-wrap gap-2 mb-6"
      >
        {TMC_SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeId;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveId(scenario.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            {active.title}
          </h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 border border-red-200 text-[#DC2626] shrink-0">
            {active.hook}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Failure Mode
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.failureMode}
            </p>
          </div>
          <div className="bg-white rounded-xl border border-emerald-200 p-4">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Statutory Creditor Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {active.statutoryLeverage}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Immediate Action Protocol
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {active.actionSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.step}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

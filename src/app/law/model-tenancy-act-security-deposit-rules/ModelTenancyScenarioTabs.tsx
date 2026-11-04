"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  statutoryProvision: string;
  landlordExcuse: string;
  legalReality: string;
  immediateFix: string[];
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "deposit-held-after-keys",
    tabLabel: "1. Deposit Held After Vacating",
    title: "Landlord Took Keys & Vacant Possession but Keeps Delaying Deposit Refund",
    statutoryProvision:
      "Section 11(2), Model Tenancy Act, 2021 (Adopted States) • Section 108(q) TPA & Section 73 Contract Act (All States)",
    landlordExcuse:
      "\"I will refund the security deposit after the next tenant moves in, or after the society clears the final water and maintenance reconciliation next month.\"",
    legalReality:
      "Under Section 11(2) of the Model Tenancy Act (and enacted state statutes such as Section 11(2) of the UP Regulation of Urban Premises Tenancy Act, 2021), the security deposit MUST be refunded to the tenant on the exact date of taking over vacant possession of the premises, after deducting only undisputed arrears. Even in non-adopted states (Karnataka, Maharashtra, Delhi, Haryana), Delhi High Court rulings (H.S. Bedi v. NHAI) hold that a security deposit is held in trust and retaining it after key handover triggers 18% p.a. penal interest.",
    immediateFix: [
      "Never hand over physical keys without recording a timestamped walkthrough video of every room, meter reading, and a signed or WhatsApp-acknowledged Key Handover note.",
      "Send a written 7-day demand email/WhatsApp stating the exact date vacant possession was delivered and providing your bank NEFT/UPI details.",
      "If unpaid after 7 days, serve a 15-day Advocate Statutory Legal Notice demanding the full deposit plus 18% p.a. interest before filing in the Rent Authority or Summary Civil Court.",
    ],
  },
  {
    id: "painting-wear-tear",
    tabLabel: "2. Painting & Wear-and-Tear Cuts",
    title: "Landlord Deducting 1 Month's Rent for Repainting, Acid Wash or Normal Wear & Tear",
    statutoryProvision:
      "Section 15 & Second Schedule (Part A vs Part B), Model Tenancy Act, 2021 • Section 108(m) Transfer of Property Act, 1882",
    landlordExcuse:
      "\"Standard rule in Bengaluru/Pune/Noida is to deduct one full month's rent from the security deposit for repainting, whitewashing, and deep cleaning when you vacate.\"",
    legalReality:
      "Routine whitewashing, repainting of walls and doors, structural repairs, and fixing internal electrical wiring or concealed plumbing are explicitly classified as the LANDLORD'S statutory responsibility under Part A of the Second Schedule to the Model Tenancy Act (read with Section 15). Under Section 108(m) of the Transfer of Property Act, a tenant is exempt from liability for 'reasonable wear and tear'. Unless the rental agreement contains an explicit, mutually signed painting deduction clause—or the landlord proves malicious structural damage with GST contractor bills—blanket 1-month painting deductions are illegal.",
    immediateFix: [
      "Demand original GST tax invoices and payment receipts from the landlord for any alleged repair; estimates on plain paper are inadmissible.",
      "Compare your move-in photos/video with move-out photos to prove that faded paint or minor nail holes constitute ordinary wear and tear under the Second Schedule.",
      "Serve a legal notice challenging the unilateral deduction under Section 15 MTA / Section 108(m) TPA and Section 74 of the Indian Contract Act.",
    ],
  },
  {
    id: "excessive-upfront-deposit",
    tabLabel: "3. Landlord Asking 6–10 Months Deposit",
    title: "Landlord or Broker Demanding 6 to 10 Months' Rent as Residential Security Deposit",
    statutoryProvision:
      "Section 11(1)(a), Model Tenancy Act, 2021 • Entry 18, List II (State Subject Constitutional Rule)",
    landlordExcuse:
      "\"The Model Tenancy Act does not apply here; local market practice requires 6 to 10 months' rent as advance deposit.\"",
    legalReality:
      "Whether a landlord can legally demand more than 2 months' rent depends strictly on whether your state legislature has enacted the Model Tenancy Act. In Uttar Pradesh (Noida, Greater Noida, Ghaziabad, Lucknow), Assam, and Andhra Pradesh, the 2-month residential deposit cap is binding state law—demanding 6 months violates Section 11(1)(a). However, in Karnataka (Bengaluru) and Maharashtra (Mumbai/Pune), the state has NOT enacted the MTA 2-month cap†, so upfront deposit amounts remain governed by contract negotiation.",
    immediateFix: [
      "If renting in UP, Assam, or AP, cite Section 11(1)(a) of the state's Tenancy Act and insist on registering the agreement on the state Rent Authority portal where deposits above 2 months are flagged.",
      "If renting in Bengaluru, Mumbai, or Pune, negotiate a lower deposit in the Leave & Licence Agreement and insert a mandatory clause imposing 18% p.a. interest if the deposit is not refunded on the day of key handover.",
      "Always pay the security deposit via traceable bank transfer (NEFT/RTGS/UPI/Cheque) marked 'Refundable Security Deposit'—never in cash.",
    ],
  },
  {
    id: "lock-in-forfeiture",
    tabLabel: "4. Lock-In Period Forfeiture",
    title: "Landlord Forfeiting Entire Deposit Because Tenant Vacated During Lock-In Period",
    statutoryProvision:
      "Section 74, Indian Contract Act, 1872 • Section 21, Model Tenancy Act, 2021",
    landlordExcuse:
      "\"You signed a 6-month or 11-month lock-in clause. Since you are leaving in Month 4, your entire 2-to-3 month security deposit stands forfeited.\"",
    legalReality:
      "Under Section 74 of the Indian Contract Act and Supreme Court precedents (Kailash Nath Associates v. DDA), a lock-in forfeiture clause is treated as a stipulation by way of penalty. A landlord cannot pocket a windfall by forfeiting your entire security deposit if they re-let the flat to a new tenant within a few weeks—or if you were forced to vacate early due to the landlord's own breach (chronic water/power failure, seepage rendering the premises uninhabitable under Section 15(4) MTA / Section 108(e) TPA). At most, the landlord can claim reasonable compensation for proven actual vacancy loss after mitigating damages.",
    immediateFix: [
      "If vacating due to uninhabitability (seepage, sewage backup, cut utilities), serve a written notice under Section 15(4) MTA / Section 108(e) TPA documenting that the landlord's breach terminated the lock-in.",
      "If vacating for personal relocation, offer a replacement tenant or serve the standard 1-month notice and track when a new tenant moves in (via society gate/MyGate logs) to defeat double-recovery claims.",
      "Issue an Advocate Legal Notice demanding refund of the deposit minus only actual, unmitigated vacancy days.",
    ],
  },
  {
    id: "pg-coliving-deposit",
    tabLabel: "5. PG & Co-Living Deposit Stuck",
    title: "PG Owner or Co-Living Operator (Stanza, Zolo, Local PG) Refusing Deposit Refund",
    statutoryProvision:
      "Section 2(11) & Section 2(46), Consumer Protection Act, 2019 • Section 73/74, Indian Contract Act, 1872",
    landlordExcuse:
      "\"Our app policy says refund takes 45–60 working days after exit, and we deducted ₹12,000 for bed-sheet damage, move-out charges, and electricity averages.\"",
    legalReality:
      "While Section 3(1)(e) of the Model Tenancy Act exempts hotels and lodging houses from Rent Authority jurisdiction, commercial Paying Guest (PG) accommodations, student hostels, and managed co-living platforms operate as commercial service providers under the Consumer Protection Act, 2019. One-sided app clauses imposing hidden 'exit processing fees', arbitrary electricity surcharges without sub-meter readings, or 60-day refund holds constitute 'Unfair Contract' terms under Section 2(46) and 'Deficiency in Service' under Section 2(11) CPA 2019.",
    immediateFix: [
      "Download your onboarding payment receipt, app move-out ticket, and sub-meter photo before your app login is deactivated on move-out day.",
      "Reject arbitrary app wallet credits or unitemised 'utility pool' deductions in writing to the operator's grievance officer.",
      "Serve a 15-day Advocate Legal Notice invoking CPA 2019 (which enables fast online filing on e-Jagriti from your home city, even after you move back from Pune, Bengaluru, or Kota).",
    ],
  },
];

export default function ModelTenancyScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Accessible Tab List */}
      <div
        role="tablist"
        aria-label="Rental Security Deposit Dispute Scenarios"
        className="flex overflow-x-auto border-b border-slate-200 bg-slate-100/80 p-1.5 gap-1.5 scrollbar-none"
      >
        {SCENARIOS.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`tab-${item.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                isSelected
                  ? "bg-[#111827] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* All Tab Panels Rendered in DOM for Crawlers & Progressive Enhancement */}
      <div className="p-4 sm:p-6 md:p-7">
        {SCENARIOS.map((item) => {
          const isSelected = activeTab === item.id;
          return (
            <div
              key={item.id}
              role="tabpanel"
              id={`panel-${item.id}`}
              aria-labelledby={`tab-${item.id}`}
              hidden={!isSelected}
              className={isSelected ? "space-y-4 block" : "hidden"}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900">
                  {item.title}
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#DC2626] border border-red-200">
                  {item.statutoryProvision}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/80 border border-amber-200/80">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-800 block mb-1">
                    Common Landlord / Broker Claim
                  </span>
                  <p className="text-xs sm:text-sm text-amber-950 italic leading-relaxed">
                    {item.landlordExcuse}
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block mb-1">
                    Statutory Position &amp; Legal Counter
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                    {item.legalReality}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                  3-Step Tenant Action Plan:
                </span>
                <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {item.immediateFix.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

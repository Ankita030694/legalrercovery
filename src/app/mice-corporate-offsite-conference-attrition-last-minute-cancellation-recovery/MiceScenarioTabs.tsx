"use client";

import React, { useState } from "react";
import { Building2, Plane, Users, AlertTriangle, CheckCircle2, Scale } from "lucide-react";

interface Scenario {
  id: string;
  label: string;
  badge: string;
  title: string;
  corporateExcuse: string;
  creditorRebuttal: string;
  evidenceRequired: string[];
  forumAndStatute: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "room-block-cancellation",
    label: "1. 150-Room Offsite Cancelled",
    badge: "Last-Minute Wash",
    title: "Corporate Blocked 150 Resort Rooms & Cancelled 7–10 Days Prior Demanding 100% Refund",
    corporateExcuse:
      "\"Our board postponed the annual dealer-meet due to market restructuring. Since zero guests checked in and no food was served, retaining our ₹15 Lakh advance or billing 85% cancellation is an unenforceable penalty under Section 74.\"",
    creditorRebuttal:
      "Under ONGC v. Saw Pipes (2003) and Kailash Nath Associates v. DDA (2015), hotel room-nights and convention halls are 100% time-perishable inventory—an unsold room on 14 November cannot be stocked or resold on 15 November. Once the hotel produces its PMS Daily Occupancy Report showing 118 of 150 rooms remained vacant on event dates plus CRM turnaway logs, the 75%–100% sliding-scale slab is a genuine pre-estimate of loss, not a penalty.",
    evidenceRequired: [
      "Signed Group Sales Agreement / Banquet Contract showing 30d / 15d / 7d cancellation slabs",
      "PMS Night Audit & Inventory Availability Snapshot for the exact blocked dates",
      "Turnaway / Regret Log (wedding & leisure inquiries declined while holding the 150-room block)",
      "Email notice of cancellation timestamped inside the 100% retention window",
    ],
    forumAndStatute:
      "Indian Contract Act s.74 (Liquidated Damages) + Commercial Courts Act s.12A Mediation + Order XXXVII CPC Summary Suit",
  },
  {
    id: "attrition-pickup-shortfall",
    label: "2. 80% Attrition Shortfall",
    badge: "Room Pickup Drop",
    title: "Company Guaranteed 120 Room-Nights (80% Minimum) But Only 64 Delegates Checked In",
    corporateExcuse:
      "\"We paid in full for the 64 rooms our team actually occupied. Charging ₹7,500/night for 32 unused 'ghost rooms' plus minimum-guarantee banquet covers is unfair enrichment.\"",
    creditorRebuttal:
      "Group MICE rates carry a steep corporate discount (often 25%–35% below Rack/BAR) specifically in exchange for an 80%–85% minimum pickup guarantee. Under Contract Act s.74, the shortfall between 80% contracted commitment (96 rooms) and actual pickup (64 rooms) = 32 unsold room-nights represents direct, quantifiable revenue loss if the hotel did not reach 100% house occupancy.",
    evidenceRequired: [
      "Group Rooming List vs. Final PMS Checked-In Folio Reconciliation",
      "Master Account (PM Folio) invoice separating occupied rooms, attrition shortfall & F&B minimum",
      "House-Count / Occupancy % Log for event dates proving unsold capacity exceeded 32 rooms",
      "Signed Cut-Off Date amendment or email declining room-block release before cut-off",
    ],
    forumAndStatute:
      "Contract Act s.73 & s.74 + Order XXXVII CPC (Liquidated Contract Balance) + CGST Rule 37 ITC Leverage",
  },
  {
    id: "mice-agency-pass-through",
    label: "3. MICE / Incentive Agency",
    badge: "International Pass-Through",
    title: "MICE Organizer Paid Airline Charter & Foreign Resort Deposits; Corporate Client Pulled Out",
    corporateExcuse:
      "\"Our agreement was subject to internal budget sign-off, and your agency should recover the deposits directly from the Phuket resort and charter airline instead of billing us.\"",
    creditorRebuttal:
      "Under Contract Act Sections 187 and 226, a MICE/Incentive agency acting on written corporate Mandate / Purchase Order binds the corporate principal for all non-refundable third-party commitments incurred in good faith. Once the agency exhibits SWIFT/remittance receipts, airline EMD/charter contracts, and resort forfeiture debit notes, the corporate client cannot shift supplier cancellation risk onto the intermediary.",
    evidenceRequired: [
      "Approved Corporate PO / Email Authorization to lock international air & resort inventory",
      "Bank SWIFT / AD-Bank remittance proofs & Airline Group Desk EMD forfeiture receipts",
      "Foreign Resort / DMC signed contract & non-refundable cancellation debit note",
      "Udyam Registration Certificate (for MSMED s.16 3x RBI compound interest & s.43B(h) leverage)",
    ],
    forumAndStatute:
      "MSMED Act s.15–18 (for Udyam TMCs/MICE) + Contract Act s.73/74/226 + Income Tax Act s.43B(h) Tax Disallowance",
  },
  {
    id: "dealer-meet-cheque-stop",
    label: "4. Post-Event Balance & Cheque Stop",
    badge: "NI Act s.138 Trigger",
    title: "Dealer-Meet Completed With Extra AV/Banquet Setup, Then Corporate Stopped the Final Cheque",
    corporateExcuse:
      "\"The gala dinner AV setup had a 10-minute mic glitch and extra 40 dealer covers were not pre-approved by HQ, so we instructed our bank to stop payment on the ₹18 Lakh balance cheque.\"",
    creditorRebuttal:
      "Under Modi Cements v. Kuchil Kumar Nandi and Laxmi Dyechem v. State of Gujarat, 'Stop Payment' attracts full criminal prosecution under Section 138 of the NI Act. Furthermore, under Mobilox Innovations (2018), raising a post-event AV complaint without any contemporaneous protest on the Banquet Event Order (BEO) or Event Captain sign-off is a classic 'moonshine' defense.",
    evidenceRequired: [
      "Original Dishonoured Cheque + Bank Return Memo ('Payment Stopped by Drawer')",
      "Signed Banquet Event Order (BEO) & Event Captain / Corporate Coordinator headcount sign-off",
      "CCTV / AV vendor log & BSA 2023 s.63 certificate confirming uninterrupted event execution",
      "30-day statutory NI Act s.138 demand notice sent to Managing Director & Authorized Signatory",
    ],
    forumAndStatute:
      "NI Act s.138 & s.143A (20% Interim Compensation) + Order XXXVII CPC + BSA 2023 s.63",
  },
];

export default function MiceScenarioTabs() {
  const [activeId, setActiveId] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  const getIcon = (id: string) => {
    if (id === "room-block-cancellation") return <Building2 className="w-4 h-4" />;
    if (id === "attrition-pickup-shortfall") return <Users className="w-4 h-4" />;
    if (id === "mice-agency-pass-through") return <Plane className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
      {/* Tab Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
        {SCENARIOS.map((sc) => {
          const isActive = sc.id === activeId;
          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => setActiveId(sc.id)}
              className={`flex items-center gap-2 text-left px-3.5 py-3 rounded-xl text-xs font-bold transition-all border ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span className="shrink-0">{getIcon(sc.id)}</span>
              <span className="leading-snug">{sc.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
            <Scale className="w-3.5 h-3.5 text-slate-400" />
            {current.forumAndStatute}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 leading-snug">
          {current.title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800 mb-1.5">
              Typical Corporate Defense / Excuse
            </p>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed italic">
              {current.corporateExcuse}
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Creditor Legal Rebuttal &amp; Case Law
            </p>
            <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
              {current.creditorRebuttal}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-2.5">
            Mandatory Evidence Annexures for Notice &amp; Plaint
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {current.evidenceRequired.map((ev, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

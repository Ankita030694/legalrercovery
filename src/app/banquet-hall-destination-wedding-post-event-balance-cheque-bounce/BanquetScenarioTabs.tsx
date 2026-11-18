"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, AlertTriangle, Wine, Users, Building2, UtensilsCrossed } from "lucide-react";

interface Scenario {
  id: string;
  tabLabel: string;
  headline: string;
  disputedTicket: string;
  modusOperandi: string;
  statutoryHook: string;
  venueDefenseBreak: string;
  recommendedAction: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: "extra-pax-checkout",
    tabLabel: "3 AM Extra-Pax Cheque",
    headline: "150+ Unannounced Baraat / Reception Guests Added During Pheras; Cheque Stopped Next Morning",
    disputedTicket: "₹8,50,000 – ₹15,00,000 Extra Plate & Live Counter Overrun",
    modusOperandi:
      "During the reception or pheras, the host's family pleads with the banquet captain to open extra buffet counters and issue additional plates beyond the guaranteed 400-pax slab. At 3:00 AM checkout, they hand over a post-dated or current-dated cheque for the extra-pax folio, then instruct their bank to 'Stop Payment' by 10:00 AM.",
    statutoryHook: "NI Act s.138 & s.139 Presumption + s.143A (20% Interim Compensation)",
    venueDefenseBreak:
      "Under MMTC Ltd. v. Medchl Chemicals, a 'Stop Payment' memo is legally identical to 'Insufficient Funds' unless the drawer proves zero debt existed on the date of presentation. Signed Event Captain Extra-Pax Slips and wristband/plate-counter logs destroy post-event 'inflated headcount' excuses.",
    recommendedAction:
      "Obtain the original Bank Return Memo ('Payment Stopped by Drawer') immediately, preserve CCTV entrance footage + POS kitchen KOTs under BSA 2023 s.63, and serve a 15-day statutory demand notice under NI Act s.138 within 30 days.",
  },
  {
    id: "bar-liquor-corkage",
    tabLabel: "Open Bar & Liquor Bill",
    headline: "Host Disputes ₹4.5 Lakh Premium IMFL / Imported Bar Consumption After Sangeet Night",
    disputedTicket: "₹3,50,000 – ₹9,00,000 Bar Consumption & Corkage Extras",
    modusOperandi:
      "The wedding contract caps the liquor package or specifies actuals on bottle-count. After a high-consumption Sangeet and Cocktail night, the host refuses to honour the bar tally, alleging 'bartenders opened unapproved bottles' or 'watered-down pours', and stops payment on the balance cheque.",
    statutoryHook: "NI Act s.138 + Indian Contract Act s.70 (Liability for Non-Gratuitous Act)",
    venueDefenseBreak:
      "Empty-bottle count sheets countersigned by the host's designated family coordinator or wedding planner at bar close, paired with bar POS timestamps and excise permit registers, establish actual consumption. Under Contract Act s.70, having enjoyed the benefit of goods/services, the host is bound to compensate.",
    recommendedAction:
      "Attach the countersigned Bar Closing Tally, excise stock deduction sheet, and WhatsApp approval messages from the event planner to your Advocate Legal Notice; demand payment within 15 days or face s.138 prosecution.",
  },
  {
    id: "buyout-damage-extras",
    tabLabel: "Resort Buyout & Damages",
    headline: "Destination Wedding Buyout Leaves Unpaid Spa, Room Service, Late Checkout & Property Damage",
    disputedTicket: "₹6,00,000 – ₹25,00,000 Resort Incidentals & Decor Damage",
    modusOperandi:
      "At Udaipur, Goa, or Jim Corbett buyout resorts, guests charge room service, cab transfers, extra beds, and pool-party damages to the master folio. The host signs the master summary at checkout with a balance cheque, then blocks it claiming 'unauthorized room charges by guests'.",
    statutoryHook: "Order XXXVII CPC Summary Suit + NI Act s.138 on Master Folio Cheque",
    venueDefenseBreak:
      "Standard Destination Wedding Buyout Agreements make the primary contracting host jointly and severally liable for all master-folio incidentals unless individual room cash-only locks were requested in writing. Signed room-key registration cards and folio vouchers support both s.138 and Order XXXVII summary recovery.",
    recommendedAction:
      "Consolidate guest-signed KOTs, room folios, and damage inspection photos into a single certified ledger; issue a combined NI Act s.138 + Order XXXVII demand notice to the host and co-signatory.",
  },
  {
    id: "minimum-pax-cold-food",
    tabLabel: "Min-Pax & 'Cold Food' Excuse",
    headline: "Host Alleges 'Cold Food / Poor AC' Next Day to Evade Minimum Guarantee & Balance Cheque",
    disputedTicket: "₹4,00,000 – ₹12,00,000 Minimum Pax Guarantee Shortfall",
    modusOperandi:
      "The host guarantees 500 plates in the Banquet Event Order (BEO) but only 360 guests attend. To avoid paying the contracted minimum guarantee, the host stops payment on the post-event cheque and sends a belated WhatsApp message alleging 'cold starters' or 'delay in service'.",
    statutoryHook: "Contract Act s.74 (Liquidated Damages) + NI Act s.138",
    venueDefenseBreak:
      "Under Mobilox principles and commercial contract law, an uncorroborated quality complaint raised only AFTER event completion and cheque dishonour—with zero contemporaneous complaint in the event logbook—is treated as a moonshine defense. Pre-agreed minimum pax slabs reflect genuine pre-estimated fixed kitchen/staffing costs under s.74.",
    recommendedAction:
      "Document the absence of any written complaint during the event, exhibit the signed BEO minimum-guarantee clause, and dispatch a formal s.138 + Contract Act s.74 notice via Email, WhatsApp, and Speed Post RPAD.",
  },
];

export default function BanquetScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case "extra-pax-checkout":
        return <Users className="w-4 h-4" />;
      case "bar-liquor-corkage":
        return <Wine className="w-4 h-4" />;
      case "buyout-damage-extras":
        return <Building2 className="w-4 h-4" />;
      default:
        return <UtensilsCrossed className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {SCENARIOS.map((scenario) => (
          <button
            key={scenario.id}
            type="button"
            onClick={() => setActiveTab(scenario.id)}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === scenario.id
                ? "bg-[#DC2626] text-white shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            {getIcon(scenario.id)}
            {scenario.tabLabel}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
            {current.headline}
          </h3>
          <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200">
            {current.disputedTicket}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
              <AlertTriangle className="w-4 h-4" />
              Typical Host Excuse &amp; Modus Operandi
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.modusOperandi}
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              <ShieldAlert className="w-4 h-4" />
              Statutory Hook &amp; How Venue Proof Wins
            </div>
            <p className="text-xs font-bold text-slate-900 mb-1.5">
              {current.statutoryHook}
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.venueDefenseBreak}
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="block text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1">
              Immediate Venue GM / Controller Action
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

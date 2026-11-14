"use client";

import React, { useState } from "react";
import Link from "next/link";

interface HotelsTravelScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const HOTELS_TRAVEL_SCENARIOS: HotelsTravelScenario[] = [
  {
    id: "hotel-btc-ota",
    tabLabel: "Hotel BTC & OTA Payouts",
    badge: "Ticket ₹1.5L – ₹80L | Business Hotels & Resorts",
    title: "Aged Corporate 'Bill-to-Company' (BTC) City Ledgers & Frozen OTA Extranet Settlements",
    ticketBand: "₹1,50,000 – ₹80,00,000 corporate stay folios, crew contracts & OTA/bed-bank holds",
    statutoryTrigger: "Order XXXVII CPC + CGST GSTR-2B Acceptance Estoppel + MSMED s.15–18",
    bottleneck:
      "Corporate admin desks book 60–120 room-nights on email 'Bill-to-Company' (BTC) approvals, project engineers check out, and finance stalls City Ledger invoices for 150+ days claiming 'employee left' or 'F&B/laundry was unauthorized'—even after claiming Input Tax Credit in GSTR-2B. Meanwhile, independent properties lose 12%–20% of tariff collections to unilateral OTA extranet relocation penalties, declined Virtual Credit Cards (VCCs), and stalling B2B bed-banks.",
    legalMechanism:
      "Corporate BTC authorization emails paired with PMS Guest Registration Cards (GRCs), signed checkout folios, and GSTR-2B ITC reflection establish admitted written debt triable summarily under Order XXXVII CPC. Separately, Udyam-registered hotels qualify as Service MSMEs under MSMED Act Sections 15–18 to compel OTA platforms, aggregators, and corporate buyers to release withheld settlements with 3x RBI compound interest.",
    operationalSteps: [
      {
        step: "1. Lock PMS Folios, BTC Mails & GSTR-2B Credit Logs",
        detail:
          "Bundle corporate BTC approval emails, signed Guest Registration Cards, tax invoices, and GST portal GSTR-2B acceptance records (plus declined VCC/extranet reconciliation sheets) under BSA Section 63.",
      },
      {
        step: "2. Serve CFO-Targeted BTC / Extranet Demand Notice",
        detail:
          "Issue an advocate-vetted 15-day notice directly to the corporate Finance Controller, Directors, or OTA Nodal Desk estopping post-checkout F&B denials where GSTR-2B ITC has already been availed.",
      },
      {
        step: "3. File Order XXXVII Summary Suit or MSEFC Reference",
        detail:
          "Escalate unpaid BTC ledgers into Order XXXVII CPC summary suits or lodge Micro/Small hotel claims on MSME Samadhaan citing Section 43B(h) tax disallowance.",
      },
    ],
    recommendedLinks: [
      {
        label: "Hotel BTC Corporate Credit Default Guide",
        href: "/hotel-btc-bill-to-company-corporate-credit-account-default-recovery",
      },
      {
        label: "OTA & Bed-Bank Withheld Payout Recovery",
        href: "/ota-b2b-bedbank-withheld-hotel-payout-arbitrary-chargeback-recovery",
      },
      {
        label: "Hotel BTC & Travel Agent Notice Pack",
        href: "/templates/hotel-btc-and-iata-travel-agent-corporate-credit-legal-notice",
      },
    ],
  },
  {
    id: "iata-tmc-charter",
    tabLabel: "IATA TMC & Charter Credit",
    badge: "Ticket ₹5L – ₹2Cr+ | Weekly BSP & NSOP Risk",
    title: "IATA BSP Corporate Air-Ticket Defaults & NSOP Private Charter / Luxury Coach Arrears",
    ticketBand: "₹5 Lakh – ₹2 Cr+ flown corporate PNR manifests, LCC wallets & charter flying hours",
    statutoryTrigger: "Order XXXVII CPC + Order XXXVIII Rule 5 Attachment + DGCA Journey Tech-Logs",
    bottleneck:
      "Accredited IATA Travel Management Companies (TMCs) earn razor-thin 1%–3% service fees while fronting 100% of airfares to IATA Billing and Settlement Plan (BSP) every 7 days and pre-loading IndiGo/Air India LCC wallets. One defaulting startup or corporate house flying ₹35L–₹50L on 30-day credit threatens the agent's own IATA Bank Guarantee. NSOP jet/helicopter and luxury coach operators face identical post-season stalls over ATC holding hours and empty-leg ferry runs.",
    legalMechanism:
      "GDS 13-digit ticket numbers carrying 'Flown' coupon status, corporate travel-desk booking threads, and GST credit invoices constitute indisputable liquidated debt under Order XXXVII CPC—supporting urgent Order XXXVIII Rule 5 pre-judgment bank attachment against fleeing corporate debtors. For charter fleets, signed Charter Agreements and DGCA NSOP Journey/Tech Logbooks prove exact block-flying hours beyond post-flight disputes.",
    operationalSteps: [
      {
        step: "1. Extract GDS Flown-PNR Schedule or DGCA Tech-Logs",
        detail:
          "Compile a chronological manifest listing PNR, 13-digit ticket number, passenger name, sector, 'Flown' status, and BSP remittance date—or signed NSOP flight/coach duty slips.",
      },
      {
        step: "2. Issue 7-Day Urgent BSP Indemnity & Asset-Freeze Notice",
        detail:
          "Serve corporate CFOs and personal guarantors with an immediate 7-day demand flagging Order XXXVIII Rule 5 bank attachment, MSMED s.43B(h), and Section 138 security-cheque prosecution.",
      },
      {
        step: "3. Move Commercial Court for Summary Attachment & Decree",
        detail:
          "File Order XXXVII Commercial Suit / NI Act s.138 complaint with PNR flown records or charter tech logs before corporate liquidity is siphoned elsewhere.",
      },
    ],
    recommendedLinks: [
      {
        label: "IATA TMC Corporate Flight Credit Recovery",
        href: "/iata-corporate-travel-agent-tmc-flight-ticket-credit-default-recovery",
      },
      {
        label: "NSOP Air-Charter & Luxury Coach Recovery",
        href: "/charter-flight-luxury-coach-yacht-corporate-hire-payment-recovery",
      },
      {
        label: "Order XXXVII Summary Suit Law Guide",
        href: "/law/order-37-summary-suit-money-recovery",
      },
    ],
  },
  {
    id: "banquets-weddings-mice",
    tabLabel: "Banquets, Weddings & MICE",
    badge: "Ticket ₹3L – ₹1.5Cr | s.138 & s.74 Attrition",
    title: "Stopped Wedding Checkout Cheques & Last-Minute MICE Room-Block Cancellations",
    ticketBand: "₹3 Lakh – ₹1.5 Cr+ extra-pax wedding balances, bar tabs & corporate offsite blocks",
    statutoryTrigger: "NI Act s.138/s.143A (Stop Payment) + Contract Act s.74 Perishable Inventory",
    bottleneck:
      "During luxury destination weddings at resorts or city banquets, hosts beg for grace when extra 150 guests, late-night bar tabs, and suite extensions push bills up by ₹10L–₹25L—handing a balance cheque at 3 AM checkout and marking 'Stop Payment' next morning citing 'cold food'. Separately, corporates block 100–200 convention rooms during peak dates and cancel 7–10 days before the offsite demanding 100% penalty waivers.",
    legalMechanism:
      "Under Section 138 read with Section 139 NI Act (M.M.T.C. v. Medchl Chemicals), 'Stop Payment' carries full criminal liability and up to 20% interim compensation under s.143A unless the host proves zero debt existed—which signed banquet captain extra-pax slips, bar POS tabs, and CCTV counts destroy. For MICE cancellations, hotel room-nights are time-perishable inventory; Contract Act s.74 sliding-scale attrition clauses prevail when audited PMS logs confirm rooms remained unsold.",
    operationalSteps: [
      {
        step: "1. Preserve Captain Pax Slips, POS Tabs & Unsold PMS Logs",
        detail:
          "Lock countersigned banquet extra-plate dockets, liquor KOTs, CCTV plate/wristband counts, or PMS inventory audits proving turned-away wedding/leisure inquiries.",
      },
      {
        step: "2. Dispatch 30-Day s.138 Statutory Demand or Attrition Claim",
        detail:
          "Serve mandatory NI Act s.138 notice within 30 days of 'Stop Payment' bank memo (15-day cure window), or issue Contract Act s.74 perishable-inventory demand on MICE cancellations.",
      },
      {
        step: "3. Prosecute Before Magistrate (s.143A) or Commercial Court",
        detail:
          "Move for 20% interim compensation under Section 143A on dishonoured banquet cheques or enforce MICE sliding-scale attrition fees via Order XXXVII.",
      },
    ],
    recommendedLinks: [
      {
        label: "Wedding Banquet Checkout Cheque Bounce Guide",
        href: "/banquet-hall-destination-wedding-post-event-balance-cheque-bounce",
      },
      {
        label: "Corporate MICE & Offsite Attrition Recovery",
        href: "/mice-corporate-offsite-conference-attrition-last-minute-cancellation-recovery",
      },
      {
        label: "Stop-Payment Cheque Bounce Law",
        href: "/stop-payment-cheque-bounce-case",
      },
    ],
  },
  {
    id: "catering-dmc",
    tabLabel: "Industrial Canteens & DMCs",
    badge: "Ticket ₹1.5L – ₹75L | s.43B(h) & BNS s.336",
    title: "Factory/Hostel Mess Bill Withholding & B2B DMC Fake UTR Remittance Scams",
    ticketBand: "₹1.5 Lakh – ₹75 Lakh institutional kitchen ledgers & inbound/outbound land packages",
    statutoryTrigger: "MSMED s.15–18 / IT Act s.43B(h) + BNS 2023 s.318 & s.336/340 Forgery",
    bottleneck:
      "Industrial canteen and university hostel caterers pay daily cash for vegetables, dairy, LPG, and kitchen staff while factories or colleges stall 3–4 months of thali bills or impose retroactive un-sampled 'hygiene/taste' penalties. In parallel, Destination Management Companies (DMCs) across Goa, Kerala, Rajasthan, Kashmir, and overseas hubs get ambushed on Friday evenings by retail travel agents sending edited NEFT/SWIFT UTR PDFs as tourists land at the airport.",
    legalMechanism:
      "Udyam-registered institutional caterers invoke MSMED Act s.15–18 (3x RBI Bank Rate monthly compound interest) and Section 43B(h) Income Tax disallowance against corporate plants and trusts, using biometric/coupon meal counts to defeat backdated un-sampled quality fines. For DMCs hit by doctored UTR/SWIFT screenshots, pairing civil recovery with BNS 2023 Sections 318 (cheating) and 336/340 (forgery of electronic payment records—up to 7 years) triggers rapid settlement.",
    operationalSteps: [
      {
        step: "1. Lock Biometric Meal Logs or Forensic UTR Metadata",
        detail:
          "Export daily cafeteria coupon/biometric counts and FSSAI inspection logs with zero contemporaneous complaints—or obtain bank non-receipt verification on disputed UTR/SWIFT PDFs.",
      },
      {
        step: "2. Serve s.43B(h) Tax Notice or Pre-FIR BNS Forgery Notice",
        detail:
          "Dispatch advocate notices warning factory/college CFOs of Form 3CD disallowance, or putting defaulting retail agents and SHO/EOW on notice for BNS s.336/340 electronic forgery.",
      },
      {
        step: "3. File MSEFC Claim or Criminal-Cum-Civil Recovery Suit",
        detail:
          "Realize undisputed canteen bills through MSEFC conciliation/arbitration (with 75% buyer s.19 appeal pre-deposit) and pursue s.138/BNS remedies against fraudulent travel agents.",
      },
    ],
    recommendedLinks: [
      {
        label: "Industrial Canteen & Hostel Mess Bill Recovery",
        href: "/industrial-canteen-corporate-cafeteria-institutional-caterer-bill-recovery",
      },
      {
        label: "B2B DMC & Tour Operator Default Recovery",
        href: "/b2b-dmc-destination-management-company-tour-operator-default-recovery",
      },
      {
        label: "Section 43B(h) MSME Payment Rule Guide",
        href: "/law/section-43bh-msme-payment-rule",
      },
    ],
  },
];

export default function HotelsTravelHubScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(HOTELS_TRAVEL_SCENARIOS[0].id);
  const current =
    HOTELS_TRAVEL_SCENARIOS.find((s) => s.id === activeTab) || HOTELS_TRAVEL_SCENARIOS[0];

  return (
    <div className="w-full space-y-5">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Hospitality, banquet and corporate travel creditor recovery playbooks"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
      >
        {HOTELS_TRAVEL_SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-3 rounded-xl text-left transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                  isSelected ? "text-red-100" : "text-slate-400"
                }`}
              >
                {scenario.badge.split("|")[0]?.trim()}
              </span>
              <span className="block text-xs sm:text-sm font-extrabold leading-snug">
                {scenario.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="space-y-1.5">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
              {current.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shrink-0 md:max-w-xs">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Primary Statutory Lever
            </p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">{current.statutoryTrigger}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
              Creditor Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
              Statutory Counter-Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalMechanism}</p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Institutional Execution Protocol ({current.ticketBand})
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5"
              >
                <p className="text-xs font-extrabold text-[#DC2626]">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Deep-Dive Playbooks:
          </span>
          {current.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold text-[#DC2626] bg-white hover:bg-red-50 border border-red-200 rounded-lg px-3 py-1.5 transition-colors"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

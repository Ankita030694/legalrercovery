"use client";

import React, { useState } from "react";
import Link from "next/link";

interface PropertySectorTrack {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  primaryStatutes: string;
  headlineSummary: string;
  workflowSteps: { step: string; detail: string }[];
  complianceGuardrail: string;
  recommendedLinks: { label: string; href: string }[];
}

const PROPERTY_SECTOR_TRACKS: PropertySectorTrack[] = [
  {
    id: "rera-promoters",
    tabLabel: "RERA Promoters & JDAs",
    badge: "₹2L – ₹5Cr+ | Allottee & JDA Defaults",
    title: "Builder Milestone Defaults, Post-OC Holding & JDA Revenue-Share Recovery",
    ticketBand: "Construction-linked demands, IFMS/CAM & JDA escrow audits",
    primaryStatutes:
      "RERA 2016 s.19(6), s.19(7), s.19(10), s.11(5) & s.4(2)(l)(D); Commercial Courts Act s.2(1)(c)(vii)/(xi); Arbitration Act s.9",
    headlineSummary:
      "Enforce allottee payment discipline under Section 19(6)–(7) at SBI MCLR + 2% interest, compel post-OC possession within 2 months under Section 19(10), execute RERA-proof Section 11(5) cancellations, and freeze diverted JDA inventory.",
    workflowSteps: [
      {
        step: "1. Architect Stage Certificate + Demand Audit",
        detail:
          "Pair every construction-linked invoice with the certified Architect Stage Report, tax invoice, and RERA s.19(7) SBI MCLR + 2% interest ledger before dispatching a formal cure notice.",
      },
      {
        step: "2. Registered Cure-cum-Cancellation Window (s.11(5))",
        detail:
          "Serve a strict Agreement-aligned Speed Post RPAD + Email cure notice before terminating any allotment—preventing MahaRERA/UP-RERA/HRERA restoration orders and 10% earnest-money forfeiture reversals.",
      },
      {
        step: "3. Post-OC s.19(10) Holding & JDA s.9 Injunctions",
        detail:
          "Trigger bulk Section 19(10) notices 60 days post-Offer of Possession for IFMS/CAM arrears, or move Section 9 Commercial Court petitions to ring-fence JDA unsold units.",
      },
    ],
    complianceGuardrail:
      "Informal CRM emails or WhatsApp reminders without formal Agreement-prescribed registered cure notices cause builders to lose otherwise open-and-shut default cases before State RERA Authorities.",
    recommendedLinks: [
      {
        label: "RERA s.19(6)–(7) & s.11(5) Builder Guide",
        href: "/rera-section-19-builder-recovery-from-defaulting-homebuyer-allottee",
      },
      {
        label: "Post-OC s.19(10) Maintenance & IFMS",
        href: "/builder-society-handover-ifms-corpus-maintenance-arrears-allottee-recovery",
      },
      {
        label: "JDA Revenue-Share & s.9 Inventory Freeze",
        href: "/joint-development-agreement-jda-revenue-share-default-recovery",
      },
    ],
  },
  {
    id: "commercial-malls",
    tabLabel: "Grade-A Offices & Malls",
    badge: "Lock-In, MMG, CAM & 194-I TDS",
    title: "Commercial Lease Lock-In Breaches, Mall CAM/MMG & TDS 194-I Defaults",
    ticketBand: "₹3L – ₹5Cr+ Corporate Office, High-Street & Mall Arrears",
    primaryStatutes:
      "Transfer of Property Act s.106, Contract Act s.74, Commercial Courts s.2(1)(c)(vii), Income Tax Act s.194-I/205/276B, Vidya Drolia (SC)",
    headlineSummary:
      "Recover unexpired lock-in vacancy losses, unamortized landlord CapEx fit-outs, mall Minimum Monthly Guarantee (MMG) shortfalls, central HVAC/CAM arrears, and un-deposited 10% Section 194-I rent TDS.",
    workflowSteps: [
      {
        step: "1. Section 106 Termination + Vidya Drolia Arbitration",
        detail:
          "Serve an ironclad 15-day Section 106 TPA notice terminating defaulting commercial tenancies, claiming penal holdover mesne profits (CPC Order XX Rule 12) and invoking post-Vidya Drolia commercial arbitration.",
      },
      {
        step: "2. Lock-In CapEx & Vacancy Loss Ledger",
        detail:
          "Quantify actual vacant months, unamortized custom fit-out spend, brokerage, and rent-free period clawbacks to survive Section 74 mitigation scrutiny under Tower Vision / Deepak Chopra norms.",
      },
      {
        step: "3. Mall CAM / POS Audit & CIT (TDS) Notice",
        detail:
          "Enforce tripartite CAM/chiller covenants on vacant investor units, audit off-POS UPI QR diversions in food courts, and issue Section 271C/276B prosecution warnings for missing Form 26AS TDS.",
      },
    ],
    complianceGuardrail:
      "Never treat unexpired lock-in rent as an automatic windfall if the premises were re-let immediately at higher rent; itemize actual re-leasing lag, CapEx amortization, and rent-free clawbacks upfront.",
    recommendedLinks: [
      {
        label: "Commercial Lock-In & Fit-Out Recovery",
        href: "/commercial-lease-lock-in-period-breach-unexpired-rent-recovery",
      },
      {
        label: "Section 106 TPA & Vidya Drolia Guide",
        href: "/commercial-property-section-106-termination-mesne-profits-suit-guide",
      },
      {
        label: "194-I TDS Deducted Not Deposited Action",
        href: "/commercial-tenant-deducted-tds-194i-not-deposited-form-26as-recovery",
      },
    ],
  },
  {
    id: "warehouses-industrial",
    tabLabel: "Warehouses & Sheds",
    badge: "Order XV-A CPC & Dilapidation",
    title: "Grade-A Warehouse Rent, VDF Floor Damage, DISCOM & PCB Cleanup",
    ticketBand: "₹5L – ₹3Cr+ 3PL Logistics Parks, Cold-Shells & Factory Sheds",
    primaryStatutes:
      "CPC Order XV-A (Deposit Pendente Lite), TPA s.106 & s.108(m) Restoration Duty, Commercial Courts Act s.2(1)(c)(vii)",
    headlineSummary:
      "Prevent tenants from squatting rent-free during multi-year litigation using Order XV-A CPC court-deposit motions, while recovering laser-screeded VDF/FM2 floor damage, HT power dues, and hazardous waste disposal.",
    workflowSteps: [
      {
        step: "1. Joint Dilapidation Survey & s.108(m) Notice",
        detail:
          "Document FM2/VDF floor racking-bolt gouges, dock-leveler damage, unpaid DISCOM HT arrears, and abandoned chemical drums with timestamped BSA 2023 s.63 inspection logs.",
      },
      {
        step: "2. Order XV-A CPC Rent Deposit Demand",
        detail:
          "Frame lease termination notices to lay the foundation for an Order XV-A application compelling the defaulting occupier to deposit undisputed monthly market rent in court or lose its defense.",
      },
      {
        step: "3. Security Deposit Set-Off & Mesne Profits",
        detail:
          "Adjust held deposits strictly against itemized restoration bills and utility arrears, pursuing Commercial Court summary/mesne profit decrees for the balance shortfall.",
      },
    ],
    complianceGuardrail:
      "Do not allow a defaulting factory lessee to surrender keys without a signed Joint Handover & Dilapidation Snag Sheet, or DISCOM/Pollution Board liabilities will remain attached to the industrial plot.",
    recommendedLinks: [
      {
        label: "Warehouse Rent, VDF Floor & PCB Recovery",
        href: "/industrial-warehouse-3pl-shed-lease-rent-dilapidation-recovery",
      },
      {
        label: "Section 106 Termination Notice Template",
        href: "/templates/commercial-lease-lock-in-breach-section-106-termination-notice",
      },
      {
        label: "Property Damage Recovery Notice",
        href: "/send-a-legal-notice/recover-money-from-tenant-who-damaged-property",
      },
    ],
  },
  {
    id: "coworking-flex",
    tabLabel: "Co-Working & Flex Offices",
    badge: "Easements Act s.52–64 License",
    title: "Co-Working Access-Card Suspension, License Revocation & Enterprise CapEx",
    ticketBand: "₹1L – ₹1.5Cr Managed-Office Seat Lock-Ins & Bespoke Builds",
    primaryStatutes:
      "Indian Easements Act 1882 s.52–64 (Revocable License), Contract Act s.74, Order XXXVII CPC, BSA 2023 s.63",
    headlineSummary:
      "Co-working and managed-office contracts are B2B service/license agreements—not Rent-Control tenancies. Execute lawful license revocation, RFID/biometric suspension, abandoned-asset inventory notices, and bespoke CapEx recovery.",
    workflowSteps: [
      {
        step: "1. License-Mode Cure Notice (Easements s.52–64)",
        detail:
          "Notify the defaulting corporate member that possession remains exclusively with the flex-space operator and unpaid GST invoices trigger 7-to-15 day license revocation.",
      },
      {
        step: "2. Lawful RFID Access Suspension & Cabin Sealing",
        detail:
          "Upon expiry of the contractual cure window, suspend biometric/keycard access cleanly without force and issue a witnessed video-logged Abandoned Equipment Inventory Notice.",
      },
      {
        step: "3. Enterprise Seat Lock-In & CapEx Summary Suit",
        detail:
          "Recover unamortized custom glass-partition/IT CapEx and unpaid seat fees via Order XXXVII CPC Summary Suits backed by GST e-invoices and BSA s.63 logs.",
      },
    ],
    complianceGuardrail:
      "Avoid drafting flex-office contracts with 'exclusive possession' or 'demise' lease language, which invites tenants to claim statutory tenancy protections and stall cabin reclaim.",
    recommendedLinks: [
      {
        label: "Co-Working & Managed-Office Playbook",
        href: "/coworking-managed-office-enterprise-seat-lock-in-default-recovery",
      },
      {
        label: "Mall & IT Park CAM/HVAC Arrears",
        href: "/commercial-it-park-mall-cam-common-area-maintenance-arrears-recovery",
      },
      {
        label: "Commercial Lease & License Template",
        href: "/templates/commercial-lease-lock-in-breach-section-106-termination-notice",
      },
    ],
  },
];

export default function BuildersHubScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(PROPERTY_SECTOR_TRACKS[0].id);
  const current =
    PROPERTY_SECTOR_TRACKS.find((t) => t.id === activeTabId) ?? PROPERTY_SECTOR_TRACKS[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div
        role="tablist"
        aria-label="Real estate, commercial leasing and co-working recovery sectors"
        className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6"
      >
        {PROPERTY_SECTOR_TRACKS.map((track) => {
          const isActive = track.id === activeTabId;
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(track.id)}
              className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left border cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <span className="block leading-tight">{track.tabLabel}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <span className="px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold">
            {current.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {current.ticketBand}
          </span>
        </div>

        <div>
          <p className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
            {current.title}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            {current.headlineSummary}
          </p>
          <p className="text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg px-3 py-2">
            <strong className="text-slate-900">Controlling Authorities:</strong>{" "}
            {current.primaryStatutes}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {current.workflowSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
            >
              <p className="text-xs font-extrabold text-[#DC2626] mb-1.5">{item.step}</p>
              <p className="text-xs text-slate-700 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 leading-relaxed">
          <strong className="font-extrabold uppercase tracking-wider text-amber-800 block mb-1">
            Creditor Risk Guardrail
          </strong>
          {current.complianceGuardrail}
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-slate-500 mr-1">Deep-Dive Guides:</span>
          {current.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#DC2626] text-white text-xs font-semibold transition-colors"
            >
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

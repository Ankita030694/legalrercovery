"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

interface BtcScenario {
  id: string;
  tabLabel: string;
  headline: string;
  ticketExposure: string;
  corporateExcuse: string;
  statutoryRebuttal: string;
  evidentiaryAnchor: string;
  recommendedAction: string;
  governingLaw: string;
}

const BTC_SCENARIOS: BtcScenario[] = [
  {
    id: "unsigned-folio-exited-employee",
    tabLabel: "1. Unsigned Folio / Exited Employee",
    headline:
      "Guest Checked Out Without Signing Folio or Corporate HR Claims 'Employee Left the Company'",
    ticketExposure: "₹2.40 Lakh – ₹14.50 Lakh (Sales Team / Executive Stays)",
    corporateExcuse:
      "The corporate accounts payable desk refuses to clear 45 room-nights, claiming the departing guest left at 5:30 AM for an early flight without signing the final PMS tax invoice, or asserting that the employee resigned last month without settling travel advances.",
    statutoryRebuttal:
      "Under Section 187 and Section 226 of the Indian Contract Act, 1872, a booking triggered by an official corporate travel desk email (@company.com) binds the corporate principal directly. An internal employment dispute or early checkout does not extinguish the company's primary liability once room occupancy is proved via signed Guest Registration Cards (GRC) and Form-C / ID logs.",
    evidentiaryAnchor:
      "Corporate BTC Authorization Email + Signed Check-In GRC Card + Keycard Door-Lock Access Telemetry + GSTR-2B B2B Invoice Reflection (BSA 2023 s.63 Certified).",
    recommendedAction:
      "Serve a 15-Day Order XXXVII Summary Suit Demand Notice on the Company CFO & Directors attaching the BTC authorization email and GSTR-2B ITC acceptance proof.",
    governingLaw:
      "Indian Contract Act s.187/s.226 (Principal Bound by Authorized Travel Desk Acts) + CGST Act s.16(2)(b) (GSTR-2B/3B ITC Availment Estops Denial of Service Receipt).",
  },
  {
    id: "disputed-fnb-laundry-extras",
    tabLabel: "2. Disputed F&B, Laundry & Minibar",
    headline:
      "Corporate Travel Desk Withholding Entire ₹9.8L BTC Invoice Over ₹38,000 of F&B / Laundry Extras",
    ticketExposure: "₹4.50 Lakh – ₹22.00 Lakh (Multi-Guest Corporate Ledger)",
    corporateExcuse:
      "Corporate finance freezes the entire 60-day City-Ledger batch because the BTC email stated 'Room + Breakfast (CP Plan) on BTC; extras direct', yet the guest walked out without paying ₹38,000 of in-room dining, laundry, and airport transfers.",
    statutoryRebuttal:
      "First, under Supreme Court principles on severable liquidated debt, a debtor cannot withhold ₹9.42 Lakh of undisputed room tariff to litigate a ₹38,000 ancillary line item. Second, where the Corporate BTC Empanelment Letter guarantees 'all unsettled guest incidentals upon express checkout', the company remains surety/co-obligor under Section 126/128 of the Contract Act.",
    evidentiaryAnchor:
      "Split PMS Folio Schedule (Part-A Undisputed Room + GST vs Part-B Signed POS KOTs / Airport Transfer Logs) + Corporate Rate Contract Incidental Guarantee Clause.",
    recommendedAction:
      "Issue a Severable Demand Notice demanding immediate RTGS clearance of the 96% undisputed room tariff within 7 days while invoking the corporate guarantee on POS-signed KOTs.",
    governingLaw:
      "CPC Order XII Rule 6 (Judgment on Admissions for Undisputed Room Tariff) + MSMED Act s.15–16 (for Udyam-registered hotels/serviced apartments).",
  },
  {
    id: "epc-project-crew-long-stay",
    tabLabel: "3. EPC / IT Project Crew Long-Stay",
    headline:
      "EPC Contractor or IT Consulting Firm Defaulted on 120-Day Extended-Stay Project Crew Folios",
    ticketExposure: "₹12.00 Lakh – ₹85.00 Lakh (80–300 Room-Nights Across 3–6 Months)",
    corporateExcuse:
      "An infrastructure EPC contractor, wind/solar developer, or IT implementation firm housed 18 project engineers at your business hotel or corporate serviced apartment for 4 months, paid Month-1 to build trust, and now blames 'employer RA-bill delay' to stall ₹28 Lakh.",
    statutoryRebuttal:
      "Hotel accommodation contracts are independent bilateral commercial contracts—never 'back-to-back' with the corporate guest's downstream project client. Furthermore, if thecorporate debtor's aggregate unpaid City-Ledger + contractual interest crosses ₹3 Lakh (Commercial Courts Act) or ₹1 Crore (IBC Section 8), summary attachment and insolvency triggers apply.",
    evidentiaryAnchor:
      "Purchase Order / Long-Stay Rate Letter + Monthly Consolidated City-Ledger Statements + Biometric/Register Guest Occupancy Logs + Form 26AS Section 194-I / 194C TDS Credits.",
    recommendedAction:
      "Enforce immediate room-key lock-out after 48-hour cure notice for active rooms + Serve Section 12A Commercial Court / Order XXXVIII Rule 5 Bank-Attachment Notice (or IBC Form 3 if >= ₹1 Cr).",
    governingLaw:
      "Limitation Act s.18 (TDS Deduction u/s 194-I/194C in Form 26AS = Written Debt Acknowledgment) + Commercial Courts Act s.2(1)(c)(vii)/(xviii) + IBC s.8.",
  },
  {
    id: "airline-layover-tmc-contract",
    tabLabel: "4. Airline Crew Layover & TMC Defaults",
    headline:
      "Scheduled/Charter Airline Crew Layover Contract Arrears or Defaulting B2B Travel Consolidator",
    ticketExposure: "₹18.00 Lakh – ₹1.50 Crore+ (Daily Guaranteed Crew Room Blocks)",
    corporateExcuse:
      "An airline operator, charter NSOP company, or unaccredited B2B travel consolidator contracted 15 rooms/day on a 30-day credit cycle for cockpit and cabin crew layovers, accumulated 4 months of arrears, and threatens to shift crew to a rival airport hotel if pressed.",
    statutoryRebuttal:
      "Airline crew layover contracts contain 'Minimum Guaranteed Room-Night (MGRN)' commitments where perishable room inventory is held exclusively for crew rotations. Under Section 73/74 of the Contract Act, both occupied crew folios and unutilized minimum-guaranteed room blocks are recoverable as liquidated commercial debt.",
    evidentiaryAnchor:
      "Signed Airline/TMC Crew Accommodation Agreement + Daily Crew Manifest Sign-In Sheets + Monthly Tax Invoices + PDC / Security Deposit Bank Guarantee.",
    recommendedAction:
      "Invoke Security Deposit / Bank Guarantee set-off + Serve Simultaneous Section 138 NI Act Notice (on security cheques) & Order XXXVII Summary Suit / IBC Section 8 Demand Notice.",
    governingLaw:
      "CPC Order XXXVII Rule 1(2) (Written Crew Layover Contract) + NI Act s.138/s.141 (Director Liability on Dishonoured Settlement Cheques) + Contract Act s.74.",
  },
];

export default function HotelBtcScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(BTC_SCENARIOS[0].id);
  const current = BTC_SCENARIOS.find((s) => s.id === activeTab) || BTC_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Selector Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 mb-6">
        {BTC_SCENARIOS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
              activeTab === item.id
                ? "bg-[#DC2626] text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {item.tabLabel}
          </button>
        ))}
      </div>

      {/* Active Scenario Detail Panel */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-7 border border-slate-800 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-800/80">
              Hospitality Credit Failure Mode
            </span>
            <h3 className="text-base sm:text-xl font-bold text-white mt-2 leading-tight">
              {current.headline}
            </h3>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-slate-400 block">Typical City-Ledger Exposure</span>
            <span className="text-sm sm:text-base font-black text-amber-400">
              {current.ticketExposure}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4 shrink-0" /> Corporate AP / Travel Desk Excuse
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {current.corporateExcuse}
            </p>
          </div>

          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" /> Statutory Rebuttal & Creditor Leverage
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.statutoryRebuttal}
            </p>
          </div>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/80 mb-5">
          <p className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-1">
            Mandatory PMS & Statutory Evidence Bundle:
          </p>
          <p className="text-xs sm:text-sm text-emerald-300 font-medium leading-relaxed">
            {current.evidentiaryAnchor}
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-950/60 to-slate-800/90 rounded-xl p-4 border border-red-800/50 mb-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                Governing Statutory Hook
              </p>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed">
                {current.governingLaw}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Financial Controller Action:</strong>{" "}
            {current.recommendedAction}
          </div>
          <a
            href="/user/new-recovery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            Serve BTC Legal Notice (₹999) <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

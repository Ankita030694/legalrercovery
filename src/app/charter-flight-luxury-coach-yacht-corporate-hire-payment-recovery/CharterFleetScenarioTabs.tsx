"use client";

import React, { useState } from "react";
import { ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

interface CharterScenario {
  id: string;
  tabLabel: string;
  headline: string;
  ticketExposure: string;
  hirerExcuse: string;
  statutoryRebuttal: string;
  evidentiaryAnchor: string;
  recommendedAction: string;
  governingLaw: string;
}

const CHARTER_SCENARIOS: CharterScenario[] = [
  {
    id: "atc-holding-empty-leg",
    tabLabel: "1. ATC Holding & Empty-Leg Ferry",
    headline:
      "Corporate Hirer Disputes Post-Flight ATC Holding Hours, Weather Diversions & Empty-Leg Positioning Charges",
    ticketExposure: "₹12.00 Lakh – ₹65.00 Lakh (Twin-Engine Jet / Turboprop Charter)",
    hirerExcuse:
      "The corporate travel desk or UHNI family office paid the 50% advance for a 4-hour estimated block, but refuses the ₹18.50 Lakh post-flight reconciliation invoice claiming 'we only agreed to pay for passenger-on-board flying time, not empty-leg ferry or Mumbai ATC holding delays.'",
    statutoryRebuttal:
      "Under NSOP Charter Agreements and DGCA CAR Section 3 Series C Part III, block-hour billing is governed by chocks-off to chocks-on (or rotor-turning) time recorded in the statutory Flight Tech-Log, plus pre-agreed positioning/repositioning ferry legs and ATC/weather diversion contingencies. Unilateral rejection of actual block hours recorded by ATC and Commander logs is a moonshine defense under Mobilox Innovations.",
    evidentiaryAnchor:
      "Signed Charter Confirmation Quote + DGCA Flight Logbook / Tech-Log (Chocks-Off/On) + AAI ATC Flight Plan & Landing/Parking Receipts + BSA 2023 s.63 Certificate.",
    recommendedAction:
      "Serve a 15-Day Order XXXVII CPC Summary Suit Demand Notice annexing the signed Tech-Log extract, AAI disbursement vouchers, and GST Tax Invoice.",
    governingLaw:
      "CPC Order XXXVII Rule 1(2) (Written Charter Contract + Liquidated Block-Hour Rate) + Indian Contract Act s.73 (Actual Operational Disbursements).",
  },
  {
    id: "election-campaign-heli",
    tabLabel: "2. Election Campaign Helicopter",
    headline:
      "Political Campaign Committee or Candidate Manager Stalls Balance Payment After Polling Concludes",
    ticketExposure: "₹25.00 Lakh – ₹2.00 Crore (Multi-Week Helicopter Campaign Block)",
    hirerExcuse:
      "A state election campaign coordinator or party-affiliated event agency contracted a Bell 407 / AW109 helicopter on a minimum-guaranteed-hours (MGH) retainer, paid the initial mobilization deposit, and post-polling stops answering calls or disputes standby crew halts and helipad security fees.",
    statutoryRebuttal:
      "Under Election Commission of India (ECI) expenditure accounting norms, all helicopter charter disbursements must be settled through verifiable banking channels against GST invoices. Furthermore, where the campaign coordinator or corporate guarantor issued post-dated cheques (PDCs) for the balance flying hours and standby crew night-halts, dishonour triggers criminal liability under Section 138 NI Act and immediate Section 143A interim compensation.",
    evidentiaryAnchor:
      "Signed Helicopter Charter Agreement + DGCA Daily Flying Returns + ECI / District Magistrate Helipad Landing Permissions + Passenger Manifests + Dishonoured PDCs.",
    recommendedAction:
      "Present security/balance PDCs immediately; upon bounce, issue a 15-day Section 138 NI Act Statutory Notice alongside a parallel Commercial Court Section 12A / Order XXXVIII Rule 5 attachment demand.",
    governingLaw:
      "NI Act s.138 & s.143A (20% Interim Deposit) + Commercial Courts Act s.2(1)(c)(i) & s.12A + Contract Act s.74 (Minimum Guaranteed Hours).",
  },
  {
    id: "chardham-wedding-coach",
    tabLabel: "3. Wedding & Chardham Coach Fleet",
    headline:
      "Tour Wholesaler or Wedding Planner Defaults on 12-Coach Luxury Volvo / Mercedes Sprinter Fleet Hire",
    ticketExposure: "₹8.50 Lakh – ₹48.00 Lakh (Multi-Coach Pilgrimage / Destination Wedding)",
    hirerExcuse:
      "A destination wedding planner or Chardham/corporate offsite DMC hired 10–15 luxury Volvo/Scania coaches for 8 days, collected full transport fees from guests/corporate sponsors, and then withholds ₹14.20 Lakh citing 'delayed guest pickups' or 'AC complaint in one bus' on the final day.",
    statutoryRebuttal:
      "Under Indian Contract Act Section 73 and settled Commercial Court jurisprudence, a hirer who utilizes the entire fleet across the full itinerary without contemporaneous written breakdown substitution requests cannot withhold 100% of the fleet hire balance over an unverified post-trip excuse. GPS telemetry, Fastag toll timestamps, and state border tax receipts conclusively establish full fleet deployment.",
    evidentiaryAnchor:
      "Fleet Hire Purchase Order / WhatsApp Rate Confirmation + GPS Route Telemetry + NHAI Fastag Toll Logs + State Permit/Border Tax Challans + Driver Duty Slips.",
    recommendedAction:
      "If registered under Udyam (MSME), file MSME Samadhaan Reference u/s 18 claiming 3x RBI Bank Rate compound interest + serve Section 43B(h) tax-disallowance intimation to the corporate/DMC auditor.",
    governingLaw:
      "MSMED Act 2006 s.15–18 (3x RBI Compound Interest) + Income Tax Act s.43B(h) + BSA 2023 s.63 (GPS & Fastag Electronic Logs).",
  },
  {
    id: "yacht-cruise-corporate-offsite",
    tabLabel: "4. Corporate Yacht & Marine Charter",
    headline:
      "MICE Event Agency Cancels Last-Minute or Disputes Extra Mooring, Fuel & Crew Overtime on Yacht Hire",
    ticketExposure: "₹6.00 Lakh – ₹35.00 Lakh (Goa / Mumbai Corporate Yacht & Catamaran Hire)",
    hirerExcuse:
      "A corporate MICE agency booked a luxury motor yacht for a dealer-incentive gala in Goa/Mumbai, cancelled 48 hours before embarkation or extended the offshore party by 5 hours, and now demands a refund or refuses overtime, extra marine fuel, and port-clearance surcharges.",
    statutoryRebuttal:
      "Maritime and luxury vessel charters involve non-recoverable slot reservations, port-trust berthing fees, and provisioned catering/crew deployment. Under Section 74 of the Contract Act, pre-agreed 48-hour forfeiture slabs and hourly overtime tariffs in the signed Charter Party / Booking Confirmation are enforceable liquidated damages.",
    evidentiaryAnchor:
      "Signed Yacht Charter Party / Booking Terms + Port Trust / Coast Guard Departure Clearance + Marine Fuel Bunker Receipts + Guest Embarkation Manifest.",
    recommendedAction:
      "Issue a 15-Day Commercial Advocate Demand Notice enforcing the liquidated cancellation/overtime slab and GSTR-2B B2B invoice acceptance estoppel.",
    governingLaw:
      "Commercial Courts Act s.2(1)(c)(iii) (Admiralty / Maritime & Carriage Disputes) + Indian Contract Act s.74 + CGST Act s.16(2)(b).",
  },
];

export default function CharterFleetScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(CHARTER_SCENARIOS[0].id);
  const current = CHARTER_SCENARIOS.find((s) => s.id === activeTab) || CHARTER_SCENARIOS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Tab Header */}
      <div className="bg-slate-900 p-2 sm:p-3 flex flex-wrap gap-2">
        {CHARTER_SCENARIOS.map((scenario) => {
          const isActive = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all text-left ${
                isActive
                  ? "bg-[#DC2626] text-white shadow-md"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {scenario.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-5 sm:p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
            {current.headline}
          </h3>
          <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#DC2626] border border-red-200">
            Exposure: {current.ticketExposure}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Hirer Excuse */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              Common Hirer / Agency Excuse
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.hirerExcuse}
            </p>
          </div>

          {/* Statutory Rebuttal */}
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              Creditor Statutory Rebuttal
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryRebuttal}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Mandatory Evidentiary Anchor (BSA 2023 s.63)
            </p>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              {current.evidentiaryAnchor}
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-red-400 mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" />
              Immediate Enforcement Action
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-2">
              {current.recommendedAction}
            </p>
            <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
              <ArrowRight className="w-3 h-3 text-red-400 shrink-0" />
              <span>{current.governingLaw}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

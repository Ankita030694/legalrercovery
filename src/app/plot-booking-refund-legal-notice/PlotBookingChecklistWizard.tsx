"use client";

import React, { useState } from "react";
import PlotBookingNoticeCTA from "./PlotBookingNoticeCTA";

interface ChecklistItem {
  id: string;
  title: string;
  statute: string;
  detail: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "chk-receipts",
    title: "Booking Receipts, RTGS/NEFT UTRs & Encashed Cheques",
    statute: "Section 13(1), RERA 2016 & Section 55(6)(b), TPA 1882",
    detail:
      "Gather every token receipt, provisional allotment letter, and bank statement showing UTR numbers. Under Section 55(6)(b) of the Transfer of Property Act, 1882, every rupee paid towards a plot purchase creates a statutory charge on the land itself.",
  },
  {
    id: "chk-rera-status",
    title: "Verify Plot Layout Area (>500 sq. m. or >8 Plots) & State RERA Number",
    statute: "Section 3(1) & Section 3(2)(a), RERA 2016",
    detail:
      "Check if the plotted colony exceeds 500 square metres or 8 plots across all phases. Even if the colonizer failed to register the project, any layout above this threshold is compulsorily registrable under Section 3 of RERA, exposing the developer to a penalty up to 10% of project cost under Section 59.",
  },
  {
    id: "chk-sanction-clu",
    title: "Check DTCP / Town Planning Layout Approval, CLU & NA Order",
    statute: "Section 4(2)(c)–(d) & Section 12, RERA 2016",
    detail:
      "Confirm whether the developer had a valid Change of Land Use (CLU / Non-Agricultural conversion) and sanctioned layout plan at the time of taking your booking. Selling plots on tentative or unapproved layouts entitles you to a 100% refund with interest under Section 12 of RERA.",
  },
  {
    id: "chk-agreement-10pct",
    title: "Audit Whether >10% Was Collected Without a Registered Agreement",
    statute: "Section 13(1), RERA 2016",
    detail:
      "Promoters cannot accept more than 10% of the plot cost as an advance or application fee without first executing and registering a formal Agreement for Sale. Collecting 20%–50% on a mere 'Expression of Interest' or 'Provisional Allotment Letter' is a direct statutory violation.",
  },
  {
    id: "chk-written-cancel",
    title: "Serve a Dated Written Plot Cancellation & Refund Demand Email/Letter",
    statute: "Section 18(1), RERA 2016 & Section 74, Contract Act 1872",
    detail:
      "Never rely on verbal assurances from sales managers or channel partners. Send a formal written cancellation email/letter clearly stating whether the cancellation is due to developer default (delay/approval failure) or personal exigency, and demand a written refund timeline.",
  },
  {
    id: "chk-bsa-evidence",
    title: "Preserve Brochures, Price Sheets & WhatsApp Promises Under Section 63 BSA",
    statute: "Section 63, Bharatiya Sakshya Adhiniyam (BSA), 2023",
    detail:
      "Export WhatsApp chats with the colonizer/broker, promised road/clubhouse brochure PDFs, and site photos showing lack of demarcation or infrastructure. Under Section 12 of RERA, brochure promises are legally binding on the promoter.",
  },
];

interface ScenarioTab {
  id: string;
  badge: string;
  title: string;
  rootCause: string;
  legalBasis: string;
  forfeitureRule: string;
  remedySteps: string[];
}

const SCENARIO_TABS: ScenarioTab[] = [
  {
    id: "unapproved-layout",
    badge: "Scenario 1 • Developer Default",
    title: "No Layout Sanction / DTCP / CLU Approval or Delayed Plot Possession",
    rootCause:
      "The colonizer collected 10%–40% plot booking money on a 'pre-launch' or 'tentative layout', failed to get Town & Country Planning (DTCP/BDA/HMDA/PMRDA/LDA) sanction or Non-Agricultural (NA/CLU) conversion, or missed the promised possession date for demarcated plots with roads and sewage.",
    legalBasis:
      "Section 12 & Section 18(1) of RERA, 2016 + Supreme Court in M/s Newtech Promoters v. State of UP (2021) 18 SCC 1 + Narne Construction Pvt. Ltd. v. Union of India (2012) 5 SCC 359.",
    forfeitureRule:
      "ZERO Forfeiture (0% Deduction). The developer must refund 100% of the principal paid plus SBI Highest MCLR + 2% simple interest from the date of each payment installment.",
    remedySteps: [
      "Reject any 'plot shifting' offer to an inferior phase or credit-note adjustment.",
      "Serve a 15-day statutory Advocate Legal Notice citing Section 12 (false brochure/approval representation) and Section 18(1) of RERA, plus Section 318 BNS (cheating) if sold without title/CLU.",
      "If unpaid within 15 days, file an online complaint on the State RERA portal (Form M) or e-Jagriti Consumer Commission seeking 100% principal + ~10.85%–11.10% p.a. interest.",
    ],
  },
  {
    id: "pre-agreement-cancel",
    badge: "Scenario 2 • Token / EOI Stage",
    title: "Cancelled Before Signing Agreement for Sale (Token / EOI / Allotment Only)",
    rootCause:
      "You paid ₹50,000 to ₹5,00,000 as a booking token or Expression of Interest (EOI) on an application form, never signed a registered Agreement for Sale under Section 13 of RERA, and cancelled due to one-sided builder clauses, loan rejection, or personal reasons.",
    legalBasis:
      "Section 13(1) of RERA, 2016 + Section 74 of the Indian Contract Act, 1872 + HARERA Gurugram Forfeiture Regulations, 2018 & MahaRERA Token Rulings.",
    forfeitureRule:
      "No arbitrary 10%–25% forfeiture allowed when no registered Agreement for Sale exists and the developer suffered no proved loss. State RERA benches routinely cap pre-agreement administrative deductions to ₹0–₹25,000 (or max 1%–2% booking token).",
    remedySteps: [
      "Send the formal Plot Booking Cancellation Letter (template below) revoking the provisional application before the developer unilaterally executes an allotment.",
      "Challenge any clause in the booking application form that claims '100% of booking amount is non-refundable' as an unfair contract under Section 2(46) of the Consumer Protection Act, 2019.",
      "Serve an Advocate Legal Notice demanding refund within 15 days, failing which file before State RERA or District Consumer Commission (e-Jagriti).",
    ],
  },
  {
    id: "buyer-self-cancel",
    badge: "Scenario 3 • Buyer Cancellation",
    title: "Buyer Cancels After Allotment / Agreement Due to Financial or Loan Issue",
    rootCause:
      "The plotted project is RERA-registered and on schedule, but you had to cancel the plot booking due to bank loan rejection, medical emergency, or job transfer—and the developer wants to forfeit 25%–50% of the amount you paid.",
    legalBasis:
      "Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor (2022) 15 SCC 286 + Maula Bux v. Union of India (1969) 2 SCC 554 + Model RERA Agreement for Sale Rules.",
    forfeitureRule:
      "Strict 10% Earnest Money Cap. Even when the buyer cancels without developer fault, the developer can deduct at most 10% of the total basic sale price (not 25%–50% of paid installments) and must refund every rupee paid above that 10% threshold within 45 days.",
    remedySteps: [
      "Compute 10% of the basic plot consideration (excluding GST, club charges, EDC/IDC, and PLC—which are 100% refundable upon cancellation).",
      "Put the developer on formal notice that forfeiting GST, EDC/IDC, or anything beyond 10% earnest money violates Supreme Court law under Section 74 of the Contract Act.",
      "If the colonizer has already resold the plot at a higher price, demand 100% refund because the developer suffered zero actual loss (Kailash Nath Associates v. DDA, (2015) 4 SCC 136).",
    ],
  },
  {
    id: "unregistered-farm-plot",
    badge: "Scenario 4 • Revenue / Farm / Small Plot",
    title: "Unregistered Colony (<500 sq. m.), Agricultural / Farmhouse Plot or Society Plot",
    rootCause:
      "You booked a residential plot, farmhouse plot, or revenue patta plot from a local colonizer, cooperative society, or land aggregator where the project is not registered on the State RERA portal.",
    legalBasis:
      "Section 2(7) & Section 2(42) of the Consumer Protection Act, 2019 + Narne Construction Pvt. Ltd. v. UOI (2012) 5 SCC 359 + Section 55(6)(b) Transfer of Property Act, 1882 + Order XXXVII CPC.",
    forfeitureRule:
      "100% Refund + Statutory Land Charge. Under Section 55(6)(b) of the Transfer of Property Act, the buyer holds a statutory charge on the seller's land for the prepaid purchase money and interest whenever the deal fails without buyer default.",
    remedySteps: [
      "Do not fall for the developer's excuse that 'RERA does not apply so you cannot file a case.' If the colonizer promised roads, boundary walls, water, or layout development, you are a Consumer under e-Jagriti.",
      "Even for a pure land plot without development services, serve a Section 55(6)(b) TPA + Order 37 CPC Summary Suit Legal Notice asserting a statutory buyer's charge over the Khasra/Survey number.",
      "If the colonizer sold government/forest/encumbered land or lacked title, include a pre-FIR warning under Section 318 (Cheating) and Section 316 (Criminal Breach of Trust) of the Bharatiya Nyaya Sanhita (BNS), 2023.",
    ],
  },
];

export function PlotBookingScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIO_TABS[0].id);
  const current =
    SCENARIO_TABS.find((t) => t.id === activeTab) || SCENARIO_TABS[0];

  return (
    <div className="my-6 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      <div
        role="tablist"
        aria-label="Plot Booking Refund Dispute Scenarios"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-slate-200 bg-slate-50"
      >
        {SCENARIO_TABS.map((tab) => {
          const isSelected = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(tab.id)}
              className={`text-left p-3.5 transition-all border-b-2 sm:border-b-0 sm:border-r border-slate-200 last:border-r-0 ${
                isSelected
                  ? "bg-slate-900 text-white border-amber-500 shadow-inner"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <span
                className={`block text-[10px] font-extrabold uppercase tracking-wider mb-1 ${
                  isSelected ? "text-amber-400" : "text-amber-700"
                }`}
              >
                {tab.badge}
              </span>
              <span className="block text-xs font-bold leading-snug line-clamp-2">
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
            {current.title}
          </h3>
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
            {current.badge}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="font-extrabold text-slate-900 uppercase tracking-wider text-xs mb-1.5">
              Why the Developer Stalls
            </p>
            <p className="text-slate-700 leading-relaxed">{current.rootCause}</p>
          </div>
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
            <p className="font-extrabold text-emerald-950 uppercase tracking-wider text-xs mb-1.5">
              Forfeiture Cap & Refund Entitlement
            </p>
            <p className="text-emerald-900 font-medium leading-relaxed">
              {current.forfeitureRule}
            </p>
          </div>
        </div>

        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 text-xs sm:text-sm">
          <p className="font-bold text-amber-950 mb-1">
            Controlling Statutory & Judicial Authority:
          </p>
          <p className="text-slate-800">{current.legalBasis}</p>
        </div>

        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            3-Step Tactical Recovery Playbook:
          </p>
          <ol className="space-y-2">
            {current.remedySteps.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
              >
                <span className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function PlotCancellationLetterTemplate() {
  const [copied, setCopied] = useState(false);

  const letterText = `Date: [DD/MM/YYYY]

To,
The Managing Director / Authorized Signatory,
[Name of Plot Developer / Colonizer Company Pvt. Ltd.]
[Registered Office Address of Developer]
Email: [Developer CRM / Grievance Email]

SUB: FORMAL CANCELLATION OF PLOT BOOKING & DEMAND FOR REFUND OF ₹[AMOUNT PAID] WITH INTEREST — PLOT NO. [PLOT NO.], PROJECT "[PROJECT NAME]", [CITY/TEHSIL]

Ref:
1. Booking Application / Provisional Allotment No.: [Application/Allotment Ref] dated [Date]
2. Project RERA Registration No.: [RERA Reg. No. or "Unregistered Layout"]
3. Total Amount Paid: ₹[Total Amount Paid]/- via Receipts / UTR Nos. [List UTR/Cheque Details]

Dear Sir/Madam,

1. Under the above reference, I booked Residential Plot No. [Plot No.] admeasuring [Area in Sq. Yds. / Sq. Mtrs.] in your project "[Project Name]" situated at [Village/Sector/City] for a basic sale consideration of ₹[Total Basic Plot Cost]/-, and paid a cumulative booking/advance amount of ₹[Total Amount Paid]/-.

2. [USE OPTION A FOR DEVELOPER DEFAULT]: Despite collecting the aforesaid advance, your company has failed to [obtain final DTCP / Town Planning layout sanction / execute a registered Agreement for Sale under Section 13 of the RERA Act, 2016 / hand over demarcated physical possession with promised road, water, and electrical infrastructure within the stipulated timeline]. Under Section 12 and Section 18(1) of the Real Estate (Regulation and Development) Act, 2016, as affirmed by the Hon'ble Supreme Court in M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP, (2021) 18 SCC 1, I exercise my unqualified statutory right to withdraw from the project and demand a 100% refund of ₹[Total Amount Paid]/- together with interest at SBI Highest MCLR + 2% per annum from the date of each payment.

   [OR USE OPTION B FOR BUYER-INITIATED CANCELLATION]: Due to [housing loan rejection / personal medical & financial exigency], I hereby cancel my provisional booking prior to conveyance. Please note that [no registered Agreement for Sale under Section 13 of RERA has been executed / under the law laid down by the Hon'ble Supreme Court in Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 286 and Section 74 of the Indian Contract Act, 1872], any forfeiture exceeding reasonable earnest limits or deduction of statutory charges (EDC/IDC/PLC/GST) is illegal and unenforceable.

3. Please treat this communication as my formal Plot Booking Cancellation Notice and remit the refundable sum of ₹[Claimed Refund Amount]/- directly to my bank account below within fifteen (15) days of receipt of this letter:
   • Account Holder Name: [Your Full Name]
   • Bank & Branch: [Bank Name, Branch]
   • Account Number: [Account Number]
   • IFSC Code: [IFSC Code]

4. Take notice that upon failure to credit the refund within 15 days, I shall instruct my legal counsel to serve a formal statutory Advocate Legal Notice and initiate recovery proceedings before the State Real Estate Regulatory Authority (RERA) / District Consumer Disputes Redressal Commission (e-Jagriti) and assert a statutory buyer's charge over the project land under Section 55(6)(b) of the Transfer of Property Act, 1882, entirely at your company's cost and consequence.

Yours faithfully,

[Your Signature]
[Your Full Name]
[Address & Mobile Number]
Encl: Copies of Booking Receipts, Bank UTR Statements & Allotment Letter`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letterText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const htmlContent = `<html><head><meta charset="utf-8"><title>Plot Booking Cancellation Letter</title></head><body style="font-family: Arial, sans-serif; line-height: 1.5; white-space: pre-wrap;">${letterText}</body></html>`;
    const blob = new Blob([htmlContent], {
      type: "application/msword;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Plot-Booking-Cancellation-Refund-Letter.doc";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="my-6 bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 overflow-hidden shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 bg-slate-900 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 block">
            Archetype G3 • Ready-to-Use Template
          </span>
          <h3 className="text-sm sm:text-base font-bold text-white">
            Plot Booking Cancellation & Refund Demand Letter Format
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-colors cursor-pointer"
          >
            {copied ? "✓ Copied to Clipboard" : "Copy Letter Text"}
          </button>
          <button
            type="button"
            onClick={handleDownloadDoc}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors cursor-pointer"
          >
            Download .DOC
          </button>
        </div>
      </div>
      <pre className="p-5 text-xs sm:text-[13px] leading-relaxed font-mono text-slate-200 overflow-x-auto whitespace-pre-wrap max-h-[460px] overflow-y-auto">
        {letterText}
      </pre>
      <div className="px-5 py-3 bg-slate-900/90 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <span>
          Tip: Send via Registered Post A.D. (RPAD) AND email to the developer&apos;s official CRM &amp; RERA-registered email ID.
        </span>
        <PlotBookingNoticeCTA
          label="Already Sent? Escalate to Advocate Notice"
          variant="inline"
          showPrice={true}
        />
      </div>
    </div>
  );
}

export default function PlotBookingChecklistWizard() {
  const [checkedIds, setCheckedIds] = useState<string[]>([
    "chk-receipts",
    "chk-rera-status",
  ]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const completedCount = checkedIds.length;
  const totalCount = CHECKLIST_ITEMS.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="my-6 bg-white border-2 border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Header & Progress Bar */}
      <div className="bg-slate-900 text-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-[11px] font-extrabold uppercase tracking-wider mb-1">
              Interactive Pre-Flight Checklist Wizard
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Assess Your Plot Booking Refund Readiness ({completedCount}/
              {totalCount} Completed)
            </h3>
          </div>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">
              {progressPct}%
            </span>
            <span className="block text-[11px] text-slate-400">
              Dossier Strength
            </span>
          </div>
        </div>

        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-300">
          {completedCount <= 2 &&
            "Initial Stage: Tick the items you have verified below. Even with basic payment receipts and bank UTRs, you can put the developer on statutory notice."}
          {completedCount > 2 &&
            completedCount < 5 &&
            "Strong Foundation: You have the core payment and project records needed to challenge illegal forfeiture under Section 13 & 18 of RERA."}
          {completedCount >= 5 &&
            "Litigation-Ready Dossier: Your documentation is ready for an immediate 15-day Statutory Advocate Legal Notice and RERA Form M / e-Jagriti filing."}
        </p>
      </div>

      {/* Checklist Items */}
      <div className="divide-y divide-slate-200">
        {CHECKLIST_ITEMS.map((item, idx) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <label
              key={item.id}
              htmlFor={item.id}
              className={`flex items-start gap-3.5 p-4 sm:p-5 cursor-pointer transition-colors ${
                isChecked ? "bg-emerald-50/40" : "hover:bg-slate-50"
              }`}
            >
              <input
                id={item.id}
                type="checkbox"
                checked={isChecked}
                onChange={() => toggleItem(item.id)}
                className="mt-1 h-5 w-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500 shrink-0 cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-extrabold text-slate-400">
                    STEP 0{idx + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {item.statute}
                  </span>
                </div>
                <p
                  className={`text-sm sm:text-base font-bold ${
                    isChecked ? "text-emerald-950" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </label>
          );
        })}
      </div>

      {/* Footer Action */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-slate-700">
          <strong className="text-slate-900">Ready to act?</strong> Our real-estate advocates verify your project&apos;s RERA/DTCP status and serve a formal recovery notice.
        </div>
        <PlotBookingNoticeCTA label="Start Plot Refund Legal Notice" />
      </div>
    </div>
  );
}

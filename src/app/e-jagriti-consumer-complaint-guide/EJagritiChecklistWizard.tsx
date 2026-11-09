"use client";

import React, { useState } from "react";

interface ChecklistItem {
  id: string;
  title: string;
  category: string;
  importance: "Mandatory" | "Crucial" | "Statutory";
  description: string;
  tip: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "item-tax-invoice",
    title: "1. Transaction Consideration Proof (Invoice / Bank Debit)",
    category: "Jurisdiction & Standing",
    importance: "Mandatory",
    description:
      "Tax invoice, contract, retail bill, booking receipt, or bank account debit statement with 12-digit UTR proving you paid valuable consideration under Section 2(7) of CPA 2019.",
    tip: "Without consideration proof, consumer commissions dismiss complaints at the preliminary scrutiny stage under Section 36.",
  },
  {
    id: "item-written-grievance",
    title: "2. Customer Service & Nodal Escalation Trail",
    category: "Internal Redressal",
    importance: "Crucial",
    description:
      "Copies of emails sent to support/nodal officer, ticket reference numbers, customer service chat transcripts, or physical letters.",
    tip: "Demonstrates that the company had reasonable opportunity to rectify the deficiency before you invoked judicial machinery.",
  },
  {
    id: "item-legal-notice",
    title: "3. Pre-Litigation Statutory Legal Notice & Postal Tracking",
    category: "Pre-Litigation",
    importance: "Statutory",
    description:
      "Formal advocate legal notice demanding cure or refund within 15 days, paired with India Post Speed Post consignment receipt, delivery report, or email read receipt.",
    tip: "A formal notice served under Section 63 BSA proves the opposite party had deliberate knowledge of default and refused to remedy.",
  },
  {
    id: "item-opposite-party-details",
    title: "4. Accurate Corporate Entity Name & Registered Office Address",
    category: "Service of Notice",
    importance: "Mandatory",
    description:
      "Full legal entity name (from MCA/ROC master data or GSTIN registry), Corporate Identification Number (CIN), registered office address, and authorized director/signatory names.",
    tip: "Naming an informal brand name or an unregistered branch address can cause summons to bounce back unserved, causing months of delay.",
  },
  {
    id: "item-affidavit-verification",
    title: "5. Verified Complaint Petition & Truth Affidavit",
    category: "Pleading Formalities",
    importance: "Mandatory",
    description:
      "Structured complaint petition stating chronology of facts, specific deficiency in service under Section 2(11), prayer clause, and an affirmation affidavit signed by the complainant.",
    tip: "e-Jagriti allows digital signing or uploading a scanned copy of the physically signed verification page.",
  },
  {
    id: "item-court-fee-calculation",
    title: "6. Pecuniary Valuation & Exemption Assessment",
    category: "Court Fees",
    importance: "Statutory",
    description:
      "Accurate calculation of consideration paid. Note: Nil court fees for claims up to ₹5,00,000. Online fee payment receipt via Bharatkosh / payment gateway for claims above ₹5 Lakh.",
    tip: "Jurisdiction is now determined solely by the value of goods/services paid as consideration (not the inflated compensation figure).",
  },
];

export default function EJagritiChecklistWizard() {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalItems = CHECKLIST_ITEMS.length;
  const completedCount = Object.values(checkedIds).filter(Boolean).length;
  const percentage = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
        <div>
          <span className="text-[11px] sm:text-xs font-extrabold px-3 py-1 bg-red-50 text-[#DC2626] rounded-full uppercase tracking-wider inline-block mb-1.5">
            Archetype G3 • Interactive Pre-Flight Scrutiny Wizard
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            e-Jagriti Filing Readiness Audit
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Check off the 6 evidentiary requirements before submitting your complaint on the e-Jagriti portal:
          </p>
        </div>

        {/* Live Progress Island */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 text-center sm:text-right shrink-0 min-w-[180px]">
          <div className="flex items-center justify-between sm:justify-end gap-2 mb-1.5">
            <span className="text-xs font-bold text-slate-700">Filing Readiness:</span>
            <span className="text-sm font-extrabold text-[#DC2626]">{percentage}%</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#DC2626] h-full transition-all duration-300 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 mt-1.5">
            {completedCount} of {totalItems} essentials verified
          </p>
        </div>
      </div>

      {/* Progress Status Banner */}
      <div className="mt-4 mb-6">
        {percentage === 100 ? (
          <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2.5">
            <span className="text-base sm:text-lg">✅</span>
            <span>
              <strong>100% Audit Complete:</strong> Your documentation is legally bulletproof. Your complaint will easily pass preliminary registrar scrutiny within the 21-day statutory admission window.
            </span>
          </div>
        ) : percentage >= 50 ? (
          <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-xl text-xs sm:text-sm text-amber-800 flex items-center gap-2.5">
            <span className="text-base sm:text-lg">⚠️</span>
            <span>
              <strong>Partial Preparation ({completedCount}/{totalItems}):</strong> You have the baseline documents, but ensure you do not skip the pre-litigation legal notice or correct registered corporate address.
            </span>
          </div>
        ) : (
          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 flex items-center gap-2.5">
            <span className="text-base sm:text-lg">📋</span>
            <span>
              <strong>Begin Verification:</strong> Click on each checkbox below as you gather and verify each item before logging into e-jagriti.gov.in.
            </span>
          </div>
        )}
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = !!checkedIds[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                isChecked
                  ? "bg-red-50/50 border-red-300 shadow-sm"
                  : "bg-slate-50 hover:bg-slate-100/70 border-slate-200"
              }`}
            >
              <input
                type="checkbox"
                id={item.id}
                checked={isChecked}
                onChange={() => {}} // handled by parent div onClick
                className="mt-1 w-4 h-4 rounded text-[#DC2626] focus:ring-[#DC2626] border-slate-300 cursor-pointer shrink-0"
              />
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`font-bold text-sm ${
                      isChecked ? "text-[#DC2626]" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      item.importance === "Mandatory"
                        ? "bg-red-100 text-red-700"
                        : item.importance === "Statutory"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.importance}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px] sm:text-xs">
                  {item.description}
                </p>
                <p className="text-[10px] text-slate-500 italic pt-1">
                  💡 <strong>Tip:</strong> {item.tip}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useId } from "react";
import Link from "next/link";

type LetterVariant = "standard" | "deduction_challenge" | "final_ultimatum";

interface DepositFormState {
  tenantName: string;
  tenantCurrentAddress: string;
  tenantPhone: string;
  tenantEmail: string;
  landlordName: string;
  landlordAddress: string;
  landlordContact: string;
  rentedPremisesAddress: string;
  agreementDate: string;
  depositAmount: string;
  depositPaymentMode: string;
  noticeGivenDate: string;
  vacatedDate: string;
  meterReadingNote: string;
  disputedDeductionAmount: string;
  disputedDeductionReason: string;
  agreedUtilityDeduction: string;
  netRefundClaimed: string;
  bankAccountHolder: string;
  bankName: string;
  bankAccountNumber: string;
  bankIfsc: string;
  upiId: string;
  deadlineDays: string;
}

export default function SecurityDepositLetterWorkspace() {
  const formId = useId();
  const [variant, setVariant] = useState<LetterVariant>("deduction_challenge");
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState<DepositFormState>({
    tenantName: "[TENANT FULL NAME, e.g., सिद्धार्थ नायर / Siddharth Nair]",
    tenantCurrentAddress: "[CURRENT POSTAL ADDRESS FOR CORRESPONDENCE]",
    tenantPhone: "[+91-98XXXXXXXX]",
    tenantEmail: "[tenant.name@email.com]",
    landlordName: "[LANDLORD / OWNER FULL NAME]",
    landlordAddress: "[LANDLORD FULL RESIDENTIAL POSTAL ADDRESS WITH PIN]",
    landlordContact: "[LANDLORD EMAIL & WHATSAPP NUMBER]",
    rentedPremisesAddress: "[FLAT / HOUSE NO., BUILDING, SOCIETY, LOCALITY, CITY & PIN]",
    agreementDate: "[AGREEMENT DATE, e.g., 15 November 2024]",
    depositAmount: "[₹1,20,000 (Rupees One Lakh Twenty Thousand Only)]",
    depositPaymentMode: "[NEFT / IMPS / UPI Reference No. UTR-XXXXXXXXXXXX dated DD/MM/YYYY]",
    noticeGivenDate: "[01 October 2026]",
    vacatedDate: "[31 October 2026]",
    meterReadingNote: "[Electricity Meter Final Reading: 4,812 kWh; Society Maintenance Paid up to October 2026]",
    disputedDeductionAmount: "[₹38,000]",
    disputedDeductionReason: "[1 Month Rent Towards Repainting, Deep Acid Cleaning & Routine Hinge Wear]",
    agreedUtilityDeduction: "[₹2,450 towards pro-rata electricity & water charges]",
    netRefundClaimed: "[₹1,17,550]",
    bankAccountHolder: "[TENANT ACCOUNT HOLDER NAME]",
    bankName: "[BANK NAME & BRANCH]",
    bankAccountNumber: "[BANK ACCOUNT NUMBER]",
    bankIfsc: "[IFSC CODE]",
    upiId: "[tenant@okaxis]",
    deadlineDays: "7",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const val = (field: keyof DepositFormState, placeholder: string) => {
    const v = formData[field]?.trim();
    return v && v.length > 0 ? v : placeholder;
  };

  const getLetterContent = (): string => {
    const todayStr = "4 November 2026";
    const tName = val("tenantName", "[TENANT FULL NAME]");
    const tAddr = val("tenantCurrentAddress", "[TENANT CURRENT ADDRESS]");
    const tPhone = val("tenantPhone", "[TENANT PHONE]");
    const tEmail = val("tenantEmail", "[TENANT EMAIL]");
    const lName = val("landlordName", "[LANDLORD FULL NAME]");
    const lAddr = val("landlordAddress", "[LANDLORD POSTAL ADDRESS]");
    const lContact = val("landlordContact", "[LANDLORD EMAIL / PHONE]");
    const premises = val("rentedPremisesAddress", "[RENTED FLAT / PROPERTY ADDRESS]");
    const agrDate = val("agreementDate", "[RENT AGREEMENT DATE]");
    const depAmt = val("depositAmount", "[SECURITY DEPOSIT AMOUNT]");
    const depMode = val("depositPaymentMode", "[PAYMENT MODE & UTR / CHEQUE NO.]");
    const noticeDate = val("noticeGivenDate", "[VACATING NOTICE DATE]");
    const vacDate = val("vacatedDate", "[VACATED & KEY HANDOVER DATE]");
    const meterNote = val("meterReadingNote", "[FINAL METER READING & BILLS STATUS]");
    const dispAmt = val("disputedDeductionAmount", "[DISPUTED DEDUCTION AMOUNT]");
    const dispReason = val("disputedDeductionReason", "[DISPUTED DEDUCTION REASON]");
    const utilCut = val("agreedUtilityDeduction", "[AGREED PRO-RATA UTILITY DEDUCTION]");
    const netRefund = val("netRefundClaimed", "[NET REFUND AMOUNT CLAIMED]");
    const accHolder = val("bankAccountHolder", "[ACCOUNT HOLDER NAME]");
    const bName = val("bankName", "[BANK NAME]");
    const accNo = val("bankAccountNumber", "[ACCOUNT NUMBER]");
    const ifsc = val("bankIfsc", "[IFSC CODE]");
    const upi = val("upiId", "[UPI ID]");
    const days = val("deadlineDays", "7");

    if (variant === "standard") {
      return `BY EMAIL, WHATSAPP & REGISTERED POST (RPAD)
DATE: ${todayStr}

FROM:
${tName}
Forwarding Address: ${tAddr}
Mobile: ${tPhone} | Email: ${tEmail}

TO:
${lName}
Address: ${lAddr}
Contact: ${lContact}

SUBJECT: FORMAL REQUEST FOR REFUND OF RENTAL SECURITY DEPOSIT OF ${depAmt} FOR VACATED PREMISES AT ${premises}

Dear ${lName},

1. TENANCY & SECURITY DEPOSIT PARTICULARS:
I am writing with reference to the Residential Rent / Leave and Licence Agreement dated ${agrDate} executed between us in respect of your residential premises situated at ${premises}. At the commencement of the tenancy, I deposited a refundable, interest-free security deposit of ${depAmt} with you via ${depMode}.

2. DUE NOTICE, JOINT INSPECTION & VACANT KEY HANDOVER:
In strict compliance with the notice period clause of our agreement, I served written intimation of my intention to vacate the premises on ${noticeDate}. Thereafter, on ${vacDate}, I handed over peaceful, vacant, and broom-clean physical possession of the premises along with all original keys after a joint walkthrough inspection.

3. CLEARANCE OF RENT & UTILITY BILLS:
All monthly rent obligations up to the date of vacation stand paid in full. Furthermore, the utility and maintenance position as on the date of handover is recorded as follows: ${meterNote}. After adjusting ${utilCut} towards final pro-rata utility bills, the net refundable security deposit due to me is ${netRefund}.

4. STATUTORY & CONTRACTUAL OBLIGATION FOR IMMEDIATE REFUND:
As vacant possession of the property has already been handed over on ${vacDate}, the purpose for which the security deposit was entrusted stands extinguished. Under Indian tenancy principles (including Section 108 of the Transfer of Property Act, 1882 and Section 11(2) of the Model Tenancy Act framework where notified), the landlord is obligated to refund the security deposit upon taking over vacant possession.

5. BANK ACCOUNT DETAILS FOR REMITTANCE WITHIN ${days} DAYS:
I request you to remit the net security deposit of ${netRefund} within ${days} (${days === "7" ? "seven" : days}) calendar days from receipt of this letter (on or before ${days} days from today) via NEFT / RTGS / IMPS to my bank account below, and share the 12-digit UTR number for my records:
   • Account Holder Name: ${accHolder}
   • Bank Name & Branch: ${bName}
   • Account Number: ${accNo}
   • IFSC Code: ${ifsc}
   • Alternative UPI ID: ${upi}

I thank you for a cordial tenancy tenure and look forward to the prompt settlement of my refund within the above timeline so that this tenancy account can be closed amicably.

Yours sincerely,

_______________________________
${tName}
(Former Tenant — ${premises})

Enclosures:
1. Copy of Rent / Leave & Licence Agreement dated ${agrDate} & Deposit Payment Receipt (${depMode})
2. Copy of Move-Out Notice dated ${noticeDate} & Key Handover / Meter Reading Photographs dated ${vacDate}`;
    }

    if (variant === "final_ultimatum") {
      return `WITHOUT PREJUDICE
BY REGISTERED SPEED POST WITH ACKNOWLEDGMENT DUE (RPAD), EMAIL & WHATSAPP
DATE: ${todayStr}

FROM:
${tName}
Address: ${tAddr}
Mobile: ${tPhone} | Email: ${tEmail}

TO:
${lName}
Address: ${lAddr}
Contact: ${lContact}

SUBJECT: FINAL PRE-LITIGATION DEMAND FOR REFUND OF WITHHELD SECURITY DEPOSIT OF ${netRefund} & OBJECTION TO UNLAWFUL DEDUCTIONS — PREMISES AT ${premises}

Dear ${lName},

1. PERSISTENT DEFAULT AFTER VACANT HANDOVER:
This letter serves as my final written demand prior to initiating formal legal proceedings. Pursuant to the Rent / Leave and Licence Agreement dated ${agrDate} for ${premises}, you hold a refundable security deposit of ${depAmt} paid via ${depMode}. Despite my serving timely vacating notice on ${noticeDate} and delivering vacant, peaceful possession with all keys on ${vacDate}, you have unlawfully withheld my deposit beyond the agreed refund timeline.

2. FORMAL REJECTION OF ARBITRARY DEDUCTIONS (${dispAmt}):
I place on record my categorical objection to your unilateral proposal to deduct ${dispAmt} under the pretext of ${dispReason}. Under Section 108(m) of the Transfer of Property Act, 1882, a tenant is never liable for natural wear and tear, routine repainting/whitewashing between tenancies, or structural ageing. Further, under Section 74 of the Indian Contract Act, 1872 and the Delhi High Court ruling in Uberoisons (Machines) Ltd. v. Samtel Color Ltd., (2003) 105 DLT 383, a landlord cannot retain a liquidated security deposit against unverified, unilateral claims of damage without proving actual loss through joint inspection records and GST repair invoices.

3. UNDISPUTED NET REFUND PAYABLE (${netRefund}):
All rent and society dues up to ${vacDate} are cleared (${meterNote}). After permitting only the legitimate pro-rata adjustment of ${utilCut}, a net principal sum of ${netRefund} remains wrongfully retained by you in breach of trust.

4. FINAL ${days}-DAY DEADLINE BEFORE ADVOCATE LEGAL NOTICE & COURT ACTION:
You are hereby called upon to transfer the sum of ${netRefund} into my bank account within ${days} calendar days of receiving this letter:
   • Account Holder: ${accHolder} | Bank: ${bName}
   • Account No.: ${accNo} | IFSC: ${ifsc} | UPI: ${upi}

5. NOTICE OF ESCALATION & 18% INTEREST CLAIM:
Take notice that if the sum of ${netRefund} is not credited within ${days} days, I shall immediately instruct my legal counsel to serve a formal Statutory Advocate Legal Notice and institute recovery proceedings (including a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 / Application before the jurisdictional Rent Authority) claiming:
   (a) The entire principal security deposit of ${depAmt} (withdrawing any concession);
   (b) Penal interest at 18% per annum from ${vacDate} until realization (per H.S. Bedi v. NHAI, 2015 SCC OnLine Del 9524); and
   (c) Full litigation costs, court fees, and compensation for harassment.

A copy of this notice and its postal/electronic delivery logs are preserved under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 for production in court.

Yours faithfully,

_______________________________
${tName}
Mobile: ${tPhone} | Email: ${tEmail}`;
    }

    // Default: deduction_challenge
    return `BY EMAIL, WHATSAPP & REGISTERED POST (RPAD)
DATE: ${todayStr}

FROM:
${tName}
Forwarding Address: ${tAddr}
Mobile: ${tPhone} | Email: ${tEmail}

TO:
${lName}
Address: ${lAddr}
Contact: ${lContact}

SUBJECT: WRITTEN REQUEST FOR SECURITY DEPOSIT REFUND (${netRefund}) & CHALLENGE TO UNREASONABLE DEDUCTION OF ${dispAmt} — PREMISES AT ${premises}

Dear ${lName},

1. REFERENCE TO TENANCY & DEPOSIT PAYMENT:
I write with reference to our Rent / Leave and Licence Agreement dated ${agrDate} for your residential property at ${premises}, under which I paid a refundable security deposit of ${depAmt} via ${depMode}.

2. VACANT HANDOVER & METER RECONCILIATION ON ${vacDate}:
Following my written vacating notice dated ${noticeDate}, I vacated the premises and handed over peaceful vacant possession and keys to you on ${vacDate}. At the time of handover, timestamped walkthrough photographs/videos were recorded confirming no structural or tenant-inflicted damage, and final utility readings were noted (${meterNote}).

3. ITEMISED CHALLENGE TO PROPOSED DEDUCTION OF ${dispAmt}:
I am in receipt of your communication proposing to deduct ${dispAmt} from my security deposit towards ${dispReason}. I respectfully dispute and reject this deduction on the following settled legal and factual grounds:
   (a) Normal Wear & Tear Exemption (Section 108(m) Transfer of Property Act, 1882 & Second Schedule of the Model Tenancy Act): Routine wall dullness, minor nail marks, repainting/whitewashing between tenancies, and natural ageing of electrical/plumbing fittings constitute fair wear and tear, which is legally the landlord's maintenance obligation.
   (b) No Joint Inspection Damage or Actual Vendor Invoices: No broken fixture attributable to my misuse was recorded at key handover on ${vacDate}, nor have any authentic third-party GST repair invoices been furnished. Under Section 74 of the Indian Contract Act, 1872 and Delhi High Court precedent (Uberoisons v. Samtel Color Ltd.), a landlord cannot unilaterally forfeit deposit money on arbitrary lump-sum estimates.
   (c) Consented Utility Adjustment Only: I solely consent to the deduction of ${utilCut}, which represents the actual pro-rata utility calculation up to ${vacDate}.

4. DEMAND FOR NET REFUND OF ${netRefund} WITHIN ${days} DAYS:
Accordingly, I request you to release the net refundable balance of ${netRefund} within ${days} calendar days of receipt of this letter directly to my bank account below:
   • Account Holder Name: ${accHolder}
   • Bank Name & Branch: ${bName}
   • Account Number: ${accNo}
   • IFSC Code: ${ifsc} | UPI ID: ${upi}

5. RESERVATION OF STATUTORY RIGHTS:
I prefer to close our tenancy amicably without legal friction. However, please note that if the undisputed refund of ${netRefund} is not remitted within ${days} days, I will be constrained to escalate the matter through a formal 15-day Advocate Legal Notice claiming the full deposit with 18% p.a. statutory interest and legal costs.

Yours sincerely,

_______________________________
${tName}
(Former Tenant — ${premises})

Enclosures:
1. Timestamped Move-Out Inspection Photos/Video Log & Final Electricity Meter Photo dated ${vacDate}
2. Pro-rata Utility Calculation Sheet (${utilCut}) & Original Deposit Transfer Proof (${depMode})`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getLetterContent());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleDownloadDoc = () => {
    const rawText = getLetterContent();
    const htmlDoc = `<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head><meta charset='utf-8'><title>Security Deposit Refund Letter to Landlord</title>
<style>
  body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; color: #000000; margin: 1in; }
  pre { font-family: 'Times New Roman', serif; font-size: 12pt; white-space: pre-wrap; word-wrap: break-word; }
</style>
</head>
<body><pre>${rawText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre></body>
</html>`;
    const blob = new Blob([htmlDoc], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Security_Deposit_Refund_Letter_Landlord_${variant.toUpperCase()}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-red-400 bg-red-950/70 border border-red-800/80 px-2.5 py-1 rounded-full">
              Archetype P1 • Live Letter Workspace
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
              Security Deposit Refund Letter &amp; Deduction-Challenge Generator
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Fill in your tenancy details on the left or leave placeholders in [SQUARE BRACKETS] to edit later in Microsoft Word.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              S.108(m) TPA &amp; S.11 MTA Ready
            </span>
          </div>
        </div>

        {/* 3 Scenario / Tone Tabs */}
        <div
          role="tablist"
          aria-label="Deposit refund letter variants"
          className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 bg-slate-800/90 rounded-xl border border-slate-700"
        >
          <button
            type="button"
            role="tab"
            aria-selected={variant === "standard"}
            onClick={() => setVariant("standard")}
            className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all text-left sm:text-center cursor-pointer ${
              variant === "standard"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            1. Standard Refund Request (Move-Out Day)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={variant === "deduction_challenge"}
            onClick={() => setVariant("deduction_challenge")}
            className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all text-left sm:text-center cursor-pointer ${
              variant === "deduction_challenge"
                ? "bg-[#DC2626] text-white shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            2. Challenge Painting / Wear Deductions
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={variant === "final_ultimatum"}
            onClick={() => setVariant("final_ultimatum")}
            className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all text-left sm:text-center cursor-pointer ${
              variant === "final_ultimatum"
                ? "bg-amber-600 text-white shadow-xs"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            3. Final 7-Day Pre-Legal Ultimatum
          </button>
        </div>
      </div>

      {/* Two-Column P1 Workspace: Live-Fill Form + Live <article> Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Live-Fill Form Fields (5 Cols) */}
        <form
          onSubmit={(e) => e.preventDefault()}
          aria-label="Fill security deposit letter details"
          className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/70 space-y-4 max-h-[780px] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Customize Placeholders (Live)
            </span>
            <span className="text-[11px] text-slate-500">Instant preview →</span>
          </div>

          {/* Group 1: Tenant & Landlord */}
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
              1. Tenant &amp; Landlord Details
            </span>
            <div>
              <label htmlFor={`${formId}-tenantName`} className="block text-xs font-semibold text-slate-700 mb-1">
                Tenant Full Name
              </label>
              <input
                id={`${formId}-tenantName`}
                type="text"
                name="tenantName"
                value={formData.tenantName}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${formId}-tenantPhone`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Tenant Mobile
                </label>
                <input
                  id={`${formId}-tenantPhone`}
                  type="text"
                  name="tenantPhone"
                  value={formData.tenantPhone}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-tenantEmail`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Tenant Email
                </label>
                <input
                  id={`${formId}-tenantEmail`}
                  type="text"
                  name="tenantEmail"
                  value={formData.tenantEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor={`${formId}-tenantCurrentAddress`} className="block text-xs font-semibold text-slate-700 mb-1">
                Tenant Forwarding Address
              </label>
              <input
                id={`${formId}-tenantCurrentAddress`}
                type="text"
                name="tenantCurrentAddress"
                value={formData.tenantCurrentAddress}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-landlordName`} className="block text-xs font-semibold text-slate-700 mb-1">
                Landlord / Property Owner Name
              </label>
              <input
                id={`${formId}-landlordName`}
                type="text"
                name="landlordName"
                value={formData.landlordName}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-landlordAddress`} className="block text-xs font-semibold text-slate-700 mb-1">
                Landlord Postal Address
              </label>
              <input
                id={`${formId}-landlordAddress`}
                type="text"
                name="landlordAddress"
                value={formData.landlordAddress}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Group 2: Tenancy, Handover & Deposit Amounts */}
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
              2. Rented Flat, Handover Dates &amp; Deposit
            </span>
            <div>
              <label htmlFor={`${formId}-rentedPremisesAddress`} className="block text-xs font-semibold text-slate-700 mb-1">
                Vacated Flat / Property Address
              </label>
              <input
                id={`${formId}-rentedPremisesAddress`}
                type="text"
                name="rentedPremisesAddress"
                value={formData.rentedPremisesAddress}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${formId}-agreementDate`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Rent Agreement Date
                </label>
                <input
                  id={`${formId}-agreementDate`}
                  type="text"
                  name="agreementDate"
                  value={formData.agreementDate}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-vacatedDate`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Key Handover / Vacated Date
                </label>
                <input
                  id={`${formId}-vacatedDate`}
                  type="text"
                  name="vacatedDate"
                  value={formData.vacatedDate}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor={`${formId}-depositAmount`} className="block text-xs font-semibold text-slate-700 mb-1">
                Total Security Deposit Paid
              </label>
              <input
                id={`${formId}-depositAmount`}
                type="text"
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-depositPaymentMode`} className="block text-xs font-semibold text-slate-700 mb-1">
                Original Payment Mode &amp; UTR / Cheque No.
              </label>
              <input
                id={`${formId}-depositPaymentMode`}
                type="text"
                name="depositPaymentMode"
                value={formData.depositPaymentMode}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Group 3: Deductions Challenged & Net Refund */}
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DC2626] block">
              3. Deduction Challenge &amp; Refund Math
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${formId}-disputedDeductionAmount`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Unfair Deduction Challenged
                </label>
                <input
                  id={`${formId}-disputedDeductionAmount`}
                  type="text"
                  name="disputedDeductionAmount"
                  value={formData.disputedDeductionAmount}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-red-700 font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-netRefundClaimed`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Net Refund Demanded
                </label>
                <input
                  id={`${formId}-netRefundClaimed`}
                  type="text"
                  name="netRefundClaimed"
                  value={formData.netRefundClaimed}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-emerald-700 font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor={`${formId}-disputedDeductionReason`} className="block text-xs font-semibold text-slate-700 mb-1">
                Landlord&apos;s Pretext for Deduction (e.g. Painting / Wear)
              </label>
              <input
                id={`${formId}-disputedDeductionReason`}
                type="text"
                name="disputedDeductionReason"
                value={formData.disputedDeductionReason}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor={`${formId}-agreedUtilityDeduction`} className="block text-xs font-semibold text-slate-700 mb-1">
                Legitimate Pro-Rata Utility Adjustment (If Any)
              </label>
              <input
                id={`${formId}-agreedUtilityDeduction`}
                type="text"
                name="agreedUtilityDeduction"
                value={formData.agreedUtilityDeduction}
                onChange={handleChange}
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Group 4: Bank Coordinates & Deadline */}
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 block">
              4. Refund Bank Account &amp; Deadline
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${formId}-bankName`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Bank Name
                </label>
                <input
                  id={`${formId}-bankName`}
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-bankAccountNumber`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Account Number
                </label>
                <input
                  id={`${formId}-bankAccountNumber`}
                  type="text"
                  name="bankAccountNumber"
                  value={formData.bankAccountNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div>
                <label htmlFor={`${formId}-bankIfsc`} className="block text-xs font-semibold text-slate-700 mb-1">
                  IFSC Code
                </label>
                <input
                  id={`${formId}-bankIfsc`}
                  type="text"
                  name="bankIfsc"
                  value={formData.bankIfsc}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label htmlFor={`${formId}-deadlineDays`} className="block text-xs font-semibold text-slate-700 mb-1">
                  Payment Deadline (Days)
                </label>
                <select
                  id={`${formId}-deadlineDays`}
                  name="deadlineDays"
                  value={formData.deadlineDays}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="3">3 Calendar Days (Immediate)</option>
                  <option value="5">5 Calendar Days</option>
                  <option value="7">7 Calendar Days (Recommended)</option>
                  <option value="10">10 Calendar Days</option>
                  <option value="15">15 Calendar Days</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        {/* Right Column: Live <article> Letter Preview + Action Buttons (7 Cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            {/* Toolbar: Copy / Download .doc / Print */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                  Live Letter Preview ({variant === "standard" ? "Standard Move-Out" : variant === "deduction_challenge" ? "Deduction Challenge" : "Final Pre-Legal Ultimatum"})
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <span className="text-emerald-700">✓ Copied Letter!</span>
                  ) : (
                    <span>Copy Text</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadDoc}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-xs transition-colors cursor-pointer"
                >
                  <span>Download .doc (Word)</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
                >
                  <span>Print / Save PDF</span>
                </button>
              </div>
            </div>

            {/* Letter Preview as an <article> (Archetype P1 DOM Requirement) */}
            <article
              aria-label="Generated Security Deposit Refund Request Letter"
              className="bg-[#FFFEFA] border-2 border-slate-200/90 rounded-xl p-5 sm:p-7 shadow-inner font-serif text-xs sm:text-sm text-slate-900 leading-relaxed whitespace-pre-wrap max-h-[610px] overflow-y-auto"
            >
              {getLetterContent()}
            </article>
          </div>

          {/* Appendix H Mandatory One-Line Legal-Validity Note + Escalation Link */}
          <div className="mt-4 pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600">
            <p className="leading-relaxed">
              <strong className="text-slate-900">Legal Validity of Sending Mode (Email / WhatsApp / RPAD):</strong>{" "}
              Sending this signed refund demand via Email and WhatsApp (preserving delivery/read ticks under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023) paired with an India Post Registered Post (RPAD) copy creates legally admissible proof of demand and triggers the presumption of service under Section 27 of the General Clauses Act, 1897.
            </p>
            <p className="font-semibold text-slate-800">
              Need stronger legal pressure? If your landlord ignores this letter past your 7-day deadline,{" "}
              <Link
                href="/recover-security-deposit-from-landlord-india"
                className="text-[#DC2626] underline hover:text-red-800"
              >
                escalate to a formal Advocate Legal Notice for Security Deposit Recovery →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

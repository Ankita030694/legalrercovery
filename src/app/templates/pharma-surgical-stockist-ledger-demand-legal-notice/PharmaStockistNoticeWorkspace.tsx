"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

interface TemplatePreset {
  id: string;
  label: string;
  badge: string;
  creditorName: string;
  creditorDL: string;
  creditorGSTIN: string;
  creditorAddress: string;
  creditorEmail: string;
  creditorUdyam: string;
  debtorName: string;
  debtorProprietor: string;
  debtorDL: string;
  debtorGSTIN: string;
  debtorAddress: string;
  debtorContact: string;
  debtorEmail: string;
  totalPrincipal: number;
  invoiceCount: number;
  invoiceRange: string;
  creditDays: number;
  interestRate: number;
  hasSecurityCheque: boolean;
  chequeNo: string;
  chequeBank: string;
  chequeBranch: string;
  chequeAccount: string;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: TemplatePreset[] = [
  {
    id: "pharma-cf-to-stockist",
    label: "Pharma Manufacturer / C&F to Wholesale Stockist",
    badge: "High Ticket B2B",
    creditorName: "Biocure Lifesciences Private Limited",
    creditorDL: "DL-20B-184920 / 21B-184921",
    creditorGSTIN: "06AAACB1234F1Z8",
    creditorAddress: "Plot 84, Industrial Area Phase 1, Panchkula, Haryana - 134113",
    creditorEmail: "legal@biocurelifesciences.in",
    creditorUdyam: "UDYAM-HR-05-0019284",
    debtorName: "M/s Apex Medico & Surgical Distributors",
    debtorProprietor: "Mr. Rakesh Kumar Aggarwal (Sole Proprietor)",
    debtorDL: "DL-20B-99841 / 21B-99842",
    debtorGSTIN: "09AAKPA4432K1ZP",
    debtorAddress: "Shop 12-14, Wholesale Medicine Market, Aminabad, Lucknow, Uttar Pradesh - 226018",
    debtorContact: "+91 94150 28491",
    debtorEmail: "apexmedico.lucknow@gmail.com",
    totalPrincipal: 1845600,
    invoiceCount: 14,
    invoiceRange: "04 May 2026 to 28 August 2026",
    creditDays: 30,
    interestRate: 21.75, // 3x RBI Repo Rate (6.5% * 3 = 19.5% + margin) under MSMED Act
    hasSecurityCheque: true,
    chequeNo: "004921",
    chequeBank: "HDFC Bank Ltd.",
    chequeBranch: "Aminabad Branch, Lucknow",
    chequeAccount: "00492000038192",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/PHARMA/2026/084",
    noticeDate: "16 November 2026",
  },
  {
    id: "stockist-to-chemist",
    label: "Super-Stockist to Retail Chemist / Medical Store",
    badge: "Volume Retail Default",
    creditorName: "Shree Krishna Pharma & Surgical Agencies",
    creditorDL: "DL-20B-77210 / 21B-77211",
    creditorGSTIN: "27AABCS9912A1Z4",
    creditorAddress: "B-4, Dawa Bazaar, Princess Street, Kalbadevi, Mumbai, Maharashtra - 400002",
    creditorEmail: "accounts@shreekrishnapharma.com",
    creditorUdyam: "UDYAM-MH-19-0044812",
    debtorName: "M/s LifeLine Chemist & Druggist",
    debtorProprietor: "Mr. Suresh V. Patil & Mr. Nilesh Patil (Partners)",
    debtorDL: "DL-20/21-MH-MZ-149201",
    debtorGSTIN: "27AAPFP8841B1ZR",
    debtorAddress: "Shop No. 2, Near Civil Hospital Gate, Station Road, Thane (W), Maharashtra - 400601",
    debtorContact: "+91 98200 44192",
    debtorEmail: "lifelinechemist.thane@yahoo.com",
    totalPrincipal: 485000,
    invoiceCount: 8,
    invoiceRange: "12 June 2026 to 15 September 2026",
    creditDays: 21,
    interestRate: 18,
    hasSecurityCheque: false,
    chequeNo: "",
    chequeBank: "",
    chequeBranch: "",
    chequeAccount: "",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/CHEMIST/2026/194",
    noticeDate: "16 November 2026",
  },
  {
    id: "pcd-franchise-cheque",
    label: "PCD Pharma Company to Franchisee with Security Cheque",
    badge: "Section 20 Intimation",
    creditorName: "Novacure Healthcare Private Limited",
    creditorDL: "DL-20B-33418 / 21B-33419",
    creditorGSTIN: "04AAGCN7714C1ZM",
    creditorAddress: "Plot 102, HSIIDC Industrial Estate, Barwala Road, Alchemist Zone, Ambala, Haryana - 134003",
    creditorEmail: "franchise@novacurehealthcare.com",
    creditorUdyam: "UDYAM-HR-01-0028491",
    debtorName: "M/s Medinova Pharmaceuticals (PCD Franchisee)",
    debtorProprietor: "Mr. Arvind Narayan Rao (Authorized Signatory)",
    debtorDL: "DL-20B-55190 / 21B-55191",
    debtorGSTIN: "36AAKPM1190D1ZT",
    debtorAddress: "D.No. 4-1-88, Medical Complex, Sultan Bazaar, Koti, Hyderabad, Telangana - 500095",
    debtorContact: "+91 98480 33819",
    debtorEmail: "medinova.pharmahyd@gmail.com",
    totalPrincipal: 960000,
    invoiceCount: 6,
    invoiceRange: "18 March 2026 to 22 July 2026",
    creditDays: 45,
    interestRate: 21.75,
    hasSecurityCheque: true,
    chequeNo: "338914",
    chequeBank: "State Bank of India",
    chequeBranch: "Koti Branch, Hyderabad",
    chequeAccount: "38491029481",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/B2B/PCD/2026/041",
    noticeDate: "16 November 2026",
  },
];

const ANNOTATIONS = [
  {
    marker: "①",
    title: "Proof of Drug Delivery & Order XXXVII CPC Liquidated Schedule",
    explanation:
      "Under Order XXXVII Rule 1(2) CPC, every pharma invoice and accompanying transport bilty (LR) or e-Way bill constitutes a written contract creating an admitted liquidated debt. Attaching a serialized invoice-wise schedule with batch numbers, manufacturing/expiry dates, and GST e-Way bills forecloses any general denial.",
    statuteRef: "Order XXXVII Rule 1 & 2 CPC, 1908",
  },
  {
    marker: "②",
    title: "Drug License (Form 20B/21B) Statutory Accountability",
    explanation:
      "Pharmaceutical distribution is governed strictly by the Drugs and Cosmetics Rules, 1945. Recording the debtor's Form 20B/21B wholesale license numbers binds the licensee personally and establishes that wholesale sales were validly completed to an authorized dealer, pre-empting any claim of illicit or unrecorded trade.",
    statuteRef: "Drugs and Cosmetics Rules 1945 (Form 20B / Form 21B)",
  },
  {
    marker: "③",
    title: "Barring Unilateral Expired/Breakage Returns & Debit Notes",
    explanation:
      "Defaulting stockists frequently invent fictitious 'expired drug' dumps or damaged stock debit notes when sued for payment. Under Section 42 of the Sale of Goods Act, retaining medicines past the agreed inspection window without formal rejection constitutes deemed acceptance. Furthermore, Section 34(2) of the CGST Act strictly cuts off retroactive credit notes.",
    statuteRef: "Sale of Goods Act s.42 & CGST Act 2017 s.34(2)",
  },
  {
    marker: "④",
    title: "Section 20 NI Act Prior Intimation Before Cheque Presentation",
    explanation:
      "When a stockist or franchisee hands over a blank signed security cheque, Section 20 of the NI Act confers prima facie authority on the holder to fill in the crystallized liability. Giving formal prior notice of the exact outstanding sum and granting 7 days before filling and depositing the cheque completely neutralizes the defense of 'cheque misuse, fraud or extortion' under the Supreme Court doctrine in Bir Singh v. Mukesh Kumar.",
    statuteRef: "Section 20 Negotiable Instruments Act, 1881",
  },
  {
    marker: "⑤",
    title: "Statutory Interest Mandate Under Section 16 MSMED Act",
    explanation:
      "For Udyam-registered pharmaceutical manufacturers, C&F agents, and surgical dealers, Section 16 of the MSMED Act mandates payment of compound interest with monthly rests at 3 times the RBI Bank Rate (currently 19.5%–21.75% p.a.). This statutory liability overrides any unilateral credit terms or verbal understanding.",
    statuteRef: "MSMED Act, 2006 (Sections 15, 16 & 17)",
  },
  {
    marker: "⑥",
    title: "Peremptory Call to Clear Dues & Criminal / Civil Prosecution Warning",
    explanation:
      "Gives the debtor a strict 15-day window to remit the cleared funds via RTGS/NEFT. Explicitly reserves the right to initiate Summary Suits under Order XXXVII CPC, commercial insolvency proceedings under IBC Section 9 (where applicable), criminal complaints under BNS Sections 316/318, and Section 138 NI Act prosecution upon cheque dishonour.",
    statuteRef: "Order XXXVII CPC & Sections 316, 318 BNS 2023",
  },
];

export default function PharmaStockistNoticeWorkspace() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>("pharma-cf-to-stockist");
  const [activeTab, setActiveTab] = useState<"preview" | "edit">("preview");
  const [copied, setCopied] = useState<boolean>(false);

  // Initialize state from preset
  const [formData, setFormData] = useState<TemplatePreset>(PRESETS[0]);

  const handleSelectPreset = (preset: TemplatePreset) => {
    setSelectedPresetId(preset.id);
    setFormData(preset);
  };

  const handleInputChange = (field: keyof TemplatePreset, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Generate plain text for copying and preview
  const generatedNoticeText = useMemo(() => {
    const interestCalc = (formData.totalPrincipal * (formData.interestRate / 100) * (formData.creditDays / 365)).toFixed(2);
    const grandTotal = (formData.totalPrincipal + parseFloat(interestCalc)).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });

    const securityChequeClause = formData.hasSecurityCheque
      ? `
4. PRIOR STATUTORY INTIMATION UNDER SECTION 20 OF THE NEGOTIABLE INSTRUMENTS ACT, 1881 (FILLING & PRESENTATION OF SECURITY CHEQUE):
   a) That at the inception of the business dealership / stockist arrangement, you the Addressee had voluntarily issued and delivered to My Client a signed security cheque bearing No. ${formData.chequeNo || "[CHEQUE NO.]"} drawn on ${formData.chequeBank || "[BANK NAME]"}, ${formData.chequeBranch || "[BRANCH]"}, Account No. ${formData.chequeAccount || "[ACCOUNT NO.]"} ④.
   b) Under Section 20 of the Negotiable Instruments Act, 1881, the delivery of a signed blank/undated inchoate instrument confers prima facie statutory authority upon the holder in due course to complete the instrument for an amount not exceeding the crystallized, legally enforceable debt due as on the date of filling (as authoritatively settled by the Hon'ble Supreme Court of India in Bir Singh v. Mukesh Kumar (2019) 4 SCC 197).
   c) PLEASE TAKE SPECIFIC NOTICE that the liquidated and admitted debt outstanding from you as on date stands crystallized at Rs. ${formData.totalPrincipal.toLocaleString("en-IN")}/- (Rupees ${numberToWords(formData.totalPrincipal)} only) plus applicable statutory interest.
   d) In the event you fail to remit the entire outstanding debt within 7 (seven) days of receipt of this notice, My Client shall exercise its statutory authority under Section 20 NI Act to fill in the date and the crystallized sum of Rs. ${formData.totalPrincipal.toLocaleString("en-IN")}/- upon Cheque No. ${formData.chequeNo || "[CHEQUE NO.]"} and deposit the same for clearance.
   e) Be warned that in the event the said cheque is dishonoured upon presentation for 'Funds Insufficient', 'Payment Stopped', or 'Account Closed', criminal proceedings under Section 138 read with Section 141 of the Negotiable Instruments Act, 1881 and Section 143A for 20% mandatory interim compensation shall be instituted against you and each of your managing partners/directors without further notice.`
      : `
4. EXCLUSION OF UNAUTHORIZED ADJUSTMENTS & DEMAND FOR RTGS CLEARANCE:
   a) That you the Addressee have failed to provide any banking instrument or valid promissory security to discharge the aforesaid admitted ledger liability.
   b) You are hereby called upon to liquidate the entire outstanding sum of Rs. ${formData.totalPrincipal.toLocaleString("en-IN")}/- exclusively via cleared electronic bank transfer (RTGS / NEFT / IMPS) to My Client's designated bank account within the statutory notice period.`;

    const msmeClause = formData.creditorUdyam
      ? `
5. STATUTORY COMPOUND INTEREST UNDER SECTION 16 OF THE MSMED ACT, 2006:
   My Client is a duly registered Micro/Small Enterprise under the Micro, Small and Medium Enterprises Development Act, 2006 holding Udyam Registration No. ${formData.creditorUdyam} ⑤. By virtue of Section 15 and Section 16 of the MSMED Act, 2006, you the Addressee are under a statutory mandate to pay compound interest with monthly rests at three times (3x) the Bank Rate notified by the Reserve Bank of India on all payments delayed beyond the agreed period of ${formData.creditDays} days. The statutory interest accrued as on date stands at Rs. ${parseFloat(interestCalc).toLocaleString("en-IN")}/-, and shall continue to accrue until final realization.`
      : `
5. COMMERCIAL INTEREST CLAIM:
   Under the express terms printed on each invoice and accepted by your receipt of pharmaceutical consignments, any payment delayed beyond ${formData.creditDays} days attracts commercial overdue interest at the rate of ${formData.interestRate}% per annum, amounting to Rs. ${parseFloat(interestCalc).toLocaleString("en-IN")}/- as on date, which you are legally bound to pay.`;

    return `LEGAL DEMAND NOTICE UNDER ORDER XXXVII CPC, DRUGS AND COSMETICS RULES 1945, AND SECTION 20 NEGOTIABLE INSTRUMENTS ACT, 1881

DISPATCHED VIA REGISTERED SPEED POST WITH ACKNOWLEDGEMENT DUE (RPAD), EMAIL & CERTIFIED WHATSAPP TRANSMISSION

Date: ${formData.noticeDate}
Notice Reference No.: ${formData.noticeRef}

TO,
1. ${formData.debtorName}
   Through its Proprietor / Managing Partners / Directors: ${formData.debtorProprietor}
   Drug License No.: ${formData.debtorDL} ②
   GSTIN: ${formData.debtorGSTIN}
   Premises: ${formData.debtorAddress}
   Mobile / WhatsApp: ${formData.debtorContact}
   Email: ${formData.debtorEmail}
   (hereinafter referred to as the "Addressee / Debtor Stockist")

FROM,
${formData.advocateName}, Advocate
Bar Council Enrolment No.: ${formData.advocateEnrolment}
${formData.advocateOffice}
Email: legalrecovery.notice@gmail.com

UNDER INSTRUCTIONS FROM AND ON BEHALF OF MY CLIENT:
${formData.creditorName}
Drug License No.: ${formData.creditorDL} ②
GSTIN: ${formData.creditorGSTIN}
Registered Office: ${formData.creditorAddress}
${formData.creditorUdyam ? `MSME Udyam Registration No.: ${formData.creditorUdyam}` : ""}
Contact Email: ${formData.creditorEmail}
(hereinafter referred to as "My Client")

SIR / MADAM,

Under express instructions from and on behalf of My Client above-named, I hereby serve upon you, the Addressee, this formal Legal Demand Notice in the following factual and statutory terms:

1. COMMERCIAL RELATIONSHIP & DRUG SUPPLY CONTRACT:
   a) That My Client is a reputed manufacturer, super-stockist, and distributor of pharmaceutical formulations, medical devices, and surgical goods, duly licensed under Form 20B and Form 21B of the Drugs and Cosmetics Rules, 1945 ②.
   b) That you the Addressee carry on the wholesale / retail business of selling medicines and surgical consumables under Drug License No. ${formData.debtorDL} and GSTIN ${formData.debtorGSTIN}.
   c) That on the basis of your commercial orders, purchase requisitions, and dealership covenants, My Client supplied genuine pharmaceutical and surgical consignments to you on a rolling credit facility of ${formData.creditDays} days.

2. LIQUIDATED DEBT UNDER ORDER XXXVII CPC (TAX INVOICES, BATCH NUMBERS & LRs):
   a) That between ${formData.invoiceRange}, My Client sold, supplied, and safely delivered pharmaceutical consignments under ${formData.invoiceCount} distinct Tax Invoices totaling a principal invoice value of Rs. ${formData.totalPrincipal.toLocaleString("en-IN")}/- (Rupees ${numberToWords(formData.totalPrincipal)} only) ①.
   b) That every pharmaceutical batch mentioned in the Invoices was accompanied by authentic batch test certificates (COA), Delivery Challans, Transport Bilties (LRs), and GST e-Way bills. The consignments were duly received, acknowledged, and accepted by you without any demur, protest, or dispute regarding quality, packaging, or quantity ①.
   c) Under Order XXXVII Rule 1(2) of the Code of Civil Procedure, 1908 (CPC), each accepted Tax Invoice and signed delivery receipt constitutes a written contract giving rise to an admitted, liquidated debt.

3. STATUTORY BAR ON UNILATERAL EXPIRED / BREAKAGE RETURNS (SALE OF GOODS ACT s.42 & CGST ACT s.34):
   a) That under Section 42 of the Sale of Goods Act, 1930, having received and retained the pharmaceutical goods for months without issuing any rejection notice within the contractual inspection window of 48 to 72 hours, you are deemed in law to have unconditionally accepted the goods ③.
   b) PLEASE TAKE NOTICE that any retrospective attempt on your part to invent pretextual claims of 'slow-moving stock', 'near-expiry medicines', or 'unilateral breakage returns' to avoid payment is legally barred and invalid in toto.
   c) Under Section 34(2) of the Central Goods and Services Tax (CGST) Act, 2017, no credit note can be unilaterally issued after the statutory annual deadline, and CBIC Circular No. 72/46/2018-GST establishes that return of time-expired stock constitutes an independent fresh supply requiring mutual agreement, not a deduction from overdue ledgers ③.
${securityChequeClause}
${msmeClause}

6. FINAL PEREMPTORY DEMAND & PERCOLATING LEGAL LIABILITIES:
   In view of the above-stated facts and statutory provisions, My Client hereby calls upon you, the Addressee:
   a) To pay and remit the entire principal debt of Rs. ${formData.totalPrincipal.toLocaleString("en-IN")}/- (Rupees ${numberToWords(formData.totalPrincipal)} only) along with accrued statutory interest of Rs. ${parseFloat(interestCalc).toLocaleString("en-IN")}/-, aggregating to Rs. ${grandTotal}/- to My Client within 15 (FIFTEEN) DAYS of the receipt of this legal notice ⑥;
   b) To pay a sum of Rs. 15,000/- (Rupees Fifteen Thousand only) towards the professional drafting and dispatch costs of this statutory legal demand notice;
   c) In default whereof, My Client has given me peremptory instructions to initiate the following legal actions against you, your firm/company, and every person in charge of its affairs, entirely at your risk, cost, and consequence:
      i. Instituting a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 before the competent Commercial Court for immediate decree of the principal and 18%–21.75% interest;
      ii. Presenting Cheque No. ${formData.chequeNo || "[CHEQUE NO.]"} for encashment under Section 20 of the NI Act and, upon dishonour, instituting criminal prosecution under Section 138/141 NI Act before the Judicial Magistrate;
      iii. Filing a statutory reference under Section 18 of the MSMED Act, 2006 before the Micro and Small Enterprises Facilitation Council (MSEFC) for recovery with 3x RBI compound penal interest;
      iv. Lodging a criminal complaint under Sections 316 and 318 of the Bharatiya Nyaya Sanhita, 2023 (BNS) for criminal breach of trust and cheating;
      v. Intimating the State Licensing Authority (Drugs Control Administration) regarding unauthorized diversion and ledger default under the conditions of Drug License Form 20B/21B.

A copy of this Legal Notice is retained in my office along with the postal receipt, electronic delivery transmission logs, and Certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 for production before the Court.

Dated: ${formData.noticeDate}
Place: ${formData.advocateOffice.split(",").slice(-2)[0]?.trim() || "New Delhi"}

[FACT VERIFICATION & SEAL]
${formData.advocateName}, Advocate
Counsel for the Creditor`;
  }, [formData]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNoticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadDoc = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedNoticeText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `Legal_Notice_Pharma_Stockist_${formData.debtorName.replace(/[^a-zA-Z0-9]/g, "_")}.doc`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full space-y-6">
      {/* Preset Selector Banner */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-black uppercase tracking-wider text-slate-500">
            Select Commercial Pharma Scenario Preset:
          </span>
          <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
            Ready-to-Use Advocate Format
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PRESETS.map((preset) => {
            const isSelected = preset.id === selectedPresetId;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleSelectPreset(preset)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/50"
                    : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-red-500/20 text-red-400 border border-red-400/30"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {preset.badge}
                  </span>
                  <span className={`text-xs font-bold ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    ₹{(preset.totalPrincipal / 100000).toFixed(2)}L
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                  {preset.label}
                </h4>
                <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? "text-slate-400" : "text-slate-500"}`}>
                  {preset.hasSecurityCheque ? "Includes NI Act s.20 Cheque Clause" : "Order 37 Invoices + Drug License"}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Workspace Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "preview"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              📄 Notice Draft Preview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("edit")}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                activeTab === "edit"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              ✏️ Customize Form Fields
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
          >
            {copied ? "✓ Copied!" : "📋 Copy Notice Text"}
          </button>
          <button
            type="button"
            onClick={handleDownloadDoc}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            📥 Download .doc
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-300 cursor-pointer"
          >
            🖨️ Print / PDF
          </button>
        </div>
      </div>

      {/* Tab 1: Live Interactive Preview */}
      {activeTab === "preview" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Sample Document Draft (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                Statutory Notice Preview &bull; Order XXXVII &amp; NI Act s.20
              </span>
              <span className="text-[10px] bg-red-950 text-red-400 font-bold px-2 py-0.5 rounded-md border border-red-800">
                Footnotes ①–⑥
              </span>
            </div>
            <div className="p-4 sm:p-6 bg-slate-50/50">
              <pre className="font-mono text-xs sm:text-[13px] text-slate-800 whitespace-pre-wrap leading-relaxed select-all bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-inner overflow-x-auto max-h-[720px] overflow-y-auto">
                {generatedNoticeText}
              </pre>
            </div>
            <div className="px-4 py-3 bg-slate-100 border-t border-slate-200 text-slate-500 text-[11px] flex flex-wrap items-center justify-between gap-2">
              <span>Ready for legal dispatch by registered advocate. Replace bracketed text if any.</span>
              <span className="font-semibold text-slate-700">Archetype: P1 Commercial Notice</span>
            </div>
          </div>

          {/* Right Column: Numbered Margin Annotations Breakdown (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-800 shadow-sm">
              <h3 className="text-sm font-extrabold tracking-tight">
                Statutory Margin Annotations ①–⑥
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Why generic debt templates fail in pharma recovery and why each specific statutory clause is mandatory:
              </p>
            </div>

            <ol className="space-y-3 list-none">
              {ANNOTATIONS.map((ann, i) => (
                <li
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-3.5 sm:p-4 shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {ann.marker}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                        {ann.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {ann.explanation}
                      </p>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1">
                        Governing Law: {ann.statuteRef}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {/* Tab 2: Form Field Editor */}
      {activeTab === "edit" && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Customize Legal Notice Variables
              </h3>
              <p className="text-xs text-slate-500">
                Update creditor, debtor, invoice schedule, and cheque details. The legal notice draft updates automatically.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className="text-xs font-bold text-[#DC2626] hover:underline cursor-pointer"
            >
              Back to Preview &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Creditor Section */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                Creditor / Claimant Details (Pharma Manufacturer / C&amp;F)
              </h4>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Company / Firm Name</label>
                <input
                  type="text"
                  value={formData.creditorName}
                  onChange={(e) => handleInputChange("creditorName", e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Drug License (20B/21B)</label>
                  <input
                    type="text"
                    value={formData.creditorDL}
                    onChange={(e) => handleInputChange("creditorDL", e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">GSTIN</label>
                  <input
                    type="text"
                    value={formData.creditorGSTIN}
                    onChange={(e) => handleInputChange("creditorGSTIN", e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Registered Address</label>
                <input
                  type="text"
                  value={formData.creditorAddress}
                  onChange={(e) => handleInputChange("creditorAddress", e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">MSME Udyam Registration (Optional)</label>
                <input
                  type="text"
                  value={formData.creditorUdyam}
                  onChange={(e) => handleInputChange("creditorUdyam", e.target.value)}
                  placeholder="e.g. UDYAM-HR-05-XXXXX"
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
            </div>

            {/* Debtor Section */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                Debtor Stockist / Chemist Details
              </h4>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Stockist / Chemist Trade Name</label>
                <input
                  type="text"
                  value={formData.debtorName}
                  onChange={(e) => handleInputChange("debtorName", e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Proprietor / Partners / Directors</label>
                <input
                  type="text"
                  value={formData.debtorProprietor}
                  onChange={(e) => handleInputChange("debtorProprietor", e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Stockist Drug License No.</label>
                  <input
                    type="text"
                    value={formData.debtorDL}
                    onChange={(e) => handleInputChange("debtorDL", e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Stockist GSTIN</label>
                  <input
                    type="text"
                    value={formData.debtorGSTIN}
                    onChange={(e) => handleInputChange("debtorGSTIN", e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Debtor Premises Address</label>
                <input
                  type="text"
                  value={formData.debtorAddress}
                  onChange={(e) => handleInputChange("debtorAddress", e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
            </div>

            {/* Financial Ledger & Invoices */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                Financial Claim &amp; Invoice Schedule
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Principal Overdue (₹)</label>
                  <input
                    type="number"
                    value={formData.totalPrincipal}
                    onChange={(e) => handleInputChange("totalPrincipal", parseFloat(e.target.value) || 0)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">No. of Overdue Invoices</label>
                  <input
                    type="number"
                    value={formData.invoiceCount}
                    onChange={(e) => handleInputChange("invoiceCount", parseInt(e.target.value) || 1)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Invoice Date Range</label>
                <input
                  type="text"
                  value={formData.invoiceRange}
                  onChange={(e) => handleInputChange("invoiceRange", e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Agreed Credit Period (Days)</label>
                  <input
                    type="number"
                    value={formData.creditDays}
                    onChange={(e) => handleInputChange("creditDays", parseInt(e.target.value) || 30)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Interest Rate (% p.a.)</label>
                  <input
                    type="number"
                    step="0.25"
                    value={formData.interestRate}
                    onChange={(e) => handleInputChange("interestRate", parseFloat(e.target.value) || 18)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Security Cheque (NI Act Section 20 Clause) */}
            <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Security Cheque (Section 20 NI Act)
                </h4>
                <label className="inline-flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.hasSecurityCheque}
                    onChange={(e) => handleInputChange("hasSecurityCheque", e.target.checked)}
                    className="rounded text-red-600 focus:ring-red-500"
                  />
                  <span className="text-[11px] font-bold text-slate-700">Include Cheque Clause</span>
                </label>
              </div>

              {formData.hasSecurityCheque ? (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Cheque Number</label>
                      <input
                        type="text"
                        value={formData.chequeNo}
                        onChange={(e) => handleInputChange("chequeNo", e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Bank Name</label>
                      <input
                        type="text"
                        value={formData.chequeBank}
                        onChange={(e) => handleInputChange("chequeBank", e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Bank Branch</label>
                      <input
                        type="text"
                        value={formData.chequeBranch}
                        onChange={(e) => handleInputChange("chequeBranch", e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Account Number</label>
                      <input
                        type="text"
                        value={formData.chequeAccount}
                        onChange={(e) => handleInputChange("chequeAccount", e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  Security cheque clause is disabled. The notice will demand direct electronic bank transfer (RTGS / NEFT) without cheque presentation intimation.
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className="px-5 py-2.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-xs cursor-pointer shadow-sm"
            >
              Generate Updated Notice Draft &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Utility: Convert number to words in Indian Rupees
function numberToWords(num: number): string {
  if (isNaN(num) || num === 0) return "Zero";
  const a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function inWords(n: number): string {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " and " + inWords(n % 100) : "");
    if (n < 100000)
      return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 !== 0 ? " " + inWords(n % 1000) : "");
    if (n < 10000000)
      return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 !== 0 ? " " + inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + " Crore" + (n % 10000000 !== 0 ? " " + inWords(n % 10000000) : "");
  }

  return inWords(Math.floor(num));
}

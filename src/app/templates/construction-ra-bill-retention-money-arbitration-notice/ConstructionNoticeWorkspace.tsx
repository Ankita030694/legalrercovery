"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Copy,
  Check,
  Download,
  Printer,
  Sparkles,
  Building2,
  FileSpreadsheet,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Info,
} from "lucide-react";

interface RABillRow {
  billNo: string;
  mbRef: string;
  submissionDate: string;
  grossCertified: number;
  uncertifiedMB: number;
  statutoryDeductions: number; // TDS, GST-TDS, Labour Cess
  retentionDeducted: number;
  paidAmount: number;
}

interface TemplatePreset {
  id: string;
  label: string;
  badge: string;
  description: string;
  contractorName: string;
  contractorGSTIN: string;
  contractorPAN: string;
  contractorAddress: string;
  contractorSignatory: string;
  employerName: string;
  employerSignatory: string;
  employerGSTIN: string;
  employerAddress: string;
  workOrderNo: string;
  workOrderDate: string;
  projectName: string;
  projectLocation: string;
  originalContractValue: number;
  dlpCompletionDate: string;
  dlpExpiryDate: string;
  completionCertRef: string;
  retentionPercent: number;
  totalRetentionWithheld: number;
  pbgNumber: string;
  pbgBank: string;
  pbgAmount: number;
  pbgExpiryDate: string;
  interestRate: number;
  cureDays: number;
  enableSection21: boolean;
  enableCommercialCourt: boolean;
  enablePBGWarning: boolean;
  enableBSA63: boolean;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
  bills: RABillRow[];
}

const PRESETS: TemplatePreset[] = [
  {
    id: "combined-ra-and-retention",
    label: "Unpaid RA Bills + Post-DLP Retention Demand Notice (Private Employer / Developer)",
    badge: "Most Used by Civil/MEP Contractors",
    description: "Itemizes overdue Running Account bills, uncertified MB entries, and demands release of retention money after DLP completion.",
    contractorName: "Apex Infrastructure & Engineering Projects LLP",
    contractorGSTIN: "27AABCA1234F1Z5",
    contractorPAN: "AABCA1234F",
    contractorAddress: "Plot No. 42, Sector 18, MIDC Industrial Area, Turbhe, Navi Mumbai, Maharashtra - 400705",
    contractorSignatory: "Mr. Rameshwar Sharma (Designated Partner)",
    employerName: "Skyline Mega Buildcon Private Limited",
    employerSignatory: "The Board of Directors / Managing Director",
    employerGSTIN: "27AAECS9876K1ZY",
    employerAddress: "14th Floor, Skyline World Towers, Senapati Bapat Marg, Lower Parel, Mumbai - 400013",
    workOrderNo: "SMBPL/CIVIL/PKG-04/2024/089",
    workOrderDate: "12 March 2024",
    projectName: "Skyline Signature Commercial & IT Hub",
    projectLocation: "Kharadi, Pune, Maharashtra",
    originalContractValue: 145000000, // ₹14.50 Cr
    dlpCompletionDate: "15 September 2025",
    dlpExpiryDate: "14 September 2026",
    completionCertRef: "CC/SMBPL/2025/112 dated 18 Sept 2025",
    retentionPercent: 5,
    totalRetentionWithheld: 7250000, // ₹72.50 Lakh
    pbgNumber: "BG/HDFC/2024/7741",
    pbgBank: "HDFC Bank, Fort Branch, Mumbai",
    pbgAmount: 14500000, // ₹1.45 Cr
    pbgExpiryDate: "31 December 2026",
    interestRate: 18,
    cureDays: 15,
    enableSection21: false,
    enableCommercialCourt: true,
    enablePBGWarning: true,
    enableBSA63: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/AMA/CONST/2026/RA-104",
    noticeDate: "16 November 2026",
    bills: [
      {
        billNo: "RA Bill No. 14 (Certified)",
        mbRef: "MB Book 09, Pages 45–62",
        submissionDate: "10 June 2025",
        grossCertified: 8450000,
        uncertifiedMB: 0,
        statutoryDeductions: 338000, // TDS & GST TDS
        retentionDeducted: 422500,
        paidAmount: 5000000,
      },
      {
        billNo: "RA Bill No. 15 (Final Joint MB Recorded)",
        mbRef: "MB Book 11, Pages 12–29",
        submissionDate: "20 September 2025",
        grossCertified: 9800000,
        uncertifiedMB: 1850000,
        statutoryDeductions: 466000,
        retentionDeducted: 490000,
        paidAmount: 0,
      },
    ],
  },
  {
    id: "section-21-combined-arbitration",
    label: "Combined Demand cum Section 21 Arbitration Notice (EPC Contract with Arbitral Clause)",
    badge: "Pre-Arbitration Invocation",
    description: "Invokes Section 21 of the Arbitration Act, freezes limitation under BSNL v. Nortel, proposes CORE-compliant sole arbitrators, and warns against retaliatory PBG encashment.",
    contractorName: "Vanguard Power & MEP Contractors Private Limited",
    contractorGSTIN: "06AABCV4455G1Z9",
    contractorPAN: "AABCV4455G",
    contractorAddress: "Tower B-2, 5th Floor, Spaze I-Tech Park, Sector 49, Sohna Road, Gurugram, Haryana - 122018",
    contractorSignatory: "Mr. Alok Nath Singhal (Director - Contracts)",
    employerName: "North-West Thermal Infra & Power Corporation Ltd",
    employerSignatory: "Chief General Manager (Contracts & Procurement)",
    employerGSTIN: "07AAACN1122D1Z0",
    employerAddress: "Scope Complex, Core 4, 7 Lodhi Road, New Delhi - 110003",
    workOrderNo: "NWTIPC/MEP-BOP/2023/NIT-410",
    workOrderDate: "18 November 2023",
    projectName: "Turnkey Balance of Plant (BOP) Electrical & HVAC Package",
    projectLocation: "Panipat Super-Thermal Expansion Unit, Haryana",
    originalContractValue: 280000000, // ₹28 Cr
    dlpCompletionDate: "31 October 2025",
    dlpExpiryDate: "30 October 2026",
    completionCertRef: "TOC/NWTIPC/BOP/882 dated 05 Nov 2025",
    retentionPercent: 10,
    totalRetentionWithheld: 28000000, // ₹2.80 Cr
    pbgNumber: "PBG/SBIN/2023/90123",
    pbgBank: "State Bank of India, CAG Branch, New Delhi",
    pbgAmount: 28000000,
    pbgExpiryDate: "31 March 2027",
    interestRate: 18,
    cureDays: 30,
    enableSection21: true,
    enableCommercialCourt: true,
    enablePBGWarning: true,
    enableBSA63: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/AMA/ARB-SEC21/2026/902",
    noticeDate: "16 November 2026",
    bills: [
      {
        billNo: "RA Bill No. 21 (Certified Pre-Final)",
        mbRef: "MB Vol 14, Entry 101–142",
        submissionDate: "15 August 2025",
        grossCertified: 18200000,
        uncertifiedMB: 0,
        statutoryDeductions: 728000,
        retentionDeducted: 1820000,
        paidAmount: 8000000,
      },
      {
        billNo: "Final Bill & Extra Deviation Items",
        mbRef: "Final MB Book 16, Pages 01–58",
        submissionDate: "10 November 2025",
        grossCertified: 24500000,
        uncertifiedMB: 6500000,
        statutoryDeductions: 1240000,
        retentionDeducted: 2450000,
        paidAmount: 0,
      },
    ],
  },
  {
    id: "subcontractor-to-main-contractor",
    label: "Subcontractor Notice to Main Contractor (Rebutting 'Pay-When-Paid' Clause)",
    badge: "Subcontractor Protection",
    description: "Rebuts illegal back-to-back excuses when the main contractor withholds payments citing non-receipt from the project owner/client.",
    contractorName: "Precision Façade & Glazing Solutions LLP",
    contractorGSTIN: "29AABCP8833E1ZX",
    contractorPAN: "AABCP8833E",
    contractorAddress: "Survey No. 71, Peenya Industrial Area 3rd Phase, Bengaluru, Karnataka - 560058",
    contractorSignatory: "Mr. Syed Farooq (Managing Partner)",
    employerName: "Pragati EPC & Infrastructure Conglomerate Ltd",
    employerSignatory: "Vice President (Commercial & Billing)",
    employerGSTIN: "29AAACP9900H1ZM",
    employerAddress: "Pragati Tech Square, 6th Floor, Whitefield Main Road, Bengaluru - 560066",
    workOrderNo: "PRAGATI/SUBCON/FACADE/2024/019",
    workOrderDate: "05 February 2024",
    projectName: "Global Technology Hub - Tower C & D Structural Glazing",
    projectLocation: "Electronic City, Bengaluru, Karnataka",
    originalContractValue: 62000000, // ₹6.20 Cr
    dlpCompletionDate: "30 April 2026",
    dlpExpiryDate: "29 October 2026",
    completionCertRef: "HANDOVER/GTH/FACADE/440 dated 02 May 2026",
    retentionPercent: 5,
    totalRetentionWithheld: 3100000, // ₹31 Lakh
    pbgNumber: "BG/ICICI/2024/889",
    pbgBank: "ICICI Bank, MG Road, Bengaluru",
    pbgAmount: 3100000,
    pbgExpiryDate: "31 January 2027",
    interestRate: 18,
    cureDays: 15,
    enableSection21: false,
    enableCommercialCourt: true,
    enablePBGWarning: true,
    enableBSA63: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/AMA/SUBCON/2026/812",
    noticeDate: "16 November 2026",
    bills: [
      {
        billNo: "Sub-RA Bill No. 08 (Certified by Site Incharge)",
        mbRef: "Joint MB Record Vol 4, pp. 22–39",
        submissionDate: "28 February 2026",
        grossCertified: 7800000,
        uncertifiedMB: 0,
        statutoryDeductions: 312000,
        retentionDeducted: 390000,
        paidAmount: 2500000,
      },
      {
        billNo: "Sub-RA Bill No. 09 (Final Handover Bill)",
        mbRef: "Joint MB Record Vol 5, pp. 01–19",
        submissionDate: "15 May 2026",
        grossCertified: 9400000,
        uncertifiedMB: 1200000,
        statutoryDeductions: 424000,
        retentionDeducted: 470000,
        paidAmount: 0,
      },
    ],
  },
  {
    id: "ndc-duress-protest-letter",
    label: "Bonus: Formal Protest Letter — Signing No-Claim Certificate (NDC) Under Financial Coercion",
    badge: "Ambica & Boghara Polyfab Shield",
    description: "Issued simultaneously before or immediately after signing a forced 'No Claim Certificate' (NDC) or Final Discharge Voucher to protect claims from being extinguished.",
    contractorName: "Shree Krishna Structural Works Private Limited",
    contractorGSTIN: "08AABCS7711B1ZU",
    contractorPAN: "AABCS7711B",
    contractorAddress: "Industrial Estate, Road No. 14, Vishwakarma Industrial Area, Jaipur, Rajasthan - 302013",
    contractorSignatory: "Mr. Mahendra Agarwal (Managing Director)",
    employerName: "Apex Metro Rail & Urban Transit Corporation Ltd",
    employerSignatory: "Director (Works) / Chief Engineer (Civil)",
    employerGSTIN: "08AAACA5544J1ZQ",
    employerAddress: "Metro Bhawan, Jyoti Nagar, Near Vidhan Sabha, Jaipur, Rajasthan - 302005",
    workOrderNo: "AMRUTC/ELEVATED-VIADUCT/PKG-02/2023",
    workOrderDate: "14 July 2023",
    projectName: "Elevated Viaduct Package 02 (Pier 104 to Pier 230)",
    projectLocation: "Jaipur Metro Phase II Extension",
    originalContractValue: 310000000, // ₹31 Cr
    dlpCompletionDate: "10 January 2026",
    dlpExpiryDate: "09 January 2027",
    completionCertRef: "METRO/CIVIL/TOC/2026/19",
    retentionPercent: 5,
    totalRetentionWithheld: 15500000,
    pbgNumber: "PBG/PNB/2023/4412",
    pbgBank: "Punjab National Bank, Corporate Branch, Jaipur",
    pbgAmount: 15500000,
    pbgExpiryDate: "30 June 2027",
    interestRate: 18,
    cureDays: 7,
    enableSection21: false,
    enableCommercialCourt: true,
    enablePBGWarning: true,
    enableBSA63: true,
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/1842/2014",
    advocateOffice: "Chamber No. 418, Lawyers Block, High Court of Delhi, New Delhi - 110001",
    noticeRef: "LR/AMA/NDC-PROTEST/2026/099",
    noticeDate: "16 November 2026",
    bills: [
      {
        billNo: "Final Certified Bill (Coerced Clearance)",
        mbRef: "Joint MB Record Vol 22, pp. 100–145",
        submissionDate: "12 February 2026",
        grossCertified: 21500000,
        uncertifiedMB: 8400000,
        statutoryDeductions: 860000,
        retentionDeducted: 1075000,
        paidAmount: 12000000,
      },
    ],
  },
];

export default function ConstructionNoticeWorkspace() {
  const [activePresetId, setActivePresetId] = useState<string>("combined-ra-and-retention");
  const [formState, setFormState] = useState<TemplatePreset>(PRESETS[0]);
  const [copied, setCopied] = useState(false);

  const handleSelectPreset = (presetId: string) => {
    const selected = PRESETS.find((p) => p.id === presetId);
    if (selected) {
      setActivePresetId(presetId);
      setFormState({ ...selected });
    }
  };

  const calculateRowOverdue = (row: RABillRow) => {
    // Overdue = (Gross Certified + Uncertified MB) - statutory deductions - retention deducted - paidAmount
    const netPayable = row.grossCertified + row.uncertifiedMB - row.statutoryDeductions - row.retentionDeducted;
    return Math.max(0, netPayable - row.paidAmount);
  };

  const totals = useMemo(() => {
    let totalGrossCertified = 0;
    let totalUncertified = 0;
    let totalStatutoryDeductions = 0;
    let totalRetentionFromBills = 0;
    let totalPaid = 0;
    let totalBillsOverdue = 0;

    formState.bills.forEach((b) => {
      totalGrossCertified += b.grossCertified;
      totalUncertified += b.uncertifiedMB;
      totalStatutoryDeductions += b.statutoryDeductions;
      totalRetentionFromBills += b.retentionDeducted;
      totalPaid += b.paidAmount;
      totalBillsOverdue += calculateRowOverdue(b);
    });

    const retentionToClaim = formState.totalRetentionWithheld > 0 ? formState.totalRetentionWithheld : totalRetentionFromBills;
    const grossPrincipalClaim = totalBillsOverdue + retentionToClaim;
    const approximateInterest = Math.round(grossPrincipalClaim * (formState.interestRate / 100) * 0.75); // ~9 months accrued interest illustrative
    const totalExecutableClaim = grossPrincipalClaim + approximateInterest;

    return {
      totalGrossCertified,
      totalUncertified,
      totalStatutoryDeductions,
      totalRetentionFromBills,
      totalPaid,
      totalBillsOverdue,
      retentionToClaim,
      grossPrincipalClaim,
      approximateInterest,
      totalExecutableClaim,
    };
  }, [formState]);

  const noticeText = useMemo(() => {
    const isProtestOnly = formState.id === "ndc-duress-protest-letter";

    if (isProtestOnly) {
      return `FORMAL PROTEST LETTER & CONCURRENT CAVEAT UNDER PROTEST:
SIGNING OF 'NO CLAIM CERTIFICATE' (NDC) / DISCHARGE VOUCHER UNDER FINANCIAL COERCION & ECONOMIC DURESS

TRANSMITTED VIA REGISTERED SPEED POST WITH A.D. & ELECTRONIC RECORD TRANSMISSION (BSA 2023 s.63)

Date: ${formState.noticeDate}
Reference Ref No: ${formState.noticeRef}

To,
${formState.employerName}
Through: ${formState.employerSignatory}
Registered Address: ${formState.employerAddress}
GSTIN: ${formState.employerGSTIN}

From / On Behalf of:
${formState.contractorName}
Represented by: ${formState.contractorSignatory}
Registered Office: ${formState.contractorAddress}
GSTIN: ${formState.contractorGSTIN} | PAN: ${formState.contractorPAN}

Subject: FORMAL INTIMATION OF SIGNING 'NO CLAIM CERTIFICATE' / FINAL DISCHARGE VOUCHER STRICTLY UNDER ECONOMIC COERCION, FINANCIAL DURESS & WITHOUT PREJUDICE ①

Project Name: ${formState.projectName}
Work Order / Contract No.: ${formState.workOrderNo} dated ${formState.workOrderDate}
Original Contract Value: ₹${formState.originalContractValue.toLocaleString("en-IN")}
Defect Liability Period Expiry Date: ${formState.dlpExpiryDate} (Completion Ref: ${formState.completionCertRef})

Dear Sir / Madam,

1. MATTER OF RECORD & ARBITRARY PRE-CONDITION:
We refer to the execution and successful completion of the subject Works Contract. The Project was virtually completed on ${formState.dlpCompletionDate} and the Defect Liability Period (DLP) has expired on ${formState.dlpExpiryDate}. Notwithstanding complete fulfillment of all contractual deliverables, your office has unlawfully withheld legitimate Running Account (RA) bills totaling ₹${totals.totalBillsOverdue.toLocaleString("en-IN")} and post-DLP Retention Money amounting to ₹${totals.retentionToClaim.toLocaleString("en-IN")}, alongside threatening wrongful invocation of Performance Bank Guarantee (PBG No. ${formState.pbgNumber} for ₹${formState.pbgAmount.toLocaleString("en-IN")} issued by ${formState.pbgBank}) ②.

2. RECORDING OF SEVERE FINANCIAL DURESS & ECONOMIC COERCION:
Your finance and billing divisions have made it an explicit, non-negotiable precondition that unless our authorized representative affixes signatures to a pre-drafted, unconditional 'No Claim Certificate' (NDC) / 'Final Discharge Voucher', not a single rupee of our admitted dues or release of our matured Bank Guarantee will be processed ③.
Our company is currently servicing substantial credit lines with commercial banks, monthly plant and machinery idling overheads, vendor payables, and labour wages. By artificially blocking our legitimate operational liquidity, you have created extreme commercial vulnerability and left us with zero financial bargaining power.

3. LEGAL PRECEDENT SHIELD (AMBICA CONSTRUCTION & BOGHARA POLYFAB):
Please be firmly put on notice that under the established law of India, as laid down by the Hon'ble Supreme Court of India in:
(i) Ambica Construction v. Union of India, (2006) 13 SCC 475: "A No-Claim Certificate given under financial duress cannot bar genuine claims from being adjudicated before an arbitral tribunal."
(ii) National Insurance Co. Ltd. v. Boghara Polyfab Pvt. Ltd., (2009) 1 SCC 267: "Discharge vouchers or no-claim certificates obtained through economic coercion, undue influence or unequal bargaining power are voidable and do not extinguish the underlying dispute."
(iii) R.L. Kalathia & Co. v. State of Gujarat, (2011) 2 SCC 400: "Even after signing a final bill and voucher without initial reservation, the contractor can establish coercion and recover outstanding dues." ④

4. CATEGORICAL RESERVATION OF CONTRACTUAL & ARBITRAL RIGHTS:
In view of the premises set forth above, this letter serves as contemporaneous and incontrovertible written evidence that:
(a) Any signature, seal, or endorsement appended by us to your 'No Claim Certificate', 'Final Settlement Voucher', or 'Nil Demand Undertaking' is done STRICTLY UNDER FINANCIAL DURESS, COERCION, AND ECONOMIC EXTORTION.
(b) Our substantive claims for:
    - Unpaid RA Bills: ₹${totals.totalBillsOverdue.toLocaleString("en-IN")}
    - Uncertified MB Value: ₹${totals.totalUncertified.toLocaleString("en-IN")}
    - Post-DLP Retention Money: ₹${totals.retentionToClaim.toLocaleString("en-IN")}
    - Delay Prolongation, Plant Idling & Statutory Interest @ 18% p.a. under Contract Act s.73
remain fully alive, active, and enforceable before the competent Commercial Court and Arbitral Tribunal ⑤.

5. NON-ENCASHMENT OF BANK GUARANTEE & REMEDIES:
You are further cautioned that any retaliatory move to encash our Performance Bank Guarantee (PBG No. ${formState.pbgNumber}) shall constitute egregious fraud and irretrievable injustice under Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 720, entitling us to immediate ex-parte injunctions under Section 9 of the Arbitration and Conciliation Act, 1996 and Order XXXIX CPC with penal costs ⑥.

Yours faithfully,

For ${formState.contractorName}
_____________________________
${formState.contractorSignatory}
Designated Authority & Authorized Signatory

Copy dispatched concurrently to:
1. Legal & Contracts Department, ${formState.employerName}
2. Branch Manager, ${formState.pbgBank} (Notice of Restraint & Prohibition of Unlawful Invocation)
3. Office Record & BSA 2023 Section 63 Digital Preservation Repository ⑦`;
    }

    // Default: Combined RA Bill & Retention Recovery Legal Demand Notice / Section 21
    return `LEGAL DEMAND NOTICE UNDER SECTIONS 55 & 73 OF THE INDIAN CONTRACT ACT, 1872
READ WITH SECTION 2(1)(c)(vi) OF THE COMMERCIAL COURTS ACT, 2015 ${
      formState.enableSection21 ? "\nAND NOTICE INVOKING ARBITRATION UNDER SECTION 21 OF THE ARBITRATION AND CONCILIATION ACT, 1996" : ""
    }

REGISTERED SPEED POST WITH ACKNOWLEDGEMENT DUE & REGISTERED EMAIL TRANSMISSION (BSA 2023 s.63)

Date: ${formState.noticeDate}
Notice Ref No: ${formState.noticeRef}

To,
${formState.employerName}
Through: ${formState.employerSignatory}
Registered Address: ${formState.employerAddress}
GSTIN: ${formState.employerGSTIN}
(hereinafter referred to as the "Employer / Addressee")

Under instructions from and on behalf of our Client:
${formState.contractorName}
Having Registered Office at: ${formState.contractorAddress}
GSTIN: ${formState.contractorGSTIN} | PAN: ${formState.contractorPAN}
Represented by: ${formState.contractorSignatory}
(hereinafter referred to as "Our Client")

Sir / Madam,

Under instructions from and on behalf of Our Client above-named, we hereby serve upon you this formal Legal Notice ① in respect of substantial overdue Running Account (RA) bills, uncertified Joint Measurement Book (MB) works, wrongfully withheld Defect Liability Period (DLP) Retention Money, and unlawful retention of Performance Bank Guarantees, in the following terms:

1. THE CONTRACT & STATUTORY COMMERCIAL NATURE:
1.1. That Our Client and your company entered into a formal Works Contract / Work Order bearing Ref No. ${formState.workOrderNo} dated ${formState.workOrderDate} for the execution of: "${formState.projectName}" situated at ${formState.projectLocation}, with an original awarded contract value of ₹${formState.originalContractValue.toLocaleString("en-IN")}.
1.2. That the underlying subject matter constitutes a high-value infrastructure and construction dispute squarely falling within the definition of a "Commercial Dispute" under Section 2(1)(c)(vi) of the Commercial Courts Act, 2015 ②.

2. COMPLETION OF WORKS & DEFECT LIABILITY PERIOD (DLP) EXPIRY:
2.1. That Our Client duly executed and completed the contractual works to the full satisfaction of your site engineers and project management consultants (PMC). Virtual Completion was formally recorded on ${formState.dlpCompletionDate} vide Certificate Ref: ${formState.completionCertRef}.
2.2. That as per Clause [Retention & DLP] of the Work Order, the Defect Liability Period of 12 months expired on ${formState.dlpExpiryDate}. During the entire DLP, no defect notice was served upon Our Client, nor did you incur any expenditure towards rectification.
2.3. That upon the expiry of DLP on ${formState.dlpExpiryDate}, the accumulated Retention Money amounting to ₹${totals.retentionToClaim.toLocaleString("en-IN")} became immediately and unconditionally payable in liquid funds ③.

3. SCHEDULE OF UNPAID RUNNING ACCOUNT (RA) BILLS & UNRECORDED MB VALUES:
3.1. That throughout the execution, Our Client submitted Running Account (RA) bills supported by joint measurement sheets recorded in the official Measurement Books (MB). Despite certification by your site engineers, your finance desk has withheld substantial admitted and joint-measurement payments ④:

--------------------------------------------------------------------------------------------------------------------------------------------------
BILL NO. & MB REF                   | GROSS CERTIFIED (₹) | UNCERTIFIED MB (₹) | STATUTORY DEDUCTIONS (₹) | RETENTION (₹) | NET OVERDUE (₹)
--------------------------------------------------------------------------------------------------------------------------------------------------
${formState.bills
  .map(
    (b) =>
      `${b.billNo.padEnd(35)} | ₹${b.grossCertified.toLocaleString("en-IN").padEnd(17)} | ₹${b.uncertifiedMB.toLocaleString("en-IN").padEnd(16)} | ₹${b.statutoryDeductions.toLocaleString("en-IN").padEnd(20)} | ₹${b.retentionDeducted.toLocaleString("en-IN").padEnd(11)} | ₹${calculateRowOverdue(b).toLocaleString("en-IN")}`
  )
  .join("\n")}
--------------------------------------------------------------------------------------------------------------------------------------------------
TOTAL OVERDUE ON BILLS              : ₹${totals.totalBillsOverdue.toLocaleString("en-IN")}
ADD: POST-DLP RETENTION MONEY DUE   : ₹${totals.retentionToClaim.toLocaleString("en-IN")}
TOTAL PRINCIPAL AMOUNT DUE          : ₹${totals.grossPrincipalClaim.toLocaleString("en-IN")}
ADD: STATUTORY INTEREST @ ${formState.interestRate}% P.A.  : ₹${totals.approximateInterest.toLocaleString("en-IN")} (illustrative to date)
GROSS RECOVERABLE LIQUIDATED CLAIM  : ₹${totals.totalExecutableClaim.toLocaleString("en-IN")}
--------------------------------------------------------------------------------------------------------------------------------------------------

4. BREACH OF RECIPROCAL PROMISES & CONTRACT ACT REMEDIES:
4.1. That under Section 51, 52, and 54 of the Indian Contract Act, 1872, payment of certified Running Account bills is a fundamental reciprocal promise. Your persistent refusal to release certified cash flows constitutes a total breach of contract, disentitling you from asserting any liquidated damages, penalties, or counter-claims.
4.2. That Our Client has incurred massive working capital financing costs, interest penalties to material vendors, and plant idling overheads. You are legally liable under Section 73 of the Indian Contract Act, 1872 to pay interest at the rate of ${formState.interestRate}% per annum until realization.

5. PROHIBITION OF PBG ENCASHMENT & SECTION 9 INJUNCTION WARNING:
5.1. That you hold Our Client's Performance Bank Guarantee (PBG No. ${formState.pbgNumber} for ₹${formState.pbgAmount.toLocaleString("en-IN")} issued by ${formState.pbgBank}, valid up to ${formState.pbgExpiryDate}).
5.2. That the works having been completed and DLP having expired, you are obligated to return the original PBG instrument immediately. Any attempt to invoke or encash this Bank Guarantee during the pendency of this monetary dispute will constitute egregious fraud and irretrievable harm within the ratio of Gangotri Enterprises Ltd. v. Union of India (2016) 11 SCC 720. Our Client shall immediately institute an emergency Section 9 petition before the High Court of competent jurisdiction seeking an ex-parte stay against encashment at your sole risk and costs ⑤.${
      formState.enableSection21
        ? `\n\n6. FORMAL INVOCATION OF ARBITRATION UNDER SECTION 21 OF ARBITRATION ACT:
6.1. That Clause [Arbitration Clause No.] of the Work Order provides that all disputes, differences, and claims arising out of or in connection with the Contract shall be resolved by arbitration.
6.2. In compliance with Section 21 of the Arbitration and Conciliation Act, 1996 and the law laid down by the Hon'ble Supreme Court in BSNL v. Nortel Networks India Pvt. Ltd. (2021) 5 SCC 738, NOTICE IS HEREBY GIVEN THAT ARBITRATION PROCEEDINGS STAND COMMENCED ON THE DATE OF RECEIPT OF THIS NOTICE.
6.3. INELIGIBILITY OF UNILATERAL APPOINTMENT (CORE 2024 CONSTITUTION BENCH):
As declared by the 5-Judge Constitution Bench of the Supreme Court in Central Organisation for Railway Electrification (CORE) v. ECI-SPIC-SMO-MCML (JV) (2024), any clause empowering the Employer to unilaterally appoint an arbitrator or restrict nomination to its own employee/curated panel violates Section 12(5) and Article 14 of the Constitution.
6.4. PROPOSED PANEL OF INDEPENDENT SOLE ARBITRATORS:
To ensure an expeditious and neutral resolution, Our Client hereby nominates the following panel of three independent, distinguished former High Court Judges:
  (i) Hon'ble Mr. Justice [Name of Former Judge 1], Former Judge, High Court of Delhi
  (ii) Hon'ble Mr. Justice [Name of Former Judge 2], Former Judge, High Court of Bombay
  (iii) Hon'ble Ms. Justice [Name of Former Judge 3], Former Judge, High Court of Punjab & Haryana
You are requested to concur with any one of the aforementioned nominees as Sole Arbitrator within thirty (30) days of receipt hereof, failing which Our Client shall proceed to file an application under Section 11(6) of the Arbitration Act before the High Court ⑥.`
        : ""
    }

7. PEREMPTORY DEMAND:
We hereby call upon you to remit the total outstanding sum of ₹${totals.grossPrincipalClaim.toLocaleString("en-IN")} along with interest @ ${formState.interestRate}% per annum and return the original Bank Guarantee (PBG No. ${formState.pbgNumber}) within ${formState.cureDays} (${formState.cureDays === 15 ? "fifteen" : "thirty"}) days of the receipt of this legal notice, failing which Our Client has peremptory instructions to initiate appropriate legal proceedings before the Commercial Court and Arbitral Tribunal, holding you liable for all legal expenses, interest, and consequences.

A copy of this notice is retained in our chamber for judicial submission.

Yours faithfully,

${formState.advocateName}
Advocate & Legal Counsel for Our Client
Bar Council Enrolment No.: ${formState.advocateEnrolment}
${formState.advocateOffice}
Digital Verification Repository: BSA 2023 Section 63 Electronic Delivery Stamp ⑦`;
  }, [formState, totals]);

  const handleCopy = () => {
    navigator.clipboard.writeText(noticeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([noticeText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${formState.id}-${formState.noticeRef.replace(/\//g, "-")}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Legal Notice - ${formState.noticeRef}</title>
            <style>
              body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.6; margin: 40px; color: #111; }
              pre { white-space: pre-wrap; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${noticeText}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 md:p-8 space-y-8">
      {/* Header with Title and Mode Switcher */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-[#DC2626]">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Notice &amp; Clause Workspace
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Arbitration Act s.21 &bull; Contract Act s.55/73 &bull; BSA 2023 s.63
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Select Construction Recovery Notice Archetype
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Switch between four advocate-vetted contractor templates, customize your measurement book schedule, and generate a print-ready legal demand.
        </p>
      </div>

      {/* 4 Preset Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {PRESETS.map((preset) => {
          const isSelected = activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => handleSelectPreset(preset.id)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? "border-[#DC2626] bg-red-50/50 shadow-md ring-1 ring-red-300"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isSelected
                        ? "bg-[#DC2626] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {preset.badge}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[#DC2626]" />}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                  {preset.label}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {preset.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900 text-white">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
            Unpaid RA Bills
          </span>
          <span className="text-base sm:text-lg font-black text-amber-400">
            ₹{totals.totalBillsOverdue.toLocaleString("en-IN")}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
            Withheld Retention
          </span>
          <span className="text-base sm:text-lg font-black text-emerald-400">
            ₹{totals.retentionToClaim.toLocaleString("en-IN")}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
            18% Interest Claim
          </span>
          <span className="text-base sm:text-lg font-black text-slate-200">
            ₹{totals.approximateInterest.toLocaleString("en-IN")}
          </span>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
            Total Claim Value
          </span>
          <span className="text-base sm:text-lg font-black text-red-400">
            ₹{totals.totalExecutableClaim.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Customizer Tabs & Input Fields */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
          <Building2 className="w-4 h-4 text-[#DC2626]" />
          <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-wide">
            Contract &amp; Dispute Metadata Customization
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Contractor / Claimant Entity</label>
            <input
              type="text"
              value={formState.contractorName}
              onChange={(e) => setFormState({ ...formState, contractorName: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Contractor GSTIN</label>
            <input
              type="text"
              value={formState.contractorGSTIN}
              onChange={(e) => setFormState({ ...formState, contractorGSTIN: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Contractor Signatory</label>
            <input
              type="text"
              value={formState.contractorSignatory}
              onChange={(e) => setFormState({ ...formState, contractorSignatory: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Employer / Main Contractor</label>
            <input
              type="text"
              value={formState.employerName}
              onChange={(e) => setFormState({ ...formState, employerName: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Work Order / Tender Ref</label>
            <input
              type="text"
              value={formState.workOrderNo}
              onChange={(e) => setFormState({ ...formState, workOrderNo: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Project Name &amp; Package</label>
            <input
              type="text"
              value={formState.projectName}
              onChange={(e) => setFormState({ ...formState, projectName: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Defect Liability Expiry Date</label>
            <input
              type="text"
              value={formState.dlpExpiryDate}
              onChange={(e) => setFormState({ ...formState, dlpExpiryDate: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">Retention Money Withheld (₹)</label>
            <input
              type="number"
              value={formState.totalRetentionWithheld}
              onChange={(e) => setFormState({ ...formState, totalRetentionWithheld: Number(e.target.value) })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block font-bold text-slate-700 mb-1">PBG No. &amp; Amount (₹)</label>
            <input
              type="text"
              value={`${formState.pbgNumber} - ₹${formState.pbgAmount.toLocaleString("en-IN")}`}
              onChange={(e) => setFormState({ ...formState, pbgNumber: e.target.value })}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-800 font-medium focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Dynamic Statutory Toggles */}
        <div className="pt-3 border-t border-slate-200">
          <span className="text-[11px] font-bold text-slate-700 block mb-2 uppercase tracking-wide">
            Statutory Clause Toggles &amp; Escalation Rails
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <label className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={formState.enableSection21}
                onChange={(e) => setFormState({ ...formState, enableSection21: e.target.checked })}
                className="w-4 h-4 text-[#DC2626] rounded border-slate-300 focus:ring-red-500"
              />
              <span className="font-semibold text-slate-800">Section 21 Arbitration Invocation</span>
            </label>
            <label className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={formState.enablePBGWarning}
                onChange={(e) => setFormState({ ...formState, enablePBGWarning: e.target.checked })}
                className="w-4 h-4 text-[#DC2626] rounded border-slate-300 focus:ring-red-500"
              />
              <span className="font-semibold text-slate-800">PBG Non-Encashment Injunction</span>
            </label>
            <label className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={formState.enableCommercialCourt}
                onChange={(e) => setFormState({ ...formState, enableCommercialCourt: e.target.checked })}
                className="w-4 h-4 text-[#DC2626] rounded border-slate-300 focus:ring-red-500"
              />
              <span className="font-semibold text-slate-800">Commercial Courts s.2(1)(c)(vi)</span>
            </label>
            <label className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-slate-200 cursor-pointer">
              <input
                type="checkbox"
                checked={formState.enableBSA63}
                onChange={(e) => setFormState({ ...formState, enableBSA63: e.target.checked })}
                className="w-4 h-4 text-[#DC2626] rounded border-slate-300 focus:ring-red-500"
              />
              <span className="font-semibold text-slate-800">BSA 2023 s.63 Certificate</span>
            </label>
          </div>
        </div>
      </div>

      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-all shadow-sm cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied to Clipboard!" : "Copy Legal Notice"}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-600" />
            Download .txt
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-semibold text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            Print Format
          </button>
        </div>

        <div className="text-xs text-slate-500 flex items-center gap-2">
          <Info className="w-4 h-4 text-slate-400" />
          <span>Numbered badges ①&ndash;⑦ below link to statutory annotation guides</span>
        </div>
      </div>

      {/* Live Preview Console */}
      <div className="relative rounded-2xl border border-slate-800 bg-[#0F172A] p-4 sm:p-6 md:p-8 text-slate-200 shadow-2xl overflow-hidden font-mono text-xs leading-relaxed max-h-[600px] overflow-y-auto selection:bg-[#DC2626] selection:text-white">
        <div className="absolute top-3 right-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-sans font-bold">
            Real-Time Statutory Preview
          </span>
        </div>
        <pre className="whitespace-pre-wrap font-mono pt-4 text-[11px] sm:text-xs">
          {noticeText}
        </pre>
      </div>

      {/* Annotations Key / Explanations */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#DC2626]" />
          Statutory Clause Annotation Key (Numbered Badges ①–⑦)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600">
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">① Formal Statutory Demand</span>
            <span>Fixes the limitation date under Article 18/55 of the Limitation Act, 1963 and establishes creditor promptitude.</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">② Commercial Courts Act s.2(1)(c)(vi)</span>
            <span>Establishes that construction, EPC, and tender dues qualify as commercial disputes with expedited summary procedures.</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">③ Post-DLP Retention Entitlement</span>
            <span>Invokes completion certification to prove that retention money is no longer a contingent fund but an admitted liquid debt.</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">④ Certified vs Uncertified MB Ledger</span>
            <span>Forensically isolates certified admitted bills from unmeasured quantities, destroying frivolous blanket dispute tactics.</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">⑤ PBG Injunction Caution (Gangotri Precedent)</span>
            <span>Restrains retaliatory bank guarantee encashment by establishing that PBGs cannot be encashed for unadjudicated disputes.</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <span className="font-bold text-slate-900 block mb-0.5">⑥ Section 21 &amp; CORE 2024 Arbitrator Rule</span>
            <span>Freezes limitation and defeats unilateral appointment clauses in PSU/private contracts under the 2024 Constitution Bench ruling.</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 md:col-span-2">
            <span className="font-bold text-slate-900 block mb-0.5">⑦ BSA 2023 Section 63 Digital Admissibility</span>
            <span>Generates cryptographic and postal delivery certification to ensure service proof is judicially unimpeachable.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

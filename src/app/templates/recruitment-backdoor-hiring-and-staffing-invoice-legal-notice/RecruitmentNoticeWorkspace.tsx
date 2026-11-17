"use client";

import React, { useState, useId } from "react";

interface NoticeAnnotation {
  marker: string;
  title: string;
  explanation: string;
  statuteRef: string;
}

interface TemplateVariant {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  annotations: NoticeAnnotation[];
  generateNotice: (formData: WorkspaceFormData) => string;
}

interface WorkspaceFormData {
  // Creditor details
  agencyName: string;
  agencyAddress: string;
  agencyGstin: string;
  agencyUdyam: string;
  agencySignatory: string;
  agencySignatoryTitle: string;
  agencyAdvocateName: string;
  agencyAdvocateBar: string;
  agencyAdvocateChamber: string;

  // Debtor details
  clientCompanyName: string;
  clientDirectorName: string;
  clientDesignation: string;
  clientAddress: string;
  clientEmail: string;
  clientPhone: string;

  // Candidate Circumvention details (Variant 1 & 3)
  candidateName: string;
  candidateRole: string;
  cvSubmissionTimestamp: string;
  interviewDates: string;
  discoveredJoiningDate: string;
  offeredCtcAmount: string;
  placementFeePercent: string;
  penalRatePercent: string;
  candidateFeePayable: string;

  // Staffing Payroll & FMS details (Variant 2)
  staffingServiceMonth: string;
  deployedHeadcount: string;
  netWagesDisbursed: string;
  epfEsicOutlay: string;
  gstOutlay: string;
  managementFee: string;
  totalInvoiceAmount: string;
  invoiceNumber: string;
  invoiceDate: string;
  overdueDays: string;
  interestRateAnnual: string;
  cureDaysLimit: string;
  accountantPhone: string;
  agencyBankName: string;
  agencyAccountNumber: string;
  agencyIfscCode: string;
}

const DEFAULT_FORM_DATA: WorkspaceFormData = {
  agencyName: "Apex Talent Solutions & Manpower Services LLP",
  agencyAddress: "Unit 402, 4th Floor, DLF Cyber City, Sector 24, Gurugram, Haryana - 122002",
  agencyGstin: "06AAIFA1234K1ZV",
  agencyUdyam: "UDYAM-HR-03-0098765",
  agencySignatory: "Vikas Mehra",
  agencySignatoryTitle: "Managing Partner & Head of Legal",
  agencyAdvocateName: "Advocate Rohit Sharma",
  agencyAdvocateBar: "D/1482/2012 (Bar Council of Delhi)",
  agencyAdvocateChamber: "Chamber 312, Lawyers Chambers Block, Delhi High Court, New Delhi - 110503",

  clientCompanyName: "NexGen Fintech Technologies Private Limited",
  clientDirectorName: "Sanjay Singhania",
  clientDesignation: "Managing Director & CEO",
  clientAddress: "Building 7B, 8th Floor, Embassy TechVillage, Outer Ring Road, Bengaluru, Karnataka - 560103",
  clientEmail: "sanjay.s@nexgentech.in; legal@nexgentech.in; hr-head@nexgentech.in",
  clientPhone: "+91 98450 11223",

  candidateName: "Arjun Venkataraman",
  candidateRole: "Lead Cloud Infrastructure Architect",
  cvSubmissionTimestamp: "14 May 2026, 11:42 AM IST (Email & ATS Job ID #NX-8821)",
  interviewDates: "Round 1: 22 May 2026 | Technical Round 2: 29 May 2026 | VP Round: 05 June 2026",
  discoveredJoiningDate: "17 August 2026 (Verified via Corporate Email & Active Slack Directory)",
  offeredCtcAmount: "₹38,00,000/- Per Annum",
  placementFeePercent: "8.33%",
  penalRatePercent: "18%",
  candidateFeePayable: "₹3,16,540/- (Plus 18% GST = ₹3,73,517/-)",

  staffingServiceMonth: "August 2026 & September 2026",
  deployedHeadcount: "45 Flexi-Staff Associate Engineers & Security Guards",
  netWagesDisbursed: "₹18,45,200/-",
  epfEsicOutlay: "₹4,12,650/- (EPF Challan #062637482 & ESIC Challan #772910)",
  gstOutlay: "₹4,45,500/- (18% GST deposited via GSTR-3B)",
  managementFee: "₹2,16,000/-",
  totalInvoiceAmount: "₹29,19,350/-",
  invoiceNumber: "ATS/26-27/INV-0488 & ATS/26-27/INV-0512",
  invoiceDate: "01 September 2026 & 01 October 2026",
  overdueDays: "62 Days",
  interestRateAnnual: "21.75% (3x RBI Bank Rate under Section 16 MSMED Act)",
  cureDaysLimit: "7 Days",
  accountantPhone: "+91 124 4987654",
  agencyBankName: "HDFC Bank Ltd",
  agencyAccountNumber: "50200088991122",
  agencyIfscCode: "HDFC0000456",
};

const TEMPLATE_VARIANTS: TemplateVariant[] = [
  {
    id: "backdoor-hiring",
    title: "1. Backdoor-Hire & Circumvention Demand Notice",
    subtitle: "Candidate presented, rejected/shelved, and secretly hired within the 12-month ownership window",
    badge: "Contract Act s.8/70/73",
    annotations: [
      {
        marker: "①",
        title: "Section 8 Indian Contract Act (Acceptance by Conduct)",
        explanation:
          "Pleading that by interviewing the candidate introduced by the recruitment agency, the client accepted the attached Terms of Business by conduct, defeating claims of an unsigned physical agreement.",
        statuteRef: "Section 8 & 9, Indian Contract Act, 1872",
      },
      {
        marker: "②",
        title: "12-Month Non-Circumvention Ownership & Effective Cause",
        explanation:
          "Documents that the candidate was introduced exclusively by the agency, creating the 'Effective Cause' of hiring under Supreme Court precedent and triggering liquidated placement fees.",
        statuteRef: "Section 73 Contract Act & Trimex International (2011)",
      },
      {
        marker: "③",
        title: "Section 70 Quantum Meruit Compensation",
        explanation:
          "Statutory safeguard ensuring that even if the client denies an explicit fee percentage, they enjoyed non-gratuitous headhunting services and must pay fair market consideration.",
        statuteRef: "Section 70 Indian Contract Act, 1872",
      },
      {
        marker: "④",
        title: "BSA 2023 Section 63 Digital Proof Certificate",
        explanation:
          "Explicit assertion that email transmission headers, ATS submission logs, and interview calendar invites are preserved under cryptographic hash for immediate court production.",
        statuteRef: "Section 63, Bharatiya Sakshya Adhiniyam, 2023",
      },
    ],
    generateNotice: (d: WorkspaceFormData) => `LEGAL DEMAND NOTICE
(BY REGISTERED SPEED POST WITH ACKNOWLEDGEMENT DUE, SPEED POST RPAD, CORPORATE EMAIL & WHATSAPP)

Ref: LR/REC/CIR/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}
Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

TO,
1. ${d.clientCompanyName}
   Through its Managing Director / Chief Executive Officer,
   Regd. Office: ${d.clientAddress}
   Email: ${d.clientEmail}
   Contact: ${d.clientPhone}

2. ${d.clientDirectorName}
   ${d.clientDesignation},
   ${d.clientCompanyName}

FROM,
${d.agencyAdvocateName},
Advocate, ${d.agencyAdvocateBar}
${d.agencyAdvocateChamber}
Under Instructions & on Behalf of Client:
${d.agencyName}
(MSME Regd. UDYAM: ${d.agencyUdyam} | GSTIN: ${d.agencyGstin})
Having Principal Office at: ${d.agencyAddress}

SUBJECT: STATUTORY DEMAND NOTICE UNDER SECTIONS 8, 9, 70, AND 73 OF THE INDIAN CONTRACT ACT, 1872 READ WITH SECTION 16 OF THE MSMED ACT, 2006 AND SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023 FOR WILLFUL BREACH OF RECRUITMENT TERMS OF BUSINESS, UNAUTHORIZED CANDIDATE CIRCUMVENTION (BACKDOOR HIRING), AND DELIBERATE EVASION OF PROFESSIONAL PLACEMENT FEES OF ${d.candidateFeePayable}.

SIR/MADAM,

Under express instructions from and on behalf of my Client, ${d.agencyName} (hereinafter referred to as "my Client"), a duly registered recruitment, executive search, and human resource consultancy firm having its office at the address stated above, I hereby address you as follows:

1. INTRODUCTION & CONTRACTUAL ENGAGEMENT BY CONDUCT (SECTION 8 CONTRACT ACT) [①]:
   1.1. My Client is a premier professional talent search firm registered under the MSMED Act, 2006 (Udyam: ${d.agencyUdyam}).
   1.2. On ${d.cvSubmissionTimestamp}, my Client, pursuant to your requisition for senior engineering leadership, introduced and submitted the curriculum vitae (CV) and professional profile of candidate Mr./Ms. ${d.candidateName} for the position of "${d.candidateRole}".
   1.3. Accompanying said CV transmission, my Client's standard Terms of Business ("Terms") were expressly transmitted to your authorized human resources department and hiring managers. Clause 4 of said Terms unequivocally stipulates that the introduction of any candidate creates a valid contractual ownership window of 12 (twelve) months from the date of introduction, and any direct or indirect hiring of such candidate by you, your affiliates, or subsidiaries attracts a mandatory professional placement fee of ${d.placementFeePercent} of the candidate's total Cost to Company (CTC).
   1.4. You received, processed, and acted upon the profile so submitted. You scheduled and conducted multiple rounds of technical and management interviews with the candidate (${d.interviewDates}). Under Section 8 and Section 9 of the Indian Contract Act, 1872, by accepting the candidate profile, scheduling interview rounds, and engaging with the introduced talent, you unequivocally accepted my Client's Terms of Business by conduct, establishing a binding and enforceable contract between the parties.

2. CANDIDATE INTRODUCTION, INTERVIEW TRAIL & ATS EVIDENCE SCHEDULE [④]:
   Pursuant to Section 63 of the Bharatiya Sakshya Adhiniyam, 2023, the cryptographic email dispatch timestamps, ATS logs, and interview communications stand preserved as conclusive electronic records as scheduled hereunder:
   ---------------------------------------------------------------------------------------------------------
   CANDIDATE DISCOVERY & CIRCUMVENTION PROOF SCHEDULE
   ---------------------------------------------------------------------------------------------------------
   Candidate Introduced     : ${d.candidateName}
   Designation / Role       : ${d.candidateRole}
   Submission Timestamp     : ${d.cvSubmissionTimestamp}
   Interview Rounds Held    : ${d.interviewDates}
   Client Deceptive Rebuttal: Claimed "Role put on hold / candidate profile rejected / unsuited"
   Circumvented Hiring Date : ${d.discoveredJoiningDate}
   Discovered True CTC      : ${d.offeredCtcAmount}
   Contractual Fee Rate     : ${d.placementFeePercent} of CTC (Liquidated Damages / Contractual Remuneration)
   Total Principal Demanded : ${d.candidateFeePayable}
   ---------------------------------------------------------------------------------------------------------

3. WILLFUL CIRCUMVENTION & BACKDOOR ONBOARDING (BREACH OF SECTION 73) [②]:
   3.1. Following the conclusion of final interview rounds, your recruitment coordinators falsely informed my Client that the position had been "frozen indefinitely" or that the candidate was "not being progressed".
   3.2. My Client has recently discovered through independent industry audits, confirmed employee directory records, and public professional verifications that you covertly issued an employment offer and onboarded Mr./Ms. ${d.candidateName} on or around ${d.discoveredJoiningDate} at an estimated CTC of ${d.offeredCtcAmount}.
   3.3. This secret onboarding occurred well within the stipulated 12-month candidate protection window. My Client was the sole, effective, and proximate cause ("Effective Cause") of this hiring. Your conduct constitutes deliberate candidate circumvention (backdoor hiring), bad-faith breach of commercial trust, and an unlawful attempt to unjustly enrich your corporation at the direct financial cost of my Client.

4. STATUTORY ENTITLEMENT UNDER SECTION 70 (QUANTUM MERUIT) & SECTION 73 [③]:
   4.1. Even assuming, whilst denying, your impending contention that formal physical terms were unsigned, your company enjoyed the lawful, non-gratuitous professional recruitment services rendered by my Client. Under Section 70 of the Indian Contract Act, 1872, having reaped the commercial benefit of my Client's headhunting efforts by deploying the candidate in your enterprise, you are bound in law to make full financial compensation.
   4.2. Under Section 73 of the Contract Act, my Client is entitled to liquidated damages and compensation for the loss of business profit directly arising from your fraudulent breach.

5. STATUTORY CURE DEMAND & TIME-BOUND PRE-LITIGATION NOTICE:
   I, therefore, through this legal notice, call upon you to make payment of the full placement fee sum of ${d.candidateFeePayable}, together with compound interest at ${d.interestRateAnnual} from the date of candidate joining until realization, into my Client's designated bank account:
   - Beneficiary Name : ${d.agencyName}
   - Bank Name        : ${d.agencyBankName}
   - Account Number   : ${d.agencyAccountNumber}
   - IFSC Code        : ${d.agencyIfscCode}
   within a strict period of ${d.cureDaysLimit} (${d.cureDaysLimit}) days from the receipt of this notice.

TAKE NOTICE that in the event of your failure to remit the aforesaid sum within ${d.cureDaysLimit} days, my Client has given me peremptory instructions to initiate the following legal actions entirely at your risk, cost, and consequence:
a) Instituting a Commercial Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 before the competent Commercial Court for recovery of the debt along with 18% commercial interest and exemplary costs;
b) Filing a statutory claim before the Micro and Small Enterprises Facilitation Council (MSEFC) under Section 18 of the MSMED Act, 2006, claiming 3x RBI compound monthly interest under Section 16;
c) Intimating the jurisdictional Assessing Officer under Section 43B(h) and Section 37 of the Income Tax Act, 1961 regarding your non-payment to an MSME enterprise, triggering complete tax deduction disallowance;
d) Initiating criminal proceedings under Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of the Bharatiya Nyaya Sanhita, 2023 (BNS) against the Managing Director and HR leadership for dishonest inducement.

A copy of this notice is retained in my office chamber for legal records and judicial production.

Yours faithfully,

${d.agencyAdvocateName}, Advocate
Counsel for ${d.agencyName}`,
  },
  {
    id: "staffing-payroll",
    title: "2. Staffing & Security/FMS Overdue Payroll Arrears Notice",
    subtitle: "Overdue monthly payroll bills with pass-through wages, EPF/ESIC challans, and GST outlays",
    badge: "MSMED Act s.16 / CLRA s.21(4)",
    annotations: [
      {
        marker: "①",
        title: "CLRA Act Section 21(4) Principal Employer Wage Liability",
        explanation:
          "Reminds the corporate client that contract wages, provident fund, and statutory contributions paid out-of-pocket by the staffing agency are a statutory debt of the Principal Employer.",
        statuteRef: "Section 21(4), Contract Labour (R&A) Act, 1970",
      },
      {
        marker: "②",
        title: "Section 16 MSMED Act Mandatory 3x Compound Interest",
        explanation:
          "Claims monthly compound interest at three times the RBI bank rate on overdue outlays exceeding 45 days, which cannot be waived by any contractual clause.",
        statuteRef: "Section 15 & 16, MSMED Act, 2006",
      },
      {
        marker: "③",
        title: "Section 43B(h) Income Tax Corporate Disallowance",
        explanation:
          "Notifies the CFO that failing to clear overdue staffing invoices before fiscal year-end triggers full disallowance of the expense, increasing taxable income by 25%-35%.",
        statuteRef: "Section 43B(h), Income Tax Act, 1961",
      },
      {
        marker: "④",
        title: "Order XXXVII CPC Liquidated Debt Summary Suit",
        explanation:
          "Puts the client on notice that attendance muster rolls, wage disbursement sheets, and EPF TRRN challans constitute a liquidated debt eligible for summary judgment without full trial.",
        statuteRef: "Order XXXVII, Code of Civil Procedure, 1908",
      },
    ],
    generateNotice: (d: WorkspaceFormData) => `STATUTORY LEGAL DEMAND NOTICE
(UNDER SECTION 15 & 16 OF THE MSMED ACT, 2006 READ WITH SECTION 21(4) CLRA ACT, 1970, SECTION 43B(H) INCOME TAX ACT, 1961 AND ORDER XXXVII CPC, 1908)

Ref: LR/STF/PAY/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}
Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

TO,
1. ${d.clientCompanyName}
   Through its Managing Director / Chief Financial Officer,
   Regd. Office: ${d.clientAddress}
   Email: ${d.clientEmail}
   Contact: ${d.clientPhone}

2. ${d.clientDirectorName}
   ${d.clientDesignation},
   ${d.clientCompanyName}

FROM,
${d.agencyAdvocateName},
Advocate, ${d.agencyAdvocateBar}
${d.agencyAdvocateChamber}
Under Instructions & on Behalf of Client:
${d.agencyName}
(MSME Regd. UDYAM: ${d.agencyUdyam} | GSTIN: ${d.agencyGstin})
Having Principal Office at: ${d.agencyAddress}

SUBJECT: FINAL STATUTORY DEMAND FOR IMMEDIATE PAYMENT OF OUTSTANDING MONTHLY STAFFING & FACILITY MANAGEMENT PAYROLL INVOICES TOTALING ${d.totalInvoiceAmount} ALONG WITH COMPOUND STATUTORY INTEREST UNDER SECTION 16 OF THE MSMED ACT, 2006.

SIR/MADAM,

Under express instructions from and on behalf of my Client, ${d.agencyName} (hereinafter referred to as "my Client"), a registered MSME provider of flexible staffing, facility management, and contractual workforce solutions, I hereby serve upon you this Statutory Legal Demand Notice:

1. CONTRACTUAL BACKGROUND & PASS-THROUGH PAYROLL OUTLAYS [①]:
   1.1. Under the Master Staffing / Security / Facility Management Services Agreement executed between the parties, my Client deployed ${d.deployedHeadcount} at your commercial premises and operational facilities.
   1.2. Pursuant to the statutory mandate under the Contract Labour (Regulation and Abolition) Act, 1970, the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, and the ESI Act, 1948, my Client disbursed 100% of the deployed associates' net wages on the 7th of every month out of its own working capital.
   1.3. My Client has already deposited statutory EPF, ESIC, and 18% GST outlays to the Government treasury under verified Electronic Challan Returns (ECR) and GSTR-3B filings, as detailed in the Schedule below:

   ---------------------------------------------------------------------------------------------------------
   ITEMIZED STATUTORY PAYROLL & PASS-THROUGH OUTLAY SCHEDULE
   ---------------------------------------------------------------------------------------------------------
   Service Billing Period   : ${d.staffingServiceMonth}
   Invoice Numbers & Dates  : ${d.invoiceNumber} (Dated: ${d.invoiceDate})
   Deployed Headcount       : ${d.deployedHeadcount}
   Net Wages Disbursed      : ${d.netWagesDisbursed} (Directly credited to associate bank accounts)
   EPF & ESIC Outlay Paid   : ${d.epfEsicOutlay} (Deposited via EPFO & ESIC portals)
   GST Outlay Paid (18%)    : ${d.gstOutlay} (Reflected in your GSTR-2B)
   Agency Management Markup : ${d.managementFee}
   Total Principal Overdue  : ${d.totalInvoiceAmount}
   Overdue Aging Bucket     : ${d.overdueDays} (Statutory 45-day cap under s.15 MSMED exceeded)
   Statutory Interest Rate  : ${d.interestRateAnnual}
   ---------------------------------------------------------------------------------------------------------

2. STATUTORY DEFAULT UNDER SECTION 15 & 16 OF THE MSMED ACT, 2006 [②]:
   2.1. My Client is an enterprise registered under the MSMED Act, 2006 (Udyam Registration: ${d.agencyUdyam}). Your company was formally notified of my Client's MSME status on every monthly invoice and email submission.
   2.2. Under Section 15 of the MSMED Act, you were statutorily obligated to make payment of my Client's invoices within forty-five (45) days of service acceptance.
   2.3. That period elapsed over ${d.overdueDays} ago. Under Section 16 of the MSMED Act, 2006, any buyer who fails to make payment within the prescribed period is statutorily liable to pay compound interest with monthly rests at three times (3x) the RBI bank rate (${d.interestRateAnnual}). Section 16 is mandatory and overrides any contrary clause in your purchase order or service agreement.

3. TAX DISALLOWANCE WARNING UNDER SECTION 43B(H) INCOME TAX ACT [③]:
   Under Section 43B(h) of the Income Tax Act, 1961, any sum payable to a registered Micro or Small Enterprise beyond the time limit specified in Section 15 of the MSMED Act is strictly disallowed as a deductible expenditure in your corporate profit and loss statement. Unless my Client's full invoice amount of ${d.totalInvoiceAmount} is settled immediately, this entire outlay will be added back to your taxable net income, resulting in substantial tax liabilities, penalties, and scrutiny from the Income Tax Department.

4. PRINCIPAL EMPLOYER STATUTORY INDEMNITY (CLRA SECTION 21(4)) [①]:
   Under Section 21(4) of the CLRA Act, 1970, the Principal Employer is primarily and vicariously liable for the payment of contract wages. By withholding reimbursement of actual salaries already disbursed to workers who manned your operations, you have unlawfully retained working capital advances made by my Client.

5. PEREMPTORY DEMAND:
   My Client hereby calls upon you to pay the crystallized principal sum of ${d.totalInvoiceAmount} along with accrued compound interest under Section 16 of the MSMED Act within ${d.cureDaysLimit} (${d.cureDaysLimit}) days of receipt of this notice into the following bank account:
   - Account Name   : ${d.agencyName}
   - Bank Name      : ${d.agencyBankName}
   - Account Number : ${d.agencyAccountNumber}
   - IFSC Code      : ${d.agencyIfscCode}

Failing compliance within ${d.cureDaysLimit} days, my Client shall immediately:
1. File an application under Section 18 of the MSMED Act, 2006 before the MSEFC for recovery of principal, 3x compound interest, and mandatory statutory arbitration;
2. File a Summary Suit under Order XXXVII CPC before the Commercial Court, attaching your corporate bank accounts under Order XXXVIII Rule 5 CPC [④];
3. Serve a formal Statutory Demand Notice under Section 8 of the Insolvency and Bankruptcy Code, 2016 (IBC) for operational debt default.

Yours faithfully,

${d.agencyAdvocateName}, Advocate
Counsel for ${d.agencyName}`,
  },
  {
    id: "temp-to-perm",
    title: "3. Temp-to-Perm (C2H) Hostile Buyout Notice",
    subtitle: "Client directly absorbed deployed contract personnel without paying contractual conversion fee",
    badge: "Contract Act s.73/74 Liquidated Damages",
    annotations: [
      {
        marker: "①",
        title: "C2H Conversion Buyout Clause Enforcement",
        explanation:
          "Liquidated conversion fee clause (typically 15%-25% CTC) is fully enforceable under Section 74 of the Contract Act as a pre-estimate of recruitment, training, and onboarding costs.",
        statuteRef: "Section 74, Indian Contract Act, 1872",
      },
      {
        marker: "②",
        title: "Non-Solicitation & Commercial Poaching Bar",
        explanation:
          "Distinguishes valid B2B commercial buyout fees from employee non-compete covenants, confirming that client-side hiring fees do not violate Section 27 of the Contract Act.",
        statuteRef: "Section 27 vs Section 73/74 Contract Act",
      },
      {
        marker: "③",
        title: "Section 63 BSA 2023 Proof of Deployment & Direct Onboarding",
        explanation:
          "Integrates staffing biometric records, billing muster rolls, and new direct employment appointment letters to establish seamless unauthorized absorption.",
        statuteRef: "Section 63, Bharatiya Sakshya Adhiniyam, 2023",
      },
    ],
    generateNotice: (d: WorkspaceFormData) => `LEGAL DEMAND NOTICE: UNAUTHORIZED CONTRACT-TO-PERMANENT (C2H) CONVERSION & BUYOUT FEE DEFAULT

Ref: LR/C2H/BUY/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}
Date: ${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}

TO,
${d.clientCompanyName}
Through its Board of Directors / Chief Executive Officer,
Regd. Office: ${d.clientAddress}

FROM,
${d.agencyAdvocateName}, Advocate, ${d.agencyAdvocateBar}
Under Instructions & on Behalf of Client: ${d.agencyName} (UDYAM: ${d.agencyUdyam})

SUBJECT: DEMAND FOR PAYMENT OF CONTRACT-TO-PERMANENT (C2H) CONVERSION BUYOUT FEE OF ${d.candidateFeePayable} FOR UNAUTHORIZED DIRECT ABSORPTION OF DEPLOYED ASSOCIATE MR./MS. ${d.candidateName}.

SIR/MADAM,

Under express instructions from my Client, ${d.agencyName}, I state as follows:

1. Under the Master Staffing Agreement dated entered into between the parties, my Client deployed Mr./Ms. ${d.candidateName} as a Contract Associate at your establishment.
2. Under Clause 8.2 of the Staffing Agreement ("Employee Absorption & Buyout Terms") [①], you agreed that in the event you directly employ, absorb, or onboard any deployed personnel during their deployment or within 12 months following demobilization, you shall pay to my Client a liquidated Buyout / Conversion Fee equal to ${d.placementFeePercent} of the associate's annualized CTC.
3. On ${d.discoveredJoiningDate}, without prior written intimation or payment of the contractual buyout consideration, you directly issued a permanent employment letter to Mr./Ms. ${d.candidateName} at an annual CTC of ${d.offeredCtcAmount}.
4. This direct absorption without buyout fee payment is a blatant breach of contract under Section 73 and Section 74 of the Indian Contract Act, 1872 [②]. This does not restrain the employee's right to work under Section 27, but enforces a valid commercial fee payable by you as a corporate entity for acquiring talent headhunted, vetted, and onboarded at my Client's expense.
5. DEMAND: You are hereby called upon to pay the liquidated buyout fee of ${d.candidateFeePayable} within ${d.cureDaysLimit} days of receipt of this notice, failing which Commercial Summary Suit under Order XXXVII CPC and MSMED Section 18 recovery proceedings shall be instituted forthwith.

Yours faithfully,

${d.agencyAdvocateName}, Advocate`,
  },
];

export default function RecruitmentNoticeWorkspace() {
  const [activeVariantId, setActiveVariantId] = useState<string>("backdoor-hiring");
  const [formData, setFormData] = useState<WorkspaceFormData>(DEFAULT_FORM_DATA);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"preview" | "editor" | "annotations">("preview");

  const agencyNameId = useId();
  const agencyAddressId = useId();
  const agencyGstinId = useId();
  const agencyUdyamId = useId();
  const clientCompanyId = useId();
  const clientDirectorId = useId();
  const clientAddressId = useId();
  const clientEmailId = useId();
  const candidateNameId = useId();
  const candidateRoleId = useId();
  const candidateCtcId = useId();
  const candidateFeeId = useId();
  const staffingMonthId = useId();
  const staffingInvoiceAmountId = useId();

  const currentVariant =
    TEMPLATE_VARIANTS.find((v) => v.id === activeVariantId) || TEMPLATE_VARIANTS[0];

  const generatedNoticeText = currentVariant.generateNotice(formData);

  const handleInputChange = (field: keyof WorkspaceFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNoticeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${currentVariant.title} - Legal Demand Notice</title>
            <style>
              body { font-family: 'Times New Roman', Times, serif; font-size: 13pt; line-height: 1.6; color: #000; padding: 40px; margin: 0; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; margin: 0; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body>
            <pre>${generatedNoticeText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
            <script>window.onload = function() { window.print(); }</script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleReset = () => {
    setFormData(DEFAULT_FORM_DATA);
  };

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden text-slate-100">
      {/* Workspace Header Strip */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-2">
              Interactive Legal Notice Workspace &bull; Archetype P1
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              Recruitment Backdoor-Hire &amp; Staffing Arrears Notice Generator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select notice variant, customize candidate / invoice schedules, and generate an advocate-vetted statutory demand notice.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Reset Example
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print / PDF
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md shadow-red-950 inline-flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <span className="text-emerald-300 font-black">&check;</span>
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>1-Click Copy Notice</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Template Variant Selector Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-800">
          {TEMPLATE_VARIANTS.map((v) => {
            const isSelected = v.id === activeVariantId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveVariantId(v.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all text-left flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#DC2626] text-white shadow-md shadow-red-950"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                }`}
              >
                <span>{v.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? "bg-red-950 text-red-200" : "bg-slate-900 text-slate-400"
                  }`}
                >
                  {v.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-view switcher for Mobile/Desktop */}
      <div className="flex border-b border-slate-800 bg-slate-950/60 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setActiveTab("preview")}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "preview"
              ? "border-[#DC2626] text-white"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Statutory Notice Preview</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("editor")}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "editor"
              ? "border-[#DC2626] text-white"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Edit Notice Variables ({activeVariantId === "staffing-payroll" ? "Payroll" : "Candidate"})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("annotations")}
          className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "annotations"
              ? "border-[#DC2626] text-white"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span>Legal Annotations ({currentVariant.annotations.length})</span>
        </button>
      </div>

      {/* Main Workspace Body */}
      <div className="p-4 sm:p-6 lg:p-8">
        {activeTab === "preview" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400">
                <strong className="text-slate-200 font-bold">Live Document Preview:</strong> Formatted for Advocate Dispatch on Legal Recovery Bar Council Letterhead with BSA 2023 Section 63 Electronic Proof Annexures.
              </span>
              <span className="text-[11px] font-mono text-red-400 bg-red-950/50 px-2 py-0.5 rounded border border-red-900/50 shrink-0">
                100% Court-Tested Formatting
              </span>
            </div>

            <div className="relative bg-slate-950 rounded-xl p-5 sm:p-7 border border-slate-800 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto max-h-[600px] overflow-y-auto selection:bg-[#DC2626] selection:text-white">
              <pre className="whitespace-pre-wrap font-mono">{generatedNoticeText}</pre>
            </div>
          </div>
        )}

        {activeTab === "editor" && (
          <div className="space-y-6">
            <p className="text-xs text-slate-400">
              Update the fields below. The notice preview and printable draft will update automatically with your exact agency, client, candidate, and invoice numbers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Creditor Agency Fields */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Your Agency / Creditor Details
                </p>
                <div>
                  <label htmlFor={agencyNameId} className="block text-[11px] text-slate-400 mb-1">
                    Agency Firm Name
                  </label>
                  <input
                    id={agencyNameId}
                    type="text"
                    value={formData.agencyName}
                    onChange={(e) => handleInputChange("agencyName", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
                <div>
                  <label htmlFor={agencyAddressId} className="block text-[11px] text-slate-400 mb-1">
                    Registered Office Address
                  </label>
                  <input
                    id={agencyAddressId}
                    type="text"
                    value={formData.agencyAddress}
                    onChange={(e) => handleInputChange("agencyAddress", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor={agencyGstinId} className="block text-[11px] text-slate-400 mb-1">
                      Agency GSTIN
                    </label>
                    <input
                      id={agencyGstinId}
                      type="text"
                      value={formData.agencyGstin}
                      onChange={(e) => handleInputChange("agencyGstin", e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>
                  <div>
                    <label htmlFor={agencyUdyamId} className="block text-[11px] text-slate-400 mb-1">
                      MSME UDYAM No.
                    </label>
                    <input
                      id={agencyUdyamId}
                      type="text"
                      value={formData.agencyUdyam}
                      onChange={(e) => handleInputChange("agencyUdyam", e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>
                </div>
              </div>

              {/* Defaulting Client Fields */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Defaulting Client Details
                </p>
                <div>
                  <label htmlFor={clientCompanyId} className="block text-[11px] text-slate-400 mb-1">
                    Client Company Name
                  </label>
                  <input
                    id={clientCompanyId}
                    type="text"
                    value={formData.clientCompanyName}
                    onChange={(e) => handleInputChange("clientCompanyName", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label htmlFor={clientDirectorId} className="block text-[11px] text-slate-400 mb-1">
                      Managing Director / CEO
                    </label>
                    <input
                      id={clientDirectorId}
                      type="text"
                      value={formData.clientDirectorName}
                      onChange={(e) => handleInputChange("clientDirectorName", e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>
                  <div>
                    <label htmlFor={clientAddressId} className="block text-[11px] text-slate-400 mb-1">
                      Client Office Address
                    </label>
                    <input
                      id={clientAddressId}
                      type="text"
                      value={formData.clientAddress}
                      onChange={(e) => handleInputChange("clientAddress", e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor={clientEmailId} className="block text-[11px] text-slate-400 mb-1">
                    Official Notice Recipient Emails
                  </label>
                  <input
                    id={clientEmailId}
                    type="text"
                    value={formData.clientEmail}
                    onChange={(e) => handleInputChange("clientEmail", e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                  />
                </div>
              </div>

              {/* Variant 1 & 3 Candidate Fields */}
              {activeVariantId !== "staffing-payroll" ? (
                <div className="md:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Circumvented Candidate &amp; Placement Fee Parameters
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <label htmlFor={candidateNameId} className="block text-[11px] text-slate-400 mb-1">
                        Candidate Name
                      </label>
                      <input
                        id={candidateNameId}
                        type="text"
                        value={formData.candidateName}
                        onChange={(e) => handleInputChange("candidateName", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label htmlFor={candidateRoleId} className="block text-[11px] text-slate-400 mb-1">
                        Role / Designation
                      </label>
                      <input
                        id={candidateRoleId}
                        type="text"
                        value={formData.candidateRole}
                        onChange={(e) => handleInputChange("candidateRole", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label htmlFor={candidateCtcId} className="block text-[11px] text-slate-400 mb-1">
                        Offered / Discovered CTC
                      </label>
                      <input
                        id={candidateCtcId}
                        type="text"
                        value={formData.offeredCtcAmount}
                        onChange={(e) => handleInputChange("offeredCtcAmount", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label htmlFor={candidateFeeId} className="block text-[11px] text-slate-400 mb-1">
                        Fee Demanded (+ GST)
                      </label>
                      <input
                        id={candidateFeeId}
                        type="text"
                        value={formData.candidateFeePayable}
                        onChange={(e) => handleInputChange("candidateFeePayable", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* Variant 2 Staffing Payroll Fields */
                <div className="md:col-span-2 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    Staffing Payroll &amp; Pass-Through Outlay Parameters
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <label htmlFor={staffingMonthId} className="block text-[11px] text-slate-400 mb-1">
                        Billing Month
                      </label>
                      <input
                        id={staffingMonthId}
                        type="text"
                        value={formData.staffingServiceMonth}
                        onChange={(e) => handleInputChange("staffingServiceMonth", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label htmlFor={staffingInvoiceAmountId} className="block text-[11px] text-slate-400 mb-1">
                        Total Invoice Due
                      </label>
                      <input
                        id={staffingInvoiceAmountId}
                        type="text"
                        value={formData.totalInvoiceAmount}
                        onChange={(e) => handleInputChange("totalInvoiceAmount", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        Overdue Aging (Days)
                      </label>
                      <input
                        type="text"
                        value={formData.overdueDays}
                        onChange={(e) => handleInputChange("overdueDays", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">
                        EPF &amp; ESIC Outlay
                      </label>
                      <input
                        type="text"
                        value={formData.epfEsicOutlay}
                        onChange={(e) => handleInputChange("epfEsicOutlay", e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-md"
              >
                Apply Updates &amp; View Preview &rarr;
              </button>
            </div>
          </div>
        )}

        {activeTab === "annotations" && (
          <div className="space-y-4">
            <p className="text-xs text-slate-400">
              Each numbered marker (①, ②, ③, ④) in the notice corresponds to an established statutory pillar and judicial precedent that prevents corporate debtor evasions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentVariant.annotations.map((ann) => (
                <div
                  key={ann.marker}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-950 text-red-400 border border-red-800/80 flex items-center justify-center text-xs font-bold font-mono">
                      {ann.marker}
                    </span>
                    <h4 className="text-sm font-bold text-white">{ann.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ann.explanation}</p>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40">
                      {ann.statuteRef}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Workspace Footer Action Bar */}
      <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Need our High Court advocates to draft, issue &amp; dispatch this notice on Bar Council Letterhead?</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs font-bold text-slate-300 hover:text-white underline cursor-pointer"
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>
          <span className="text-slate-700">|</span>
          <a
            href="/user/new-recovery"
            className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
          >
            Initiate Advocate Legal Notice (&rupee;999) &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

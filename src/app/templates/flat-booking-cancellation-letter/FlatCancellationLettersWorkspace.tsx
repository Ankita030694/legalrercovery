"use client";

import React, { useState, useId } from "react";

type LetterVariantKey = "polite" | "firm" | "final" | "delay";

interface BookingLetterFields {
  buyerFullName: string;
  coApplicantName: string;
  buyerAddress: string;
  buyerContact: string;
  builderCompanyName: string;
  builderAddress: string;
  projectName: string;
  reraRegNumber: string;
  unitDetails: string;
  bookingDate: string;
  applicationOrAllotmentNo: string;
  totalConsiderationValue: string;
  amountPaidSoFar: string;
  paymentReceiptsAndUtr: string;
  cancellationReason: string;
  permissibleDeductionCap: string;
  netRefundClaimed: string;
  bankAccountDetails: string;
  cureWindowDays: string;
}

export default function FlatCancellationLettersWorkspace() {
  const formId = useId();
  const [activeVariant, setActiveVariant] = useState<LetterVariantKey>("firm");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [fields, setFields] = useState<BookingLetterFields>({
    buyerFullName: "[BUYER FULL NAME, e.g., Siddharth Nair]",
    coApplicantName: "[CO-APPLICANT NAME, or 'Nil']",
    buyerAddress: "[Buyer Current Residential Address with PIN]",
    buyerContact: "[Mobile Number & Email ID]",
    builderCompanyName: "[BUILDER / PROMOTER LEGAL ENTITY NAME, e.g., Skyline Infratech Pvt. Ltd.]",
    builderAddress: "[Builder Registered / Corporate Office Address with PIN]",
    projectName: "[PROJECT NAME & LOCATION, e.g., Skyline Heights, Phase-II, Sector 150]",
    reraRegNumber: "[STATE RERA REG. NO., e.g., P521000XXXXX / UPRERAPRJXXXXX]",
    unitDetails: "[Flat / Plot No. B-1404, 14th Floor, Tower-B (Carpet Area: 1,120 sq. ft.)]",
    bookingDate: "[12 August 2026]",
    applicationOrAllotmentNo: "[Booking Application / Allotment Ref. No. SKY/2026/0419]",
    totalConsiderationValue: "[₹85,00,000]",
    amountPaidSoFar: "[₹5,00,000 (Including ₹23,810 GST)]",
    paymentReceiptsAndUtr: "[Receipt No. 1108 dated 12 Aug 2026 via NEFT UTR: HDFCR520260812991234]",
    cancellationReason: "[Rejection of Home Loan Eligibility by Bank / Personal Medical Emergency / Refusal to Sign One-Sided Draft Agreement]",
    permissibleDeductionCap: "[₹0 to Nominal Administrative Fee under RERA / Section 74 Contract Act]",
    netRefundClaimed: "[₹5,00,000]",
    bankAccountDetails: "[Bank Name, Account Holder Name, A/c No., IFSC Code, Branch]",
    cureWindowDays: "15",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const buildPoliteBeforeAgreementLetter = () => `SUBJECT: Formal Request for Cancellation of Flat/Plot Booking Before Agreement & Refund of Booking Amount — Unit ${fields.unitDetails} in Project "${fields.projectName}" (Booking Ref: ${fields.applicationOrAllotmentNo})

Date: [DD Month YYYY]

To,
The Head of Customer Relations (CRM) & Accounts Department,
${fields.builderCompanyName}
Address: ${fields.builderAddress}
Project RERA Registration No.: ${fields.reraRegNumber}

Dear Sir / Madam,

I/We, ${fields.buyerFullName} (Co-Applicant: ${fields.coApplicantName}), residing at ${fields.buyerAddress}, write to formally intimate the cancellation of our provisional booking for Unit ${fields.unitDetails} in your project "${fields.projectName}", booked on ${fields.bookingDate} under Booking Application / Allotment Reference ${fields.applicationOrAllotmentNo}.

1. PAYMENT DETAILS & PRE-AGREEMENT STATUS:
Against the provisional reservation of the above unit (quoted total consideration: ${fields.totalConsiderationValue}), I/we have paid a booking advance / token sum of ${fields.amountPaidSoFar} vide ${fields.paymentReceiptsAndUtr}. Kindly note that as of today, no registered Agreement for Sale (Builder-Buyer Agreement) under Section 13(1) of the Real Estate (Regulation and Development) Act, 2016 ("RERA") has been executed or registered between us, and no third-party housing finance disbursement has taken place.

2. REASON FOR WITHDRAWAL OF BOOKING APPLICATION:
Due to ${fields.cancellationReason}, I/we are unable to proceed with the purchase of the said unit and hereby withdraw our booking application in writing with immediate effect.

3. REQUEST FOR FULL REFUND & GST REVERSAL:
Since this cancellation is being intimated at the preliminary booking stage prior to the execution of any registered Agreement for Sale—and the unit remains immediately available in your inventory for re-allotment without any financial loss to the Promoter—I/we request you to process a refund of ${fields.netRefundClaimed} (along with full reversal of the collected GST component under Section 34 of the CGST Act, 2017) without applying penal forfeiture charges.

4. DESIGNATED BANK ACCOUNT FOR NEFT / RTGS CREDIT:
Please remit the refund amount directly to the source bank account detailed below within ${fields.cureWindowDays} calendar days:
• Bank & Branch: ${fields.bankAccountDetails}

Kindly acknowledge receipt of this written cancellation letter and share the refund calculation sheet and UTR number upon processing. Please note that the original physical payment receipts remain in our safe custody and will be exchanged/cancelled immediately upon inward bank credit of the refund sum.

Yours sincerely,

Signature: ___________________________
Name: ${fields.buyerFullName}
Co-Applicant: ${fields.coApplicantName}
Contact: ${fields.buyerContact}
Enclosures: Copy of Booking Application Form & Payment Receipt (${fields.paymentReceiptsAndUtr})`;

  const buildFirmReraForfeitureChallengeLetter = () => `BY REGISTERED POST WITH ACKNOWLEDGMENT DUE (RPAD) & OFFICIAL EMAIL
WITHOUT PREJUDICE

Date: [DD Month YYYY]

To,
1. The Managing Director / Board of Directors,
   ${fields.builderCompanyName}
   Registered Office: ${fields.builderAddress}

2. The Grievance Redressal / CRM Head,
   Project: ${fields.projectName} (RERA Reg. No.: ${fields.reraRegNumber})
   Address: ${fields.builderAddress}

FROM:
${fields.buyerFullName} (Co-Applicant: ${fields.coApplicantName})
Address: ${fields.buyerAddress}
Contact: ${fields.buyerContact}

SUBJECT: WRITTEN NOTICE OF FLAT/PLOT BOOKING CANCELLATION, OBJECTION TO UNLAWFUL FORFEITURE & DEMAND FOR REFUND OF ${fields.netRefundClaimed} — UNIT ${fields.unitDetails} (${fields.applicationOrAllotmentNo}).

Sir / Madam,

Take formal notice that I/we, ${fields.buyerFullName}, hereby place on record our written cancellation of Unit ${fields.unitDetails} in your project "${fields.projectName}" (RERA Registration No.: ${fields.reraRegNumber}) and formally object to your CRM team's oral/email communication proposing an arbitrary forfeiture from our paid booking advance of ${fields.amountPaidSoFar}.

1. ADMITTED PAYMENT & CONTRACTUAL STATUS:
On ${fields.bookingDate}, I/we paid ${fields.amountPaidSoFar} vide ${fields.paymentReceiptsAndUtr} towards the provisional booking of the above unit (total sale price: ${fields.totalConsiderationValue}). Due to ${fields.cancellationReason}, we notified your office of our decision to cancel the booking.

2. WHY UNILATERAL FORFEITURE OF BOOKING AMOUNT IS ILLEGAL:
Your refusal to refund our booking money—or your attempt to deduct 10% to 20% of the total apartment cost—is legally unsustainable on four independent statutory grounds:
(a) Violation of Section 13(1) of RERA, 2016: Under Section 13(1) of the Real Estate (Regulation and Development) Act, 2016, a promoter is prohibited from accepting more than 10% of the cost of the apartment/plot without first entering into and registering a written Agreement for Sale. A unilateral "Booking Application Form" signed at the site office is not a registered Agreement for Sale and cannot be used to enforce penal forfeiture clauses.
(b) Section 74 of the Indian Contract Act, 1872: As settled by the Hon'ble Supreme Court in Kailash Nath Associates v. DDA, (2015) 4 SCC 136, and Maula Bux v. Union of India, (1969) 2 SCC 554, forfeiture of an advance is impermissible as a penalty where the promoter has suffered no actual proved loss and the flat remains an appreciating asset in the builder's inventory.
(c) Supreme Court & State RERA Forfeiture Ceilings: Even where an allotment or agreement exists, the Hon'ble Supreme Court in Godrej Projects Development Ltd. v. Anil Karlekar, 2025 SCC OnLine SC 222, struck down one-sided 20% forfeiture clauses as unconscionable under Section 2(46) of the Consumer Protection Act, 2019. Furthermore, State RERA regulations (including MahaRERA Order No. 35/2022 Model Allotment Letter caps of 0%–2%) strictly bar excessive cancellation deductions (${fields.permissibleDeductionCap}).
(d) Mandatory GST Refund: Since the booking stands cancelled prior to conveyance/completion, no taxable supply has occurred, and the promoter is bound to issue a Credit Note under Section 34 of the CGST Act, 2017 and refund the GST component in full.

3. DEMAND FOR REFUND WITHIN ${fields.cureWindowDays} DAYS:
I/we hereby call upon ${fields.builderCompanyName} to remit the sum of ${fields.netRefundClaimed} via NEFT/RTGS to our bank account (${fields.bankAccountDetails}) within ${fields.cureWindowDays} calendar days from the receipt of this letter, failing which we shall initiate statutory recovery proceedings under Section 31 of RERA, 2016 and the Consumer Protection Act, 2019 claiming 100% refund with statutory interest and litigation costs.

Yours faithfully,

Signature: ___________________________
(${fields.buyerFullName})
Enclosures:
1. Payment Receipt & Bank NEFT/RTGS UTR Proof (${fields.paymentReceiptsAndUtr})
2. Copy of Booking Application / Allotment Letter (${fields.applicationOrAllotmentNo})`;

  const buildFinalPreLitigationLetter = () => `REGISTERED SPEED POST (RPAD) & ELECTRONIC MAIL (SECTION 63 BSA, 2023)
FINAL ${fields.cureWindowDays}-DAY PRE-LITIGATION ULTIMATUM BEFORE RERA SECTION 31 / e-JAGRITI COMPLAINT

Date: [DD Month YYYY]

To,
The Managing Director, Whole-Time Directors & Compliance Officer,
${fields.builderCompanyName}
Registered Address: ${fields.builderAddress}
Project: ${fields.projectName} | RERA Reg. No.: ${fields.reraRegNumber}

SUBJECT: FINAL DEMAND FOR REFUND OF WITHHELD BOOKING AMOUNT OF ${fields.netRefundClaimed} WITH INTEREST — CANCELLATION OF UNIT ${fields.unitDetails} (REF: ${fields.applicationOrAllotmentNo}).

Sir / Madam,

This communication serves as my/our FINAL WRITTEN ULTIMATUM prior to instructing legal counsel to institute formal proceedings before the State Real Estate Regulatory Authority (RERA) and the Consumer Disputes Redressal Commission (e-Jagriti).

1. CHRONOLOGY OF CANCELLATION & WRONGFUL RETENTION:
• Unit & Project: ${fields.unitDetails} in "${fields.projectName}" (${fields.reraRegNumber})
• Total Paid by Allottee: ${fields.amountPaidSoFar} paid on ${fields.bookingDate} vide ${fields.paymentReceiptsAndUtr}
• Reason for Cancellation: ${fields.cancellationReason}
• Unpaid Refund Claimed: ${fields.netRefundClaimed}

Despite our prior written cancellation request, ${fields.builderCompanyName} has wrongfully detained our hard-earned money, demanded that we surrender original payment receipts and sign an unconditional "No-Claims / Indemnity Undertaking" as a pre-condition to processing any refund, or threatened illegal forfeiture.

2. NOTICE OF COERCION & UNFAIR TRADE PRACTICE:
Please be advised that:
(i) Compelling a homebuyer to surrender original payment receipts or sign a pre-printed discharge voucher before actual bank credit of the refund is a coercive unfair trade practice under Section 2(47) of the Consumer Protection Act, 2019 (Pioneer Urban Land & Infrastructure Ltd. v. Govindan Raghavan, (2019) 5 SCC 725);
(ii) Under Section 65 and Section 74 of the Indian Contract Act, 1872, once a booking is cancelled, the promoter cannot unjustly enrich itself by retaining buyer advances while simultaneously marketing the same unit to new buyers at a higher price; and
(iii) Continued detention of our refund beyond the statutory window entitles us to claim simple interest at SBI Highest Marginal Cost of Funds Based Lending Rate (MCLR) + 2% per annum from the date of payment.

3. FINAL ${fields.cureWindowDays}-DAY DEADLINE:
You are hereby given one final opportunity to transfer the sum of ${fields.netRefundClaimed} directly to our bank account (${fields.bankAccountDetails}) and email the UTR confirmation within ${fields.cureWindowDays} calendar days of receipt of this notice.

Should the funds not reflect in our bank account within ${fields.cureWindowDays} days, we shall immediately serve a formal Advocate Statutory Legal Notice and file:
(a) An online Form 'M' Complaint under Section 31 read with Sections 12, 13, 18 & 40(1) of RERA, 2016 before the State RERA Authority; and
(b) A Consumer Complaint on the e-Jagriti portal seeking 100% principal refund, 10.75%–18% p.a. interest, ₹1,00,000 towards mental harassment damages, and full litigation costs, entirely at your company's risk and consequence.

This notice is issued WITHOUT PREJUDICE to all our statutory rights and remedies.

Yours faithfully,

Signature: ___________________________
Name: ${fields.buyerFullName}
Address: ${fields.buyerAddress}
Contact: ${fields.buyerContact}`;

  const buildBuilderDefaultSection18Letter = () => `REGISTERED POST WITH ACKNOWLEDGMENT DUE (RPAD) & EMAIL
STATUTORY NOTICE OF WITHDRAWAL FROM PROJECT & DEMAND FOR 100% REFUND WITH INTEREST UNDER SECTIONS 12 & 18(1) OF RERA, 2016

Date: [DD Month YYYY]

To,
The Managing Director & Promoter,
${fields.builderCompanyName}
Registered Office: ${fields.builderAddress}
Project: ${fields.projectName} (RERA Reg. No.: ${fields.reraRegNumber})

SUBJECT: STATUTORY EXERCISING OF UNCONDITIONAL RIGHT TO CANCEL & WITHDRAW UNDER SECTION 18(1) / SECTION 12 OF RERA, 2016 — DEMAND FOR 100% REFUND OF ${fields.amountPaidSoFar} WITH SBI MCLR + 2% INTEREST (UNIT: ${fields.unitDetails}).

Sir / Madam,

I/We, ${fields.buyerFullName} (Allottee of Unit ${fields.unitDetails} under Reference ${fields.applicationOrAllotmentNo} in "${fields.projectName}"), hereby serve this statutory notice exercising our unqualified right to withdraw from the project and cancel our allotment on account of Promoter default:

1. PROMOTER DEFAULT & BREACH OF STATUTORY OBLIGATIONS:
Against the allotment of Unit ${fields.unitDetails} (Total Consideration: ${fields.totalConsiderationValue}), I/we have paid ${fields.amountPaidSoFar} (${fields.paymentReceiptsAndUtr}). Your company has defaulted on its assurances by: ${fields.cancellationReason} [e.g., failing to hand over legal possession with Occupancy Certificate by the promised date / stalling site construction / altering sanctioned layout plans without Section 14 two-thirds allottee consent / refusing to modify one-sided BBA clauses].

2. UNCONDITIONAL RIGHT TO 100% REFUND WITH ZERO FORFEITURE (NEWTECH PROMOTERS SC RULING):
Take notice that where cancellation is triggered by the Promoter's delay, false brochure representation (Section 12), or breach of agreement terms (Section 18(1) of RERA, 2016), the allottee has an absolute, unconditional statutory right to withdraw from the project and demand a 100% refund of the entire amount paid—with ZERO cancellation or forfeiture deductions—as authoritatively settled by the Three-Judge Bench of the Hon'ble Supreme Court in M/s Newtech Promoters and Developers Pvt. Ltd. v. State of UP & Ors., (2021) 18 SCC 1, and Experion Developers Pvt. Ltd. v. Sushma Ashok Shiroor, (2022) 15 SCC 480.

3. STATUTORY INTEREST FROM EACH DATE OF PAYMENT (SBI MCLR + 2%):
Under Section 18(1) read with the State RERA Rules, ${fields.builderCompanyName} is statutorily bound to return the entire principal sum of ${fields.amountPaidSoFar} along with prescribed interest at SBI Highest MCLR + 2% per annum calculated from the exact date on which each instalment/booking sum was received by you until actual realization, within the statutory 45-day RERA refund window.

4. DEMAND FOR IMMEDIATE SETTLEMENT:
We hereby call upon you to confirm the full refund schedule and remit ${fields.netRefundClaimed} along with accrued statutory interest to our bank account (${fields.bankAccountDetails}) within ${fields.cureWindowDays} calendar days, failing which we shall proceed directly with an online RERA Section 31 / Section 18 recovery petition and Section 40(1) Recovery Certificate execution.

Yours faithfully,

Signature: ___________________________
Name: ${fields.buyerFullName}
Contact: ${fields.buyerContact}`;

  const allLetters: Record<
    LetterVariantKey,
    {
      badge: string;
      title: string;
      subtitle: string;
      whenToUse: string;
      content: string;
      filename: string;
    }
  > = {
    polite: {
      badge: "Variant 1 • Polite Request (Before Agreement)",
      title: "Polite Flat / Plot Booking Cancellation Letter (Before Signing BBA)",
      subtitle:
        "Ideal when cancelling within days or weeks of paying token/booking money due to loan rejection, family emergency, or personal change of plan before any registered Agreement for Sale.",
      whenToUse: "First written cancellation request before signing a registered Builder-Buyer Agreement",
      content: buildPoliteBeforeAgreementLetter(),
      filename: "Flat_Booking_Cancellation_Letter_Polite_Before_BBA.doc",
    },
    firm: {
      badge: "Variant 2 • Recommended Statutory Demand",
      title: "Firm Booking Cancellation Letter Challenging Builder Forfeiture (RERA Sec 13 & Contract Act Sec 74)",
      subtitle:
        "Use when the builder's CRM claims the token money is 'non-refundable' or threatens to deduct 10%–20% of the flat's total value.",
      whenToUse: "Builder refuses refund or quotes arbitrary 10%–20% cancellation charges",
      content: buildFirmReraForfeitureChallengeLetter(),
      filename: "Firm_Flat_Booking_Cancellation_RERA_Sec13_Letter.doc",
    },
    final: {
      badge: "Variant 3 • Final 15-Day Pre-Litigation Notice",
      title: "Final Pre-Litigation Ultimatum Before RERA Section 31 / Consumer Court Filing",
      subtitle:
        "Use when 15–45 days have passed since your cancellation request, or the builder demands you surrender original receipts / sign a waiver before paying.",
      whenToUse: "Builder stalls refund past 30–45 days or demands original receipts upfront",
      content: buildFinalPreLitigationLetter(),
      filename: "Final_Pre_Litigation_Flat_Cancellation_Refund_Notice.doc",
    },
    delay: {
      badge: "Variant 4 • Builder Default / Possession Delay (Sec 18)",
      title: "Statutory Project Withdrawal & 100% Refund + Interest Letter (RERA Sections 12 & 18)",
      subtitle:
        "Use when cancelling after or before agreement because the builder delayed possession, stalled construction, or violated brochure promises—entitling you to 0% deduction + SBI MCLR+2% interest.",
      whenToUse: "Builder delayed possession, changed layout, or breached RERA brochure commitments",
      content: buildBuilderDefaultSection18Letter(),
      filename: "RERA_Section18_Builder_Delay_Cancellation_Refund_Letter.doc",
    },
  };

  const handleCopy = async (key: LetterVariantKey) => {
    try {
      await navigator.clipboard.writeText(allLetters[key].content);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    } catch {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  const handleDownloadDoc = (key: LetterVariantKey) => {
    const docItem = allLetters[key];
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      `<head><meta charset='utf-8'><title>${docItem.title}</title></head><body style='font-family: Arial, sans-serif; font-size: 11pt; line-height: 1.5;'>`;
    const footer = "</body></html>";
    const formattedHtml = docItem.content.replace(/\n/g, "<br/>");
    const sourceHtml = header + formattedHtml + footer;

    const source =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(sourceHtml);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = docItem.filename;
    fileDownload.click();
    document.body.removeChild(fileDownload);
  };

  const handlePrint = (key: LetterVariantKey) => {
    const docItem = allLetters[key];
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${docItem.title}</title>
            <style>
              body { font-family: Georgia, serif; padding: 36px; font-size: 12.5px; line-height: 1.65; color: #0f172a; }
              pre { white-space: pre-wrap; word-wrap: break-word; font-family: inherit; }
            </style>
          </head>
          <body>
            <pre>${docItem.content}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="space-y-8">
      {/* Optional Quick Placeholder Helper Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1.5">
                Quick Placeholder Customizer • Updates All 4 Cancellation Formats Below
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Personalize Your Flat/Plot Unit, Builder &amp; Payment Details (Optional)
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Copy any <code className="text-red-300">[SQUARE BRACKET]</code> letter format directly below, or enter your unit and receipt details once to populate all four templates simultaneously.
              </p>
            </div>
            <div
              role="tablist"
              aria-label="Jump to Cancellation Letter Variant"
              className="flex flex-wrap items-center gap-1.5 bg-slate-800/90 p-1 rounded-xl border border-slate-700"
            >
              {(["polite", "firm", "final", "delay"] as LetterVariantKey[]).map((key) => {
                const labels: Record<LetterVariantKey, string> = {
                  polite: "1. Polite (Pre-BBA)",
                  firm: "2. Firm (Anti-Forfeiture)",
                  final: "3. Final Ultimatum",
                  delay: "4. Sec 18 Builder Delay",
                };
                const isSelected = activeVariant === key;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setActiveVariant(key);
                      const el = document.getElementById(`cancellation-letter-${key}`);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                      }
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#DC2626] text-white shadow-xs"
                        : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                    }`}
                  >
                    {labels[key]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-slate-50/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div>
            <label htmlFor={`${formId}-buyerFullName`} className="block font-bold text-slate-700 mb-1">
              Buyer / Allottee Name
            </label>
            <input
              id={`${formId}-buyerFullName`}
              type="text"
              name="buyerFullName"
              value={fields.buyerFullName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-builderCompanyName`} className="block font-bold text-slate-700 mb-1">
              Builder / Promoter Name
            </label>
            <input
              id={`${formId}-builderCompanyName`}
              type="text"
              name="builderCompanyName"
              value={fields.builderCompanyName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-projectName`} className="block font-bold text-slate-700 mb-1">
              Project Name &amp; City
            </label>
            <input
              id={`${formId}-projectName`}
              type="text"
              name="projectName"
              value={fields.projectName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-unitDetails`} className="block font-bold text-slate-700 mb-1">
              Flat / Plot Unit No.
            </label>
            <input
              id={`${formId}-unitDetails`}
              type="text"
              name="unitDetails"
              value={fields.unitDetails}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-amountPaidSoFar`} className="block font-bold text-slate-700 mb-1">
              Booking / Token Amount Paid
            </label>
            <input
              id={`${formId}-amountPaidSoFar`}
              type="text"
              name="amountPaidSoFar"
              value={fields.amountPaidSoFar}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-paymentReceiptsAndUtr`} className="block font-bold text-slate-700 mb-1">
              Receipt No. &amp; Cheque/NEFT UTR
            </label>
            <input
              id={`${formId}-paymentReceiptsAndUtr`}
              type="text"
              name="paymentReceiptsAndUtr"
              value={fields.paymentReceiptsAndUtr}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-cancellationReason`} className="block font-bold text-slate-700 mb-1">
              Reason for Cancellation
            </label>
            <input
              id={`${formId}-cancellationReason`}
              type="text"
              name="cancellationReason"
              value={fields.cancellationReason}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-netRefundClaimed`} className="block font-bold text-slate-700 mb-1">
              Net Refund Demanded (₹)
            </label>
            <input
              id={`${formId}-netRefundClaimed`}
              type="text"
              name="netRefundClaimed"
              value={fields.netRefundClaimed}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-emerald-800 font-extrabold focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
        </div>
      </div>

      {/* Stacked Server-Rendered Complete Letters (Archetype P2 Core Requirement: All full letters in <article> + <pre>) */}
      <div className="space-y-6">
        {(["polite", "firm", "final", "delay"] as LetterVariantKey[]).map((key) => {
          const item = allLetters[key];
          const isHighlighted = activeVariant === key;
          return (
            <article
              key={key}
              id={`cancellation-letter-${key}`}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                isHighlighted
                  ? "border-[#DC2626] ring-2 ring-red-500/15 shadow-md"
                  : "border-slate-200 shadow-xs"
              }`}
            >
              <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-slate-300 font-medium">
                      • Use when: {item.whenToUse}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.subtitle}</p>
                </div>

                {/* Action Buttons: Copy / Download .doc / Print */}
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleCopy(key)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
                  >
                    <span>{copiedKey === key ? "✓ Copied!" : "Copy Letter"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadDoc(key)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                  >
                    <span>Download .doc</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePrint(key)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer"
                  >
                    <span>Print / PDF</span>
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-slate-50/50">
                <pre className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-[540px] overflow-y-auto select-all">
                  {item.content}
                </pre>
                <p className="text-[11px] text-slate-500 mt-3 flex flex-wrap items-center justify-between gap-2">
                  <span>
                    <strong>Legal Validity Note:</strong> Send this signed letter via India Post Registered Post (RPAD) to the promoter&apos;s RERA-registered address AND by email/WhatsApp (admissible under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023). Never insert an advocate&apos;s name or enrolment number in a self-sent buyer letter.
                  </span>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useId } from "react";

type LetterVariantKey = "standard" | "health" | "life" | "motor";

interface OmbudsmanFields {
  complainantName: string;
  complainantAddress: string;
  complainantPhone: string;
  complainantEmail: string;
  insurerName: string;
  insurerBranchAddress: string;
  policyNumber: string;
  policyType: string;
  sumAssured: string;
  dateOfCommencement: string;
  claimNumber: string;
  claimAmount: string;
  dateOfLoss: string;
  rejectionDateAndRef: string;
  groRepresentationDate: string;
  bimaBharosaToken: string;
  ombudsmanCenter: string;
  reliefClaimed: string;
}

export default function InsuranceOmbudsmanWorkspace() {
  const formId = useId();
  const [activeVariant, setActiveVariant] = useState<LetterVariantKey>("standard");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [fields, setFields] = useState<OmbudsmanFields>({
    complainantName: "[YOUR FULL NAME, e.g., Rajesh Kumar Sharma]",
    complainantAddress: "[Full Residential Address, e.g., Flat 402, Lotus Enclave, Sector 62, Noida - 201301, UP]",
    complainantPhone: "[9876543210]",
    complainantEmail: "[rajesh.sharma@example.com]",
    insurerName: "[INSURER LEGAL NAME, e.g., Star Health & Allied Insurance Co. Ltd. / HDFC ERGO / LIC of India]",
    insurerBranchAddress: "[Branch Office Address / Registered Office Address of Insurance Company]",
    policyNumber: "[POLICY NUMBER, e.g., 0123/4567/8901/00/000]",
    policyType: "Health Insurance (Family Floater)",
    sumAssured: "[₹10,00,000]",
    dateOfCommencement: "[15 October 2021]",
    claimNumber: "[CLAIM NO., e.g., CLM/2026/894120]",
    claimAmount: "[₹4,85,000]",
    dateOfLoss: "[12 June 2026]",
    rejectionDateAndRef: "[Letter Ref: REJ/HLT/2026/4102 dated 04 July 2026]",
    groRepresentationDate: "[Representation submitted on 10 July 2026 via Speed Post & Email]",
    bimaBharosaToken: "[IRDAI/BB/2026/094182 or 'Not Filed']",
    ombudsmanCenter: "Office of the Insurance Ombudsman, Noida",
    reliefClaimed: "[Full reimbursement of admissible hospitalisation claim sum of ₹4,85,000 along with statutory penal interest @ Bank Rate + 2% per annum under IRDAI Policyholder Protection Regulations, plus ₹50,000 towards harassment and litigation expenses]",
  });

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const buildStandardAnnexureVIA = () => `FORM VI-A
[See Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017]
COMPLAINT TO THE INSURANCE OMBUDSMAN

To,
The Insurance Ombudsman,
${fields.ombudsmanCenter}

1. NAME & ADDRESS OF THE COMPLAINANT:
Name: ${fields.complainantName}
Address: ${fields.complainantAddress}
Contact Mobile: ${fields.complainantPhone}
Email ID: ${fields.complainantEmail}

2. DETAILS OF THE INSURANCE COMPANY / OFFICE AGAINST WHICH COMPLAINT IS MADE:
Name of Insurer: ${fields.insurerName}
Branch / Operating Office Address: ${fields.insurerBranchAddress}

3. PARTICULARS OF THE INSURANCE POLICY:
(a) Policy Number: ${fields.policyNumber}
(b) Type / Class of Policy: ${fields.policyType}
(c) Sum Assured: ${fields.sumAssured}
(d) Date of Commencement / Inception: ${fields.dateOfCommencement}
(e) Period of Insurance: [From 15/10/2021 to 14/10/2027 (Continuous renewals)]

4. DETAILS OF CLAIM:
(a) Date of Occurrence / Loss / Hospitalisation: ${fields.dateOfLoss}
(b) Claim Number: ${fields.claimNumber}
(c) Gross Amount Claimed: ${fields.claimAmount}
(d) Amount Paid by Insurer (if any): [₹0 / Partial Payment]
(e) Balance Disputed Amount: ${fields.claimAmount}

5. NATURE OF GRIEVANCE / DISPUTE:
The Insurer has arbitrarily, wrongfully, and in gross violation of IRDAI regulations repudiated / unlawfully deducted the legitimate claim of the Complainant.
(a) Insurer Repudiation / Deduction Date & Ref: ${fields.rejectionDateAndRef}
(b) Ground Alleged by Insurer: [Arbitrary Pre-Existing Disease (PED) Clause / Proportionate Deduction / Delay / Alleged Non-disclosure]

6. DETAILS OF REPRESENTATION MADE TO THE INSURER'S GRO:
In compliance with Rule 14(3)(a) of the Insurance Ombudsman Rules, 2017, the Complainant submitted a detailed written representation to the Grievance Redressal Officer (GRO) of the Insurer on:
Date of Representation: ${fields.groRepresentationDate}
Mode of Service: Registered Speed Post / Official Grievance Portal
GRO Reply / Status: [Rejected vide reply dated DD/MM/YYYY OR No response received within 30 days]
Bima Bharosa Portal Token (if logged): ${fields.bimaBharosaToken}

7. RELIEF SOUGHT FROM THE INSURANCE OMBUDSMAN:
The Complainant humbly prays for an Award directing the Insurer to:
(i) Pay the full repudiated / deducted claim amount of ${fields.claimAmount};
(ii) Pay penal interest at the rate of Bank Rate + 2% per annum from the date of claim submission until final payment under IRDAI (Protection of Policyholders' Interests) Regulations;
(iii) Pay ₹50,000 towards mental agony, hardship, and costs incurred in pursuing this dispute.

8. DECLARATION UNDER RULE 14(3) OF INSURANCE OMBUDSMAN RULES, 2017:
I/We hereby solemnly declare and affirm that:
(a) The complaint is made within one year from the date of receipt of the repudiation / partial settlement letter from the Insurer OR after expiry of 30 days from the date of representation to the GRO where no reply was received;
(b) The total relief claimed does not exceed ₹50,00,000 (Rupees Fifty Lakhs only);
(c) The subject matter of this complaint is NOT pending before any Court of Law, Consumer Disputes Redressal Commission, or Arbitrator, nor has any decree, order, or award been passed by any such forum;
(d) All information provided herein and in the attached annexures is true, correct, and complete to the best of my knowledge.

Place: [City / Town]
Date: [DD/MM/YYYY]

_______________________________
(Signature of the Complainant)
${fields.complainantName}

LIST OF MANDATORY ENCLOSURES ATTACHED:
1. Copy of Insurance Policy Schedule with terms and conditions.
2. Copy of Claim Form and initial claim submission acknowledgment.
3. Copy of Insurer's Repudiation / Deduction Letter dated ${fields.rejectionDateAndRef}.
4. Copy of Written Representation sent to Insurer GRO on ${fields.groRepresentationDate}.
5. Proof of Delivery / Speed Post Tracking Consignment / Email Delivery Receipts.
6. Relevant medical discharge summary, diagnostic reports, and final hospital invoices (or surveyor assessment / FIR as applicable).
7. Copy of Bank Passbook front page / Cancelled Cheque for NEFT award credit.`;

  const buildHealthRepudiationLetter = () => `FORM VI-A — COMPLAINT TO THE INSURANCE OMBUDSMAN
[HEALTH INSURANCE CLAIM REPUDIATION / CASHLESS DENIAL VARIANT]
Under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017

To,
The Insurance Ombudsman,
${fields.ombudsmanCenter}

COMPLAINANT: ${fields.complainantName}, Address: ${fields.complainantAddress}
Mobile: ${fields.complainantPhone} | Email: ${fields.complainantEmail}

OPPOSITE PARTY: ${fields.insurerName} (${fields.insurerBranchAddress})

1. POLICY & CLAIM PARTICULARS:
• Policy Number: ${fields.policyNumber} (Type: ${fields.policyType})
• Policy Inception Date: ${fields.dateOfCommencement} (Continuous renewals with zero lapse)
• Total Sum Assured: ${fields.sumAssured} | Hospitalisation Date: ${fields.dateOfLoss}
• Hospital Name: [Fortis / Apollo / Max Super Speciality Hospital]
• Claim Ref No: ${fields.claimNumber} | Admissible Hospitalisation Expenses: ${fields.claimAmount}
• Insurer Rejection Letter: ${fields.rejectionDateAndRef}

2. BRIEF FACTS OF ARBITRARY REPUDIATION:
(a) The Complainant / Insured was hospitalised for emergency medical treatment and underwent necessary medical procedures under treating doctor's advice.
(b) Cashless authorisation was arbitrarily denied at the hospital desk, compelling the Complainant to pay ₹${fields.claimAmount} out of pocket.
(c) Upon submitting the reimbursement dossier with all original bills and indoor case records, the Insurer issued a mechanical repudiation letter alleging "Non-disclosure of Pre-Existing Disease (PED) / Hypertension / Diabetes" or "Treatment not medically necessary / day care exclusion".
(d) The Complainant affirms that:
    (i) The hospitalisation had zero medical nexus with any alleged historical ailment;
    (ii) Under Section 45 of the Insurance Act, 1938 and IRDAI Health Master Circular (2024), the policy having run continuously for over 36/60 months cannot be repudiated on grounds of alleged pre-existing conditions;
    (iii) As held by the Supreme Court in Manmohan Nanda v. United India Insurance Co. (2022) 4 SCC 582, ordinary non-morbid conditions without proven fraudulent suppression cannot be ground for claim repudiation.

3. COMPLIANCE WITH RULE 14(3)(a):
The Complainant served a detailed reconsideration appeal to the Insurer's Grievance Redressal Officer on ${fields.groRepresentationDate}. The GRO either upheld the arbitrary repudiation or failed to resolve the matter within the statutory 30-day period.

4. PRAYER / RELIEF SOUGHT:
The Complainant prays for an Award directing ${fields.insurerName} to reimburse the full hospitalisation expenses of ${fields.claimAmount} along with statutory interest @ Bank Rate + 2% p.a. from date of filing until realisation, and ₹40,000 for distress.

5. STATUTORY DECLARATION:
I confirm this claim does not exceed ₹50,00,000, is filed within 1 year of repudiation, and no parallel case is pending before any Consumer Forum or Civil Court.

Date: [DD/MM/YYYY]
(Signature): _______________________________
${fields.complainantName}`;

  const buildLifeDelayLetter = () => `FORM VI-A — COMPLAINT TO THE INSURANCE OMBUDSMAN
[LIFE INSURANCE DEATH CLAIM REPUDIATION / UNREASONABLE DELAY VARIANT]
Under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017

To,
The Insurance Ombudsman,
${fields.ombudsmanCenter}

COMPLAINANT (NOMINEE / LEGAL HEIR):
Name: ${fields.complainantName}
Address: ${fields.complainantAddress}
Contact: ${fields.complainantPhone} | ${fields.complainantEmail}

INSURANCE COMPANY:
${fields.insurerName}, Branch: ${fields.insurerBranchAddress}

1. POLICY & DEATH CLAIM DETAILS:
• Policy Number: ${fields.policyNumber} (Life Insurance / Term Plan)
• Name of Deceased Life Assured (DLA): [FULL NAME OF DECEASED INSURED]
• Policy Inception Date: ${fields.dateOfCommencement}
• Sum Assured: ${fields.sumAssured}
• Date of Death of Life Assured: ${fields.dateOfLoss}
• Death Claim File Ref: ${fields.claimNumber}
• Death Claim Amount: ${fields.claimAmount}

2. STATEMENT OF GROSS DEFICIENCY & INORDINATE DELAY:
(a) The Complainant, being the registered nominee under Section 39 of the Insurance Act, 1938, submitted the death intimation, death certificate, and completed claim forms to the Insurer.
(b) Under Regulation 14 of the IRDAI (Protection of Policyholders' Interests) Regulations, the Insurer is bound to settle a death claim within 30 days, or where an investigation is warranted, complete the investigation within 90 days.
(c) The Insurer has either:
    (i) Exceeded the 90-day statutory ceiling and sat on the claim without decision; OR
    (ii) Issued an unlawful repudiation on ${fields.rejectionDateAndRef} citing alleged non-disclosure of medical history.
(d) SECTION 45 STATUTORY BAR:
Under Section 45 of the Insurance Act, 1938, no life insurance policy can be called in question on any ground whatsoever after the expiry of three (3) continuous years from the date of issuance or revival. Any repudiation initiated after 3 years is null, void, and non-est in the eyes of law.

3. GRO REPRESENTATION:
The Nominee submitted a formal claim reminder / notice to the Insurer GRO on ${fields.groRepresentationDate}. More than 30 days have elapsed with zero settlement.

4. PRAYER:
Award of full death benefit of ${fields.claimAmount} with penal interest @ Bank Rate + 2% per annum, plus ₹1,00,000 compensation for harassment of bereaved family.

Date: [DD/MM/YYYY]
(Signature): _______________________________
${fields.complainantName} (Nominee)`;

  const buildMotorDeductionLetter = () => `FORM VI-A — COMPLAINT TO THE INSURANCE OMBUDSMAN
[MOTOR VEHICLE ACCIDENT CLAIM DEDUCTION / TOTAL LOSS DISPUTE]
Under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017

To,
The Insurance Ombudsman,
${fields.ombudsmanCenter}

COMPLAINANT: ${fields.complainantName}, Address: ${fields.complainantAddress}
Phone: ${fields.complainantPhone} | Email: ${fields.complainantEmail}

INSURER: ${fields.insurerName}, Office: ${fields.insurerBranchAddress}

1. POLICY & VEHICLE PARTICULARS:
• Vehicle Reg. No.: [e.g., MH-02-CD-5678 / DL-10-XY-1234]
• Policy No.: ${fields.policyNumber} (Comprehensive Motor Package Policy)
• Insured Declared Value (IDV): ${fields.sumAssured}
• Date of Accident / Incident: ${fields.dateOfLoss}
• Claim Ref No.: ${fields.claimNumber}
• Total Repair Estimate / Claim Amount: ${fields.claimAmount}
• Insurer Settlement Voucher / Repudiation: ${fields.rejectionDateAndRef}

2. GROUNDS OF COMPLAINT:
(a) The Insurer's surveyor assessed the vehicle damage but arbitrarily slashed repair bills by applying unlawful depreciation deductions, disallowing legitimate labour costs, or refusing paint and bumper charges in violation of the Indian Motor Tariff (IMT) and IRDAI guidelines.
(b) In Total Loss / Constructive Total Loss (CTL) cases, the Insurer is attempting to coerce the Complainant into accepting a reduced settlement below the agreed Insured Declared Value (IDV) of ${fields.sumAssured}.
(c) The Complainant lodged an objection with the GRO on ${fields.groRepresentationDate}, which was either summarily rejected or unanswered for 30 days.

3. PRAYER:
Award directing full reimbursement of ${fields.claimAmount} (or payment of full IDV less statutory salvage value) with 9% interest and litigation costs.

Date: [DD/MM/YYYY]
(Signature): _______________________________
${fields.complainantName}`;

  const allLetters: Record<
    LetterVariantKey,
    { title: string; subtitle: string; filename: string; text: string }
  > = {
    standard: {
      title: "Annexure VI-A: Standard Statutory Ombudsman Form",
      subtitle: "Full official complaint template compliant with Rule 14 of Insurance Ombudsman Rules, 2017.",
      filename: "Insurance_Ombudsman_Annexure_VI_A_Standard.doc",
      text: buildStandardAnnexureVIA(),
    },
    health: {
      title: "Annexure VI-A: Health Claim Repudiation & Cashless Denial",
      subtitle: "Tailored for pre-existing disease pretext, room rent cuts, and hospital bill deductions.",
      filename: "Insurance_Ombudsman_Health_Claim_Annexure_VI_A.doc",
      text: buildHealthRepudiationLetter(),
    },
    life: {
      title: "Annexure VI-A: Life Insurance Death Claim Delay / Rejection",
      subtitle: "Invokes Section 45 Insurance Act (3-year incontestability rule) and IRDAI 90-day investigation cap.",
      filename: "Insurance_Ombudsman_Life_Death_Claim_Annexure_VI_A.doc",
      text: buildLifeDelayLetter(),
    },
    motor: {
      title: "Annexure VI-A: Motor & General Insurance Deduction / Total Loss",
      subtitle: "For surveyor under-assessments, arbitrary depreciation, and IDV deductions.",
      filename: "Insurance_Ombudsman_Motor_Claim_Annexure_VI_A.doc",
      text: buildMotorDeductionLetter(),
    },
  };

  const handleCopy = (key: LetterVariantKey) => {
    const textToCopy = allLetters[key].text;
    navigator.clipboard.writeText(textToCopy);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 3000);
  };

  const handleDownloadDoc = (key: LetterVariantKey) => {
    const docItem = allLetters[key];
    const header =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
      "xmlns:w='urn:schemas-microsoft-com:office:word' " +
      "xmlns='http://www.w3.org/TR/REC-html40'>" +
      "<head><meta charset='utf-8'><title>" +
      docItem.title +
      "</title>" +
      "<style>body{font-family:'Times New Roman',serif;font-size:12pt;line-height:1.5;margin:1in;}h1,h2{text-align:center;}table{width:100%;border-collapse:collapse;margin:12pt 0;}td,th{border:1px solid #333;padding:6pt;font-size:11pt;}</style>" +
      "</head><body>";
    const footer = "</body></html>";
    const sourceHtml =
      header +
      "<h2>" +
      docItem.title +
      "</h2>" +
      "<p style='font-size:10pt;color:#666;text-align:center;'>Filing under Rule 14(3)(b) of Insurance Ombudsman Rules, 2017</p><hr/>" +
      "<pre style='font-family:\"Times New Roman\",serif;font-size:11pt;white-space:pre-wrap;word-break:break-word;'>" +
      docItem.text.replace(/</g, "&lt;").replace(/>/g, "&gt;") +
      "</pre>" +
      footer;

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
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>${docItem.title}</title>
          <style>
            body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; padding: 20mm; color: #000; }
            h2 { text-align: center; font-size: 14pt; margin-bottom: 4px; text-transform: uppercase; }
            .sub { text-align: center; font-size: 10pt; color: #444; margin-bottom: 20px; }
            pre { font-family: 'Times New Roman', serif; font-size: 11pt; white-space: pre-wrap; word-wrap: break-word; line-height: 1.45; }
            @page { margin: 15mm; }
          </style>
        </head>
        <body>
          <h2>${docItem.title}</h2>
          <div class="sub">Statutory Complaint Form Annexure VI-A • Insurance Ombudsman Rules, 2017</div>
          <hr/>
          <pre>${docItem.text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden my-8">
      {/* Workspace Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-7">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-950/80 text-red-400 border border-red-800/60 mb-3">
          <span>Official Statutory Generator</span>
          <span>•</span>
          <span>Annexure VI-A Compliant</span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Insurance Ombudsman Complaint Generator (Annexure VI-A)
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
          Fill your claim and policy details below to automatically populate the statutory Annexure VI-A complaint form prescribed under Rule 14(3)(b) of the Insurance Ombudsman Rules, 2017. Copy, print or export directly to Word (.doc) for physical submission or email filing.
        </p>
      </div>

      {/* Interactive Form Fields Grid */}
      <div className="p-5 sm:p-7 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            Step 1: Enter Your Policy &amp; Claim Data (Auto-Fills Form)
          </h3>
          <span className="text-xs text-slate-500 hidden sm:inline">All fields customizable</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label htmlFor={`${formId}-complainantName`} className="block font-semibold text-slate-700 mb-1">
              Complainant Full Name
            </label>
            <input
              id={`${formId}-complainantName`}
              type="text"
              name="complainantName"
              value={fields.complainantName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-complainantPhone`} className="block font-semibold text-slate-700 mb-1">
              Contact Mobile Number
            </label>
            <input
              id={`${formId}-complainantPhone`}
              type="text"
              name="complainantPhone"
              value={fields.complainantPhone}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-complainantEmail`} className="block font-semibold text-slate-700 mb-1">
              Complainant Email ID
            </label>
            <input
              id={`${formId}-complainantEmail`}
              type="text"
              name="complainantEmail"
              value={fields.complainantEmail}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-complainantAddress`} className="block font-semibold text-slate-700 mb-1">
              Full Residential Postal Address (with PIN)
            </label>
            <input
              id={`${formId}-complainantAddress`}
              type="text"
              name="complainantAddress"
              value={fields.complainantAddress}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-ombudsmanCenter`} className="block font-semibold text-slate-700 mb-1">
              Jurisdictional Ombudsman Center
            </label>
            <select
              id={`${formId}-ombudsmanCenter`}
              name="ombudsmanCenter"
              value={fields.ombudsmanCenter}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            >
              <option value="Office of the Insurance Ombudsman, Mumbai">Mumbai (Maharashtra &amp; Goa)</option>
              <option value="Office of the Insurance Ombudsman, Delhi">Delhi &amp; NCR</option>
              <option value="Office of the Insurance Ombudsman, Noida">Noida (Western UP &amp; Uttarakhand)</option>
              <option value="Office of the Insurance Ombudsman, Lucknow">Lucknow (Central &amp; Eastern UP)</option>
              <option value="Office of the Insurance Ombudsman, Kolkata">Kolkata (West Bengal &amp; Sikkim)</option>
              <option value="Office of the Insurance Ombudsman, Bengaluru">Bengaluru (Karnataka)</option>
              <option value="Office of the Insurance Ombudsman, Chennai">Chennai (Tamil Nadu &amp; Puducherry)</option>
              <option value="Office of the Insurance Ombudsman, Hyderabad">Hyderabad (Telangana &amp; AP)</option>
              <option value="Office of the Insurance Ombudsman, Ahmedabad">Ahmedabad (Gujarat)</option>
              <option value="Office of the Insurance Ombudsman, Pune">Pune (Maharashtra Regional)</option>
              <option value="Office of the Insurance Ombudsman, Chandigarh">Chandigarh (Punjab, Haryana, HP, J&amp;K)</option>
              <option value="Office of the Insurance Ombudsman, Jaipur">Jaipur (Rajasthan)</option>
              <option value="Office of the Insurance Ombudsman, Bhopal">Bhopal (Madhya Pradesh &amp; CG)</option>
              <option value="Office of the Insurance Ombudsman, Ernakulam">Ernakulam (Kerala &amp; Lakshadweep)</option>
              <option value="Office of the Insurance Ombudsman, Bhubaneswar">Bhubaneswar (Odisha)</option>
              <option value="Office of the Insurance Ombudsman, Patna">Patna (Bihar &amp; Jharkhand)</option>
              <option value="Office of the Insurance Ombudsman, Guwahati">Guwahati (North East States)</option>
            </select>
          </div>

          <div>
            <label htmlFor={`${formId}-insurerName`} className="block font-semibold text-slate-700 mb-1">
              Insurance Company Name
            </label>
            <input
              id={`${formId}-insurerName`}
              type="text"
              name="insurerName"
              value={fields.insurerName}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-policyNumber`} className="block font-semibold text-slate-700 mb-1">
              Policy Number
            </label>
            <input
              id={`${formId}-policyNumber`}
              type="text"
              name="policyNumber"
              value={fields.policyNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-sumAssured`} className="block font-semibold text-slate-700 mb-1">
              Policy Sum Assured / IDV
            </label>
            <input
              id={`${formId}-sumAssured`}
              type="text"
              name="sumAssured"
              value={fields.sumAssured}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-claimNumber`} className="block font-semibold text-slate-700 mb-1">
              Claim Number
            </label>
            <input
              id={`${formId}-claimNumber`}
              type="text"
              name="claimNumber"
              value={fields.claimNumber}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-claimAmount`} className="block font-semibold text-slate-700 mb-1">
              Claim Amount In Dispute (₹)
            </label>
            <input
              id={`${formId}-claimAmount`}
              type="text"
              name="claimAmount"
              value={fields.claimAmount}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900 font-bold"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-rejectionDateAndRef`} className="block font-semibold text-slate-700 mb-1">
              Insurer Rejection Date &amp; Ref No.
            </label>
            <input
              id={`${formId}-rejectionDateAndRef`}
              type="text"
              name="rejectionDateAndRef"
              value={fields.rejectionDateAndRef}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-groRepresentationDate`} className="block font-semibold text-slate-700 mb-1">
              Date Written Appeal Sent to Insurer GRO
            </label>
            <input
              id={`${formId}-groRepresentationDate`}
              type="text"
              name="groRepresentationDate"
              value={fields.groRepresentationDate}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>

          <div>
            <label htmlFor={`${formId}-bimaBharosaToken`} className="block font-semibold text-slate-700 mb-1">
              Bima Bharosa Token (if logged)
            </label>
            <input
              id={`${formId}-bimaBharosaToken`}
              type="text"
              name="bimaBharosaToken"
              value={fields.bimaBharosaToken}
              onChange={handleFieldChange}
              className="w-full px-3 py-2 bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-600 text-slate-900"
            />
          </div>
        </div>
      </div>

      {/* Variant Selector Tabs */}
      <div className="p-4 sm:p-5 bg-slate-100 border-b border-slate-200">
        <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
          Step 2: Choose Template Variant for Your Dispute Type:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {(
            [
              { key: "standard", label: "Standard Annexure VI-A", badge: "Universal" },
              { key: "health", label: "Health / Cashless Denial", badge: "Most Popular" },
              { key: "life", label: "Life Death Claim Delay", badge: "Sec 45 Bar" },
              { key: "motor", label: "Motor / Accidental Loss", badge: "IDV Dispute" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveVariant(tab.key)}
              className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                activeVariant === tab.key
                  ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-red-500/50"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-red-100 text-red-700">
                  {tab.badge}
                </span>
              </div>
              <p className="font-bold text-xs leading-snug">{tab.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Letter Action Bar & Preview */}
      <div className="p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200">
          <div>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              {allLetters[activeVariant].title}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {allLetters[activeVariant].subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleCopy(activeVariant)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              {copiedKey === activeVariant ? (
                <>
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleDownloadDoc(activeVariant)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-semibold border border-slate-700 shadow-sm transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download .doc (Word)</span>
            </button>

            <button
              type="button"
              onClick={() => handlePrint(activeVariant)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 shadow-sm transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Formatted Code / Article Preview */}
        <article className="relative bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-7 font-mono text-xs leading-relaxed overflow-x-auto border border-slate-800 shadow-inner">
          <div className="absolute top-3 right-3 text-[10px] text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">
            Form VI-A Preview
          </div>
          <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-200 leading-relaxed">
            {allLetters[activeVariant].text}
          </pre>
        </article>
      </div>
    </div>
  );
}

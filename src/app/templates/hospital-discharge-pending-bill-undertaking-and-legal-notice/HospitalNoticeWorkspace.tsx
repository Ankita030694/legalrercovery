"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

type TemplateType = "undertaking" | "legal_notice";

interface HospitalNoticeState {
  hospitalName: string;
  hospitalAddress: string;
  hospitalCity: string;
  hospitalState: string;
  hospitalPin: string;
  patientName: string;
  patientAge: string;
  patientAddress: string;
  patientContact: string;
  ipdNo: string;
  admissionDate: string;
  dischargeDate: string;
  treatingDepartment: string;
  attendantName: string;
  attendantAge: string;
  attendantRelationship: string;
  attendantAddress: string;
  attendantContact: string;
  attendantIdProof: string;
  totalGrossBill: number;
  paidAmount: number;
  insuranceSettledAmount: number;
  promisedPaymentDate: string;
  interestRatePercent: number;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  legalNoticeDate: string;
  legalNoticeRefNo: string;
}

const PRESETS: {
  id: string;
  label: string;
  badge: string;
  patch: Partial<HospitalNoticeState>;
}[] = [
  {
    id: "insurance-shortfall",
    label: "TPA / Insurance Partial Deduction Shortfall",
    badge: "Most Frequent",
    patch: {
      hospitalName: "MetroCare Multi-Specialty Hospital & Research Centre",
      hospitalAddress: "Plot 14, Institutional Area, Sector 62",
      hospitalCity: "Noida",
      hospitalState: "Uttar Pradesh",
      hospitalPin: "201309",
      patientName: "Mr. Satish Chandra Verma",
      patientAge: "54",
      patientAddress: "C-42, Sector 47, Noida - 201301",
      patientContact: "+91 98112 34567",
      ipdNo: "MC-IPD-2026-10492",
      admissionDate: "05 November 2026",
      dischargeDate: "10 November 2026",
      treatingDepartment: "Cardiology & Interventional Care",
      attendantName: "Mr. Gaurav Verma",
      attendantAge: "29",
      attendantRelationship: "Son & Attendant Co-Obligor",
      attendantAddress: "C-42, Sector 47, Noida - 201301",
      attendantContact: "+91 98710 98765",
      attendantIdProof: "Aadhaar XXXX-XXXX-4819",
      totalGrossBill: 345000,
      paidAmount: 50000,
      insuranceSettledAmount: 210000,
      promisedPaymentDate: "25 November 2026",
      interestRatePercent: 18,
    },
  },
  {
    id: "emergency-uninsured",
    label: "Emergency ICU / Cashless Denied (High Balance)",
    badge: "High Ticket",
    patch: {
      hospitalName: "Apex Superspecialty Hospital & Trauma Centre",
      hospitalAddress: "Near Ring Road Flyover, Mansarovar",
      hospitalCity: "Jaipur",
      hospitalState: "Rajasthan",
      hospitalPin: "302020",
      patientName: "Mrs. Meenakshi Devi Sharma",
      patientAge: "62",
      patientAddress: "Plot 88, Triveni Nagar, Gopalpura Bypass, Jaipur - 302018",
      patientContact: "+91 94140 11223",
      ipdNo: "APX-ICU-88219",
      admissionDate: "28 October 2026",
      dischargeDate: "06 November 2026",
      treatingDepartment: "Critical Care, Pulmonology & Internal Medicine",
      attendantName: "Mr. Vikas Sharma",
      attendantAge: "36",
      attendantRelationship: "Eldest Son & Primary Attendant",
      attendantAddress: "Plot 88, Triveni Nagar, Gopalpura Bypass, Jaipur - 302018",
      attendantContact: "+91 98290 55443",
      attendantIdProof: "PAN ABCPS1234F / DL RJ1420180045",
      totalGrossBill: 285000,
      paidAmount: 60000,
      insuranceSettledAmount: 0,
      promisedPaymentDate: "21 November 2026",
      interestRatePercent: 18,
    },
  },
  {
    id: "nursing-home-surgical",
    label: "Private Nursing Home / Elective Surgery Dues",
    badge: "Nursing Home Desk",
    patch: {
      hospitalName: "Sanjivani Surgical Nursing Home & Laparoscopy Centre",
      hospitalAddress: "Main Station Road, Civil Lines",
      hospitalCity: "Bareilly",
      hospitalState: "Uttar Pradesh",
      hospitalPin: "243001",
      patientName: "Mr. Ramesh Kumar Gupta",
      patientAge: "47",
      patientAddress: "House 12, Subhash Nagar, Bareilly - 243002",
      patientContact: "+91 97580 66778",
      ipdNo: "SN-SURG-4019",
      admissionDate: "02 November 2026",
      dischargeDate: "05 November 2026",
      treatingDepartment: "General & Laparoscopic Surgery",
      attendantName: "Mr. Ankit Gupta",
      attendantAge: "24",
      attendantRelationship: "Brother & Co-Signatory",
      attendantAddress: "House 12, Subhash Nagar, Bareilly - 243002",
      attendantContact: "+91 98370 22334",
      attendantIdProof: "Aadhaar XXXX-XXXX-9901",
      totalGrossBill: 125000,
      paidAmount: 40000,
      insuranceSettledAmount: 0,
      promisedPaymentDate: "18 November 2026",
      interestRatePercent: 18,
    },
  },
];

const INITIAL_STATE: HospitalNoticeState = {
  hospitalName: "MetroCare Multi-Specialty Hospital & Research Centre",
  hospitalAddress: "Plot 14, Institutional Area, Sector 62",
  hospitalCity: "Noida",
  hospitalState: "Uttar Pradesh",
  hospitalPin: "201309",
  patientName: "Mr. Satish Chandra Verma",
  patientAge: "54",
  patientAddress: "C-42, Sector 47, Noida - 201301",
  patientContact: "+91 98112 34567",
  ipdNo: "MC-IPD-2026-10492",
  admissionDate: "05 November 2026",
  dischargeDate: "10 November 2026",
  treatingDepartment: "Cardiology & Interventional Care",
  attendantName: "Mr. Gaurav Verma",
  attendantAge: "29",
  attendantRelationship: "Son & Attendant Co-Obligor",
  attendantAddress: "C-42, Sector 47, Noida - 201301",
  attendantContact: "+91 98710 98765",
  attendantIdProof: "Aadhaar XXXX-XXXX-4819",
  totalGrossBill: 345000,
  paidAmount: 50000,
  insuranceSettledAmount: 210000,
  promisedPaymentDate: "25 November 2026",
  interestRatePercent: 18,
  advocateName: "Advocate Rohitashwa Singhania",
  advocateEnrolment: "D/2891/2012 (Bar Council of Delhi)",
  advocateOffice: "Chamber 418, Lawyers Block, High Court of Delhi, New Delhi - 110003",
  legalNoticeDate: "14 November 2026",
  legalNoticeRefNo: "MCH/LEGAL/REC/2026-27/084",
};

export default function HospitalNoticeWorkspace() {
  const [activeTab, setActiveTab] = useState<TemplateType>("undertaking");
  const [state, setState] = useState<HospitalNoticeState>(INITIAL_STATE);
  const [copied, setCopied] = useState(false);

  const pendingBalance = useMemo(() => {
    const gross = Number(state.totalGrossBill) || 0;
    const paid = Number(state.paidAmount) || 0;
    const ins = Number(state.insuranceSettledAmount) || 0;
    return Math.max(0, gross - (paid + ins));
  }, [state.totalGrossBill, state.paidAmount, state.insuranceSettledAmount]);

  const applyPreset = (patch: Partial<HospitalNoticeState>) => {
    setState((prev) => ({ ...prev, ...patch }));
  };

  const handleInputChange = (field: keyof HospitalNoticeState, value: string | number) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  // Generate Undertaking Text
  const undertakingText = useMemo(() => {
    return `VOLUNTARY DISCHARGE FINANCIAL UNDERTAKING, ACKNOWLEDGMENT OF MEDICAL SERVICES, AND SECTION 4 NEGOTIABLE INSTRUMENTS ACT PROMISSORY NOTE WITH ATTENDANT CO-GUARANTEE

(Executed voluntarily at the Discharge Desk of ${state.hospitalName.toUpperCase()})

Date of Execution: ${state.dischargeDate}
Place of Execution: ${state.hospitalCity}, ${state.hospitalState}
IPD Registration / Patient File No.: ${state.ipdNo}

BETWEEN:

1. THE PATIENT (PRIMARY OBLIGOR):
   Name: ${state.patientName}, Age: ${state.patientAge} Years
   Resident of: ${state.patientAddress}
   Contact: ${state.patientContact}

AND

2. THE ATTENDANT / RELATIVE (CO-OBLIGOR & INDEPENDENT CONTINUING GUARANTOR):
   Name: ${state.attendantName}, Age: ${state.attendantAge} Years
   Relationship to Patient: ${state.attendantRelationship}
   Resident of: ${state.attendantAddress}
   Contact: ${state.attendantContact} | Identity Proof: ${state.attendantIdProof}

IN FAVOUR OF:
   ${state.hospitalName}
   Having its facility at: ${state.hospitalAddress}, ${state.hospitalCity}, ${state.hospitalState} - ${state.hospitalPin}
   (Hereinafter referred to as the "Hospital / Healthcare Provider", which expression shall include its medical directors, authorized officers, administrators, successors, and assigns)

--------------------------------------------------------------------------------
1. MEDICAL ADMISSION, TREATMENT SATISFACTION & VOLUNTARY DISCHARGE DECLARATION
--------------------------------------------------------------------------------
1.1 We, the undersigned Patient and Attendant/Co-Obligor, hereby solemnly confirm that the Patient was admitted to the Hospital on ${state.admissionDate} and was treated under the Department of ${state.treatingDepartment} until scheduled discharge on ${state.dischargeDate}.

1.2 We unequivocally confirm that the medical, surgical, diagnostic, pharmacological, and nursing care provided by the Hospital and its medical staff was delivered with utmost professional diligence, and we express complete clinical and institutional satisfaction with the treatment received.

1.3 CONSTITUTIONAL ARTICLE 21 VOLUNTARY RELEASE CLAUSE:
We explicitly acknowledge that the Hospital and its administration have at all times respected the personal liberty, dignity, and bodily freedom of the Patient under Article 21 of the Constitution of India. We categorically affirm that the Patient is being discharged freely, willingly, and unconditionally upon clinical recommendation. At no point in time has any medical detention, bodily restraint, physical confinement, or withholding of medical discharge summaries/prescriptions taken place. This financial undertaking is executed purely as a civil, commercial acknowledgment of accrued healthcare liabilities and is completely uncoupled from the physical exit of the Patient from the hospital premises.

--------------------------------------------------------------------------------
2. ITEMIZATION OF CHARGES & FINANCIAL ACKNOWLEDGMENT
--------------------------------------------------------------------------------
2.1 We have examined and verified the Final Itemized Inpatient Hospital Bill and agree to the following financial accounting:
   (a) Total Gross Hospital & Medical Care Charges: Rs. ${state.totalGrossBill.toLocaleString("en-IN")}/-
   (b) Less: Advance / In-Hospital Payments Cleared:  Rs. ${state.paidAmount.toLocaleString("en-IN")}/-
   (c) Less: Approved TPA / Insurance Settlement:      Rs. ${state.insuranceSettledAmount.toLocaleString("en-IN")}/-
   -----------------------------------------------------------------------------
   (d) NET UNPAID BALANCE CONCURRENTLY OUTSTANDING:    Rs. ${pendingBalance.toLocaleString("en-IN")}/-
   (Rupees ${numberToWords(pendingBalance)} Only)

2.2 We confirm that every line-item—including room rent, ICU monitoring, doctor consultations, OT procedural charges, surgical consumables, pharmacy items, laboratory investigations, and nursing services—has been thoroughly inspected, audited, and approved without any objection, dispute, or protest. We waive any claim of erroneous billing or billing dispute.

--------------------------------------------------------------------------------
3. UNCONDITIONAL PROMISSORY NOTE (SECTION 4, NEGOTIABLE INSTRUMENTS ACT, 1881)
--------------------------------------------------------------------------------
"We, ${state.patientName} (Patient) and ${state.attendantName} (Attendant Co-Obligor), jointly and severally PROMISE TO PAY on demand or on or before ${state.promisedPaymentDate}, to ${state.hospitalName} or its order, at ${state.hospitalCity}, the sum of Rs. ${pendingBalance.toLocaleString("en-IN")}/- (Rupees ${numberToWords(pendingBalance)} Only) for valuable clinical and inpatient medical services rendered, together with interest at the agreed rate of ${state.interestRatePercent}% per annum from ${state.dischargeDate} until full and final realization."

--------------------------------------------------------------------------------
4. JOINT AND SEVERAL CONTINUING GUARANTEE (SECTION 126, INDIAN CONTRACT ACT, 1872)
--------------------------------------------------------------------------------
4.1 The Attendant (${state.attendantName}) acknowledges having personal privity with the Patient and having personally requested admission, treatments, and medicines on behalf of the Patient.
4.2 The Attendant executes this undertaking as a PRIMARY CO-OBLIGOR AND SURETY/GUARANTOR under Section 126 of the Indian Contract Act, 1872. The liability of the Attendant is joint, several, co-extensive, and continuing with that of the Patient.
4.3 The Hospital shall be at full liberty to enforce payment directly against the Attendant without exhausting remedies against the Patient or seeking prior execution against the Patient.

--------------------------------------------------------------------------------
5. DEFAULT, REMEDIES & JURISDICTION
--------------------------------------------------------------------------------
5.1 In the event the Net Outstanding Balance of Rs. ${pendingBalance.toLocaleString("en-IN")}/- is not cleared on or before ${state.promisedPaymentDate}:
   (a) The entire outstanding balance shall attract delayed payment interest at ${state.interestRatePercent}% per annum under the Interest Act, 1978.
   (b) The Hospital shall be fully entitled to initiate summary suit recovery proceedings under Order XXXVII of the Code of Civil Procedure, 1908, or an ordinary commercial recovery suit, alongside claiming full legal costs.
   (c) If any cheque or digital mandate issued towards this debt is dishonoured, criminal proceedings under Section 138 of the Negotiable Instruments Act, 1881 or Section 25 of the Payment and Settlement Systems Act, 2007 shall be initiated immediately.
5.2 The civil courts having territorial jurisdiction in ${state.hospitalCity} alone shall have exclusive jurisdiction over all claims arising under this undertaking.

IN WITNESS WHEREOF, WE HAVE VOLUNTARILY SIGNED THIS UNDERTAKING ON THIS ${state.dischargeDate} WITHOUT ANY UNDUE INFLUENCE, COERCION, OR RESTRAINT.


________________________________________          ________________________________________
SIGNATURE OF PATIENT (PRIMARY OBLIGOR)            SIGNATURE OF ATTENDANT (CO-OBLIGOR / SURETY)
Name: ${state.patientName}                             Name: ${state.attendantName}
Aadhaar/Phone: ${state.patientContact}                 Aadhaar/ID: ${state.attendantIdProof}


WITNESS 1 (Hospital Billing Desk In-Charge):      WITNESS 2 (Attendant Relative / Friend):
Signature: ______________________________         Signature: ______________________________
Name: ___________________________________         Name: ___________________________________
Employee ID: ____________________________         Aadhaar / Contact: _______________________
`;
  }, [state, pendingBalance]);

  // Generate 15-Day Advocate Notice Text
  const legalNoticeText = useMemo(() => {
    return `REGISTERED SPEED POST WITH A.D. / CERTIFIED EMAIL / ADVOCATE LEGAL NOTICE
(Issued under Section 73 Indian Contract Act, 1872, Section 4 Negotiable Instruments Act, 1881 & Interest Act, 1978)

Ref. No.: ${state.legalNoticeRefNo}
Date: ${state.legalNoticeDate}

OFFICE OF:
${state.advocateName.toUpperCase()}
Advocate, Enrolment No.: ${state.advocateEnrolment}
${state.advocateOffice}

TO,
1. MR./MS. ${state.patientName.toUpperCase()} (PATIENT / PRIMARY DEBTOR)
   Resident of: ${state.patientAddress}
   Contact: ${state.patientContact}

2. MR./MS. ${state.attendantName.toUpperCase()} (ATTENDANT / CO-OBLIGOR & INDEPENDENT GUARANTOR)
   Relationship: ${state.attendantRelationship}
   Resident of: ${state.attendantAddress}
   Contact: ${state.attendantContact} | ID Proof: ${state.attendantIdProof}

SUBJECT: STATUTORY DEMAND LEGAL NOTICE FOR PAYMENT OF OUTSTANDING MEDICAL INPATIENT CHARGES OF RS. ${pendingBalance.toLocaleString("en-IN")}/- ALONG WITH INTEREST AT ${state.interestRatePercent}% P.A. TOWARDS IPD ADMISSION NO. ${state.ipdNo} UNDER BREACH OF VOLUNTARY UNDERTAKING DATED ${state.dischargeDate}.

SIR / MADAM,

Under instructions from and on behalf of my Client, ${state.hospitalName}, situated at ${state.hospitalAddress}, ${state.hospitalCity}, ${state.hospitalState} - ${state.hospitalPin} (hereinafter referred to as "my Client" or the "Hospital"), I hereby serve upon both of you this formal Statutory Demand Notice:

1. INPATIENT ADMISSION AND MEDICAL DISCHARGE:
That Addressee No. 1 (the Patient) was admitted to my Client's hospital on ${state.admissionDate} in the Department of ${state.treatingDepartment}, with Addressee No. 2 (the Attendant) executing admission requisitions as the attendant and personal guarantor. My Client's medical team successfully administered comprehensive inpatient care, diagnostic tests, surgeries, medications, and round-the-clock nursing until medical discharge on ${state.dischargeDate}.

2. UNCONDITIONAL VOLUNTARY DISCHARGE & BILL ACKNOWLEDGMENT:
That upon being recommended for discharge on ${state.dischargeDate}, both of you verified, audited, and unconditionally accepted the final itemized hospital invoice amounting to Rs. ${state.totalGrossBill.toLocaleString("en-IN")}/-. After adjusting in-hospital advances of Rs. ${state.paidAmount.toLocaleString("en-IN")}/- and insurance/TPA credits of Rs. ${state.insuranceSettledAmount.toLocaleString("en-IN")}/-, a net liquidated balance of Rs. ${pendingBalance.toLocaleString("en-IN")}/- remained payable.

3. EXECUTION OF NON-COERCIVE FINANCIAL UNDERTAKING & PROMISSORY NOTE:
That upon your earnest request stating temporary cash flow constraints, my Client, strictly respecting the constitutional liberty and bodily freedom of the Patient under Article 21, unconditionally released and discharged Addressee No. 1 on ${state.dischargeDate}. Concurrently, both of you executed a formal Voluntary Discharge Financial Undertaking containing a joint and several Promissory Note under Section 4 of the Negotiable Instruments Act, 1881 and an independent Co-Obligor Guarantee under Section 126 of the Indian Contract Act, 1872, promising to pay the outstanding balance of Rs. ${pendingBalance.toLocaleString("en-IN")}/- on or before ${state.promisedPaymentDate}.

4. WILFUL DEFAULT AND WRONGFUL LOSS:
That the promised payment date of ${state.promisedPaymentDate} has elapsed, yet despite repeated telephonic reminders and WhatsApp communications from my Client's billing desk, both of you have intentionally defaulted, failed, and neglected to clear the admitted balance. Your deliberate non-payment causes wrongful financial loss to my Client and amounts to bad-faith commercial default and breach of statutory contract.

5. SEVERAL AND JOINT LIABILITY OF ATTENDANT:
Take notice that Addressee No. 2 is jointly and severally liable as primary obligor and surety under Section 126 of the Indian Contract Act, 1872. My Client is not required to exhaust legal actions against Addressee No. 1 before attaching the bank accounts, salaries, or assets of Addressee No. 2.

6. FINAL STATUTORY DEMAND:
I, therefore, through this Legal Notice, call upon both of you jointly and severally to pay to my Client the sum of:
   (a) Principal Outstanding Medical Charges: Rs. ${pendingBalance.toLocaleString("en-IN")}/-
   (b) Interest @ ${state.interestRatePercent}% p.a. from ${state.dischargeDate} till payment date
   (c) Notice Drafting and Incidental Legal Costs: Rs. 5,000/-
within a peremptory period of 15 (FIFTEEN) DAYS from the date of receipt of this notice.

7. CONSEQUENCES OF NON-COMPLIANCE:
Please take note that if you fail to remit the aforesaid liquidated sum within the stipulated 15 days:
   (i) My Client shall file a Summary Suit under Order XXXVII of the Code of Civil Procedure, 1908 (or Commercial Recovery Suit) before the competent Civil Court at ${state.hospitalCity} for decreeing the entire debt along with pendente lite and future interest at 18% p.a. and costs;
   (ii) My Client reserves all rights to initiate civil attachment of movable/immovable assets and report default to credit assessment records;
   (iii) You shall be held exclusively liable for all costs, court fees, and advocate retainers incurred by my Client.

A copy of this notice is retained in my office for record, statutory filing, and production before the court of law.

Yours faithfully,

${state.advocateName}
Advocate, ${state.advocateEnrolment}
For and on behalf of ${state.hospitalName}
`;
  }, [state, pendingBalance]);

  const currentText = activeTab === "undertaking" ? undertakingText : legalNoticeText;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${activeTab === "undertaking" ? "Hospital Discharge Undertaking" : "Hospital Legal Recovery Notice"}</title>
            <style>
              body { font-family: 'Courier New', Courier, monospace; font-size: 13px; line-height: 1.5; padding: 25px; color: #000; }
              pre { white-space: pre-wrap; word-wrap: break-word; }
            </style>
          </head>
          <body>
            <pre>${currentText}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Workspace Header Strip */}
      <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-800">
        <div>
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 block mb-0.5">
            Advocate-Vetted RCM Interactive Workspace (P1 Archetype)
          </span>
          <p className="text-base sm:text-lg font-black tracking-tight text-white">
            2-in-1 Healthcare Desk: Discharge Undertaking + 15-Day Advocate Notice
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl border border-slate-700 self-start md:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("undertaking")}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "undertaking"
                ? "bg-[#DC2626] text-white shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            Template 1: Discharge Undertaking
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("legal_notice")}
            className={`px-3 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "legal_notice"
                ? "bg-[#DC2626] text-white shadow-sm"
                : "text-slate-300 hover:text-white hover:bg-slate-700/60"
            }`}
          >
            Template 2: 15-Day Legal Notice
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="bg-slate-50 border-b border-slate-200 px-5 sm:px-6 py-3">
        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
          Load Pre-Engineered Healthcare Admission Presets:
        </p>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPreset(p.patch)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span>{p.label}</span>
              <span className="text-[10px] font-normal text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                {p.badge}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Form Controls Column (5 cols) */}
        <div className="lg:col-span-5 p-5 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/50 space-y-4 max-h-[750px] overflow-y-auto">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-0.5">
              1. Hospital &amp; Billing Data
            </h3>
            <p className="text-[11px] text-slate-500">Facility credentials and location jurisdiction</p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Hospital / Clinic Name</label>
              <input
                type="text"
                value={state.hospitalName}
                onChange={(e) => handleInputChange("hospitalName", e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">City</label>
                <input
                  type="text"
                  value={state.hospitalCity}
                  onChange={(e) => handleInputChange("hospitalCity", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">State &amp; PIN</label>
                <input
                  type="text"
                  value={`${state.hospitalState} - ${state.hospitalPin}`}
                  onChange={(e) => {
                    const parts = e.target.value.split("-");
                    handleInputChange("hospitalState", parts[0]?.trim() || "");
                    if (parts[1]) handleInputChange("hospitalPin", parts[1]?.trim() || "");
                  }}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Treating Department</label>
              <input
                type="text"
                value={state.treatingDepartment}
                onChange={(e) => handleInputChange("treatingDepartment", e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div className="border-b border-slate-200 pt-2 pb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-0.5">
              2. Patient &amp; Attendant Co-Signatory
            </h3>
            <p className="text-[11px] text-slate-500">Attendant acts as co-guarantor under Contract Act s.126</p>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Patient Name</label>
                <input
                  type="text"
                  value={state.patientName}
                  onChange={(e) => handleInputChange("patientName", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">IPD / File No.</label>
                <input
                  type="text"
                  value={state.ipdNo}
                  onChange={(e) => handleInputChange("ipdNo", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Attendant Name (Guarantor)</label>
                <input
                  type="text"
                  value={state.attendantName}
                  onChange={(e) => handleInputChange("attendantName", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Relationship</label>
                <input
                  type="text"
                  value={state.attendantRelationship}
                  onChange={(e) => handleInputChange("attendantRelationship", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">Attendant ID Proof (Aadhaar / PAN)</label>
              <input
                type="text"
                value={state.attendantIdProof}
                onChange={(e) => handleInputChange("attendantIdProof", e.target.value)}
                className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
              />
            </div>
          </div>

          <div className="border-b border-slate-200 pt-2 pb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-0.5">
              3. Financial Ledger &amp; Due Date
            </h3>
            <p className="text-[11px] text-slate-500">Promissory note principal and agreed payment timeline</p>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Gross Bill (₹)</label>
                <input
                  type="number"
                  value={state.totalGrossBill}
                  onChange={(e) => handleInputChange("totalGrossBill", Number(e.target.value))}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Paid (₹)</label>
                <input
                  type="number"
                  value={state.paidAmount}
                  onChange={(e) => handleInputChange("paidAmount", Number(e.target.value))}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">TPA / Ins. (₹)</label>
                <input
                  type="number"
                  value={state.insuranceSettledAmount}
                  onChange={(e) => handleInputChange("insuranceSettledAmount", Number(e.target.value))}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
            </div>

            <div className="p-3 bg-red-50/70 border border-red-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                  Pending Balance at Discharge
                </span>
                <p className="text-sm font-black text-slate-900">
                  Rs. {pendingBalance.toLocaleString("en-IN")}/-
                </p>
              </div>
              <span className="text-xs font-bold text-red-700 bg-white px-2.5 py-1 rounded-lg border border-red-200 shadow-2xs">
                {state.interestRatePercent}% Interest Rate
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Promised Payment Date</label>
                <input
                  type="text"
                  value={state.promisedPaymentDate}
                  onChange={(e) => handleInputChange("promisedPaymentDate", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Discharge Date</label>
                <input
                  type="text"
                  value={state.dischargeDate}
                  onChange={(e) => handleInputChange("dischargeDate", e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#DC2626]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Live Document Preview Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col bg-slate-900 text-slate-100">
          {/* Action Toolbar */}
          <div className="flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-slate-300">
                {activeTab === "undertaking"
                  ? "Undertaking & Promissory Note (Bedside / Desk)"
                  : "15-Day Advocate Demand Notice"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-400">&check;</span>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <span>📋</span>
                    <span>Copy Text</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#DC2626] hover:bg-[#B91C1C] text-white transition-colors"
              >
                <span>🖨️</span>
                <span>Print Draft</span>
              </button>
            </div>
          </div>

          {/* Text Area / Code Display */}
          <div className="flex-1 p-5 sm:p-6 overflow-y-auto max-h-[660px] font-mono text-[11px] sm:text-xs leading-relaxed text-slate-200 bg-slate-900 selection:bg-red-700 selection:text-white">
            <pre className="whitespace-pre-wrap font-inherit break-words">{currentText}</pre>
          </div>

          {/* Footer Bar */}
          <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <span>
              Mandatory: Get signed on hospital letterhead with revenue stamp if executing physical promissory note.
            </span>
            <Link
              href="/user/new-recovery"
              className="text-red-400 hover:text-red-300 font-bold underline inline-flex items-center gap-1 shrink-0"
            >
              <span>Have Advocate Issue Notice</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper to convert small amounts to words
function numberToWords(amount: number): string {
  if (amount <= 0) return "Zero";
  const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function convertChunk(num: number): string {
    let str = "";
    if (num >= 100) {
      str += units[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }
    if (num >= 10 && num <= 19) {
      str += teens[num - 10] + " ";
    } else if (num >= 20) {
      str += tens[Math.floor(num / 10)] + " ";
      if (num % 10 > 0) str += units[num % 10] + " ";
    } else if (num > 0) {
      str += units[num] + " ";
    }
    return str.trim();
  }

  let crore = Math.floor(amount / 10000000);
  let remainder = amount % 10000000;
  let lakh = Math.floor(remainder / 100000);
  remainder = remainder % 100000;
  let thousand = Math.floor(remainder / 1000);
  let hundred = remainder % 1000;

  let words = "";
  if (crore > 0) words += convertChunk(crore) + " Crore ";
  if (lakh > 0) words += convertChunk(lakh) + " Lakh ";
  if (thousand > 0) words += convertChunk(thousand) + " Thousand ";
  if (hundred > 0) words += convertChunk(hundred) + " ";

  return words.trim();
}

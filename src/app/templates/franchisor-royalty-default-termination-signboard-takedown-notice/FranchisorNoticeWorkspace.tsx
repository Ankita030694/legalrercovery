"use client";

import React, { useMemo, useState } from "react";

type NoticeStage = "stage-1-cure" | "stage-2-termination";

interface FranchisorPreset {
  id: string;
  label: string;
  badge: string;
  franchisorName: string;
  franchisorGSTIN: string;
  franchisorAddress: string;
  franchisorEmail: string;
  brandName: string;
  trademarkRegNo: string;
  franchiseeEntity: string;
  franchiseeSignatory: string;
  franchiseeGSTIN: string;
  outletAddress: string;
  franchiseeEmail: string;
  agreementTitle: string;
  agreementDate: string;
  cureClauseRef: string;
  cureDays: number;
  royaltyArrears: number;
  adFundArrears: number;
  commissaryArrears: number;
  posBypassPenalty: number;
  interestRate: number;
  nachOrChequeRef: string;
  aggregatorIds: string;
  advocateName: string;
  advocateEnrolment: string;
  advocateOffice: string;
  noticeRef: string;
  noticeDate: string;
}

const PRESETS: FranchisorPreset[] = [
  {
    id: "qsr-royalty-pos-aggregator",
    label: "QSR / Cafe Chain (Royalty + MMG + Commissary + POS Bypass + Swiggy/Zomato)",
    badge: "QSR & Cloud Kitchen",
    franchisorName: "Brew & Crust Hospitality Private Limited",
    franchisorGSTIN: "27AABCB4821M1Z4",
    franchisorAddress: "Level 8, One International Center, Senapati Bapat Marg, Lower Parel, Mumbai - 400013",
    franchisorEmail: "legal@brewandcrust.in",
    brandName: "BREW & CRUST EXPRESS",
    trademarkRegNo: "TM Reg. No. 4189204 (Class 43 & Class 30)",
    franchiseeEntity: "Kaveri Foods & Beverages LLP",
    franchiseeSignatory: "Mr. Rohan Deshmukh (Designated Partner) & Ms. Sneha Deshmukh (Designated Partner)",
    franchiseeGSTIN: "29AAKFK8812P1Z2",
    outletAddress: "Shop No. 4 & 5, Ground Floor, 80 Feet Road, Koramangala 4th Block, Bengaluru - 560034",
    franchiseeEmail: "rohan@kaverifoods.in, accounts@kaverifoods.in",
    agreementTitle: "Master Unit Franchise & Commissary Supply Agreement",
    agreementDate: "12 March 2025",
    cureClauseRef: "Clauses 7.2, 9.4, 14.1 & 18.2",
    cureDays: 15,
    royaltyArrears: 420000,
    adFundArrears: 95000,
    commissaryArrears: 310000,
    posBypassPenalty: 175000,
    interestRate: 18,
    nachOrChequeRef: "e-NACH UMRN HDFC701920000481290 (Returned: 'Insufficient Funds' on 05 Nov 2026)",
    aggregatorIds: "Zomato ResID: 19847201 | Swiggy ID: 558291 | Google Business Profile: Brew & Crust Koramangala",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2814/2014",
    advocateOffice: "AMA Legal Chambers, 2nd Floor, Jangpura Extension, New Delhi - 110014",
    noticeRef: "LR/FRAN/2026/280-A",
    noticeDate: "20 November 2026",
  },
  {
    id: "salon-preschool-signboard",
    label: "Salon / Preschool Brand (Royalty + Kit Dues + 48-Hr Signboard De-Branding)",
    badge: "Salon / Preschool",
    franchisorName: "Lumina Wellness & Aesthetics India Private Limited",
    franchisorGSTIN: "07AAACL9102R1Z9",
    franchisorAddress: "Plot 18, Institutional Area, Sector 44, Gurugram, Haryana - 122003",
    franchisorEmail: "compliance@luminawellness.in",
    brandName: "LUMINA STUDIO & ACADEMY",
    trademarkRegNo: "TM Reg. No. 3920145 (Class 44 & Class 41)",
    franchiseeEntity: "Shreeji Glamour Enterprises (Proprietorship)",
    franchiseeSignatory: "Ms. Kavita Patel (Sole Proprietor)",
    franchiseeGSTIN: "24ABCPP7712L1Z6",
    outletAddress: "1st Floor, Titanium Square, Thaltej Cross Road, SG Highway, Ahmedabad - 380054",
    franchiseeEmail: "kavita.patel@shreejistudio.in",
    agreementTitle: "Franchise & Brand License Agreement (FOFO Model)",
    agreementDate: "04 August 2024",
    cureClauseRef: "Clauses 6.1, 11.3 & 16.5",
    cureDays: 15,
    royaltyArrears: 280000,
    adFundArrears: 60000,
    commissaryArrears: 145000,
    posBypassPenalty: 100000,
    interestRate: 18,
    nachOrChequeRef: "Security Cheque No. 004192 dated 01 Nov 2026 drawn on ICICI Bank (Dishonoured: 'Payment Stopped')",
    aggregatorIds: "Google Business Profile: Lumina Studio Thaltej | Instagram: @luminastudio_ahmedabad | Justdial Listing",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2814/2014",
    advocateOffice: "AMA Legal Chambers, 2nd Floor, Jangpura Extension, New Delhi - 110014",
    noticeRef: "LR/FRAN/2026/280-B",
    noticeDate: "20 November 2026",
  },
  {
    id: "ev-oem-dealership-takedown",
    label: "EV 2W/3W & Auto Dealership (Dealer Credit + Spares + Showroom Fascia Removal)",
    badge: "EV / Auto OEM",
    franchisorName: "VoltDrive Mobility Systems Private Limited",
    franchisorGSTIN: "33AAACV7120K1Z1",
    franchisorAddress: "SIPCO Industrial Park, Phase II, Hosur, Tamil Nadu - 635109",
    franchisorEmail: "channelfinance@voltdrivemobility.in",
    brandName: "VOLTDRIVE ELECTRIC",
    trademarkRegNo: "TM Reg. No. 4829103 (Class 12 & Class 37)",
    franchiseeEntity: "Apex Green Motors Private Limited",
    franchiseeSignatory: "Mr. Arvind Kumar Verma (Managing Director)",
    franchiseeGSTIN: "09AABCA5512N1Z8",
    outletAddress: "Showroom No. 12, Gomti Nagar Extension, Lucknow, Uttar Pradesh - 226010",
    franchiseeEmail: "arvind@apexgreenmotors.in, finance@apexgreenmotors.in",
    agreementTitle: "Authorized EV Dealership, DMS & Spare-Parts Credit Agreement",
    agreementDate: "19 January 2025",
    cureClauseRef: "Clauses 8.4, 12.1 & 19.3",
    cureDays: 15,
    royaltyArrears: 0,
    adFundArrears: 120000,
    commissaryArrears: 1850000,
    posBypassPenalty: 250000,
    interestRate: 24,
    nachOrChequeRef: "e-NACH UMRN SBIN000918273645 (Returned: 'Balance Insufficient') + BG No. 019283 Expired",
    aggregatorIds: "Google Maps: VoltDrive Lucknow Showroom | BikeDekho / CarDekho Dealer Portal | Vahan Dealer Code UP32-VD09",
    advocateName: "Anuj Anand Malik",
    advocateEnrolment: "D/2814/2014",
    advocateOffice: "AMA Legal Chambers, 2nd Floor, Jangpura Extension, New Delhi - 110014",
    noticeRef: "LR/FRAN/2026/280-C",
    noticeDate: "20 November 2026",
  },
];

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export default function FranchisorNoticeWorkspace() {
  const [activeStage, setActiveStage] = useState<NoticeStage>("stage-1-cure");
  const [activePresetId, setActivePresetId] = useState<string>(PRESETS[0].id);
  const [formData, setFormData] = useState<FranchisorPreset>(PRESETS[0]);
  const [copiedMode, setCopiedMode] = useState<"plain" | "markdown" | null>(null);

  const handlePresetChange = (presetId: string) => {
    const selected = PRESETS.find((p) => p.id === presetId);
    if (selected) {
      setActivePresetId(presetId);
      setFormData({ ...selected });
    }
  };

  const handleFieldChange = (field: keyof FranchisorPreset, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const totalPrincipal = useMemo(() => {
    return (
      (Number(formData.royaltyArrears) || 0) +
      (Number(formData.adFundArrears) || 0) +
      (Number(formData.commissaryArrears) || 0) +
      (Number(formData.posBypassPenalty) || 0)
    );
  }, [
    formData.royaltyArrears,
    formData.adFundArrears,
    formData.commissaryArrears,
    formData.posBypassPenalty,
  ]);

  const noticeText = useMemo(() => {
    const totalFormatted = formatINR(totalPrincipal);

    if (activeStage === "stage-1-cure") {
      return `ADVOCATE LEGAL NOTICE — STAGE 1: STATUTORY ${formData.cureDays}-DAY CURE & PAYMENT DEMAND NOTICE
[Read with Commercial Courts Act, 2015 s.2(1)(c)(ix), PSS Act, 2007 s.25 & NI Act, 1881 s.138]

Ref. No.: ${formData.noticeRef}
Date: ${formData.noticeDate}
Mode of Service: Speed Post RPAD | Registered Email | WhatsApp Business (BSA 2023 s.63 Logged)

TO,
1. ${formData.franchiseeEntity} (GSTIN: ${formData.franchiseeGSTIN})
2. ${formData.franchiseeSignatory}
Outlet / Store Address: ${formData.outletAddress}
Email: ${formData.franchiseeEmail}

SUBJECT: ${formData.cureDays}-DAY STATUTORY NOTICE TO CURE MATERIAL BREACHES, CLEAR OVERDUE ROYALTY / MMG / SUPPLY ARREARS OF ${totalFormatted}, AND RECTIFY POS UNDER-REPORTING UNDER ${formData.agreementTitle.toUpperCase()} DATED ${formData.agreementDate.toUpperCase()}.

Dear Sir/Madam,

Under instructions from and on behalf of my client, ${formData.franchisorName} (GSTIN: ${formData.franchisorGSTIN}), having its corporate office at ${formData.franchisorAddress} (hereinafter "the Franchisor / Brand Licensor"), owner of the registered trademark "${formData.brandName}" (${formData.trademarkRegNo}), I hereby serve you with this formal Stage 1 Cure Notice:

1. FACTUAL MATRIX & COMMERCIAL RELATIONSHIP:
That pursuant to the ${formData.agreementTitle} dated ${formData.agreementDate}, you were granted a limited, non-exclusive, revocable license to operate an outlet under the trademark "${formData.brandName}" at ${formData.outletAddress}, strictly subject to timely remittance of monthly Royalties / Minimum Monthly Guarantee (MMG), National Ad-Fund contributions, central commissary / spare-parts supply invoices, and 100% centralized POS billing compliance.

2. ITEMIZED MONETARY DEFAULT & AUDIT FINDINGS:
That in gross breach of ${formData.cureClauseRef} of the Agreement, you have persistently defaulted on your payment and reporting obligations. As per the audited Franchisor ledger as on ${formData.noticeDate}, the following liquidated commercial sums are overdue and payable by you:
   (a) Unpaid Royalty / Minimum Monthly Guarantee (MMG) Arrears: ${formatINR(formData.royaltyArrears)}
   (b) Unpaid Marketing / National Ad-Fund Contributions: ${formatINR(formData.adFundArrears)}
   (c) Unpaid Commissary / Kit / Spare-Parts Supply Invoices: ${formatINR(formData.commissaryArrears)}
   (d) Liquidated Audit Penalty for POS-Bypass / Off-POS Cash & UPI Skimming: ${formatINR(formData.posBypassPenalty)}
   ------------------------------------------------------------------
   TOTAL PRINCIPAL COMMERCIAL ARREARS DUE: ${totalFormatted}
   (Plus contractual delayed-payment interest @ ${formData.interestRate}% p.a. until realization)

3. DISHONOUR OF PAYMENT MANDATE / INSTRUMENT:
Further, your payment instrument / mandate (${formData.nachOrChequeRef}) has returned unpaid/dishonoured, attracting statutory liability under Section 25 of the Payment and Settlement Systems Act, 2007 and/or Section 138 of the Negotiable Instruments Act, 1881.

4. MANDATORY ${formData.cureDays}-DAY CURE DEMAND:
You are hereby called upon to cure all defaults within ${formData.cureDays} days from receipt of this Notice by:
   (i) Remitting the entire overdue sum of ${totalFormatted} along with accrued interest @ ${formData.interestRate}% p.a. via RTGS/NEFT to the Franchisor's designated account;
   (ii) Reconciling all off-POS / personal UPI transactions with certified GST GSTR-1 / bank statements; and
   (iii) Restoring active e-NACH mandate / compliant security instruments.

5. CONSEQUENCE OF NON-COMPLIANCE (AUTOMATIC ESCALATION TO STAGE 2 TERMINATION):
Take notice that failing full compliance within ${formData.cureDays} days, the Franchise Agreement shall stand terminated without further reference, triggering immediate revocation of your trademark license under Section 29 of the Trade Marks Act, 1999, mandatory 48-hour signboard de-branding, takedown notices to ${formData.aggregatorIds}, and institution of a Commercial Suit under Section 2(1)(c)(ix)/(xvii) of the Commercial Courts Act, 2015 and/or Section 9 Arbitration urgent injunction at your sole risk and cost.

Yours faithfully,
${formData.advocateName}
Advocate (Enrolment No. ${formData.advocateEnrolment})
${formData.advocateOffice}`;
    }

    return `ADVOCATE LEGAL NOTICE — STAGE 2: NOTICE OF TERMINATION, 48-HOUR SIGNBOARD DE-BRANDING & AGGREGATOR IP TAKEDOWN
[Trade Marks Act, 1999 ss.29 & 135 | Commercial Courts Act, 2015 s.2(1)(c)(xvii) & s.12A Urgent Relief | IT Rules, 2021 Rule 3(1)(d)]

Ref. No.: ${formData.noticeRef}-TERM
Date: ${formData.noticeDate}
Mode of Service: Speed Post RPAD | Registered Email | WhatsApp | Store-Door Affixation (BSA 2023 s.63 Logged)

TO,
1. ${formData.franchiseeEntity} (GSTIN: ${formData.franchiseeGSTIN})
2. ${formData.franchiseeSignatory}
Outlet / Store Address: ${formData.outletAddress}
Email: ${formData.franchiseeEmail}

COPY TO (PLATFORM GRIEVANCE & IP TAKEDOWN DESK):
Legal / IP Grievance Officers — ${formData.aggregatorIds}

SUBJECT: FORMAL NOTICE OF TERMINATION OF FRANCHISE AGREEMENT, REVOCATION OF TRADEMARK LICENSE, 48-HOUR SIGNBOARD & BRANDING REMOVAL, AND AGGREGATOR DELISTING DEMAND.

Dear Sir/Madam,

In continuation of our Stage 1 Cure Notice Ref. No. ${formData.noticeRef}, under instructions from my client, ${formData.franchisorName} (owner of "${formData.brandName}", ${formData.trademarkRegNo}), I hereby serve you with this peremptory Stage 2 Termination & IP Cease-and-Desist Notice:

1. TERMINATION OF FRANCHISE & REVOCATION OF BRAND LICENSE:
Despite expiry of the mandatory ${formData.cureDays}-day cure period under ${formData.cureClauseRef} of the ${formData.agreementTitle} dated ${formData.agreementDate}, you have failed to clear the overdue commercial debt of ${totalFormatted} and cure your POS/supply breaches. Accordingly, the Agreement stands TERMINATED with immediate effect, and all rights, licenses, and permissions to use the trademark "${formData.brandName}", trade dress, menu/service IP, SOPs, and DMS/POS portals stand irrevocably REVOKED.

2. MANDATORY 48-HOUR SIGNBOARD DE-BRANDING & ASSET RETURN:
Under Sections 29 and 135 of the Trade Marks Act, 1999, any continued display of "${formData.brandName}" signage constitutes actionable trademark infringement and passing off. You are hereby directed within FORTY-EIGHT (48) HOURS of receipt of this Notice to:
   (a) Physically dismantle and remove all external glow-signboards, fascia, interior branding, staff uniforms, packaging, and digital displays bearing "${formData.brandName}";
   (b) Cease operating any deceptively similar look-alike outlet at ${formData.outletAddress};
   (c) Surrender all Franchisor-owned POS hardware, proprietary kits/spares, and customer CRM data; and
   (d) Submit time-stamped geo-tagged photographs confirming complete de-branding to ${formData.franchisorEmail}.

3. AGGREGATOR & DIGITAL LISTING TAKEDOWN (IT RULES, 2021 RULE 3(1)(d)):
Take notice that this Notice is simultaneously being marked to the Grievance & IP Enforcement teams of ${formData.aggregatorIds} under Rule 3(1)(d) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, demanding delisting/suspension of your unauthorized store listings within 36 hours of intimation.

4. ACCELERATED RECOVERY OF ARREARS & HOLDOVER DAMAGES:
Without prejudice to the above, you remain liable to pay the liquidated principal sum of ${totalFormatted} plus interest @ ${formData.interestRate}% p.a., along with unliquidated post-termination holdover damages and Section 135 account of profits.

5. URGENT COMMERCIAL COURT / SECTION 9 INJUNCTION WARNING:
If you fail to de-brand within 48 hours, my client shall immediately move the Commercial Court / High Court for an ex-parte ad-interim injunction and Court Receiver appointment under Section 9 of the Arbitration and Conciliation Act, 1996 / Order XXXIX Rules 1 & 2 CPC (invoking the Supreme Court urgent-relief exemption from Section 12A mediation in Patil Automation Pvt. Ltd. v. Rakheja Engineers Pvt. Ltd., (2022) 10 SCC 1), alongside criminal prosecution under Section 25 PSS Act / Section 138 NI Act.

Yours faithfully,
${formData.advocateName}
Advocate (Enrolment No. ${formData.advocateEnrolment})
${formData.advocateOffice}`;
  }, [activeStage, formData, totalPrincipal]);

  const handleCopy = async (mode: "plain" | "markdown") => {
    const content =
      mode === "markdown"
        ? `\`\`\`text\n${noticeText}\n\`\`\``
        : noticeText;
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMode(mode);
      setTimeout(() => setCopiedMode(null), 2200);
    } catch {
      // Fallback ignored if clipboard permission denied
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Top Bar: Stage Switcher & Presets */}
      <div className="bg-slate-900 text-white p-4 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-red-400 block">
              Interactive 2-Stage Notice Builder
            </span>
            <p className="text-base sm:text-lg font-bold text-white">
              Customize Stage 1 Cure or Stage 2 Termination &amp; Takedown Draft
            </p>
          </div>
          <div className="inline-flex rounded-xl bg-slate-800 p-1 border border-slate-700">
            <button
              type="button"
              onClick={() => setActiveStage("stage-1-cure")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeStage === "stage-1-cure"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Stage 1: 15-Day Cure
            </button>
            <button
              type="button"
              onClick={() => setActiveStage("stage-2-termination")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeStage === "stage-2-termination"
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Stage 2: Termination &amp; Takedown
            </button>
          </div>
        </div>

        {/* Presets */}
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => {
            const isSelected = activePresetId === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetChange(preset.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all text-left ${
                  isSelected
                    ? "bg-red-950/80 border-red-500 text-white"
                    : "bg-slate-800/70 border-slate-700 text-slate-300 hover:border-slate-500"
                }`}
              >
                {preset.badge}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split: Form Inputs + Live Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-slate-200">
        {/* Left: Editable Fields */}
        <div className="xl:col-span-5 p-4 sm:p-6 space-y-4 bg-slate-50/70">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              1. Franchisor &amp; Brand Details
            </span>
            <span className="text-[11px] font-semibold text-[#DC2626]">
              Total Claim: {formatINR(totalPrincipal)}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Franchisor Legal Name
              </label>
              <input
                type="text"
                value={formData.franchisorName}
                onChange={(e) => handleFieldChange("franchisorName", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Registered Brand / TM No.
              </label>
              <input
                type="text"
                value={`${formData.brandName} (${formData.trademarkRegNo})`}
                onChange={(e) => handleFieldChange("brandName", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Franchisee / Dealer Entity
              </label>
              <input
                type="text"
                value={formData.franchiseeEntity}
                onChange={(e) => handleFieldChange("franchiseeEntity", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Directors / Guarantors
              </label>
              <input
                type="text"
                value={formData.franchiseeSignatory}
                onChange={(e) => handleFieldChange("franchiseeSignatory", e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Store / Outlet Address
            </label>
            <input
              type="text"
              value={formData.outletAddress}
              onChange={(e) => handleFieldChange("outletAddress", e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
            />
          </div>

          <div className="border-t border-slate-200 pt-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              2. Ledger Arrears Breakdown (₹)
            </span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Royalty / MMG (₹)
                </label>
                <input
                  type="number"
                  value={formData.royaltyArrears}
                  onChange={(e) => handleFieldChange("royaltyArrears", Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  National Ad-Fund (₹)
                </label>
                <input
                  type="number"
                  value={formData.adFundArrears}
                  onChange={(e) => handleFieldChange("adFundArrears", Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  Commissary / Spares (₹)
                </label>
                <input
                  type="number"
                  value={formData.commissaryArrears}
                  onChange={(e) => handleFieldChange("commissaryArrears", Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  POS-Bypass Penalty (₹)
                </label>
                <input
                  type="number"
                  value={formData.posBypassPenalty}
                  onChange={(e) => handleFieldChange("posBypassPenalty", Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Cure Period (Days)
              </label>
              <input
                type="number"
                value={formData.cureDays}
                onChange={(e) => handleFieldChange("cureDays", Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                value={formData.interestRate}
                onChange={(e) => handleFieldChange("interestRate", Number(e.target.value))}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Aggregator &amp; Digital Listing IDs (Zomato / Swiggy / Google Maps)
            </label>
            <input
              type="text"
              value={formData.aggregatorIds}
              onChange={(e) => handleFieldChange("aggregatorIds", e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Dishonoured e-NACH UMRN / Security Cheque Ref
            </label>
            <input
              type="text"
              value={formData.nachOrChequeRef}
              onChange={(e) => handleFieldChange("nachOrChequeRef", e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#DC2626]"
            />
          </div>
        </div>

        {/* Right: Live Statutory Notice Preview */}
        <div className="xl:col-span-7 p-4 sm:p-6 flex flex-col justify-between bg-white">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                Live Statutory Draft Preview
              </span>
              <span className="text-[11px] text-slate-500">
                {activeStage === "stage-1-cure"
                  ? "Stage 1: 15-Day Royalty, MMG & Commissary Cure Notice"
                  : "Stage 2: Termination, 48-Hr De-Branding & Aggregator Delisting"}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCopy("plain")}
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold transition-colors"
              >
                {copiedMode === "plain" ? "Copied Notice!" : "Copy Notice"}
              </button>
              <button
                type="button"
                onClick={() => handleCopy("markdown")}
                className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
              >
                {copiedMode === "markdown" ? "Copied MD!" : "Copy Markdown"}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                Print / Save PDF
              </button>
            </div>
          </div>

          <pre className="whitespace-pre-wrap font-mono text-[11px] sm:text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 leading-relaxed max-h-[540px] overflow-y-auto">
            {noticeText}
          </pre>
        </div>
      </div>
    </div>
  );
}

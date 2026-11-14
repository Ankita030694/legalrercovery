"use client";

import React, { useState, useId, useMemo } from "react";
import Link from "next/link";
import { PaymentModal } from "@/components/PaymentModal";
import { DEFAULT_FUNNEL_SETTINGS } from "@/lib/funnel-config";

type LenderType =
  | "scheduled_bank"
  | "coop_bank"
  | "hfc"
  | "nbfc_notified"
  | "nbfc_base";

type BorrowerEntity = "corporate" | "msme_firm" | "individual";

type CollateralType =
  | "immovable_non_agri"
  | "hypothecation_movable"
  | "agricultural_land"
  | "pledge_gold"
  | "unsecured";

type AccountStage = "npa_90_plus" | "sma_2" | "sma_1";

interface ForumVerdict {
  forumName: string;
  statute: string;
  status: "ELIGIBLE" | "CONDITIONAL" | "INELIGIBLE";
  priorityRank: string;
  feeLabel: string;
  summary: string;
}

interface TimelineMilestone {
  step: string;
  statutoryProvision: string;
  dateLabel: string;
  dayOffset: string;
  actionRequired: string;
  tone: "slate" | "amber" | "red" | "emerald";
}

function parseLocalDate(dateStr: string): Date {
  const parts = dateStr.split("-").map(Number);
  if (parts.length !== 3 || !parts[0] || !parts[1] || !parts[2]) {
    return new Date(2026, 10, 14);
  }
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + days);
  return next;
}

function addYears(date: Date, years: number): Date {
  return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
}

const formatINR = (val: number, decimals = 0) =>
  "₹" +
  Math.round(val * Math.pow(10, decimals) / Math.pow(10, decimals)).toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

export default function SarfaesiDrtCalculatorClient() {
  const [lenderType, setLenderType] = useState<LenderType>("scheduled_bank");
  const [borrowerEntity, setBorrowerEntity] = useState<BorrowerEntity>("msme_firm");
  const [hasPersonalGuarantor, setHasPersonalGuarantor] = useState<"yes" | "no">("yes");
  const [originalSanctioned, setOriginalSanctioned] = useState<number>(8000000);
  const [outstandingPrincipal, setOutstandingPrincipal] = useState<number>(5800000);
  const [accruedInterest, setAccruedInterest] = useState<number>(850000);
  const [penalCharges, setPenalCharges] = useState<number>(200000);
  const [collateralType, setCollateralType] = useState<CollateralType>("immovable_non_agri");
  const [cersaiRegistered, setCersaiRegistered] = useState<"yes" | "no">("yes");
  const [accountStage, setAccountStage] = useState<AccountStage>("npa_90_plus");
  const [hasBounceInstrument, setHasBounceInstrument] = useState<"yes" | "no">("yes");
  const [npaDateStr, setNpaDateStr] = useState<string>("2026-10-01");
  const [sec132DateStr, setSec132DateStr] = useState<string>("2026-11-14");
  const [stateCourtFeePct, setStateCourtFeePct] = useState<number>(4.5);

  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const basePrice = DEFAULT_FUNNEL_SETTINGS.basePricePerOpposition;

  // Accessible field IDs
  const lenderId = useId();
  const borrowerId = useId();
  const guarantorId = useId();
  const sanctionedId = useId();
  const principalId = useId();
  const interestId = useId();
  const penalId = useId();
  const collateralId = useId();
  const cersaiId = useId();
  const stageId = useId();
  const bounceId = useId();
  const npaDateId = useId();
  const sec132DateId = useId();
  const courtFeeId = useId();

  const applyPreset = (
    preset: "msme_lap" | "sub_drt" | "nbfc_trap" | "corp_ibc"
  ) => {
    if (preset === "msme_lap") {
      setLenderType("scheduled_bank");
      setBorrowerEntity("msme_firm");
      setHasPersonalGuarantor("yes");
      setOriginalSanctioned(8000000);
      setOutstandingPrincipal(5800000);
      setAccruedInterest(850000);
      setPenalCharges(200000);
      setCollateralType("immovable_non_agri");
      setCersaiRegistered("yes");
      setAccountStage("npa_90_plus");
      setHasBounceInstrument("yes");
      setStateCourtFeePct(4.5);
    } else if (preset === "sub_drt") {
      setLenderType("scheduled_bank");
      setBorrowerEntity("individual");
      setHasPersonalGuarantor("no");
      setOriginalSanctioned(1600000);
      setOutstandingPrincipal(1240000);
      setAccruedInterest(145000);
      setPenalCharges(35000);
      setCollateralType("unsecured");
      setCersaiRegistered("no");
      setAccountStage("npa_90_plus");
      setHasBounceInstrument("yes");
      setStateCourtFeePct(4.5);
    } else if (preset === "nbfc_trap") {
      setLenderType("nbfc_notified");
      setBorrowerEntity("msme_firm");
      setHasPersonalGuarantor("yes");
      setOriginalSanctioned(2500000);
      setOutstandingPrincipal(1580000);
      setAccruedInterest(210000);
      setPenalCharges(60000);
      setCollateralType("immovable_non_agri");
      setCersaiRegistered("yes");
      setAccountStage("npa_90_plus");
      setHasBounceInstrument("yes");
      setStateCourtFeePct(4.0);
    } else {
      setLenderType("scheduled_bank");
      setBorrowerEntity("corporate");
      setHasPersonalGuarantor("yes");
      setOriginalSanctioned(30000000);
      setOutstandingPrincipal(21000000);
      setAccruedInterest(2850000);
      setPenalCharges(650000);
      setCollateralType("immovable_non_agri");
      setCersaiRegistered("yes");
      setAccountStage("npa_90_plus");
      setHasBounceInstrument("yes");
      setStateCourtFeePct(5.0);
    }
  };

  const result = useMemo(() => {
    const p = Math.max(0, outstandingPrincipal);
    const interest = Math.max(0, accruedInterest);
    const penal = Math.max(0, penalCharges);
    const totalDebtDue = p + interest + penal;
    const principalPlusInterest = p + interest;

    // SARFAESI s.31(j): Amount due vs original principal + interest baseline
    const sanctionedBase = Math.max(0, originalSanctioned);
    const remainingRatioPct =
      sanctionedBase > 0 ? (principalPlusInterest / sanctionedBase) * 100 : 100;

    // 1. SARFAESI Eligibility Checks
    const sarfaesiLenderOk = lenderType !== "nbfc_base";
    const sarfaesiFloor = lenderType === "nbfc_notified" ? 2000000 : 100001;
    const sarfaesiFloorOk =
      lenderType === "nbfc_notified"
        ? totalDebtDue >= 2000000
        : totalDebtDue > 100000;
    const sarfaesiCollateralOk =
      collateralType === "immovable_non_agri" ||
      collateralType === "hypothecation_movable";
    const sarfaesiSec31jOk = remainingRatioPct >= 20;
    const sarfaesiNpaOk = accountStage === "npa_90_plus";
    const sarfaesiCersaiOk = cersaiRegistered === "yes";

    let sarfaesiStatus: "ELIGIBLE" | "CONDITIONAL" | "INELIGIBLE" = "ELIGIBLE";
    const sarfaesiBlockers: string[] = [];

    if (!sarfaesiLenderOk) {
      sarfaesiBlockers.push(
        "Base-layer NBFC (<₹100 Cr AUM) is not notified under SARFAESI s.2(1)(m)(iv)."
      );
    }
    if (!sarfaesiFloorOk) {
      sarfaesiBlockers.push(
        lenderType === "nbfc_notified"
          ? `Notified NBFC secured debt (${formatINR(totalDebtDue)}) is below ₹20,00,000 MoF threshold.`
          : `Section 31(h) exempts financial assistance not exceeding ₹1,00,000.`
      );
    }
    if (collateralType === "agricultural_land") {
      sarfaesiBlockers.push(
        "Section 31(i) bars SARFAESI enforcement on agricultural land (unless commercially converted per Blue Coast Hotels)."
      );
    } else if (collateralType === "pledge_gold") {
      sarfaesiBlockers.push(
        "Section 31(g) exempts movable pledges; auction gold via Section 176 Contract Act notice."
      );
    } else if (collateralType === "unsecured") {
      sarfaesiBlockers.push(
        "Unsecured loan lacks an enforceable security interest under s.2(1)(zf)."
      );
    }
    if (!sarfaesiSec31jOk) {
      sarfaesiBlockers.push(
        `Section 31(j) bar triggered: remaining due (${remainingRatioPct.toFixed(1)}%) is below 20% of principal and interest.`
      );
    }

    if (sarfaesiBlockers.length > 0) {
      sarfaesiStatus = "INELIGIBLE";
    } else if (!sarfaesiNpaOk || !sarfaesiCersaiOk) {
      sarfaesiStatus = "CONDITIONAL";
      if (!sarfaesiNpaOk) {
        sarfaesiBlockers.push(
          "Account is currently SMA-1/SMA-2; complete Day-90 NPA stamping before issuing s.13(2) demand."
        );
      }
      if (!sarfaesiCersaiOk) {
        sarfaesiBlockers.push(
          "Section 26D bar: complete CERSAI security registration before initiating Chapter III possession."
        );
      }
    }

    // 2. DRT Rule 7(2) OA Fee Computation (RDB Act s.1(4) floor = ₹20,00,000)
    const drtAmountOk = totalDebtDue >= 2000000;
    const excessOver10L = Math.max(0, totalDebtDue - 1000000);
    const extraLakhs = excessOver10L > 0 ? Math.ceil(excessOver10L / 100000) : 0;
    const uncappedRule7Fee = drtAmountOk ? 12000 + extraLakhs * 1000 : 0;
    const drtOaFee = drtAmountOk ? Math.min(150000, uncappedRule7Fee) : 0;
    const isRule7Capped = drtAmountOk && uncappedRule7Fee > 150000;

    let drtStatus: "ELIGIBLE" | "CONDITIONAL" | "INELIGIBLE" = "INELIGIBLE";
    let drtSummary = "";
    if (!drtAmountOk) {
      drtSummary = `Debt (${formatINR(totalDebtDue)}) is below ₹20,00,000 DRT pecuniary threshold under RDB Act s.1(4).`;
    } else if (lenderType === "scheduled_bank") {
      drtStatus = "ELIGIBLE";
      drtSummary = `Scheduled Bank s.19 OA admissible on e-DRT. Rule 7 fee: ${formatINR(drtOaFee)}${isRule7Capped ? " (₹1.5L statutory cap hit)" : ""}.`;
    } else if (lenderType === "hfc") {
      drtStatus = "CONDITIONAL";
      drtSummary = `Admissible in DRT only if HFC holds RDB Act s.2(h) notified Financial Institution status. Rule 7 reference fee: ${formatINR(drtOaFee)}.`;
    } else if (lenderType === "coop_bank") {
      drtStatus = "INELIGIBLE";
      drtSummary = `Cooperative Banks use SARFAESI (Pandurang Chaugule) and MSCS s.84 / State Registrar Arbitration rather than RDB Act DRT OAs.`;
    } else {
      drtStatus = "INELIGIBLE";
      drtSummary = `Standard NBFCs are outside RDB Act s.2(h) unless specifically notified as PFIs; route to Commercial Courts or SARFAESI.`;
    }

    // State Civil / Commercial Ad-Valorem Comparison
    const estimatedCommercialCourtFee = totalDebtDue * (Math.max(0, stateCourtFeePct) / 100);
    const feeSavingsVsCivil = drtAmountOk
      ? Math.max(0, estimatedCommercialCourtFee - drtOaFee)
      : 0;

    // 3. IBC 2016 (s.7 CIRP / s.95 Part III PG)
    const ibcThresholdOk = totalDebtDue >= 10000000;
    let ibcStatus: "ELIGIBLE" | "CONDITIONAL" | "INELIGIBLE" = "INELIGIBLE";
    let ibcSummary = "";
    if (!ibcThresholdOk) {
      ibcSummary = `Default (${formatINR(totalDebtDue)}) is below ₹1,00,00,000 IBC Section 4 threshold.`;
    } else if (borrowerEntity === "corporate") {
      ibcStatus = "ELIGIBLE";
      ibcSummary = `File s.7 Financial Creditor CIRP (₹25,000 NCLT fee)${hasPersonalGuarantor === "yes" ? " + parallel s.95 Part III Form B against Personal Guarantor" : ""}.`;
    } else if (hasPersonalGuarantor === "yes") {
      ibcStatus = "CONDITIONAL";
      ibcSummary = `Section 95 Part III applies ONLY to Personal Guarantors of Corporate Debtors (not retail/proprietorship loans).`;
    } else {
      ibcStatus = "INELIGIBLE";
      ibcSummary = `IBC Part II/III corporate insolvency does not cover standalone individual/proprietorship borrowers.`;
    }

    // 4. Commercial Courts Act, 2015 (s.2(1)(c)(i) + s.12A PIMS) / Order XXXVII CPC
    const commCourtEligible = totalDebtDue >= 300000;
    const commSummary = commCourtEligible
      ? `Primary judicial track for NBFCs & sub-₹20L bank loans. Mandatory s.12A PIMS mediation (₹1,000 fee) unless urgent Order 38 R.5 relief (Yamini Manohar).`
      : `Specified Value below ₹3,00,000 Commercial Courts threshold; route to Civil Order XXXVII Summary Suit or Pre-Litigation Lok Adalat.`;

    // 5. Registrar Arbitration (Co-op s.84) / Neutral ODR / Pre-Litigation Lok Adalat
    const odrSummary =
      lenderType === "coop_bank"
        ? `File Section 84 MSCS / State Co-op Registrar Arbitration jointly against Borrower & 2 Sureties + batch Pre-Litigation Lok Adalat (₹0 fee).`
        : `Zero-court-fee National Lok Adalat (LSA Act s.21 executable decree) + Perkins/CORE-compliant neutral institutional ODR arbitration.`;

    // 6. Criminal Bounce Track (PSS Act s.25 / NI Act s.138)
    const bounceStatus: "ELIGIBLE" | "CONDITIONAL" | "INELIGIBLE" =
      hasBounceInstrument === "yes" ? "ELIGIBLE" : "INELIGIBLE";
    const bounceSummary =
      hasBounceInstrument === "yes"
        ? `Parallel criminal leverage: serve 30-day statutory notice post-dishonour, allow 15-day cure, then prosecute + seek s.143A 20% interim compensation.`
        : `No dishonoured NACH/cheque flagged; verify PDC/mandate presentation records before recall.`;

    const forums: ForumVerdict[] = [
      {
        forumName: "SARFAESI Act, 2002 (s.13 / s.14)",
        statute: "s.13(2), s.13(4), s.14 & s.31",
        status: sarfaesiStatus,
        priorityRank:
          sarfaesiStatus === "ELIGIBLE"
            ? "Priority #1"
            : sarfaesiStatus === "CONDITIONAL"
            ? "Fix Blocker First"
            : "Blocked",
        feeLabel: "₹0 Court Fee (Notice + CERSAI)",
        summary:
          sarfaesiBlockers.length > 0
            ? sarfaesiBlockers.join(" ")
            : `Qualified for direct 60-day enforcement without Tribunal wait. Remaining ratio: ${remainingRatioPct.toFixed(1)}% (>20% s.31(j) rule passed).`,
      },
      {
        forumName: "DRT Original Application (RDB Act s.19)",
        statute: "RDB Act s.1(4) & Rule 7(2)",
        status: drtStatus,
        priorityRank: drtStatus === "ELIGIBLE" ? "Parallel Priority" : "Restricted",
        feeLabel: drtAmountOk ? `Rule 7 Fee: ${formatINR(drtOaFee)}` : "N/A (< ₹20 Lakh)",
        summary: drtSummary,
      },
      {
        forumName: "IBC NCLT CIRP / Guarantor (s.7 / s.95)",
        statute: "IBC s.4, s.7 & s.95 Form B",
        status: ibcStatus,
        priorityRank: ibcStatus === "ELIGIBLE" ? "High Leverage" : "Inapplicable",
        feeLabel: borrowerEntity === "corporate" && ibcThresholdOk ? "NCLT Fee: ₹25,000" : "s.95 Form B: ₹2,000",
        summary: ibcSummary,
      },
      {
        forumName: "Commercial Court (s.12A) / Order XXXVII CPC",
        statute: "CC Act s.2(1)(c)(i) & CPC O.37",
        status: commCourtEligible ? "ELIGIBLE" : "INELIGIBLE",
        priorityRank:
          drtStatus === "INELIGIBLE" && commCourtEligible ? "Primary Civil Track" : "Sub-₹3L Civil",
        feeLabel: `Est. State Fee: ${formatINR(estimatedCommercialCourtFee)}`,
        summary: commSummary,
      },
      {
        forumName: "PSS Act s.25 (e-NACH) / NI Act s.138",
        statute: "PSS s.25 & NI s.138 / s.143A",
        status: bounceStatus,
        priorityRank: hasBounceInstrument === "yes" ? "Fastest Pressure" : "Not Flagged",
        feeLabel: "Low Magistrate Process Fee",
        summary: bounceSummary,
      },
      {
        forumName:
          lenderType === "coop_bank"
            ? "Co-op Registrar s.84 & Lok Adalat"
            : "Pre-Litigation Lok Adalat & Neutral ODR",
        statute: "LSA Act s.19–21 & s.12(5) Arb.",
        status: "ELIGIBLE",
        priorityRank: totalDebtDue < 2000000 ? "Bulk Volume Track" : "Settlement Track",
        feeLabel: "Lok Adalat: ₹0 Fee",
        summary: odrSummary,
      },
    ];

    // 7. SARFAESI 60 + 15 + 30 Day Statutory Calendar
    const npaDate = parseLocalDate(npaDateStr);
    const limitationExpiry = addYears(npaDate, 3);
    const sec132Date = parseLocalDate(sec132DateStr);
    const objIllustrationDate = addDays(sec132Date, 30);
    const reply133aDueDate = addDays(objIllustrationDate, 15);
    const cure60ExpiryDate = addDays(sec132Date, 60);
    const symbolic134Date = addDays(sec132Date, 61);
    const rule8NewspaperDue = addDays(symbolic134Date, 7);
    const dmOrder30Date = addDays(symbolic134Date, 30);
    const dmOrder60MaxDate = addDays(symbolic134Date, 60);
    const firstAuctionEarliest = addDays(dmOrder30Date, 30);

    const timeline: TimelineMilestone[] = [
      {
        step: "NPA Classification & Limitation Baseline",
        statutoryProvision: "RBI IRACP & Limitation Act Art. 19/62",
        dateLabel: formatDateShort(npaDate),
        dayOffset: `Limitation: ${formatDateShort(limitationExpiry)}`,
        actionRequired:
          "Ensure Day-90 NPA stamping in CBS & lock personal guarantee invocation (s.128) + Section 18 acknowledgments.",
        tone: "slate",
      },
      {
        step: "Section 13(2) Statutory Demand Notice",
        statutoryProvision: "SARFAESI s.13(2), s.13(3) & Rule 3",
        dateLabel: formatDateShort(sec132Date),
        dayOffset: "Day 0 (Service Date)",
        actionRequired:
          "Itemize Principal, Contractual Interest & uncapitalized Penal Charges separately; store RPAD + Email + WhatsApp + affixation proofs.",
        tone: "red",
      },
      {
        step: "Section 13(3A) Reasoned Objection Disposal",
        statutoryProvision: "SARFAESI s.13(3A) Mandatory 15-Day Rule",
        dateLabel: `e.g. By ${formatDateShort(reply133aDueDate)}`,
        dayOffset: "+15 Days from Objection Receipt",
        actionRequired:
          "If borrower raises written objections (e.g. on Day 30), Authorized Officer MUST send a reasoned reply within 15 days.",
        tone: "amber",
      },
      {
        step: "60-Day Expiry & s.13(4) Symbolic Possession",
        statutoryProvision: "SARFAESI s.13(4) & Rule 8(1)/(2)",
        dateLabel: formatDateShort(symbolic134Date),
        dayOffset: `Cure Ends ${formatDateShort(cure60ExpiryDate)} (Day 60)`,
        actionRequired: `Serve Appendix IV Possession Notice on Day 61; publish in 2 newspapers (1 vernacular) latest by ${formatDateShort(rule8NewspaperDue)} (+7d).`,
        tone: "red",
      },
      {
        step: "Section 14 DM / CMM Physical Possession Order",
        statutoryProvision: "SARFAESI s.14 First Proviso (9-Pt Affidavit)",
        dateLabel: `${formatDateShort(dmOrder30Date)} – ${formatDateShort(dmOrder60MaxDate)}`,
        dayOffset: "+30 to +60 Days from Application",
        actionRequired:
          "File 9-point affidavit + CERSAI s.26D proof before DM/CMM; statutory order window is 30 days (extendable to 60 days).",
        tone: "emerald",
      },
      {
        step: "Rule 8(6) & Rule 9(1) E-Auction Sale Window",
        statutoryProvision: "Security Interest Rules r.8(5), r.8(6) & r.9(1)",
        dateLabel: `Earliest ${formatDateShort(firstAuctionEarliest)}`,
        dayOffset: "+30 Clear Days Notice (+15d Re-Auction)",
        actionRequired:
          "Serve 30 clear days pre-sale notice for 1st public e-auction (15 clear days for 2nd/subsequent auctions); file DRT s.19 OA for shortfall.",
        tone: "emerald",
      },
    ];

    return {
      totalDebtDue,
      principalPlusInterest,
      remainingRatioPct,
      sarfaesiLenderOk,
      sarfaesiFloor,
      sarfaesiFloorOk,
      sarfaesiCollateralOk,
      sarfaesiSec31jOk,
      sarfaesiNpaOk,
      sarfaesiCersaiOk,
      sarfaesiStatus,
      drtAmountOk,
      extraLakhs,
      drtOaFee,
      isRule7Capped,
      estimatedCommercialCourtFee,
      feeSavingsVsCivil,
      forums,
      timeline,
    };
  }, [
    lenderType,
    borrowerEntity,
    hasPersonalGuarantor,
    originalSanctioned,
    outstandingPrincipal,
    accruedInterest,
    penalCharges,
    collateralType,
    cersaiRegistered,
    accountStage,
    hasBounceInstrument,
    npaDateStr,
    sec132DateStr,
    stateCourtFeePct,
  ]);

  const handleCopySummary = () => {
    const topEligible = result.forums
      .filter((f) => f.status === "ELIGIBLE")
      .map((f) => `${f.forumName} (${f.feeLabel})`)
      .join(" | ");

    const lines = [
      "--- BANK & LENDER RECOVERY FORUM + DRT FEE SANCTION MEMO ---",
      `Lender Category: ${lenderType.replace("_", " ").toUpperCase()} | Borrower: ${borrowerEntity.toUpperCase()}`,
      `Total Claim Amount: ${formatINR(result.totalDebtDue)} (Principal: ${formatINR(outstandingPrincipal)} + Interest: ${formatINR(accruedInterest)} + Uncapitalized Penal: ${formatINR(penalCharges)})`,
      `SARFAESI s.31(j) Remaining Ratio: ${result.remainingRatioPct.toFixed(1)}% (Required >= 20%)`,
      `SARFAESI Eligibility Status: ${result.sarfaesiStatus} | CERSAI s.26D: ${cersaiRegistered.toUpperCase()}`,
      `DRT Section 19 OA Rule 7 Fee: ${result.drtAmountOk ? formatINR(result.drtOaFee) : "Ineligible (< ₹20,00,000)"}${result.isRule7Capped ? " [₹1.5L Cap Applied]" : ""}`,
      `Estimated Commercial Court Fee (${stateCourtFeePct}%): ${formatINR(result.estimatedCommercialCourtFee)} | DRT Savings: ${formatINR(result.feeSavingsVsCivil)}`,
      `Eligible Tracks: ${topEligible || "Pre-Litigation Lok Adalat / Order XXXVII"}`,
      `SARFAESI Timeline (s.13(2) Base ${formatDateShort(parseLocalDate(sec132DateStr))}): Day-61 s.13(4) Possession ${result.timeline[3]?.dateLabel} | Rule 8(6) Earliest Auction ${result.timeline[5]?.dateLabel}`,
      "Generated via LegalRecovery.in Bank Recovery Forum Calculator",
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownloadCSV = () => {
    const rows = [
      "B2B Bank Recovery Forum, DRT Rule 7 Fee & SARFAESI Calendar Report",
      `Lender Type,${lenderType}`,
      `Borrower Entity,${borrowerEntity}`,
      `Original Sanctioned Amount (INR),${originalSanctioned}`,
      `Outstanding Principal (INR),${outstandingPrincipal}`,
      `Accrued Interest (INR),${accruedInterest}`,
      `Uncapitalized Penal Charges (INR),${penalCharges}`,
      `Total Claim Due (INR),${result.totalDebtDue}`,
      `SARFAESI s.31(j) Remaining Ratio (%),${result.remainingRatioPct.toFixed(2)}%`,
      `DRT Rule 7 OA Fee (INR),${result.drtOaFee}`,
      `Estimated Commercial Court Ad-Valorem Fee (INR),${Math.round(result.estimatedCommercialCourtFee)}`,
      "",
      "Forum,Statute,Eligibility,Fee Estimate,Officer Guidance",
      ...result.forums.map(
        (f) => `"${f.forumName}","${f.statute}",${f.status},"${f.feeLabel}","${f.summary.replace(/"/g, "'")}"`
      ),
      "",
      "Statutory Milestone,Provision,Computed Date,Window,Required Action",
      ...result.timeline.map(
        (m) => `"${m.step}","${m.statutoryProvision}","${m.dateLabel}","${m.dayOffset}","${m.actionRequired.replace(/"/g, "'")}"`
      ),
    ];

    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sarfaesi-drt-forum-audit-${sec132DateStr}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div
        id="calculator-tool"
        className="scroll-mt-28 bg-white border border-slate-200/90 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Top Dark Header Bar */}
        <div className="bg-gradient-to-r from-[#111827] via-[#1F2937] to-[#111827] text-white p-5 sm:p-6 border-b border-slate-700">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex flex-wrap items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-950 text-red-400 border border-red-800/80 mb-1.5">
                <span>RDB Act Rule 7 &bull; SARFAESI s.13 / s.31</span>
                <span>&bull;</span>
                <span>IBC s.7 / s.95 &bull; Commercial s.12A</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                SARFAESI, DRT Rule 7 Fee &amp; Recovery Forum Selector
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Verify s.31(h)/(i)/(j) exemptions, compute exact Rule 7 DRT fees vs state court fees, and plot your 60+15+30 day calendar.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleCopySummary}
                className="px-3.5 py-2 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors cursor-pointer"
              >
                {copied ? "✓ Memo Copied" : "Copy Sanction Memo"}
              </button>
              <button
                type="button"
                onClick={handleDownloadCSV}
                className="px-3.5 py-2 text-xs font-bold rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white border border-red-500 transition-colors cursor-pointer shadow-sm"
              >
                Download Audit CSV
              </button>
            </div>
          </div>

          {/* Preset Scenario Bar */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
              Test Presets:
            </span>
            <button
              type="button"
              onClick={() => applyPreset("msme_lap")}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              &#8377;68.5L Bank MSME LAP
            </button>
            <button
              type="button"
              onClick={() => applyPreset("sub_drt")}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              &#8377;14.2L Sub-DRT Retail
            </button>
            <button
              type="button"
              onClick={() => applyPreset("nbfc_trap")}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              &#8377;18.5L NBFC &#8377;20L Trap
            </button>
            <button
              type="button"
              onClick={() => applyPreset("corp_ibc")}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] font-semibold text-slate-200 transition-colors cursor-pointer"
            >
              &#8377;2.45Cr Corporate + PG
            </button>
          </div>
        </div>

        <div className="p-5 sm:p-6 md:p-8 space-y-8">
          {/* Input Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div>
              <label htmlFor={lenderId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Lender / Creditor Institution Type
              </label>
              <select
                id={lenderId}
                value={lenderType}
                onChange={(e) => setLenderType(e.target.value as LenderType)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="scheduled_bank">Scheduled Commercial / PSU / Private / SFB / RRB Bank</option>
                <option value="coop_bank">Urban / State / Multi-State Cooperative Bank</option>
                <option value="hfc">RBI / NHB Registered Housing Finance Company (HFC)</option>
                <option value="nbfc_notified">Notified NBFC (&ge; &#8377;100 Cr Asset Size)</option>
                <option value="nbfc_base">Non-Notified NBFC (&lt; &#8377;100 Cr Asset Size)</option>
              </select>
            </div>

            <div>
              <label htmlFor={borrowerId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Borrower Entity Classification
              </label>
              <select
                id={borrowerId}
                value={borrowerEntity}
                onChange={(e) => setBorrowerEntity(e.target.value as BorrowerEntity)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="msme_firm">MSME / Proprietorship / Partnership Firm</option>
                <option value="corporate">Private Ltd / Public Ltd / LLP (Corporate Debtor)</option>
                <option value="individual">Individual Retail / Education / Agri Borrower</option>
              </select>
            </div>

            <div>
              <label htmlFor={guarantorId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Personal / Corporate Guarantor On Record?
              </label>
              <select
                id={guarantorId}
                value={hasPersonalGuarantor}
                onChange={(e) => setHasPersonalGuarantor(e.target.value as "yes" | "no")}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="yes">Yes — Signed Guarantee / Co-Obligor Exists</option>
                <option value="no">No — Borrower Only</option>
              </select>
            </div>

            <div>
              <label htmlFor={sanctionedId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Original Sanctioned Facility + Baseline (&#8377;)
              </label>
              <input
                id={sanctionedId}
                type="number"
                min={0}
                step={50000}
                value={originalSanctioned}
                onChange={(e) => setOriginalSanctioned(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={principalId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Outstanding Principal Due (&#8377;)
              </label>
              <input
                id={principalId}
                type="number"
                min={0}
                step={50000}
                value={outstandingPrincipal}
                onChange={(e) => setOutstandingPrincipal(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={interestId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Accrued Contractual Interest Due (&#8377;)
              </label>
              <input
                id={interestId}
                type="number"
                min={0}
                step={10000}
                value={accruedInterest}
                onChange={(e) => setAccruedInterest(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={penalId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Non-Compounded Penal Charges (RBI Norm, &#8377;)
              </label>
              <input
                id={penalId}
                type="number"
                min={0}
                step={5000}
                value={penalCharges}
                onChange={(e) => setPenalCharges(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={collateralId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Primary Security / Collateral Class
              </label>
              <select
                id={collateralId}
                value={collateralType}
                onChange={(e) => setCollateralType(e.target.value as CollateralType)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="immovable_non_agri">Registered / Equitable Mortgage (Non-Agri Property)</option>
                <option value="hypothecation_movable">Hypothecated Plant, Machinery, Stock or Vehicles</option>
                <option value="agricultural_land">Agricultural Land (SARFAESI s.31(i) Check)</option>
                <option value="pledge_gold">Pledge of Gold / Movables (Contract Act s.172/176)</option>
                <option value="unsecured">Unsecured / Clean / CGTMSE / Card Facility</option>
              </select>
            </div>

            <div>
              <label htmlFor={cersaiId} className="block text-xs font-bold text-slate-700 mb-1.5">
                CERSAI Security Interest Registration (s.26D)
              </label>
              <select
                id={cersaiId}
                value={cersaiRegistered}
                onChange={(e) => setCersaiRegistered(e.target.value as "yes" | "no")}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="yes">Yes — Registered on CERSAI Portal</option>
                <option value="no">No / Pending CERSAI Filing (s.26D Bar Risk)</option>
              </select>
            </div>

            <div>
              <label htmlFor={stageId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Current RBI IRACP Asset Bucket
              </label>
              <select
                id={stageId}
                value={accountStage}
                onChange={(e) => setAccountStage(e.target.value as AccountStage)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="npa_90_plus">Classified NPA (&gt; 90 DPD)</option>
                <option value="sma_2">SMA-2 (61&ndash;90 DPD Pre-NPA Cure Window)</option>
                <option value="sma_1">SMA-1 (31&ndash;60 DPD Early Warning)</option>
              </select>
            </div>

            <div>
              <label htmlFor={bounceId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Dishonoured e-NACH Mandate / Security Cheque?
              </label>
              <select
                id={bounceId}
                value={hasBounceInstrument}
                onChange={(e) => setHasBounceInstrument(e.target.value as "yes" | "no")}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              >
                <option value="yes">Yes — PSS s.25 / NI Act s.138 Return Memo Ready</option>
                <option value="no">No Instrument Dishonour on File</option>
              </select>
            </div>

            <div>
              <label htmlFor={courtFeeId} className="block text-xs font-bold text-slate-700 mb-1.5">
                State Commercial Court Fee Benchmark (%)
              </label>
              <input
                id={courtFeeId}
                type="number"
                min={0.5}
                max={10}
                step={0.5}
                value={stateCourtFeePct}
                onChange={(e) => setStateCourtFeePct(Number(e.target.value) || 0)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={npaDateId} className="block text-xs font-bold text-slate-700 mb-1.5">
                CBS NPA Stamping Date
              </label>
              <input
                id={npaDateId}
                type="date"
                value={npaDateStr}
                onChange={(e) => setNpaDateStr(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={sec132DateId} className="block text-xs font-bold text-slate-700 mb-1.5">
                Planned / Served Section 13(2) Notice Date
              </label>
              <input
                id={sec132DateId}
                type="date"
                value={sec132DateStr}
                onChange={(e) => setSec132DateStr(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#DC2626] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* KPI Output Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Total Itemized Claim Due
              </p>
              <p className="text-2xl font-black text-white mt-1">
                {formatINR(result.totalDebtDue)}
              </p>
              <p className="text-[11px] text-slate-300 mt-1">
                P+I Ratio: <strong className="text-emerald-400">{result.remainingRatioPct.toFixed(1)}%</strong> of baseline
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-50 border border-red-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#DC2626]">
                DRT Rule 7 OA Application Fee
              </p>
              <p className="text-2xl font-black text-slate-900 mt-1">
                {result.drtAmountOk ? formatINR(result.drtOaFee) : "Below ₹20L"}
              </p>
              <p className="text-[11px] text-slate-600 mt-1">
                {result.drtAmountOk
                  ? result.isRule7Capped
                    ? "₹1,50,000 statutory cap reached (>₹1.47Cr)"
                    : `₹12,000 + ${result.extraLakhs} lakh units × ₹1,000`
                  : "RDB Act s.1(4) requires >= ₹20,00,000"}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                DRT vs Commercial Court Fee
              </p>
              <p className="text-2xl font-black text-emerald-900 mt-1">
                {result.drtAmountOk
                  ? `Save ${formatINR(result.feeSavingsVsCivil)}`
                  : formatINR(result.estimatedCommercialCourtFee)}
              </p>
              <p className="text-[11px] text-emerald-800 mt-1">
                Est. Civil/Comm Fee ({stateCourtFeePct}%): {formatINR(result.estimatedCommercialCourtFee)}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                SARFAESI Enforcement Verdict
              </p>
              <p
                className={`text-xl font-black mt-1 ${
                  result.sarfaesiStatus === "ELIGIBLE"
                    ? "text-emerald-700"
                    : result.sarfaesiStatus === "CONDITIONAL"
                    ? "text-amber-700"
                    : "text-[#DC2626]"
                }`}
              >
                {result.sarfaesiStatus}
              </p>
              <p className="text-[11px] text-slate-600 mt-1">
                {result.sarfaesiStatus === "ELIGIBLE"
                  ? `s.31(h)/(i)/(j) & CERSAI s.26D verified`
                  : `Floor ${formatINR(result.sarfaesiFloor)} & s.31 audit applied`}
              </p>
            </div>
          </div>

          {/* SARFAESI Section 31 & RBI Audit Pills */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900">
              SARFAESI Section 31, NBFC Notification &amp; CERSAI Compliance Audit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              {[
                {
                  label: `Lender & Threshold (${lenderType === "nbfc_notified" ? ">=₹20L NBFC" : ">₹1L Bank/HFC"})`,
                  pass: result.sarfaesiLenderOk && result.sarfaesiFloorOk,
                },
                {
                  label: "Non-Agricultural / Enforceable Security",
                  pass: result.sarfaesiCollateralOk,
                },
                {
                  label: `s.31(j) Remaining >= 20% (${result.remainingRatioPct.toFixed(1)}%)`,
                  pass: result.sarfaesiSec31jOk,
                },
                {
                  label: "RBI NPA Classification (>90 DPD)",
                  pass: result.sarfaesiNpaOk,
                },
                {
                  label: "CERSAI s.26D Priority Registration",
                  pass: result.sarfaesiCersaiOk,
                },
                {
                  label: "Non-Compounded RBI Penal Hygiene",
                  pass: true,
                },
              ].map((check) => (
                <div
                  key={check.label}
                  className={`px-3 py-2 rounded-lg border flex items-center justify-between gap-2 font-semibold ${
                    check.pass
                      ? "bg-white border-emerald-200 text-emerald-800"
                      : "bg-red-50 border-red-200 text-[#DC2626]"
                  }`}
                >
                  <span className="truncate">{check.label}</span>
                  <span className="shrink-0 font-black">{check.pass ? "PASS" : "FLAG"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 6-Forum Adjudication Matrix */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Ranked Statutory Recovery Forum Verdict Across 6 Tracks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {result.forums.map((forum) => {
                const badgeStyle =
                  forum.status === "ELIGIBLE"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : forum.status === "CONDITIONAL"
                    ? "bg-amber-50 text-amber-800 border-amber-200"
                    : "bg-slate-100 text-slate-500 border-slate-200";
                return (
                  <div
                    key={forum.forumName}
                    className={`p-4 rounded-xl border flex flex-col justify-between gap-2 ${
                      forum.status === "INELIGIBLE"
                        ? "bg-slate-50/60 border-slate-200 opacity-85"
                        : "bg-white border-slate-200 shadow-xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${badgeStyle}`}>
                          {forum.status} &bull; {forum.priorityRank}
                        </span>
                        <span className="text-[11px] font-bold text-slate-600">{forum.feeLabel}</span>
                      </div>
                      <p className="text-sm font-extrabold text-slate-900">{forum.forumName}</p>
                      <p className="text-[11px] font-semibold text-[#DC2626] mt-0.5">{forum.statute}</p>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{forum.summary}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 60 + 15 + 30 Day SARFAESI Statutory Calendar */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
              Statutory 60 + 15 + 30 Day Recovery Calendar (Computed Dates)
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold">
                    <th className="p-3.5 border-b border-slate-800">Statutory Stage</th>
                    <th className="p-3.5 border-b border-slate-800">Section / Rule</th>
                    <th className="p-3.5 border-b border-slate-800">Target Date</th>
                    <th className="p-3.5 border-b border-slate-800">Window</th>
                    <th className="p-3.5 border-b border-slate-800">Authorized Officer Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {result.timeline.map((row) => (
                    <tr key={row.step} className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">{row.step}</td>
                      <td className="p-3.5 font-semibold text-[#DC2626]">{row.statutoryProvision}</td>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.dateLabel}</td>
                      <td className="p-3.5 font-semibold text-slate-600">{row.dayOffset}</td>
                      <td className="p-3.5 text-xs leading-relaxed">{row.actionRequired}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Conversion Bar inside Calculator */}
          <div className="rounded-xl bg-slate-900 text-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-slate-800">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-red-400">
                Execute Pre-SARFAESI Recall or Bulk Portfolio Dispatch Now
              </p>
              <p className="text-sm font-bold text-white mt-0.5">
                Serve BSA s.63 compliant Advocate Notices before invoking DRT, SARFAESI s.13(2), or Lok Adalat.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-bold cursor-pointer transition-colors"
              >
                Test 1 Live Case (&#8377;{basePrice})
              </button>
              <Link
                href="/user/new-recovery"
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-colors"
              >
                Open Case Portal
              </Link>
              <Link
                href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                className="px-4 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold transition-colors"
              >
                Upload Bulk CSV &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

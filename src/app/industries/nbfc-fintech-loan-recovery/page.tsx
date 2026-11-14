import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import NbfcHubTableOfContents from "./NbfcHubTableOfContents";
import NbfcHubScenarioTabs from "./NbfcHubScenarioTabs";
import NbfcHubCTA from "./NbfcHubCTA";

export const revalidate = 86400;

const PAGE_URL = "/industries/nbfc-fintech-loan-recovery";
const CANONICAL_URL = `${SITE_URL}${PAGE_URL}`;
const PAGE_TITLE = "NBFC, Fintech, HFC & MFI Bulk Legal Recovery Platform India";
const PAGE_DESCRIPTION =
  "Scale NBFC, Fintech, HFC & MFI loan recovery across 100–50,000+ accounts: Section 25 e-NACH notices, WhatsApp, Email, Speed Post RPAD & reply triage.";
const H1_TEXT =
  "High-Velocity, RBI-Compliant Legal Recovery & Bulk Notice Automation for NBFCs, Fintechs, HFCs & MFIs";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: formatAltText(PAGE_TITLE),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface IndustrySpoke {
  id: string;
  archetype: "L1" | "G1" | "G2" | "T1" | "P1" | "R1";
  archetypeLabel: string;
  track: "digital" | "secured" | "structured" | "tools";
  title: string;
  url: string;
  statute: string;
  summary: string;
}

const IND_02_SPOKES: IndustrySpoke[] = [
  {
    id: "B2B-020",
    archetype: "L1",
    archetypeLabel: "L1 Statute Deep-Dive",
    track: "digital",
    title: "Section 25 PSS Act e-NACH, ECS & UPI AutoPay Bounce Recovery",
    url: "/law/section-25-payment-and-settlement-systems-act-nach-bounce",
    statute: "PSS Act s.25, NI s.142(2) parity & NPCI Return Codes",
    summary:
      "Prosecute digital auto-debit dishonours across 30+15+30 statutory timelines with Suman Sethi EMI segregation.",
  },
  {
    id: "B2B-021",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "digital",
    title: "RBI Recovery Agent Conduct Rules & Advocate Escalation SOP",
    url: "/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc",
    statute: "RBI Fair Practices Code & Outsourcing Directions",
    summary:
      "Replace risky third-party dialers and 8 AM–7 PM Ombudsman liability with compliant advocate legal notices.",
  },
  {
    id: "B2B-022",
    archetype: "G2",
    archetypeLabel: "G2 Economics & Forum Matrix",
    track: "digital",
    title: "Small-Ticket Digital Personal Loan & BNPL Recovery Economics",
    url: "/small-ticket-digital-personal-loan-bnpl-recovery-economics",
    statute: "PSS s.25, Pre-CIC Alert & Institutional ODR",
    summary:
      "Solve negative litigation ROI on ₹5,000–₹1,00,000 digital cohorts using tiered bulk notices and batch ODR.",
  },
  {
    id: "B2B-032",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "digital",
    title: "CIBIL & CIC Pre-Reporting Default Notice Compliance for Lenders",
    url: "/cibil-cic-pre-reporting-default-notice-compliance-lenders",
    statute: "CICRA 2005 & RBI CIC ₹100/day Penalty Directions",
    summary:
      "Execute mandatory prior SMS/email alerts before credit bureau reporting while boosting voluntary SMA cures.",
  },
  {
    id: "B2B-033",
    archetype: "L1",
    archetypeLabel: "L1 Clause & Compliance Guide",
    track: "digital",
    title: "Neutral ODR & Online Arbitration Clause Drafting Post-CORE",
    url: "/neutral-odr-online-arbitration-clause-drafting-fintech-nbfc",
    statute: "Arbitration s.12(5), CORE 2024 & IT Act s.10A",
    summary:
      "Eliminate unilateral arbitrator set-asides under Perkins and CORE with enforceable click-wrap ODR clauses.",
  },
  {
    id: "B2B-023",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "secured",
    title: "Gold Loan Default Auction & Section 176 Statutory Notice SOP",
    url: "/gold-loan-default-auction-statutory-notice-rbi-compliance-nbfc",
    statute: "Indian Contract Act s.176 & RBI 75% LTV Rules",
    summary:
      "Issue non-waivable s.176 auction notices, run vernacular taluka notices cleanly, and sue for post-sale deficits.",
  },
  {
    id: "B2B-024",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "secured",
    title: "Commercial Vehicle & Construction Equipment Recovery for NBFCs",
    url: "/commercial-vehicle-construction-equipment-finance-recovery-nbfc",
    statute: "Arbitration s.9/17, Prakash Kaur & MV Act s.51(5)",
    summary:
      "Combine Court Receiver petitions, Form 36 Vahan transfer holds, and guarantor Loss-on-Sale suits interstate.",
  },
  {
    id: "B2B-025",
    archetype: "L1",
    archetypeLabel: "L1 Eligibility Analysis",
    track: "secured",
    title: "NBFC SARFAESI Eligibility: ₹100 Crore Asset & ₹20 Lakh Rule",
    url: "/nbfc-sarfaesi-eligibility-100-crore-asset-20-lakh-loan-rule",
    statute: "MoF Gazette S.O. 856(E) / 652(E) & CPC O.34/37",
    summary:
      "Check statutory AUM and debt floors before s.13(2) dispatch and route excluded NBFC LAP files cleanly.",
  },
  {
    id: "B2B-029",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "secured",
    title: "HFC Affordable Home Loan NPA Recovery & ₹1 Lakh SARFAESI Track",
    url: "/housing-finance-company-hfc-affordable-home-loan-npa-recovery",
    statute: "SARFAESI HFC ₹1L Threshold & NHB/RBI Directions",
    summary:
      "Enforce affordable housing mortgages from ₹1L upward, handle builder subvention tripartites, and perfect CERSAI.",
  },
  {
    id: "B2B-026",
    archetype: "G2",
    archetypeLabel: "G2 Multi-Party Workflow",
    track: "structured",
    title: "Co-Lending (80:20) & 5% FLDG / DLG Default Recovery Playbook",
    url: "/co-lending-fldg-dlg-default-recovery-workflow-bank-nbfc",
    statute: "RBI Co-Lending Model & 2023 DLG 120-Day Mandate",
    summary:
      "Align servicing POAs, locus standi, and subrogation notices before 5% Default Loss Guarantee windows expire.",
  },
  {
    id: "B2B-027",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "structured",
    title: "Supply Chain Finance & Invoice Factoring Default Recovery",
    url: "/supply-chain-finance-channel-invoice-discounting-default-recovery",
    statute: "Factoring Act 2011 s.8/19, CERSAI & BNS s.318",
    summary:
      "Enforce assigned receivables against buyers, coordinate anchor holdbacks, and prosecute invoice double-pledging.",
  },
  {
    id: "B2B-028",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "structured",
    title: "Microfinance (MFI) & JLG Group Loan Compliant Legal Recovery",
    url: "/microfinance-mfi-jlg-group-loan-default-compliant-recovery",
    statute: "RBI Microfinance Master Direction & LSA 1987",
    summary:
      "Protect SRO compliance while recovering ₹75K–₹3L graduated microfinance and ring-leader defaults via Lok Adalat.",
  },
  {
    id: "B2B-030",
    archetype: "G1",
    archetypeLabel: "G1 Operational Playbook",
    track: "structured",
    title: "Unsecured SME Working Capital & Merchant Cash Advance Recovery",
    url: "/unsecured-business-loan-sme-working-capital-default-nbfc",
    statute: "PSS s.25, NI s.138 & CPC Order XXXVIII Rule 5",
    summary:
      "Counteract SME QR-code diversion with backup mandate notices and urgent garnishee attachments.",
  },
  {
    id: "B2B-031",
    archetype: "G2",
    archetypeLabel: "G2 Platform Comparison",
    track: "structured",
    title: "Credgenics & Spocto Alternative for Mid-Market NBFC Legal Desks",
    url: "/credgenics-spocto-alternative-mid-market-nbfc-legal-notice-platform",
    statute: "Advocates Act 1961 & Pay-Per-Notice Economics",
    summary:
      "Compare six-month enterprise SaaS lock-ins against on-demand ₹999 live testing and advocate CSV execution.",
  },
  {
    id: "B2B-034",
    archetype: "T1",
    archetypeLabel: "T1 Interactive Tool",
    track: "tools",
    title: "Section 25 PSS Act e-NACH Bounce Limitation Calculator",
    url: "/tools/section-25-nach-bounce-limitation-calculator",
    statute: "PSS Act s.25(1)(c), s.28 & Saketh India Rule",
    summary:
      "Calculate exact 30-day notice, 15-day borrower cure, and 30-day Magistrate complaint expiry dates by dispatch mode.",
  },
  {
    id: "B2B-035",
    archetype: "P1",
    archetypeLabel: "P1 Notice Template",
    track: "tools",
    title: "Section 25 PSS Act e-NACH Bounce Legal Notice Format",
    url: "/templates/section-25-pss-act-nach-bounce-legal-notice-format",
    statute: "PSS s.25, UMRN Mandate & Suman Sethi Precedent",
    summary:
      "Downloadable creditor demand format specifying NPCI reason codes and exact dishonoured installment split.",
  },
  {
    id: "B2B-036",
    archetype: "R1",
    archetypeLabel: "R1 Empirical Study",
    track: "tools",
    title: "NBFC & Digital Lending Legal Recovery Benchmarks in India",
    url: "/reports/nbfc-digital-lending-legal-recovery-benchmarks-india",
    statute: "Multi-Cohort Dispatch & Statutory Framework Study",
    summary:
      "Analyze statutory timelines, dispatch channel latency, and cost-to-recovery benchmarks across fintech cohorts.",
  },
];

const SPOKE_TRACKS = [
  {
    key: "digital",
    heading: "Track A: Digital Lending, e-NACH s.25, CIC Alerts & Neutral ODR",
    badgeClass: "bg-red-50 border-red-200 text-[#DC2626]",
    items: IND_02_SPOKES.filter((s) => s.track === "digital"),
  },
  {
    key: "secured",
    heading: "Track B: Gold Loans (s.176), CV/CE Fleet, NBFC SARFAESI & HFCs",
    badgeClass: "bg-emerald-50 border-emerald-200 text-emerald-700",
    items: IND_02_SPOKES.filter((s) => s.track === "secured"),
  },
  {
    key: "structured",
    heading: "Track C: Co-Lending/DLG, SCF Factoring, MFI, SME EDI & Alternatives",
    badgeClass: "bg-amber-50 border-amber-200 text-amber-800",
    items: IND_02_SPOKES.filter((s) => s.track === "structured"),
  },
  {
    key: "tools",
    heading: "Track D: Interactive s.25 Calculator, Template & Benchmark Study",
    badgeClass: "bg-slate-100 border-slate-200 text-slate-800",
    items: IND_02_SPOKES.filter((s) => s.track === "tools"),
  },
];

const ESCALATION_MATRIX_ROWS = [
  {
    vertical: "Digital Personal Loan & BNPL",
    ticket: "₹2,500 – ₹2,00,000",
    trigger: "SMA-1/2 (15–60 DPD)",
    primaryTrack: "PSS Act s.25 e-NACH Notice + Pre-CIC Alert + Institutional ODR",
    statutoryHook: "30-day demand from NPCI memo; Suman Sethi exact EMI demand split",
  },
  {
    vertical: "Gold Loans (Bullet & EMI)",
    ticket: "₹50,000 – ₹25,00,000",
    trigger: "LTV > 75% / Overdue",
    primaryTrack: "Contract Act s.176 Prior Sale Notice + Taluka Public Auction",
    statutoryHook: "Non-waivable reasonable notice before auction; preserve deficit claim",
  },
  {
    vertical: "Commercial Vehicle & CE Fleet",
    ticket: "₹5L – ₹45L",
    trigger: "SMA-2 / Asset Trace",
    primaryTrack: "Arbitration s.9/17 Receiver + MV Act s.51(5) RTO Form 36",
    statutoryHook: "Prakash Kaur non-coercive custody; guarantor Loss-on-Sale suit",
  },
  {
    vertical: "Non-SARFAESI NBFC LAP",
    ticket: "<₹20L or AUM <₹100 Cr",
    trigger: "90+ DPD NPA",
    primaryTrack: "CPC Order XXXIV / Order XXXVII Summary Suit / Neutral ODR",
    statutoryHook: "Excluded by MoF S.O. 856(E)/652(E); avoid quashable s.13(2)",
  },
  {
    vertical: "Notified NBFC Secured LAP",
    ticket: ">=₹20L (AUM >=₹100 Cr)",
    trigger: "90+ DPD + CERSAI",
    primaryTrack: "SARFAESI s.13(2) 60-Day Notice -> s.13(4) -> s.14 DM Order",
    statutoryHook: "Verify CERSAI registration under s.26D prior to enforcement",
  },
  {
    vertical: "Housing Finance Company (HFC)",
    ticket: ">=₹1,00,000 Overdue",
    trigger: "90+ DPD NPA",
    primaryTrack: "HFC SARFAESI s.13(2) (₹1L threshold) + Builder Tripartite",
    statutoryHook: "NHB/RBI registered HFC exception below ₹20L NBFC floor",
  },
  {
    vertical: "Co-Lending (80:20) & 5% FLDG",
    ticket: "Program Pool / Retail",
    trigger: "Pre-120 DPD Window",
    primaryTrack: "Escrow Servicing Notice under POA + DLG Invocation Audit",
    statutoryHook: "Preserve 120-day RBI DLG window without double recovery",
  },
  {
    vertical: "SCF Factoring & SME EDI",
    ticket: "₹5L – ₹5 Crore",
    trigger: "Invoice Overdue / QR Switch",
    primaryTrack: "Factoring Act s.8 Notice + Order XXXVIII Rule 5 Garnishee",
    statutoryHook: "CERSAI Form assignment + BNS s.318 on double-pledged invoices",
  },
];

const APEX_MANDATES = [
  {
    title: "Ban on Unilateral NBFC & Fintech Arbitrator Panels",
    citation:
      "CORE v. ECI SPIC SMO MCML (JV) (5-Judge Bench, Nov 2024) & Perkins Eastman (2020)",
    holding:
      "Lender-curated or asymmetrically appointed sole arbitrator panels violate Section 12(5) neutrality and the Seventh Schedule. Mid-market NBFCs and digital lenders using unilateral panels risk automatic Section 34 annulments or Section 36 execution stalls.",
    actionableRule:
      "Embed a neutral institutional ODR clause referencing independent roster selection before dispatch.",
  },
  {
    title: "Exact Bounced Installment Must Be Demanded Separately",
    citation:
      "Suman Sethi v. Ajay K. Churiwal & Sripati Singh v. State of Jharkhand (SC)",
    holding:
      "When combining an accelerated loan recall with a Section 138 NI or Section 25 PSS Act notice, demanding only a consolidated principal ledger invalidates statutory prosecution. Security mandates crystallize into enforceable debt upon loan recall.",
    actionableRule:
      "Always display the exact dishonoured EMI/UMRN figure apart from accelerated principal, interest, and charges.",
  },
  {
    title: "Click-Wrap Fintech Loan Agreements & Stamp Cure",
    citation:
      "In Re: Interplay of Arbitration & Indian Stamp Act (7-Judge Bench, Dec 2023) & IT Act s.10A",
    holding:
      "Electronic OTP-authenticated loan contracts carry statutory validity under Section 10A of the IT Act, 2000. Insufficient stamp duty on digital loan schedules no longer renders the arbitration clause void ab initio at the Section 11/ODR reference threshold.",
    actionableRule:
      "Retain OTP audit logs, KFS timestamps, and Section 63 BSA 2023 hashes alongside deficit stamp curing SOPs.",
  },
  {
    title: "Mandatory Prior Notice for Gold & Vehicle Custody",
    citation:
      "ICICI Bank Ltd. v. Prakash Kaur (SC), Indian Contract Act s.176 & RBI DLG Directions",
    holding:
      "Neither contract clauses nor recovery agent outsourcing shields a lender from criminal liability for forcible vehicle seizure or unannounced gold auction. Likewise, RBI limits Default Loss Guarantees to 5% and requires 120-day invocation discipline.",
    actionableRule:
      "Preceding every asset action with verifiable Speed Post RPAD + WhatsApp + Email notices creates indisputable good-faith proof.",
  },
];

const LIVE_SEED_LINKS = [
  {
    label: "Legal Notice Services for NBFCs",
    href: "/send-a-legal-notice/for-nbfc-to-recover-their-unpaid-dues",
    note: "Live NBFC demand notice onboarding page for unpaid EMI & principal recovery.",
  },
  {
    label: "Tri-Channel Bulk Notice Dispatch Solution",
    href: "/bulk-recovery-notice-send-through-email-whatsapp-speedpost-solution",
    note: "Unified Email + WhatsApp Business API + India Post Speed Post RPAD tracking.",
  },
  {
    label: "Online Dispute Resolution (ODR) India",
    href: "/online-dispute-resolution-india",
    note: "Post-CORE neutral institutional ODR settlement workflow for retail cohorts.",
  },
  {
    label: "Bulk Recovery Cases Affordable CSV Solutions",
    href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
    note: "Enterprise batch ingestion, volume pricing tiers, and reply-triage workflows.",
  },
  {
    label: "End-to-End Legal Recovery for Banks & NBFCs",
    href: "/end-to-end-legal-recovery-solutions-banks-nbfcs",
    note: "Full-lifecycle pre-litigation to execution roadmap across secured & unsecured books.",
  },
  {
    label: "Unsecured Loan Legal Recovery Guide (Banks & NBFCs)",
    href: "/legal-recovery-unsecured-loans-guide-banks-nbfcs",
    note: "Structured playbook for clean personal loans, credit lines, and BNPL pools.",
  },
  {
    label: "Third-Party Legal Recovery for Financial Institutions",
    href: "/third-party-legal-recovery-services-financial-institutions",
    note: "Advocates Act compliant outsourcing alternative to aggressive collection vendors.",
  },
  {
    label: "Recover Small-Ticket Personal Loans Legally",
    href: "/recover-small-ticket-personal-loans-legally-banks",
    note: "Sub-₹2L cohort unit economics via Lok Adalat, PSS s.25, and digital mediation.",
  },
  {
    label: "Batch Recovery Across Multiple Defaulted Accounts",
    href: "/recovery-multiple-defaulted-loan-accounts-legal-proceedings",
    note: "Consolidating multi-account borrower defaults and parallel criminal/civil remedies.",
  },
  {
    label: "IND-01 Bank Loan & NPA Recovery Pillar Hub",
    href: "/industries/banks-loan-recovery",
    note: "Sibling hub for PSU, Private, Small Finance & Cooperative Bank lending partners.",
  },
];

const FAQS = [
  {
    question:
      "Can every NBFC issue a SARFAESI Section 13(2) demand notice to recover secured LAP defaults?",
    answer:
      "No. Under Ministry of Finance notifications (including S.O. 856(E) and S.O. 652(E)) read with Section 2(1)(m)(iv) of the SARFAESI Act, 2002, only notified NBFCs meeting the ₹100 Crore asset-size threshold can invoke SARFAESI, and only for individual loan debts of ₹20 Lakh and above. Non-notified NBFCs or sub-₹20L secured loans must use CPC Order XXXIV mortgage suits, Order XXXVII summary suits, neutral institutional ODR, or Section 25 PSS Act / Section 138 NI Act proceedings.",
  },
  {
    question:
      "Why does a Housing Finance Company (HFC) enjoy a lower SARFAESI threshold than an NBFC?",
    answer:
      "Housing Finance Companies registered under the National Housing Bank Act and supervised by the RBI fall under a separate central notification class that permits SARFAESI enforcement down to ₹1 Lakh overdue threshold (subject to Section 31 exceptions where aggregate recovery falls below ₹1 Lakh or under 20% of principal plus interest). This enables HFCs to deploy 60-day Section 13(2) demand notices across affordable housing portfolios where standard NBFCs cannot.",
  },
  {
    question:
      "What makes Section 25 of the Payment and Settlement Systems Act, 2007 vital for Fintech & NBFC e-NACH bounces?",
    answer:
      "Section 25 of the PSS Act places electronic funds transfer dishonours (e-NACH, ECS, and recurring UPI AutoPay mandates failing due to insufficient balance or instruction limits) on criminal parity with Section 138 NI Act cheque bounces. When served within 30 days of receiving the NPCI/sponsor-bank return memo and granting a clean 15-day cure window—without conflating the bounced installment and total loan recall—the lender unlocks a valid Magistrate complaint within the subsequent 30 days.",
  },
  {
    question:
      "How does an advocate-backed bulk notice desk reduce RBI Ombudsman & SRO compliance risk compared to telecalling agencies?",
    answer:
      "Telecalling and field recovery agencies face strict RBI Outsourcing Directions, 8 AM–7 PM calling caps, privacy prohibitions, and reputational vicarious liability for unlicensed harassment. Dispatching statutory notices prepared and signed by enrolled advocates under the Advocates Act, 1961 via logged Email, verified WhatsApp Business templates, and India Post Speed Post RPAD shifts communication strictly onto lawful statutory channels backed by Bharatiya Sakshya Adhiniyam, 2023 Section 63 digital hash certificates.",
  },
  {
    question:
      "How should co-lending partners (80:20) and LSPs manage FLDG / DLG 120-day legal recovery clocks?",
    answer:
      "Under the RBI Default Loss Guarantee (DLG) Guidelines, default loss cover is capped at 5% of total loan portfolio disbursed and must be invoked within 120 days of overdue recognition unless the underlying asset is recovered. Both the partner bank (holding 80%) and NBFC originator (holding 20%) must ensure legal demand notices specify clear Power of Attorney servicing authority and execute timely PSS s.25 / recall notices before subrogation or DLG replenishment.",
  },
  {
    question:
      "Are click-wrap OTP digital loan agreements and unilateral fintech arbitration clauses enforceable in 2026?",
    answer:
      "OTP-authenticated electronic loan contracts are legally valid under Section 10A of the Information Technology Act, 2000, and following the Supreme Court's 7-Judge Stamp Act ruling, curable stamp gaps do not bar threshold arbitration. However, under Perkins Eastman and the 5-Judge Constitution Bench ruling in CORE (Nov 2024), unilateral lender-appointed arbitrator clauses fail Section 12(5) neutrality. Digital lenders must migrate to neutral institutional ODR clauses and roster-based appointments.",
  },
  {
    question:
      "How can an NBFC validate LegalRecovery.in before uploading 5,000 CSV borrower rows?",
    answer:
      "Our dual-track onboarding lets risk and legal teams pilot a single defaulted account for ₹999 using the live loan-recovery intake engine (capturing Disbursed Amount, Disbursement Date, As-On Date, UMRN, and bounce schedule). Once your team inspects the advocate draft, BSA s.63 server certificate, and tri-channel Speed Post RPAD delivery receipt, you can onboard full multi-entity CSV buckets via the Representee Vault with zero mandatory SaaS lock-in.",
  },
];

const OFFICIAL_SOURCES = [
  {
    label: "India Code — Payment and Settlement Systems Act, 2007 (Section 25)",
    url: "https://www.indiacode.nic.in/",
  },
  {
    label: "India Code — Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    label: "Reserve Bank of India — Regulatory Directions (Digital Lending, DLG, Fair Practices, MFI & CIC)",
    url: "https://www.rbi.org.in/",
  },
  {
    label: "NPCI — National Automated Clearing House (e-NACH & UPI AutoPay Return Specifications)",
    url: "https://www.npci.org.in/",
  },
  {
    label: "CERSAI — Central Registry of Securitisation Asset Reconstruction & Factoring Security Interests",
    url: "https://www.cersai.org.in/",
  },
  {
    label: "National Housing Bank (NHB) — Housing Finance Company Regulatory Framework",
    url: "https://www.nhb.org.in/",
  },
  {
    label: "National Legal Services Authority (NALSA) — Pre-Litigation Lok Adalat Framework",
    url: "https://nalsa.gov.in/",
  },
];

// TODO(reviewer): src/data/reviewers.ts is absent in this repository. Advocate attribution (Anuj Anand Malik, Advocate & Founder, AMA Legal Solutions) emitted inline.

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: H1_TEXT,
  description: PAGE_DESCRIPTION,
  serviceType: "Institutional NBFC, Fintech, HFC & MFI Pre-Litigation Legal Recovery",
  provider: {
    "@type": "Organization",
    name: "LegalRecovery.in",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/lrlogo.png`,
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "NBFCs, Digital Lending Fintechs, BNPL Platforms, Housing Finance Companies, Microfinance Institutions & Co-Lending Partners",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/user/new-recovery`,
  },
  mainEntityOfPage: CANONICAL_URL,
};

const ITEM_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IND-02 NBFC, Fintech, HFC & MFI Legal Recovery Spokes, Tools & Templates",
  numberOfItems: IND_02_SPOKES.length,
  itemListElement: IND_02_SPOKES.map((spoke, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: spoke.title,
    url: `${SITE_URL}${spoke.url}`,
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "NBFC & Fintech Loan Recovery",
      item: CANONICAL_URL,
    },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function NbfcFintechLoanRecoveryPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEM_LIST_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Institutional Hero */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-02 Pillar Hub</span>
            <span>•</span>
            <span>NBFCs, Digital Lenders, HFCs &amp; MFIs</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {H1_TEXT}
          </h1>

          {/* 40-60 Word Executive Creditor Summary + Inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer
            </span>
            LegalRecovery.in replaces high-risk telecalling escalation with advocate-issued{" "}
            <strong className="text-white">Section 25 PSS Act</strong> e-NACH notices,{" "}
            <strong className="text-white">Section 176 gold notices</strong>, HFC/NBFC SARFAESI
            demands, and batch Email, WhatsApp &amp; Speed Post RPAD tracking across 100 to 50,000+
            accounts—anchored to our{" "}
            <Link
              href="/services"
              className="text-red-300 underline decoration-red-400/60 hover:text-white"
            >
              institutional legal recovery services directory
            </Link>
            .
          </div>

          {/* 4-Card Statutory Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-5">
            <div>
              <p className="text-base sm:text-xl font-black text-slate-100">₹100 Cr / ₹20L</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                NBFC SARFAESI AUM &amp; Debt Floor
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-emerald-400">₹1 Lakh</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                HFC Statutory SARFAESI Threshold
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-amber-400">30 + 15 + 30 Days</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                Section 25 PSS e-NACH Clock
              </p>
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-red-400">5% Cap / 120d</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                RBI DLG / FLDG Invocation Mandate
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <p>
              Legal Architecture Reviewed by{" "}
              <Link
                href="/authors/anuj-anand-malik"
                className="text-slate-200 font-semibold underline decoration-slate-500 hover:text-white"
              >
                Anuj Anand Malik, Advocate &amp; Founder (AMA Legal Solutions)
              </Link>
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/tools/section-25-nach-bounce-limitation-calculator"
                className="px-3 py-1.5 rounded-lg bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold transition-colors"
              >
                s.25 e-NACH Calculator →
              </Link>
              <a
                href="#dual-track-cta"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                ₹999 Live Test / CSV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "NBFC & Fintech Loan Recovery", href: PAGE_URL },
            ]}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          <NbfcHubTableOfContents />

          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Institutional Positioning */}
            <section
              id="heading-overview"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  01
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Why Mid-Market NBFCs &amp; Fintechs Replace Collection Calls With Law
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Non-Banking Financial Companies, Digital Lending Fintechs, Housing Finance
                  Companies (HFCs), and Microfinance Institutions operate across dramatically faster
                  default curves and tighter regulatory scrutiny than legacy commercial banks. A
                  sub-₹50,000 Buy-Now-Pay-Later (BNPL) or salary-advance loan enters SMA-2 delinquency
                  within weeks, while aggressive third-party telecallers immediately expose the
                  Regulated Entity (RE) and its Lending Service Provider (LSP) to Reserve Bank
                  Integrated Ombudsman penalties, privacy complaints, and reputational blacklisting.
                </p>
                <p>
                  Simultaneously, mid-market NBFCs face asymmetric statutory ceilings. Unless your
                  NBFC clears the Ministry of Finance asset-size floor (₹100 Crore) and the single
                  account satisfies the ₹20 Lakh minimum debt floor, issuing a standard SARFAESI
                  Section 13(2) demand notice is ultra vires. Conversely, delaying formal advocate
                  action until 180+ DPD wastes the crucial{" "}
                  <strong className="text-slate-900">30-day limitation window</strong> following
                  an NPCI e-NACH or UPI AutoPay bounce under{" "}
                  <Link
                    href="/law/section-25-payment-and-settlement-systems-act-nach-bounce"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Section 25 of the Payment and Settlement Systems Act, 2007
                  </Link>
                  .
                </p>
                <p>
                  By replacing ad-hoc call pressure with timely, statutorily segmented advocate
                  notices—governed under our{" "}
                  <Link
                    href="/rbi-recovery-agent-guidelines-compliant-legal-escalation-nbfc"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    RBI Recovery Agent Conduct &amp; Legal Escalation SOP
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/cibil-cic-pre-reporting-default-notice-compliance-lenders"
                    className="text-[#DC2626] font-semibold underline hover:text-[#B91C1C]"
                  >
                    Pre-CIC Regulatory Notice framework
                  </Link>
                  —institutional lenders trigger early self-cures while building ironclad Section 63
                  BSA digital evidence from day 31 onward.
                </p>
              </div>
            </section>

            {/* Section 2: Vertical Escalation Matrix Table */}
            <section
              id="heading-escalation-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  02
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  NBFC, Fintech, HFC &amp; MFI Escalation Matrix Across Loan Books
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Different non-bank credit products require starkly different statutory remedies.
                Sending an incorrect template—such as a SARFAESI notice on a ₹12L non-notified NBFC
                LAP file or omitting a separate bounced-EMI figure in an e-NACH recall—undermines
                prosecution and invites borrower defenses.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 font-bold border-b border-slate-800">Credit Vertical</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Ticket Band</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">SMA / DPD Trigger</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Primary Statutory Track</th>
                      <th className="p-3.5 font-bold border-b border-slate-800">Critical Legal Guardrail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {ESCALATION_MATRIX_ROWS.map((row) => (
                      <tr key={row.vertical} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 align-top">{row.vertical}</td>
                        <td className="p-3.5 font-semibold text-[#DC2626] whitespace-nowrap align-top">
                          {row.ticket}
                        </td>
                        <td className="p-3.5 text-slate-600 whitespace-nowrap align-top">
                          {row.trigger}
                        </td>
                        <td className="p-3.5 text-slate-800 font-medium align-top">
                          {row.primaryTrack}
                        </td>
                        <td className="p-3.5 text-slate-600 align-top">{row.statutoryHook}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Custom SVG Recovery Pipeline + Mobile Cards */}
            <section
              id="heading-pipeline-architecture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  03
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Digital e-NACH &amp; SARFAESI Recovery Pipeline for Non-Bank Lenders
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Every CSV batch or single file entering LegalRecovery.in passes through a 4-stage
                automated triage and advocate supervision funnel—matching asset class, SARFAESI
                eligibility, NPCI UMRN codes, and post-CORE neutral ODR clauses before hitting
                synchronized digital and postal dispatch.
              </p>

              {/* Desktop Hand-Authored SVG Workflow Architecture */}
              <div className="hidden md:block rounded-2xl overflow-hidden border border-slate-800 bg-[#0F172A] p-4">
                <svg
                  viewBox="0 0 920 310"
                  width={920}
                  height={310}
                  role="img"
                  aria-label="Four-stage NBFC and Fintech pre-litigation legal recovery pipeline architecture"
                  className="w-full h-auto"
                >
                  <rect x="0" y="0" width="920" height="310" rx="14" fill="#0F172A" />

                  <text
                    x="30"
                    y="36"
                    fill="#F87171"
                    fontSize="12"
                    fontWeight="bold"
                    letterSpacing="1.5"
                  >
                    IND-02 CREDITOR RECOVERY ARCHITECTURE: INGESTION TO ADMISSIBLE PROOF
                  </text>

                  {/* Stage 1 Box */}
                  <rect x="30" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="30" y="64" width="195" height="32" rx="12" fill="#DC2626" />
                  <text x="127" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    01. TRIAGE &amp; INGESTION
                  </text>
                  <text x="44" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• CSV / API Bucket Load</text>
                  <text x="44" y="148" fill="#CBD5E1" fontSize="11">Check MoF ₹100Cr / ₹20L</text>
                  <text x="44" y="168" fill="#CBD5E1" fontSize="11">HFC ₹1L &amp; CERSAI Audit</text>
                  <text x="44" y="194" fill="#34D399" fontSize="11" fontWeight="bold">NPCI UMRN &amp; Return Code</text>
                  <text x="44" y="214" fill="#94A3B8" fontSize="10">Lock 30-day PSS s.25 clock</text>
                  <text x="44" y="236" fill="#94A3B8" fontSize="10">Co-Lending POA Verification</text>

                  {/* Arrow 1->2 */}
                  <line x1="225" y1="159" x2="255" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="253,153 265,159 253,165" fill="#DC2626" />

                  {/* Stage 2 Box */}
                  <rect x="265" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="265" y="64" width="195" height="32" rx="12" fill="#334155" />
                  <text x="362" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    02. STATUTORY DRAFTING
                  </text>
                  <text x="279" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Advocate Letterhead</text>
                  <text x="279" y="148" fill="#CBD5E1" fontSize="11">PSS s.25 (Bounced EMI Split)</text>
                  <text x="279" y="168" fill="#CBD5E1" fontSize="11">Contract s.176 Gold Sale</text>
                  <text x="279" y="194" fill="#FBBF24" fontSize="11" fontWeight="bold">Pre-CIC &amp; Neutral ODR</text>
                  <text x="279" y="214" fill="#94A3B8" fontSize="10">Suman Sethi compliant ledger</text>
                  <text x="279" y="236" fill="#94A3B8" fontSize="10">Vernacular MFI / Regional copy</text>

                  {/* Arrow 2->3 */}
                  <line x1="460" y1="159" x2="490" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="488,153 500,159 488,165" fill="#DC2626" />

                  {/* Stage 3 Box */}
                  <rect x="500" y="64" width="195" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="500" y="64" width="195" height="32" rx="12" fill="#059669" />
                  <text x="597" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    03. TRI-CHANNEL DISPATCH
                  </text>
                  <text x="514" y="122" fill="#E2E8F0" fontSize="12" fontWeight="bold">• Synchronized Proof</text>
                  <text x="514" y="148" fill="#CBD5E1" fontSize="11">Verified WhatsApp API</text>
                  <text x="514" y="168" fill="#CBD5E1" fontSize="11">Signed Creditor Email + PDF</text>
                  <text x="514" y="194" fill="#34D399" fontSize="11" fontWeight="bold">India Post Speed Post RPAD</text>
                  <text x="514" y="214" fill="#94A3B8" fontSize="10">SHA-256 BSA 2023 s.63 Cert</text>
                  <text x="514" y="236" fill="#94A3B8" fontSize="10">Live 15-Day Cure Countdown</text>

                  {/* Arrow 3->4 */}
                  <line x1="695" y1="159" x2="725" y2="159" stroke="#DC2626" strokeWidth="2.5" />
                  <polygon points="723,153 735,159 723,165" fill="#DC2626" />

                  {/* Stage 4 Box */}
                  <rect x="735" y="64" width="155" height="190" rx="12" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
                  <rect x="735" y="64" width="155" height="32" rx="12" fill="#B45309" />
                  <text x="812" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
                    04. FORUM OUTCOME
                  </text>
                  <text x="747" y="122" fill="#34D399" fontSize="11" fontWeight="bold">✓ UPI / Payment Cure</text>
                  <text x="747" y="150" fill="#CBD5E1" fontSize="11">• Neutral Institutional ODR</text>
                  <text x="747" y="176" fill="#CBD5E1" fontSize="11">• Lok Adalat s.21 Award</text>
                  <text x="747" y="202" fill="#CBD5E1" fontSize="11">• s.25 PSS / s.138 Bundle</text>
                  <text x="747" y="228" fill="#F87171" fontSize="10" fontWeight="bold">• s.9 Receiver / s.14 DM</text>

                  <text x="460" y="288" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    End-to-end audit log exportable per NBFC, LSP, HFC branch, or 80:20 Co-Lending SPV
                  </text>
                </svg>
              </div>

              {/* Mobile Stacked Pipeline Cards */}
              <div className="md:hidden grid grid-cols-1 gap-3">
                {[
                  {
                    step: "01. Triage & Ingestion",
                    text: "Validate NBFC ₹100Cr/₹20L or HFC ₹1L SARFAESI eligibility, capture NPCI UMRN codes, and lock 30-day PSS s.25 timers.",
                  },
                  {
                    step: "02. Statutory Drafting",
                    text: "Enrolled advocates draft Suman Sethi compliant s.25 notices, s.176 gold warnings, and post-CORE neutral ODR demands.",
                  },
                  {
                    step: "03. Tri-Channel Dispatch",
                    text: "Dispatch via verified WhatsApp, Email, and India Post Speed Post RPAD backed by BSA 2023 s.63 server hash certificates.",
                  },
                  {
                    step: "04. Reply Triage & Forum Action",
                    text: "Route uncured files straight into Neutral ODR, District Lok Adalat s.21 awards, s.25 Magistrate complaints, or s.9 Receiver petitions.",
                  },
                ].map((stage) => (
                  <div
                    key={stage.step}
                    className="rounded-xl bg-slate-900 text-white p-4 border border-slate-800"
                  >
                    <p className="text-xs font-extrabold text-red-400 mb-1">{stage.step}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{stage.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Interactive Vertical Scenario Tabs */}
            <section
              id="heading-vertical-tracks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  04
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Interactive NBFC &amp; Fintech Recovery Tracks by Lending Vertical
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Select your lending segment below to inspect step-by-step operational timelines,
                statutes, and compliance guardrails across NBFC, Fintech, HFC, and MFI portfolios.
              </p>

              <NbfcHubScenarioTabs />
            </section>

            {/* Section 5: CSV Engine, Loan-Recovery Intake & Tri-Channel Dispatch */}
            <section
              id="heading-csv-dispatch-desk"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  05
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Inside the Loan-Recovery CSV Engine &amp; Tri-Channel Dispatch Desk
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                <p>
                  Enterprise legal software vendors routinely lock mid-market NBFCs into multi-year
                  seat licenses and six-month API integrations before sending a single enforceable
                  demand. LegalRecovery.in takes the opposite engineering approach—combining an
                  Advocates Act, 1961 legal practice backbone with a purpose-built{" "}
                  <code className="px-1.5 py-0.5 rounded bg-slate-100 text-[#DC2626] text-xs font-semibold">
                    loan-recovery
                  </code>{" "}
                  data schema ready on day one.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#DC2626] mb-2">
                    Precision Loan Data Ingestion
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Itemized Principal, Interest &amp; Bounce Schedules
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Whether testing one borrower on{" "}
                    <Link href="/user/new-recovery" className="text-[#DC2626] font-semibold underline">
                      /user/new-recovery
                    </Link>{" "}
                    or uploading 25,000 delinquent accounts, each payload maps Disbursed Amount,
                    Disbursement Date, As-On Cut-off Date, UMRN / e-NACH reference, NPCI return
                    reason codes, and uncapitalized penal charges cleanly.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-2">
                    Multi-Entity Representee Vault
                  </p>
                  <p className="text-sm font-bold text-slate-900 mb-2">
                    Board Resolutions, Co-Lending POAs &amp; BSA s.63 Certs
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under{" "}
                    <Link href="/user/representees" className="text-emerald-700 font-semibold underline">
                      /user/representees
                    </Link>
                    , compliance teams store separate Board Resolutions and Power of Attorney deeds
                    per NBFC, HFC subsidiary, or 80:20 co-lending pool. Every Email, WhatsApp PDF,
                    and Speed Post RPAD article receives an automatically hashed Section 63 BSA 2023
                    certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* Dual-Track B2B Conversion Funnel */}
            <NbfcHubCTA />

            {/* Section 6: Binding Supreme Court & RBI Mandates */}
            <section
              id="heading-court-rbi-mandates"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  06
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Binding Supreme Court &amp; RBI Mandates Shaping Non-Bank Recovery
                </h2>
              </div>

              <div className="space-y-4">
                {APEX_MANDATES.map((item) => (
                  <div
                    key={item.title}
                    className="relative pl-5 pr-4 py-4 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]"
                    />
                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs font-bold text-[#DC2626] mt-0.5 mb-2">{item.citation}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
                      {item.holding}
                    </p>
                    <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 inline-block">
                      Operational Rule: {item.actionableRule}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7: Illustrative Unit-Economics Comparison */}
            <section
              id="heading-unit-economics"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  07
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Unit-Economics Math: ₹18,000 BNPL Default vs ₹12 Lakh LAP Loan
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                <strong>Illustrative Procedural &amp; Cost Model:</strong> Institutional credit risk
                depends on matching recovery spend and statutory forum to actual ticket economics and
                eligibility rules rather than filing uniform physical suits across all cohorts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Scenario A */}
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                    Scenario A • Sub-₹25K Digital BNPL
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹18,000 Digital Personal Loan (e-NACH Return)
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Broken Approach:</strong> Physical civil recovery suit or unregulated
                      field visits cost more than the ₹18,000 principal and trigger RBI conduct exposure.
                    </li>
                    <li>
                      <strong>IND-02 Legal Workflow:</strong> Batch Pre-CIC regulatory SMS + tri-channel{" "}
                      <strong>Section 25 PSS Act</strong> advocate demand (disclosing UMRN &amp; exact
                      bounced EMI) followed by neutral batch ODR / District Lok Adalat camp.
                    </li>
                    <li className="text-emerald-800 font-semibold">
                      Outcome Architecture: Low marginal CSV notice cost preserves positive net cohort
                      recovery while documenting loss write-off compliance for tax/audit.
                    </li>
                  </ul>
                </div>

                {/* Scenario B */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold mb-2">
                    Scenario B • Non-Notified NBFC Mortgage
                  </span>
                  <p className="text-base font-extrabold text-slate-900 mb-2">
                    ₹12,00,000 NBFC LAP Account (Below ₹20L SARFAESI Floor)
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li>
                      <strong>Broken Approach:</strong> Dispatching a SARFAESI s.13(2) demand where
                      debt is under ₹20 Lakh (or NBFC AUM is under ₹100 Cr) leads to High Court writ
                      quashing and borrower damages.
                    </li>
                    <li>
                      <strong>IND-02 Legal Workflow:</strong> Execute formal Loan Recall cum
                      Guarantor Invocation notice paired with parallel <strong>PSS s.25</strong> /
                      <strong>NI s.138</strong> criminal demand and <strong>CPC Order XXXIV / XXXVII</strong>{" "}
                      or post-CORE institutional ODR arbitration.
                    </li>
                    <li className="text-amber-900 font-semibold">
                      Outcome Architecture: Zero jurisdictional dismissal risk and simultaneous civil +
                      quasi-criminal settlement leverage.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Complete 17-Spoke IND-02 Directory */}
            <section
              id="heading-ind02-directory"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  08
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Explore All 17 IND-02 NBFC, Fintech, HFC &amp; MFI Spokes &amp; Tools
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Navigate directly to every statutory playbook, comparative workflow, interactive
                limitation calculator, notice template, and empirical benchmark in the IND-02
                cluster.
              </p>

              <div className="space-y-8">
                {SPOKE_TRACKS.map((track) => (
                  <div key={track.key}>
                    <p className="text-sm sm:text-base font-extrabold text-slate-900 border-b border-slate-200 pb-2 mb-4">
                      {track.heading}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {track.items.map((spoke) => (
                        <Link
                          key={spoke.id}
                          href={spoke.url}
                          className="group rounded-xl border border-slate-200 hover:border-[#DC2626] bg-slate-50/70 hover:bg-white p-4 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <span
                                className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase ${track.badgeClass}`}
                              >
                                {spoke.id} • {spoke.archetypeLabel}
                              </span>
                            </div>
                            <p className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626] transition-colors mb-1.5">
                              {spoke.title}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed mb-2">
                              {spoke.summary}
                            </p>
                          </div>
                          <p className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-200/80">
                            {spoke.statute}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Existing Live Seed NBFC & Bulk Assets */}
            <section
              id="heading-seed-guides"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  09
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Existing NBFC &amp; Bulk Dispatch Guides on LegalRecovery.in
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Alongside the dedicated IND-02 spokes above, consult our live foundational NBFC
                services, ODR rails, bulk dispatch guides, and our sibling Banking Hub:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {LIVE_SEED_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-slate-200 hover:border-slate-900 p-4 bg-slate-50 hover:bg-white transition-all block"
                  >
                    <p className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.label} →
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.note}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Section 10: Institutional FAQs */}
            <section
              id="heading-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  10
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  FAQs: NBFC, Digital Lending, HFC &amp; MFI Legal Recovery in India
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors"
                  >
                    <summary className="cursor-pointer list-none px-4 sm:px-5 py-4 flex items-center justify-between gap-4 font-bold text-sm text-slate-900">
                      <span>{faq.question}</span>
                      <span className="text-[#DC2626] text-base font-black shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 11: Statutory Authorities & Official Portals */}
            <section
              id="heading-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#DC2626] text-white text-xs font-black shrink-0">
                  11
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Statutory Authorities, RBI Directions &amp; NPCI/CERSAI Portals
                </h2>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm">
                {OFFICIAL_SOURCES.map((src) => (
                  <li key={src.label} className="flex items-start gap-2">
                    <span className="text-[#DC2626] font-bold mt-0.5">•</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-slate-700 hover:text-[#DC2626] underline decoration-slate-300 transition-colors"
                    >
                      {src.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      <RelatedRecoveryGuides currentPath={PAGE_URL} cluster="banking" />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL, formatAltText } from "@/lib/site";
import OtsRevocationTableOfContents from "./OtsRevocationTableOfContents";
import OtsRevocationScenarioTabs from "./OtsRevocationScenarioTabs";
import OtsRevocationCTA from "./OtsRevocationCTA";

export const revalidate = 86400;

const PAGE_PATH = "/ots-one-time-settlement-default-revocation-legal-notice-bank";
const CANONICAL_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE_URL = `${SITE_URL}/blog_money_recovery.png`;

const EXACT_H1 =
  "Handling Broken One-Time Settlements (OTS): Revocation Notices, Upfront Forfeiture & Full Liability Revival";
const META_TITLE =
  "Borrower Defaulted on OTS? Revocation & Debt Revival Guide";
const META_DESCRIPTION =
  "NPA borrower defaulted on OTS tranches? Draft ironclad OTS Revocation Notices citing SBI v. Arvindra Electronics & Bijnor Urban Co-op to revive dues.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: HERO_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: formatAltText(
          "OTS Default Revocation Notice and Full Loan Liability Revival Playbook for Banks"
        ),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [HERO_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const SC_PRECEDENTS = [
  {
    title: "High Courts Cannot Extend OTS Payment Timelines Under Article 226",
    parties: "State Bank of India v. Arvindra Electronics Pvt. Ltd.",
    citation: "(2023) 1 SCC 540, Supreme Court of India",
    date: "Judgment Dated 04 November 2022",
    facts:
      "An NPA borrower sanctioned an OTS of ₹10.54 Crore against a much larger contractual debt defaulted on the stipulated payment schedule. After the bank rejected extension requests, the Punjab & Haryana High Court invoked Article 226 to grant a further extension of time with simple interest.",
    holding:
      "The Supreme Court set aside the High Court order and laid down binding nationwide law: rescheduling or extending payment dates under an OTS scheme amounts to rewriting the contract between the bank and the borrower. No High Court exercising writ jurisdiction under Article 226 can direct a bank to extend an expired OTS period contrary to the sanctioned terms.",
    badge: "Binding Bar on Art. 226 OTS Extensions",
    takeaway:
      "Attach the signed OTS Sanction Letter and the T+1 Revocation Notice to your threshold counter-affidavit citing Arvindra Electronics to dismiss borrower extension writs at the admission stage.",
  },
  {
    title: "No Borrower Can Claim One-Time Settlement as a Matter of Legal Right",
    parties: "The Bijnor Urban Cooperative Bank Ltd. v. Meenal Agarwal & Ors.",
    citation: "(2023) 2 SCC 805, Supreme Court of India",
    date: "Judgment Dated 15 December 2021",
    facts:
      "A borrower with mortgaged property valued well above the total NPA dues approached the Allahabad High Court seeking a Writ of Mandamus compelling the cooperative bank to accept a discounted OTS proposal.",
    holding:
      "The Supreme Court held that no borrower can claim OTS as a matter of right. Granting or rejecting an OTS is an administrative and commercial decision guided by recovery maximization. A High Court cannot issue a Writ of Mandamus compelling a bank to grant a settlement where the bank can recover 100% of public funds by auctioning the mortgaged security.",
    badge: "Zero Vested Right to Demand OTS",
    takeaway:
      "Invoke Meenal Agarwal whenever a borrower who already breached a prior OTS tries to force a second discounted OTS or challenge auction reserve prices through writ petitions.",
  },
  {
    title: "OTS Proposal & Part-Payment Reset 3-Year Limitation Under Sections 18 & 19",
    parties: "Dena Bank (now Bank of Baroda) v. C. Shivakumar Reddy & Anr.",
    citation: "(2021) 10 SCC 330, Supreme Court of India",
    date: "Judgment Dated 04 August 2021",
    facts:
      "After default and issuance of recovery notices, the corporate borrower submitted written OTS proposals and later argued that subsequent recovery proceedings were barred by limitation.",
    holding:
      "The Supreme Court affirmed that a written One-Time Settlement offer made within the subsistence of limitation constitutes an unequivocal acknowledgment of jural relationship and debt liability under Section 18 of the Limitation Act, 1963, giving the bank a fresh three-year period of limitation from the date of the OTS offer or signed acceptance.",
    badge: "Fresh 3-Year Limitation Clock Trigger",
    takeaway:
      "Preserve every borrower-signed OTS application, acceptance letter, and No-Lien UTR transfer receipt as admissible Section 18/19 acknowledgments for DRT Original Applications and IBC filings.",
  },
  {
    title: "Statutory Right of Redemption Ends Upon Publication of Auction Notice",
    parties: "CELIR LLP v. Bafna Motors (Mumbai) Pvt. Ltd. & Ors.",
    citation: "(2024) 2 SCC 1, Supreme Court of India",
    date: "Judgment Dated 21 September 2023",
    facts:
      "Borrowers repeatedly approached the High Court after publication of SARFAESI e-auction notices attempting to tender settlement amounts and stall auction confirmation.",
    holding:
      "Interpreting amended Section 13(8) of the SARFAESI Act, the Supreme Court held that the borrower's statutory right of redemption stands extinguished on the very date of publication of the public auction notice under Rule 8(6)/Rule 9(1). Banks and High Courts cannot undermine auction sanctity by entertaining last-minute redemption or stalled OTS pleas post-publication.",
    badge: "SARFAESI s.13(8) Auction Finality",
    takeaway:
      "Once an OTS is formally revoked and a fresh 15-day subsequent sale notice is published, borrowers cannot derail confirmed e-auctions by tendering expired OTS sums.",
  },
];

const PRIMARY_SOURCES = [
  {
    title: "Reserve Bank of India — Framework for Compromise Settlements and Technical Write-offs (Circular RBI/2023-24/40 dated June 8, 2023)",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513&Mode=0",
  },
  {
    title: "Indian Contract Act, 1872 (Sections 55 Time as Essence, 59–61 Appropriation of Payments, 62–63 Conditional Compromise & 74 Earnest Forfeiture)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI Act — Sections 13(2), 13(4), 13(8), 14 & 17)",
    url: "https://www.indiacode.nic.in/handle/123456789/2006",
  },
  {
    title: "Limitation Act, 1963 (Section 18 Written Acknowledgment of Liability & Section 19 Effect of Payment on Account of Debt)",
    url: "https://www.indiacode.nic.in/handle/123456789/1565",
  },
  {
    title: "Recovery of Debts and Bankruptcy Act, 1993 (Section 19 Original Application, Consent Decrees & Sections 25–28 Recovery Certificate Execution)",
    url: "https://www.indiacode.nic.in/handle/123456789/1362",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (Section 63 Electronic Evidence Certificate) & Bankers' Books Evidence Act, 1891 (Section 2A/4)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
];

const FAQS = [
  {
    question: "Can a High Court force a bank to extend an expired One-Time Settlement (OTS) deadline?",
    answer:
      "No. In State Bank of India v. Arvindra Electronics Pvt. Ltd. (2023) 1 SCC 540, the Supreme Court categorically held that High Courts exercising Article 226 writ jurisdiction cannot grant an extension of time or reschedule payment tranches under a sanctioned OTS scheme. Extending an expired OTS rewrites the commercial contract between lender and borrower, which is impermissible in law.",
  },
  {
    question: "Does a bank have to refund the 10%–25% upfront OTS deposit when the borrower defaults on remaining tranches?",
    answer:
      "No, provided the OTS Sanction Letter explicitly classifies the upfront payment as a non-refundable deposit held in a No-Lien Account that will be appropriated towards the revived original loan liability (interest, recovery charges, and principal under Indian Contract Act ss.59–61) upon default. Banks should avoid arbitrary penalty language and frame adjustment as lawful appropriation against admitted outstanding dues.",
  },
  {
    question: "When an OTS fails, does the bank revive the original NPA principal and contractual interest or only the OTS sum?",
    answer:
      "Upon default of any OTS tranche and issuance of the formal OTS Revocation Notice, all concessions, interest waivers, and haircuts granted under the OTS automatically stand cancelled ab initio. Under Indian Contract Act Sections 55 and 62–63, the bank revives 100% of the original contractual debt plus applicable contractual interest and legal expenses from the date of default, giving credit only for amounts actually realized.",
  },
  {
    question: "After revoking a broken OTS, must the bank issue a brand-new SARFAESI Section 13(2) 60-day demand notice?",
    answer:
      "Not if the OTS Sanction Letter contains a strict 'Non-Novation & Without-Prejudice Survival Clause' confirming that existing SARFAESI Section 13(2) and 13(4) actions remain merely in abeyance during OTS performance and automatically resume upon breach. Once the OTS Revocation Notice is served, the Authorized Officer can proceed directly to a fresh 15-day subsequent auction notice under Rule 9(1) Proviso or execute pending Section 14 possession orders.",
  },
  {
    question: "Does a borrower's failed OTS application help the bank's limitation period for DRT or civil recovery?",
    answer:
      "Yes. As held by the Supreme Court in Dena Bank v. C. Shivakumar Reddy (2021) 10 SCC 330, a borrower-signed OTS application or counter-signed OTS sanction acceptance constitutes a binding written acknowledgment of subsisting debt under Section 18 of the Limitation Act, 1963. Additionally, any 10%–25% upfront tranche paid triggers Section 19, giving the bank a fresh three-year limitation period to file a DRT OA, civil suit, or IBC petition.",
  },
  {
    question: "What if the borrower deposits a partial amount after the OTS cutoff date without bank approval?",
    answer:
      "Never leave unsolicited post-expiry credits unaddressed in the CBS loan ledger, as borrowers plead implied waiver under Section 55 of the Contract Act. Within 48 hours, serve a written 'Appropriation Without Prejudice & Non-Waiver Intimation' confirming that the expired OTS remains revoked and the transfer is appropriated solely towards the revived original contractual dues under Section 60.",
  },
  {
    question: "How does the RBI June 8, 2023 Compromise Settlement Framework affect repeat OTS proposals after a default?",
    answer:
      "Under the RBI Framework for Compromise Settlements and Technical Write-offs (dated June 8, 2023), regulated banks must follow a Board-approved policy defining delegation of authority, permissible sacrifice ceilings, mandatory cooling-off periods before fresh credit exposure, and strict enforcement of settlement timelines. A borrower who weaponizes an OTS solely to stall auctions has zero enforceable right under Bijnor Urban Co-op Bank v. Meenal Agarwal to compel a second compromise.",
  },
];

export default function OtsDefaultRevocationPage() {
  // TODO(reviewer): src/data/reviewers.ts is absent in this repository; attributed directly to verified Managing Partner counsel.

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
        name: "Banks & Cooperative Loan Recovery Hub",
        item: `${SITE_URL}/industries/banks-loan-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "OTS Default Revocation & Full Liability Revival",
        item: CANONICAL_URL,
      },
    ],
  };

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: EXACT_H1,
    description: META_DESCRIPTION,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    image: [HERO_IMAGE_URL],
    datePublished: "2026-11-19T00:00:00+05:30",
    dateModified: "2026-11-19T00:00:00+05:30",
    author: {
      "@type": "Person",
      name: "Anuj Anand Malik",
      jobTitle: "Advocate & Founder",
      worksFor: {
        "@type": "Organization",
        name: "AMA Legal Solutions",
        url: SITE_URL,
      },
    },
    publisher: {
      "@type": "Organization",
      name: "LegalRecovery.in",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
  };

  const HOW_TO_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Banks Revoke a Broken OTS & Restore Full Loan Liability",
    description:
      "Operational legal workflow for NPA Settlement Committees and Bank Legal Managers to cancel defaulted One-Time Settlements, appropriate upfront No-Lien deposits, defeat High Court Article 226 writs, and resume SARFAESI/DRT enforcement.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit OTS Sanction Default Trigger & Grace Expiry",
        text: "Verify the exact tranche due date, sanction letter time-is-essence clause under Indian Contract Act s.55, and CBS No-Lien account balance at T+1 post-cutoff.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Issue Formal OTS Revocation & Full Liability Revival Notice",
        text: "Dispatch a fact-verified OTS Cancellation Notice via Speed Post RPAD, registered email, and WhatsApp citing SBI v. Arvindra Electronics (2023) 1 SCC 540 and formally revoking all concessions ab initio.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Appropriate 10%–25% No-Lien Upfront Deposit to Original Dues",
        text: "Transfer the No-Lien deposit into the NPA loan ledger against accrued interest and recovery costs under Contract Act ss.59–61, issuing a revised CBS statement showing the revived full contractual balance.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Lock Limitation Reset Proof & BSA 2023 s.63 Dossier",
        text: "Compile the signed OTS application, acceptance letter, UTR receipts (Limitation Act ss.18–19), and Bankers' Books s.2A / BSA 2023 s.63 certificates.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Resume SARFAESI Auction / DRT Execution & File Art. 226 Caveat",
        text: "Publish a fresh 15-day subsequent auction notice under Rule 9(1) Proviso or execute the DRT Recovery Certificate for the revived gross claim while lodging High Court caveats citing Arvindra Electronics and Bijnor Urban Co-op Bank.",
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOW_TO_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* Dark Gradient Hero Section */}
      <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Hero Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span>IND-01 Bank NPA Committee Playbook</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-slate-300">SBI v. Arvindra Electronics &amp; Bijnor Co-op</span>
          </div>

          {/* Single Page H1 (Verbatim PDF Match) */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            {EXACT_H1}
          </h1>

          {/* 40-60 Word Executive Creditor Answer Box + Inline Parent Hub Link */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor Answer for NPA Settlement Committees
            </span>
            <p>
              When an NPA borrower defaults on any One-Time Settlement (OTS) tranche, banks should serve an immediate OTS Revocation Notice citing{" "}
              <em>SBI v. Arvindra Electronics</em> (2022) and <em>Bijnor Urban Co-op Bank</em> to cancel waivers, appropriate the 10%–25% No-Lien deposit towards original dues, and defeat Article 226 extension writs. Part of our{" "}
              <Link
                href="/industries/banks-loan-recovery"
                className="text-red-400 font-bold underline hover:text-red-300 transition-colors"
              >
                Scheduled Commercial &amp; Cooperative Banks Loan Recovery Hub
              </Link>
              , this SOP arms legal teams to revive full contractual liability without restarting SARFAESI.
            </p>
          </div>

          {/* Hero 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Writ Extension Rule
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-red-400 font-mono">
                Art. 226 Barred
              </p>
              <span className="text-[10px] text-slate-400 block">
                Arvindra Electronics (2022)
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Liability Restored
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400 font-mono">
                100% Original
              </p>
              <span className="text-[10px] text-slate-400 block">
                Principal + Contractual Int.
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Upfront 10–25% Token
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-amber-400 font-mono">
                No-Lien Adjust
              </p>
              <span className="text-[10px] text-slate-400 block">
                Contract Act ss. 59–61
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">
                Limitation Clock
              </span>
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-100 font-mono">
                +3 Years Fresh
              </p>
              <span className="text-[10px] text-slate-400 block">
                Limitation Act ss. 18 &amp; 19
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Navigation */}
      <div className="w-full bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <Breadcrumbs
            items={[
              {
                label: "Banks & Cooperative Loan Recovery Hub",
                href: "/industries/banks-loan-recovery",
              },
              {
                label: "OTS Default Revocation & Debt Revival",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>
      </div>

      {/* Main Content Layout with Sticky Left Sidebar */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Sticky Sidebar TOC */}
          <OtsRevocationTableOfContents />

          {/* Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* Section 1: Tactical OTS Default Problem */}
            <section
              id="heading-tactical-ots-default"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Institutional NPA Bottleneck
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Why Tactical OTS Defaults Stall Bank SARFAESI Auctions
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across Public Sector Banks (PSBs), Private Scheduled Commercial Banks, Small Finance Banks, and Urban Cooperative Banks, One-Time Settlement (OTS) schemes are routinely weaponized by strategic defaulters as a low-cost litigation stay mechanism. A chronic NPA promoter waits until the Stressed Asset Recovery Branch (SARB) completes physical possession under{" "}
                <Link
                  href="/sarfaesi-section-14-dm-cmm-physical-possession-workflow"
                  className="text-[#DC2626] font-semibold underline hover:text-red-700"
                >
                  SARFAESI Section 14
                </Link>{" "}
                and publishes a Rule 8(6) e-auction notice. Forty-eight hours before bidding opens, the borrower deposits a 10% upfront token into a No-Lien Account, secures a 90-day OTS sanction deferring the sale, and then defaults on the remaining 90% balance.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the 90-day OTS window expires, the defaulter immediately moves the jurisdictional High Court under Article 226 of the Constitution pleading &ldquo;bona fide financial hardship&rdquo; and requesting a 6-to-12-month judicial extension of the expired compromise. When a bank&rsquo;s OTS sanction letter uses generic boilerplate and its branch fails to issue a formal, legally airtight OTS Revocation Notice on T+1 day, courts are frequently persuaded to pass interim &ldquo;status quo&rdquo; orders that freeze recovery for an additional 12–18 months while collateral value erodes and provisioning costs climb.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#DC2626] block">
                    The Novation Trap
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Poorly drafted OTS letters allow borrowers to claim under Contract Act s.62 that the OTS permanently replaced the original loan and wiped out prior{" "}
                    <Link
                      href="/law/sarfaesi-section-13-2-demand-notice-bank-guide"
                      className="text-[#DC2626] font-semibold underline"
                    >
                      Section 13(2) demand notices
                    </Link>
                    .
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 block">
                    The Silent Waiver Trap
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Accepting belated RTGS transfers or holding post-dated cheques after the OTS cutoff without issuing a written Non-Waiver Notice destroys the &ldquo;time is of the essence&rdquo; defense under Contract Act s.55.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 space-y-1.5">
                  <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 block">
                    The Institutional Remedy
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Pairing a self-executing OTS Sanction Default Clause with a T+1 Advocate Revocation Notice citing <em>Arvindra Electronics</em> restores 100% original dues and preserves auction continuity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Operational Decision Tree Flowchart (SVG + Mobile Cards) */}
            <section
              id="heading-revocation-decision-tree"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Operational Escalation Workflow
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  OTS Default-to-Revival Decision Tree for NPA Committees
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Every hour of administrative hesitation after an OTS tranche bounces hands leverage back to the defaulting borrower. Stressed Asset Management Branches (SAMBs) and NPA Settlement Committees must follow a deterministic five-gate operational decision tree starting at T+1 day after tranche default.
              </p>

              {/* Desktop SVG Decision Tree */}
              <div className="hidden md:block bg-slate-900 rounded-2xl p-6 border border-slate-800 overflow-x-auto">
                <svg
                  width="880"
                  height="380"
                  viewBox="0 0 880 380"
                  className="w-full h-auto max-w-[880px] mx-auto"
                  role="img"
                  aria-label="Bank OTS Default Revocation and Liability Revival Decision Tree Flowchart"
                >
                  <defs>
                    <marker
                      id="ots-arrow-red"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="7"
                      markerHeight="7"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#EF4444" />
                    </marker>
                    <marker
                      id="ots-arrow-emerald"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="7"
                      markerHeight="7"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#34D399" />
                    </marker>
                    <marker
                      id="ots-arrow-amber"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="7"
                      markerHeight="7"
                      orient="auto-start-reverse"
                    >
                      <path d="M 0 1 L 10 5 L 0 9 z" fill="#FBBF24" />
                    </marker>
                  </defs>

                  {/* Node 1 */}
                  <rect x="20" y="25" width="240" height="78" rx="12" fill="#1E293B" stroke="#DC2626" strokeWidth="2" />
                  <text x="36" y="48" fill="#F87171" fontSize="11" fontWeight="700">GATE 1 &bull; T+1 DAY POST-DEFAULT</text>
                  <text x="36" y="68" fill="#FFFFFF" fontSize="13" fontWeight="800">OTS Tranche Missed / Cheque</text>
                  <text x="36" y="86" fill="#CBD5E1" fontSize="11">Freeze No-Lien Acct; verify s.55 cutoff</text>

                  {/* Arrow 1 -> 2 */}
                  <line x1="260" y1="64" x2="312" y2="64" stroke="#EF4444" strokeWidth="2" markerEnd="url(#ots-arrow-red)" />

                  {/* Node 2 */}
                  <rect x="320" y="25" width="250" height="78" rx="12" fill="#7F1D1D" stroke="#EF4444" strokeWidth="2" />
                  <text x="336" y="48" fill="#FECACA" fontSize="11" fontWeight="700">GATE 2 &bull; MANDATORY TRI-CHANNEL</text>
                  <text x="336" y="68" fill="#FFFFFF" fontSize="13" fontWeight="800">Serve OTS Revocation Notice</text>
                  <text x="336" y="86" fill="#FEE2E2" fontSize="11">RPAD + Email + WhatsApp (BSA s.63)</text>

                  {/* Arrow 2 -> 3 */}
                  <line x1="570" y1="64" x2="622" y2="64" stroke="#34D399" strokeWidth="2" markerEnd="url(#ots-arrow-emerald)" />

                  {/* Node 3 */}
                  <rect x="630" y="25" width="230" height="78" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
                  <text x="646" y="48" fill="#6EE7B7" fontSize="11" fontWeight="700">GATE 3 &bull; CBS ACCOUNTING</text>
                  <text x="646" y="68" fill="#FFFFFF" fontSize="13" fontWeight="800">Appropriate 10–25% Token</text>
                  <text x="646" y="86" fill="#D1FAE5" fontSize="11">Credit to original interest/dues (s.60)</text>

                  {/* Vertical Trunk from Gate 3 & Gate 2 */}
                  <line x1="445" y1="103" x2="445" y2="152" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#ots-arrow-amber)" />

                  {/* Decision Diamond / Central Hub */}
                  <rect x="275" y="160" width="340" height="64" rx="12" fill="#1E293B" stroke="#FBBF24" strokeWidth="2" />
                  <text x="295" y="185" fill="#FCD34D" fontSize="11" fontWeight="700">GATE 4 &bull; ENFORCEMENT &amp; WRIT BRANCHING</text>
                  <text x="295" y="206" fill="#FFFFFF" fontSize="13" fontWeight="800">Identify Active Security &amp; Litigation Forum</text>

                  {/* Branch Lines */}
                  <line x1="340" y1="224" x2="145" y2="268" stroke="#34D399" strokeWidth="2" markerEnd="url(#ots-arrow-emerald)" />
                  <line x1="445" y1="224" x2="445" y2="268" stroke="#EF4444" strokeWidth="2" markerEnd="url(#ots-arrow-red)" />
                  <line x1="550" y1="224" x2="735" y2="268" stroke="#FBBF24" strokeWidth="2" markerEnd="url(#ots-arrow-amber)" />

                  {/* Branch A: SARFAESI */}
                  <rect x="20" y="275" width="250" height="84" rx="12" fill="#0F172A" stroke="#10B981" strokeWidth="1.5" />
                  <text x="36" y="298" fill="#34D399" fontSize="11" fontWeight="700">TRACK A &bull; SECURED NPA</text>
                  <text x="36" y="317" fill="#FFFFFF" fontSize="12.5" fontWeight="800">Resume SARFAESI Auction</text>
                  <text x="36" y="335" fill="#94A3B8" fontSize="10.5">15-day Rule 9(1) Sale Notice; no</text>
                  <text x="36" y="349" fill="#94A3B8" fontSize="10.5">fresh s.13(2) required (CELIR LLP)</text>

                  {/* Branch B: High Court Writ */}
                  <rect x="315" y="275" width="260" height="84" rx="12" fill="#0F172A" stroke="#EF4444" strokeWidth="1.5" />
                  <text x="331" y="298" fill="#F87171" fontSize="11" fontWeight="700">TRACK B &bull; ART. 226 WRIT FILED</text>
                  <text x="331" y="317" fill="#FFFFFF" fontSize="12.5" fontWeight="800">Lodge Caveat &amp; Counter</text>
                  <text x="331" y="335" fill="#94A3B8" fontSize="10.5">Cite Arvindra Electronics &amp; Bijnor</text>
                  <text x="331" y="349" fill="#94A3B8" fontSize="10.5">Co-op to dismiss extension plea</text>

                  {/* Branch C: DRT / Lok Adalat */}
                  <rect x="610" y="275" width="250" height="84" rx="12" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5" />
                  <text x="626" y="298" fill="#FBBF24" fontSize="11" fontWeight="700">TRACK C &bull; DRT / LOK ADALAT</text>
                  <text x="626" y="317" fill="#FFFFFF" fontSize="12.5" fontWeight="800">Execute Revived RC / Award</text>
                  <text x="626" y="335" fill="#94A3B8" fontSize="10.5">Invoke Consent Default Clause for</text>
                  <text x="626" y="349" fill="#94A3B8" fontSize="10.5">full OA sum + s.18 limitation reset</text>
                </svg>
              </div>

              {/* Mobile Stacked Cards Fallback */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  {
                    step: "01",
                    title: "T+1 Day Default Verification",
                    desc: "Verify expired tranche date under Contract Act s.55, lock CBS auto-waiver flags, and freeze the No-Lien Account.",
                  },
                  {
                    step: "02",
                    title: "Tri-Channel OTS Revocation Notice",
                    desc: "Serve formal Cancellation & Full Liability Revival Notice via Speed Post RPAD, email, and WhatsApp with BSA 2023 s.63 proof.",
                  },
                  {
                    step: "03",
                    title: "Appropriate 10%–25% Upfront Token",
                    desc: "Transfer No-Lien deposit against revived interest/expenses under Contract Act ss.59–61 and issue revised CBS statement.",
                  },
                  {
                    step: "04",
                    title: "Parallel SARFAESI / DRT / Caveat Execution",
                    desc: "Publish 15-day Rule 9(1) e-auction notice, execute DRT Recovery Certificate for full OA claim, and lodge High Court caveats citing Arvindra Electronics.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 text-white border border-slate-800"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Supreme Court Writ Bar */}
            <section
              id="heading-sc-article-226-bar"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Supreme Court Mandate
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Arvindra Electronics &amp; Bijnor Co-op: Article 226 Writ Bar
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Historically, bank recovery heads dreaded High Court writ petitions because courts frequently exercised equitable sympathy to grant defaulting borrowers 6-to-12-month extensions on expired OTS schedules. Two decisive Supreme Court judgments have permanently closed that judicial loophole, transforming OTS enforcement into a strict contractual right for Indian lenders.
              </p>

              <div className="space-y-4">
                {SC_PRECEDENTS.slice(0, 2).map((prec) => (
                  <div
                    key={prec.parties}
                    className="relative pl-5 pr-4 py-5 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#DC2626]" />
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-black uppercase tracking-wider text-[#DC2626]">
                        {prec.badge}
                      </span>
                      <span className="text-[11px] font-mono bg-slate-200/80 text-slate-800 px-2.5 py-0.5 rounded font-semibold">
                        {prec.citation}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1">
                      {prec.parties}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-3">{prec.date}</p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                      <strong className="text-slate-900">Ratio Decidendi:</strong> {prec.holding}
                    </p>
                    <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-800">
                      <strong className="text-[#DC2626]">Operational Takeaway for Bank Counsel:</strong>{" "}
                      {prec.takeaway}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Dark-Header Statutory Matrix */}
            <section
              id="heading-statutory-matrix"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Legal Architecture Matrix
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Statutory Matrix: Time Essence, Deposit Adjustment &amp; Revival
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A bulletproof OTS revocation does not rely on RBI policy alone; it coordinates six statutory instruments simultaneously so the borrower cannot escape through civil, writ, DRT, or limitation technicalities.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider">
                        Statute / RBI Directive
                      </th>
                      <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-amber-300">
                        Borrower Defense Plea
                      </th>
                      <th className="py-3.5 px-4 font-bold text-xs uppercase tracking-wider text-emerald-300">
                        Creditor Revocation &amp; Revival Shield
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                        <span className="block text-[11px] font-mono text-slate-500 font-normal">
                          Section 55 (Time as Essence)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Claims delay of 30–90 days was minor and bank impliedly relaxed deadlines by negotiating.
                      </td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 font-medium text-emerald-950">
                        Express &ldquo;Time is the Essence&rdquo; stipulation plus immediate T+1 Revocation Notice makes the OTS voidable and automatically lapsed on default.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                        <span className="block text-[11px] font-mono text-slate-500 font-normal">
                          Sections 62 &amp; 63 (Conditional Novation)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Argues OTS novated original loan contract, capping recovery permanently at the discounted OTS figure.
                      </td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 font-medium text-emerald-950">
                        Draft OTS as a <em>conditional accord</em>—original debt discharges only upon 100% receipt within timeline; default revives original facility ab initio.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Indian Contract Act, 1872
                        <span className="block text-[11px] font-mono text-slate-500 font-normal">
                          Sections 59–61 &amp; 74 (Appropriation)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Demands full refund of 10%–25% upfront deposit upon OTS cancellation calling forfeiture penal.
                      </td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 font-medium text-emerald-950">
                        Appropriate No-Lien deposit directly towards admitted accrued interest, legal costs, and original principal—legally distinct from an unliquidated penalty.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Limitation Act, 1963
                        <span className="block text-[11px] font-mono text-slate-500 font-normal">
                          Sections 18 &amp; 19 (Fresh 3 Years)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Pleads original NPA recall is time-barred once DRT OA or civil suit is filed after failed OTS talks.
                      </td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 font-medium text-emerald-950">
                        Signed OTS offer/acceptance letter (s.18) and 10% upfront UTR payment (s.19) reset a fresh 3-year limitation period (<em>Dena Bank v. C. Shivakumar Reddy</em>).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        SARFAESI Act, 2002
                        <span className="block text-[11px] font-mono text-slate-500 font-normal">
                          Section 13(8) &amp; Rule 9(1) Proviso
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Files DRT s.17 SA demanding fresh 60-day Section 13(2) demand notice and 30-day auction wait.
                      </td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 font-medium text-emerald-950">
                        Non-Novation clause keeps prior s.13(2)/(4) intact; bank proceeds directly to 15-day subsequent e-auction notice; redemption ends at publication (<em>CELIR LLP</em>).
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        RBI Compromise Framework
                        <span className="block text-[11px] font-mono text-slate-500 font-normal">
                          Circular dated June 8, 2023
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Alleges arbitrary discrimination when bank refuses a second discounted OTS after prior breach.
                      </td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 font-medium text-emerald-950">
                        Board-approved policy norms, mandatory cooling-off discipline, and realizable security assessment justify strict rejection under <em>Bijnor Urban Co-op</em>.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Interactive 4 Failure Mode Tabs */}
            <section
              id="heading-ots-failure-scenarios"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Interactive Operational Playbooks
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  4 Broken OTS Failure Modes &amp; Bank Counter-Playbooks
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Select the exact commercial failure scenario facing your Stressed Asset Recovery Branch or Regional Legal Desk to review the borrower&rsquo;s tactical exploit, the drafting gap, and the four-step institutional counter-protocol.
              </p>

              <OtsRevocationScenarioTabs />
            </section>

            {/* Section 6: Exact Sanction & Revocation Clauses */}
            <section
              id="heading-ironclad-clauses"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Court-Tested Drafting Specimen
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Ironclad OTS Sanction &amp; Revocation Notice Clauses
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Litigation loss on broken OTS accounts happens at two exact drafting moments: first, when the NPA Settlement Committee issues an OTS Sanction Letter missing an ipso facto lapse and non-novation covenant; second, when the branch sends a polite reminder instead of a statutory Revocation &amp; Full Liability Revival Notice. Embed these two institutional clauses into your bank&rsquo;s OTS workflow.
              </p>

              <div className="grid grid-cols-1 gap-5">
                {/* Clause 1: OTS Sanction Letter Shield */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900 text-slate-100 p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-amber-400">
                      Clause A &bull; Mandatory OTS Sanction Letter Default &amp; Non-Novation Covenant
                    </span>
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      Signed by Borrower &amp; All Guarantors
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-200">
                    &ldquo;Time is strictly of the essence of this One-Time Settlement under Section 55 of the Indian Contract Act, 1872. This sanction operates strictly as a conditional concession and does NOT constitute novation under Section 62 of the Contract Act. Upon failure to remit any single OTS tranche on or before its stipulated due date, this OTS sanction shall stand automatically revoked and cancelled ipso facto without requiring further indulgence or extension. All concessions and waivers shall stand withdrawn ab initio; the entire original contractual debt, together with accrued contractual interest, penal charges, and legal expenses from the date of default, shall stand revived in full; all upfront and interim amounts held in the No-Lien Account shall be appropriated towards the revived original liability under Sections 59–61 of the Contract Act without refund; and all pending SARFAESI (ss. 13(2), 13(4), 14), DRT, NI Act s.138, and guarantee enforcement proceedings held in abeyance shall automatically resume from the exact stage left off. The Borrower and Guarantors expressly acknowledge the full subsisting debt liability under Section 18 of the Limitation Act, 1963.&rdquo;
                  </p>
                </div>

                {/* Clause 2: Formal OTS Revocation Notice */}
                <div className="rounded-2xl border border-red-200 bg-red-50/40 p-5 sm:p-6 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-200 pb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-[#DC2626]">
                      Clause B &bull; Operative Paragraph for T+1 OTS Revocation &amp; Debt Revival Legal Notice
                    </span>
                    <span className="text-[10px] font-mono bg-white text-[#DC2626] px-2 py-0.5 rounded border border-red-200">
                      Speed Post RPAD + Email + WhatsApp
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-mono leading-relaxed text-slate-800">
                    &ldquo;TAKE NOTICE that despite accepting the OTS Sanction Letter dated [Date] unconditionally, you have committed material default by failing to remit Tranche [No.] of ₹[Amount] due on [Due Date]. Accordingly, in strict enforcement of Default Clause [No.] of the OTS Sanction Letter and settled Supreme Court law in State Bank of India v. Arvindra Electronics Pvt. Ltd. (2023) 1 SCC 540 and Bijnor Urban Cooperative Bank Ltd. v. Meenal Agarwal (2023) 2 SCC 805, the Bank hereby formally records and notifies the irrevocable CANCELLATION AND REVOCATION of the said OTS. All concessions stand withdrawn ab initio. The upfront deposit of ₹[Upfront Amount] held in the No-Lien Account has been lawfully appropriated towards accrued interest and recovery costs against your original NPA facility. Your total revived contractual liability stands at ₹[Revived Total] as on [Date] plus future contractual interest. Any belated partial transfer made hereafter shall be appropriated solely against the revived debt without prejudice and shall NOT revive this cancelled OTS. Failing payment of the full revived dues within 7 days, the Authorized Officer shall immediately publish the 15-day subsequent SARFAESI e-auction notice under Rule 9(1) Proviso and proceed with DRT/Guarantor execution at your sole cost and risk.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Upfront Forfeiture vs No-Lien Appropriation */}
            <section
              id="heading-upfront-forfeiture"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Accounting &amp; Contract Law Precision
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Upfront Deposit Forfeiture vs No-Lien Account Appropriation
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A subtle drafting error costs banks lakhs of rupees before DRTs and High Courts: calling the 10%–25% OTS upfront token a &ldquo;forfeited penalty&rdquo; without crediting it to the borrower&rsquo;s revived loan account. Under Section 74 of the Indian Contract Act, 1872, courts scrutinize pure forfeiture clauses to verify whether the bank suffered uncompensated loss—and borrowers exploit this to demand a refund of their 10% upfront payment!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-sm font-black text-amber-900">
                    Risky Approach: Uncredited &ldquo;Pure Forfeiture&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed">
                    Keeping the 10% deposit in a bank sundry/suspense income head while simultaneously claiming 100% of the gross original debt without giving credit exposes the bank to Section 74 Contract Act unjust-enrichment challenges before DRT and High Courts.
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-2">
                  <h3 className="text-sm font-black text-emerald-900">
                    Court-Proof Approach: Lawful Appropriation to Original Dues
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-950/90 leading-relaxed">
                    Park the upfront 10%–25% strictly in a <strong>No-Lien Account</strong> during OTS pendency. Upon T+1 revocation, transfer the full deposit into the NPA loan ledger against (1) recovery/auction expenses, (2) uncharged contractual interest from NPA date, and (3) principal under Contract Act ss.59–61. The borrower gets zero cash refund, the bank retains 100% of the cash, and DRT upholds the credit automatically.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Worked Financial Revival Ledger */}
            <section
              id="heading-worked-revival-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Worked Institutional Computation
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Worked Revival Ledger: &#8377;1.45 Cr NPA vs Failed &#8377;85L OTS
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Consider a manufacturing SME Term Loan + Cash Credit NPA with a book ledger balance of ₹1.45 Crore and mortgaged industrial land valued at ₹1.85 Crore (Forced Sale Value ₹1.48 Crore). To avoid protracted auction litigation, the NPA Settlement Committee sanctions an ₹85.00 Lakh OTS payable as 10% upfront (₹8.50 Lakh) and balance ₹76.50 Lakh within 90 days. The borrower pays ₹8.50 Lakh to defer the auction, defaults on Day 90, and receives the Bank&rsquo;s T+1 Revocation Notice.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
                <div className="bg-slate-900 px-5 py-4 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block">
                      Revived NPA Liability Computation Statement
                    </span>
                    <p className="text-sm sm:text-base font-black text-white">
                      Contractual Revival After Broken ₹85.00L OTS (12.50% p.a. Contractual Rate)
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
                    +&#8377;85.37L Protected vs Expired OTS
                  </span>
                </div>

                <div className="bg-white divide-y divide-slate-200 text-xs sm:text-sm">
                  <div className="grid grid-cols-12 px-5 py-3 bg-slate-50 font-bold text-slate-700">
                    <span className="col-span-7 sm:col-span-8">Ledger Component</span>
                    <span className="col-span-5 sm:col-span-4 text-right">Amount (INR)</span>
                  </div>
                  <div className="grid grid-cols-12 px-5 py-3">
                    <span className="col-span-7 sm:col-span-8 text-slate-700">
                      Original NPA Book Balance as on NPA Classification Date (Ledger Principal + Unserviced Int.)
                    </span>
                    <span className="col-span-5 sm:col-span-4 text-right font-mono font-semibold text-slate-900">
                      &#8377;1,45,00,000
                    </span>
                  </div>
                  <div className="grid grid-cols-12 px-5 py-3">
                    <span className="col-span-7 sm:col-span-8 text-slate-700">
                      Revived Unapplied Contractual Interest (14 Months @ 12.50% p.a. simple on NPA ledger)
                    </span>
                    <span className="col-span-5 sm:col-span-4 text-right font-mono font-semibold text-slate-900">
                      + &#8377;21,14,583
                    </span>
                  </div>
                  <div className="grid grid-cols-12 px-5 py-3">
                    <span className="col-span-7 sm:col-span-8 text-slate-700">
                      Verified SARFAESI Valuation, Publication, Security Guard &amp; Legal Notice Costs
                    </span>
                    <span className="col-span-5 sm:col-span-4 text-right font-mono font-semibold text-slate-900">
                      + &#8377;4,22,500
                    </span>
                  </div>
                  <div className="grid grid-cols-12 px-5 py-3 bg-amber-50/70">
                    <span className="col-span-7 sm:col-span-8 font-bold text-amber-900">
                      Less: Appropriation of 10% Upfront OTS Deposit from No-Lien Account (Contract Act s.60)
                    </span>
                    <span className="col-span-5 sm:col-span-4 text-right font-mono font-bold text-amber-800">
                      &minus; &#8377;8,50,000
                    </span>
                  </div>
                  <div className="grid grid-cols-12 px-5 py-4 bg-emerald-50 border-t-2 border-emerald-500">
                    <span className="col-span-7 sm:col-span-8 font-black text-emerald-950 text-sm sm:text-base">
                      Net Revived Enforceable Claim for Rule 9(1) Auction &amp; DRT RC
                    </span>
                    <span className="col-span-5 sm:col-span-4 text-right font-mono font-black text-emerald-800 text-sm sm:text-base">
                      &#8377;1,61,87,083
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                <strong>Note on RBI Penal Charges Circular (effective April 1, 2024):</strong> Ensure the revived ledger computes post-NPA contractual interest cleanly without capitalizing penal charges; list any applicable non-capitalized penal charges on a separate memo line so DRT Presiding Officers pass zero deductions on the revived Statement of Account.
              </p>
            </section>

            {/* Section 9: Limitation Reset & BSA 2023 s.63 Dossier Checklist */}
            <section
              id="heading-limitation-bsa-dossier"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Court-Admissible Evidence Pack
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Limitation Act s.18/19 Reset &amp; BSA 2023 s.63 Dossier Checklist
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Even when a borrower breaks an OTS, the failed settlement yields an immense strategic litigation asset for the bank: a legally binding acknowledgment of debt under Section 18 and part-payment under Section 19 of the Limitation Act, 1963. Assemble this 8-item evidentiary dossier before serving the revocation notice or filing a High Court counter-affidavit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    num: "01",
                    title: "Borrower's Original Signed OTS Offer Letter",
                    desc: "Preserved in original ink or verified borrower email header; proves unequivocal admission of jural relationship under Limitation Act s.18 (Dena Bank v. C. Shivakumar Reddy).",
                  },
                  {
                    num: "02",
                    title: "Counter-Signed OTS Sanction Letter with Default Clause",
                    desc: "Bearing signatures of Borrower, Co-Borrowers, and Personal Guarantors acknowledging 'Time as Essence' (s.55) and automatic revival on default.",
                  },
                  {
                    num: "03",
                    title: "No-Lien Account Ledger & UTR Remittance Trail",
                    desc: "Proves exact receipt date and value of the 10%–25% upfront deposit (triggering Limitation Act s.19) and subsequent appropriation transfer entry into NPA ledger.",
                  },
                  {
                    num: "04",
                    title: "T+1 OTS Revocation Notice & Tri-Channel Dispatch Proof",
                    desc: "India Post Speed Post RPAD receipt + online tracking confirmation, registered email SMTP headers, and WhatsApp delivery receipts.",
                  },
                  {
                    num: "05",
                    title: "BSA 2023 Section 63 Electronic Evidence Certificate",
                    desc: "Mandatory Part A (Party/Branch Officer) and Part B (IT/System Expert) certificate authenticating emailed OTS correspondence, WhatsApp service logs, and CBS extracts.",
                  },
                  {
                    num: "06",
                    title: "Bankers' Books Evidence Act s.2A & s.4 Certified Ledger",
                    desc: "Separating principal, unapplied contractual interest, non-capitalized penal charges, and the credited No-Lien adjustment to show net revived dues.",
                  },
                  {
                    num: "07",
                    title: "Fresh Independent Property Valuation Report (< 1 Year)",
                    desc: "Crucial under Bijnor Urban Co-op Bank v. Meenal Agarwal to demonstrate to the High Court that realizable collateral value exceeds the failed OTS offer.",
                  },
                  {
                    num: "08",
                    title: "High Court & DRT Advance Caveat (CPC s.148A)",
                    desc: "Lodged immediately upon OTS revocation so the borrower cannot obtain an ex-parte stay order against the fresh 15-day Rule 9(1) e-auction notice.",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50/70"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#DC2626] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {item.num}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 10: Dual-Track B2B Conversion CTA */}
            <section id="heading-ots-cta" className="scroll-mt-28">
              <h2 className="sr-only">
                Issue an OTS Revocation Notice or Onboard Zonal NPA Desk
              </h2>
              <OtsRevocationCTA />
            </section>

            {/* Section 11: Mandatory Internal Linking Cluster */}
            <section
              id="heading-related-bank-hub"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Connected IND-01 Banking Ecosystem
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Related Bank NPA Guides, Forum Calculator &amp; Recall Template
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/tools/sarfaesi-drt-bank-recovery-forum-calculator"
                  className="group p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 hover:border-emerald-500 transition-all space-y-1"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                    Interactive T1 Calculator
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626]">
                    SARFAESI vs DRT Bank Recovery Forum Calculator &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verify post-revival forum eligibility, ₹20L DRT threshold, e-DRT court fees, and SARFAESI auction timelines.
                  </p>
                </Link>

                <Link
                  href="/templates/bank-loan-recall-cum-guarantee-invocation-notice"
                  className="group p-4 rounded-xl border-2 border-red-200 bg-red-50/40 hover:border-[#DC2626] transition-all space-y-1"
                >
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">
                    Editable P1 Legal Template
                  </span>
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-[#DC2626]">
                    Bank Loan Recall &amp; Guarantee Invocation Notice Pack &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Draft simultaneous borrower recall and Section 128 personal guarantor invocation notices after OTS cancellation.
                  </p>
                </Link>

                <Link
                  href="/send-a-legal-notice/for-banks-to-recover-their-unpaid-dues"
                  className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626]/50 transition-all space-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Core Bank Service
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Send Legal Notice for Banks to Recover Unpaid Dues &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fact-verified institutional notices with tri-channel proof for NPA recall, OTS revocation, and guarantee invocation.
                  </p>
                </Link>

                <Link
                  href="/law/lok-adalat-pre-litigation-money-recovery"
                  className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626]/50 transition-all space-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Statutory Compromise Execution
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Lok Adalat Pre-Litigation Settlement &amp; Section 21 Award &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Convert compromise settlements into binding non-appealable civil decrees with automatic default revival triggers.
                  </p>
                </Link>

                <Link
                  href="/bank-loan-recovery-below-20-lakhs-drt-threshold-options"
                  className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626]/50 transition-all space-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Sub-₹20L Revived Claims
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Bank Loan Recovery Below ₹20 Lakhs (Outside DRT) &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compare Order 37 Summary Suits, PSS Act s.25, Commercial Court s.12A, and Arbitration when revived dues fall under ₹20L.
                  </p>
                </Link>

                <Link
                  href="/bulk-recovery-cases-all-in-one-affordable-solutions"
                  className="group p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#DC2626]/50 transition-all space-y-1"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Enterprise Bulk NPA Desk
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#DC2626]">
                    Bulk Bank Recovery Cases &amp; Automated CSV Notice Desk &rarr;
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Batch-process 10 to 10,000+ broken OTS revocation notices, Lok Adalat summons, and SARFAESI reminders at flat institutional cost.
                  </p>
                </Link>
              </div>
            </section>

            {/* Section 12: FAQ Accordion */}
            <section
              id="heading-faq"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-5"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  NPA Committee Reference
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  FAQs: Broken OTS Revocation, Upfront Deposit &amp; Writ Defense
                </h2>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
                {FAQS.map((faq, idx) => (
                  <details key={idx} className="group bg-white open:bg-slate-50/70 transition-colors">
                    <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none font-bold text-sm sm:text-base text-slate-900 hover:text-[#DC2626]">
                      <span>{faq.question}</span>
                      <span className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-[#DC2626] group-open:text-white text-slate-600 flex items-center justify-center shrink-0 text-sm font-mono transition-colors">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Section 13: Verified Precedents & Statutory Sources */}
            <section
              id="heading-primary-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DC2626] block mb-1">
                  Authoritative Citations &amp; Bare Acts
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Verified Statutes, Supreme Court Rulings &amp; RBI Directives
                </h2>
              </div>

              {/* Additional SC Precedents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SC_PRECEDENTS.slice(2).map((prec) => (
                  <div
                    key={prec.parties}
                    className="relative pl-4 pr-4 py-4 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden space-y-2"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626] block">
                      {prec.badge}
                    </span>
                    <h3 className="text-sm font-black text-slate-900">{prec.parties}</h3>
                    <p className="text-[11px] font-mono text-slate-500">{prec.citation}</p>
                    <p className="text-xs text-slate-700 leading-relaxed">{prec.holding}</p>
                  </div>
                ))}
              </div>

              {/* Bare Act External Links */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                  Official Statutory &amp; RBI Reference Portals
                </span>
                <ul className="space-y-2">
                  {PRIMARY_SOURCES.map((source) => (
                    <li
                      key={source.title}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] mt-2 shrink-0" />
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-slate-800 hover:text-[#DC2626] underline underline-offset-2 transition-colors"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fact Verification & Institutional Disclaimer Box */}
              <div className="bg-slate-900 text-slate-200 rounded-xl p-4 sm:p-5 text-xs leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="font-bold text-white block mb-1">
                    Legal Editorial Attribution &mdash; Anuj Anand Malik, Advocate &amp; Founder (AMA Legal Solutions)
                  </span>
                  <p className="text-slate-400">
                    Prepared for Scheduled Commercial Banks, Small Finance Banks, Cooperative Banks, and ARCs. Board-approved OTS scheme terms vary by institution under the RBI June 8, 2023 Compromise Framework; obtain case-specific fact verification prior to DRT or High Court filing.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400 shrink-0">
                  Updated: 19 Nov 2026
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer Cluster Cross-Links */}
      <RelatedRecoveryGuides cluster="banking" />
    </div>
  );
}

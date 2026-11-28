import Link from "next/link";
import SectionHub, { hubMetadata, type HubGroup } from "@/components/SectionHub";

export const revalidate = 86400;

const TITLE = "Free Legal Recovery Calculators and Tools (India)";
const DESCRIPTION =
  "Free calculators for gratuity, full and final settlement, cheque bounce deadlines, limitation, MSME interest, RERA refunds and court fees in India.";

export const metadata = hubMetadata({ path: "/tools", title: TITLE, description: DESCRIPTION });

const GROUPS: HubGroup[] = [
  {
    heading: "Salary and employment",
    items: [
      { slug: "full-and-final-settlement-calculator", title: "Full and Final Settlement Calculator", desc: "Pending salary, leave encashment, notice-period recovery, gratuity and bonus, with the law behind each line." },
      { slug: "gratuity-calculator", title: "Gratuity Calculator", desc: "Gratuity under the 15/26 formula, with eligibility and the fixed-term employee rule." },
      { slug: "notice-period-recovery-calculator", title: "Notice Period Recovery Calculator", desc: "Check whether your employer is deducting more notice pay than it lawfully can, on basic or gross salary." },
    ],
  },
  {
    heading: "Cheques, time limits and court fees",
    items: [
      { slug: "cheque-bounce-deadline-calculator", title: "Cheque Bounce Deadline Calculator", desc: "Enter the return-memo date to get the 30-day notice deadline, the 15-day payment window and the complaint filing date under Section 138." },
      { slug: "limitation-period-calculator", title: "Limitation Period Calculator", desc: "Check whether a money, cheque, consumer or salary claim is still in time, including extensions from acknowledgment or part-payment." },
      { slug: "commercial-court-specified-value-fee-interest-calculator", title: "Commercial Court Fee and Interest Calculator", desc: "Principal plus pre-suit interest under Section 12 of the Commercial Courts Act, with court fees compared across six states." },
    ],
  },
  {
    heading: "Consumer and property",
    items: [
      { slug: "consumer-commission-fee-jurisdiction-calculator", title: "Consumer Commission Fee and Jurisdiction Calculator", desc: "Enter the claim value to see which consumer commission hears it and the filing fee payable." },
      { slug: "rera-refund-interest-calculator", title: "RERA Refund Interest Calculator", desc: "The interest a builder owes on a refund or delay compensation under RERA Section 18, using state rules on MCLR plus 2%." },
    ],
  },
  {
    heading: "Business and MSME",
    items: [
      { slug: "msme-delayed-payment-interest-calculator", title: "MSME Delayed Payment Interest Calculator", desc: "Compound interest at three times the RBI bank rate on overdue MSME invoices, with a downloadable claim summary." },
      { slug: "b2b-debt-recovery-legal-forum-selector", title: "B2B Recovery Forum Selector", desc: "Answer six questions to rank the routes open to you: IBC Section 8, DRT, SARFAESI, Section 25 PSS Act, MSME ODR and Order 37." },
      { slug: "blocked-gst-itc-vendor-default-interest-calculator", title: "Blocked GST ITC and Vendor Indemnity Calculator", desc: "Blocked input tax credit, Section 50 interest at 18% and DRC-01 penalties caused by a vendor's non-filing, and the amount to claim back." },
      { slug: "construction-retention-dlp-escalation-claim-calculator", title: "Construction Retention and DLP Calculator", desc: "Retention release dates, defect-liability expiry, interest and the three-year limitation cut-off for construction bills." },
      { slug: "softex-fema-export-realization-deadline-calculator", title: "Export Realisation Deadline Calculator (FEMA)", desc: "Your nine-month RBI EDPMS realisation deadline, and whether the bill qualifies for write-off by the AD bank." },
      { slug: "hospital-tpa-delayed-claim-interest-calculator", title: "Hospital TPA Delayed Claim Interest Calculator", desc: "Penal interest insurers and TPAs owe hospitals on delayed cashless claims, at bank rate plus 2% under IRDAI norms." },
    ],
  },
  {
    heading: "Banks and lenders",
    items: [
      { slug: "sarfaesi-drt-bank-recovery-forum-calculator", title: "Bank Recovery Forum Selector: SARFAESI, DRT or IBC", desc: "Enter lender type, dues, collateral and borrower entity to check eligibility, 60-day dates and DRT fees." },
      { slug: "section-25-nach-bounce-limitation-calculator", title: "e-NACH Bounce Deadline Calculator (Section 25)", desc: "Enter the return-memo and notice-delivery dates to get the 30-day notice, 15-day cure and 30-day filing deadlines." },
    ],
  },
];

export default function ToolsHubPage() {
  return (
    <SectionHub
      path="/tools"
      crumb="Tools"
      schemaName={TITLE}
      heading="Free Recovery Calculators and Tools"
      intro={(count) => (
        <>
          {count} free calculators for working out what you are owed and how long you have to claim it. Each one shows the law behind the result. Once you have a figure, you can{" "}
          <Link href="/send-legal-notice-online-india" className="text-red-400 underline font-semibold">send a legal notice online</Link>.
        </>
      )}
      groups={GROUPS}
      moreHeading="More tools"
      relatedHeading="Use the result"
      related={[
        { href: "/templates", label: "Free letter and notice templates" },
        { href: "/law", label: "The laws behind these calculators, explained" },
        { href: "/legal-notice-charges", label: "What a legal notice costs" },
        { href: "/industries", label: "Business debt recovery by industry" },
      ]}
    />
  );
}

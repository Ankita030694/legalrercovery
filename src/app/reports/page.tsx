import Link from "next/link";
import SectionHub, { hubMetadata, type HubGroup } from "@/components/SectionHub";

export const revalidate = 86400;

const TITLE = "Legal Recovery Reports and Data Studies (India)";
const DESCRIPTION =
  "Reports on refund delays, salary and FnF disputes, legal notice outcomes, consumer commission awards and B2B payment delays in India.";

export const metadata = hubMetadata({ path: "/reports", title: TITLE, description: DESCRIPTION });

const GROUPS: HubGroup[] = [
  {
    heading: "Consumers and employees",
    items: [
      { slug: "refund-delay-index-india", title: "Refund Delay Index", desc: "Median days to refund by company and sector, before and after a legal notice." },
      { slug: "consumer-commission-awards-tracker", title: "Consumer Commission Awards Tracker", desc: "A monthly roundup of consumer commission orders against e-commerce sites, airlines, banks and builders." },
      { slug: "salary-fnf-dispute-report-2026", title: "Salary and FnF Dispute Report 2026", desc: "Unpaid salary and FnF disputes after the Code on Wages: delays, amounts, sectors and how fast employers paid after notice." },
      { slug: "legal-notice-outcomes-study", title: "Legal Notice Outcomes Study", desc: "The share of legal notices that settle within 15, 30 and 60 days, by dispute type." },
    ],
  },
  {
    heading: "Businesses and lenders",
    items: [
      { slug: "state-of-b2b-delayed-payments-commercial-recovery-india-2026", title: "State of B2B Delayed Payments 2026–27", desc: "Industry DSO, the effect of Section 43B(h) and pre-litigation recovery across 25 B2B sectors." },
      { slug: "nbfc-digital-lending-legal-recovery-benchmarks-india", title: "NBFC and Fintech Recovery Benchmarks", desc: "Resolution timelines and cure rates by channel for NBFC and SME loan recovery: WhatsApp, email and registered post." },
      { slug: "indian-exporter-payment-defaults-edpms-trends-report", title: "Exporter Payment Defaults and EDPMS Trends", desc: "Buyer default by trade corridor and payment term, and recovery of RBI EDPMS write-offs." },
      { slug: "healthcare-tpa-settlement-delay-hospital-receivables-india", title: "Hospital Receivables and TPA Delay Index", desc: "Days sales outstanding across cashless TPAs, government schemes, corporate credit and patient undertakings." },
    ],
  },
];

export default function ReportsHubPage() {
  return (
    <SectionHub
      path="/reports"
      crumb="Reports"
      schemaName={TITLE}
      heading="Reports and Data Studies"
      intro={(count) => (
        <>
          {count} reports on how money disputes play out in India: how long refunds take, how often notices settle, and where business payments get stuck. For guidance on your own case, see the{" "}
          <Link href="/recovery" className="text-red-400 underline font-semibold">recovery directory</Link>.
        </>
      )}
      groups={GROUPS}
      moreHeading="More reports"
      relatedHeading="Related"
      related={[
        { href: "/industries", label: "Business debt recovery by industry" },
        { href: "/law", label: "Money recovery law, explained" },
        { href: "/tools", label: "Free recovery calculators and tools" },
      ]}
    />
  );
}

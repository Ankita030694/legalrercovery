import Link from "next/link";
import SectionHub, { hubMetadata, type HubGroup } from "@/components/SectionHub";

export const revalidate = 86400;

const TITLE = "Legal Notice to a Company in India: Refund Guides by Brand";
const DESCRIPTION =
  "Refund stuck with Amazon, Swiggy, Zomato, IndiGo, MakeMyTrip, IRCTC or another company? Find the escalation steps and legal notice guide for each brand.";

export const metadata = hubMetadata({ path: "/legal-notice-to", title: TITLE, description: DESCRIPTION });

const GROUPS: HubGroup[] = [
  {
    heading: "Online shopping and electronics",
    items: [
      { slug: "amazon", title: "Amazon", desc: "Refund stuck, wrong item or a seller refusing a return: the grievance-officer route and a legal notice to Amazon." },
      { slug: "myntra", title: "Myntra", desc: "Refund marked processed but not credited: trace the ARN, use the grievance officer timeline, then escalate." },
      { slug: "meesho", title: "Meesho", desc: "Refund shows successful but never arrived, or a wrong item: seller versus Meesho liability and deadlines." },
      { slug: "ajio", title: "AJIO", desc: "Refund initiated but not received: refund timelines, how to trace it, and a notice to AJIO and Reliance Retail." },
      { slug: "nykaa", title: "Nykaa", desc: "Refund delayed or a suspected counterfeit: consumer rights, evidence to keep and how to escalate." },
      { slug: "tata-cliq", title: "Tata CLiQ", desc: "Refund or replacement stuck: grievance officer timelines under the E-Commerce Rules." },
      { slug: "jiomart", title: "JioMart", desc: "Refund pending or wrong items delivered: step-by-step escalation and the consumer-law basis." },
      { slug: "croma-reliance-digital", title: "Croma and Reliance Digital", desc: "Replacement refused for a defective gadget: warranty versus consumer rights." },
    ],
  },
  {
    heading: "Food and grocery delivery",
    items: [
      { slug: "swiggy", title: "Swiggy and Instamart", desc: "Refund not credited or wrongly denied: platform liability and refund timelines." },
      { slug: "zomato", title: "Zomato", desc: "Refund not received or order never delivered: timelines, evidence and escalation steps." },
      { slug: "blinkit", title: "Blinkit", desc: "Missing items, a wrong order or no refund: quick-commerce liability and the proof to keep." },
      { slug: "zepto", title: "Zepto", desc: "Refund missing or wrong delivery: consumer commission orders against Zepto and the escalation timeline." },
      { slug: "bigbasket", title: "BigBasket", desc: "Refund to source account missing: how to trace it and use the grievance route." },
    ],
  },
  {
    heading: "Airlines",
    items: [
      { slug: "indigo", title: "IndiGo", desc: "Refund pending or forced into a credit shell: DGCA refund deadlines and AirSewa escalation." },
      { slug: "air-india", title: "Air India", desc: "Refund delayed for weeks: DGCA deadlines, AirSewa and consumer-court options." },
      { slug: "spicejet", title: "SpiceJet", desc: "Refund overdue or a flight cancelled without refund: DGCA rules and consumer-court precedents." },
      { slug: "akasa-air", title: "Akasa Air", desc: "Refund pending: the DGCA timeline that applies and how to escalate." },
    ],
  },
  {
    heading: "Travel booking and stays",
    items: [
      { slug: "makemytrip", title: "MakeMyTrip", desc: "Whether the airline or MakeMyTrip owes you, and the 2026 DGCA rule on agents." },
      { slug: "goibibo", title: "Goibibo", desc: "Refund pending for a flight, bus or hotel: deadlines and who is liable." },
      { slug: "cleartrip", title: "Cleartrip", desc: "Refund not received after cancellation: deadlines and airline-versus-agent liability." },
      { slug: "easemytrip", title: "EaseMyTrip", desc: "Refund issue unresolved: timelines, documents to keep and escalation." },
      { slug: "irctc", title: "IRCTC", desc: "TDR rejected or refund missing: commission orders against IRCTC and the escalation path." },
      { slug: "redbus", title: "redBus", desc: "Refund after a cancelled bus: operator versus platform liability and timelines." },
      { slug: "oyo", title: "OYO", desc: "Refund pending or check-in denied: your consumer rights and the evidence to collect." },
    ],
  },
  {
    heading: "Rides, home services and rentals",
    items: [
      { slug: "ola-uber-rapido", title: "Ola, Uber and Rapido", desc: "Overcharged ride, wrong cancellation fee or pending refund: how to escalate." },
      { slug: "urban-company", title: "Urban Company", desc: "Damage during a service or a refund dispute: platform versus professional liability." },
      { slug: "nobroker", title: "NoBroker", desc: "Money-back plan or token refund not received: read the plan terms and escalate in writing." },
    ],
  },
];

export default function LegalNoticeToHubPage() {
  return (
    <SectionHub
      path="/legal-notice-to"
      crumb="Legal Notice to a Company"
      schemaName={TITLE}
      heading="Legal Notice to a Company: Guides by Brand"
      intro={(count) => (
        <>
          {count} guides to getting a refund or compensation from a specific company. Each covers the complaint route to try first, the deadlines that apply and when a legal notice makes sense. If your company is not listed, start with{" "}
          <Link href="/how-to-file-consumer-complaint-india" className="text-red-400 underline font-semibold">how to file a consumer complaint in India</Link>.
        </>
      )}
      groups={GROUPS}
      moreHeading="More company guides"
      relatedHeading="Related refund guides"
      related={[
        { href: "/flipkart-return-refund-complaint", label: "Flipkart return rejected or refund delayed" },
        { href: "/legal-notice-to-retailer-wrong-damaged-product-delivery", label: "Wrong, broken or damaged product delivered" },
        { href: "/e-jagriti-consumer-complaint-guide", label: "Filing a consumer complaint on e-Jagriti" },
        { href: "/law/ecommerce-rules-grievance-officer-48-hours", label: "E-Commerce Rules: the 48-hour grievance duty" },
        { href: "/services/refunds-and-consumer-complaints", label: "Refunds and consumer complaints service" },
      ]}
    />
  );
}

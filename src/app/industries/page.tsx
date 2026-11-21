import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const revalidate = 86400;

const PAGE_URL = `${SITE_URL}/industries`;
const TITLE = "Business Debt Recovery by Industry in India: 25 Sectors";
const DESCRIPTION =
  "Sector-specific legal recovery guides for 25 Indian industries: banks, NBFCs, construction, manufacturing, logistics, pharma, IT, hospitality and more.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: { index: true, follow: true },
};

type Industry = { slug: string; title: string; desc: string };

const GROUPS: { heading: string; items: Industry[] }[] = [
  {
    heading: "Banking and lending",
    items: [
      { slug: "banks-loan-recovery", title: "Banks", desc: "Loan recall and NPA recovery notices for PSU, private, small finance and cooperative banks, with bulk dispatch." },
      { slug: "nbfc-fintech-loan-recovery", title: "NBFCs, fintech lenders, HFCs and MFIs", desc: "Bulk legal notices across large loan books, including e-NACH bounce notices and reply handling." },
    ],
  },
  {
    heading: "Construction, real estate and energy",
    items: [
      { slug: "construction-epc-contractor-recovery", title: "Construction, EPC and MEP contractors", desc: "Uncertified running account bills, retention money, extra-item variations and dues from developers and PSUs." },
      { slug: "builders-commercial-landlords-coworking-recovery", title: "Developers, commercial landlords and co-working", desc: "Allottee defaults, lock-in breaches, CAM and utility arrears, and unpaid co-working seat contracts." },
      { slug: "chemicals-steel-rmc-building-materials-recovery", title: "RMC, steel, building materials and chemicals", desc: "Site and factory supply ledgers owed by builders, EPC contractors and plants." },
      { slug: "equipment-rental-machinery-leasing-recovery", title: "Equipment rental and leasing", desc: "Unpaid hire bills for cranes, scaffolding, DG sets and IT equipment, plus recovery of unreturned assets." },
      { slug: "solar-renewable-ev-power-recovery", title: "Solar, renewable energy and EV charging", desc: "Commissioning balances for rooftop solar, PPA payment defaults, dealer credit and EV fleet-hub dues." },
    ],
  },
  {
    heading: "Manufacturing and trade",
    items: [
      { slug: "manufacturing-machinery-oem-recovery", title: "Manufacturing, machinery and OEM suppliers", desc: "Withheld commissioning balances, debit notes, cancelled tooling costs, job-work dues and dealer ledgers." },
      { slug: "packaging-printing-paper-mill-recovery", title: "Packaging, printing and paper mills", desc: "Overdue carton and pouch bills, cylinder costs and custom-printed stock that buyers never lifted." },
      { slug: "textiles-apparel-garment-recovery", title: "Textiles, garments, fabric and yarn", desc: "Overdue fabric and yarn bills, sale-or-return disputes and defaults on broker-mediated sales." },
      { slug: "mining-minerals-fuel-scrap-commodity-recovery", title: "Coal, minerals, metal scrap and fuel", desc: "Quality and sampling debit notes on bulk commodity supplies, and recovery from mills and plants." },
      { slug: "exporters-cross-border-trade-recovery", title: "Exporters and cross-border trade", desc: "Unpaid export bills from overseas buyers, alongside ECGC claim and RBI EDPMS compliance." },
    ],
  },
  {
    heading: "Distribution, consumer goods and agriculture",
    items: [
      { slug: "fmcg-distributors-super-stockist-recovery", title: "FMCG, consumer durables and D2C brands", desc: "Overdue dealer and distributor ledgers, and deductions by quick-commerce and modern-trade channels." },
      { slug: "franchisors-brand-licensors-oem-dealership-recovery", title: "Franchisors, brand licensors and OEM networks", desc: "Royalty arrears, commissary bills and former franchisees who keep using the brand." },
      { slug: "agri-inputs-cold-storage-food-processing-recovery", title: "Agri-inputs, cold storage and food processing", desc: "Seasonal dealer credit, cold-storage rent and lien, and wholesale ledgers of mills and processors." },
      { slug: "pharma-medical-devices-recovery", title: "Pharma and medical devices", desc: "Chemist and stockist ledgers, hospital consignment stock, equipment instalments and contract-manufacturing invoices." },
      { slug: "logistics-freight-3pl-recovery", title: "Logistics, transport and 3PL", desc: "Freight ledgers, truck detention, container demurrage, customs duty advances and warehouse storage bills." },
    ],
  },
  {
    heading: "Technology and professional services",
    items: [
      { slug: "it-saas-software-recovery", title: "IT services, SaaS and cloud", desc: "Stalled project milestones, unpaid subscriptions, time-and-material invoices and overseas client receivables." },
      { slug: "telecom-isp-datacenter-msp-recovery", title: "Telecom, ISPs and data centres", desc: "Leased-line and colocation dues, messaging and voice usage bills, and unreturned network equipment." },
      { slug: "staffing-recruitment-manpower-recovery", title: "Recruitment, staffing and facility management", desc: "Placement fees, backdoor hires, and overdue payroll, security and housekeeping invoices." },
      { slug: "advertising-marketing-media-event-recovery", title: "Advertising, marketing, media and events", desc: "Unpaid retainers, media spend paid on a client's behalf, production balances and post-event dues." },
      { slug: "ca-architects-consultants-professional-fee-recovery", title: "CAs, architects, engineers and advisors", desc: "Professional and success-fee recovery that stays within ICAI, Council of Architecture and Bar rules." },
    ],
  },
  {
    heading: "Healthcare, education and hospitality",
    items: [
      { slug: "hospitals-doctors-healthcare-recovery", title: "Hospitals, doctors and diagnostics", desc: "Post-discharge patient bills, delayed insurer and TPA claims, government scheme arrears and lab dues." },
      { slug: "schools-universities-edtech-b2b-recovery", title: "Schools, universities and edtech", desc: "Unpaid school and hostel fees, and dues owed to publishers, edtech vendors and skill-training providers." },
      { slug: "hotels-banquets-corporate-travel-recovery", title: "Hotels, banquets and corporate travel", desc: "Bill-to-company hotel accounts, corporate ticketing defaults, banquet balances and event attrition charges." },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

const ITEMLIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: TITLE,
  itemListElement: ALL.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `${SITE_URL}/industries/${t.slug}`,
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: PAGE_URL },
  ],
};

export default function IndustriesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <div className="w-full min-h-screen bg-slate-50 text-slate-900">
        <section className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800">
          <div className="max-w-5xl mx-auto w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
              Business Debt Recovery by Industry
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
              {ALL.length} sector guides to recovering unpaid business dues in India. Each one covers the disputes that come up in that sector, the law that applies and the notice to send. For how the service works across sectors, see{" "}
              <Link href="/b2b-debt-recovery-india" className="text-red-400 underline font-semibold">B2B debt recovery in India</Link>.
            </p>
          </div>
        </section>

        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16 space-y-10 sm:space-y-12">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }]} />

          {GROUPS.map((g) => (
            <section key={g.heading} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{g.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {g.items.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/industries/${t.slug}`}
                    className="block bg-white rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-[#DC2626] hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-slate-900 mb-1.5">{t.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">Recovery help for any business</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-slate-700">
              <li><Link href="/recovery-of-unpaid-dues-for-my-business" className="text-red-600 underline">Recover unpaid dues for your business</Link></li>
              <li><Link href="/bulk-recovery-cases-all-in-one-affordable-solutions" className="text-red-600 underline">Bulk recovery for many cases at once</Link></li>
              <li><Link href="/tools/b2b-debt-recovery-legal-forum-selector" className="text-red-600 underline">Which forum to use: MSME council, summary suit, IBC or DRT</Link></li>
              <li><Link href="/templates" className="text-red-600 underline">Free letter and notice templates</Link></li>
              <li><Link href="/send-legal-notice-online-india" className="text-red-600 underline">Send a legal notice online</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

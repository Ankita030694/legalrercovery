'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  Check,
  Shield,
  Briefcase,
  IndianRupee,
  AlertCircle,
  Clock,
  Timer,
  Users,
  CheckCircle,
  Lightbulb,
  Upload,
  FileSearch,
  Send,
  Handshake,
  Building2,
  AlertTriangle,
  Receipt,
  FileText,
  Key,
  Coins
} from 'lucide-react';

// FAQs Interface
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Review Interface
interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
}

export default function VendorInvoiceClient() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]
    );
  };

  const handleShare = (platform: string) => {
    const title = "Recover Stuck B2B Invoices & Vendor Payments Legally in India";
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  // Table of Contents sections B2B custom
  const tocSections = useMemo(() => [
    { id: "service-overview", title: "1. Service Overview" },
    { id: "coverage-details", title: "2. B2B Case Scopes" },
    { id: "notice-strategy", title: "3. B2B Escalation Pipeline" },
    { id: "legal-framework", title: "4. Legal Remedies for B2B" },
    { id: "why-online-templates-fail", title: "5. Why Free Templates Fail" },
    { id: "service-pricing", title: "6. Transparent Flat Pricing" },
    { id: "documentation-needed", title: "7. B2B Debt Evidentiary Checklist" },
    { id: "faqs", title: "8. Frequently Asked Questions" },
    { id: "reviews", title: "9. Client Testimonials" }
  ], []);

  // 10 B2B custom FAQs
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the statute of limitations to recover outstanding B2B invoice debts in India?",
      answer: "Under the Limitation Act, 1963, the limitation period to file a civil recovery suit (including summary suits under Order 37 CPC) for unpaid commercial invoices is three (3) years. This clock begins running from the date the invoice becomes due and payable (not the date the invoice was generated), or from the date of the last partial payment or written acknowledgment of the debt by the debtor company, whichever is later."
    },
    {
      id: "faq-2",
      question: "Can I use the MSME Samadhaan portal if my Udyam Registration was obtained after the invoice was generated?",
      answer: "No. The Supreme Court of India in Silpi Industries v. Kerala State Road Transport Corporation ruled that the benefits of the MSMED Act, 2006 (including access to the MSEFC and 3x bank rate compound interest) can only be claimed for transactions that occurred *after* the micro/small enterprise was registered with a valid Udyam certificate. However, you can still recover the principal amount under standard civil laws or pursue regular recovery for invoices dated after your registration."
    },
    {
      id: "faq-3",
      question: "Is the buyer liable to pay interest on delayed payments even if our contract does not mention interest?",
      answer: "Yes, under Section 16 of the MSMED Act, 2006, if you are a registered Micro or Small Enterprise, the buyer is statutorily liable to pay compound interest at three times the RBI bank rate from the appointed day of delay, regardless of what is written in your B2B contract. For non-MSME entities, Section 34 of the CPC allows courts to award interest at reasonable commercial rates (usually 9% to 12% per annum) on outstanding transactions if a clear demand for interest was made in your invoices or initial legal notice."
    },
    {
      id: "faq-4",
      question: "How long does a Summary Suit (Order 37 CPC) take compared to a regular civil recovery suit?",
      answer: "A regular civil recovery suit in India can drag on for 3 to 7 years due to extensive trials and cross-examinations. Conversely, a Summary Suit under Order 37 CPC is designed to bypass this trial phase. If the defendant fails to enter an appearance within 10 days of service, or if their application for 'Leave to Defend' is rejected by the judge because they have no realistic defense, the court immediately passes a judgment. This generally resolves cases within 6 to 18 months."
    },
    {
      id: "faq-5",
      question: "Can B2B directors be held personally liable for unpaid company invoices or corporate defaults?",
      answer: "Ordinarily, directors are protected by the doctrine of corporate personality and limited liability. However, in B2B disputes, directors can be held personally liable if: 1) They have signed a personal guarantee backing the company's B2B debt, 2) They issued corporate cheques that bounced, triggering criminal prosecution under Section 138/141 of the Negotiable Instruments Act, 3) Willful cheating or fraud under Section 420 IPC is proven, or 4) The company enters NCLT insolvency and is found guilty of fraudulent or wrongful trading under Section 66 of the IBC."
    },
    {
      id: "faq-6",
      question: "What is the minimum default amount required to initiate insolvency proceedings (IBC) against a corporate debtor?",
      answer: "Currently, the minimum default threshold to file a corporate insolvency application at the NCLT under Section 9 of the Insolvency and Bankruptcy Code (IBC) is ₹1 crore (increased from the original ₹1 lakh in 2020 to prevent choking the tribunals with minor claims). This threshold is calculated purely on the principal debt and undisputed dues. For smaller B2B claims, civil courts, commercial courts, and MSME tribunals remain the primary statutory avenues."
    },
    {
      id: "faq-7",
      question: "Does the MSMED Act cover trading firms, or is it limited to manufacturers and service providers?",
      answer: "The MSME Samadhaan and MSEFC recovery arbitration mechanisms are statutorily restricted to Micro and Small Enterprises engaged in manufacturing goods or rendering services. While the Ministry of MSME allows Retailers and Wholesale Traders to register on the Udyam portal to obtain priority sector lending from banks, they are explicitly excluded from filing delayed payment claims or recovering interest under the MSME Samadhaan dispute resolution system."
    },
    {
      id: "faq-8",
      question: "What should I do if a buyer disputes the quality of goods as an excuse to withhold our invoice payment?",
      answer: "This is a common stall tactic. If the buyer has accepted, processed, or resold the goods without raising a written quality complaint within a reasonable time (typically 15 to 30 days as per the contract or Sale of Goods Act), their quality defense is legally deemed waived. We compile all delivery challans, e-way bills, and subsequent communications showing their silent acceptance of the materials to dismantle their excuse in our legal notice."
    },
    {
      id: "faq-9",
      question: "What happens if a debtor company goes into NCLT insolvency (CIRP) while our recovery is pending?",
      answer: "If the NCLT admits an insolvency petition against your corporate buyer, a statutory 'moratorium' under Section 14 of the IBC is immediately declared, which halts all ongoing civil suits and recovery actions. In this scenario, you must immediately file your operational debt claim as an Operational Creditor using Form B with the appointed Interim Resolution Professional (IRP) to ensure your outstanding invoices are registered in the corporate recovery pool."
    },
    {
      id: "faq-10",
      question: "Can we initiate both criminal cheque bounce (Sec 138 NI Act) and civil recovery (Order 37 CPC) simultaneously?",
      answer: "Yes, absolutely. The Supreme Court has repeatedly confirmed that criminal proceedings for cheque bouncing and civil suits for recovery are independent, parallel remedies. Initiating criminal prosecution under Section 138 creates personal criminal pressure on the signing directors (exposing them to imprisonment), while the civil summary suit runs concurrently to secure an executable decree against the corporate assets, maximizing your recovery probability."
    }
  ], []);

  // 4 high-fidelity B2B custom reviews
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Sanjay Kumar (Founder, Kumar Metal Alloys)",
      rating: 5,
      review: "A tier-1 manufacturing company withheld our supply invoice of ₹8.4 Lakhs for over 9 months, claiming inventory audit delays. LegalRecovery drafted and served their Board and Investor Escalation Notice along with compound interest calculations at 3x the RBI rate. Within 12 days, the buyer's CFO called us directly and released our entire outstanding amount plus interest. Outstanding efficiency!"
    },
    {
      id: "rev-2",
      name: "Priyanka Mehta (Managing Partner, CloudSync Software Solutions)",
      rating: 5,
      review: "We delivered a custom enterprise ERP portal for a logistics startup, but the client went silent during the final ₹3.5 Lakh milestone payment. LegalRecovery's progressive legal notice pipeline outlined the clear breach of contract and threatened immediate MSME Samadhaan council filing. The startup's founders settled the outstanding invoice in full within a week of receiving notice 2."
    },
    {
      id: "rev-3",
      name: "Harish Vasudevan (Director, Tradelink Chemical Wholesalers)",
      rating: 5,
      review: "A distributor issued three corporate cheques totaling ₹6.2 Lakhs that bounced due to 'insufficient funds'. The legal notice served by LegalRecovery's advocate panel gave them a strict 15-day criminal notice under Section 138 of the NI Act. Fearing director prosecution and arrest, the distributor replaced the bounced cheques with an immediate RTGS transfer. Absolutely flawless support!"
    },
    {
      id: "rev-4",
      name: "Ramanathan Iyer (COO, Zenith Logistics Services)",
      rating: 5,
      review: "Recovering commercial supply chain invoices can be a nightmare. LegalRecovery managed our B2B recovery campaign against an e-commerce client that owed us ₹12.8 Lakhs in freight credits. Their attorney-backed demand package left the debtor with no defense. We received our settlement through a structured payment plan. Highly professional legal tech service!"
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Vendor & Invoice Recoveries", href: "/services/vendor-and-invoice-recoveries" },
  ];

  // Schema JSON-LD Custom B2B Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries"
        },
        "headline": "Professional B2B Invoice & Commercial Vendor Debt Recovery in India",
        "description": "Reclaim unpaid supplier invoices, raw material costs, supply chain credits, distributor settlements, and service provider retainers. MSME Samadhaan, CPC Order 37 summary suits, Section 138 NI Act, flat-fee lawyer notices.",
        "image": "https://www.legalrecovery.in/blog_money_recovery.png",
        "datePublished": "2026-05-27T00:00:00Z",
        "dateModified": "2026-05-27T00:00:00Z",
        "author": {
          "@type": "Organization",
          "name": "Team LegalRecovery",
          "url": "https://www.legalrecovery.in/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.legalrecovery.in/logo.png"
          }
        },
        "mainEntityOfPage": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.legalrecovery.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.legalrecovery.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Vendor & Invoice Recoveries",
            "item": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.legalrecovery.in/services/vendor-and-invoice-recoveries#service",
        "name": "B2B Vendor & Invoice Recovery Service",
        "description": "Professional money recovery for commercial invoices, supplier debts, manufacturing raw material costs, logistics credits, and agency retainers using B2B-specific 3-stage notice escalation pipelines and NI Act Section 138 prosecution.",
        "provider": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "56"
        },
        "review": reviews.map(rev => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": rev.name
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": String(rev.rating),
            "bestRating": "5"
          },
          "reviewBody": rev.review
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-[#111827] font-sans antialiased">
      {/* Dynamic JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient Lights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[100px] opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] red-radial-glow -z-10 pointer-events-none rounded-full blur-[80px] opacity-25" />

      {/* ================= HERO SECTION ================= */}
      <div className="pt-32 pb-12 md:pb-24 px-4 sm:px-6 md:px-16 max-w-8xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-12">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[13.5px] font-bold text-[#DC2626] uppercase tracking-[0.02em] mb-4 select-text">
              Professional B2B commercial Debt Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              B2B Invoices Stuck? <br />
              Recover Your Vendor <br />
              <span className="text-[#DC2626]">Payments Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim outstanding supplier invoices, manufacturing material dues, credit limits, logistics balances, and professional agency retainers in India. We deploy a B2B-optimized 3-stage notice escalation pipeline backed by statutory commercial acts to secure payments.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No slow lawsuits. Standard flat pricing. We force settlements.
              </span>
            </div>

            {/* CTA Anchor button linking to the pricing section */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <a
                href="#service-pricing"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 text-[14px] sm:text-[15px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[12px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start My Recovery - ₹999
              </a>
            </div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:col-span-6 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Active Tab visual header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-[#111827]">MSME / B2B Commercial Ledger</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Account: COM-INV-2026</span>
                </div>
                <span className="px-2.5 py-1 text-[9.5px] font-black text-[#03543F] bg-[#DEF7EC] border border-emerald-200/50 rounded-full uppercase tracking-wider">
                  Demand Stage Active
                </span>
              </div>

              {/* Recovery Status Tracker */}
              <div className="bg-[#F9FAFB] rounded-2xl border border-[#E5E7EB] p-4 flex flex-col gap-4 relative">
                
                {/* Horizontal status timeline */}
                <div className="relative pt-3 pb-2 flex items-center justify-between">
                  {/* Green progress bar */}
                  <div className="absolute left-3.5 right-3.5 top-[23px] h-[2.5px] bg-[#E5E7EB]">
                    <div className="w-[78%] h-full bg-[#10B981]"></div>
                  </div>

                  {/* Nodes */}
                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Submitted</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Notice 1 Sent</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[9px] font-bold text-[#111827]">Notice 2 Sent</span>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-[#9CA3AF] text-[#9CA3AF] flex items-center justify-center shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                    </div>
                    <span className="text-[9px] font-bold text-[#4B5563]">Resolution</span>
                  </div>
                </div>

              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Unresolved Invoice Value</span>
                  <span className="text-xl font-black text-[#111827] mt-1">₹8,45,000</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Statutory Interest</span>
                  <span className="text-[12.5px] font-bold text-[#DC2626] mt-1">3x RBI Rate Compound</span>
                </div>
              </div>

              {/* Trust Badge overlay */}
              <div className="flex items-center gap-3 bg-red-50/50 border border-red-200/50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-[#DC2626] shrink-0" />
                <p className="text-[11.5px] text-[#4B5563] font-semibold leading-relaxed">
                  Our B2B notice pipeline targets the executive board, institutional venture backers, and key procurement stakeholders to block supply chain defaults.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* ================= BREADCRUMBS CONTAINER ================= */}
        <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.01)] inline-block mb-12">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* ================= SPLIT PAGE LAYOUT (TOC, Main Content, Sidebar) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start relative">
          
          {/* Left Sidebar - Table of Contents (Sticky on Desktop) */}
          <div className="hidden lg:block" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* Main Content Area */}
          <div className="min-w-0">
            {/* TOC (Mobile View) */}
            <div className="lg:hidden mb-8">
              <TableOfContents sections={tocSections} />
            </div>

            <div className="bg-white p-6 md:p-12 rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.015)] space-y-12">
              
              {/* Product/Service Copywritten Content */}
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed tiptap-content">
                
                {/* 1. Service Overview */}
                <h2 id="service-overview">1. Professional B2B Commercial Debt & Invoice Recovery Service</h2>
                <p>
                  In B2B business operations, cash flow is the fundamental lifeblood. When a corporate client defaults on tax invoices, delays milestone clearances, or ignores contractually agreed credit cycles, they threaten the survival of your enterprise. In India, many well-funded buyer companies strategically drag out payments, counting on the fact that small suppliers, wholesalers, and agencies cannot afford the exorbitant legal costs, bureaucratic bottlenecks, and multi-year delays of traditional court litigation.
                </p>
                <p>
                  The Legal Recovery <strong className="font-extrabold text-[#111827]">B2B Commercial Debt & Invoice Recovery Service</strong> is an aggressive, automated, and attorney-verified pre-litigation machine designed to tilt the scales of leverage back to the creditor. We have transformed the commercial debt recovery cycle by replacing long-drawn court trials with a highly professional, triple-stage escalation notice campaign. We leverage powerful statutory weapons such as the <strong className="font-extrabold text-[#111827]">MSMED Act, 2006 (MSME Samadhaan)</strong>, <strong className="font-extrabold text-[#111827]">Summary Civil Suits (Order 37 CPC)</strong>, <strong className="font-extrabold text-[#111827]">Commercial Courts Act</strong>, and <strong className="font-extrabold text-[#111827]">Section 138 of the Negotiable Instruments Act</strong> to force debtor companies to settle your accounts without expensive litigation.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide full B2B commercial debt recovery campaigns for a single, flat fee with absolutely <strong>zero commissions</strong> taken on your recovered invoices. We draft, attorney-verify, and execute authoritative notices designed to bypass gatekeepers and land directly on the desks of the buyer's Board of Directors, CFO, and institutional investors.
                </blockquote>
                <p>
                  No corporate debtor, private limited company, or VC-funded startup can legally fund their working capital by holding your earned money hostage. Let our advanced legal technology platform handle the writing, tracing, and legal enforcement of your invoices so you can protect your cash flow and focus on growing your business.
                </p>

                {/* 2. B2B Case Scopes */}
                <h2 id="coverage-details">2. Commercial B2B Scopes We Help You Recover</h2>
                <p>
                  B2B commercial disputes involve complex transactional documentation and multi-layered terms. Our expert corporate law panel drafts highly customized recovery notices designed around your specific transactional structure to maximize pressure and counter typical buyer excuses.
                </p>
                
                <h3 id="wholesaler-supplier">A. Wholesaler, Trader & Manufacturer Supply Invoices</h3>
                <p>
                  We recover outstanding payments for raw materials, finished products, and bulk goods supplied under commercial trade agreements. We draft notices enforcing prompt payments, highlighting signed purchase orders, delivery challans, and e-way bills to systematically block typical buyer quality disputes.
                </p>

                <h3 id="raw-material">B. Raw Material Costs & Supply Chain Credit Accounts</h3>
                <p>
                  For heavy industries, packaging manufacturers, and manufacturing suppliers, outstanding balances on credit ledger accounts can restrict operations. Our notices calculate overdue interest and outline structural defaults, demanding the immediate clearance of supply ledger balances.
                </p>

                <h3 id="retailer-distributor">C. Retailer, Franchise & Distributor Settlements</h3>
                <p>
                  Distributors often face significant issues when retail brands or franchise partners refuse to return caution money deposits, safety deposits, or clear final inventory accounts. We target withheld deposits and accumulated commission dues, demanding timely reconciliation of channel accounts.
                </p>

                <h3 id="service-provider">D. Service Provider Retainers, IT Agency Billing & Professional Fees</h3>
                <p>
                  Marketing firms, software agencies, IT consultants, and professional freelancers are highly vulnerable to clients who default on final milestones or monthly retainers. We compile service agreements, email delivery sign-offs, and project handovers to construct an ironclad contractual claim, rendering buyer delay tactics legally indefensible.
                </p>

                {/* 3. B2B Escalation Pipeline */}
                <h2 id="notice-strategy">3. Our B2B Triple-Escalation Notice Pipeline: Engineered for Maximum Pressure</h2>
                <p>
                  B2B buyers routinely ignore isolated letters from business owners, viewing them as empty threats. To dismantle this, LegalRecovery implements a systematic, <strong className="font-extrabold text-[#111827]">3-stage progressive advocate-backed notice campaign combined with a criminal cheating draft</strong> that builds massive corporate pressure week-by-week:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate B2B Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We launch an authoritative demand notice on a senior corporate advocate's letterhead. This notice is served via digital pathways (tracked Email, WhatsApp) and physical registered post to the debtor's registered office, giving their legal and finance teams a strict 15-day window to settle.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Board, VC & Shareholder Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If ignored, we serve Notice 2 directly to the company's Board of Directors, institutional venture capital backers, and private equity investors. We attach compound interest calculations (at 3x RBI rate for MSMEs) and highlight the directors' personal liability for willful corporate defaults.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation CPC / NCLT Warning</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final warning package, including drafted copies of a summary civil suit under CPC Order 37 or a corporate insolvency petition under Section 9 of the IBC. This signals that our legal machinery is fully prepared to approach the courts to seize corporate bank accounts.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Cheating Draft (Sec 420 IPC)</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled criminal police complaint draft for <strong className="font-extrabold text-[#111827]">Cheating (Section 420 IPC)</strong> and <strong className="font-extrabold text-[#111827]">Criminal Breach of Trust (Section 405/406 IPC)</strong>. Filing this against the directors creates immediate, non-bailable pressure on corporate key-management.
                    </p>
                  </div>
                </div>
                <p>
                  By moving through these four distinct escalation stages week-by-week, we make it highly expensive, operationally disruptive, and reputationally damaging for the debtor to continue withholding your commercial dues.
                </p>

                {/* 4. Legal Remedies for B2B */}
                <h2 id="legal-framework">4. The Statutory Framework: Indian Commercial Debt Recovery Acts</h2>
                <p>
                  India's legal framework provides powerful tools to commercial creditors. Our corporate legal panel actively leverages these specific acts and sections in our notices to build a bulletproof case against B2B debtors:
                </p>
                <ul>
                  <li><strong>The MSMED Act, 2006 (Section 15 & 16):</strong> If your business is Udyam-registered, buyers must pay within 45 days. Delays attract <strong className="font-extrabold text-[#111827]">mandatory compound interest calculated at 3 times the RBI Bank Rate</strong>. Furthermore, if the buyer appeals an MSEFC facilitation award, they must deposit <strong className="font-extrabold text-[#111827]">75% of the disputed amount</strong> in court first.</li>
                  <li><strong>Order 37 of the Code of Civil Procedure (Summary Suit):</strong> Enables creditors to file fast-track suits in civil/commercial courts for liquidated contract debts. The debtor has no automatic right to defend and must apply for 'Leave to Defend' within 10 days of the summons. If leave is denied, a decree is passed instantly.</li>
                  <li><strong>The Commercial Courts Act, 2015:</strong> Mandatory Pre-Institution Mediation and Settlement (PIMS) rules expedite settlement. Dedicated commercial courts are legally bound to resolve disputes rapidly, bypassing normal trial backlogs.</li>
                  <li><strong>Section 138 of the Negotiable Instruments Act, 1881:</strong> If a buyer issues a cheque that bounces, they face criminal prosecution. Our advocates serve the mandatory 15-day statutory notice. Failure to clear the cheque within 15 days exposes directors to <strong className="font-extrabold text-[#111827]">up to 2 years of imprisonment</strong>.</li>
                  <li><strong>Insolvency & Bankruptcy Code, 2016 (IBC - Section 9):</strong> For corporate debtor defaults exceeding ₹1 crore, creditors can serve a Section 8 demand notice. If unpaid, filing a petition under Section 9 allows the NCLT to suspend the board and initiate corporate insolvency.</li>
                </ul>

                {/* 5. Why Free Templates Fail */}
                <h2 id="why-online-templates-fail">5. Why Free Online B2B Legal Notice Templates Fail</h2>
                <p>
                  Many business owners try to copy free legal drafts or letter formats from online blogs. In B2B recoveries, this approach almost always fails to produce results:
                </p>
                <ul>
                  <li><strong>No Attorney Signature & Letterhead:</strong> Debtor legal departments immediately recognize free templates as amateur attempts. Without a registered advocate's seal and practicing ID, companies know there is no immediate litigation threat.</li>
                  <li><strong>Incorrect Statutory Citing:</strong> Online formats rarely match your specific state’s MSME facilitation rules, the correct territorial jurisdiction under the CPC, or the precise mandatory warning clauses required for Sec 138 NI Act or IBC actions.</li>
                  <li><strong>No Compounding Pressure:</strong> A single template sent via post fails to build compounding leverage. Without automated email tracking, read receipts, and systematic weekly board escalations, corporate debtors simply archive your claim.</li>
                </ul>
                <p>
                  LegalRecovery provides you with attorney-signed, highly customized B2B notice campaigns. We use real-time digital read receipts to track when the CFO or director opens our email, leaving them with no room to claim they never received the demand.
                </p>

                {/* 6. Transparent Flat Pricing */}
                <h2 id="service-pricing">6. Transparent Flat B2B Pricing</h2>
                <p>
                  Traditional corporate law firms charge steep hourly fees, consultation costs, and demand high commissions (often 10% to 20%) on the recovered B2B amount. We believe this is highly exploitative. 
                </p>
                <p>
                  LegalRecovery provides professional, attorney-verified B2B invoice recovery campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
                </p>

                {/* Pixel-perfect B2B customized unified pricing container */}
                <div className="my-10 select-none">
                  <div className="bg-white rounded-[32px] border-2 border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      
                      {/* Left Block: Price and Scope details */}
                      <div className="lg:col-span-5 bg-gray-50/50 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <div>
                          <span className="px-3 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Unified Plan
                          </span>
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Commercial B2B Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get full-suite recovery support from expert corporate attorneys. Standardized flat pricing with absolutely zero commission on your recovered invoices.
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-[#111827] tracking-tight">₹999</span>
                            <span className="text-sm text-[#6B7280] font-bold">/ flat fee</span>
                          </div>
                          <p className="text-[12.5px] text-[#DC2626] font-bold leading-[1.5] max-w-sm">
                            *This pricing is only for 1 B2B case which includes sending to 1 corporate debtor and covers 3 notices & 1 criminal police draft.
                          </p>
                        </div>
                      </div>

                      {/* Right Block: Included features & Call-to-action */}
                      <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <h4 className="text-[13.5px] font-extrabold text-[#111827] uppercase tracking-wider mb-6">What's included in this plan:</h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">3 Legal Notices</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Advocate demand & board escalations</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Criminal Fraud Draft</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Sec 420 IPC cheating compilation</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Corporate Attorney Validation</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Verified by experienced practitioners</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Real-time Read Tracking</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Live board read receipt alerts</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-[#E5E7EB]/85">
                          <Link href="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3.5 text-[14px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
                              Get Started Now
                            </button>
                          </Link>
                          <div className="flex items-center gap-2.5 text-left">
                            <Shield className="w-5 h-5 text-[#2563EB] shrink-0" />
                            <span className="text-[12px] text-[#6B7280] font-bold leading-tight">
                              100% B2B compliance.<br />No commissions, no hidden fees.
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                {/* 7. B2B Debt Evidentiary Checklist */}
                <h2 id="documentation-needed">7. The B2B Debt Evidentiary Checklist</h2>
                <p>
                  To build a watertight recovery campaign on our platform, you will need to upload basic commercial records. Our advocate panel utilizes these documents to compile a legally bulletproof case against the defaulting buyer:
                </p>
                <ul>
                  <li><strong>Tax Invoices:</strong> Signed and stamped B2B tax invoices detailing the price, quantities, GST filings, and payment credit terms.</li>
                  <li><strong>Purchase Orders (PO) or Work Contracts:</strong> Written proof of the client's formal purchase request and agreed pricing parameters.</li>
                  <li><strong>Proof of Delivery (POD) / E-Way Bills:</strong> Signed delivery challans, transport receipts, or digitally tracked logistics receipts proving physical delivery of goods or successful handover of services.</li>
                  <li><strong>Accounts Ledger & Bank Statement:</strong> Your company ledger showing the outstanding debit balance, along with bank records proving the absence of incoming RTGS/NEFT clearings.</li>
                  <li><strong>Acknowledge of Debt / Communications:</strong> Slack messages, email trails, or WhatsApp chats where the client acknowledges the debt or promises payment timelines.</li>
                </ul>

              </div>

              {/* Tiptap Custom Styles matching the blog detail screen perfectly */}
              <style jsx global>{`
                .tiptap-content h1 { font-size: 2.25em; font-weight: 900; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; letter-spacing: -0.02em; }
                .tiptap-content h2 { font-size: 1.75em; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.8em; color: #111827; scroll-margin-top: 100px; border-bottom: 2px solid #F3F4F6; padding-bottom: 0.5rem; }
                .tiptap-content h3 { font-size: 1.4em; font-weight: 800; margin-top: 1.2em; margin-bottom: 0.6em; color: #1f2937; scroll-margin-top: 100px; }
                .tiptap-content p { margin-bottom: 1.2em; line-height: 1.8; color: #374151; font-size: 15px; }
                .tiptap-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content ol { list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1.2em; }
                .tiptap-content li { margin-bottom: 0.5em; color: #374151; font-size: 15px; }
                .tiptap-content blockquote { border-left: 4px solid #DC2626; padding-left: 1em; font-style: italic; color: #4b5563; background: #FEF2F2; padding: 1.25rem; border-radius: 0.75rem; margin: 1.5rem 0; }
                .tiptap-content blockquote ol { padding-left: 1.2em; margin-bottom: 0; }
                .tiptap-content img { border-radius: 0.75rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); margin: 2rem 0; }
                .tiptap-content a { color: #DC2626; text-decoration: underline; font-weight: 600; }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; font-size: 13px; }
                .tiptap-content th { background: #F9FAFB; padding: 0.75rem; text-align: left; font-weight: 800; border: 1px solid #E5E7EB; color: #111827; }
                .tiptap-content td { padding: 0.75rem; border: 1px solid #E5E7EB; color: #4B5563; font-weight: 500; }
              `}</style>
              
              {/* Share Section */}
              <div className="border-t border-gray-150 pt-8 mt-8">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-gray-900 text-xs tracking-wider uppercase">Share B2B service page:</span>
                  <div className="flex space-x-4">
                    <button onClick={() => handleShare('facebook')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('twitter')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                    <button onClick={() => handleShare('linkedin')} className="text-gray-400 hover:text-[#DC2626] transition-colors cursor-pointer">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <section id="faqs" className="scroll-mt-32 border-t border-gray-150 pt-12">
                <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything corporate entities and suppliers need to know about B2B commercial debt recovery in India</p>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border border-gray-150 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-gray-300">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="flex justify-between items-center w-full text-left p-4 font-extrabold text-xs sm:text-[13px] tracking-tight text-gray-900 hover:bg-gray-50/30 focus:outline-none transition-colors"
                      >
                        <span className="flex items-center pr-4">
                          <span className="text-[#DC2626] mr-3 font-black">Q.</span>
                          {faq.question}
                        </span>
                        <span className={`transform transition-transform duration-200 shrink-0 ${expandedFaqs.includes(faq.id) ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                        </span>
                      </button>
                      {expandedFaqs.includes(faq.id) && (
                        <div className="px-4 pb-4 pt-0 text-[11.5px] sm:text-xs text-gray-600 leading-relaxed pl-10 border-t border-gray-50 pt-3 bg-gray-50/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section id="reviews" className="scroll-mt-32 border-t border-gray-150 pt-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-1 tracking-tight">Client Testimonials</h2>
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of business owners, Wholesalers, and startup founders who recovered their invoices with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (56 reviews)</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 relative">
                      <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-[#DC2626] opacity-10 absolute top-4 left-4" />
                      <div className="relative z-10">
                        <div className="flex items-center mb-3">
                          <div className="flex text-yellow-400 mr-2">
                            {[...Array(5)].map((_, i) => (
                              <FontAwesomeIcon 
                                key={i} 
                                icon={faStar} 
                                className={i < review.rating ? "text-yellow-400 text-[10px]" : "text-gray-300 text-[10px]"} 
                              />
                            ))}
                          </div>
                          <span className="font-extrabold text-[11px] text-gray-900">{review.rating}.0</span>
                        </div>
                        <p className="text-gray-700 italic mb-4 text-xs leading-relaxed">"{review.review}"</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 mr-3 text-xs">
                            <FontAwesomeIcon icon={faUser} />
                          </div>
                          <p className="font-extrabold text-xs text-gray-900">{review.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>

          {/* Right Sidebar - Author Card & Contact Box (Sticky on Desktop) */}
          <div className="space-y-8" style={{ position: 'sticky', top: '96px', alignSelf: 'start' }}>
            
            {/* Author Profile */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-50 pb-2">Verified Provider</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-100 flex-shrink-0 bg-red-50 flex items-center justify-center">
                  <img 
                    src="/favicon/favicon.ico"
                    alt="Team LegalRecovery"
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-xs sm:text-[13px]">Team LegalRecovery</h4>
                  <Link 
                    href="/about"
                    className="text-[10px] text-[#DC2626] font-extrabold hover:underline"
                  >
                    About Our Platform
                  </Link>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                Team LegalRecovery is a dedicated team of legal and financial professionals specializing in B2B money recovery, corporate compliance, and statutory B2B claims across India. We resolve disputes through structured, attorney-verified legal campaigns.
              </p>
              <a 
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-[#0077b5] text-[#0077b5] text-center py-2.5 rounded-xl text-xs font-bold hover:bg-[#0077b5] hover:text-white transition-colors"
              >
                Follow LegalRecovery
              </a>
            </div>

            {/* Premium CTA Contact Card */}
            <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Stuck B2B Invoices?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get an advocate-drafted 3-stage notice pipeline and a corporate cheating police draft for a flat fee of ₹999.
              </p>
              <a 
                href="tel:+918700343611" 
                className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
              >
                Call Support: +91-8700343611
              </a>
              <Link 
                href="/contact" 
                className="block w-full border border-gray-700 text-gray-300 text-center py-3 rounded-xl text-xs font-extrabold hover:bg-white hover:text-[#111827] hover:border-white transition-colors"
              >
                Initiate B2B Notice
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

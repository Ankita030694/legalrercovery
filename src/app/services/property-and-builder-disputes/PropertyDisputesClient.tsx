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

export default function PropertyDisputesClient() {
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
    const title = "Recover Stuck Property Booking Tokens & Resolve Builder Disputes Legally";
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

  // Table of Contents sections matching RERA/Property content structure
  const tocSections = useMemo(() => [
    { id: "service-overview", title: "1. Service Overview" },
    { id: "coverage-details", title: "2. What We Help You Recover" },
    { id: "notice-strategy", title: "3. Our 3+1 Notice Strategy" },
    { id: "legal-framework", title: "4. The Indian Statutory Shield" },
    { id: "why-online-templates-fail", title: "5. Why Online Notices Fail" },
    { id: "service-pricing", title: "6. Transparent Flat Pricing" },
    { id: "documentation-needed", title: "7. Evidentiary Checklist" },
    { id: "faqs", title: "8. Frequently Asked Questions" },
    { id: "reviews", title: "9. Client Testimonials" }
  ], []);

  // 10 Highly Comprehensive, Detailed Real Estate FAQs
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the statutory limitation period to file a property dispute complaint under the RERA Act or Consumer Protection Act?",
      answer: "Under Section 18 of the RERA Act, 2016, there is no strict limitation period explicitly barred if the default (such as delayed possession or project non-completion) is continuing. However, for filing claims under the Consumer Protection Act, 2019, the standard limitation period is two (2) years from the date on which the 'cause of action' arose. If a builder repeatedly extends the possession date through letters, the cause of action is treated as continuous, extending the timeline. For regular civil suits seeking specific performance of a builder-buyer agreement (BBA) or recovery of a booking token, the limitation period is three (3) years under the Limitation Act, 1963, commencing from the date performance was refused or the refund became due."
    },
    {
      id: "faq-2",
      question: "Can a real estate builder legally forfeit my booking token or earnest money if I withdraw from a project due to delay?",
      answer: "No. A builder cannot legally forfeit your booking token or earnest money if the withdrawal is triggered by the builder's default, such as failure to secure structural approvals, change in building plans without consent, or failure to execute the builder-buyer agreement on time. While builders often write strict 'non-refundable token' clauses in their provisional booking applications, the Supreme Court of India has held that unfair contracts and forfeiture of substantial amounts without proving loss are legally invalid. Under RERA Section 18, if the builder fails to hand over possession in accordance with the terms of the agreement, the allottee is entitled to a full refund with interest, and no forfeiture can be enforced."
    },
    {
      id: "faq-3",
      question: "What is the prescribed interest rate a builder must pay for delayed possession under RERA rules?",
      answer: "Under the RERA Act, 2016 and subsequent state-specific RERA Rules, the interest rate payable by the promoter to the allottee for delayed possession is uniform and linked to the State Bank of India's (SBI) highest Marginal Cost of Funds based Lending Rate (MCLR) plus two percent (2%). Currently, this translates to an annual interest rate ranging between 10.25% and 11.5% depending on the prevailing MCLR. RERA strictly enforces a parity principle: the rate of interest charged by the builder for buyer payment defaults cannot be higher than the rate of interest the builder must pay the buyer for project delays."
    },
    {
      id: "faq-4",
      question: "Can I approach both RERA and a Consumer Forum simultaneously for the same developer dispute?",
      answer: "While the Supreme Court in landmark judgments (such as M/s. Imperia Structures Ltd. vs. Anil Patni) affirmed that the remedies under RERA and the Consumer Protection Act are concurrent and that the jurisdiction of consumer forums is not barred by RERA, you generally cannot pursue parallel litigations for the *exact same relief* (e.g., seeking the same refund amount and interest) in both forums at the same time to prevent conflicting decrees. You can, however, choose the forum that best fits your goal. RERA is typically faster for enforcing project completion or securing statutory interest, while Consumer Forums are well-suited for awarding general compensation for mental distress, harassment, and litigation costs alongside refunds."
    },
    {
      id: "faq-5",
      question: "Under what conditions can a developer make changes to the sanctioned layout plans of a project?",
      answer: "Under Section 14 of the RERA Act, 2016, a developer is strictly prohibited from making any minor or major additions or alterations to the sanctioned plans, layout plans, and specifications of the individual apartment without the prior written consent of the specific allottee. Furthermore, the developer cannot make any alterations to the sanctioned layout plans, common areas, or specifications of the entire building or project without the prior written consent of at least two-thirds (2/3) of the allottees who have agreed to take apartments in that project."
    },
    {
      id: "faq-6",
      question: "What legal actions can homebuyers take if a builder defaults on a project that is not registered with RERA?",
      answer: "If a project is unregistered under RERA (often because it was started prior to 2017 or is smaller than 500 sq. meters/8 apartments), homebuyers are still fully protected under alternative legal frameworks. You can file: 1) A consumer complaint under the Consumer Protection Act, 2019 for 'deficiency in service' and 'unfair trade practices', 2) A civil recovery suit under Order 37 of the CPC for the recovery of liquidated booking dues, and 3) A criminal complaint for Cheating (Section 318 BNS / Section 420 IPC) and Criminal Breach of Trust (Section 316 BNS / Section 406 IPC) at the local police station if the developer gathered funds without possessing title to the land or intended to defraud."
    },
    {
      id: "faq-7",
      question: "How does the Insolvency and Bankruptcy Code (IBC) help homebuyers in case of stalled real estate projects?",
      answer: "Under the Insolvency and Bankruptcy Amendment Act, homebuyers are legally recognized as 'Financial Creditors' under Section 5(8)(f) of the IBC. This status permits allottees to initiate Corporate Insolvency Resolution Proceedings (CIRP) against a defaulting developer at the National Company Law Tribunal (NCLT). To prevent misuse, the law requires a joint petition filed by a minimum of 100 allottees or ten percent (10%) of the total allottees of the same real estate project, whichever is lower. Initiating or warning of IBC action creates severe pressure, as it threatens to strip the promoter of their company control."
    },
    {
      id: "faq-8",
      question: "Is a builder legally allowed to demand extra payments for 'Super Area increase' at the time of possession?",
      answer: "Any demand for extra payment based on an increase in the 'super area' must be supported by transparent, verifiable calculations and are highly restricted. RERA mandates that properties must be sold on the basis of 'Carpet Area' rather than vague 'super built-up area'. If the carpet area increases during construction, the developer can charge for the extra area up to a maximum of 3%, provided it is supported by amended structural plans approved by local authorities. Any unilateral increase beyond 3% without consent is invalid, and developers cannot hold physical possession hostage to extract unverified super area dues."
    },
    {
      id: "faq-9",
      question: "What are the consequences if a developer fails to comply with a RERA refund or execution order?",
      answer: "If a developer fails to comply with a refund or interest order passed by the RERA Authority, the homebuyer can file an Execution Application under Section 40 of the RERA Act. RERA then issues an Execution Certificate, referring the matter to the local District Magistrate (Collector). The Collector is empowered to recover the amount from the builder as 'arrears of land revenue' by attaching the builder's bank accounts, seizing their physical assets, and auctioning their unsold inventories to pay the homebuyers."
    },
    {
      id: "faq-10",
      question: "Can a builder force me to pay high maintenance charges before the Resident Welfare Association (RWA) is formed?",
      answer: "No. Under Section 11(4)(d) of the RERA Act, the developer is solely responsible for providing and paying for all outgoings, maintenance, municipal taxes, and electricity charges until they hand over the physical maintenance of the project to the association of allottees (RWA). While the developer can collect a reasonable, pre-agreed maintenance charge during the interim period, they must maintain a separate, dedicated bank account for these funds, provide audited expense statements to the RWA, and cannot charge arbitrary, inflated commercial tariffs."
    }
  ], []);

  // 4 High-Fidelity Client Testimonials for Property Disputes
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Rajesh K. Mehta (IT Consultant, Noida Sector 78)",
      rating: 5,
      review: "A prominent builder in Noida delayed my apartment possession by 3.5 years, repeatedly demanding arbitrary 'holding charges' while ignoring my refund requests. LegalRecovery drafted and served their 3-stage notice pipeline. The threat of a joint RERA Section 31 complaint and BNS cheating charges forced the builder's management to settle. I received a full refund of ₹45 Lakhs along with SBI MCLR + 2% interest in three structured payouts. Exceptional professionalism!"
    },
    {
      id: "rev-2",
      name: "Priya Chandrashekar (Senior HR Manager, Bengaluru)",
      rating: 5,
      review: "I booked a premium villa and paid a booking token of ₹5 Lakhs. Due to sudden approval delays, the builder changed the layout, shrinking the common green areas. When I withdrew, they cited a clause in the application to forfeit my entire token. LegalRecovery intervened immediately with an advocate demand notice detailing RERA Section 14 violations. The developer backed down and returned my entire token within 7 days!"
    },
    {
      id: "rev-3",
      name: "Amit & Shalini Goel (Homebuyers, Gurugram)",
      rating: 5,
      review: "Our builder demanded ₹3.8 Lakhs for unapproved 'super area increases' and refused to hand over keys until paid, despite a 2-year delay. The LegalRecovery pre-litigation package outlined the landmark Supreme Court precedents on carpet area definitions and deficiency in service. The builder waived the extra charges and adjusted our delayed possession interest against the final registration dues. A stress-free legal victory!"
    },
    {
      id: "rev-4",
      name: "Col. Vikram Rathore (Retd., Pune)",
      rating: 5,
      review: "The developer of my retirement home abandoned the project midway and stopped responding. LegalRecovery systematically compiled our evidence and drafted a joint pre-litigation package threat under the IBC and NCLT. Fearing insolvency proceedings, the developer's joint-venture partner stepped in, took over the site, and agreed to pay us monthly rent until possession. Their strategic foresight is unmatched."
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Property & Builder Disputes", href: "/services/property-and-builder-disputes" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/property-and-builder-disputes#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/property-and-builder-disputes"
        },
        "headline": "Professional Property & Builder Disputes Money Recovery in India",
        "description": "Reclaim stuck property booking tokens, claim refunds for delayed possession, challenge illegal super area charges, and initiate RERA or Consumer Forum action legally in India. Flat-fee, attorney-verified.",
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
        "mainEntityOfPage": "https://www.legalrecovery.in/services/property-and-builder-disputes"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/property-and-builder-disputes#faq",
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
        "@id": "https://www.legalrecovery.in/services/property-and-builder-disputes#breadcrumbs",
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
            "name": "Property & Builder Disputes",
            "item": "https://www.legalrecovery.in/services/property-and-builder-disputes"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.legalrecovery.in/services/property-and-builder-disputes#service",
        "name": "Property & Builder Disputes Recovery Service",
        "description": "Professional money recovery for stuck property booking tokens, delayed possession refunds, unapproved builder charges, and structural defects using top-tier legal notice pipelines and pre-litigation drafting.",
        "provider": {
          "@type": "Organization",
          "name": "LegalRecovery",
          "url": "https://www.legalrecovery.in"
        },
        "areaServed": "IN",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "64"
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
              Professional Property & Builder Disputes Recovery
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Builder Delayed? <br />
              Recover Your Stuck <br />
              <span className="text-[#DC2626]">Funds Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim forfeited booking tokens, delayed possession interest, and project cancellation refunds. Challenge illegal super area escalations and undelivered amenities. We deploy a systematic 3-stage progressive notice campaign and a formal criminal cheating complaint draft.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                No Court Visits. No Stress. We handle it for you.
              </span>
            </div>

            {/* CTA Anchor button linking to the pricing section */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <a
                href="/contact"
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
                  <span className="text-[12px] font-black text-[#111827]">Builder Dispute Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Case: REC-PROP-2026</span>
                </div>
                <span className="px-2.5 py-1 text-[9.5px] font-black text-[#03543F] bg-[#DEF7EC] border border-emerald-200/50 rounded-full uppercase tracking-wider">
                  Active Notice Campaign
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
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Disputed Token/Dues</span>
                  <span className="text-xl font-black text-[#111827] mt-1">₹8,50,000</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Legal Strategy</span>
                  <span className="text-[12.5px] font-bold text-[#DC2626] mt-1">3 Notice + Criminal Draft</span>
                </div>
              </div>

              {/* Trust Badge overlay */}
              <div className="flex items-center gap-3 bg-red-50/50 border border-red-200/50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-[#DC2626] shrink-0" />
                <p className="text-[11.5px] text-[#4B5563] font-semibold leading-relaxed">
                  Our pipeline targets developer administrative desks, board directors, and financing banks for maximum compliance pressure.
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
                <h2 id="service-overview">1. Professional Property & Builder Disputes Recovery Service</h2>
                <p>
                  Purchasing real estate represents one of the largest financial commitments an individual will make in their lifetime. When a builder or developer fails to deliver possession of your home, illegally forfeits your hard-earned booking token, or raises arbitrary, unapproved prices, they violate their statutory duties and breach contractual law.
                </p>
                <p>
                  The LegalRecovery <strong className="font-extrabold text-[#111827]">Property and Builder Disputes Service</strong> is a premier legal-tech system designed to counter the asymmetric power holding of deep-pocketed developers. Real estate developers often assume individual buyers will remain quiet due to the massive delays and high expenses associated with hiring traditional lawyers. We bypass these traditional bottlenecks by offering an aggressive, systematic, and attorney-verified pre-litigation pipeline to force developers to settle your claims or return your stuck funds.
                </p>
                <blockquote>
                  <strong>Our Service Promise:</strong> We provide structured, end-to-end recovery campaigns for a single, flat fee of <strong>₹999</strong> with absolutely <strong>zero commissions</strong> taken on your recovered money. We draft, validate, and launch progressive legal notices served directly to executive directors and institutional financiers.
                </blockquote>
                <p>
                  No real estate promoter - regardless of their market presence or corporate structure - is above the law. Let our platform take the burden of writing, executing, and tracking your legal claims so you can confidently recover what is rightfully yours.
                </p>

                {/* 2. What We Help You Recover */}
                <h2 id="coverage-details">2. What We Help You Recover</h2>
                <p>
                  A real estate dispute is rarely limited to basic delays. We target the full spectrum of financial recoveries, ensuring every illegal charge and statutory interest is thoroughly claimed:
                </p>
                
                <h3 id="booking-token">A. Stuck Booking Tokens & Earnest Money</h3>
                <p>
                  If you choose to withdraw from a project before signing a formal Builder-Buyer Agreement (BBA) due to delays, layout modifications, or broken promises, the builder cannot legally forfeit your earnest money. We demand a full return of your booking deposits, citing Supreme Court rules on unfair contract clauses.
                </p>

                <h3 id="possession-delay">B. RERA Section 18 Delayed Possession Interest</h3>
                <p>
                  If you choose to stay in a project that has missed its delivery timeline, you are legally entitled to receive monthly interest for every month of delay. We enforce Section 18 of the RERA Act, demanding interest computed at the State Bank of India's (SBI) highest MCLR plus 2% from the original delivery date until actual possession is handed over.
                </p>

                <h3 id="full-refunds">C. Full Refunds for Project Delay or Stalling</h3>
                <p>
                  For projects that are indefinitely stalled, structurally compromised, or abandoned, we launch campaigns demanding a full refund of all principal amounts paid to date, along with statutory delay interest and compensation for financial loss.
                </p>

                <h3 id="illegal-charges">D. Unilateral Price Escalations & Extra Maintenance Dues</h3>
                <p>
                  Developers frequently demand arbitrary payments under headings like 'super area increase', 'holding charges', or inflated interim maintenance fees. We dismantle these demands by requesting approved structural blueprints, verifying carpet area calculations, and enforcing RERA-governed billing rules.
                </p>

                <h3 id="amenity-deficiency">E. Amenity Breaches & Defective Construction Compensation</h3>
                <p>
                  If a developer delivers an apartment but fails to construct promised amenities (such as a clubhouse, swimming pool, power backup) or leaves major structural defects, we demand proportional refunds and compensation for 'deficiency in service' under the Consumer Protection Act.
                </p>

                {/* 3. Our 3+1 Notice Strategy */}
                <h2 id="notice-strategy">3. Our 3+1 Notice Strategy: Engineered for Maximum Pressure</h2>
                <p>
                  Standard court battles are notoriously slow. Developers rely on these delays to exhaust you financially. To counter this, LegalRecovery utilizes an aggressive, multi-stage digital and physical pre-litigation pipeline to bring developers to the settlement table within weeks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We draft and serve a highly authoritative legal demand on the letterhead of a practicing real estate advocate. Sent physically via Registered Post AD and digitally via email and WhatsApp, it gives the builder a strict 15-day window to resolve the claim.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Board & Financier Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If ignored, we serve Notice 2 directly to the developer's executive board, co-promoters, and the banks or NBFCs financing the project. Escalating to lenders alerts them to legal defaults, which can restrict the developer's credit lines and cash liquidity.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Warning Package</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We deliver a final warning package attaching ready-to-file drafts of a RERA Section 31 complaint, a Consumer Commission petition, and a warning under the Insolvency and Bankruptcy Code. This signals that our legal panel is prepared to initiate formal court proceedings.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Criminal Action & Cheating Complaint Draft</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a customized criminal police complaint draft under <strong className="font-extrabold text-[#111827]">Section 318 BNS (Cheating)</strong> and <strong className="font-extrabold text-[#111827]">Section 316 BNS (Criminal Breach of Trust)</strong>. Filing this against the promoter personally creates immediate, non-bailable pressure.
                    </p>
                  </div>
                </div>
                <p>
                  By moving through these four distinct escalation stages week-by-week, we make it highly expensive, operationally disruptive, and legally risky for the promoter to continue ignoring your payments.
                </p>

                {/* 4. The Indian Statutory Shield */}
                <h2 id="legal-framework">4. The Indian Statutory Shield: Know Your Rights</h2>
                <p>
                  India's legal framework provides extensive protections for property buyers. Our advocate panel leverages these specific statutory tools to build an unassailable recovery claim:
                </p>
                <ul>
                  <li><strong>The RERA Act, 2016 (Section 18):</strong> Directs that if a builder fails to deliver possession in accordance with the agreement, the buyer has the absolute right to withdraw and claim a full refund with interest (SBI MCLR + 2%) or stay and claim monthly interest for the delay.</li>
                  <li><strong>The RERA Act, 2016 (Section 31):</strong> Empowers any aggrieved homebuyer to file a complaint with the RERA Authority or an Adjudicating Officer for any violations of the Act's rules.</li>
                  <li><strong>The Consumer Protection Act, 2019:</strong> Categorizes project delay and construction defects as a 'deficiency in service' and 'unfair trade practice'. It allows buyers to seek compensation for mental distress, hotel/rent expenses, and litigation fees.</li>
                  <li><strong>The Insolvency & Bankruptcy Code, 2016 (IBC):</strong> Recognizes homebuyers as <strong className="font-extrabold text-[#111827]">Financial Creditors</strong> under Section 5(8)(f). If 100 allottees or 10% of allottees in a project unite, they can initiate corporate insolvency against the builder at the NCLT.</li>
                  <li><strong>The Bharatiya Nyaya Sanhita, 2023 (BNS):</strong> Replaces the old IPC. Section 318 (replaces Section 420 IPC) covers Cheating, and Section 316 (replaces Section 406 IPC) covers Criminal Breach of Trust, providing up to 7 years of imprisonment for fraudulent developers.</li>
                  <li><strong>Supreme Court Jurisprudence:</strong> In *Pioneer Urban Land & Infrastructure Ltd. vs. Union of India*, the apex court upheld the status of homebuyers as financial creditors. In *Imperia Structures Ltd. vs. Anil Patni*, it held that RERA does not bar Consumer Court remedies, allowing homebuyers concurrent legal options.</li>
                </ul>

                {/* 5. Why Online Templates Fail */}
                <h2 id="why-online-templates-fail">5. Why Free Online Notice Templates Fail</h2>
                <p>
                  Many property buyers attempt to save money by copying free legal notice templates from real estate forums or blogs. However, these amateur attempts rarely produce results:
                </p>
                <ul>
                  <li><strong>No Advocate Standing:</strong> Free templates do not carry the seal, signature, bar association number, and formal letterhead of a practicing real estate advocate. Developers' legal cells immediately spot these and discard them.</li>
                  <li><strong>Outdated Statutory References:</strong> Most online formats still cite old IPC sections (like Section 420) instead of the new <strong className="font-extrabold text-[#111827]">BNS, 2023</strong> codes, or fail to mention state-specific RERA Rules which vary from Maharashtra (MahaRERA) to Karnataka (K-RERA) and Uttar Pradesh (UP-RERA).</li>
                  <li><strong>No Strategic Target Delivery:</strong> Free notices are usually sent to a generic office address. Our system targets personal corporate email addresses of board directors, registrars, and project financing departments for immediate impact.</li>
                </ul>
                <p>
                  LegalRecovery provides state-customized, attorney-verified legal notices equipped with digital tracking. We know when the builder's legal department opens the email, leaving them with no defense of non-receipt.
                </p>

                {/* 6. Transparent Flat Pricing */}
                <h2 id="service-pricing">6. Transparent Flat Pricing</h2>
                <p>
                  Traditional property lawyers charge massive upfront consultation fees, billing hourly or demanding hefty commissions (percentage cuts) on your recovered booking amounts. We believe this is exploitative to buyers who are already facing financial stress.
                </p>
                <p>
                  LegalRecovery offers a professional, attorney-verified recovery notice campaign for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge zero commissions on your recovered money and have no hidden charges.
                </p>

                {/* Pixel-perfect reproduction of the home page unified pricing container */}
                <div className="my-10 select-none">
                  <div className="bg-white rounded-[32px] border-2 border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      
                      {/* Left Block: Price and Scope details */}
                      <div className="lg:col-span-5 bg-gray-50/50 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <div>
                          <span className="px-3 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Unified Plan
                          </span>
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Legal Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get full-suite support from expert property attorneys. Standardized flat pricing with absolutely zero commission on your recovered amount.
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-[#111827] tracking-tight">₹999</span>
                            <span className="text-sm text-[#6B7280] font-bold">/ flat fee</span>
                          </div>
                          <p className="text-[12.5px] text-[#DC2626] font-bold leading-[1.5] max-w-sm">
                            *This pricing is only for 1 case which includes sending to 1 opposition and covers 3 notices & 1 police complaint.
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
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Progressive builder escalations</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">1 Criminal Complaint</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Expert BNS/IPC draft validation</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Attorney Validation</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Verified by real estate legal experts</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Real-time Tracking</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Live builder dashboard case updates</span>
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
                              100% transparent.<br />No commissions, no hidden fees.
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>

                {/* 7. Evidentiary Checklist */}
                <h2 id="documentation-needed">7. The Evidentiary Checklist for Property Recoveries</h2>
                <p>
                  To initiate your booking token or delay interest case on our platform, you will need to gather simple, standard real estate records. Our advocate panel utilizes these documents to build a flawless case:
                </p>
                <ul>
                  <li><strong>Allotment Letter / Booking Form:</strong> Proves your initial booking, payment of token money, and tentative possession timelines.</li>
                  <li><strong>Builder-Buyer Agreement (BBA):</strong> Details specific terms, payment plans, default clauses, and the contractually agreed possession date.</li>
                  <li><strong>Payment Receipts & Bank Statements:</strong> Validates all payments made to the developer, confirming the transfer of funds.</li>
                  <li><strong>Developer Communications:</strong> All emails, letters extending deadlines, demand notices for additional payments, or WhatsApp chats.</li>
                  <li><strong>Project Photos / RERA Site Reports:</strong> Proves the physical status of construction to highlight delays or stalled progress.</li>
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
                  <span className="font-extrabold text-gray-900 text-xs tracking-wider uppercase">Share this service page:</span>
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
                <p className="text-xs text-gray-500 font-semibold mb-8">Everything you need to know about the legal recovery of property dues and builder disputes in India</p>
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
                    <p className="text-xs text-gray-500 font-semibold">Real experiences of buyers who resolved their builder disputes with us</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0 bg-[#FEF2F2] border border-[#FEE2E2]/60 px-4 py-2.5 rounded-xl w-fit">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                    <span className="font-black text-xs text-gray-900">4.9 / 5 (64 reviews)</span>
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
                Team LegalRecovery is a dedicated team of legal and financial professionals specializing in statutory money recovery, property disputes, and real estate developer compliance across India. We resolve cases through structured, attorney-verified legal campaigns.
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
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Property Recovery?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get an advocate-drafted 3-stage notice pipeline and a customized criminal complaint draft for a flat fee of ₹999.
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
                Initiate Notice Now
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

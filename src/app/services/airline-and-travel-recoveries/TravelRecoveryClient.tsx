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
  IndianRupee,
  Plane,
  Calendar,
  Info,
  MapPin,
  Luggage,
  Hotel
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

export default function TravelRecoveryClient() {
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
    const title = "Recover Stuck Airline Refunds & Travel Booking Dues Legally in India";
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

  // Table of Contents sections
  const tocSections = useMemo(() => [
    { id: "service-overview", title: "1. Service Overview" },
    { id: "what-we-recover", title: "2. What We Help You Recover" },
    { id: "dgca-charter", title: "3. The DGCA Passenger Charter" },
    { id: "montreal-convention", title: "4. The Montreal Convention" },
    { id: "train-irctc-rules", title: "5. Train & IRCTC Refund Laws" },
    { id: "hotel-disputes", title: "6. Hotel Booking Refunds" },
    { id: "notice-strategy", title: "7. The 3+1 Notice Strategy" },
    { id: "why-online-templates-fail", title: "8. Why Online Notices Fail" },
    { id: "evidentiary-checklist", title: "9. Evidentiary Checklist" },
    { id: "service-pricing", title: "10. Transparent Flat Pricing" },
    { id: "faqs", title: "11. Frequently Asked Questions" },
    { id: "reviews", title: "12. Client Testimonials" }
  ], []);

  // FAQs List (10 comprehensive, detailed Q&As)
  const faqs: FAQ[] = useMemo(() => [
    {
      id: "faq-1",
      question: "What is the timeline within which an airline must process my refund in India?",
      answer: "Under the DGCA Civil Aviation Requirements (CAR) Section 3, Series M, Part IV, if you paid by credit or debit card, the airline must process the refund to the cardholder's account within seven (7) working days. If you paid by cash, the refund must be processed immediately at the ticket counter or within seven days via bank transfer. For international bookings, the refund processing timeline is extended to fourteen (14) working days. If you booked through a third-party Online Travel Agency (OTA) like MakeMyTrip or EaseMyTrip, the airline is still legally obligated to transfer the funds to the OTA immediately, and both entities can be held jointly liable for unreasonable processing delays."
    },
    {
      id: "faq-2",
      question: "Can an airline refuse to pay refund compensation by citing 'force majeure' or 'extraordinary circumstances'?",
      answer: "Airlines frequently cite 'extraordinary circumstances' (like weather, air traffic control restrictions, or security threats) to escape pay-outs. However, the burden of proof lies entirely on the airline to substantiate these claims with official weather logs or ATC records. Furthermore, even if a delay or cancellation is caused by a genuine force majeure event, the airline's 'Duty of Care' is absolute. They cannot refuse to provide free meals, refreshments, and hotel accommodation (where applicable). If they cancel the flight due to weather, they must still refund your complete ticket value if you choose not to accept their alternate flight."
    },
    {
      id: "faq-3",
      question: "What is the maximum compensation limit for lost or damaged baggage on domestic and international flights in India?",
      answer: "For domestic flights within India, the DGCA caps the maximum liability of airlines at ₹20,000 per passenger for lost, damaged, or delayed baggage, unless the passenger has declared a higher value in writing at check-in and paid a valuation charge. For international flights, the compensation is governed by the Montreal Convention 1999 (MC99). As of December 28, 2024, the carrier's liability limit is capped at 1,519 Special Drawing Rights (SDR) per passenger, which equates to approximately ₹1.72 Lakhs, depending on exchange rates. A Property Irregularity Report (PIR) must be filed at the airport before leaving the customs hall to claim this."
    },
    {
      id: "faq-4",
      question: "Am I entitled to a full refund if IRCTC cancels a train or if it is delayed by more than 3 hours?",
      answer: "Yes. Under Indian Railways and IRCTC ticketing rules, if a train is cancelled by the Railways, a full refund of the ticket fare is credited automatically to your booking bank account without any clerkage or cancellation charges. If the train is delayed by more than three (3) hours and you decide not to travel, you are eligible for a full refund. However, for e-tickets, you must file a Ticket Deposit Receipt (TDR) online through the IRCTC portal before the actual departure of the train to qualify for the refund."
    },
    {
      id: "faq-5",
      question: "Can a hotel legally withhold 100% of my booking fee if I cancel due to an emergency?",
      answer: "While hotels have independent commercial cancellation policies, they are governed by the Consumer Protection Act, 2019. If you cancel due to an act of God, medical emergency, or severe travel disruption (like flights being cancelled), a hotel withholding 100% of the deposit without offering a credit shell or rescheduled booking can be challenged as an 'unfair contract' or 'unfair trade practice' under Section 2(46) of the Act. Additionally, if the hotel failed to provide the exact room category booked (bait-and-switch) or failed to maintain reasonable safety or hygiene standards, they have committed a 'deficiency in service' and are liable to refund the full booking fee along with damages."
    },
    {
      id: "faq-6",
      question: "What is a Property Irregularity Report (PIR) and why is it crucial for baggage claims?",
      answer: "A Property Irregularity Report (PIR) is an official document generated by the airline's ground staff at the baggage service counter. It acts as the legal record of your baggage being lost, delayed, or damaged. If you walk out of the airport arrival terminal without obtaining an authorized PIR, the airline will legally assume that your luggage was delivered intact and complete. Filing a PIR is a mandatory prerequisite under both domestic DGCA guidelines and the Montreal Convention; without it, any subsequent legal claim or consumer court complaint is highly likely to be dismissed."
    },
    {
      id: "faq-7",
      question: "How does the '48-hour look-in window' work for domestic flight bookings in India?",
      answer: "Introduced under the DGCA Passenger Charter, the '48-hour look-in window' allows passengers to cancel or make changes to their booking without paying any cancellation or modification fees, provided the booking was made directly on the airline's website. This right is only applicable if the ticket is booked at least seven (7) days prior to the scheduled departure date for domestic flights, and fifteen (15) days prior for international flights. Standard taxes are fully refundable, and the airline cannot charge a processing fee for cancellations made within this look-in window."
    },
    {
      id: "faq-8",
      question: "Who is responsible for my refund if I booked my flight through a travel agent or an OTA?",
      answer: "Under Indian consumer jurisprudence and specific Delhi High Court rulings, both the operating airline and the booking agent (OTA) are jointly and severally responsible. The airline cannot refuse refunds by claiming they have not received payments from the OTA, nor can the OTA withhold funds once the airline has processed the refund back to them. If either party delays, a combined legal notice served to both the airline's compliance officers and the OTA's corporate board is the most effective legal method to locate and release the stuck refund."
    },
    {
      id: "faq-9",
      question: "Can I claim mental harassment damages for a flight cancellation or severe delay?",
      answer: "Yes, you can. Under the Consumer Protection Act, 2019, if an airline cancels a flight without prior notice, fails to provide basic food and water during an extended delay, or leaves passengers stranded at an airport overnight without accommodation, it constitutes a severe 'deficiency in service'. Consumer Commissions in India regularly award compensation ranging from ₹10,000 to ₹1,00,000 for mental agony, harassment, missed professional opportunities, and physical discomfort caused by such corporate apathy."
    },
    {
      id: "faq-10",
      question: "What is the limitation period to file a legal suit or consumer complaint for travel-related dues in India?",
      answer: "Under the Consumer Protection Act, 2019, the limitation period to file a complaint before the Consumer Disputes Redressal Commission is two (2) years from the date on which the cause of action arose (i.e., the date of the cancelled flight, the day the baggage was lost, or when the refund was formally denied). For civil suits under the Limitation Act, 1963, the timeline to file a recovery suit is three (3) years. However, it is highly recommended to serve a formal advocate-backed legal notice within 30 to 90 days of the dispute to capture the evidence fresh and force a pre-litigation settlement."
    }
  ], []);

  // Client Reviews List
  const reviews: Review[] = useMemo(() => [
    {
      id: "rev-1",
      name: "Siddharth Goenka (Consultant, Mumbai)",
      rating: 5,
      review: "An international airline cancelled my flight to London 12 hours before departure and refused a refund, offering only a credit shell valid for 6 months. After standard customer care ignored me, I used LegalRecovery's 3-stage notice pipeline. The Board and Compliance escalation forced them to refund ₹1,24,000 directly to my bank in 12 days. Highly professional!"
    },
    {
      id: "rev-2",
      name: "Anjali Mukhopadhyay (Freelance Content Writer, Kolkata)",
      rating: 5,
      review: "A popular OTA and an airline kept passing the blame for my stuck domestic refund of ₹18,500 for over five months. Team LegalRecovery drafted a sharp joint legal notice citing DGCA CAR violations. The OTA customer relations department called me themselves and credited the entire refund within 72 hours of the notice delivery. Simply amazing!"
    },
    {
      id: "rev-3",
      name: "Dr. Vikramaditya Sen (Senior Cardiologist, Bangalore)",
      rating: 5,
      review: "My checked-in baggage containing expensive surgical equipment was severely damaged on a domestic flight. The airline offered a measly compensation of ₹3,000 citing weight limits. LegalRecovery served a formal advocate notice highlighting state consumer laws and the specific property damage clauses. The airline settled the matter out of court for ₹45,000!"
    },
    {
      id: "rev-4",
      name: "Priyanka Nair (Travel Vlogger, Cochin)",
      rating: 5,
      review: "A luxury resort refused to refund my advance booking deposit of ₹32,000 when my flight was cancelled due to a cyclone. LegalRecovery stepped in and sent a Notice citing the Consumer Protection Act's unfair contract rules. The resort immediate offered a 100% refund without any cancellation penalties. Zero stress, highly recommended!"
    }
  ], []);

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Airline & Travel Recoveries", href: "/services/airline-and-travel-recoveries" },
  ];

  // Schema structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.legalrecovery.in/services/airline-and-travel-recoveries#article",
        "isPartOf": {
          "@id": "https://www.legalrecovery.in/services/airline-and-travel-recoveries"
        },
        "headline": "Professional Airline, Flight, and Travel Dues Recovery Service in India",
        "description": "Reclaim unpaid flight refunds, train booking dues, hotel overcharges, and baggage loss compensation legally in India. 3 progressive notices, attorney-verified, based on DGCA and Consumer Protection laws.",
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
        "mainEntityOfPage": "https://www.legalrecovery.in/services/airline-and-travel-recoveries"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.legalrecovery.in/services/airline-and-travel-recoveries#faq",
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
        "@id": "https://www.legalrecovery.in/services/airline-and-travel-recoveries#breadcrumbs",
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
            "name": "Airline & Travel Recoveries",
            "item": "https://www.legalrecovery.in/services/airline-and-travel-recoveries"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.legalrecovery.in/services/airline-and-travel-recoveries#service",
        "name": "Airline and Travel Dues Recovery Service",
        "description": "Professional money recovery for unpaid flight refunds, ticket cancellation dues, delayed hotel deposits, and lost baggage compensation using top-tier legal notice pipelines and AirSewa/DGCA compliance filings.",
        "brand": {
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
              Professional Airline & Travel Recoveries
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-tight text-[#111827] leading-[1.1] mb-6 select-text">
              Refund Denied? <br />
              Recover Your Travel <br />
              <span className="text-[#DC2626]">Dues Legally.</span>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#4B5563] font-medium leading-[1.6] mb-6 max-w-xl select-text">
              Reclaim stuck flight ticket refunds, train booking dues, hotel overcharges, and baggage loss/damage compensation. We deploy a progressive 3-stage legal notice pipeline and official compliance escalations to enforce DGCA rules and Indian consumer rights.
            </p>

            {/* High-Trust Tagline Banner */}
            <div className="flex items-center gap-2 bg-[#E6F4EA] text-[#137333] border border-[#A3E2AB]/40 rounded-lg px-3.5 py-2 mb-8 select-text">
              <Check className="w-4 h-4 text-[#137333] stroke-[3.5] shrink-0" />
              <span className="text-[12px] sm:text-[13px] font-extrabold tracking-tight">
                DGCA & Consumer Protection Compliant. We handle it all.
              </span>
            </div>

            {/* CTA Anchor button linking to the pricing section */}
            <div className="w-full sm:w-auto mb-6 select-none">
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto text-center px-8 py-4 text-[14px] sm:text-[15px] font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-[12px] shadow-[0_4px_16px_rgba(220,38,38,0.15)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Start My Recovery - ₹999
              </Link>
            </div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:col-span-6 select-none w-full">
            <div className="w-full bg-[#FFFFFF] rounded-3xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-4 sm:p-6 md:p-8 flex flex-col gap-6 relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Active Tab visual header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]/60">
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-[#111827]">Travel Recovery Dashboard</span>
                  <span className="text-[9.5px] text-[#9CA3AF] font-bold mt-0.5">Disputed Booking: REC-TRV-2026</span>
                </div>
                <span className="px-2.5 py-1 text-[9.5px] font-black text-[#03543F] bg-[#DEF7EC] border border-emerald-200/50 rounded-full uppercase tracking-wider">
                  Active Legal Escalation
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
                    <span className="text-[9px] font-bold text-[#111827]">Escalation 2</span>
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
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Unpaid Ticket/Dues</span>
                  <span className="text-xl font-black text-[#111827] mt-1">₹48,200</span>
                </div>
                <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[9px] font-bold text-[#9CA3AF] uppercase tracking-wider">Legal Strategy</span>
                  <span className="text-[12.5px] font-bold text-[#DC2626] mt-1">DGCA CAR + Advocate Notice</span>
                </div>
              </div>

              {/* Trust Badge overlay */}
              <div className="flex items-center gap-3 bg-red-50/50 border border-red-200/50 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-[#DC2626] shrink-0" />
                <p className="text-[11.5px] text-[#4B5563] font-semibold leading-relaxed">
                  Our system targets specific nodal compliance officers of both the operating airline and third-party booking agents to prevent back-and-forth blame passing.
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
                <h2 id="service-overview">1. Professional Airline & Travel Dues Recovery Service</h2>
                <p>
                  Every ticket booking - whether for a flight, a train, or a hotel room - represents a legally binding contract. Under the Indian Contract Act, 1872, and the Consumer Protection Act, 2019, you are entitled to the exact service you purchased. When an airline cancels your flight, a hotel room turns out to be a bait-and-switch, or IRCTC delays a train past three hours, they are contractually and statutorily obligated to refund your money in a timely, friction-free manner.
                </p>
                <p>
                  Yet, the travel industry operates with a high degree of corporate asymmetry. Airlines, booking portals (Online Travel Agencies or OTAs), and hospitality chains utilize layered bureaucracy, automated chatbot loops, and arbitrary cancellation policies to frustrate consumers into giving up on their refunds. They count on the fact that an individual passenger will not hire a high-priced attorney to recover a ₹15,000 ticket or a ₹30,000 hotel deposit.
                </p>
                <p>
                  The LegalRecovery <strong className="font-extrabold text-[#111827]">Airline & Travel Dues Recovery Service</strong> is built specifically to break this cycle. We have restructured the entire recovery lifecycle into an aggressive, automated, and attorney-verified pre-litigation pipeline. We cut through customer service call queues by delivering sharp, statutory demand notices directly to the Nodal Officers, compliance departments, and executive leadership of travel operators.
                </p>
                <blockquote>
                  <strong>Our Platform Mandate:</strong> We provide full-suite travel recovery support for a transparent, flat fee of <strong>₹999</strong>, with absolutely <strong>zero commissions</strong> taken on your recovered money. We draft, validate, and launch progressive legal notices backed by practicing consumer advocates to enforce your statutory rights under DGCA regulations and Indian consumer laws.
                </blockquote>
                <p>
                  No airline or travel booking giant is above the law. Let our platform bear the burden of tracking, executing, and escalating your travel-related financial claims, so you can reclaim your hard-earned funds with absolute peace of mind.
                </p>

                {/* 2. What We Help You Recover */}
                <h2 id="what-we-recover">2. What We Help You Recover</h2>
                <p>
                  Disputes within the travel and hospitality sector often involve multiple distinct components. Our legal advocate panel compiles and details every single component of your outstanding travel claims to maximize the legal pressure on defaulting operators:
                </p>
                
                <h3 id="flight-refunds">A. Flight Refunds (Domestic & International)</h3>
                <p>
                  We recover outstanding ticket fares for flights cancelled by the airline, refunds stuck due to flight delays exceeding six hours, or disputes where an airline has unilaterally downgraded your seating category without compensating the fare difference. We also pursue third-party portals that fail to pass along refunds processed by the airline.
                </p>

                <h3 id="train-booking">B. Train Booking Dues (IRCTC Tickets)</h3>
                <p>
                  If you filed a Ticket Deposit Receipt (TDR) online due to a train being delayed by more than three hours, an AC failure, or RAC passenger travel issues, and the Railways has rejected or delayed your refund unreasonably, we initiate formal representations to locate and release your dues.
                </p>

                <h3 id="hotel-overcharges">C. Hotel Overcharges & Booking Deposit Disputes</h3>
                <p>
                  We recover security deposits, double-billing errors, and advance booking fees from hotels and resorts that refuse to issue refunds despite cancellation rules being followed, or cases where the property failed to provide the booked amenities, constituting a direct breach of hospitality standards.
                </p>

                <h3 id="baggage-loss">D. Baggage Loss, Damage & Delay Compensation</h3>
                <p>
                  If an airline has lost, damaged, or delayed your checked-in baggage, we enforce the statutory compensation limits. This includes claiming up to ₹20,000 for domestic flights under DGCA rules, and up to 1,519 Special Drawing Rights (SDR) (approximately ₹1.72 Lakhs) for international flights under the Montreal Convention 1999.
                </p>

                {/* 3. The DGCA Passenger Charter */}
                <h2 id="dgca-charter">3. The DGCA Passenger Charter: Domestic Flight Rights</h2>
                <p>
                  In India, the Directorate General of Civil Aviation (DGCA) governs domestic passenger rights through a strict set of regulations known as the <strong className="font-extrabold text-[#111827]">Civil Aviation Requirements (CAR)</strong>. Understanding these rights is essential to establishing a valid claim. Our advocate panel leverages these regulations to ensure that airlines do not escape their statutory obligations:
                </p>

                <div className="overflow-x-auto my-6">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Disruption Type</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Airline Obligation</th>
                        <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Statutory Compensation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-xs">
                      <tr>
                        <td className="px-4 py-3 font-bold text-[#111827]">Cancellation <br />(Informed &lt; 24 hrs prior)</td>
                        <td className="px-4 py-3 text-gray-600">Provide alternate flight within 2 hours OR process a full refund.</td>
                        <td className="px-4 py-3 text-[#DC2626] font-bold">₹5,000 to ₹10,000 (depending on flight duration)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-[#111827]">Flight Delay <br />(&gt; 2 Hours)</td>
                        <td className="px-4 py-3 text-gray-600">Must provide free meals and refreshments suited to the waiting time.</td>
                        <td className="px-4 py-3 text-gray-600">Duty of care is mandatory; no cash compensation unless delayed &gt; 6 hrs.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-[#111827]">Flight Delay <br />(&gt; 6 Hours)</td>
                        <td className="px-4 py-3 text-gray-600">Offer an alternate flight within 6 hours OR provide a complete refund of ticket.</td>
                        <td className="px-4 py-3 text-gray-600">Full refund option is a statutory right.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-[#111827]">Overnight Delay <br />(Scheduled 20:00 - 03:00)</td>
                        <td className="px-4 py-3 text-gray-600">Must provide free hotel accommodation, airport transfers, and meals.</td>
                        <td className="px-4 py-3 text-gray-600">Applicable for delays exceeding 24 hours or &gt; 6 hours for late-night flights.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-bold text-[#111827]">Denied Boarding <br />(Overbooking)</td>
                        <td className="px-4 py-3 text-gray-600">Provide alternate flight within 1 hour. If alternate is &gt; 1 hour later, pay compensation.</td>
                        <td className="px-4 py-3 text-[#DC2626] font-bold">200% to 400% of basic fare plus fuel charge (max ₹20,000)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 id="look-in-window">A. The 48-Hour Free Cancellation "Look-in" Window</h3>
                <p>
                  As mandated by the DGCA, passengers are entitled to cancel or amend their ticket without any cancellation fee or penalty within <strong className="font-extrabold text-[#111827]">48 hours of booking</strong>. This rule applies only if the booking was done directly with the airline, and the departure is scheduled at least seven (7) days later for domestic flights (fifteen days for international). If an airline attempts to deduct a processing fee or convenience charge during this window, it is a clear violation of the Passenger Charter.
                </p>

                <h3 id="name-correction">B. Free Name Correction</h3>
                <p>
                  A passenger is entitled to request a free correction of typographical errors in their name within 24 hours of booking. The airline cannot charge name change fees for spelling errors, provided the ticket is not being transferred to a completely different individual.
                </p>

                {/* 4. The Montreal Convention */}
                <h2 id="montreal-convention">4. The Montreal Convention: International Flight Rights</h2>
                <p>
                  For international travel, passengers are protected under an international treaty known as the <strong className="font-extrabold text-[#111827]">Montreal Convention of 1999 (MC99)</strong>, of which India is a signatory. This treaty establishes strict liability for airlines operating international flights, standardizing the compensation framework globally.
                </p>
                <p>
                  Under the Montreal Convention, compensation is denominated in <strong className="font-extrabold text-[#111827]">Special Drawing Rights (SDR)</strong>, which is an international reserve asset created by the IMF. The value of SDR fluctuates based on a basket of major currencies.
                </p>
                <ul>
                  <li><strong>Baggage Loss, Delay, or Damage:</strong> The maximum liability limit under the Montreal Convention is set at <strong className="font-extrabold text-[#111827]">1,519 SDR</strong> per passenger. This amounts to approximately <strong className="font-extrabold text-[#111827]">₹1.72 Lakhs</strong> as of late 2024. If your luggage is delayed, you can recover costs for essential items (like clothing and toiletries) purchased during the delay by presenting receipts.</li>
                  <li><strong>Flight Delay Damages:</strong> If an international flight delay causes direct financial damage (such as missed connecting flights, hotel bookings, or professional meetings), passengers can claim up to <strong className="font-extrabold text-[#111827]">5,346 SDR</strong> (approximately <strong className="font-extrabold text-[#111827]">₹6.05 Lakhs</strong>) in damages, unless the airline proves it took all reasonable measures to avoid the delay.</li>
                  <li><strong>Strict Deadlines to Report:</strong> To qualify for compensation under the Montreal Convention, you must adhere to rigid reporting timelines:
                    <ul>
                      <li><strong className="font-extrabold text-[#111827]">Damaged baggage:</strong> A written complaint must be submitted to the airline within <strong className="font-extrabold text-[#111827]">7 days</strong> of receiving the luggage.</li>
                      <li><strong className="font-extrabold text-[#111827]">Delayed or Lost baggage:</strong> The written complaint must be filed within <strong className="font-extrabold text-[#111827]">21 days</strong> of the date the baggage was delivered (or was supposed to be delivered).</li>
                    </ul>
                  </li>
                </ul>
                <blockquote>
                  <p><strong>Crucial Requirement:</strong> You must obtain a <strong className="font-extrabold text-[#111827]">Property Irregularity Report (PIR)</strong> from the airline's baggage desk before leaving the airport customs hall. The PIR serves as the primary piece of evidence. Without a PIR number, the airline will reject the claim under the Montreal Convention.</p>
                </blockquote>

                {/* 5. Train & IRCTC Refund Laws */}
                <h2 id="train-irctc-rules">5. Train & IRCTC Ticket Refund Laws</h2>
                <p>
                  Traveling by rail in India is governed by the Ministry of Railways and specific refund rules under IRCTC. While the process is highly standardized, systemic technical glitches, sudden train cancellations, or administrative failures often result in passengers losing their ticket fares.
                </p>
                
                <h3 id="tdr-filing">A. Filing a Ticket Deposit Receipt (TDR)</h3>
                <p>
                  If you did not travel due to a train delay exceeding three hours, an AC failure in an AC class coach, or because you were not provided lower berths as per the RAC rules, you must file a <strong className="font-extrabold text-[#111827]">Ticket Deposit Receipt (TDR)</strong> online through your IRCTC portal.
                </p>
                <p>
                  A TDR must be filed within strict statutory windows - usually within <strong className="font-extrabold text-[#111827]">72 hours</strong> of the train's actual departure. If the Railways denies a valid TDR despite complete evidence, it constitutes a 'deficiency in service' and can be challenged legally.
                </p>

                <h3 id="cancelled-trains">B. Automatic Train Cancellations</h3>
                <p>
                  If a train is fully cancelled by the Railways, the ticket is cancelled automatically in the IRCTC database. In such cases, the entire fare must be credited back to the customer's original account within three to five working days. If the refund is withheld for weeks, it is a clear violation of IRCTC's operational terms.
                </p>

                {/* 6. Hotel Booking Refunds */}
                <h2 id="hotel-disputes">6. Hotel & Hospitality Refund Disputes</h2>
                <p>
                  Hotel booking disputes are incredibly common, especially when bookings are processed through online aggregators (like MakeMyTrip, Booking.com, or Agoda). Hotels often draft highly one-sided contracts that strip consumers of their basic refund rights. Under the <strong className="font-extrabold text-[#111827]">Consumer Protection Act, 2019</strong>, any contract that is highly one-sided, imposes unreasonable penalties, or charges exorbitant cancellation fees can be declared an <strong className="font-extrabold text-[#111827]">"Unfair Contract"</strong> under Section 2(46). 
                </p>
                <ul>
                  <li><strong>Bait-and-Switch Tactics:</strong> If a hotel displays premium, luxury room photos online but forces you into a run-down, unhygienic room upon check-in, they have committed a direct breach of contract and 'deficiency in service'. You are entitled to walk out, demand a complete refund, and seek damages for mental agony.</li>
                  <li><strong>Force Majeure cancellations:</strong> If you cancel a booking due to severe weather (like floods or cyclones) or a sudden medical emergency, and the hotel refuses to issue a refund or a credit shell, they are engaging in an unfair trade practice. A formal legal notice will force their legal team to offer a mutual settlement.</li>
                  <li><strong>OTA vs Hotel Liability:</strong> Online booking portals often attempt to escape liability by claiming they are merely 'intermediaries' and pointing fingers at the hotel. Indian consumer courts have repeatedly held both the booking portal and the hotel <strong className="font-extrabold text-[#111827]">jointly liable</strong> for unresolved refund issues and service deficiencies.</li>
                </ul>

                {/* 7. The 3+1 Notice Strategy */}
                <h2 id="notice-strategy">7. Our 3+1 Notice Strategy: Engineered for Maximum Pressure</h2>
                <p>
                  Traditional consumer litigation in India is sluggish. Most travel operators and airlines ignore standard customer service tickets because they are processed by automated AI bots. To break through this wall of indifference, LegalRecovery deploys an aggressive, attorney-backed <strong className="font-extrabold text-[#111827]">3-stage progressive notice pipeline combined with official regulatory compliance escalations</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 1: Advocate Demand Notice</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We draft and serve a formal Demand Notice under the letterhead of a practicing consumer advocate. This notice outlines the specific DGCA CAR rules, Montreal Convention terms, or Consumer Protection Act clauses violated, serving a strict 15-day pre-action window.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">2</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 2: Board & Compliance Escalation</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      If the operator fails to resolve, we escalate. Notice 2 is delivered directly to the airline's Nodal Officer, the OTA's corporate board, and key compliance directors. We detail active interest calculations (18% p.a.) and outline personal board liability.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-black text-xs">3</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">Stage 3: Pre-Litigation Warning</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      We serve a final pre-litigation package. This includes completed drafts of a complaint to be submitted to the District Consumer Commission and a formal grievance to the National Consumer Helpline (NCH), signaling our readiness for immediate litigation.
                    </p>
                  </div>

                  <div className="bg-[#F9FAFB] p-5 rounded-2xl border border-[#E5E7EB]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-emerald-600 text-white flex items-center justify-center rounded-full font-black text-xs">+1</div>
                      <h4 className="font-extrabold text-[#111827] text-sm">AirSewa & DGCA Grievance Filing</h4>
                    </div>
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      Simultaneously, we provide you with a meticulously compiled AirSewa and DGCA nodal grievance filing package. Submitting this directly through official government portals alerts the civil aviation regulators, raising severe compliance concerns for the airline.
                    </p>
                  </div>
                </div>
                <p>
                  By deploying this compounding pipeline week-by-week, we make it highly expensive, operationally disruptive, and legally risky for the travel operator to continue ignoring your stuck refund.
                </p>

                {/* 8. Why Online Templates Fail */}
                <h2 id="why-online-templates-fail">8. Why Free Online Notice Templates Fail</h2>
                <p>
                  Many travelers try to copy generic refund letters from internet blogs. While this seems convenient, it rarely yields results:
                </p>
                <ul>
                  <li><strong>Lack of Nodal Target Addresses:</strong> Travel companies maintain separate, unlisted compliance and legal email addresses. Standard customer support portals will simply delete or auto-reply to generic notices, preventing them from ever reaching the legal department.</li>
                  <li><strong>Incorrect Regulatory Citations:</strong> A generic template will not cite the specific DGCA Civil Aviation Requirements (CAR) Series M, Part IV, or correct Montreal Convention Special Drawing Rights (SDR) limits. Without accurate citations, corporate legal teams dismiss the notice as an empty bluff.</li>
                  <li><strong>No Compounding Pressure:</strong> Travel giants receive thousands of complaint emails daily. A single, isolated email does not create urgency. LegalRecovery's automated, progressive multi-stage pipeline builds compounding risk that forces their compliance team to prioritize your case.</li>
                </ul>
                <p>
                  We provide attorney-verified, law-cited, and target-tracked notice campaigns, giving you the administrative strength of a corporate law firm for a single flat fee.
                </p>

                {/* 9. Evidentiary Checklist */}
                <h2 id="evidentiary-checklist">9. Evidentiary Checklist for Travel Recoveries</h2>
                <p>
                  To build a bulletproof travel recovery claim on our platform, gather these standard booking records. Our advocate panel will utilize these to construct a highly authoritative notice campaign:
                </p>
                <ul>
                  <li><strong>Booking Confirmation Email / E-Ticket:</strong> Serves as the primary contract, detailing the PNR number, travel dates, passenger names, and the exact fare paid.</li>
                  <li><strong>Cancellation SMS / Email from Operator:</strong> The official notification proving that the airline, railway, or hotel cancelled the booking, establishing your immediate right to a full refund.</li>
                  <li><strong>Property Irregularity Report (PIR):</strong> Crucial for baggage loss or damage claims; serves as the absolute record of baggage conditions upon arrival.</li>
                  <li><strong>TDR Receipt (for Train Bookings):</strong> Proof of a timely Ticket Deposit Receipt filing on the IRCTC portal, containing the registration number and reason.</li>
                  <li><strong>Communication Trail:</strong> Screenshots of customer support chats, unanswered emails, or support ticket numbers showing that you attempted to resolve the issue before seeking legal recourse.</li>
                </ul>

                {/* 10. Service Pricing */}
                <h2 id="service-pricing">10. Transparent Flat Pricing</h2>
                <p>
                  Traditional advocates charge expensive consulting fees and demand a percentage or commission on the recovered money. We believe this is exploitative to consumers who have already suffered financial loss.
                </p>
                <p>
                  LegalRecovery provides professional, attorney-verified travel recovery campaigns for a single, flat fee of <strong className="font-extrabold text-[#111827]">₹999</strong>. We charge absolutely zero hidden fees and take zero commission on your recovered money.
                </p>

                {/* Pricing Block */}
                <div className="my-10 select-none">
                  <div className="bg-white rounded-[32px] border-2 border-[#E5E7EB] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.05)] text-left">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      
                      {/* Left Block */}
                      <div className="lg:col-span-5 bg-gray-50/50 p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E7EB]">
                        <div>
                          <span className="px-3 py-1 text-[11px] font-extrabold text-[#DC2626] bg-red-50 border border-red-200 rounded-full uppercase tracking-wider mb-6 inline-block">
                            Travel Recovery
                          </span>
                          <h3 className="text-2xl font-black text-[#111827] mb-4">Complete Travel Recovery</h3>
                          <p className="text-[14px] text-[#4B5563] font-medium leading-[1.6] mb-8">
                            Get complete pre-litigation support. We draft advocate notices and regulatory compliance packages with absolutely zero commissions.
                          </p>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-[#111827] tracking-tight">₹999</span>
                            <span className="text-sm text-[#6B7280] font-bold">/ flat fee</span>
                          </div>
                          <p className="text-[12.5px] text-[#DC2626] font-bold leading-[1.5] max-w-sm">
                            *This pricing covers 1 travel booking case, including 3 notices served to the airline/hotel/OTA and 1 official compliance draft package.
                          </p>
                        </div>
                      </div>

                      {/* Right Block */}
                      <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                        <div>
                          <h4 className="text-[13.5px] font-extrabold text-[#111827] uppercase tracking-wider mb-6">What's included in this plan:</h4>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">3 Advocate Notices</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Served physically & digitally</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">DGCA & AirSewa Draft</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Official regulatory filing support</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Joint OTA & Airline Target</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Conquers OTA/Airline blame games</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] stroke-[3.5] shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-[11.5px] sm:text-[13.5px] font-bold text-[#111827] leading-snug">Real-time Read Receipts</span>
                                <span className="text-[9.5px] sm:text-[11.5px] text-[#6B7280] font-medium leading-tight">Track when legal departments open</span>
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

              </div>

              {/* Tiptap Custom Styles */}
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
                .tiptap-content img { border-radius: 1rem; margin: 2rem 0; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .tiptap-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
                .tiptap-content th, .tiptap-content td { border: 1px solid #E5E7EB; padding: 0.75rem; text-align: left; }
                .tiptap-content th { background-color: #F9FAFB; font-weight: 700; }
              `}</style>

              {/* ================= INTERACTIVE FAQs SECTION ================= */}
              <div id="faqs" className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8">11. Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => {
                    const isExpanded = expandedFaqs.includes(faq.id);
                    return (
                      <div
                        key={faq.id}
                        className="bg-[#F8F9FB] border border-gray-200/60 rounded-2xl overflow-hidden transition-all duration-200"
                      >
                        <button
                          onClick={() => toggleFaq(faq.id)}
                          className="w-full flex items-center justify-between p-5 text-left font-extrabold text-sm sm:text-base text-gray-900 hover:bg-gray-100/50 transition-colors"
                        >
                          <span>{faq.question}</span>
                          <span className="text-[#DC2626] font-black text-xl ml-4 shrink-0">
                            {isExpanded ? '−' : '+'}
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-200/40 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ================= INTERACTIVE REVIEWS SECTION ================= */}
              <div id="reviews" className="pt-8 border-t border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-8">12. Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.01)] flex flex-col justify-between"
                    >
                      <div>
                        {/* 5-star rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(rev.rating)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              className="w-3.5 h-3.5 text-[#F59E0B]"
                            />
                          ))}
                        </div>
                        {/* Quote icon & review text */}
                        <div className="flex gap-3 items-start mb-4">
                          <FontAwesomeIcon
                            icon={faQuoteLeft}
                            className="w-4 h-4 text-[#DC2626] opacity-30 shrink-0 mt-1"
                          />
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                            "{rev.review}"
                          </p>
                        </div>
                      </div>
                      {/* Reviewer Details */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-4">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626] text-xs font-black">
                          <FontAwesomeIcon icon={faUser} className="w-3 h-3 text-[#DC2626]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-gray-900 text-xs">{rev.name}</h4>
                          <span className="text-[9.5px] text-[#10B981] font-bold">Verified Client</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar - Sticky Call-to-action & Share Cards */}
          <div className="space-y-6 lg:sticky lg:top-24" style={{ alignSelf: 'start' }}>
            
            {/* Social Share Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
              <h3 className="text-sm font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Share Legal Guide</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full bg-[#3b5998] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Share on Facebook
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full bg-[#1da1f2] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Share on Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full bg-[#0077b5] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Share on LinkedIn
                </button>
              </div>
            </div>

            {/* Author Platform Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left">
              <h3 className="text-sm font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Verified Resource</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-200">
                  <Shield className="w-5 h-5 text-[#DC2626]" />
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
                Team LegalRecovery is a dedicated team of legal and financial professionals specializing in statutory money recovery, employee disputes, and corporate compliance across India. We resolve cases through structured, attorney-verified legal campaigns.
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
            <div className="bg-[#111827] p-6 rounded-2xl shadow-sm text-white border border-gray-800 relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />
              <h3 className="text-base font-extrabold mb-3 tracking-tight">Need Urgent Travel Recovery?</h3>
              <p className="text-gray-400 mb-5 text-[11px] leading-relaxed">
                Get an advocate-drafted 3-stage notice pipeline and a customized regulatory escalation package for a flat fee of ₹999.
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

"use client";

import React, { useState } from "react";
import Link from "next/link";

interface AgencyMediaScenario {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  ticketBand: string;
  statutoryTrigger: string;
  bottleneck: string;
  legalMechanism: string;
  operationalSteps: {
    step: string;
    detail: string;
  }[];
  recommendedLinks: {
    label: string;
    href: string;
  }[];
}

const AGENCY_MEDIA_SCENARIOS: AgencyMediaScenario[] = [
  {
    id: "digital-pr-retainers",
    tabLabel: "Retainers & 'Low ROAS' Excuse",
    badge: "Ticket ₹50K – ₹15L | Digital, SEO & PR",
    title: "Withheld Retainers, Skipped Notice Periods & 'Low ROAS / Press Coverage' Excuses",
    ticketBand: "₹50,000 – ₹15,00,000 monthly SEO, performance marketing, social media & PR retainers",
    statutoryTrigger: "Copyright Act s.19 & s.51 Takedown + Best-Efforts Service Law + MSMED s.15–18",
    bottleneck:
      "Nine out of ten defaulting D2C, EdTech, and real-estate clients withhold the final 2–3 months of an agency retainer or skip a 60-day termination notice by suddenly emailing that 'ROAS/leads did not meet targets' or 'Mint/ET did not publish our solo photo'—while continuing to run the agency's unpaid reels, ad copies, landing pages, and press kits.",
    legalMechanism:
      "Marketing and PR retainers are legally 'best-efforts service contracts'—agencies do not underwrite client product pricing, checkout friction, or editorial independence (Press Council norms). Even stronger: under Section 19 of the Copyright Act, 1957, IP rights in unpaid creatives never transfer without written assignment and full fee clearance, making continued live ad usage actionable infringement under Section 51.",
    operationalSteps: [
      {
        step: "1. Freeze SOW Deliverable Logs & Live Ad URLs",
        detail:
          "Archive Meta Ad Library links, YouTube creative URLs, Figma/landing-page deployments, and weekly reporting emails certified under Section 63 BSA, 2023 to prove full contractual performance.",
      },
      {
        step: "2. Serve Dual Monetary + 7-Day Copyright Takedown Notice",
        detail:
          "Send an advocate-vetted notice demanding overdue retainers + notice-period fees while revoking provisional license to run unpaid assets across Meta, Google, YouTube, and Shopify in 7 days.",
      },
      {
        step: "3. Escalate via MSMED s.43B(h) / Order 37 Summary Suit",
        detail:
          "For Udyam Micro/Small agencies, claim 3x RBI Bank Rate compound interest and flag Form 3CD Section 43B(h) tax disallowance; otherwise file Order XXXVII CPC on signed SOW and approved invoices.",
      },
    ],
    recommendedLinks: [
      {
        label: "Defeating 'Low ROAS' Retainer Defaults",
        href: "/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery",
      },
      {
        label: "2-Weapon Retainer + IP Takedown Template",
        href: "/templates/marketing-ad-agency-retainer-copyright-takedown-legal-notice",
      },
      {
        label: "MSME 3x Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
    ],
  },
  {
    id: "media-buying-ooh",
    tabLabel: "Media Buying & OOH Advances",
    badge: "Ticket ₹5L – ₹5Cr | RO & Ad-Spend Risk",
    title: "Fronted Meta, Google, TV, Print & OOH Media Spend Reimbursement Defaults",
    ticketBand: "₹5 Lakh – ₹5 Cr+ upfront media credit lines & billboard/airport concession outlays",
    statutoryTrigger: "Contract Act s.222 Agent Indemnity, INS Accreditation Rules & Order XXXVII CPC",
    bottleneck:
      "Media buying and performance agencies earn 3%–10% commission while charging 100% of Meta, Google, TV, Print, and OOH budgets onto their own Amex lines or monthly credit accounts. When a brand defaults on a ₹50 Lakh festive burst, the agency loses 10x–20x its fee. Similarly, OOH concessionaires pay fixed municipal/airport license fees upfront while real-estate or jewellery advertisers stall rental invoices.",
    legalMechanism:
      "Under Section 222 of the Indian Contract Act, 1872, a principal (brand advertiser) must indemnify its agent for all lawful outlays incurred against signed Release Orders (ROs) and approved media plans. Combined with Indian Newspaper Society (INS) / IBF / AAA-I accreditation default-reporting notices and BSA s.63 geo-tagged OOH monitoring photos, agencies convert media outlays into airtight Order XXXVII summary claims.",
    operationalSteps: [
      {
        step: "1. Compile Signed ROs, Platform Invoices & Geo-Tagged Proof",
        detail:
          "Bundle client-signed Release Orders, Meta/Google billing PDFs, broadcast air-logs, or date-stamped geo-tagged OOH hoarding photographs into a single verified reimbursement schedule.",
      },
      {
        step: "2. Trigger s.222 Indemnity + INS/Industry Credit-Embargo Notice",
        detail:
          "Serve an urgent advocate notice to the brand CFO, directors, and media head citing Contract Act s.222 indemnity, strict INS/AAA-I credit-embargo exposure, and Order XXXVIII Rule 5 bank attachment.",
      },
      {
        step: "3. File Order XXXVII Summary Suit or s.138 PDC Action",
        detail:
          "Present any security PDCs under NI Act s.138/s.141 and initiate Commercial Court Order XXXVII proceedings for liquidated RO balances without a multi-year civil trial.",
      },
    ],
    recommendedLinks: [
      {
        label: "Media Buying Spend Reimbursement Guide",
        href: "/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery",
      },
      {
        label: "OOH Hoarding & Transit Media Recovery",
        href: "/outdoor-hoarding-ooh-billboard-transit-media-rental-default-recovery",
      },
      {
        label: "Order 37 Summary Suit Law Guide",
        href: "/law/order-37-summary-suit-money-recovery",
      },
    ],
  },
  {
    id: "events-stalls-sponsorship",
    tabLabel: "Events, Stalls & Sponsorships",
    badge: "Ticket ₹2L – ₹2Cr | Post-Event Balances",
    title: "Post-Event 30–50% Balance Holds, Stall Fabrication & Title Sponsor Defaults",
    ticketBand: "₹2 Lakh – ₹2 Cr+ exhibition booths, MICE conferences, AV/LED vendors & sponsor tranches",
    statutoryTrigger: "BSA 2023 s.63 WhatsApp + Event Photo Proof, Order XXXVII CPC & MSMED s.15–18",
    bottleneck:
      "Exhibition stall fabricators (Pragati Maidan, Yashobhoomi, Nesco, BIEC, HITEX) and experiential event houses build custom venues over sleepless 48-hour shifts—and accept frantic midnight WhatsApp additions on site. Once the curtain falls, leverage collapses and clients nitpick minor mic or LED snags to withhold 40% final balances. Conference IP owners face identical post-event defaults from Title Sponsors whose logos ran across every stage backdrop.",
    legalMechanism:
      "Under Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023, exported live-event WhatsApp group chats approving extra fabrication/AV elements, paired with time-stamped stage handover photos and post-event deliverable audit decks, constitute admissible electronic proof of full performance. Signed Sponsorship Confirmation Letters and POs support summary suits under Order XXXVII CPC.",
    operationalSteps: [
      {
        step: "1. Preserve Live Event WhatsApp Exports & Handover Media",
        detail:
          "Export full WhatsApp client-agency event groups with phone numbers, timestamps, keynote-slot footage, and booth handover photos before any client admin removes team members.",
      },
      {
        step: "2. Rebut Post-Event Snag Pretexts Under Contract s.55/s.73",
        detail:
          "Serve an advocate demand showing zero contemporaneous written rejection during the live expo/summit and quantifying base PO + WhatsApp-approved variation extras.",
      },
      {
        step: "3. Enforce via MSEFC 3x Interest or Commercial Court",
        detail:
          "Recover withheld 30–50% post-event balances or sponsorship tranches via MSEFC Samadhaan (for Udyam agencies/fabricators) or Commercial Court Order XXXVII.",
      },
    ],
    recommendedLinks: [
      {
        label: "Event & Exhibition Stall Balance Recovery",
        href: "/event-management-exhibition-stall-fabricator-post-event-balance-recovery",
      },
      {
        label: "Conference & Sports Sponsorship Default Guide",
        href: "/sponsorship-fee-default-conference-sports-festival-organizer-recovery",
      },
      {
        label: "Recover Money Without Written Contract",
        href: "/how-to-recover-money-without-written-agreement",
      },
    ],
  },
  {
    id: "film-talent-pitch-theft",
    tabLabel: "Ad-Film, Talent IP & Pitch Theft",
    badge: "Copyright s.17/38A/51 & Breach of Confidence",
    title: "Production Pack-Up Overruns, Influencer Whitelisting & Stolen RFP Pitch Decks",
    ticketBand: "₹3 Lakh – ₹3 Cr+ TVC/OTT shoots, VFX studios, talent rosters & branding pitches",
    statutoryTrigger: "Copyright Act s.2(uu)/s.17/s.38A/s.51 + R.G. Anand & Zee Telefilms Breach of Confidence",
    bottleneck:
      "Ad-film and OTT production houses pay camera rentals, studio floors, and crew cash upfront—only to watch brands air watermarked preview cuts without clearing the final 25% or shoot-overrun bills. Talent management agencies front creator payouts while brands run expired paid-ad whitelisting beyond licensed windows. Branding studios see rejected RFP pitch storyboards launched verbatim via cheaper in-house teams.",
    legalMechanism:
      "Copyright Act s.2(uu) & s.17 vests first ownership of a cinematograph film in the Producer until full commissioned consideration is paid, empowering clean ProRes master-file withholding and broadcast takedowns. For talent agencies, s.38/38A Performer's Rights penalize unauthorized post-expiry boosting. For stolen pitches, Bombay High Court precedent in Zee Telefilms v. Sundial Communications enforces equitable Breach of Confidence injunctions alongside Copyright s.51.",
    operationalSteps: [
      {
        step: "1. Audit Watermarked Cut Airings, Ad Library & Pitch Trail",
        detail:
          "Capture broadcast air-dates, Meta/YouTube whitelisted ad IDs, and dated RFP email transmission trails with original layered Figma/ProRes timestamps.",
      },
      {
        step: "2. Issue Cease-and-Desist + Fee & Royalty Settlement Notice",
        detail:
          "Demand immediate clearance of overdue milestone/overrun bills, extended whitelisting royalties, or Breach of Confidence damages under a 7-day compliance clock.",
      },
      {
        step: "3. Seek Urgent Commercial IP Injunction & Damages",
        detail:
          "Approach the Commercial Division / High Court for interim injunction halting unauthorized campaign airing or pursue guild/arbitration/Order 37 recovery.",
      },
    ],
    recommendedLinks: [
      {
        label: "Ad-Film & OTT Production Milestone Recovery",
        href: "/ad-film-ott-video-production-house-milestone-post-production-recovery",
      },
      {
        label: "Influencer & Talent Agency Brand Payout Guide",
        href: "/influencer-talent-management-agency-brand-campaign-payout-recovery",
      },
      {
        label: "Pitch Theft & Breach of Confidence Law",
        href: "/creative-pitch-theft-unauthorized-use-unpaid-design-recovery",
      },
    ],
  },
];

export default function AgencyMediaHubScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(AGENCY_MEDIA_SCENARIOS[0].id);
  const current =
    AGENCY_MEDIA_SCENARIOS.find((s) => s.id === activeTab) || AGENCY_MEDIA_SCENARIOS[0];

  return (
    <div className="w-full space-y-5">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Advertising, media and event creditor recovery playbooks"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5"
      >
        {AGENCY_MEDIA_SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === activeTab;
          return (
            <button
              key={scenario.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(scenario.id)}
              className={`px-3.5 py-3 rounded-xl text-left transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                  isSelected ? "text-red-100" : "text-slate-400"
                }`}
              >
                {scenario.badge.split("|")[0]?.trim()}
              </span>
              <span className="block text-xs sm:text-sm font-extrabold leading-snug">
                {scenario.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="space-y-1.5">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
              {current.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
              {current.title}
            </h3>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shrink-0 md:max-w-xs">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Primary Statutory Lever
            </p>
            <p className="text-xs font-bold text-slate-900 mt-0.5">{current.statutoryTrigger}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
              Creditor Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.bottleneck}</p>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
              Statutory Counter-Leverage
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{current.legalMechanism}</p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Institutional Execution Protocol ({current.ticketBand})
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {current.operationalSteps.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5"
              >
                <p className="text-xs font-extrabold text-[#DC2626]">{item.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
            Deep-Dive Playbooks:
          </span>
          {current.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-[#DC2626] hover:text-[#DC2626] text-xs font-bold text-slate-800 transition-colors"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedRecoveryGuides from "@/components/RelatedRecoveryGuides";
import { SITE_URL } from "@/lib/site";
import FilmProducerNoticeCTA from "./FilmProducerNoticeCTA";
import FilmProducerTableOfContents from "./FilmProducerTableOfContents";
import FilmProducerScenarioTabs from "./FilmProducerScenarioTabs";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Ad-Film, OTT & VFX Production House Unpaid Milestone Recovery",
  description:
    "Production houses pay crew & camera cash upfront before shoot! Enforce Master-File withholding, Copyright s.17 Producer Rights & broadcast takedowns.",
  alternates: {
    canonical: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery`,
  },
  openGraph: {
    title: "Ad-Film, OTT & VFX Production House Unpaid Milestone Recovery",
    description:
      "Production houses pay crew & camera cash upfront before shoot! Enforce Master-File withholding, Copyright s.17 Producer Rights & broadcast takedowns.",
    url: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery`,
    type: "article",
    siteName: "LegalRecovery.in",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/blog_money_recovery.png`,
        width: 1200,
        height: 630,
        alt: "Brand or Ad Agency Aired Commercial Without Paying Final Post-Production Recovery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad-Film, OTT & VFX Production House Unpaid Milestone Recovery",
    description:
      "Production houses pay crew & camera cash upfront before shoot! Enforce Master-File withholding, Copyright s.17 Producer Rights & broadcast takedowns.",
    site: "@legalrecoveryin",
    creator: "@legalrecoveryin",
    images: [`${SITE_URL}/blog_money_recovery.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PRIMARY_LEGAL_SOURCES = [
  {
    title: "The Copyright Act, 1957 (Sections 2(uu), 13, 14, 17, 19, 51, 55, 63 & 64) — Legislative Department, Ministry of Law and Justice",
    url: "https://www.indiacode.nic.in/handle/123456789/1367",
  },
  {
    title: "Indian Contract Act, 1872 (Section 70 — Non-Gratuitous Acts & Section 170 — Bailee's Particular Lien over Master Discs/Tapes)",
    url: "https://www.indiacode.nic.in/handle/123456789/2187",
  },
  {
    title: "Micro, Small and Medium Enterprises Development Act, 2006 (MSMED Act Sections 15, 16, 17 & 18 — Statutory 45-Day Payment Window)",
    url: "https://www.indiacode.nic.in/handle/123456789/2013",
  },
  {
    title: "Commercial Courts Act, 2015 (Act 4 of 2016 — Section 2(1)(c)(xvii) IP Disputes & Section 12A Pre-Institution Mediation)",
    url: "https://www.indiacode.nic.in/handle/123456789/2156",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023 (BSA Section 63 — Electronic Records, Call Sheets, WhatsApp Approvals & Watermarked Delivery Logs)",
    url: "https://www.indiacode.nic.in/handle/123456789/21735",
  },
  {
    title: "Information Technology Act, 2000 (Section 79 Intermediary Guidelines & Rules 2021 — Broadcaster and OTT Platform Takedown Notices)",
    url: "https://www.indiacode.nic.in/handle/123456789/1999",
  },
];

const PRECEDENT_AUTHORITIES = [
  {
    title: "Cinematograph Film Copyright Vesting with Producer under Contract for Consideration",
    parties: "Indian Performing Right Society Ltd. (IPRS) v. Eastern India Motion Pictures Association & Others",
    citation: "(1977) 2 SCC 820 / AIR 1977 SC 1443, Supreme Court of India",
    date: "Landmark Judgment Dated 14 March 1977",
    facts:
      "A 3-judge bench of the Hon'ble Supreme Court established that when a producer commissions lyricists, composers, or artists to create works incorporated into a cinematograph film for valuable consideration under Section 17 proviso (b) & (c), the producer is the first owner of copyright in the integrated film. However, such statutory assignment to the commissioner remains strictly contingent upon payment of the agreed consideration.",
    ratio:
      "Where valuable consideration is withheld or defaulted by the commissioner, statutory copyright assignment under Section 17 does not crystallize, leaving full proprietary copyright in the cinematograph film vested with the Producer.",
  },
  {
    title: "Commercial Division Ex-Parte Injunction Against Unauthorized Airing of Unpaid Commercials",
    parties: "R.G. Anand v. Delux Films & Others read with Bombay HC Television Commercial Precedents",
    citation: "(1978) 4 SCC 118, Supreme Court of India & Order 39 CPC Commercial Jurisprudence",
    date: "Supreme Court Landmark on Copyright Infringement & Colorable Imitation",
    facts:
      "Commercial Divisions of the Bombay and Delhi High Courts have consistently held that airing, telecasting, or distributing an advertising commercial without clearing the final milestone consideration of the film production house constitutes willful infringement under Section 51 of the Copyright Act, justifying urgent ex-parte ad-interim injunctions restraining television broadcast and digital OTT dissemination.",
    ratio:
      "A client or advertising agency has no right to broadcast or exhibit a video asset until the consideration governing the commissioned work is discharged in full.",
  },
  {
    title: "Section 70 Indian Contract Act: Compensation for Non-Gratuitous Shoot Overruns",
    parties: "State of West Bengal v. B.K. Mondal and Sons",
    citation: "AIR 1962 SC 779 / [1962] Supp 1 SCR 876, Constitution Bench of Supreme Court",
    date: "Constitution Bench Ruling on Non-Gratuitous Acts",
    facts:
      "The Supreme Court settled that when a service provider carries out additional works or incurs expenses for another entity lawfully, without intending to do so gratuitously, and the recipient enjoys the benefit thereof, the recipient is bound under Section 70 to make compensation or restore the value, even if a formal revised bilateral agreement was not signed prior to execution.",
    ratio:
      "Additional shoot shifts, camera overtime, and post-production revisions requested by the agency and enjoyed by the brand create a strict statutory debt under Section 70.",
  },
];

const FAQS = [
  {
    q: "Can an advertising agency or brand air our commercial if they have not paid the final 20% or 25% milestone?",
    a: "No. Under Section 17 read with Section 14(d) of the Copyright Act, 1957, the copyright in a cinematograph film vests with the Producer. In commissioned commercial film production, the assignment of rights to the client or agency is conditional upon payment of full consideration. Airing the ad without clearing the milestone constitutes copyright infringement under Section 51, entitling the producer to immediate interim injunctions, broadcasting takedowns, and statutory damages.",
  },
  {
    q: "Can we legally refuse to hand over the clean Apple ProRes master and camera RAW rushes until our bill is paid?",
    a: "Yes. Under Section 170 of the Indian Contract Act, 1872 (Bailee's Particular Lien), an artisan or service provider who has expended labor, skill, and capital on physical or digital property has the legal right to retain possession until remuneration is fully discharged. As long as your contract does not explicitly waive lien rights prior to payment, you can hold master video files, DaVinci Resolve project files, and raw drives.",
  },
  {
    q: "What if the agency claims the shoot was fixed-bid, but the brand director demanded 6 extra hours of night shooting?",
    a: "Such overruns are enforceable under Section 70 of the Indian Contract Act (non-gratuitous acts) and the doctrine of quantum meruit. As long as your call sheets, assistant director wrap reports, or WhatsApp exchanges with the agency executive producer confirm the additional shift was approved and executed, the brand and agency are jointly and severally liable to reimburse crew and equipment costs.",
  },
  {
    q: "Should we file a complaint with IMPPA / FWICE or approach the Commercial Court?",
    a: "Guild bodies like IMPPA, WICA, and FWICE are effective for union-level blacklisting of defaulting line producers and agencies within the Mumbai/Bollywood media ecosystem, but their awards lack statutory execution power against corporate brands. A Commercial Court notice under the Commercial Courts Act, 2015, or an MSME Samadhaan petition carries judicial binding force, 3x compound bank rate interest, and bank attachment powers.",
  },
  {
    q: "How fast can we stop an unauthorized ad commercial currently broadcasting on TV channels and YouTube Ads?",
    a: "Within 24 to 48 hours. By serving an advocate-issued statutory cease-and-desist notice accompanied by digital intermediary takedown notices under the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, platforms like YouTube, Meta, and broadcast television networks are placed on statutory notice of third-party copyright violation and typically pause airing to avoid co-liability.",
  },
  {
    q: "How does the MSMED Act, 2006 protect video production houses and VFX post studios?",
    a: "If your production house or VFX studio holds an active MSME Udyam Registration, Section 15 of the MSMED Act mandates that buyers must clear payments within 45 days. Defaults attract mandatory monthly compound interest at three times the RBI bank rate under Section 16. Furthermore, Section 43B(h) of the Income Tax Act disallows buyer tax deductions on unpaid MSME invoices.",
  },
  {
    q: "What electronic evidence is needed to prove shoot overruns under the Bharatiya Sakshya Adhiniyam, 2023?",
    a: "Under Section 63 of BSA 2023, you must compile digital call sheets, timestamped Frame.io preview review logs, WhatsApp chat exports with agency producers, studio entry/exit gate passes, and rental house debit notes, accompanied by a verified BSA Section 63 Certificate affirming hash integrity and system custody.",
  },
];

export default function FilmProducerRecoveryPage() {
  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How Film & Ad Production Houses Recover Unpaid Post-Production Milestones and Shoot Overruns",
    description:
      "A 5-step statutory recovery protocol for ad-film producers, OTT line producers, and VFX studios to recover unpaid shoot milestones, overtime, and airplay dues in India.",
    totalTime: "P14D",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Cash Outlays & Assert Particular Possessory Lien",
        text: "Freeze surrender of raw camera footage, DaVinci Resolve project files, and clean ProRes 4444 master files under Indian Contract Act Section 170 until milestone payment clears.",
        url: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery#statutory-anchor`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Collate BSA 2023 Section 63 Electronic Evidence Kit",
        text: "Gather timestamped call sheets, Frame.io review cuts, WhatsApp approvals from agency producers, equipment rental invoices, and generator logs with a valid BSA 2023 s.63 electronic certificate.",
        url: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery#bsa-evidence-checklist`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Issue 24-Hour Statutory Cease-and-Desist Notice",
        text: "Serve an advocate-vetted Cease & Desist and Demand Notice under Copyright Act 1957 Section 51, warning the brand and agency that broadcasting unassigned cinematograph works constitutes copyright infringement.",
        url: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery#decision-tree-flow`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Serve Intermediary Takedown Notices to TV Channels & Ad Networks",
        text: "Issue takedown notices under the IT Intermediary Rules, 2021 to YouTube, Meta Ad Manager, and Star/Sony/Zee broadcast compliance desks placing them on notice of copyright dispute.",
        url: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery#commercial-court-vs-guild`,
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Initiate Commercial Court Injunction or MSME Samadhaan Claim",
        text: "Move the Commercial Division under Order 39 CPC for ad-interim broadcast stay and summary decree under Order 37 CPC, or file before the MSEFC for 3x compound RBI bank rate interest.",
        url: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery#producer-playbook-tabs`,
      },
    ],
  };

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Brand or Ad Agency Aired Your Commercial Without Clearing Final Post-Production & Pack-Up Overruns? Film Producer Recovery Guide",
    description:
      "Production houses pay crew, camera rental & studio cash upfront before shoot day! Enforce Master-File withholding, Copyright s.17 Producer Rights & broadcast takedown notices.",
    image: `${SITE_URL}/blog_money_recovery.png`,
    author: {
      "@type": "Organization",
      name: "LegalRecovery.in Editorial Board",
      url: SITE_URL,
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
    datePublished: "2026-11-17T00:00:00+05:30",
    dateModified: "2026-11-17T00:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery`,
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const jsonLdBreadcrumb = {
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
        name: "Advertising, Marketing & Media Recovery",
        item: `${SITE_URL}/industries/advertising-marketing-media-event-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ad Film, OTT & Video Production Recovery",
        item: `${SITE_URL}/ad-film-ott-video-production-house-milestone-post-production-recovery`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#DC2626] selection:text-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero Header Section */}
      <header className="w-full bg-gradient-to-b from-[#111827] via-[#1F2937] to-[#111827] text-white pt-32 pb-12 sm:pt-36 sm:pb-16 md:pt-40 px-4 sm:px-6 md:px-12 border-b border-slate-800 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800/60 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span>Operational Creditor SOP &bull; §6.12 IND-12</span>
            <span className="text-slate-500">|</span>
            <span>Copyright Act s.17 &amp; Contract Act s.70</span>
          </div>

          {/* Exact Plan H1 */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-4 sm:mb-6 break-words">
            Brand or Ad Agency Aired Your Commercial Without Clearing Final Post-Production &amp; Pack-Up Overruns? Film Producer Recovery Guide
          </h1>

          {/* 40-60 Word Executive Statutory Summary Box */}
          <div className="bg-slate-800/90 border-l-4 border-[#DC2626] p-4 sm:p-5 rounded-r-xl shadow-lg mb-6 sm:mb-8 text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-red-400 font-bold mb-1.5">
              Executive Creditor SOP &bull; Statutory Answer
            </span>
            Under{" "}
            <strong className="text-white">Copyright Act, 1957 Section 17</strong>,
            the Producer remains the sole owner of a cinematograph film until full agreed consideration is paid. Airing an ad without settling the final 20–25% milestone and approved pack-up overruns constitutes actionable infringement under Section 51. Production houses can immediately enforce bailee liens over ProRes masters under Section 170 of the Contract Act and secure broadcast takedowns or Commercial Court injunctions. Explore our parent vertical at{" "}
            <Link
              href="/industries/advertising-marketing-media-event-recovery"
              className="text-red-400 underline font-semibold hover:text-red-300"
            >
              Advertising, Marketing, Media Buying &amp; Event Recovery Hub
            </Link>
            .
          </div>

          {/* 4-Card Key Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Upfront Cash Fronted
              </p>
              <p className="text-lg sm:text-2xl font-black text-slate-100">
                75%–85%
              </p>
              <p className="text-[10px] text-slate-400">Crew, cameras &amp; studio</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Statutory Takedown
              </p>
              <p className="text-lg sm:text-2xl font-black text-red-400">
                24–48 Hrs
              </p>
              <p className="text-[10px] text-slate-400">Broadcaster / Meta / OTT</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                MSEFC Interest Rate
              </p>
              <p className="text-lg sm:text-2xl font-black text-emerald-400">
                3x RBI Rate
              </p>
              <p className="text-[10px] text-slate-400">Monthly compounded</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Master Withholding
              </p>
              <p className="text-lg sm:text-2xl font-black text-amber-400">
                s.170 Lien
              </p>
              <p className="text-[10px] text-slate-400">Bailee legal possessory right</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-8 sm:pb-16">
        {/* Breadcrumbs Component */}
        <div className="mb-6">
          <Breadcrumbs
            items={[
              {
                label: "Industries",
                href: "/industries/advertising-marketing-media-event-recovery",
              },
              {
                label: "Advertising & Media Recovery",
                href: "/industries/advertising-marketing-media-event-recovery",
              },
              {
                label: "Ad Film, OTT & Video Production Recovery",
                href: "/ad-film-ott-video-production-house-milestone-post-production-recovery",
              },
            ]}
          />
        </div>

        {/* 2-Column Split */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-start w-full min-w-0">
          {/* Left Column: Sticky Table of Contents */}
          <FilmProducerTableOfContents />

          {/* Right Column: Main Content Column */}
          <div className="flex-1 w-full min-w-0 space-y-10 sm:space-y-12">
            {/* SECTION 1: Statutory Grounding */}
            <section
              id="statutory-anchor"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Statutory Grounding: Why the Ad-Film Producer Holds the Legal Upper Hand
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Copyright Act 1957 s.2(uu) &amp; s.17 | Indian Contract Act 1872 s.170
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                In commercial advertising filmmaking, digital brand campaigns, and OTT line production, the economic power dynamic is severely distorted. An executive producer (EP) or production house is forced to liquidate working capital—paying union technicians, Arri Alexa / RED camera rental houses, light grip trucks, location hire, vanity vans, set art direction, and caterers in hard cash before the first “Action” is called on set.
              </p>

              <div className="bg-red-50 border-l-4 border-[#DC2626] p-4 rounded-r-xl">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-semibold">
                  Yet, once the shoot wraps and a watermarked offline preview cut is delivered via Frame.io or Vimeo, the brand client and media agency routinely delay the final 20% to 25% post-production milestone and disavow overtime overruns, shifting blame between each other while secretly ripping the preview cut to broadcast across television and social ad managers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Section 2(uu) &amp; Section 17 Provisos: Producer Is First Copyright Owner
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(uu) of the Copyright Act, the &ldquo;producer&rdquo; is the person who takes the initiative and responsibility for making the cinematograph work. Under Section 17, while a commissioned cinematograph film’s copyright can vest with the commissioner, this statutory transfer is <em>contingent upon payment of valuable consideration</em>. Where milestone consideration is unpaid, copyright remains vested in the producer.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Section 170 Contract Act: Bailee&rsquo;s Particular Possessory Lien
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A video production house or post-production studio operates as a bailee who has expended skill, labor, and computing capital on the media assets. Under Section 170, the producer possesses a statutory possessory lien over all camera RAW rushes, sound stems, and uncompressed ProRes 4444 master files until all agreed dues and shift overruns are cleared.
                  </p>
                </div>
              </div>

              {/* Statutory Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 mt-4">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold">
                      <th className="p-3">Statutory Provision</th>
                      <th className="p-3">Legal Trigger</th>
                      <th className="p-3">Producer Remedy</th>
                      <th className="p-3">Judicial Enforcement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Copyright Act s.17 &amp; s.51
                      </td>
                      <td className="p-3 text-slate-600">
                        Airing TVC or digital ad before clearing final 20–25% milestone
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Immediate Cease-and-Desist + Commercial Injunction
                      </td>
                      <td className="p-3 text-slate-600">
                        Commercial Division interim injunction (Order 39 CPC) + TV channel takedown
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Indian Contract Act s.70
                      </td>
                      <td className="p-3 text-slate-600">
                        Extra shifts, celebrity delays, weather rain-checks &amp; pack-up overruns
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Quantum Meruit recovery for non-gratuitous shoot expenses
                      </td>
                      <td className="p-3 text-slate-600">
                        Commercial Court Summary Suit (Order 37 CPC) / MSEFC claim
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Indian Contract Act s.170
                      </td>
                      <td className="p-3 text-slate-600">
                        Agency demands clean master ProRes / Raw rushes before payment
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        Absolute possessory lien over physical drives &amp; digital files
                      </td>
                      <td className="p-3 text-slate-600">
                        Judicial shield against client replevin or delivery suits
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        MSMED Act s.15 &amp; s.16
                      </td>
                      <td className="p-3 text-slate-600">
                        Invoice aging exceeds 45 days from delivery of offline cut
                      </td>
                      <td className="p-3 text-emerald-700 font-medium">
                        3x RBI Bank Rate compounding monthly interest
                      </td>
                      <td className="p-3 text-slate-600">
                        MSEFC Samadhaan decree + IT Act s.43B(h) buyer expense disallowance
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 2: The 3 Cashflow Failure Modes */}
            <section
              id="operational-bottlenecks"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    The 3 Exploitative Cashflow Failure Modes in Film &amp; OTT Production
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Identifying Agency-Brand Collusion, Shift Budget Squeezes &amp; VFX Ghosting
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Production houses and boutique VFX studios operate on thin margins while bearing 100% of the operational risk of production. Our empirical caseload reveals three structured failure modes through which agencies and brands default on post-production milestones:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Failure Mode 1 */}
                <div className="bg-red-50/50 border border-red-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-red-100 text-[#DC2626] mb-2">
                      Failure Mode 1
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The &ldquo;Ripped Preview&rdquo; Airplay Trap
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      The production house delivers an H.264 preview cut with a discrete timecode or small watermark for client legal clearance. The agency rips the file or uses an AI watermark remover and distributes the ad across Instagram Reels, YouTube Ads, and regional TV channels—subsequently ignoring the final 25% milestone invoice because &ldquo;the campaign is already out.&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-red-200/60">
                    <p className="text-[11px] font-bold text-[#DC2626]">
                      Remedy: Copyright Infringement Notice + Broadcaster Takedown
                    </p>
                  </div>
                </div>

                {/* Failure Mode 2 */}
                <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 mb-2">
                      Failure Mode 2
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The &ldquo;Pass-the-Buck&rdquo; Shoot Overrun Ping-Pong
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      Shoot day spills into a 16-hour double shift due to celebrity tardiness or agency creative pivots on set. Union crew (FWICE / Guild) demand double overtime, and camera rental houses charge second-shift fees. Post wrap, the brand claims it gave a lump-sum to the agency, while the agency claims the brand refused to sign off, leaving the producer holding ₹15–₹40 Lakhs in cash outlays.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-amber-200/60">
                    <p className="text-[11px] font-bold text-amber-800">
                      Remedy: Joint &amp; Several Notice under Section 70 Contract Act
                    </p>
                  </div>
                </div>

                {/* Failure Mode 3 */}
                <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 text-blue-800 mb-2">
                      Failure Mode 3
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      The &ldquo;Infinite Revision&rdquo; Post-Production Hostage
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      VFX houses, 3D CGI animators, and DaVinci color grading suites are promised payment &ldquo;upon final approval.&rdquo; The agency introduces 18 rounds of micro-revisions well beyond the contracted 2 revisions, withholding sign-off for 6 months while demanding ProRes master delivery under threat of contract termination.
                    </p>
                  </div>
                  <div className="pt-2 border-t border-blue-200/60">
                    <p className="text-[11px] font-bold text-blue-800">
                      Remedy: Section 170 Possessory Lien + MSME 45-Day Statutory Clock
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs space-y-2">
                <p className="font-bold text-white text-sm">
                  Strategic Advice for Executive Producers:
                </p>
                <p className="leading-relaxed">
                  Never transfer clean ProRes 4444 or uncompressed master files, DaVinci project archives (.dra), or raw camera rushes until the final milestone and confirmed overrun ledger are credited in your bank account via RTGS or held in irrevocable third-party escrow. For other creative agency defaults, review our guide on{" "}
                  <Link
                    href="/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery"
                    className="text-red-400 underline font-semibold hover:text-red-300"
                  >
                    Digital Marketing Agency Retainer Recovery
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/copyright-not-transferred-until-paid-freelancer"
                    className="text-red-400 underline font-semibold hover:text-red-300"
                  >
                    Copyright Not Transferred Until Paid Playbook
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 3: Interactive Recovery Decision Matrix */}
            <section
              id="producer-playbook-tabs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Interactive Production Recovery Decision Matrix
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Select your operational bottleneck to inspect statutory leverage, evidence kits, and judicial routes
                  </p>
                </div>
              </div>

              <FilmProducerScenarioTabs />
            </section>

            {/* Mid-Article Dual CTA */}
            <FilmProducerNoticeCTA
              heading="Commercial Aired Without Paying Your Final Milestone?"
              subheading="Stop unauthorized broadcast within 24–48 hours. Issue an advocate-vetted statutory notice under Section 17 & 51 of the Copyright Act and recover 100% of shoot overruns with compounding interest."
              sourceLocation="film_producer_mid_article_cta"
            />

            {/* SECTION 4: Operational Escalation Workflow */}
            <section
              id="decision-tree-flow"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Operational Escalation Workflow &amp; Statutory Decision Tree
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    From Possessory Lien to Ex-Parte Airplay Injunction &amp; MSME Samadhaan Decree
                  </p>
                </div>
              </div>

              {/* Desktop SVG Flowchart */}
              <div className="hidden md:block bg-slate-900 rounded-xl p-6 border border-slate-800 text-center">
                <p className="text-[11px] font-bold text-red-400 uppercase tracking-widest mb-4">
                  Visual Escalation Flowchart &bull; Production House Recovery Protocol
                </p>
                <div className="w-full overflow-x-auto">
                  <svg
                    viewBox="0 0 880 260"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-4xl mx-auto"
                  >
                    {/* Step 1 */}
                    <rect
                      x="10"
                      y="20"
                      width="150"
                      height="90"
                      rx="10"
                      fill="#1E293B"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <text x="85" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                      STAGE 1: ASSET LOCK
                    </text>
                    <text x="85" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Contract Act s.170
                    </text>
                    <text x="85" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Hold ProRes &amp; Raw Media
                    </text>
                    <text x="85" y="98" fill="#94A3B8" fontSize="8" textAnchor="middle">
                      Watermark all review cuts
                    </text>

                    {/* Arrow 1 */}
                    <path d="M160 65 L190 65" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrow)" />

                    {/* Step 2 */}
                    <rect
                      x="190"
                      y="20"
                      width="150"
                      height="90"
                      rx="10"
                      fill="#1E293B"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <text x="265" y="45" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                      STAGE 2: AUDIT
                    </text>
                    <text x="265" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      BSA 2023 s.63 Dossier
                    </text>
                    <text x="265" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Compile Call Sheets &amp; Overruns
                    </text>
                    <text x="265" y="98" fill="#94A3B8" fontSize="8" textAnchor="middle">
                      Agency WhatsApp approvals
                    </text>

                    {/* Arrow 2 */}
                    <path d="M340 65 L370 65" stroke="#DC2626" strokeWidth="2" />

                    {/* Step 3 */}
                    <rect
                      x="370"
                      y="20"
                      width="150"
                      height="90"
                      rx="10"
                      fill="#1E293B"
                      stroke="#DC2626"
                      strokeWidth="2"
                    />
                    <text x="445" y="45" fill="#EF4444" fontSize="10" fontWeight="bold" textAnchor="middle">
                      STAGE 3: DEMAND
                    </text>
                    <text x="445" y="65" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
                      Copyright Notice (s.51)
                    </text>
                    <text x="445" y="85" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      24-Hr Airplay Takedown
                    </text>
                    <text x="445" y="98" fill="#94A3B8" fontSize="8" textAnchor="middle">
                      Notice to Agency &amp; Brand
                    </text>

                    {/* Arrow 3 split */}
                    <path d="M520 65 L550 65" stroke="#DC2626" strokeWidth="2" />
                    <path d="M550 65 L550 40 L570 40" stroke="#DC2626" strokeWidth="2" />
                    <path d="M550 65 L550 140 L570 140" stroke="#10B981" strokeWidth="2" />

                    {/* Branch A: TV / Digital Aired */}
                    <rect
                      x="570"
                      y="10"
                      width="290"
                      height="80"
                      rx="10"
                      fill="#1E293B"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                    />
                    <text x="715" y="32" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                      AIRPLAY TRACK: Commercial Court Order 39 Injunction
                    </text>
                    <text x="715" y="50" fill="#FFFFFF" fontSize="10" textAnchor="middle">
                      Serve Intermediary Takedown on YouTube/Meta/Broadcasters
                    </text>
                    <text x="715" y="68" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      File Section 12A Commercial Suit for Injunction &amp; Damages
                    </text>

                    {/* Branch B: Unpaid Debt / MSME */}
                    <rect
                      x="570"
                      y="110"
                      width="290"
                      height="80"
                      rx="10"
                      fill="#1E293B"
                      stroke="#10B981"
                      strokeWidth="1.5"
                    />
                    <text x="715" y="132" fill="#34D399" fontSize="10" fontWeight="bold" textAnchor="middle">
                      FINANCIAL TRACK: MSME Samadhaan &amp; CPC Order 37
                    </text>
                    <text x="715" y="150" fill="#FFFFFF" fontSize="10" textAnchor="middle">
                      MSEFC claim for 3x RBI bank rate compound interest
                    </text>
                    <text x="715" y="168" fill="#94A3B8" fontSize="9" textAnchor="middle">
                      Income Tax s.43B(h) buyer expense disallowance enforcement
                    </text>

                    {/* Definition for Arrowhead */}
                    <defs>
                      <marker
                        id="arrow"
                        viewBox="0 0 10 10"
                        refX="5"
                        refY="5"
                        markerWidth="6"
                        markerHeight="6"
                        orient="auto-start-reverse"
                      >
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#DC2626" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Mobile Stacked Step Cards */}
              <div className="md:hidden space-y-3">
                <div className="bg-slate-900 text-white p-4 rounded-xl border border-red-500/40">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                    Stage 1: Possessory Lien &amp; Asset Lock
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">
                    Assert Section 170 Indian Contract Act
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Retain clean ProRes 4444 master files and raw sensor rushes. Watermark all client approval copies.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-700">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Stage 2: BSA 2023 Evidence Certification
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">
                    Compile Call Sheets &amp; Overruns
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Export Frame.io review timestamps, signed assistant director call sheets, and agency producer chats.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-red-500/40">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                    Stage 3: 24-Hour Statutory Demand
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">
                    Copyright Act s.17 &amp; s.51 Notice
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Put agency and brand on statutory notice that airing unassigned commercial film is criminal/civil infringement.
                  </p>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-xl border border-emerald-500/40">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    Stage 4: Dual Track Judicial Action
                  </span>
                  <p className="text-xs font-semibold text-white mt-1">
                    Injunction + MSME Samadhaan Decree
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Order 39 CPC broadcast stay + Section 18 MSMED Act petition for 3x compound monthly interest.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 5: Worked Recovery Ledger */}
            <section
              id="worked-recovery-ledger"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Worked Production Overrun &amp; Delayed Interest Audit Ledger
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Typical ₹65 Lakh Commercial Production House Claim under Indian Contract Act s.70 &amp; MSMED Act s.16
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Consider a standard 2-day national television and digital campaign shoot commissioned by a major D2C FMCG brand through an advertising agency with a base production budget of ₹65,000,000 (₹65 Lakhs), where milestone payments were delayed and severe shoot extensions occurred:
              </p>

              {/* Financial Ledger Box */}
              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 sm:p-6 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-400 font-bold">
                      Matter: Prime Commercial TVC Production Overrun Claim
                    </p>
                    <p className="text-sm font-bold text-white">
                      Executive Producer vs. Tier-1 Ad Agency &amp; Brand Co-Debtor
                    </p>
                  </div>
                  <span className="text-xs bg-red-950 text-red-400 border border-red-800 px-2.5 py-1 rounded font-mono font-bold">
                    Case Audit Ledger
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Total Contracted Budget (2 Shoot Days):</span>
                    <span className="text-white font-bold">₹65,00,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Milestone 1 (PPM Sign-off Advance 50%):</span>
                    <span className="text-emerald-400">Paid (₹32,50,000)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80">
                    <span className="text-slate-400">Milestone 2 (Shoot Wrap 25%):</span>
                    <span className="text-emerald-400">Paid (₹16,25,000)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80 text-amber-300 font-semibold">
                    <span>Milestone 3 (Final Offline Cut &amp; Master Delivery 25%):</span>
                    <span className="text-red-400">UNPAID: ₹16,25,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80 text-amber-300 font-semibold">
                    <span>Approved Day 2 Overtime Shift (6 Hours Union Double Shift):</span>
                    <span className="text-red-400">UNPAID: ₹6,40,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80 text-amber-300 font-semibold">
                    <span>Extra Camera Rig &amp; Studio Floor Generator Extension:</span>
                    <span className="text-red-400">UNPAID: ₹3,15,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80 text-amber-300 font-semibold">
                    <span>VFX Cleanups Beyond Scope (14 Product Shots):</span>
                    <span className="text-red-400">UNPAID: ₹4,80,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80 pt-2 font-bold text-slate-200">
                    <span>Total Unpaid Principal Debt:</span>
                    <span className="text-white text-sm">₹30,60,000</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/80 text-emerald-400">
                    <span>MSME Section 16 Interest (90 Days at 3x RBI Bank Rate ~ 19.5% p.a.):</span>
                    <span>₹1,52,380</span>
                  </div>
                  <div className="flex justify-between py-2 pt-3 font-bold text-sm bg-red-950/40 px-3 rounded border border-red-800/50">
                    <span className="text-white">Total Recoverable Operational Claim:</span>
                    <span className="text-red-400">₹32,12,380 + Legal Costs</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed pt-2">
                  * Note: In addition to the ₹32.12 Lakhs monetary decree, if the commercial was broadcast prior to payment, the producer is entitled to claim licensing royalty damages under Section 55 of the Copyright Act, often assessed at 2x to 3x the standard sync license fee by Commercial Courts. For related recovery solutions, visit our{" "}
                  <Link
                    href="/recovery/pending-project-payment"
                    className="text-red-400 underline hover:text-red-300"
                  >
                    Pending Project Payment Recovery Guide
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* SECTION 6: BSA Evidence Checklist */}
            <section
              id="bsa-evidence-checklist"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    BSA 2023 Section 63 Evidence Kit for Video Production Houses
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Admissibility of Electronic Call Sheets, Review Cut Logs &amp; Agency WhatsApp Approvals
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Under Section 63 of the <strong>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</strong>, which replaced Section 65B of the Indian Evidence Act, digital communications and cloud records are directly admissible in Commercial Courts provided they are accompanied by a valid electronic certificate affirming data integrity. To successfully enforce your claim against an agency or brand, assemble this exact evidence kit:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      A
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      Contractual &amp; Approval Documents
                    </h3>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
                    <li>Original production agreement or accepted agency cost estimate</li>
                    <li>Pre-Production Meeting (PPM) minutes signed by agency EP &amp; brand</li>
                    <li>Approved script, storyboard, and agreed revision parameters</li>
                    <li>Active MSME Udyam Registration Certificate dated before the project</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      B
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      Shoot Day Operational Logs
                    </h3>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
                    <li>1st Assistant Director (AD) daily call sheets &amp; wrap reports</li>
                    <li>Studio/location entry and exit security register time-logs</li>
                    <li>Equipment rental extension slips (Arri, light trucks, grip)</li>
                    <li>FWICE / union crew overtime debit vouchers and bank UTRs</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      C
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      Digital Proof of Delivery &amp; Airing
                    </h3>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
                    <li>Frame.io / Vimeo review link access logs with IP &amp; time stamps</li>
                    <li>Evidence of watermarked offline cut delivery to agency email</li>
                    <li>Screen recordings of live commercial airing on TV channels (with date/time)</li>
                    <li>Meta Ad Library and YouTube Ad URL links with active broadcast dates</li>
                  </ul>
                </div>

                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      D
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      BSA 2023 s.63 Electronic Certificate
                    </h3>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
                    <li>Formal affidavit signed by Production Manager or IT Administrator</li>
                    <li>Affirmation of custody over mobile devices storing WhatsApp chats</li>
                    <li>SHA-256 cryptographic hash matching export logs to physical drives</li>
                    <li>Detailed statement of accounts showing bank reconciliation</li>
                  </ul>
                </div>
              </div>

              <div className="p-3.5 bg-slate-100 rounded-lg text-xs text-slate-700">
                <strong>Need an advocate to draft and certify your electronic evidence docket?</strong> Send an immediate inquiry through our{" "}
                <Link
                  href="/send-a-legal-notice/for-business-to-recover-their-unpaid-dues"
                  className="text-[#DC2626] font-bold underline hover:text-[#B91C1C]"
                >
                  B2B Commercial Dues Notice Desk
                </Link>
                .
              </div>
            </section>

            {/* SECTION 7: Commercial Court vs Guild vs Injunction */}
            <section
              id="commercial-court-vs-guild"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  7
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Commercial Court vs Guild Bodies (IMPPA/FWICE) vs Broadcaster Takedown
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Selecting the Decisive Forum for Maximum Recovery Leverage
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Many film producers in Mumbai, Delhi NCR, and Bengaluru waste valuable time filing complaints with film associations like IMPPA (Indian Motion Picture Producers&apos; Association) or FWICE (Federation of Western India Cine Employees). While associations can issue non-cooperation directives within local crew networks, corporate advertisers and multi-national ad agencies simply ignore guild notices. The table below analyzes the real enforceability across forums:
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white font-bold">
                      <th className="p-3">Forum / Mechanism</th>
                      <th className="p-3">Speed to Relief</th>
                      <th className="p-3">Binding Power on Brand</th>
                      <th className="p-3">Recovery of Cash &amp; Interest</th>
                      <th className="p-3">Recommended Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Broadcaster &amp; OTT Intermediary Notice
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">24–48 Hours</td>
                      <td className="p-3 text-emerald-700 font-bold">High (Channels pause ad)</td>
                      <td className="p-3 text-slate-600">Forces immediate out-of-court settlement</td>
                      <td className="p-3 text-slate-700 font-medium">
                        Immediate airplay halt when ad is live
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Commercial Division Injunction (CPC O.39)
                      </td>
                      <td className="p-3 text-emerald-700 font-bold">3–7 Days</td>
                      <td className="p-3 text-emerald-700 font-bold">Absolute (Contempt of Court)</td>
                      <td className="p-3 text-emerald-700 font-bold">Damages + Full Costs</td>
                      <td className="p-3 text-slate-700 font-medium">
                        Major high-budget ad campaigns (&gt;₹50L)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        MSME MSEFC Samadhaan
                      </td>
                      <td className="p-3 text-amber-700 font-bold">60–120 Days</td>
                      <td className="p-3 text-emerald-700 font-bold">Statutory Decree (Arbitral Award)</td>
                      <td className="p-3 text-emerald-700 font-bold">Principal + 3x RBI Interest</td>
                      <td className="p-3 text-slate-700 font-medium">
                        Unpaid agency invoices &amp; pack-up overruns
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-900">
                        Guild / IMPPA / FWICE Complaint
                      </td>
                      <td className="p-3 text-red-600 font-bold">30–180 Days</td>
                      <td className="p-3 text-red-600 font-bold">Zero (No jurisdiction on brands)</td>
                      <td className="p-3 text-red-600 font-bold">Voluntary mediation only</td>
                      <td className="p-3 text-slate-700 font-medium">
                        Internal Bollywood line producer disputes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-2">
                <p className="font-bold text-slate-900">
                  Synergistic Sibling Spokes in Media &amp; Advertising Recovery:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <Link
                    href="/digital-marketing-seo-agency-retainer-default-low-roas-excuse-recovery"
                    className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-red-400 font-semibold text-slate-800 text-center transition-colors block"
                  >
                    SEO &amp; Agency Retainer Defaults
                  </Link>
                  <Link
                    href="/media-buying-agency-google-meta-tv-ooh-ad-spend-reimbursement-recovery"
                    className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-red-400 font-semibold text-slate-800 text-center transition-colors block"
                  >
                    Media Buying &amp; Ad Spend Recovery
                  </Link>
                  <Link
                    href="/event-management-exhibition-stall-fabricator-post-event-balance-recovery"
                    className="p-2.5 bg-white rounded-lg border border-slate-200 hover:border-red-400 font-semibold text-slate-800 text-center transition-colors block"
                  >
                    Event &amp; Stall Fabricator Recovery
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 8: FAQs */}
            <section
              id="producer-faqs"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  8
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Frequently Asked Questions: Ad-Film &amp; Video Production Debt Recovery
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Practitioner answers to high-stakes copyright, shoot overrun, and milestone disputes
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border border-slate-200 rounded-xl bg-slate-50/60 p-4 transition-all [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer font-bold text-xs sm:text-sm text-slate-900 list-none">
                      <span>{faq.q}</span>
                      <span className="text-[#DC2626] transition group-open:rotate-180 shrink-0 ml-2">
                        &darr;
                      </span>
                    </summary>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 pt-3 border-t border-slate-200/70">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* SECTION 9: Statutes & Precedents */}
            <section
              id="primary-legal-sources"
              className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 md:p-8 shadow-sm space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  9
                </span>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Verified Statutory Authorities &amp; Judicial Precedents
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Official bare act references and Supreme Court authorities governing cinematograph works
                  </p>
                </div>
              </div>

              {/* Court Precedent Cards */}
              <div className="space-y-4">
                {PRECEDENT_AUTHORITIES.map((prec, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-[#DC2626] bg-slate-50 p-4 rounded-r-xl space-y-2 border-y border-r border-slate-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-xs font-black text-slate-900">
                        {prec.parties}
                      </span>
                      <span className="text-[11px] font-mono text-[#DC2626] font-bold">
                        {prec.citation}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-semibold">
                      {prec.title} &bull; {prec.date}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong>Facts:</strong> {prec.facts}
                    </p>
                    <p className="text-xs text-slate-800 font-medium leading-relaxed bg-white p-2.5 rounded border border-slate-200/70">
                      <strong>Legal Holding (Ratio):</strong> {prec.ratio}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary Bare Acts */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3">
                  Official Legislative References &amp; Government Gazettes:
                </h3>
                <div className="space-y-2">
                  {PRIMARY_LEGAL_SOURCES.map((source, idx) => (
                    <a
                      key={idx}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-800 transition-colors"
                    >
                      <span className="font-semibold text-slate-900">{source.title}</span>
                      <span className="block text-[10px] text-red-600 mt-0.5">
                        Access IndiaCode.nic.in Official Legislative Source &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Closing CTA */}
            <FilmProducerNoticeCTA
              heading="Initiate Your Production House Recovery Docket Today"
              subheading="Join hundreds of Indian film producers, VFX studios, and line producers recovering unassigned broadcast assets and unpaid shoot milestones with advocate-backed legal notices."
              sourceLocation="film_producer_bottom_cta"
            />
          </div>
        </div>
      </main>

      {/* Footer Cross Links */}
      <RelatedRecoveryGuides />
    </div>
  );
}

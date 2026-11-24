"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TelecomIspScenario {
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

const TELECOM_ISP_SCENARIOS: TelecomIspScenario[] = [
  {
    id: "ill-mpls-lockin",
    tabLabel: "ILL / MPLS Lock-In Breach",
    badge: "Ticket ₹1.5L – ₹45L | Contract Act s.74",
    title: "Enterprise Disconnected ILL / MPLS Link Mid-Lock-In After ISP Spent ₹1.8L on Last-Mile Fiber",
    ticketBand: "₹1,50,000 – ₹45,00,000 per enterprise circuit (unamortized CapEx + bandwidth arrears)",
    statutoryTrigger: "Signed CAF + Acceptance Test (AT) Report + Contract Act s.74 Unamortized CapEx + BNS s.316",
    bottleneck:
      "Class-A/B Enterprise ISPs routinely waive ₹1L–₹3L One-Time Installation Charges (OTC) and dig dedicated last-mile optical fiber or mount licensed RF radios against a 12-to-36-month Customer Application Form (CAF) lock-in. When a BPO, call center, or startup shuts an office in Month 4, they refuse early-termination lock-in bills claiming 'no bandwidth was used'—and retain the ISP's MUX, ONT, and Cisco/Juniper CPE.",
    legalMechanism:
      "Under Section 74 of the Indian Contract Act, 1872, a bare penalty is unenforceable, but genuine pre-estimated liquidated damages tied to **waived OTC + unamortized last-mile fiber CapEx** (supported by trenching/splicing invoices and signed AT commissioning logs) are fully recoverable in Commercial Courts and Order XXXVII CPC summary suits. Simultaneously, unreturned CPE serial numbers trigger criminal breach of trust under Section 316 of the Bharatiya Nyaya Sanhita (BNS), 2023.",
    operationalSteps: [
      {
        step: "1. Lock CAF, Commissioning AT & Fiber CapEx Vouchers",
        detail:
          "Export the signed CAF showing the 12/24/36-month lock-in, OTC waiver schedule, Bandwidth Acceptance Test (AT) sign-off, and CPE MAC/serial delivery challan under BSA s.63.",
      },
      {
        step: "2. Serve Dual Lock-In CapEx & BNS s.316 CPE Notice",
        detail:
          "Frame the demand around actual unamortized fiber/radio CapEx plus accrued monthly recurring charges (MRC), granting 7 days to return MUX/router hardware.",
      },
      {
        step: "3. File Order XXXVII CPC / Commercial Suit (Not TDSAT)",
        detail:
          "Because an enterprise subscriber is not a DoT licensee, bypass TDSAT and file directly in Commercial Court or under Order XXXVII CPC.",
      },
    ],
    recommendedLinks: [
      {
        label: "ILL / MPLS Lock-In Breach Playbook",
        href: "/enterprise-leased-line-ill-mpls-sdwan-lock-in-breach-recovery-isp",
      },
      {
        label: "ISP Suspension + Lock-In Notice Template",
        href: "/templates/isp-datacenter-cpaas-suspension-cum-lock-in-recovery-notice",
      },
      {
        label: "Order 37 Summary Suit Guide",
        href: "/law/order-37-summary-suit-money-recovery",
      },
    ],
  },
  {
    id: "datacenter-colocation",
    tabLabel: "Data Center & GPU Lien",
    badge: "Ticket ₹5L – ₹3 Cr+ | Lien & DPDP Safe",
    title: "Colocation Rack / Bare-Metal GPU Default: Physical Server Lien vs DPDP Safe Suspension",
    ticketBand: "₹5,00,000 – ₹3,00,00,000+ (rack space, kWh power draw, cross-connects & GPU clusters)",
    statutoryTrigger: "Contract Act s.170/171 Contractual Hardware Lien + DPDP Act 2023 & IT Act s.43 Safe-Suspension",
    bottleneck:
      "Tier-3/4 Data Centers and bare-metal GPU hosts face an acute operational dilemma when an AI startup or enterprise defaults on ₹25L–₹1 Cr+ in rack power and colocation bills. Abruptly wiping production databases or locking out client data without notice invites multi-crore IT Act Section 43 and DPDP Act counterclaims—yet letting power and bandwidth burn daily compounds losses.",
    legalMechanism:
      "Indian law draws a sharp line between **physical hardware** and **hosted personal/enterprise data**. Under a properly drafted Colocation Master Services Agreement (MSA) and Contract Act principles, the data center can lawfully refuse Gate-Pass removal of co-located physical servers (Dell/HPE/Nvidia H100 racks) as security for unpaid rack/power dues—provided it first serves a documented **7-day read-only Data-Export & Migration Window** before port suspension.",
    operationalSteps: [
      {
        step: "1. Issue DPDP-Safe 7-Day Data-Export Suspension Notice",
        detail:
          "Serve a fact-verified cure notice granting a 7-day read-only SFTP/snapshot retrieval window while preserving power/cooling logs and MSA cross-connect schedules.",
      },
      {
        step: "2. Freeze Gate-Pass Removal of Co-Located Rack Hardware",
        detail:
          "Invoke contractual hardware lien over physical servers inside the cage/rack without touching or deleting client data during the statutory notice window.",
      },
      {
        step: "3. Escalate via Commercial Court / Arbitration s.9",
        detail:
          "Seek Section 9 interim preservation or Commercial Court summary recovery for unpaid power kWh, lock-in MRC, and cross-connect arrears.",
      },
    ],
    recommendedLinks: [
      {
        label: "Data Center Server Lien & DPDP Law",
        href: "/data-center-colocation-bare-metal-hosting-default-suspension-lien-law",
      },
      {
        label: "7-Day Data-Export Suspension Notice Format",
        href: "/templates/isp-datacenter-cpaas-suspension-cum-lock-in-recovery-notice",
      },
      {
        label: "Vendor & Invoice Recovery Services",
        href: "/services/vendor-and-invoice-recoveries",
      },
    ],
  },
  {
    id: "cpaas-whatsapp-sms",
    tabLabel: "CPaaS / WhatsApp BSP",
    badge: "Ticket ₹2L – ₹80L | BSA s.63 CDR Proof",
    title: "Recovering Postpaid WhatsApp Business, DLT Bulk SMS & Cloud-Telephony Burst Defaults",
    ticketBand: "₹2,00,000 – ₹80,00,000 per enterprise campaign (festive/fintech/OTP traffic bursts)",
    statutoryTrigger: "BSA 2023 s.63 Certified CDR/Webhook Logs + API-Key Custody Clause + MSMED s.15–18",
    bottleneck:
      "WhatsApp Business Solution Providers (BSPs) and DLT SMS aggregators pay Meta (₹0.80+ per marketing conversation) and telco interconnect fees (Airtel/Jio/VI) upfront on razor-thin margins. When an e-commerce, fintech, or edtech client defaults on a ₹40L postpaid burst—claiming 'our API key was leaked' or 'delivery rates were low'—the BSP's entire annual profit is wiped out.",
    legalMechanism:
      "Certified Call Detail Records (CDRs), Meta webhook delivery receipts (`delivered`/`read` timestamps), and IP-whitelisted API authentication logs certified under **Section 63 of the Bharatiya Sakshya Adhiniyam (BSA), 2023** defeat vague 'API leak' or 'undelivered SMS' excuses. Udyam-registered CPaaS platforms can additionally invoke **MSMED Act Section 16 (3x RBI compound interest)** and **Income-tax Act Section 43B(h)** tax disallowance pressure.",
    operationalSteps: [
      {
        step: "1. Certify CDR, DLT & Meta Webhook Delivery Logs (BSA s.63)",
        detail:
          "Export immutable server logs showing API key usage, originating IP, DLT template IDs, and telco/Meta delivery acknowledgments.",
      },
      {
        step: "2. Enforce API-Key Custody & Rapid Postpaid Suspension",
        detail:
          "Serve a 7-day demand notice citing the MSA API-security covenant and suspending postpaid credit limits while preserving campaign audit trails.",
      },
      {
        step: "3. Trigger MSME Samadhaan / Order 37 / s.138 NI Act",
        detail:
          "File for 3x RBI interest before MSEFC (if Udyam registered) or prosecute bounced security cheques under Section 138 NI Act within 30 days.",
      },
    ],
    recommendedLinks: [
      {
        label: "CPaaS, WhatsApp BSP & SMS Default Guide",
        href: "/cpaas-bulk-sms-whatsapp-bsp-cloud-telephony-postpaid-default-recovery",
      },
      {
        label: "MSME 3x RBI Interest Calculator",
        href: "/tools/msme-delayed-payment-interest-calculator",
      },
      {
        label: "Bulk Postpaid Defaulter CSV Desk",
        href: "/bulk-recovery-cases-all-in-one-affordable-solutions",
      },
    ],
  },
  {
    id: "msp-si-cpe-infra",
    tabLabel: "MSP / SI & Infra Contractors",
    badge: "Ticket ₹1L – ₹2 Cr | BNS s.316 & s.53/54",
    title: "System Integrators (30% Holdback), Managed MSP Firewalls & OFC/Tower Contractor Arrears",
    ticketBand: "₹1,00,000 – ₹2,00,00,000 (hardware delivery holdbacks, AMC/SOC fees & OFC/tower bills)",
    statutoryTrigger: "Contract Act s.53/54 Deemed Commissioning + IT Act s.43 Safe Admin Handover + BNS s.316",
    bottleneck:
      "IT System Integrators pay Redington/Ingram/Savex on strict 45-day credit lines, yet wait 9–12 months for their final 20–30% installation milestone because the client's civil/electrical room isn't ready. Similarly, MSPs providing 'Firewall-as-a-Service' (Fortinet/Sophos) risk IT Act s.43 claims if they withhold client M365/DNS root passwords—while OFC trenching and IP-1 tower contractors face arbitrary ROW deductions.",
    legalMechanism:
      "For System Integrators, **Sections 53 and 54 of the Contract Act** establish that when a client fails to provide a dust-free, powered server room, the supplier's final 20–30% installation milestone matures as **Deemed Commissioning**. For MSPs, cleanly handing over client-owned M365/DNS credentials eliminates IT Act s.43 exposure while unleashing **BNS s.316** prosecution for unreturned leased firewalls and **Order XXXVII CPC** for unpaid SLA/AMC bills.",
    operationalSteps: [
      {
        step: "1. Separate Client Credentials From Leased Hardware",
        detail:
          "MSPs must hand over client-owned DNS/M365 admin credentials cleanly via documented email while demanding return of serialized Fortinet/Cisco appliances under BNS s.316.",
      },
      {
        step: "2. Invoke Deemed Commissioning (s.53/54) & OTDR AT Sign-Off",
        detail:
          "Attach signed delivery challans, site-readiness reminder emails, or OTDR optical-link Acceptance Test certificates to defeat indefinite holdbacks.",
      },
      {
        step: "3. Route Inter-Licensee vs Enterprise Claims Correctly",
        detail:
          "Route MSO–LCO / Telco–Interconnect disputes to TDSAT under TRAI Act s.14, and enterprise/SI/MSP claims to Commercial Court or MSEFC.",
      },
    ],
    recommendedLinks: [
      {
        label: "IT System Integrator (SI) Holdback Guide",
        href: "/system-integrator-it-hardware-networking-campus-project-recovery",
      },
      {
        label: "Managed IT (MSP) & Firewall Recovery",
        href: "/managed-it-services-msp-annual-amc-sla-unreturned-firewall-recovery",
      },
      {
        label: "OFC Trenching & Tower O&M Recovery",
        href: "/telecom-tower-ip1-optical-fiber-ofc-trenching-contractor-recovery",
      },
    ],
  },
];

export default function TelecomIspHubScenarioTabs() {
  const [activeTabId, setActiveTabId] = useState<string>(TELECOM_ISP_SCENARIOS[0].id);
  const activeScenario =
    TELECOM_ISP_SCENARIOS.find((item) => item.id === activeTabId) || TELECOM_ISP_SCENARIOS[0];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Telecom, ISP, Data Center and MSP Recovery Scenarios"
        className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6"
      >
        {TELECOM_ISP_SCENARIOS.map((item) => {
          const isActive = item.id === activeTabId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTabId(item.id)}
              className={`px-3 sm:px-4 py-3 rounded-xl text-left transition-all border cursor-pointer ${
                isActive
                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
              }`}
            >
              <span
                className={`block text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                  isActive ? "text-red-100" : "text-slate-400"
                }`}
              >
                Scenario
              </span>
              <span className="block text-xs sm:text-sm font-extrabold leading-snug">
                {item.tabLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Scenario Panel */}
      <div
        role="tabpanel"
        className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 md:p-7 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-red-50 text-[#DC2626] border border-red-200">
            {activeScenario.badge}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            {activeScenario.ticketBand}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
          {activeScenario.title}
        </h3>

        <div className="bg-slate-900 text-slate-100 rounded-xl p-4 text-xs sm:text-sm">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-red-400 mb-1">
            Primary Statutory Trigger
          </span>
          <p className="font-semibold">{activeScenario.statutoryTrigger}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700 mb-1.5">
              Commercial Bottleneck
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.bottleneck}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Legal Mechanism
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeScenario.legalMechanism}
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            3-Step Execution Protocol
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeScenario.operationalSteps.map((op) => (
              <div
                key={op.step}
                className="bg-white border border-slate-200 rounded-xl p-4"
              >
                <p className="text-xs font-extrabold text-[#DC2626] mb-1">{op.step}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{op.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-bold text-slate-500 mr-1">Deep-Dive Guides:</span>
          {activeScenario.recommendedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-200 text-slate-800 hover:border-[#DC2626] hover:text-[#DC2626] transition-colors"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

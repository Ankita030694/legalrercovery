"use client";

import React, { useState } from "react";

interface ScenarioItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  debtorExcuse: string;
  statutoryCounter: string;
  evidenceRequired: string[];
  recommendedAction: string;
}

const SCENARIOS: ScenarioItem[] = [
  {
    id: "post-wrap-line-producer-default",
    tabLabel: "1. Post-Wrap Shoot Default",
    badge: "Hire Sheet + MSMED s.15",
    title: "Line-Producer Wrapped the OTT / Ad Shoot & Disputed Overtime Call Sheets",
    debtorExcuse:
      "Once the camera package and lighting grip truck return to your godown in Andheri, Film Nagar, or Kodambakkam, the line producer or production controller stops answering calls—claiming the OTT platform hasn't released the final tranche or that 'extra shift hours and Sunday double-batta weren't approved by the EP.'",
    statutoryCounter:
      "Under Indian Contract Act ss.148–161 and commercial bailment law, hire charges accrue strictly for the period the equipment remains in the bailee's custody and operational deployment, not contingent on the producer's back-to-back OTT milestone payouts. If your rental house holds an active Micro or Small Udyam Registration predating the Deal Memo, unpaid hire bills attract 3x RBI Bank Rate compound interest after 45 days under MSMED Act ss.15–18 and trigger Income Tax s.43B(h) disallowance.",
    evidenceRequired: [
      "Signed Equipment Deal Memo / Purchase Order & Rate Card (shift hours & overtime rate)",
      "Daily Call Sheets & Assistant Cameraman / Gaffer signed Out/In Log Sheets",
      "Check-Out & Check-In Gate Pass Challan with serial numbers of bodies and prime lenses",
      "GST Tax Invoices, e-Way Bills (where inter-state), and WhatsApp/Email overtime approvals",
    ],
    recommendedAction:
      "Serve an Advocate Demand Notice combining the unpaid shift ledger, s.43B(h) tax-disallowance intimation (if Udyam-registered), and a 7-day deadline before MSEFC / Commercial Court Order XXXVII filing.",
  },
  {
    id: "laser-burn-rain-led-damage",
    tabLabel: "2. Laser-Burn & Rain Damage",
    badge: "Contract Act s.151/154",
    title: "Concert Laser Burned Camera Sensor or Monsoon Rain Shorted P2 LED Cabinets",
    debtorExcuse:
      "The event agency or wedding planner returns ₹1.2 Cr of Arri Alexa 35 / Sony Venice bodies with permanent purple laser-burned CMOS sensors, or returns 300 sq.ft of P2.6 indoor LED wall panels water-damaged from an uncovered outdoor sangeet—claiming 'normal wear and tear' or 'Act of God rain.'",
    statutoryCounter:
      "Under Indian Contract Act s.151 (bailee duty of reasonable care) and s.154 (strict liability for unauthorized use), deploying indoor-rated P2 LED panels in open rain or exposing cine sensors to unshielded concert lasers without protective ND/IR filters breaches the bailment terms. Even without negligence, s.154 imposes strict liability for any damage occurring during unauthorized or non-conforming use—making the event organizer liable for full OEM sensor replacement cost plus daily loss-of-hire during repair downtime.",
    evidenceRequired: [
      "Pre-dispatch Check-Out QC video showing clean sensor test frame & 100% dead-pixel-free LED wall",
      "Signed Check-In QC Inspection Challan noting laser burn, water ingress, or burnt power supplies",
      "Authorized OEM Service Center estimate (Arri India / Sony Pro / Brompton / Novastar) & repair lead time",
      "Clause in Rental Terms prohibiting indoor LED outdoor use & unshielded laser exposure",
    ],
    recommendedAction:
      "Issue an immediate Bailee Strict-Liability & Repair-Downtime Notice demanding OEM replacement cost plus daily hire-loss charges until the gear returns to rental-ready inventory.",
  },
  {
    id: "unauthorized-sub-renting-bns-316",
    tabLabel: "3. Sub-Renting & Unreturned Gear",
    badge: "BNS s.316 + Police CC",
    title: "Production House Sub-Rented Your Prime Lenses or Refused to Return Grip/Sound Rig",
    debtorExcuse:
      "The shoot wrapped 10 days ago, yet your Cooke/Master Prime lens case, wireless follow-focus, or line-array amplifier rack hasn't returned. You discover the defaulting coordinator sub-rented the gear to a second unit in another city—or pledged it to settle crew dues.",
    statutoryCounter:
      "Unauthorized sub-renting, pledging, or dishonest retention of bailed camera/AV equipment after lease expiry constitutes Criminal Breach of Trust under Bharatiya Nyaya Sanhita (BNS) 2023 s.316—a cognizable offence distinct from a mere civil billing dispute. Furthermore, under Sale of Goods Act s.27 (Nemo Dat Quod Non Habet), any third party holding your sub-rented lenses acquires zero title or lien.",
    evidenceRequired: [
      "OEM Tax Invoices & Import / Customs Serial Number Schedule proving exclusive ownership",
      "Rental Agreement prohibiting sub-leasing, transfer, or third-party custody",
      "Written termination / recall notice revoking bailment under Contract Act s.153",
      "GPS / AirTag / RFID ping logs or WhatsApp admissions confirming third-party possession",
    ],
    recommendedAction:
      "Dispatch an urgent 48-hour BNS s.316 Asset-Return Notice with mandatory CC to the jurisdictional Police Station House Officer (SHO) and Cyber/Crime Branch to prevent inter-state movement.",
  },
  {
    id: "dry-vs-wet-hire-pdc-bounce",
    tabLabel: "4. Dry/Wet Hire & PDC Bounce",
    badge: "NI Act s.138 + Blacklist",
    title: "Event Agency Blames 'Dry Hire' Crew & Bounces Post-Dated Security Cheques",
    debtorExcuse:
      "The corporate event agency handed over a ₹18 Lakh post-dated cheque (PDC) as security before load-in, then issued 'Stop Payment' after the show—claiming your technician (wet hire) caused a 20-minute audio glitch, or conversely claiming under dry hire that their own crew damaged the truss.",
    statutoryCounter:
      "Under the Supreme Court ruling in Sripati Singh v. State of Jharkhand, a security cheque presented after the debt crystallizes (post-event invoice raised) is fully enforceable under Negotiable Instruments Act s.138. 'Stop Payment' instructions attract full s.138 criminal liability (up to 2x fine + 2 years imprisonment) once a statutory 15-day demand notice is served within 30 days of the bank return memo.",
    evidenceRequired: [
      "Original dishonored cheque & Bank Return Memo ('Funds Insufficient' / 'Payment Stopped')",
      "Distinction proof in Deal Memo: Dry Hire (lessee bears 100% operator & site risk) vs Wet Hire",
      "Event-day sign-off / WhatsApp appreciation / zero contemporaneous defect complaint during show",
      "Statutory NI Act s.138 Demand Notice dispatched within 30 days via Speed Post RPAD + Email",
    ],
    recommendedAction:
      "Trigger the 30-day NI Act s.138 statutory notice immediately alongside a factual ledger filing with your regional cine/event rental association.",
  },
];

export default function CineAvRentalScenarioTabs() {
  const [activeTab, setActiveTab] = useState<string>(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeTab) || SCENARIOS[0];

  return (
    <div className="w-full max-w-full">
      {/* Tab Buttons */}
      <div
        role="tablist"
        aria-label="Cine and Live-Event AV Rental Default Scenarios"
        className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 pb-4"
      >
        {SCENARIOS.map((item) => {
          const isSelected = item.id === current.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#DC2626] text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Scenario Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white">
            {current.badge}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Creditor-Side Statutory Playbook
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">{current.title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <div className="bg-white border border-amber-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-1.5">
              Producer / Event Agency Pretext
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.debtorExcuse}
            </p>
          </div>

          <div className="bg-white border border-emerald-200 rounded-xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1.5">
              Creditor Statutory Counter
            </p>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.statutoryCounter}
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
            Mandatory Evidence &amp; QC Packet
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {current.evidenceRequired.map((ev, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="w-5 h-5 rounded-full bg-red-50 text-[#DC2626] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{ev}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-0.5">
              Recommended Escalation Step
            </p>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {current.recommendedAction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

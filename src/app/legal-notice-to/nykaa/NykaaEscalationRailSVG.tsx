import React from "react";

export default function NykaaEscalationRailSVG() {
  return (
    <div className="w-full overflow-x-auto py-2">
      <svg
        viewBox="0 0 840 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto min-w-[720px] max-w-4xl mx-auto rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        aria-label="4-Stage Dispute Escalation Flowchart for Nykaa and FSN E-Commerce Ventures"
        role="img"
      >
        <title>Nykaa Dispute Escalation Timeline Flowchart</title>
        <desc>
          Visual diagram illustrating the statutory escalation stages from internal customer grievance, NCH docketing, advocate legal notice, to e-Jagriti consumer commission filing.
        </desc>

        {/* Background grid dots */}
        <pattern id="nykaaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#E2E8F0" />
        </pattern>
        <rect width="840" height="280" fill="url(#nykaaGrid)" rx="8" />

        {/* Step 1: Day 0 */}
        <g transform="translate(20, 30)">
          <rect width="180" height="210" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect width="180" height="34" rx="10" fill="#E2E8F0" />
          <rect y="24" width="180" height="10" fill="#E2E8F0" />
          <text x="90" y="22" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
            DAY 0: GRIEVANCE
          </text>
          <text x="14" y="60" fill="#475569" fontSize="11" fontWeight="600">
            Target Entity:
          </text>
          <text x="14" y="78" fill="#0F172A" fontSize="11" fontWeight="700">
            FSN E-Commerce Ltd
          </text>
          <text x="14" y="104" fill="#475569" fontSize="10">
            Email Grievance Officer:
          </text>
          <text x="14" y="120" fill="#DC2626" fontSize="10" fontWeight="600">
            grievanceofficer@nykaa.com
          </text>
          <text x="14" y="146" fill="#475569" fontSize="10">
            Statutory SLA:
          </text>
          <text x="14" y="162" fill="#0284C7" fontSize="10" fontWeight="700">
            48h Acknowledge (Rule 4)
          </text>
          <rect x="14" y="180" width="152" height="22" rx="4" fill="#F1F5F9" stroke="#E2E8F0" />
          <text x="90" y="195" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="500">
            Demand UTR / Batch Review
          </text>
        </g>

        {/* Connecting Arrow 1 -> 2 */}
        <path d="M205 135 L225 135" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="225,131 233,135 225,139" fill="#94A3B8" />

        {/* Step 2: Day 7 */}
        <g transform="translate(235, 30)">
          <rect width="180" height="210" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect width="180" height="34" rx="10" fill="#FEF3C7" />
          <rect y="24" width="180" height="10" fill="#FEF3C7" />
          <text x="90" y="22" textAnchor="middle" fill="#92400E" fontSize="12" fontWeight="700">
            DAY 7: NCH DOCKET
          </text>
          <text x="14" y="60" fill="#475569" fontSize="11" fontWeight="600">
            Regulatory Channel:
          </text>
          <text x="14" y="78" fill="#0F172A" fontSize="11" fontWeight="700">
            NCH (Govt of India)
          </text>
          <text x="14" y="104" fill="#475569" fontSize="10">
            Ingram Helpline / App:
          </text>
          <text x="14" y="120" fill="#D97706" fontSize="11" fontWeight="700">
            Dial 1915 / consumerhelpline
          </text>
          <text x="14" y="146" fill="#475569" fontSize="10">
            Resolution Window:
          </text>
          <text x="14" y="162" fill="#0284C7" fontSize="10" fontWeight="700">
            30-Day Mediation Cap
          </text>
          <rect x="14" y="180" width="152" height="22" rx="4" fill="#FFFBEB" stroke="#FDE68A" />
          <text x="90" y="195" textAnchor="middle" fill="#B45309" fontSize="9" fontWeight="500">
            Official Docket Generated
          </text>
        </g>

        {/* Connecting Arrow 2 -> 3 */}
        <path d="M420 135 L440 135" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="440,131 448,135 440,139" fill="#94A3B8" />

        {/* Step 3: Day 15 */}
        <g transform="translate(450, 30)">
          <rect width="180" height="210" rx="10" fill="#FEF2F2" stroke="#F87171" strokeWidth="2" />
          <rect width="180" height="34" rx="10" fill="#FEE2E2" />
          <rect y="24" width="180" height="10" fill="#FEE2E2" />
          <text x="90" y="22" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="800">
            DAY 15: LEGAL NOTICE
          </text>
          <text x="14" y="60" fill="#475569" fontSize="11" fontWeight="600">
            Legal Instrument:
          </text>
          <text x="14" y="78" fill="#991B1B" fontSize="11" fontWeight="700">
            Advocate Demand Notice
          </text>
          <text x="14" y="104" fill="#475569" fontSize="10">
            Statutory Grounds:
          </text>
          <text x="14" y="120" fill="#1E293B" fontSize="10" fontWeight="600">
            CPA s.2(47) + D&C s.17C
          </text>
          <text x="14" y="146" fill="#475569" fontSize="10">
            Compliance Window:
          </text>
          <text x="14" y="162" fill="#DC2626" fontSize="10" fontWeight="700">
            15 Days Demand Notice
          </text>
          <rect x="14" y="180" width="152" height="22" rx="4" fill="#FEF2F2" stroke="#FECACA" />
          <text x="90" y="195" textAnchor="middle" fill="#991B1B" fontSize="9" fontWeight="600">
            Speed Post + Email Serviced
          </text>
        </g>

        {/* Connecting Arrow 3 -> 4 */}
        <path d="M635 135 L655 135" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="655,131 663,135 655,139" fill="#94A3B8" />

        {/* Step 4: Day 30 */}
        <g transform="translate(665, 30)">
          <rect width="155" height="210" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect width="155" height="34" rx="10" fill="#E0F2FE" />
          <rect y="24" width="155" height="10" fill="#E0F2FE" />
          <text x="77" y="22" textAnchor="middle" fill="#075985" fontSize="12" fontWeight="700">
            DAY 30: E-JAGRITI
          </text>
          <text x="12" y="60" fill="#475569" fontSize="11" fontWeight="600">
            Judicial Forum:
          </text>
          <text x="12" y="78" fill="#0F172A" fontSize="11" fontWeight="700">
            District Commission
          </text>
          <text x="12" y="104" fill="#475569" fontSize="10">
            Pecuniary Limit:
          </text>
          <text x="12" y="120" fill="#0369A1" fontSize="10" fontWeight="600">
            Claims Up to ₹50 Lakh
          </text>
          <text x="12" y="146" fill="#475569" fontSize="10">
            Relief Claimed:
          </text>
          <text x="12" y="162" fill="#047857" fontSize="10" fontWeight="700">
            Refund + Interest + Costs
          </text>
          <rect x="12" y="180" width="131" height="22" rx="4" fill="#F0FDF4" stroke="#BBF7D0" />
          <text x="77" y="195" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="500">
            e-Jagriti Online Trial
          </text>
        </g>
      </svg>
    </div>
  );
}

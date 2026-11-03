import React from "react";

export default function ZeptoDisputeFlowSVG() {
  return (
    <figure className="my-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm overflow-hidden">
      <figcaption className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
        <span>Figure 1: Zepto Quick-Commerce Dispute Escalation &amp; Recovery Workflow</span>
        <span className="text-[10px] text-purple-700 font-semibold bg-purple-50 px-2 py-0.5 rounded">
          CPA 2019 &bull; E-Commerce Rules
        </span>
      </figcaption>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 860 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-w-[700px] text-slate-800"
          aria-label="Flowchart showing the dispute escalation path from Zepto dark store failure to legal notice and consumer commission award"
          role="img"
        >
          {/* Defs for gradients & markers */}
          <defs>
            <linearGradient id="orderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EDE9FE" />
              <stop offset="100%" stopColor="#DDD6FE" />
            </linearGradient>
            <linearGradient id="failureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEE2E2" />
              <stop offset="100%" stopColor="#FECACA" />
            </linearGradient>
            <linearGradient id="tierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#F1F5F9" />
            </linearGradient>
            <linearGradient id="legalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="successGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D1FAE5" />
              <stop offset="100%" stopColor="#A7F3D0" />
            </linearGradient>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748B" />
            </marker>
            <marker
              id="arrowRed"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#DC2626" />
            </marker>
          </defs>

          {/* Background Canvas */}
          <rect width="860" height="380" rx="16" fill="#FAFAFC" />

          {/* Flow Step 1: Order Placement & Payment */}
          <g transform="translate(30, 40)">
            <rect width="160" height="110" rx="12" fill="url(#orderGrad)" stroke="#C4B5FD" strokeWidth="1.5" />
            <rect x="12" y="12" width="28" height="28" rx="6" fill="#7C3AED" />
            <text x="26" y="30" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">1</text>
            <text x="50" y="28" fill="#4C1D95" fontSize="13" fontWeight="bold">Zepto App Order</text>
            <text x="14" y="60" fill="#5B21B6" fontSize="11" fontWeight="medium">Prepaid via UPI / Card</text>
            <text x="14" y="78" fill="#6D28D9" fontSize="10">Dark Store 90s Pick</text>
            <text x="14" y="94" fill="#6D28D9" fontSize="10">10-Min Fast Dispatch</text>
          </g>

          {/* Arrow 1 -> 2 */}
          <path d="M 190 95 L 230 95" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Flow Step 2: The Failure Point */}
          <g transform="translate(230, 40)">
            <rect width="170" height="110" rx="12" fill="url(#failureGrad)" stroke="#FCA5A5" strokeWidth="1.5" />
            <rect x="12" y="12" width="28" height="28" rx="6" fill="#DC2626" />
            <text x="26" y="30" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">!</text>
            <text x="50" y="28" fill="#991B1B" fontSize="13" fontWeight="bold">Delivery Defect</text>
            <text x="14" y="58" fill="#B91C1C" fontSize="11" fontWeight="semibold">&bull; Missing items from bag</text>
            <text x="14" y="74" fill="#B91C1C" fontSize="11" fontWeight="semibold">&bull; Rotten / spoiled goods</text>
            <text x="14" y="90" fill="#B91C1C" fontSize="11" fontWeight="semibold">&bull; Chatbot refund refusal</text>
            <text x="14" y="104" fill="#7F1D1D" fontSize="9">"Packed as per backend logs"</text>
          </g>

          {/* Arrow 2 -> 3 */}
          <path d="M 400 95 L 440 95" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Flow Step 3: Grievance Escalation */}
          <g transform="translate(440, 40)">
            <rect width="180" height="110" rx="12" fill="url(#tierGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="12" y="12" width="28" height="28" rx="6" fill="#475569" />
            <text x="26" y="30" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">2</text>
            <text x="48" y="28" fill="#0F172A" fontSize="13" fontWeight="bold">Grievance Officer</text>
            <text x="14" y="58" fill="#334155" fontSize="11" fontWeight="semibold">Mr. Zubair Shaikh</text>
            <text x="14" y="74" fill="#475569" fontSize="10">Email: grievances@zepto.com</text>
            <text x="14" y="90" fill="#2563EB" fontSize="10" fontWeight="bold">48h Statutory Ack</text>
            <text x="14" y="104" fill="#64748B" fontSize="9">30-day resolution deadline</text>
          </g>

          {/* Arrow 3 -> 4 */}
          <path d="M 620 95 L 660 95" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrow)" />

          {/* Flow Step 4: NCH 1915 */}
          <g transform="translate(660, 40)">
            <rect width="170" height="110" rx="12" fill="url(#tierGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
            <rect x="12" y="12" width="28" height="28" rx="6" fill="#0284C7" />
            <text x="26" y="30" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">3</text>
            <text x="48" y="28" fill="#0369A1" fontSize="13" fontWeight="bold">NCH 1915 Docket</text>
            <text x="14" y="58" fill="#0369A1" fontSize="11" fontWeight="semibold">National Helpline</text>
            <text x="14" y="74" fill="#475569" fontSize="10">Formal INGRAM Ticket</text>
            <text x="14" y="90" fill="#475569" fontSize="10">Govt Consumer Affairs</text>
            <text x="14" y="104" fill="#0284C7" fontSize="9">Evidentiary Paper Trail</text>
          </g>

          {/* Connector Down from NCH / Grievance to Legal Notice */}
          <path d="M 745 150 L 745 190 L 530 190" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 530 190 L 530 215" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />

          {/* Flow Step 5: Advocate Legal Notice (The Turning Point) */}
          <g transform="translate(380, 220)">
            <rect width="300" height="120" rx="14" fill="#0F172A" stroke="#DC2626" strokeWidth="2" />
            <rect x="14" y="14" width="32" height="32" rx="8" fill="#DC2626" />
            <text x="30" y="34" fill="#FFFFFF" fontSize="15" fontWeight="bold" textAnchor="middle">§</text>
            <text x="56" y="34" fill="#F8FAFC" fontSize="14" fontWeight="bold">
              Advocate Legal Notice (15-Day Demand)
            </text>
            <text x="16" y="66" fill="#CBD5E1" fontSize="11">
              &bull; Served to Zepto Marketplace Pvt Ltd &amp; Kiranakart
            </text>
            <text x="16" y="82" fill="#CBD5E1" fontSize="11">
              &bull; Speed Post with Proof of Delivery + Registered Email
            </text>
            <text x="16" y="98" fill="#CBD5E1" fontSize="11">
              &bull; Invokes CPA 2019 s.2(47) &amp; E-Commerce Rules Fallback
            </text>
            <text x="16" y="114" fill="#F87171" fontSize="10" fontWeight="bold">
              Demands Full Cash Refund + Mental Agony Damages
            </text>
          </g>

          {/* Arrow from Legal Notice left to Settlement / e-Jagriti */}
          <path d="M 380 280 L 320 280" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrow)" />

          {/* Flow Step 6: Recovery Outcome */}
          <g transform="translate(30, 210)">
            <rect width="280" height="140" rx="14" fill="url(#successGrad)" stroke="#10B981" strokeWidth="2" />
            <rect x="14" y="14" width="32" height="32" rx="8" fill="#059669" />
            <text x="30" y="34" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle">✓</text>
            <text x="56" y="34" fill="#065F46" fontSize="14" fontWeight="bold">Full Resolution &amp; Award</text>
            <text x="16" y="64" fill="#047857" fontSize="11" fontWeight="semibold">
              &bull; 100% Cash Refund to Original Bank/UPI
            </text>
            <text x="16" y="80" fill="#047857" fontSize="11">
              &bull; Rejection of Forced 'Zepto Cash' Wallet
            </text>
            <text x="16" y="96" fill="#047857" fontSize="11">
              &bull; Direct Pre-Court Advocate Settlement
            </text>
            <text x="16" y="112" fill="#065F46" fontSize="10" fontWeight="bold">
              OR e-Jagriti Award (up to ₹50,000+ Damages)
            </text>
            <text x="16" y="128" fill="#047857" fontSize="9">
              Consumer Commission enforceable decree
            </text>
          </g>
        </svg>
      </div>
    </figure>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  ShieldCheck, 
  Archive, 
  Calendar,
  X,
  Printer,
  Check
} from "lucide-react";

export default function DocumentVault() {
  const [cases, setCases] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Notice Preview Modal State
  const [previewNotice, setPreviewNotice] = useState<any | null>(null);

  // Load cases to fetch their documents dynamically
  useEffect(() => {
    const loadCases = () => {
      try {
        const stored = localStorage.getItem("lr_cases");
        if (stored) {
          setCases(JSON.parse(stored));
        }
      } catch (err) {
        console.error("Failed to load cases in vault:", err);
      }
    };
    loadCases();
  }, []);

  // Compute list of actual generated documents
  const documents = React.useMemo(() => {
    const docList: any[] = [];
    cases.forEach(c => {
      c.timeline.forEach((step: any) => {
        // Notice is generated if completed or currently active
        if (step.status === "completed" || step.status === "active") {
          docList.push({
            id: `${c.id}-${step.step}`,
            caseId: c.id,
            caseName: c.defaulterName,
            phone: c.phone,
            email: c.email,
            address: c.address,
            stuckAmount: c.stuckAmount,
            dueDate: c.dueDate,
            entityType: c.entityType,
            policeStationName: c.policeStationName || "Sector 58 Police Station, Noida",
            policeStationEmail: c.policeStationEmail || "sho.sec58.noida@uppolice.gov.in",
            policeStationAddress: c.policeStationAddress || "Sector 58, Noida, G.B. Nagar, UP 201301",
            docName: step.step === 4 ? `SHO Police Complaint` : `Legal Notice ${step.step} (${step.label})`,
            fileName: step.step === 4 
              ? `police_complaint_${c.defaulterName.toLowerCase().replace(/[^a-z0-9]/g, "_")}.pdf`
              : `legal_notice_${step.step}_${c.defaulterName.toLowerCase().replace(/[^a-z0-9]/g, "_")}.pdf`,
            dispatchedDate: step.date === "Today, Grace Active" || step.date.includes("Today") ? "Today" : step.date,
            status: step.status,
            stepNumber: step.step
          });
        }
      });
    });
    return docList;
  }, [cases]);

  // Filter documents by search query
  const filteredDocs = documents.filter(doc => 
    doc.caseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.docName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = (doc: any) => {
    alert(`Downloading ${doc.fileName}\n(This is a mock PDF file generated reflecting placeholders details for ${doc.caseName})`);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300 text-left">
      
      {/* Header */}
      <div className="text-left border-b border-[#E5E7EB]/50 pb-6">
        <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Legal Document Vault</h1>
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
          Download, print, or review legally formatted demand letters and physical dispatch copies sent for your active claims.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="bg-white border border-[#E5E7EB]/70 p-4 rounded-2xl flex items-center gap-3 shadow-sm max-w-md w-full">
        <Search className="w-4 h-4 text-slate-400 shrink-0" />
        <input 
          type="text" 
          placeholder="Search by case name or document..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-sm font-semibold text-[#111827] placeholder-slate-400 outline-none w-full bg-transparent border-none focus:ring-0"
        />
      </div>

      {/* Documents List */}
      <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl overflow-hidden shadow-sm">
        {filteredDocs.length === 0 ? (
          <div className="p-12 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-3">
              <Archive className="w-5 h-5 text-slate-400" />
            </div>
            <h4 className="text-sm font-black text-slate-700">No Documents Found</h4>
            <p className="text-xs text-slate-400 font-semibold mt-1 max-w-xs">
              Once you set up a recovery and notice grace periods expire, your legally generated notice copies will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-[#E5E7EB] text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Document Details</th>
                  <th className="px-6 py-4">Associated Defaulter</th>
                  <th className="px-6 py-4">Dispatch Reference</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]/80 text-xs font-semibold text-[#111827]">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-[#DC2626] flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-black text-slate-800 leading-tight">{doc.docName}</span>
                        <span className="text-[10px] text-slate-450 mt-0.5 font-mono">{doc.fileName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-left">
                      <span className="font-bold text-slate-700">{doc.caseName}</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{doc.entityType}</span>
                    </td>
                    <td className="px-6 py-4 text-left">
                      <span className="font-bold text-slate-665 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" /> {doc.dispatchedDate}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setPreviewNotice(doc)}
                          className="px-3 py-2 text-xs font-bold text-slate-650 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                        <button 
                          onClick={() => handleDownload(doc)}
                          className="px-3 py-2 text-xs font-bold text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none"
                        >
                          <Download className="w-3.5 h-3.5" /> PDF
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── HIGH FIDELITY LEGAL DOCUMENT PREVIEW MODAL ── */}
      {previewNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-[700px] shadow-2xl relative flex flex-col max-h-[90vh] my-8 animate-in fade-in zoom-in-95 duration-200 select-none">
            
            {/* Modal Controls Bar */}
            <div className="px-6 py-4 border-b border-[#E5E7EB]/50 flex items-center justify-between bg-slate-50 rounded-t-3xl">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#DC2626]" />
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black text-[#111827]">{previewNotice.docName}</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Dynamic Draft Preview</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => window.print()}
                  className="p-2 text-slate-500 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer focus:outline-none"
                  title="Print Notice"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setPreviewNotice(null)}
                  className="p-2 text-slate-500 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Letterhead Page Draft Pane */}
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 font-serif text-left select-text bg-[#FAFAFA]">
              <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#E5E7EB]/80 p-8 sm:p-10 flex flex-col gap-6 relative overflow-hidden min-h-[750px]">
                
                {/* Letterhead header */}
                <div className="flex flex-col items-center border-b-2 border-black pb-3 text-center">
                  <img src="/ama4.png" alt="AMA Legal Solutions" className="h-16 sm:h-20 w-auto object-contain mb-1.5" />
                  <span className="text-[10.5px] text-slate-500 uppercase tracking-wider font-bold font-sans">AMA LEGAL SOLUTIONS</span>
                  <span className="text-[8px] text-slate-400 font-semibold font-sans mt-0.5">E: legal@amalegalsolutions.com | T: +91 87003 43611</span>
                  <span className="text-[7px] text-slate-400 font-medium font-sans mt-0.5">Reg. Office: H-4, Barakhamba Road, Connaught Place, New Delhi 110001</span>
                </div>

                {/* References */}
                <div className="flex justify-between text-[10px] text-slate-500 font-medium font-sans">
                  <span>Ref: AMA/LRN/{previewNotice.id.slice(-5).toUpperCase()}</span>
                  <span>Date: {previewNotice.dispatchedDate === "Today" ? new Date().toLocaleDateString("en-IN") : previewNotice.dispatchedDate}</span>
                </div>

                {/* Address details - Customizes shooter layout depending on Police vs Defaulter templates */}
                <div className="text-[11px] leading-relaxed text-slate-700 flex flex-col gap-3 font-sans">
                  {previewNotice.stepNumber === 4 ? (
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-450 font-bold uppercase tracking-wider mb-1">BY PHYSICAL SUBMISSION & EMAIL</span>
                      <span className="font-extrabold text-slate-800">TO,</span>
                      <span className="font-extrabold text-slate-800">The Station House Officer (SHO),</span>
                      <span className="font-extrabold text-slate-800">{previewNotice.policeStationName}</span>
                      {previewNotice.policeStationEmail && <span>Email: {previewNotice.policeStationEmail}</span>}
                      <span className="mt-1 font-bold text-slate-700 bg-slate-50 p-2 border border-slate-105 rounded-lg max-w-[320px]">
                        {previewNotice.policeStationAddress}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-[9px] text-slate-455 font-bold uppercase tracking-wider mb-1">BY REGISTERED SPEED POST & EMAIL</span>
                      <span className="font-extrabold text-slate-800">TO,</span>
                      <span className="font-extrabold text-slate-800">{previewNotice.caseName}</span>
                      <span className="font-bold text-slate-650">Constitution: {previewNotice.entityType}</span>
                      {previewNotice.phone && <span>Mobile: {previewNotice.phone}</span>}
                      {previewNotice.email && <span>Email: {previewNotice.email}</span>}
                      <span className="mt-1 font-bold text-slate-700 bg-slate-50 p-2 border border-slate-100 rounded-lg max-w-[320px]">
                        {previewNotice.address}
                      </span>
                    </div>
                  )}
                </div>

                {/* Document Subject line */}
                <div className="text-xs font-bold text-center text-slate-900 border-y border-slate-200 py-2.5 font-sans uppercase">
                  {previewNotice.stepNumber === 4 ? (
                    `SUB: COMPLAINT UNDER SECTIONS 316, 318 AND 61 OF THE BHARATIYA NYAYA SANHITA, 2023 (BNS) FOR CRIMINAL BREACH OF TRUST, CHEATING, AND CRIMINAL CONSPIRACY IN RESPECT OF INR ${previewNotice.stuckAmount.toLocaleString("en-IN")} AGAINST THE ACCUSED DEFAULTER ${previewNotice.caseName}`
                  ) : previewNotice.stepNumber === 3 ? (
                    `SUBJECT: FINAL LEGAL NOTICE - DEMARKATION OF IMMEDIATE CIVIL LITIGATION & PUBLIC CRIMINAL PROSECUTION UNDER THE BNS PRIOR TO INTENSE FORFEITURE PROCEEDINGS`
                  ) : previewNotice.stepNumber === 2 ? (
                    `SUBJECT: SECOND LEGAL DEMAND NOTICE - FORMAL STRATIFIED WARNING AND INTENSE DEBT RECOVERY PIPELINE ACTIVATION IN REGARD TO THE EVASION OF MATURED DUES`
                  ) : (
                    `SUBJECT: Notice for Resolution of Outstanding Payment / Pending Claim`
                  )}
                </div>

                {/* Content body paragraph list */}
                <div className="text-[11px] sm:text-[12px] text-slate-700 leading-relaxed flex flex-col gap-3 font-serif select-text">
                  
                  {previewNotice.stepNumber !== 4 && <p>Dear Sir/Madam,</p>}

                  {previewNotice.stepNumber === 1 && (
                    <>
                      <p>
                        Under instructions from and on behalf of our client Tech AMA, residing at <strong>Delhi, India</strong>, we hereby call upon you to address and resolve the pending amount/claim arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                      </p>
                      <p>
                        It has been informed to us that despite repeated requests, reminders, and communications made by our client, the matter remains unresolved and an amount of <strong>₹{previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> is still due/pending towards our client.
                      </p>
                      <p>
                        Our client has acted in good faith and fulfilled their part of obligations; however, the pending dues/claim have not been settled by you till date.
                      </p>
                      <div className="flex flex-col gap-1">
                        <span>You are therefore hereby requested to:</span>
                        <span>1. Clear/pay the outstanding amount of <strong>₹{previewNotice.stuckAmount.toLocaleString("en-IN")}</strong>; and/or</span>
                        <span>2. Resolve the matter amicably within 7 (Seven) days from the receipt of this notice.</span>
                      </div>
                      <p>
                        In the event that you dispute the claim or amount, you are requested to provide your written response along with supporting documents within the aforesaid period for appropriate consideration.
                      </p>
                      <p>
                        Please take notice that failure to respond or resolve the matter within the stipulated time may compel our client to initiate appropriate legal proceedings and remedies available under applicable laws, entirely at your own risk as to costs and consequences.
                      </p>
                      <p>
                        This notice is being issued without prejudice to all rights, claims, remedies, and legal actions available to our client under law.
                      </p>
                      <p>
                        A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                      </p>
                      <div className="mt-2.5 flex flex-col gap-0.5 text-left font-sans text-[9px] font-bold text-slate-500">
                        <span>For and on behalf of Tech AMA</span>
                        <span className="text-slate-900 font-extrabold uppercase mt-1">Kindly treat this matter as urgent.</span>
                      </div>
                    </>
                  )}

                  {previewNotice.stepNumber === 2 && (
                    <>
                      <p>
                        <strong>SUBSEQUENT SECOND DEMAND NOTICE:</strong> This notice constitutes a formal second warning follow-up demand. A primary legal demand notice was served to your registered office and email addresses previously, which you have chosen to ignore.
                      </p>
                      <p>
                        Our Client reports that you have continuously failed and neglected to honor your outstanding liability of <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> originally due since <strong>{previewNotice.dueDate ? new Date(previewNotice.dueDate).toLocaleDateString("en-IN") : "due date"}</strong>. This persistent non-payment and absolute lack of response indicates a calculated, dishonest intention to fraudulently misappropriate and retain our Client's hard-earned money, whether relating to pending employee salary, freelancer payouts, commercial rents, security deposits, or defective service compensation.
                      </p>
                      <p>
                        Be informed that our Client has already initiated comprehensive tracking of your corporate assets, property holdings, and business bank accounts. Additionally, steps are underway to report your non-compliance to regional registries, professional networks, credit rating agencies, and business circles.
                      </p>
                      <p>
                        Please be warned that unless you clear the entire outstanding balance along with penalty interest immediately, our Client will assign this debt to authorized recovery tribunals and corporate compliance channels. This will lead to extensive reputational damage and the immediate initiation of public corporate winding-up petitions.
                      </p>
                    </>
                  )}

                  {previewNotice.stepNumber === 3 && (
                    <>
                      <p>
                        This is the <strong>Final Notice</strong> served upon you. You have actively ignored two formal demand notices served previously. Your continuous evasion and dishonest retention of <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> originally due since <strong>{previewNotice.dueDate ? new Date(previewNotice.dueDate).toLocaleDateString("en-IN") : "due date"}</strong> is now recognized as a deliberate criminal offense.
                      </p>
                      <p>
                        We have completed drafting the comprehensive civil recovery lawsuit under Order XXXVII of the Code of Civil Procedure (CPC) and a formal criminal complaint to be filed before the jurisdictional police and Judicial Magistrate under the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                      </p>
                      <p>
                        Particularly, your conduct directly warrants prosecution under the following strict sections:
                        <br />
                        1. <strong>Section 316 of BNS (Criminal Breach of Trust)</strong>: For dishonestly misappropriating and converting our Client's services, labor, rental security deposit, or payments.
                        <br />
                        2. <strong>Section 318 of BNS (Cheating & Dishonestly Inducing Delivery of Property)</strong>: For fraudulently inducing our Client to deliver services/goods under false representations of timely payment.
                        <br />
                        3. <strong>Section 61 of BNS (Criminal Conspiracy)</strong>: For conniving to cause wrongful loss to our Client.
                      </p>
                      <p>
                        Unless the entire amount of <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> along with 24% interest compounded monthly is paid in full within 48 hours of this notice, these files will be formally registered. No further grace, notifications, or settlement negotiations will be offered.
                      </p>
                    </>
                  )}

                  {previewNotice.stepNumber === 4 && (
                    <>
                      <p>Dear Sir,</p>
                      <p>
                        We submit this formal complaint against the accused <strong>{previewNotice.caseName}</strong> located at <strong>{previewNotice.address}</strong> for registering a First Information Report (FIR) and initiating immediate prosecution under the provisions of the <strong>Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>.
                      </p>
                      <p>
                        The accused fraudulently induced our Client to deliver services, labor, property, or lease values (including freelance services, labor, security deposits, or product payments) worth <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> under the absolute representation of clearing the payment on <strong>{previewNotice.dueDate ? new Date(previewNotice.dueDate).toLocaleDateString("en-IN") : "due date"}</strong>. 
                      </p>
                      <p>
                        The accused had a dishonest intention from the very inception of the transaction, and has since fraudulently misappropriated the values for their own unlawful gain, in direct violation of:
                        <br />
                        - <strong>Section 316 of BNS (Criminal Breach of Trust)</strong>: By dishonestly misappropriating the entrusted value.
                        <br />
                        - <strong>Section 318 of BNS (Cheating)</strong>: By inducing delivery of services under fraudulent claims.
                        <br />
                        - <strong>Section 61 of BNS (Criminal Conspiracy)</strong>: By coordinating actions to defraud.
                      </p>
                      <p>
                        Despite multiple legal demand notices, the accused has actively ignored all correspondence, indicating wilful evasion. We request your office to register a formal FIR, investigate this matter, and summon the accused immediately.
                      </p>
                    </>
                  )}
                  
                  <p className="mt-2">
                    This is without prejudice to any other legal remedies, reliefs, and interest charges that our Client may be entitled to claim under law.
                  </p>
                </div>

                {/* Signature bar */}
                <div className="mt-auto pt-6 flex flex-col gap-1 border-t border-slate-200 text-left text-[10px] text-slate-500 font-medium font-sans">
                  <span className="font-extrabold text-slate-800">For AMA Legal Solutions</span>
                  <span>Advocate In-Charge</span>
                  <span>New Delhi High Court Bench</span>
                </div>

              </div>
            </div>

            {/* Modal actions footer */}
            <div className="px-6 py-4 border-t border-[#E5E7EB]/50 flex items-center justify-end gap-3 bg-slate-50 rounded-b-3xl">
              <button 
                onClick={() => setPreviewNotice(null)}
                className="px-4 py-2.5 text-xs font-black text-slate-650 hover:bg-slate-100 rounded-xl transition-all cursor-pointer focus:outline-none"
              >
                Close Preview
              </button>
              <button 
                onClick={() => handleDownload(previewNotice)}
                className="px-4 py-2.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none"
              >
                <Download className="w-3.5 h-3.5" /> Save PDF Copy
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

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
            <div className="flex-1 overflow-y-auto p-8 sm:p-12 text-left select-text bg-[#FAFAFA]">
              <div 
                className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-[#E5E7EB]/80 p-8 sm:p-10 flex flex-col gap-5 relative overflow-hidden min-h-[750px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {/* Letterhead header */}
                <div className="flex flex-col text-center pb-2">
                  <img src="/notices/header logo AMA .png" alt="AMA Logo" className="w-[240px] sm:w-[280px] h-auto block mx-auto mb-1.5" />
                  <div className="text-center text-[9.5px] sm:text-[11px] leading-normal text-black font-semibold">
                    <div className="font-bold text-[10.5px] sm:text-[12px] mb-0.5">Advocate & Solicitors</div>
                    <div>2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)</div>
                    <div className="font-bold text-[8.5px] sm:text-[10px] mt-1">
                      E: <span className="text-[#0066cc] underline">notice@amalegalsolutions.com</span>
                    </div>
                  </div>
                  <table className="w-full border-collapse border-none mt-2.5 text-[9px] sm:text-[10.5px] text-black font-bold">
                    <tbody>
                      <tr className="align-middle">
                        <td className="text-left p-0 pb-0.5 border-none">Advocate Anuj Anand Malik</td>
                        <td className="text-right p-0 pb-0.5 font-bold border-none text-[7.5px] sm:text-[8.5px]">MEMBER - BAR COUNCIL OF DELHI</td>
                      </tr>
                      <tr className="align-middle">
                        <td className="text-left p-0 pb-0.5 border-none">Advocate Shrey Arora</td>
                        <td className="text-right p-0 pb-0.5 font-bold border-none text-[7.5px] sm:text-[8.5px]">MEMBER - MCIA (MUMBAI)</td>
                      </tr>
                      <tr className="align-middle">
                        <td className="text-left p-0 border-none"></td>
                        <td className="text-right p-0 font-bold border-none text-[7.5px] sm:text-[8.5px]">ASSOCIATION MEMBER - IACC</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="w-full border-collapse border-none mt-2 text-[9.5px] sm:text-[10px] text-slate-500 font-bold">
                    <tbody>
                      <tr className="align-middle">
                        <td className="text-left p-0 border-none">Ref: AMA/LRN-WEEK{previewNotice.stepNumber}</td>
                        <td className="text-right p-0 border-none">Date: {previewNotice.dispatchedDate === "Today" ? new Date().toLocaleDateString("en-IN") : previewNotice.dispatchedDate}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="border-b-2 border-black mt-2"></div>
                </div>

                {/* Address details - Customizes shooter layout depending on Police vs Defaulter templates */}
                <div className="text-[11px] leading-relaxed text-slate-700 flex flex-col gap-3">
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
                      <span className="text-[9px] text-slate-455 font-bold uppercase tracking-wider mb-1">
                        {(previewNotice.stepNumber === 1 || previewNotice.stepNumber === 2) ? "BY EMAIL & WHATSAPP" : "BY REGISTERED SPEED POST & EMAIL"}
                      </span>
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
                <div className="text-xs font-bold text-center text-slate-900 border-y border-slate-200 py-2.5 uppercase">
                  {previewNotice.stepNumber === 4 ? (
                    `SUB: COMPLAINT UNDER SECTIONS 316, 318 AND 61 OF THE BHARATIYA NYAYA SANHITA, 2023 (BNS) FOR CRIMINAL BREACH OF TRUST, CHEATING, AND CRIMINAL CONSPIRACY IN RESPECT OF INR ${previewNotice.stuckAmount.toLocaleString("en-IN")} AGAINST THE ACCUSED DEFAULTER ${previewNotice.caseName}`
                  ) : previewNotice.stepNumber === 3 ? (
                    `SUBJECT: Final Pre-Litigation and Police Complaint Notice for Recovery of ₹${previewNotice.stuckAmount.toLocaleString("en-IN")} Under Applicable Provisions of Bharatiya Nyaya Sanhita (BNS)`
                  ) : previewNotice.stepNumber === 2 ? (
                    `SUBJECT: SECOND LEGAL DEMAND NOTICE - FORMAL STRATIFIED WARNING AND INTENSE DEBT RECOVERY PIPELINE ACTIVATION IN REGARD TO THE EVASION OF MATURED DUES`
                  ) : (
                    `SUBJECT: Demand Notice for Immediate Clearance of Outstanding Liability of ₹${previewNotice.stuckAmount.toLocaleString("en-IN")} Towards Tech AMA`
                  )}
                </div>

                {/* Content body paragraph list */}
                <div className="text-[11px] sm:text-[12px] text-slate-700 leading-relaxed flex flex-col gap-3 select-text">
                  
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
                      <div className="mt-2.5 flex flex-col gap-0.5 text-left text-[9px] font-bold text-slate-500">
                        <span>For and on behalf of Tech AMA</span>
                        <span className="text-slate-900 font-extrabold uppercase mt-1">Kindly treat this matter as urgent.</span>
                      </div>
                    </>
                  )}

                  {previewNotice.stepNumber === 2 && (
                    <>
                      <p>
                        Under instructions and authority from our client <strong>Tech AMA</strong>, residing/having office at <strong>Delhi, India</strong>, we hereby issue the present Second and Final Legal Notice calling upon you to immediately clear the outstanding dues/claim amounting to <strong>₹{previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> payable towards our client arising out of transactions, services, agreements, commitments, business dealings, or financial obligations undertaken by you.
                      </p>
                      <p>
                        Despite repeated reminders, communications, and an earlier legal notice served upon you, you have failed to regularize the matter or provide any satisfactory response. Your conduct clearly reflects deliberate negligence, avoidance, and non-compliance towards lawful obligations owed to our client.
                      </p>
                      <p>
                        It is pertinent to mention that if any person dishonestly retains money, intentionally avoids payment despite liability, induces another party under false assurances, or causes wrongful financial loss, such actions may attract legal consequences under applicable provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong>, including but not limited to provisions relating to:
                      </p>
                      <div className="flex flex-col gap-1 pl-4">
                        <span>1. Cheating and dishonest inducement;</span>
                        <span>2. Criminal breach of trust;</span>
                        <span>3. Fraudulent or dishonest conduct causing wrongful loss.</span>
                      </div>
                      <p>
                        Our client still wishes to provide you with a final opportunity to amicably resolve the matter without initiating formal legal proceedings.
                      </p>
                      <p>You are therefore finally called upon to:</p>
                      <div className="flex flex-col gap-1 pl-4">
                        <span>1. Make payment of the outstanding amount of <strong>₹{previewNotice.stuckAmount.toLocaleString("en-IN")}</strong> within 7 (Seven) days from receipt of this notice; OR</span>
                        <span>2. Provide a written explanation along with documentary proof disputing the claim within the aforesaid period.</span>
                      </div>
                      <p>
                        Kindly take notice that upon failure to comply, our client shall be constrained to initiate appropriate civil and/or criminal proceedings before the competent authorities/courts/forum, including filing complaints before the appropriate police authorities and legal forums, entirely at your own risk as to costs, liabilities, and consequences.
                      </p>
                      <p>
                        Please further note that any continued avoidance, non-response, or intentional withholding of payment may be relied upon as adverse conduct in future legal proceedings.
                      </p>
                      <p>
                        This notice is issued without prejudice to all legal rights and remedies available to our client under applicable law.
                      </p>
                      <p>
                        A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                      </p>
                    </>
                  )}

                  {previewNotice.stepNumber === 3 && (
                    <>
                      <p>
                        Under instructions from and on behalf of my client <strong>Tech AMA</strong>, I hereby issue the present Final Legal Notice against you with respect to the outstanding amount/claim of <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}/-</strong> arising out of dealings, transactions, services, agreements, commitments, or obligations between you and our client.
                      </p>
                      <p>
                        It is pertinent to note that despite repeated reminders, follow-ups, and opportunities extended to you for amicable resolution, you have deliberately failed and neglected to clear the outstanding liability and/or honour your commitments. Your conduct has caused substantial financial loss, harassment, mental agony, and inconvenience to my client.
                      </p>
                      <p>Your actions prima facie disclose elements of:</p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                        <span>- dishonest intention,</span>
                        <span>- wrongful withholding of money/property,</span>
                        <span>- misrepresentation,</span>
                        <span>- criminal breach of trust,</span>
                        <span>- cheating, and</span>
                        <span>- intentional non-compliance despite repeated demands.</span>
                      </div>
                      <p>
                        Accordingly, your acts may attract penal consequences under the relevant provisions of the <strong>Bharatiya Nyaya Sanhita, 2023</strong> including but not limited to:
                      </p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                        <span>- <strong>Section 316 BNS</strong> – Criminal Breach of Trust</span>
                        <span>- <strong>Section 318 BNS</strong> – Cheating</span>
                        <span>- <strong>Section 351 BNS</strong> – Criminal Intimidation (where applicable)</span>
                        <span>- Any other applicable civil and criminal provisions based upon the facts and documents available on record.</span>
                      </div>
                      <p>You are therefore called upon for the <strong>FINAL</strong> time to:</p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                        <span>1. Clear/pay the outstanding amount of <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}/-</strong>;</span>
                        <span>2. Provide written confirmation of settlement; and</span>
                        <span>3. Resolve the matter within <strong>72 HOURS</strong> from receipt of this notice.</span>
                      </div>
                      <p>
                        Please take notice that in the event of your failure to comply within the aforesaid period, my client shall be constrained to initiate appropriate legal proceedings against you, including but not limited to:
                      </p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700">
                        <span>- filing of Police Complaint/FIR before the competent Police Authorities;</span>
                        <span>- initiation of criminal proceedings under applicable provisions of BNS;</span>
                        <span>- civil recovery proceedings before appropriate courts/forums;</span>
                        <span>- recovery of interest, damages, litigation costs, and legal expenses.</span>
                      </div>
                      <p>
                        Kindly note that the entire risk as to costs and legal consequences arising therefrom shall solely be attributable to you.
                      </p>
                      <p>
                        This notice is issued without prejudice to all other legal rights and remedies available to my client under applicable law.
                      </p>
                      <p>
                        A copy of this Notice has been preserved in our office for record and future course of action. You are hereby advised to preserve a copy of this notice, as the same may be required to be produced before the appropriate Court of Law and/or competent authority as and when required.
                      </p>
                    </>
                  )}

                  {previewNotice.stepNumber === 4 && (
                    <>
                      <div className="text-[10px] font-black uppercase text-slate-800 border-b border-[#E5E7EB] pb-0.5 mt-2">COMPLAINANT DETAILS</div>
                      <div className="grid grid-cols-3 text-[10px] font-semibold text-slate-700 gap-y-0.5 pl-1 my-1">
                        <span className="font-bold text-slate-500">Name:</span><span className="col-span-2 text-slate-950">Tech AMA</span>
                        <span className="font-bold text-slate-500">Phone Number:</span><span className="col-span-2">+91-8700343611</span>
                        <span className="font-bold text-slate-500">Email ID:</span><span className="col-span-2">notice@amalegalsolutions.com</span>
                        <span className="font-bold text-slate-500">Address:</span><span className="col-span-2">2493AP, Ground floor, Sector 57, Gurugram-122003 (Haryana)</span>
                      </div>

                      <div className="text-[10px] font-black uppercase text-slate-800 border-b border-[#E5E7EB] pb-0.5 mt-3">ACCUSED DETAILS</div>
                      <div className="grid grid-cols-3 text-[10px] font-semibold text-slate-700 gap-y-0.5 pl-1 my-1">
                        <span className="font-bold text-slate-500">Name:</span><span className="col-span-2 text-slate-950 font-black">{previewNotice.caseName}</span>
                        <span className="font-bold text-slate-500">Phone Number:</span><span className="col-span-2">{previewNotice.phone || "[Phone Number]"}</span>
                        <span className="font-bold text-slate-500">Email ID:</span><span className="col-span-2">{previewNotice.email || "[Email ID]"}</span>
                        <span className="font-bold text-slate-500">Address:</span><span className="col-span-2">{previewNotice.address}</span>
                      </div>

                      <p className="font-semibold text-slate-955 mt-3">Respected Sir/Madam,</p>

                      <p>
                        Under instructions from and on behalf of our client, namely <strong>Tech AMA</strong>, we, AMA Legal Solutions, through our authorized legal representatives, hereby submit the present complaint against the above-mentioned accused for acts involving deliberate non-payment of legitimate dues, cheating, dishonest inducement, criminal breach of trust, and wrongful financial loss caused to our client.
                      </p>

                      <p>
                        That the accused had entered into a transaction/understanding with our client, pursuant to which an amount of <strong>INR {previewNotice.stuckAmount.toLocaleString("en-IN")}/-</strong> became legally due and payable to our client.
                      </p>

                      <p>
                        Despite repeated follow-ups, calls, messages, reminders, and legal notices issued on behalf of our client, the accused has intentionally failed and neglected to clear the outstanding dues. The conduct of the accused clearly demonstrates dishonest intention from the very inception of the transaction and reflects wilful default and deliberate evasion of liability.
                      </p>

                      <p>
                        It is pertinent to mention that the accused has continuously avoided communication and has failed to provide any lawful justification for withholding the legitimate dues of our client. Such conduct has caused severe financial loss, mental harassment, business disruption, and unnecessary hardship to our client.
                      </p>

                      <p>
                        The actions of the accused prima facie attract offences punishable under the applicable provisions of the <strong>Bharatiya Nyaya Sanhita (BNS)</strong>, including but not limited to offences relating to:
                      </p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700 mb-2">
                        <span>1. Cheating;</span>
                        <span>2. Criminal Breach of Trust;</span>
                        <span>3. Dishonest Misappropriation;</span>
                        <span>4. Fraudulent and dishonest inducement; and</span>
                        <span>5. Other allied offences as may be made out during investigation.</span>
                      </div>

                      <p>In view of the foregoing, we respectfully request your good office to:</p>
                      <div className="flex flex-col gap-0.5 pl-3 font-semibold text-slate-700 mb-2">
                        <span>1. Take cognizance of the present complaint;</span>
                        <span>2. Initiate appropriate inquiry/investigation against the accused;</span>
                        <span>3. Summon/call the accused for questioning;</span>
                        <span>4. Take necessary legal action in accordance with law; and</span>
                        <span>5. Protect the rights and interests of our client.</span>
                      </div>

                      <p className="font-bold text-slate-900 mt-2">
                        Kindly treat this matter as urgent and take appropriate action at the earliest.
                      </p>
                    </>
                  )}
                  
                  <p className="mt-2">
                    This is without prejudice to any other legal remedies, reliefs, and interest charges that our Client may be entitled to claim under law.
                  </p>
                </div>

                {/* Signature & High Fidelity Repeating Footer */}
                <div className="mt-auto pt-4 flex flex-col gap-3">
                  <div className="text-left px-1">
                    <div style={{ marginBottom: "4px", whiteSpace: "nowrap", width: "fit-content", textAlign: "left" }}>
                      <img src="/notices/Signature.png" alt="Signature" className="h-[35px] sm:h-[45px] w-auto inline-block" style={{ verticalAlign: "bottom", marginRight: "12px" }} />
                      <img src="/notices/AMA stamp logo.png" alt="Stamp" className="h-[45px] sm:h-[55px] w-auto object-contain opacity-90 inline-block" style={{ verticalAlign: "bottom" }} />
                    </div>
                    <span className="font-bold text-slate-800 text-[10.5px] sm:text-[11.5px] block">For AMA Legal Solutions<sup>®</sup></span>
                    <span className="text-slate-500 text-[9.5px] block mt-0.5">Through Authorized Signatory</span>
                  </div>
                  <div className="border-t border-b border-black py-1.5 flex items-center justify-between text-[7px] sm:text-[8px] font-bold text-black uppercase px-1">
                    <div className="w-[30px]"></div>
                    <div className="text-center tracking-wide whitespace-nowrap flex-1">
                      GURUGRAM - DELHI - NOIDA - BENGALURU - MUMBAI
                    </div>
                    <div className="w-[30px] flex justify-end">
                      <img src="/notices/AMA stamp logo.png" alt="Stamp" className="h-[20px] sm:h-[26px] w-auto object-contain opacity-90 block" />
                    </div>
                  </div>
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

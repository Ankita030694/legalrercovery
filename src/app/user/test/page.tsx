"use client";

import React, { useState } from "react";
import { Download, FileText } from "lucide-react";

export default function TestDraftsPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTestDownload = async (week: number) => {
    setIsGenerating(true);
    try {
      const response = await fetch(`/api/loan-recovery-notice-week${week}-pdf`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: "ACTOLOAN, in c/0 Prakash Chemtex India",
          clientPhone: "9896197115",
          clientEmail: "tech.ama123@gmail.com",
          clientAddress: "Building No.: 163-S, Basement, Model Town, Hisar, Haryana - 125001",
          clientAuthRepName: "Raman Jhakal",
          clientAuthRepPhone: "9896197115",
          amountPending: 111000,
          noticeDate: new Date().toISOString(),
          noticeRef: `LR-0063-12826-N${week}`,
          complainantName: "ACTOLOAN, in c/0 Prakash Chemtex India",
          complainantAddress: "Building No.: 163-S, Basement, Model Town, Hisar, Haryana - 125001",
          complainantEmail: "tech.ama123@gmail.com",
          defaulterName: "Imran Shaikh",
          phone: "8178310300",
          email: "tech.ama123@gmail.com",
          address: "GHAR NO-468, SERVE NO-187 ASHIYANA NIWAS, GANESH HSG SOCIETY, NEAR COD ROAD, CHINCHOLI DEHUROAD, dehuroad, PO:Dehu Road Cantt, DIST:Pune, Maharashtra, 412101",
          invoiceNo: "ACT262042",
          invoiceDate: "2026-05-26",
          disbursementDate: "2026-05-26",
          category: "loan-recovery"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Test-Loan-Recovery-Week${week}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error generating test PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePoliceComplaintTest = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch(`/api/loan-recovery-police-complaint-pdf`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: "ACTOLOAN, in c/0 Prakash Chemtex India",
          clientPhone: "9896197115",
          clientEmail: "tech.ama123@gmail.com",
          clientAddress: "Building No.: 163-S, Basement, Model Town, Hisar, Haryana - 125001",
          clientAuthRepName: "Raman Jhakal",
          clientAuthRepPhone: "9896197115",
          amountPending: 111000,
          noticeDate: new Date().toISOString(),
          noticeRef: `LR-0063-12826-N2`,
          complainantName: "ACTOLOAN, in c/0 Prakash Chemtex India",
          complainantAddress: "Building No.: 163-S, Basement, Model Town, Hisar, Haryana - 125001",
          complainantEmail: "tech.ama123@gmail.com",
          defaulterName: "Imran Shaikh",
          phone: "8178310300",
          email: "tech.ama123@gmail.com",
          address: "GHAR NO-468, SERVE NO-187 ASHIYANA NIWAS, GANESH HSG SOCIETY, NEAR COD ROAD, CHINCHOLI DEHUROAD, dehuroad, PO:Dehu Road Cantt, DIST:Pune, Maharashtra, 412101",
          policeStationName: "Director General of Police, Maharashtra",
          policeStationAddress: "Maharashtra State Police Headquarters, Old Council Hall, Shaheed Bhagat Singh Marg, Mumbai-1, Maharashtra",
          policeStationEmail: "tech.ama123@gmail.com",
          category: "loan-recovery"
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Test-Loan-Recovery-Police-Complaint.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert("Error generating test PDF");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-1 lg:pl-[275px] pt-16 pb-16 lg:pt-0 lg:pb-0 min-h-screen flex flex-col overflow-y-auto">
      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8 w-full max-w-8xl mx-auto">
        <div className="flex flex-col gap-6 text-left animate-in fade-in duration-300">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">Loan Recovery Drafts Tester</h1>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              Test and download the automatically generated PDF drafts for the loan-recovery category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {[1, 2, 3].map((week) => (
              <div key={week} className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-[#E5E7EB]/50 pb-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#111827]">Notice Week {week}</h3>
                    <p className="text-[10px] font-bold text-slate-400">Loan Recovery Category</p>
                  </div>
                </div>
                <button
                  onClick={() => handleTestDownload(week)}
                  disabled={isGenerating}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            ))}

            <div className="bg-white border border-[#E5E7EB]/70 rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b border-[#E5E7EB]/50 pb-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#111827]">Police Complaint</h3>
                  <p className="text-[10px] font-bold text-slate-400">Loan Recovery Category</p>
                </div>
              </div>
              <button
                onClick={handlePoliceComplaintTest}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-black text-white bg-slate-800 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

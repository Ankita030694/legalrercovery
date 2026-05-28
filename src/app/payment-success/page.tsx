import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { CheckCircle, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

export default async function PaymentSuccessPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("payu_auth_token")?.value;

  if (!token) {
    // If the cookie is missing, they didn't come from a verified PayU redirect
    redirect("/");
  }

  let data;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    data = JSON.parse(decoded);
    
    // Ensure it's a verified success
    if (!data.verified || data.status !== "success") {
      redirect("/");
    }
    
    // Optional: Check if the token is older than 5 minutes
    if (Date.now() - data.time > 5 * 60 * 1000) {
      redirect("/");
    }
  } catch (e) {
    // Invalid token format
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-4">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 w-full max-w-xl text-center shadow-[0_20px_50px_rgba(16,185,129,0.1)] relative z-10 border border-emerald-100">
        
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-white">
          <CheckCircle className="w-10 h-10" />
        </div>

        <h1 className="text-3xl font-black text-[#111827] mb-2 tracking-tight">
          Payment Successful!
        </h1>
        
        <p className="text-[#4B5563] font-medium mb-8">
          Thank you. Your transaction (<span className="font-bold text-[#111827]">#{data.txnid || "CONFIRMED"}</span>) has been processed securely. 
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left mb-8">
          <h3 className="font-black text-[#111827] mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-600" />
            What happens next?
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2 text-sm text-[#4B5563]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">1</div>
              <span>Our legal team is reviewing the case details you submitted.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#4B5563]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">2</div>
              <span>You will receive an email confirmation containing your dashboard tracking link.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-[#4B5563]">
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">3</div>
              <span>The first formal Legal Notice will be dispatched within 24 hours.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto px-8 py-3.5 font-black text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            Return to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}

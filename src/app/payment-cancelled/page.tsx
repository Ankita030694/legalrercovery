import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function PaymentCancelledPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("payu_auth_token")?.value;

  if (!token) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 w-full max-w-lg text-center shadow-[0_20px_50px_rgba(234,179,8,0.05)] relative z-10 border border-yellow-100">
        
        <div className="w-20 h-20 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-white">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <h1 className="text-3xl font-black text-[#111827] mb-2 tracking-tight">
          Payment Cancelled
        </h1>
        
        <p className="text-[#4B5563] font-medium mb-8">
          You cancelled the payment process. No charges were made to your account.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto px-8 py-3.5 font-black text-white bg-[#111827] hover:bg-[#1F2937] rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            Return to Home
          </Link>
          <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 font-bold text-[#4B5563] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Have a question?
          </Link>
        </div>

      </div>
    </div>
  );
}

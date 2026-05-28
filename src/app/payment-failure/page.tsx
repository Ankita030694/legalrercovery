import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { XCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default async function PaymentFailurePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("payu_auth_token")?.value;

  // We are a bit more lenient on failure pages. 
  // If they somehow got here without a token, we could redirect them away,
  // but showing a generic failure is safer than a confusing redirect.
  // However, as per requirements, we'll secure it tightly.
  if (!token) {
    redirect("/");
  }

  let data = null;
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    data = JSON.parse(decoded);
    
    // If it was actually a success, they shouldn't be here
    if (data.status === "success" && data.verified) {
      redirect("/payment-success");
    }
  } catch (e) {
    // If we can't parse the token, just show the failure UI anyway
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="bg-white rounded-3xl p-8 sm:p-12 w-full max-w-lg text-center shadow-[0_20px_50px_rgba(220,38,38,0.05)] relative z-10 border border-red-100">
        
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border-4 border-white">
          <XCircle className="w-10 h-10" />
        </div>

        <h1 className="text-3xl font-black text-[#111827] mb-2 tracking-tight">
          Payment Failed
        </h1>
        
        <p className="text-[#4B5563] font-medium mb-8">
          We couldn't process your payment. {data?.txnid ? `(Txn: #${data.txnid})` : ""} No amount was deducted from your account. 
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left mb-8">
          <p className="text-sm text-[#4B5563] font-medium leading-relaxed">
            This usually happens due to:
          </p>
          <ul className="mt-3 flex flex-col gap-2 list-disc list-inside text-sm text-[#6B7280]">
            <li>Network connectivity issues</li>
            <li>Incorrect bank details or OTP</li>
            <li>Bank servers being temporarily down</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="w-full sm:w-auto px-8 py-3.5 font-black text-white bg-[#DC2626] hover:bg-[#B91C1C] rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" /> Try Again
          </Link>
          <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 font-bold text-[#4B5563] bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Get Help
          </Link>
        </div>

      </div>
    </div>
  );
}

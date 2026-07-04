"use client";
import { useEffect, useRef } from "react";
import { signIn } from "next-auth/react";

export default function AutoLogin({ token }: { token: string }) {
  const attempted = useRef(false);

  useEffect(() => {
    if (token && !attempted.current) {
      attempted.current = true;
      // redirect: true automatically handles navigation to the callbackUrl if successful
      signIn("credentials", { token, callbackUrl: "/user/dashboard", redirect: true });
    }
  }, [token]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-semibold text-emerald-800">Logging you in securely...</p>
      </div>
    </div>
  );
}

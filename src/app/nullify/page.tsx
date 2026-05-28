"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Shield, Key, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/authority/blog",
      });

      if (res?.error) {
        setError("Invalid email address or administrative password.");
        setIsLoading(false);
      } else {
        window.location.href = "/authority/blog";
      }
    } catch (err: any) {
      setError("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center relative overflow-hidden font-sans antialiased">
      
      {/* ═══════════════════════════════════════
          BACKGROUND AMBIENT GLOWS
      ═══════════════════════════════════════ */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-red-600/10 blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#DC2626]/5 blur-[150px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* ═══════════════════════════════════════
          LOGIN CARD CONTAINER
      ═══════════════════════════════════════ */}
      <div className="w-full max-w-[420px] px-5 relative z-10">
        
        {/* Shield Icon & Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 text-[#DC2626] mb-4 shadow-[0_8px_30px_rgba(220,38,38,0.15)] animate-pulse">
            <Shield className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight uppercase">
            Legal Recovery
          </h1>
          <p className="text-xs text-gray-400 font-bold mt-1.5 tracking-wider uppercase">
            Control Center Authorization
          </p>
        </div>

        {/* Glassmorphic Form Card */}
        <div className="bg-[#111622]/60 border border-gray-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Error Notification */}
            {error && (
              <div className="flex items-start gap-2.5 p-3.5 bg-red-950/30 border border-red-800/40 rounded-xl text-red-400 text-xs font-semibold leading-relaxed animate-shake">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-[10px] sm:text-xs font-black text-gray-400 tracking-wider uppercase block">
                Administrative Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="admin@legalrecovery.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="w-full py-3.5 pl-11 pr-4 bg-[#080C14]/80 border border-gray-800 rounded-xl text-sm font-semibold text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all disabled:opacity-50"
                  required
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-[10px] sm:text-xs font-black text-gray-400 tracking-wider uppercase block">
                Security Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="w-full py-3.5 pl-11 pr-4 bg-[#080C14]/80 border border-gray-800 rounded-xl text-sm font-semibold text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all disabled:opacity-50"
                  required
                />
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-[#DC2626] text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 hover:bg-[#B91C1C] transition-all cursor-pointer shadow-[0_6px_20px_rgba(220,38,38,0.2)] hover:shadow-[0_8px_24px_rgba(220,38,38,0.3)] disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Enter Control Center
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Footer Notes */}
        <p className="text-[10px] text-center text-gray-600 font-bold uppercase tracking-[0.1em] mt-8 block">
          Authorized personnel only. Sessions are fully audited.
        </p>

      </div>
    </div>
  );
}

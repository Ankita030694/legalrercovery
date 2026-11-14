"use client";

import { useEffect, useRef, useState } from "react";
import { PlayCircle, X } from "lucide-react";

// 61-second product walkthrough, rendered from video/ (Remotion) and re-encoded for the web.
export const INTRO_VIDEO_SRC = "/videos/legalrecovery-intro.mp4";
export const INTRO_VIDEO_POSTER = "/videos/legalrecovery-intro-poster.jpg";

function Player({ autoPlay = false, className = "" }: { autoPlay?: boolean; className?: string }) {
  return (
    <video
      className={`w-full h-full object-cover bg-[#F8F9FB] ${className}`}
      poster={INTRO_VIDEO_POSTER}
      controls
      playsInline
      autoPlay={autoPlay}
      preload={autoPlay ? "auto" : "none"}
      width={1920}
      height={1080}
    >
      <source src={INTRO_VIDEO_SRC} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

/** Inline player in a rounded card, for marketing pages. */
export function IntroVideo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E7EB] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.12)] ${className}`}
    >
      <Player />
    </div>
  );
}

/** Full-screen modal player. */
export function IntroVideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="How LegalRecovery works"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-3 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white cursor-pointer"
        >
          Close <X className="w-4 h-4" />
        </button>
        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
          <Player autoPlay />
        </div>
      </div>
    </div>
  );
}

/** Compact card with a thumbnail that opens the video in a modal, for the user dashboard. */
export function IntroVideoCard({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group w-full flex items-center gap-4 text-left bg-white border border-[#E5E7EB] rounded-2xl p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-red-200 transition-colors cursor-pointer ${className}`}
      >
        <div className="relative w-28 sm:w-36 aspect-video shrink-0 rounded-xl overflow-hidden border border-slate-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={INTRO_VIDEO_POSTER} alt="" width={1280} height={720} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/20 transition-colors">
            <PlayCircle className="w-9 h-9 text-white drop-shadow-md fill-[#DC2626]" />
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#DC2626]">1-minute video</span>
          <span className="text-sm sm:text-base font-black text-[#111827] tracking-tight">See how LegalRecovery works</span>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-0.5">
            File a claim, auto escalation, get paid: the whole process start to finish.
          </span>
        </div>
      </button>
      <IntroVideoModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

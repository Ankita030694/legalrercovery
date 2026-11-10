"use client";

import { useEffect, useState } from "react";

/** Phone-only button that brings the form back once it has scrolled out of view. */
export default function StickyStartButton({ targetId }: { targetId: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 p-3">
      <button
        type="button"
        onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
        className="w-full py-3.5 text-sm font-black text-white bg-[#DC2626] active:bg-[#991B1B] rounded-xl touch-manipulation"
      >
        Start for ₹999
      </button>
    </div>
  );
}

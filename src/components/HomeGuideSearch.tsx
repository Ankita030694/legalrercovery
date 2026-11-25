"use client";

import React, { useDeferredValue, useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type Fuse from "fuse.js";
import { Search, X, ArrowRight, Loader2 } from "lucide-react";

interface SearchEntry {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  type: string;
}

const MAX_RESULTS = 8;

const SUGGESTIONS = [
  "Unpaid salary",
  "Security deposit",
  "Cheque bounce",
  "Flight refund",
  "Unpaid invoice",
  "Loan to a friend",
];

// The index (~700 pages + every blog post) and Fuse are only fetched once the visitor
// shows intent (focus, hover or a suggestion click), so the homepage stays light.
let fusePromise: Promise<Fuse<SearchEntry>> | null = null;
function loadFuse(): Promise<Fuse<SearchEntry>> {
  if (!fusePromise) {
    fusePromise = Promise.all([
      import("fuse.js").then((m) => m.default),
      fetch("/api/search-index").then((r) => {
        if (!r.ok) throw new Error(`search index ${r.status}`);
        return r.json() as Promise<SearchEntry[]>;
      }),
    ])
      .then(
        ([FuseCtor, entries]) =>
          new FuseCtor(entries, {
            // Each query word is fuzzy-matched on its own and ranked by rarity, so
            // "salery not paid" still finds the unpaid salary guides.
            useTokenSearch: true,
            ignoreLocation: true,
            threshold: 0.35,
            keys: [
              { name: "title", weight: 3 },
              { name: "keywords", weight: 1.5 },
              { name: "description", weight: 1 },
            ],
          })
      )
      .catch((err) => {
        fusePromise = null; // allow a retry on next focus
        throw err;
      });
  }
  return fusePromise;
}

export default function HomeGuideSearch() {
  const router = useRouter();
  const ids = useId();
  const listboxId = `${ids}-results`;
  const headingId = `${ids}-heading`;

  const [query, setQuery] = useState("");
  const [fuse, setFuse] = useState<Fuse<SearchEntry> | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Typing stays responsive; the search runs on the deferred value.
  const deferredQuery = useDeferredValue(query);
  const trimmed = deferredQuery.trim();

  const results = useMemo(() => {
    if (!fuse || trimmed.length < 2) return [];
    return fuse.search(trimmed, { limit: MAX_RESULTS }).map((r) => r.item);
  }, [fuse, trimmed]);

  function warmUp() {
    if (fuse || status === "loading") return;
    setStatus("loading");
    loadFuse()
      .then((f) => {
        setFuse(f);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("HomeGuideSearch: failed to load index", err);
        setStatus("error");
      });
  }

  useEffect(() => {
    setActive(-1);
  }, [trimmed]);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setOpen(true);
    warmUp();
  }

  function pickSuggestion(s: string) {
    setQuery(s);
    setOpen(true);
    warmUp();
    inputRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? results.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[active >= 0 ? active : 0];
      if (target) router.push(target.url);
    }
  }

  const showPanel = open && query.trim().length >= 2;
  const searching = status === "loading" || (status === "ready" && query.trim() !== trimmed);

  return (
    <section aria-labelledby={headingId} className="mt-12 md:mt-20 max-w-3xl mx-auto px-0 sm:px-4">
      <div className="text-center mb-5 sm:mb-7">
        <h2
          id={headingId}
          className="text-2xl sm:text-3xl md:text-[34px] font-black text-[#111827] leading-tight tracking-tight mb-2"
        >
          What are you looking to <span className="text-[#DC2626]">recover?</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#6B7280] font-semibold">
          Search our recovery guides, legal notice formats, templates and calculators.
        </p>
      </div>

      <div ref={wrapperRef} className="relative">
        <label htmlFor={`${ids}-input`} className="sr-only">
          Search recovery guides
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 sm:px-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] focus-within:border-[#DC2626]/60 focus-within:ring-4 focus-within:ring-[#DC2626]/10 transition">
          <Search className="w-5 h-5 text-[#9CA3AF] shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            id={`${ids}-input`}
            type="search"
            role="combobox"
            autoComplete="off"
            spellCheck={false}
            aria-autocomplete="list"
            aria-expanded={showPanel}
            aria-controls={listboxId}
            aria-activedescendant={active >= 0 ? `${ids}-opt-${active}` : undefined}
            value={query}
            onChange={onChange}
            onFocus={() => {
              warmUp();
              setOpen(true);
            }}
            onPointerEnter={warmUp}
            onKeyDown={onKeyDown}
            placeholder="e.g. unpaid salary, security deposit, cheque bounce"
            className="w-full bg-transparent py-4 sm:py-5 text-[15px] sm:text-base font-semibold text-[#111827] placeholder:text-[#9CA3AF] placeholder:font-medium outline-none [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="p-1 rounded-full text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F3F4F6]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {showPanel && (
          <div className="absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden">
            {searching && results.length === 0 ? (
              <div className="flex items-center gap-2 px-5 py-5 text-sm font-semibold text-[#6B7280]">
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Searching guides…
              </div>
            ) : status === "error" ? (
              <div className="px-5 py-5 text-sm font-semibold text-[#6B7280]">
                Search is unavailable right now.{" "}
                <Link href="/blog" className="text-[#DC2626] hover:underline">
                  Browse all guides
                </Link>
              </div>
            ) : results.length === 0 ? (
              <div className="px-5 py-5 text-sm text-[#4B5563]">
                <p className="font-bold text-[#111827]">No guides matched “{query.trim()}”.</p>
                <p className="mt-1">Try a simpler phrase like “salary”, “deposit” or “refund”.</p>
              </div>
            ) : (
              <ul id={listboxId} role="listbox" aria-label="Matching guides" className="max-h-[60vh] overflow-y-auto py-2">
                {results.map((r, i) => (
                  <li key={r.url} id={`${ids}-opt-${i}`} role="option" aria-selected={i === active}>
                    <Link
                      href={r.url}
                      onMouseEnter={() => setActive(i)}
                      className={`block px-5 py-3 transition-colors ${i === active ? "bg-[#FEF2F2]" : "hover:bg-[#F9FAFB]"}`}
                    >
                      <span
                        className={`inline-block text-[10.5px] font-bold uppercase tracking-wide rounded px-1.5 py-0.5 mb-1 ${
                          r.type === "Blog" ? "bg-[#FEE2E2] text-[#B91C1C]" : "bg-[#F3F4F6] text-[#4B5563]"
                        }`}
                      >
                        {r.type}
                      </span>
                      <span className="block text-[14.5px] font-bold leading-snug text-[#111827]">{r.title}</span>
                      {r.description && (
                        <span className="mt-0.5 block text-[12.5px] leading-relaxed text-[#6B7280] line-clamp-2">
                          {r.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center justify-between gap-3 border-t border-[#F3F4F6] bg-[#F9FAFB] px-5 py-3 text-[12.5px] font-bold">
              <Link href="/blog" className="text-[#4B5563] hover:text-[#111827]">
                Browse all guides
              </Link>
              <Link href="/recover-my-money" className="inline-flex items-center gap-1 text-[#DC2626] hover:text-[#B91C1C]">
                Start your recovery <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => pickSuggestion(s)}
            onPointerEnter={warmUp}
            className="rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 text-[12.5px] font-bold text-[#4B5563] hover:border-[#DC2626]/40 hover:text-[#DC2626] transition-colors"
          >
            {s}
          </button>
        ))}
      </div>
    </section>
  );
}

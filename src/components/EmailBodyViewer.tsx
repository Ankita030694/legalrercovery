"use client";

import React, { useState, useMemo } from "react";
import { Mail, ChevronDown, ChevronRight } from "lucide-react";

/**
 * Extracts a clean, human-readable plain text snippet from raw email HTML or text.
 * Strips HTML tags, styles, scripts, and decodes HTML entities.
 */
export function getEmailSnippet(rawContent?: string, maxLength: number = 130): string {
  if (!rawContent) return "No message text";

  let str = rawContent;

  // Check if contains HTML
  const isHtml = /<[a-z][\s\S]*>/i.test(str);
  if (!isHtml) {
    const cleaned = str.replace(/\s+/g, " ").trim();
    return cleaned.length > maxLength ? cleaned.substring(0, maxLength) + "..." : cleaned;
  }

  // Strip script and style tags completely
  str = str.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");
  str = str.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  // Detect quote boundary
  const quoteRegex = /(?:<div[^>]*class="[^"]*(?:gmail_quote|gmail_extra|yahoo_quoted)[^"]*"[^>]*>|<blockquote|<div[^>]*dir="ltr"[^>]*class="[^"]*gmail_attr[^"]*"[^>]*>)/i;
  const match = str.match(quoteRegex);

  let newPart = "";
  let quotedPart = "";

  if (match && match.index !== undefined) {
    newPart = str.substring(0, match.index);
    quotedPart = str.substring(match.index);
  } else {
    newPart = str;
  }

  const stripTags = (htmlStr: string) => {
    return htmlStr
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/p>|<\/div>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  const cleanNew = stripTags(newPart);
  if (cleanNew.length > 0) {
    return cleanNew.length > maxLength ? cleanNew.substring(0, maxLength) + "..." : cleanNew;
  }

  // If new part is empty, extract text from quoted portion
  let cleanQuoted = stripTags(quotedPart).replace(/^On .*?wrote:\s*/i, "");
  if (cleanQuoted.length > 0) {
    return cleanQuoted.length > maxLength ? cleanQuoted.substring(0, maxLength) + "..." : cleanQuoted;
  }

  return "Inbound legal notice communication";
}

/**
 * Strips dangerous tags and attributes from HTML for safe rendering.
 */
function sanitizeEmailHtml(html: string): string {
  if (!html) return "";

  return html
    .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, "")
    .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, "")
    .replace(/<iframe\b[^>]*>([\s\S]*?)<\/iframe>/gi, "")
    .replace(/<object\b[^>]*>([\s\S]*?)<\/object>/gi, "")
    .replace(/<embed\b[^>]*>([\s\S]*?)<\/embed>/gi, "")
    .replace(/<form\b[^>]*>([\s\S]*?)<\/form>/gi, "")
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "") // Remove on* handlers
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "")
    .replace(/href\s*=\s*(['"])javascript:.*?\1/gi, 'href="#"')
    .replace(/src\s*=\s*(['"])javascript:.*?\1/gi, "");
}

interface ParsedEmailData {
  isHtml: boolean;
  hasNew: boolean;
  hasQuoted: boolean;
  newHtml: string;
  quotedHtml: string;
  newText: string;
  quotedText: string;
  plainText: string;
}

export function parseEmailContent(rawContent?: string): ParsedEmailData {
  if (!rawContent) {
    return {
      isHtml: false,
      hasNew: false,
      hasQuoted: false,
      newHtml: "",
      quotedHtml: "",
      newText: "",
      quotedText: "",
      plainText: ""
    };
  }

  const isHtml = /<[a-z][\s\S]*>/i.test(rawContent);
  if (!isHtml) {
    const text = rawContent.trim();
    return {
      isHtml: false,
      hasNew: text.length > 0,
      hasQuoted: false,
      newHtml: "",
      quotedHtml: "",
      newText: text,
      quotedText: "",
      plainText: text
    };
  }

  // Clean script & style
  let cleaned = rawContent
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  const quoteRegex = /(?:<div[^>]*class="[^"]*(?:gmail_quote|gmail_extra|yahoo_quoted)[^"]*"[^>]*>|<blockquote|<div[^>]*dir="ltr"[^>]*class="[^"]*gmail_attr[^"]*"[^>]*>)/i;
  const match = cleaned.match(quoteRegex);

  let newHtml = "";
  let quotedHtml = "";

  if (match && match.index !== undefined) {
    newHtml = cleaned.substring(0, match.index);
    quotedHtml = cleaned.substring(match.index);
  } else {
    newHtml = cleaned;
  }

  const stripTags = (h: string) => {
    return h
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/p>|<\/div>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  const newText = stripTags(newHtml);
  const quotedText = stripTags(quotedHtml);

  const hasNew = newText.length > 0;
  const hasQuoted = quotedText.length > 0;

  return {
    isHtml: true,
    hasNew,
    hasQuoted,
    newHtml: sanitizeEmailHtml(newHtml),
    quotedHtml: sanitizeEmailHtml(quotedHtml),
    newText,
    quotedText,
    plainText: hasNew ? newText : quotedText
  };
}

interface EmailBodyViewerProps {
  content?: string;
  className?: string;
}

export default function EmailBodyViewer({ content, className = "" }: EmailBodyViewerProps) {
  const parsed = useMemo(() => parseEmailContent(content), [content]);
  // If there's new content, keep quote collapsed by default. If no new content, expand quote so user can read it.
  const [showQuoted, setShowQuoted] = useState(!parsed.hasNew);

  if (!content) {
    return (
      <div className="text-xs text-slate-400 italic py-2">
        No text provided with this inbound communication.
      </div>
    );
  }

  // Plain Text (WhatsApp or non-HTML emails)
  if (!parsed.isHtml) {
    return (
      <div
        className={`text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-wrap select-text ${className}`}
      >
        {content}
      </div>
    );
  }

  // HTML Email
  return (
    <div className={`space-y-3 select-text text-xs sm:text-sm text-slate-800 ${className}`}>
      {/* 1. New Debtor Reply Content */}
      {parsed.hasNew ? (
        <div
          className="email-reply-body leading-relaxed font-sans overflow-x-auto [&_p]:mb-2.5 [&_a]:text-blue-600 [&_a]:underline [&_img]:max-w-full [&_img]:h-auto"
          dangerouslySetInnerHTML={{ __html: parsed.newHtml }}
        />
      ) : parsed.hasQuoted ? (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50/80 border border-amber-200/80 rounded-lg text-xs font-bold text-amber-800 mb-1">
          <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Inbound Response (Quoted Legal Notice Thread)</span>
        </div>
      ) : null}

      {/* 2. Quoted Notice History Toggle (Gmail Style) */}
      {parsed.hasQuoted && (
        <div className="pt-1">
          {parsed.hasNew && (
            <button
              type="button"
              onClick={() => setShowQuoted(!showQuoted)}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-[11px] font-bold cursor-pointer transition-colors"
              title={showQuoted ? "Hide quoted text" : "Show quoted text"}
            >
              <span className="tracking-widest font-black text-xs leading-none">···</span>
              <span className="ml-1 text-[10px] uppercase tracking-wider text-slate-500">
                {showQuoted ? "Hide quoted text" : "Show quoted text"}
              </span>
              {showQuoted ? (
                <ChevronDown className="w-3 h-3 text-slate-400" />
              ) : (
                <ChevronRight className="w-3 h-3 text-slate-400" />
              )}
            </button>
          )}

          {/* Quoted Content Block */}
          {showQuoted && (
            <div
              className={`mt-2 border-l-2 border-slate-300 pl-4 py-2 text-slate-600 bg-slate-50/60 rounded-r-xl overflow-x-auto text-xs sm:text-sm leading-relaxed font-sans [&_p]:mb-2 [&_a]:text-blue-600 [&_a]:underline [&_img]:max-w-full [&_img]:h-auto ${
                !parsed.hasNew ? "border-slate-300 bg-transparent pl-3" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: parsed.quotedHtml }}
            />
          )}
        </div>
      )}

      {/* Fallback if both hasNew and hasQuoted were evaluated false */}
      {!parsed.hasNew && !parsed.hasQuoted && (
        <div
          className="email-reply-body leading-relaxed font-sans overflow-x-auto [&_p]:mb-2.5 [&_a]:text-blue-600 [&_a]:underline [&_img]:max-w-full [&_img]:h-auto"
          dangerouslySetInnerHTML={{ __html: parsed.newHtml || content }}
        />
      )}
    </div>
  );
}

/**
 * Inbound Email Router
 * ────────────────────
 * Deterministic routing of emails received at the notice mailbox to the exact case.
 *
 * Principles:
 *  1. Every inbound email is persisted in `inbound_emails` (nothing is silently dropped).
 *  2. A reply is auto-delivered to a client ONLY when the case is identified with certainty:
 *       a. Zoho thread → the outbound notice that started the thread
 *       b. notice+<CASE-ID>@ plus-address in To/Cc
 *       c. exactly one LR case reference in the subject (or, failing that, the body)
 *       d. a Loan ID / Invoice No that belongs to exactly one case
 *       e. a sender/To/Cc address that belongs to exactly one case
 *  3. Anything ambiguous (0 or >1 cases) goes to the admin triage queue with scored
 *     suggestions. Name/amount matching is used ONLY for suggestions, never for auto-delivery.
 *  4. Bounces and auto-replies are classified separately and never shown as "replies".
 *
 * This module only uses relative imports so it can also be compiled and run by
 * one-off maintenance scripts.
 */
import { Db, ObjectId } from "mongodb";
import crypto from "crypto";
import {
  getZohoMailContext,
  getZohoFolderIds,
  fetchZohoMessageDetails,
  fetchZohoMessageHeaders,
  fetchZohoMessageContent,
  ZohoMailContext,
} from "./zoho-mail";

export const INBOUND_COLLECTION = "inbound_emails";
export const THREAD_COLLECTION = "email_threads";

const OWN_MAILBOX = (process.env.NOTICE_EMAIL || "notice@amalegalsolutions.com").toLowerCase();
const OWN_LOCAL_PART = OWN_MAILBOX.split("@")[0];
const OWN_DOMAIN = OWN_MAILBOX.split("@")[1] || "amalegalsolutions.com";

const DEFAULT_ADMIN_USER_ID = "6a7aaf191170b4d4d8a4b3bf";

const CASE_REF_RE = /\bLR-[A-Z0-9]{4}-\d{4,6}\b/gi;
const LOAN_TOKEN_RE = /\b(?:[A-Z]{2,6}\d{4,16}|INV-[A-Z0-9-]{3,})\b/gi;

const GENERIC_EMAIL_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.co.in", "yahoo.in", "outlook.com", "hotmail.com",
  "live.com", "rediffmail.com", "icloud.com", "me.com", "aol.com", "protonmail.com", "proton.me", "zoho.com",
  "zohomail.in", "ymail.com", "msn.com",
]);

export type InboundClassification =
  | "human"
  | "bounce"
  | "delivery_delay"
  | "auto_reply"
  | "dispatcher"
  | "internal";

export type RoutingStatus =
  | "auto_linked"   // deterministic match → notification created
  | "assigned"      // admin manually assigned → notification created
  | "needs_review"  // ambiguous or has suggestions → waiting for admin
  | "unmatched"     // no deterministic match and no suggestion
  | "dismissed"     // admin dismissed
  | "recorded";     // stored for audit only (delivery delays, internal, unlinked bounces/auto-replies)

export type RoutingMethod =
  | "thread"
  | "plus_address"
  | "subject_ref"
  | "body_ref"
  | "loan_id"
  | "participant_email"
  | "participant_email+invoice"
  | "client_email"
  | "dispatcher"
  | "manual"
  | "manual_cleanup";

export interface CandidateCase {
  caseId: string;
  score: number;
  reasons: string[];
}

export interface InboundEnvelope {
  zohoMessageId: string;
  folderId: string | null;
  threadId: string | null;
  from: string;
  fromEmail: string;
  fromName: string;
  to: string[];
  cc: string[];
  subject: string;
  rawBody: string;
  bodyText: string;   // full plain text (includes quoted thread)
  cleanBody: string;  // reply text only (quoted thread stripped)
  inReplyTo: string | null;
  references: string[];
  headers: Record<string, string>;
  receivedAt: string;
  enriched: boolean;
}

export interface RoutingDecision {
  classification: InboundClassification;
  status: RoutingStatus;
  method: RoutingMethod | null;
  caseId: string | null;
  senderRole: "accused" | "client" | "third_party" | "dispatcher" | null;
  candidates: CandidateCase[];
  reason: string;
}

export interface ProcessResult {
  duplicate: boolean;
  inboundId: string | null;
  notificationId: string | null;
  envelope: InboundEnvelope | null;
  decision: RoutingDecision | null;
}

// ─────────────────────────────────────────────────────────────────────────────
// Text helpers
// ─────────────────────────────────────────────────────────────────────────────

const HTML_ENTITIES: Record<string, string> = {
  "&nbsp;": " ", "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&apos;": "'",
};

export function decodeEntities(s: string): string {
  return (s || "")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&[a-z0-9#]+;/gi, (m) => HTML_ENTITIES[m.toLowerCase()] ?? m);
}

export function htmlToText(raw: string): string {
  if (!raw) return "";
  return decodeEntities(
    raw
      .replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, "")
      .replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|tr|li|h\d)\s*>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n\s*\n+/g, "\n\n")
    .trim();
}

/** Strips quoted thread content so only the new reply text remains. */
export function cleanEmailBody(body: string): string {
  if (!body) return "";

  let cleaned = body;
  cleaned = cleaned.replace(/<style\b[^>]*>([\s\S]*?)<\/style>/gi, "");
  cleaned = cleaned.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi, "");
  cleaned = cleaned.replace(/div\.zm_[^{\n]+\{[^}]*\}/gi, "");

  const htmlSplitters = [
    /<div[^>]*class="[^"]*gmail_quote[^"]*"[^>]*>/i,
    /<div[^>]*class="[^"]*x_[^"]*gmail_quote[^"]*"[^>]*>/i,
    /<blockquote[^>]*>/i,
    /<div[^>]*id="[^"]*divRplyFwdMsg[^"]*"[^>]*>/i,
    /<!--\s*content\s*-->/i,
  ];
  for (const regex of htmlSplitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) cleaned = parts[0];
  }

  cleaned = cleaned
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p\s*>/gi, "\n")
    .replace(/<\/div\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "");
  cleaned = decodeEntities(cleaned);

  const textSplitters = [
    /-----Original Message-----/i,
    /On\s+.*\s+wrote:/i,
    /From:\s+notice@/i,
    /Sent from my/i,
    /_____\s+From:/i,
  ];
  for (const regex of textSplitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) cleaned = parts[0];
  }

  return cleaned
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => !line.startsWith("div.zm_") && !line.includes("{ margin-top:"))
    .filter((line, index, arr) => line !== "" || (index > 0 && arr[index - 1] !== ""))
    .join("\n")
    .trim();
}

export function extractEmails(...inputs: any[]): string[] {
  const out: string[] = [];
  const re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
  for (const input of inputs) {
    if (!input) continue;
    const text = decodeEntities(typeof input === "string" ? input : JSON.stringify(input));
    const matches = text.match(re);
    if (matches) for (const m of matches) out.push(m.toLowerCase().trim());
  }
  return [...new Set(out)];
}

function parseFromName(rawFrom: string): string {
  const decoded = decodeEntities(rawFrom || "");
  const lt = decoded.indexOf("<");
  if (lt > 0) return decoded.slice(0, lt).replace(/["']/g, "").trim();
  return "";
}

function isOwnAddress(email: string): boolean {
  const e = (email || "").toLowerCase();
  return e.endsWith(`@${OWN_DOMAIN}`);
}

function emailDomain(email: string): string {
  return (email || "").toLowerCase().split("@")[1] || "";
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function exactEmailRegexes(emails: string[]): RegExp[] {
  return emails.map((e) => new RegExp(`^${escapeRegex(e)}$`, "i"));
}

/** Lower-case, unify '&', drop honorifics & punctuation, collapse whitespace. */
function normalizeForMatch(s: string): string {
  return decodeEntities(s || "")
    .toLowerCase()
    .replace(/\bm\/s\.?/g, " ")
    .replace(/\band\b/g, " & ")
    .replace(/[^a-z0-9&]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsPhrase(normText: string, normPhrase: string): boolean {
  if (!normPhrase || normPhrase.length < 4) return false;
  return ` ${normText} `.includes(` ${normPhrase} `);
}

function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// ─────────────────────────────────────────────────────────────────────────────
// Envelope construction (payload + authoritative Zoho metadata)
// ─────────────────────────────────────────────────────────────────────────────

function toIso(value: any): string | null {
  if (value === undefined || value === null || value === "") return null;
  const n = Number(value);
  const d = !isNaN(n) && String(value).length >= 12 ? new Date(n) : new Date(value);
  return isNaN(d.getTime()) ? null : d.toISOString();
}

export async function buildEnvelope(payload: any, opts: { skipEnrichment?: boolean } = {}): Promise<InboundEnvelope> {
  const p = payload || {};
  const rawFrom = String(p.from || p.fromAddress || p.sender || "");
  let subject = decodeEntities(String(p.subject || ""));
  let rawBody = String(p.body || p.content || p.htmlBody || p.html || "");
  let to = extractEmails(p.to, p.toAddress, p.recipient, p.recipients);
  let cc = extractEmails(p.cc, p.ccAddress, p.bcc);
  let fromEmail = extractEmails(rawFrom)[0] || "";
  let fromName = parseFromName(rawFrom);
  let threadId: string | null = p.threadId ? String(p.threadId) : null;
  let folderId: string | null = p.folderId ? String(p.folderId) : null;
  let receivedAt = toIso(p.receivedTime) || toIso(p.timestamp) || new Date().toISOString();
  let headers: Record<string, string> = {};
  let enriched = false;

  const rawMessageId = String(p.messageId || p.message_id || p.msgId || "").trim();
  const zohoMessageId =
    rawMessageId ||
    `synthetic-${crypto
      .createHash("sha1")
      .update(`${fromEmail}|${subject}|${rawBody.slice(0, 2000)}`)
      .digest("hex")}`;

  if (!opts.skipEnrichment && /^\d+$/.test(rawMessageId)) {
    try {
      const ctx: ZohoMailContext = await getZohoMailContext();
      const folders = await getZohoFolderIds(ctx);
      const tryFolders = uniq([folderId, folders.inbox].filter(Boolean) as string[]);
      let details: any = null;
      for (const f of tryFolders) {
        details = await fetchZohoMessageDetails(rawMessageId, f, ctx);
        if (details) break;
      }
      if (details) {
        enriched = true;
        folderId = String(details.folderId || folderId || "");
        threadId = details.threadId ? String(details.threadId) : threadId;
        subject = decodeEntities(String(details.subject || subject));
        const dFrom = extractEmails(details.fromAddress, details.sender)[0];
        if (dFrom) fromEmail = dFrom;
        const dTo = extractEmails(details.toAddress);
        const dCc = extractEmails(details.ccAddress);
        if (dTo.length) to = dTo;
        if (dCc.length) cc = dCc;
        receivedAt = toIso(details.receivedTime) || receivedAt;

        const h = await fetchZohoMessageHeaders(rawMessageId, folderId, ctx);
        if (h) {
          headers = h;
          if (!fromName && h["from"]) fromName = parseFromName(h["from"]);
          const hTo = extractEmails(h["to"], h["delivered-to"]);
          const hCc = extractEmails(h["cc"]);
          to = uniq([...to, ...hTo]);
          cc = uniq([...cc, ...hCc]);
        }
        if (!rawBody) {
          rawBody = (await fetchZohoMessageContent(rawMessageId, folderId, ctx)) || "";
        }
      }
    } catch (err) {
      console.error("[Inbound Router] Zoho enrichment failed; continuing with webhook payload only:", err);
    }
  }

  const inReplyTo = headers["in-reply-to"] ? headers["in-reply-to"].trim() : null;
  const references = (headers["references"] || "").match(/<[^>]+>/g) || [];
  const bodyText = htmlToText(rawBody);
  const cleanBody = cleanEmailBody(rawBody) || bodyText.slice(0, 4000);

  return {
    zohoMessageId,
    folderId,
    threadId,
    from: rawFrom || fromEmail,
    fromEmail,
    fromName,
    to: to.filter((e) => e !== fromEmail),
    cc: cc.filter((e) => e !== fromEmail),
    subject,
    rawBody,
    bodyText,
    cleanBody,
    inReplyTo,
    references,
    headers,
    receivedAt,
    enriched,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Classification
// ─────────────────────────────────────────────────────────────────────────────

export function classifyEnvelope(env: InboundEnvelope): Exclude<InboundClassification, "dispatcher"> {
  const from = env.fromEmail;
  if (from === OWN_MAILBOX) return "internal";
  // Mailbox-provider system mail (sign-in alerts etc.) is never a case reply.
  if (/@(zohoaccounts\.(in|com)|zohocorp\.com)$/i.test(from) || /^(no-?reply|notifications?)@zoho\.(in|com)$/i.test(from)) {
    return "internal";
  }

  const isDaemon =
    /^(mailer-daemon|postmaster|mail-daemon|maildaemon)@/i.test(from) ||
    /mail delivery (subsystem|system)/i.test(env.fromName);
  const bounceSubject =
    /^(undelivered mail returned to sender|undeliverable|mail delivery failed|returned mail|delivery status notification|failure notice|delivery failure)/i.test(
      env.subject
    );
  if (isDaemon || (bounceSubject && /daemon|postmaster|mail delivery/i.test(`${from} ${env.fromName}`))) {
    if (/\(delay\)|delayed|delivery delay/i.test(env.subject)) return "delivery_delay";
    return "bounce";
  }

  const h = env.headers || {};
  const autoSubmitted = (h["auto-submitted"] || "").toLowerCase();
  const precedence = (h["precedence"] || "").toLowerCase();
  if (
    (autoSubmitted && autoSubmitted !== "no") ||
    h["x-autoreply"] ||
    h["x-autorespond"] ||
    ["auto_reply", "auto-reply", "junk"].includes(precedence)
  ) {
    return "auto_reply";
  }
  return "human";
}

async function detectDispatcher(db: Db, env: InboundEnvelope): Promise<{ isDispatcher: boolean; batch: any | null }> {
  const isBatchSubject = /Notice Dispatch Batch|DISP-\d+/i.test(env.subject || "");
  const strongSignal = isBatchSubject || env.fromEmail.includes("jatinder");

  let batch: any = env.fromEmail
    ? await db.collection("dispatch_batches").findOne({ dispatcherEmail: env.fromEmail.toLowerCase() })
    : null;

  // A sender that was once used as a dispatcher address (e.g. a test batch) is NOT a dispatcher
  // when the email clearly concerns a case: it carries a case reference, or the sender is a
  // party (accused/client) on some case.
  if (batch && !strongSignal) {
    if (refsIn(env.subject).length > 0) return { isDispatcher: false, batch: null };
    const rx = exactEmailRegexes([env.fromEmail]);
    const isCaseParty = await db.collection("cases").findOne(
      { $or: [{ email: { $in: rx } }, { email2: { $in: rx } }, { clientEmail: { $in: rx } }] },
      { projection: { _id: 1 } }
    );
    if (isCaseParty) return { isDispatcher: false, batch: null };
  }

  if (!batch && isBatchSubject) {
    const batchMatch = `${env.subject} ${env.cleanBody}`.match(/DISP-\d{8}-\d{4}/i);
    if (batchMatch) {
      batch = await db.collection("dispatch_batches").findOne({ batchId: batchMatch[0].toUpperCase() });
    } else {
      batch = await db.collection("dispatch_batches").findOne({}, { sort: { createdAt: -1 } });
    }
  }
  const isDispatcher = !!batch || strongSignal;
  return { isDispatcher, batch };
}

// ─────────────────────────────────────────────────────────────────────────────
// Deterministic case resolution
// ─────────────────────────────────────────────────────────────────────────────

const CASE_PROJECTION = {
  caseId: 1, userId: 1, defaulterName: 1, clientName: 1, clientEmail: 1, clientPhone: 1,
  email: 1, email2: 1, phone: 1, phone2: 1, stuckAmount: 1, invoiceNo: 1, loanId: 1,
  invoices: 1, status: 1, representeeId: 1, createdAt: 1, ccEmails: 1, policeStationEmail: 1,
};

async function casesByIds(db: Db, caseIds: string[]): Promise<any[]> {
  if (caseIds.length === 0) return [];
  return db.collection("cases").find({ caseId: { $in: caseIds } }, { projection: CASE_PROJECTION }).toArray();
}

function refsIn(text: string): string[] {
  return uniq((text.match(CASE_REF_RE) || []).map((r) => r.toUpperCase()));
}

/**
 * Resolves which case a Zoho thread belongs to, using the outbound message that started it.
 * Result is cached in `email_threads` (keyed by threadId).
 */
export async function resolveThreadCase(
  db: Db,
  threadId: string,
  opts: { dryRun?: boolean } = {}
): Promise<{ caseId: string | null; via: string }> {
  const cached = await db.collection(THREAD_COLLECTION).findOne({ _id: threadId as any });
  if (cached && cached.caseId) return { caseId: cached.caseId, via: `cache:${cached.via}` };

  let ctx: ZohoMailContext;
  let folders: { inbox: string | null; sent: string | null };
  try {
    ctx = await getZohoMailContext();
    folders = await getZohoFolderIds(ctx);
  } catch {
    return { caseId: null, via: "zoho_unavailable" };
  }

  let root: any = null;
  let rootFolder: string | null = null;
  for (const f of [folders.sent, folders.inbox].filter(Boolean) as string[]) {
    root = await fetchZohoMessageDetails(threadId, f, ctx);
    if (root) { rootFolder = f; break; }
  }
  if (!root) return { caseId: null, via: "root_not_found" };

  const rootFrom = extractEmails(root.fromAddress)[0] || "";
  const rootIsOutbound = rootFrom === OWN_MAILBOX || rootFolder === folders.sent;
  let caseId: string | null = null;
  let via = "unresolved";

  if (rootIsOutbound) {
    // (1) Our outbound subject carries the case reference.
    const refs = refsIn(decodeEntities(String(root.subject || "")));
    if (refs.length > 0) {
      const found = await casesByIds(db, refs);
      const distinct = uniq(found.map((c) => c.caseId));
      if (distinct.length === 1) { caseId = distinct[0]; via = "root_subject_ref"; }
    }

    // (2) Otherwise match the dispatch ledger: same recipient, dispatched within minutes of the send.
    if (!caseId) {
      const recipients = extractEmails(root.toAddress).filter((e) => !isOwnAddress(e));
      const sentAt = Number(root.sentDateInGMT || root.receivedTime);
      if (recipients.length > 0 && !isNaN(sentAt)) {
        const fromIso = new Date(sentAt - 10 * 60 * 1000).toISOString();
        const toIso_ = new Date(sentAt + 15 * 60 * 1000).toISOString();
        const logs = await db.collection("dispatch_logs").find({
          dispatchedAt: { $gte: fromIso, $lte: toIso_ },
          $or: recipients.map((e) => ({ recipientEmail: { $regex: escapeRegex(e), $options: "i" } })),
        }, { projection: { caseId: 1 } }).toArray();
        const distinct = uniq(logs.map((l: any) => l.caseId).filter(Boolean));
        if (distinct.length === 1) { caseId = distinct[0]; via = "root_dispatch_log"; }
      }
    }
  }

  if (!opts.dryRun) {
    await db.collection(THREAD_COLLECTION).updateOne(
      { _id: threadId as any },
      {
        $set: {
          caseId,
          via,
          rootSubject: decodeEntities(String(root.subject || "")),
          rootFrom,
          resolvedAt: new Date().toISOString(),
        },
      },
      { upsert: true }
    );
  }
  return { caseId, via };
}

function senderRoleFor(caseDoc: any, fromEmail: string): "accused" | "client" | "third_party" {
  const f = (fromEmail || "").toLowerCase();
  const accused = [caseDoc.email, caseDoc.email2].filter(Boolean).map((e: string) => e.toLowerCase().trim());
  if (accused.includes(f)) return "accused";
  const clientEmail = (caseDoc.clientEmail || "").toLowerCase().trim();
  if (clientEmail && f === clientEmail) return "client";
  const cDomain = emailDomain(clientEmail);
  if (cDomain && !GENERIC_EMAIL_DOMAINS.has(cDomain) && emailDomain(f) === cDomain) return "client";
  if (f.includes("amalegalsolutions") || f.includes("actoloan")) return "client";
  return "third_party";
}

function invoiceNumbersOf(caseDoc: any): string[] {
  const list: string[] = [];
  if (caseDoc.invoiceNo) list.push(String(caseDoc.invoiceNo));
  if (caseDoc.loanId) list.push(String(caseDoc.loanId));
  for (const inv of caseDoc.invoices || []) if (inv?.invoiceNo) list.push(String(inv.invoiceNo));
  return uniq(list.map((s) => s.trim()).filter((s) => s.length >= 5));
}

/**
 * Determines the case for a human reply (or a bounce) using ONLY deterministic signals.
 */
async function resolveDeterministic(
  db: Db,
  env: InboundEnvelope,
  opts: { dryRun?: boolean; bounce?: boolean }
): Promise<{ caseDoc: any | null; method: RoutingMethod | null; ambiguous: any[]; reason: string }> {
  // (a) Zoho thread → outbound notice
  if (env.threadId && env.threadId !== env.zohoMessageId) {
    const t = await resolveThreadCase(db, env.threadId, opts);
    if (t.caseId) {
      const [c] = await casesByIds(db, [t.caseId]);
      if (c) return { caseDoc: c, method: "thread", ambiguous: [], reason: `Thread root resolved via ${t.via}` };
    }
  }

  // (b) notice+<CASE-ID>@ plus addressing
  const plusTags = uniq(
    [...env.to, ...env.cc]
      .map((e) => {
        const m = e.match(new RegExp(`^${escapeRegex(OWN_LOCAL_PART)}\\+([^@]+)@${escapeRegex(OWN_DOMAIN)}$`, "i"));
        return m ? m[1].toUpperCase() : null;
      })
      .filter(Boolean) as string[]
  );
  if (plusTags.length > 0) {
    const tagRefs = uniq(plusTags.flatMap((t) => refsIn(t)));
    const found = await casesByIds(db, tagRefs);
    if (found.length === 1) return { caseDoc: found[0], method: "plus_address", ambiguous: [], reason: "Plus-addressed recipient" };
  }

  // (c) Case reference in subject, then body
  const subjectRefs = refsIn(env.subject);
  if (subjectRefs.length > 0) {
    const found = await casesByIds(db, subjectRefs);
    if (found.length === 1) return { caseDoc: found[0], method: "subject_ref", ambiguous: [], reason: "Single case reference in subject" };
    if (found.length > 1) return { caseDoc: null, method: null, ambiguous: found, reason: "Multiple case references in subject" };
  } else {
    const bodyRefs = refsIn(`${env.bodyText}`);
    if (bodyRefs.length > 0) {
      const found = await casesByIds(db, bodyRefs);
      if (found.length === 1) return { caseDoc: found[0], method: "body_ref", ambiguous: [], reason: "Single case reference in body" };
      if (found.length > 1) return { caseDoc: null, method: null, ambiguous: found, reason: "Multiple case references in body" };
    }
  }

  // (d) Loan ID / Invoice number belonging to exactly one case
  const tokens = uniq(((`${env.subject} ${env.bodyText}`).match(LOAN_TOKEN_RE) || []).map((t) => t.toUpperCase()));
  if (tokens.length > 0) {
    const tokenRegexes = tokens.map((t) => new RegExp(`^${escapeRegex(t)}$`, "i"));
    const found = await db.collection("cases").find({
      $or: [
        { invoiceNo: { $in: tokenRegexes } },
        { loanId: { $in: tokenRegexes } },
        { "invoices.invoiceNo": { $in: tokenRegexes } },
      ],
    }, { projection: CASE_PROJECTION }).toArray();
    if (found.length === 1) return { caseDoc: found[0], method: "loan_id", ambiguous: [], reason: "Loan/Invoice ID matches one case" };
    if (found.length > 1) return { caseDoc: null, method: null, ambiguous: found, reason: "Loan/Invoice ID matches multiple cases" };
  }

  // (e) Participant addresses (From first, then To/Cc). For bounces: the failed recipient in the body.
  const participantPool = opts.bounce
    ? extractEmails(env.bodyText).filter((e) => !isOwnAddress(e) && !/daemon|postmaster/i.test(e))
    : uniq([env.fromEmail, ...env.to, ...env.cc]).filter((e) => e && !isOwnAddress(e));

  const findAccused = async (emails: string[]) => {
    if (emails.length === 0) return [];
    const rx = exactEmailRegexes(emails);
    return db.collection("cases").find({ $or: [{ email: { $in: rx } }, { email2: { $in: rx } }] }, { projection: CASE_PROJECTION }).toArray();
  };

  let accusedCases: any[] = [];
  if (!opts.bounce && env.fromEmail) accusedCases = await findAccused([env.fromEmail]);
  if (accusedCases.length === 0) accusedCases = await findAccused(participantPool);

  if (accusedCases.length === 1) {
    return { caseDoc: accusedCases[0], method: "participant_email", ambiguous: [], reason: "Participant address belongs to one case" };
  }
  if (accusedCases.length > 1) {
    const normText = normalizeForMatch(`${env.subject} ${env.bodyText}`);
    const byInvoice = accusedCases.filter((c) => invoiceNumbersOf(c).some((inv) => containsPhrase(normText, normalizeForMatch(inv))));
    if (byInvoice.length === 1) {
      return { caseDoc: byInvoice[0], method: "participant_email+invoice", ambiguous: [], reason: "Shared address disambiguated by invoice number" };
    }
    return { caseDoc: null, method: null, ambiguous: accusedCases, reason: `Participant address is shared by ${accusedCases.length} cases` };
  }

  // Sender is the client (complainant) themselves
  if (!opts.bounce && env.fromEmail) {
    const clientCases = await db.collection("cases").find(
      { clientEmail: { $in: exactEmailRegexes([env.fromEmail]) } },
      { projection: CASE_PROJECTION }
    ).toArray();
    if (clientCases.length === 1) return { caseDoc: clientCases[0], method: "client_email", ambiguous: [], reason: "Sender is the client of exactly one case" };
    if (clientCases.length > 1) return { caseDoc: null, method: null, ambiguous: clientCases, reason: `Sender is the client of ${clientCases.length} cases` };
  }

  return { caseDoc: null, method: null, ambiguous: [], reason: "No deterministic signal" };
}

// ─────────────────────────────────────────────────────────────────────────────
// Suggestions for triage (NEVER used for auto-delivery)
// ─────────────────────────────────────────────────────────────────────────────

const NAME_STOPWORDS = new Set([
  "dr", "mr", "mrs", "ms", "pvt", "private", "ltd", "limited", "llp", "india", "the", "&", "and", "co", "company",
  "proprietor", "prop", "services", "solutions", "enterprises", "traders", "of",
]);

function amountVariants(amount: any): string[] {
  const n = Number(amount);
  if (!n || isNaN(n)) return [];
  const rounded = Math.round(n);
  const v = [
    rounded.toLocaleString("en-IN"),
    rounded.toLocaleString("en-US"),
    String(rounded),
  ];
  return uniq(v.filter((s) => s.replace(/\D/g, "").length >= 4));
}

export async function suggestCandidates(db: Db, env: InboundEnvelope, restrictTo?: any[]): Promise<CandidateCase[]> {
  const pool = restrictTo && restrictTo.length > 0
    ? restrictTo
    : await db.collection("cases").find({}, { projection: CASE_PROJECTION }).toArray();

  const rawText = `${env.subject}\n${env.bodyText}`;
  const normText = normalizeForMatch(rawText);
  const digitsText = rawText.replace(/\D/g, " ");
  const participants = new Set(uniq([env.fromEmail, ...env.to, ...env.cc]).filter(Boolean));
  const bodyEmails = new Set(extractEmails(env.bodyText));

  const scored: (CandidateCase & { _normName: string; _nameHit: boolean })[] = [];

  for (const c of pool) {
    let score = 0;
    const reasons: string[] = [];
    const normName = normalizeForMatch(c.defaulterName || "");
    let nameHit = false;

    if (containsPhrase(normText, normName)) {
      score += 40; nameHit = true;
      reasons.push(`Accused name "${c.defaulterName}" mentioned`);
    } else {
      const subNames = String(c.defaulterName || "")
        .split(/proprietor(?:ship)?|\bprop\.?\b|\bc\/o\b|,|\(|\)|\bthrough\b/i)
        .map((s) => normalizeForMatch(s))
        .filter((s) => s.split(" ").length >= 2 || s.length >= 8);
      const hit = subNames.find((s) => containsPhrase(normText, s));
      if (hit) {
        score += 30; nameHit = true;
        reasons.push(`Part of accused name "${hit}" mentioned`);
      } else {
        const tokens = normName.split(" ").filter((t) => t.length >= 3 && !NAME_STOPWORDS.has(t));
        if (tokens.length >= 2 && tokens.every((t) => containsPhrase(normText, t) || ` ${normText} `.includes(` ${t} `))) {
          score += 25; nameHit = true;
          reasons.push(`All words of accused name present`);
        }
      }
    }

    const clientShort = normalizeForMatch(String(c.clientName || "").split(",")[0]);
    if (clientShort && containsPhrase(normText, clientShort)) {
      score += 15;
      reasons.push(`Client name "${String(c.clientName).split(",")[0].trim()}" mentioned`);
    }

    const amt = amountVariants(c.stuckAmount).find((v) => new RegExp(`(^|[^\\d,])${escapeRegex(v)}([^\\d,]|$)`).test(rawText));
    if (amt) {
      score += 25;
      reasons.push(`Claim amount ${amt} mentioned`);
    }

    for (const ph of [c.phone, c.phone2].filter(Boolean)) {
      const d = String(ph).replace(/\D/g, "").slice(-10);
      if (d.length === 10 && digitsText.includes(d)) {
        score += 30;
        reasons.push(`Accused phone ${d} mentioned`);
        break;
      }
    }

    const accusedEmails = [c.email, c.email2].filter(Boolean).map((e: string) => e.toLowerCase().trim());
    if (accusedEmails.some((e) => participants.has(e))) {
      score += 35;
      reasons.push("Accused email is a sender/recipient");
    } else if (accusedEmails.some((e) => bodyEmails.has(e))) {
      score += 30;
      reasons.push("Accused email mentioned in body");
    }

    const inv = invoiceNumbersOf(c).find((i) => containsPhrase(normText, normalizeForMatch(i)));
    if (inv) {
      score += 40;
      reasons.push(`Invoice/Loan ID "${inv}" mentioned`);
    }

    if (c.clientEmail && env.fromEmail && c.clientEmail.toLowerCase().trim() === env.fromEmail) {
      score += 10;
      reasons.push("Sender is this case's client");
    }

    if (score > 0) scored.push({ caseId: c.caseId, score, reasons, _normName: normName, _nameHit: nameHit });
  }

  // Tie-break: when "Dr Sachin Pruthi" and "Dr Sachin Pruthi & Sons" both match,
  // the shorter name is a substring of the longer one — prefer the longer (more specific) one.
  for (const a of scored) {
    if (!a._nameHit) continue;
    const longer = scored.find((b) => b !== a && b._nameHit && b._normName.length > a._normName.length && ` ${b._normName} `.includes(` ${a._normName} `));
    if (longer) {
      a.score -= 15;
      a.reasons.push(`Longer matching name "${longer.caseId}" is more specific`);
    }
  }

  return scored
    .filter((s) => s.score >= 30)
    .sort((x, y) => y.score - x.score)
    .slice(0, 5)
    .map(({ caseId, score, reasons }) => ({ caseId, score, reasons }));
}

// ─────────────────────────────────────────────────────────────────────────────
// Notification builders
// ─────────────────────────────────────────────────────────────────────────────

function clientShortName(caseDoc: any): string {
  let n = caseDoc.clientName || "Client";
  if (n.includes(",")) n = n.split(",")[0].trim();
  return n;
}

function caseOwnerId(caseDoc: any): string | null {
  return caseDoc?.userId ? caseDoc.userId.toString() : null;
}

export function buildReplyNotification(
  caseDoc: any,
  env: Pick<InboundEnvelope, "zohoMessageId" | "fromEmail" | "fromName" | "subject" | "cleanBody" | "bodyText" | "receivedAt">,
  senderRole: "accused" | "client" | "third_party",
  extra: { inboundId: string; method: RoutingMethod }
) {
  const clientName = clientShortName(caseDoc);
  const senderLabel = env.fromName || env.fromEmail;
  const title =
    senderRole === "client"
      ? `Email reply from ${clientName} (Client)`
      : senderRole === "accused"
        ? `Email reply from ${caseDoc.defaulterName}`
        : `Email reply from ${senderLabel} regarding ${caseDoc.defaulterName}`;
  const loanId = caseDoc.invoices?.[0]?.invoiceNo || caseDoc.invoiceNo || caseDoc.loanId || "";

  return {
    userId: caseOwnerId(caseDoc) as string,
    caseId: caseDoc.caseId,
    caseName: caseDoc.defaulterName,
    type: "email_reply",
    title,
    description: env.cleanBody || env.bodyText.slice(0, 4000) || "Empty message body",
    status: "info",
    date: env.receivedAt,
    isRead: false,
    metadata: {
      messageId: env.zohoMessageId,
      senderEmail: env.fromEmail,
      senderRole,
      senderDisplayName: senderRole === "client" ? clientName : senderRole === "accused" ? caseDoc.defaulterName : senderLabel,
      subject: env.subject,
      loanId,
      accusedName: caseDoc.defaulterName,
      accusedPhone: caseDoc.phone || "",
      accusedPhone2: caseDoc.phone2 || "",
      accusedEmail: caseDoc.email || "",
      accusedEmail2: caseDoc.email2 || "",
      clientName,
      clientEmail: caseDoc.clientEmail || "",
      inboundEmailId: extra.inboundId,
      routingMethod: extra.method,
    },
  };
}

function buildBounceNotification(caseDoc: any, env: InboundEnvelope, inboundId: string, method: RoutingMethod) {
  const b = describeBounce(caseDoc, env.bodyText);
  return {
    userId: caseOwnerId(caseDoc) as string,
    caseId: caseDoc.caseId,
    caseName: caseDoc.defaulterName,
    type: "email_status",
    title: b.title,
    description: b.description,
    status: "failed",
    date: env.receivedAt,
    isRead: false,
    metadata: {
      messageId: env.zohoMessageId,
      senderEmail: env.fromEmail,
      bounceRecipient: b.recipient,
      bounceRecipientRole: b.recipientRole,
      subject: env.subject,
      inboundEmailId: inboundId,
      routingMethod: method,
    },
  };
}

/**
 * Bounce reports list the failed address first ("<addr> , ERROR CODE ...").
 * The failed address may be the accused, the client's own CC copy, or a police station.
 */
export function describeBounce(caseDoc: any, bodyText: string): {
  recipient: string;
  recipientRole: "accused" | "client" | "police_station" | "other" | "unknown";
  title: string;
  description: string;
} {
  const recipient =
    extractEmails(bodyText || "").find((e) => !isOwnAddress(e) && !/daemon|postmaster/i.test(e)) || "";
  const r = recipient.toLowerCase();
  const accused = [caseDoc.email, caseDoc.email2].filter(Boolean).map((e: string) => e.toLowerCase().trim());
  const clientEmails = [caseDoc.clientEmail, ...String(caseDoc.ccEmails || "").split(",")]
    .filter(Boolean).map((e: string) => e.toLowerCase().trim());
  const police = String(caseDoc.policeStationEmail || "").toLowerCase().split(/[,;\s]+/).filter(Boolean);
  const name = caseDoc.defaulterName || "the accused";

  if (!r) {
    return {
      recipient, recipientRole: "unknown",
      title: "An email for this case could not be delivered",
      description: `An email sent for the case against ${name} was returned as undeliverable by the recipient's mail server.`,
    };
  }
  if (accused.includes(r)) {
    return {
      recipient, recipientRole: "accused",
      title: "Notice email could not be delivered",
      description: `The notice email to ${name} (${recipient}) was returned as undeliverable by the recipient's mail server.`,
    };
  }
  if (clientEmails.includes(r)) {
    return {
      recipient, recipientRole: "client",
      title: "Your copy of the notice could not be delivered",
      description: `The copy of the notice for ${name} sent to ${recipient} was returned as undeliverable (the mailbox may be full or unavailable). The notice to the accused is unaffected.`,
    };
  }
  if (police.includes(r) || /\.(gov|nic)\.in$|police|pol@|\bsho\b/i.test(r)) {
    return {
      recipient, recipientRole: "police_station",
      title: "Police complaint email could not be delivered",
      description: `The complaint email for the case against ${name} could not be delivered to ${recipient}.`,
    };
  }
  return {
    recipient, recipientRole: "other",
    title: "An email for this case could not be delivered",
    description: `An email for the case against ${name} could not be delivered to ${recipient}.`,
  };
}

function buildAutoReplyNotification(caseDoc: any, env: InboundEnvelope, inboundId: string, method: RoutingMethod) {
  return {
    userId: caseOwnerId(caseDoc) as string,
    caseId: caseDoc.caseId,
    caseName: caseDoc.defaulterName,
    type: "email_status",
    title: `Automated acknowledgement from ${env.fromName || caseDoc.defaulterName}`,
    description: env.cleanBody || env.bodyText.slice(0, 2000) || "Automated response",
    status: "info",
    date: env.receivedAt,
    isRead: false,
    metadata: {
      messageId: env.zohoMessageId,
      senderEmail: env.fromEmail,
      subject: env.subject,
      isAutoReply: true,
      inboundEmailId: inboundId,
      routingMethod: method,
    },
  };
}

/**
 * Creates (or moves) the notification for an inbound email once its case is known.
 * Used by both auto-linking and the admin "assign" action.
 */
export async function createNotificationForInbound(
  db: Db,
  inbound: any,
  caseDoc: any,
  method: RoutingMethod
): Promise<string | null> {
  if (!caseOwnerId(caseDoc)) return null;
  const env: InboundEnvelope = {
    zohoMessageId: inbound.zohoMessageId,
    folderId: inbound.folderId || null,
    threadId: inbound.threadId || null,
    from: inbound.from || inbound.fromEmail,
    fromEmail: inbound.fromEmail,
    fromName: inbound.fromName || "",
    to: inbound.to || [],
    cc: inbound.cc || [],
    subject: inbound.subject || "",
    rawBody: "",
    bodyText: inbound.bodyText || "",
    cleanBody: inbound.cleanBody || "",
    inReplyTo: inbound.inReplyTo || null,
    references: inbound.references || [],
    headers: {},
    receivedAt: inbound.receivedAt,
    enriched: !!inbound.enriched,
  };
  const inboundId = inbound._id.toString();

  let doc: any;
  if (inbound.classification === "bounce") doc = buildBounceNotification(caseDoc, env, inboundId, method);
  else if (inbound.classification === "auto_reply") doc = buildAutoReplyNotification(caseDoc, env, inboundId, method);
  else doc = buildReplyNotification(caseDoc, env, senderRoleFor(caseDoc, env.fromEmail), { inboundId, method });

  if (inbound.notificationId) {
    // Re-assignment: move the existing notification to the new case/owner.
    const { isRead, ...rest } = doc;
    await db.collection("notifications").updateOne({ _id: new ObjectId(inbound.notificationId) }, { $set: rest });
    return inbound.notificationId;
  }
  const res = await db.collection("notifications").insertOne(doc);

  if (inbound.classification === "bounce") {
    const log = await db.collection("dispatch_logs").findOne(
      { caseId: caseDoc.caseId, dispatchedAt: { $lte: env.receivedAt } },
      { sort: { dispatchedAt: -1 } }
    );
    if (log) {
      await db.collection("dispatch_logs").updateOne(
        { _id: log._id },
        { $set: { "channels.email.bounced": true, "channels.email.bouncedAt": env.receivedAt, "channels.email.bounceRecipient": doc.metadata.bounceRecipient || "" } }
      );
    }
  }
  return res.insertedId.toString();
}

// ─────────────────────────────────────────────────────────────────────────────
// Main entry point
// ─────────────────────────────────────────────────────────────────────────────

export async function ensureInboundIndexes(db: Db): Promise<void> {
  await db.collection(INBOUND_COLLECTION).createIndex({ zohoMessageId: 1 }, { unique: true, name: "uniq_zohoMessageId" });
  await db.collection(INBOUND_COLLECTION).createIndex({ "routing.status": 1, receivedAt: -1 }, { name: "routing_status_receivedAt" });
  await db.collection(INBOUND_COLLECTION).createIndex({ "routing.caseId": 1 }, { name: "routing_caseId" });
}

export async function decideRouting(
  db: Db,
  env: InboundEnvelope,
  opts: { dryRun?: boolean } = {}
): Promise<{ decision: RoutingDecision; caseDoc: any | null; batch: any | null }> {
  const base = classifyEnvelope(env);

  if (base === "internal" || base === "delivery_delay") {
    return {
      decision: { classification: base, status: "recorded", method: null, caseId: null, senderRole: null, candidates: [], reason: base === "internal" ? "Sent from our own mailbox" : "Delivery delay notice (not a failure)" },
      caseDoc: null, batch: null,
    };
  }

  if (base === "human") {
    const disp = await detectDispatcher(db, env);
    if (disp.isDispatcher) {
      return {
        decision: { classification: "dispatcher", status: "auto_linked", method: "dispatcher", caseId: null, senderRole: "dispatcher", candidates: [], reason: "Postal dispatcher communication" },
        caseDoc: null, batch: disp.batch,
      };
    }
  }

  const det = await resolveDeterministic(db, env, { dryRun: opts.dryRun, bounce: base === "bounce" });

  if (det.caseDoc && caseOwnerId(det.caseDoc)) {
    return {
      decision: {
        classification: base,
        status: "auto_linked",
        method: det.method,
        caseId: det.caseDoc.caseId,
        senderRole: base === "human" ? senderRoleFor(det.caseDoc, env.fromEmail) : null,
        candidates: [],
        reason: det.reason,
      },
      caseDoc: det.caseDoc, batch: null,
    };
  }

  // Bounces / auto-replies that cannot be tied to a case are kept for audit only.
  if (base !== "human") {
    return {
      decision: { classification: base, status: "recorded", method: null, caseId: null, senderRole: null, candidates: [], reason: `Unlinked ${base}: ${det.reason}` },
      caseDoc: null, batch: null,
    };
  }

  const candidates = await suggestCandidates(db, env, det.ambiguous.length > 0 ? det.ambiguous : undefined);
  // For a shared address, every sharing case is a legitimate candidate even without textual hints.
  for (const c of det.ambiguous) {
    if (!candidates.find((x) => x.caseId === c.caseId)) {
      candidates.push({ caseId: c.caseId, score: 30, reasons: [det.reason] });
    }
  }
  const reason = det.caseDoc && !caseOwnerId(det.caseDoc) ? `Matched ${det.caseDoc.caseId} but the case has no owner` : det.reason;
  return {
    decision: {
      classification: "human",
      status: candidates.length > 0 ? "needs_review" : "unmatched",
      method: null,
      caseId: null,
      senderRole: null,
      candidates: candidates.slice(0, 8),
      reason,
    },
    caseDoc: null, batch: null,
  };
}

/**
 * Persists and routes one inbound email. Idempotent per Zoho messageId.
 */
export async function processInboundEmail(
  db: Db,
  payload: any,
  opts: { source: "webhook" | "backfill"; dryRun?: boolean; skipEnrichment?: boolean } = { source: "webhook" }
): Promise<ProcessResult> {
  const env = await buildEnvelope(payload, { skipEnrichment: opts.skipEnrichment });

  const [existingInbound, existingNotif] = await Promise.all([
    db.collection(INBOUND_COLLECTION).findOne({ zohoMessageId: env.zohoMessageId }, { projection: { _id: 1 } }),
    db.collection("notifications").findOne({ "metadata.messageId": env.zohoMessageId }, { projection: { _id: 1 } }),
  ]);
  if (existingInbound || existingNotif) {
    return { duplicate: true, inboundId: existingInbound?._id?.toString() || null, notificationId: existingNotif?._id?.toString() || null, envelope: env, decision: null };
  }

  const { decision, caseDoc, batch } = await decideRouting(db, env, { dryRun: opts.dryRun });
  if (opts.dryRun) {
    return { duplicate: false, inboundId: null, notificationId: null, envelope: env, decision };
  }

  const nowIso = new Date().toISOString();
  const inboundDoc: any = {
    zohoMessageId: env.zohoMessageId,
    folderId: env.folderId,
    threadId: env.threadId,
    from: env.from,
    fromEmail: env.fromEmail,
    fromName: env.fromName,
    to: env.to,
    cc: env.cc,
    subject: env.subject,
    bodyText: env.bodyText.slice(0, 50000),
    cleanBody: env.cleanBody.slice(0, 20000),
    inReplyTo: env.inReplyTo,
    references: env.references,
    receivedAt: env.receivedAt,
    enriched: env.enriched,
    classification: decision.classification,
    routing: {
      status: decision.status,
      method: decision.method,
      caseId: decision.caseId,
      senderRole: decision.senderRole,
      candidates: decision.candidates,
      reason: decision.reason,
      decidedAt: nowIso,
      decidedBy: decision.status === "auto_linked" ? "system" : null,
    },
    notificationId: null,
    source: opts.source,
    createdAt: nowIso,
  };

  let inboundId: string;
  try {
    const ins = await db.collection(INBOUND_COLLECTION).insertOne(inboundDoc);
    inboundId = ins.insertedId.toString();
    inboundDoc._id = ins.insertedId;
  } catch (err: any) {
    if (err?.code === 11000) {
      return { duplicate: true, inboundId: null, notificationId: null, envelope: env, decision };
    }
    throw err;
  }

  let notificationId: string | null = null;

  if (decision.classification === "dispatcher") {
    let displayName = "Dispatcher";
    if (env.fromEmail.includes("jatinder")) displayName = "Dispatcher (Jatinder)";
    else if (env.fromName) displayName = `Dispatcher (${env.fromName})`;
    const adminUserId = batch?.createdById?.toString() || DEFAULT_ADMIN_USER_ID;
    const batchId = batch?.batchId || "Notice Dispatch Batch";
    const res = await db.collection("notifications").insertOne({
      userId: adminUserId,
      caseId: "",
      caseName: "Postal Notice Dispatcher",
      type: "email_reply",
      title: `Email reply from ${displayName}`,
      description: env.cleanBody || "Empty message body",
      status: "info",
      date: env.receivedAt,
      isRead: false,
      metadata: {
        messageId: env.zohoMessageId,
        senderEmail: env.fromEmail,
        senderRole: "dispatcher",
        senderDisplayName: displayName,
        batchId,
        subject: env.subject,
        inboundEmailId: inboundId,
        routingMethod: "dispatcher",
      },
    });
    notificationId = res.insertedId.toString();
    if (batch) {
      await db.collection("dispatch_batches").updateOne(
        { _id: batch._id },
        { $push: { replies: { senderEmail: env.fromEmail, subject: env.subject, message: env.cleanBody, receivedAt: env.receivedAt, messageId: env.zohoMessageId } as any } }
      );
    }
  } else if (decision.status === "auto_linked" && caseDoc) {
    notificationId = await createNotificationForInbound(db, inboundDoc, caseDoc, decision.method as RoutingMethod);
  }

  if (notificationId) {
    await db.collection(INBOUND_COLLECTION).updateOne({ _id: inboundDoc._id }, { $set: { notificationId } });
  }

  return { duplicate: false, inboundId, notificationId, envelope: env, decision };
}

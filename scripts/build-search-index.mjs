// Builds src/data/search-index.json: title, description and keywords for every
// indexable page listed in src/app/sitemap.ts, read from each route's metadata.
// Blog posts are not included here; /api/search-index merges them in from MongoDB.
//
// Runs automatically before `npm run build` (see "prebuild" in package.json).
// Run by hand after adding pages: node scripts/build-search-index.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "src/app");
const SITEMAP = path.join(APP_DIR, "sitemap.ts");
const OUT = path.join(ROOT, "src/data/search-index.json");

const SITE_SUFFIX = /\s*[|–-]\s*(LegalRecovery(\.in)?|Legal Recovery( India)?)\s*$/i;

// Matches a JS string literal starting at the cursor: "..." '...' or `...` (no ${} handling).
const STRING_RE = /^\s*(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`)/;

function unescape(s) {
  return s.replace(/\\(["'`\\])/g, "$1").replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
}

function readString(src, from) {
  const m = STRING_RE.exec(src.slice(from));
  if (!m) return null;
  const raw = m[1] ?? m[2] ?? m[3];
  if (m[3] !== undefined && raw.includes("${")) return null;
  return unescape(raw);
}

// Resolve `const NAME = "..."` (or a template literal without interpolation) in the same file.
function resolveConst(src, name) {
  const re = new RegExp(`(?:const|let|var)\\s+${name}\\s*(?::[^=]+)?=`);
  const m = re.exec(src);
  if (!m) return null;
  return readString(src, m.index + m[0].length);
}

// Value of `key:` (or shorthand `key,`) inside the metadata object.
function readField(block, src, key) {
  const re = new RegExp(`(?:^|[\\s{,])${key}\\s*(:|,|\\n|})`, "m");
  const m = re.exec(block);
  if (!m) return null;
  if (m[1] !== ":") return resolveConst(src, key); // shorthand property
  const after = m.index + m[0].length;
  const literal = readString(block, after);
  if (literal) return literal;
  const rest = block.slice(after).trimStart();
  const absolute = /^\{\s*absolute\s*:/.exec(rest);
  if (absolute) return readString(rest, absolute[0].length);
  const ident = /^([A-Za-z_$][\w$]*)\s*[,\n}]/.exec(rest);
  if (ident) return resolveConst(src, ident[1]);
  return null;
}

function readKeywords(block) {
  const m = /keywords\s*:\s*\[([\s\S]*?)\]/.exec(block);
  if (!m) return [];
  const out = [];
  const re = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g;
  let k;
  while ((k = re.exec(m[1])) && out.length < 12) out.push(unescape(k[1] ?? k[2]));
  return out;
}

function metadataFrom(file) {
  if (!fs.existsSync(file)) return null;
  const src = fs.readFileSync(file, "utf8");
  const start = src.search(/export\s+const\s+metadata\b/);
  if (start === -1) return null;
  // The top-level fields come before openGraph/twitter, so the first match is the page's own.
  const block = src.slice(start, start + 6000);
  const title = readField(block, src, "title");
  const description = readField(block, src, "description");
  if (!title && !description) return null;
  return { title, description, keywords: readKeywords(block) };
}

function humanize(route) {
  const slug = route.split("/").filter(Boolean).pop() || "Home";
  const s = slug.replace(/-/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function category(route) {
  const top = route.split("/")[1] || "";
  const map = {
    law: "Law explainer",
    templates: "Template",
    tools: "Tool",
    recovery: "Recovery claim",
    "send-a-legal-notice": "Legal notice",
    industries: "Industry hub",
    services: "Service",
    reports: "Report",
    hi: "Hindi guide",
  };
  return map[top] || "Guide";
}

const sitemapSrc = fs.readFileSync(SITEMAP, "utf8");
const routes = [...new Set([...sitemapSrc.matchAll(/path:\s*["'`]([^"'`]+)["'`]/g)].map((m) => {
  const p = m[1];
  return p.startsWith("/") ? p : `/${p}`;
}))];

const entries = [];
const fallbacks = [];
for (const route of routes) {
  if (route === "/" || route === "") continue;
  const dir = path.join(APP_DIR, route);
  const meta = metadataFrom(path.join(dir, "page.tsx")) || metadataFrom(path.join(dir, "layout.tsx"));
  if (!meta?.title) fallbacks.push(route);
  entries.push({
    url: route,
    title: (meta?.title || humanize(route)).replace(SITE_SUFFIX, ""),
    description: meta?.description || "",
    keywords: meta?.keywords || [],
    type: category(route),
  });
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(entries) + "\n");
console.log(`search index: ${entries.length} pages -> ${path.relative(ROOT, OUT)}`);
if (fallbacks.length) {
  console.log(`  ${fallbacks.length} without a readable title (slug used instead):`);
  for (const r of fallbacks) console.log(`    ${r}`);
}

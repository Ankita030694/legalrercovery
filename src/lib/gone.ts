import { SITE_URL } from "@/lib/site";

const BODY = `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Page removed | Legal Recovery</title>
<style>
body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:#f8f9fb;color:#111827;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px}
main{max-width:520px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:32px}
h1{font-size:22px;margin:0 0 12px}
p{font-size:15px;line-height:1.6;color:#4b5563;margin:0 0 20px}
a{color:#dc2626;font-weight:600}
.btn{display:inline-block;background:#dc2626;color:#fff;text-decoration:none;padding:12px 20px;border-radius:10px;margin-bottom:16px}
</style>
</head>
<body>
<main>
<h1>This page has been removed</h1>
<p>We no longer keep a separate page for each city. Our service works online from anywhere in India, so you can start from the page below.</p>
<a class="btn" href="${SITE_URL}/send-legal-notice-online-india">Send a legal notice online</a>
<p><a href="${SITE_URL}/">Go to the Legal Recovery home page</a></p>
</main>
</body>
</html>`;

/**
 * 410 Gone: the page was removed on purpose and is not coming back.
 * Search engines drop a 410 URL and stop recrawling it sooner than a noindex page, which they
 * must keep fetching to re-read the tag.
 */
export function goneResponse(method: "GET" | "HEAD" = "GET"): Response {
  return new Response(method === "HEAD" ? null : BODY, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}

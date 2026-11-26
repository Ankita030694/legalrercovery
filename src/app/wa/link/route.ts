/**
 * The page the WhatsApp chatbot links to at the end of sign-up: /wa/link?n={{phone}}.
 *
 * Served as a bare HTML response rather than a Next.js page, so the site layout's analytics and
 * tracking scripts never load here and never see the phone number in the address. The script
 * removes the number from the address bar, then asks /api/wati/claim-link to send the payment
 * link to that WhatsApp number. A link preview fetching this URL runs no script and sends nothing.
 */

import { WHATSAPP_CHAT_URL } from "@/lib/whatsapp-chat";

export const dynamic = "force-dynamic";

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Your payment link | Legal Recovery</title>
<style>
  *{box-sizing:border-box}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    background:#F8FAFC;color:#111827;padding:24px}
  .card{max-width:420px;width:100%;background:#fff;border:1px solid #E5E7EB;border-radius:20px;
    padding:32px 28px;text-align:center;box-shadow:0 10px 30px rgba(17,24,39,.06)}
  .brand{font-weight:800;font-size:14px;letter-spacing:.02em;color:#DC2626;margin-bottom:20px}
  h1{font-size:22px;line-height:1.3;margin:0 0 10px}
  p{font-size:15px;line-height:1.55;color:#4B5563;margin:0 0 22px}
  .btn{display:inline-block;width:100%;padding:14px 18px;border-radius:14px;background:#16A34A;
    color:#fff;font-weight:700;font-size:15px;text-decoration:none}
  .spinner{width:34px;height:34px;margin:0 auto 18px;border:3px solid #E5E7EB;border-top-color:#DC2626;
    border-radius:50%;animation:spin .8s linear infinite}
  @keyframes spin{to{transform:rotate(360deg)}}
  .hidden{display:none}
  .note{font-size:12px;color:#9CA3AF;margin:18px 0 0}
</style>
</head>
<body>
<main class="card">
  <div class="brand">LEGAL RECOVERY</div>
  <div id="working">
    <div class="spinner" aria-hidden="true"></div>
    <h1>Preparing your payment link…</h1>
    <p>This takes a few seconds.</p>
  </div>
  <div id="done" class="hidden">
    <h1>Check your WhatsApp ✅</h1>
    <p>If you have just finished the steps in our WhatsApp chat, your secure payment link is waiting there now.</p>
    <a class="btn" href="${WHATSAPP_CHAT_URL}">Open WhatsApp</a>
    <p class="note">For your security, payment links are only sent to the WhatsApp number you chatted from.</p>
  </div>
  <div id="failed" class="hidden">
    <h1>That didn't work</h1>
    <p id="failed-text">Something went wrong. Please go back to WhatsApp and tap the link again in a minute.</p>
    <a class="btn" href="${WHATSAPP_CHAT_URL}">Back to WhatsApp</a>
  </div>
</main>
<script>
(function () {
  var params = new URLSearchParams(window.location.search);
  var n = params.get("n") || "";
  // Keep the number out of the address bar and browser history
  try { history.replaceState(null, "", window.location.pathname); } catch (e) {}

  function show(id, text) {
    ["working", "done", "failed"].forEach(function (s) {
      document.getElementById(s).className = s === id ? "" : "hidden";
    });
    if (text) document.getElementById("failed-text").textContent = text;
  }

  if (!n) { show("done"); return; }

  fetch("/api/wati/claim-link", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ n: n }),
    credentials: "omit",
    cache: "no-store"
  }).then(function (res) {
    if (res.ok) {
      show("done");
      // Take them straight back to the chat, where the payment link is waiting
      setTimeout(function () { window.location.href = "${WHATSAPP_CHAT_URL}"; }, 1500);
      return;
    }
    return res.json().catch(function () { return {}; }).then(function (data) {
      show("failed", data && data.error ? data.error : null);
    });
  }).catch(function () { show("failed"); });
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "Referrer-Policy": "no-referrer",
    },
  });
}

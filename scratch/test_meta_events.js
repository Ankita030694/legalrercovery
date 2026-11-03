// Local E2E test for Meta Pixel AddToCart + Purchase events.
// - Captures every https://www.facebook.com/tr request and ABORTS it (no fake data reaches the real pixel).
// - Mocks /api/users/send-otp (no real OTP / DB writes).
// - Forges the payu_auth_token cookie locally to render /payment-success.
// Usage: node scratch/test_meta_events.js http://localhost:3123
const puppeteer = require("puppeteer-core");

const BASE = process.argv[2] || "http://localhost:3123";
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let failures = 0;
const cspViolations = [];
const check = (cond, msg) => {
  console.log(`${cond ? "PASS" : "FAIL"} - ${msg}`);
  if (!cond) failures++;
};

function parseEvent(url, postData) {
  const u = new URL(url);
  const p = Object.fromEntries(u.searchParams.entries());
  if (postData) {
    try { Object.assign(p, Object.fromEntries(new URLSearchParams(postData).entries())); } catch {}
  }
  return { ev: p.ev, eid: p.eid, id: p.id, cd: Object.fromEntries(Object.entries(p).filter(([k]) => k.startsWith("cd["))) };
}

async function newPage(browser, events, { mockOtp = false } = {}) {
  // Fresh isolated context per test (no shared cookies/localStorage)
  const ctx = browser.createBrowserContext ? await browser.createBrowserContext() : await browser.createIncognitoBrowserContext();
  const page = await ctx.newPage();
  // Meta's fbevents.js suppresses events in headless/webdriver browsers — present as a normal Chrome
  await page.setUserAgent((await browser.userAgent()).replace("HeadlessChrome", "Chrome"));
  await page.evaluateOnNewDocument(() => { Object.defineProperty(navigator, "webdriver", { get: () => false }); });
  page.on("console", (m) => { const t = m.text(); if (/Content Security Policy/.test(t) && /facebook/.test(t)) cspViolations.push(t.slice(0, 200)); });
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const url = req.url();
    if (url.startsWith("https://www.facebook.com/tr")) {
      events.push(parseEvent(url, req.postData()));
      return req.abort();
    }
    if (mockOtp && url.includes("/api/users/send-otp")) {
      console.log("   [mock] send-otp body:", req.postData());
      return req.respond({ status: 200, contentType: "application/json", body: JSON.stringify({ pendingId: "TESTPENDING123", message: "OTP sent successfully" }) });
    }
    // Block the real session sign-in during the purchase test so no auth call is attempted
    if (url.includes("/api/auth/callback/credentials")) {
      return req.respond({ status: 200, contentType: "application/json", body: JSON.stringify({ url: BASE + "/user/dashboard" }) });
    }
    req.continue();
  });
  return page;
}

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: "new", ignoreDefaultArgs: ["--enable-automation"], args: ["--no-sandbox", "--disable-blink-features=AutomationControlled"] });

  // ───────────── TEST 1: PageView + AddToCart on the lead form ─────────────
  {
    const events = [];
    const page = await newPage(browser, events, { mockOtp: true });
    await page.goto(BASE + "/contact", { waitUntil: "networkidle2", timeout: 120000 });
    await sleep(2000);
    check(events.some((e) => e.ev === "PageView" && e.id === "1145334704620534"), "PageView fires on page load with pixel id 1145334704620534");

    // Invalid click (empty form) must NOT fire AddToCart
    const submit = await page.$('form button[type="submit"]');
    await submit.click();
    await sleep(1500);
    check(!events.some((e) => e.ev === "AddToCart"), "AddToCart does NOT fire on an invalid/empty submit");

    // Fill form
    await page.type('input[placeholder="Enter your name"]', "Test User");
    await page.type('input[type="tel"]', "9876543210");
    await page.type('input[type="email"]', "test@example.com");
    const selects = await page.$$("form select");
    // selects: [state, recoveryType, oppositionCount]
    await selects[0].select("Delhi");
    await selects[1].select("salary-employment");
    await selects[2].select("2");
    await page.click('form button[type="submit"]');
    await sleep(3000);

    const atc = events.filter((e) => e.ev === "AddToCart");
    check(atc.length === 1, `AddToCart fired exactly once after OTP sent (got ${atc.length})`);
    if (atc[0]) {
      console.log("   AddToCart payload:", JSON.stringify(atc[0]));
      check(atc[0].cd["cd[value]"] === "1998", "AddToCart value = 1998 for 2 parties");
      check(atc[0].cd["cd[currency]"] === "INR", "AddToCart currency = INR");
      check(atc[0].cd["cd[num_items]"] === "2", "AddToCart num_items = 2");
      check(atc[0].cd["cd[content_category]"] === "salary-employment", "AddToCart content_category = salary-employment");
      check(!!atc[0].eid && atc[0].eid.startsWith("atc_TESTPENDING123"), "AddToCart has eventID");
    }
    await page.close();
  }

  // ───────────── TEST 2: Purchase on /payment-success + refresh dedupe ─────────────
  {
    const events = [];
    const page = await newPage(browser, events);
    const txnid = "TXNTEST" + Date.now();
    const cookieVal = Buffer.from(
      JSON.stringify({ status: "success", txnid, verified: true, resumeToken: null, purchase: { value: 1998, numItems: 2, recoveryType: "salary-employment" }, time: Date.now() })
    ).toString("base64");
    const host = new URL(BASE).hostname;
    await page.setCookie({ name: "payu_auth_token", value: cookieVal, domain: host, path: "/" });

    // Visit without token so the page stays (no auto-login redirect) — then with token to verify ordering
    await page.goto(BASE + "/payment-success", { waitUntil: "networkidle2", timeout: 120000 });
    await sleep(3500);
    const purchases = events.filter((e) => e.ev === "Purchase");
    check(purchases.length === 1, `Purchase fired exactly once (got ${purchases.length})`);
    if (purchases[0]) {
      console.log("   Purchase payload:", JSON.stringify(purchases[0]));
      check(purchases[0].cd["cd[value]"] === "1998", "Purchase value = 1998");
      check(purchases[0].cd["cd[currency]"] === "INR", "Purchase currency = INR");
      check(purchases[0].cd["cd[num_items]"] === "2", "Purchase num_items = 2");
      check(purchases[0].cd["cd[content_category]"] === "salary-employment", "Purchase content_category = salary-employment");
      check(purchases[0].eid === txnid, "Purchase eventID = txnid");
    }

    // Refresh — must NOT fire again
    await page.reload({ waitUntil: "networkidle2" });
    await sleep(3500);
    check(events.filter((e) => e.ev === "Purchase").length === 1, "Purchase does NOT fire again on page refresh");
    await page.close();
  }

  // ───────────── TEST 3: Purchase fires BEFORE auto-login redirect ─────────────
  {
    const events = [];
    const page = await newPage(browser, events);
    const txnid = "TXNTEST2" + Date.now();
    const cookieVal = Buffer.from(
      JSON.stringify({ status: "success", txnid, verified: true, resumeToken: null, purchase: { value: 999, numItems: 1, recoveryType: null }, time: Date.now() })
    ).toString("base64");
    const host = new URL(BASE).hostname;
    await page.setCookie({ name: "payu_auth_token", value: cookieVal, domain: host, path: "/" });
    const navs = [];
    page.on("framenavigated", (f) => { if (f === page.mainFrame()) navs.push(f.url()); });
    await page.goto(BASE + "/payment-success?token=faketoken123", { waitUntil: "domcontentloaded", timeout: 120000 });
    await sleep(6000);
    const p = events.filter((e) => e.ev === "Purchase");
    check(p.length === 1, `Purchase fired with auto-login token present (got ${p.length})`);
    if (p[0]) check(p[0].cd["cd[value]"] === "999" && !p[0].cd["cd[content_category]"], "Purchase value 999, no category when null");
    console.log("   Navigations:", navs.join(" -> "));
    await page.close();
  }

  // ───────────── TEST 4: No cookie => no Purchase (page redirects home) ─────────────
  {
    const events = [];
    const page = await newPage(browser, events);
    await page.goto(BASE + "/payment-success", { waitUntil: "networkidle2", timeout: 120000 });
    await sleep(2500);
    check(!events.some((e) => e.ev === "Purchase"), "No Purchase when visiting /payment-success without a verified PayU cookie");
    check(!page.url().includes("/payment-success"), `Redirected away from /payment-success (now ${page.url()})`);
    await page.close();
  }

  check(cspViolations.length === 0, `No Meta/Facebook CSP violations (got ${cspViolations.length})${cspViolations[0] ? " e.g. " + cspViolations[0] : ""}`);
  await browser.close();
  console.log(failures === 0 ? "\nALL TESTS PASSED" : `\n${failures} TEST(S) FAILED`);
  process.exit(failures === 0 ? 0 : 1);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

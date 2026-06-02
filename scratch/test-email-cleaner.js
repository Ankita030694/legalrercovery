function cleanEmailBody(body) {
  if (!body) return "";

  let cleaned = body;

  // 1. Truncate at common HTML thread reply markers (such as gmail_quote, blockquote, outlook style)
  const htmlSplitters = [
    /<div[^>]*class="[^"]*gmail_quote[^"]*"[^>]*>/i,
    /<div[^>]*class="[^"]*x_[^"]*gmail_quote[^"]*"[^>]*>/i,
    /<blockquote[^>]*>/i,
    /<div[^>]*id="[^"]*divRplyFwdMsg[^"]*"[^>]*>/i,
    /<!--\s*content\s*-->/i
  ];

  for (const regex of htmlSplitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) {
      cleaned = parts[0];
    }
  }

  // 2. Convert standard spacing and layout HTML tags to plain text equivalents
  cleaned = cleaned
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p\s*>/gi, "\n")
    .replace(/<\/div\s*>/gi, "\n")
    .replace(/<[^>]+>/g, ""); // Strip all remaining HTML tags

  // 3. Decode common HTML entities
  const entities = {
    "&nbsp;": " ",
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'"
  };
  cleaned = cleaned.replace(/&[a-z0-9#]+;/gi, (match) => entities[match.toLowerCase()] || match);

  // 4. Split on common plain-text threading reply headers
  const textSplitters = [
    /-----Original Message-----/i,
    /On\s+.*\s+wrote:/i,
    /From:\s+notice@/i,
    /Sent from my/i,
    /_____\s+From:/i
  ];

  for (const regex of textSplitters) {
    const parts = cleaned.split(regex);
    if (parts.length > 0) {
      cleaned = parts[0];
    }
  }

  // 5. Clean up duplicate newlines and leading/trailing whitespace
  return cleaned
    .split("\n")
    .map(line => line.trim())
    .filter((line, index, arr) => line !== "" || (index > 0 && arr[index - 1] !== ""))
    .join("\n")
    .trim();
}

// Test case using the exact user string
const input = `<div><div dir="ltr">Please Spare me</div><br><div class="x_2100332503gmail_quote x_2100332503gmail_quote_container"><div dir="ltr" class="x_2100332503gmail_attr">`;
const output = cleanEmailBody(input);

console.log("Input:", JSON.stringify(input));
console.log("Output:", JSON.stringify(output));

if (output === "Please Spare me") {
  console.log("✅ TEST PASSED: Successfully cleaned the Zoho/Gmail HTML reply tags!");
} else {
  console.log("❌ TEST FAILED!");
}

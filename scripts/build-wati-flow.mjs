/**
 * Builds docs/wati-chatbot-flow.json: the WhatsApp chatbot from docs/wati-chatbot-flow.md in the
 * format WATI's "Import JSON" button reads (Automations > Chatbots). The format was taken from
 * WATI's own export of a hand-built chatbot.
 *
 *   node scripts/build-wati-flow.mjs
 *
 * It also writes src/lib/wati-bot-steps.json: each step's node id and a text fingerprint, which
 * the site uses to work out from WATI's chat history where a person is in the bot.
 *
 * How WATI references values inside text:
 *   @variable       an answer saved earlier in this chatbot (e.g. @lr_name)
 *   {{attribute}}   a contact attribute ({{phone}} is the chat's own WhatsApp number)
 *
 * The bot uses no paid WATI steps. It ends with a link to /wa/link; the site then reads the
 * answers back from WATI and sends the real payment link to the chat (see /api/wati/claim-link).
 */
import { createHash } from "node:crypto";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const TENANT_ID = "10169824";
const CLAIM_URL = "https://legalrecovery.in/wa/link?n={{phone}}";
const OUTPUT = fileURLToPath(new URL("../docs/wati-chatbot-flow.json", import.meta.url));
const STEPS_OUTPUT = fileURLToPath(new URL("../src/lib/wati-bot-steps.json", import.meta.url));

const FALLBACK_MESSAGE =
  "I can only record your answer when you tap a button. Please tap one of the options in my last message 👆 To start again, type *menu*.";

/* ---------- helpers ---------- */

// Stable ids, so regenerating the file does not reshuffle every node
const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function stableId(seed, length) {
  const hash = createHash("sha256").update(seed).digest();
  return Array.from({ length }, (_, i) => ALPHABET[hash[i] % ALPHABET.length]).join("");
}

function html(text) {
  const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<p>${escaped.replace(/\n/g, "<br>\n")}</p>`;
}

const nodes = [];
const edges = [];
const position = (x, y) => ({ posX: String(x), posY: String(y) });

function edge(sourceNode, handle, target) {
  if (!target) return;
  edges.push({
    id: `reactflow__edge-${sourceNode}${handle || ""}-${target}`,
    sourceNodeId: handle ? `${sourceNode}__${handle}` : sourceNode,
    targetNodeId: target,
  });
}

const nodeId = (type, key) => `main_${type}-${stableId(`${type}:${key}`, 5)}`;

function message(key, text, { next = null, x, y }) {
  const id = nodeId("message", key);
  nodes.push({
    flowReplies: [{ flowReplyType: "Text", data: html(text), caption: "", mimeType: "" }],
    id,
    flowNodeType: "Message",
    flowNodePosition: position(x, y),
    isStartNode: false,
  });
  return { id, next };
}

function question(key, text, { variable, regex, retryText, x, y }) {
  const id = nodeId("question", key);
  nodes.push({
    flowReplies: [{ flowReplyType: "Text", data: html(text), caption: "", mimeType: "" }],
    userInputVariable: variable,
    answerValidation: {
      type: "Regex",
      minValue: "",
      maxValue: "",
      regex,
      fallback: retryText,
      failsCount: "3",
    },
    isMediaAccepted: false,
    expectedAnswers: null,
    id,
    flowNodeType: "Question",
    flowNodePosition: position(x, y),
    isStartNode: false,
  });
  return { id };
}

/** choices: [label, targetKey][] ; targets are resolved once every node exists. */
function buttons(key, text, choices, { variable = "", isStart = false, x, y }) {
  const id = nodeId("buttons", key);
  const node = {
    interactiveButtonsHeader: { type: "Text", text: "", media: null },
    interactiveButtonsBody: html(text),
    interactiveButtonsFooter: "",
    interactiveButtonsItems: choices.map(([label, target]) => ({
      id: stableId(`${key}:${label}`, 7),
      buttonText: label,
      nodeResultId: target,
    })),
    interactiveButtonsUserInputVariable: variable,
    interactiveButtonsDefaultNodeResultId: "",
    id,
    flowNodeType: "InteractiveButtons",
    flowNodePosition: position(x, y),
    isStartNode: isStart,
  };
  nodes.push(node);
  return { id, node };
}

/** rows: [title, description, targetKey][] */
function list(key, text, buttonText, rows, { x, y }) {
  const id = nodeId("list", key);
  const node = {
    interactiveListHeader: { type: "Text", text: "" },
    interactiveListBody: html(text),
    interactiveListFooter: "",
    interactiveListButtonText: buttonText,
    interactiveListSections: [
      {
        id: stableId(`${key}:section`, 7),
        title: "",
        rows: rows.map(([title, description, target]) => ({
          id: stableId(`${key}:${title}`, 7),
          title,
          description,
          nodeResultId: target,
        })),
      },
    ],
    interactiveListUserInputVariable: "",
    interactiveListDefaultNodeResultId: "",
    id,
    flowNodeType: "InteractiveList",
    flowNodePosition: position(x, y),
    isStartNode: false,
  };
  nodes.push(node);
  return { id, node };
}


/* ---------- the flow (text matches docs/wati-chatbot-flow.md) ---------- */

const COL = { start: 0, menu: 480, answers: 1000, signup: 1560, payment: 2100 };

const answers = [
  [
    "A1",
    `Here is how it works:

1️⃣ You pay a flat fee and enter your case details online: the amount, the key dates and who owes you. No document uploads.
2️⃣ Our team verifies the facts you submitted.
3️⃣ A fact-verified legal notice is sent to the other party by Email and WhatsApp, and by Speed Post if you choose it. Most notices go out within 24 hours.
4️⃣ If they do not respond, up to 2 more escalating notices follow in Week 2 and Week 3.
5️⃣ You track delivery and replies from your dashboard.`,
  ],
  [
    "A2",
    `Our fee is a flat ₹999 per opposite party.

✅ Up to 3 fact-verified legal notices by Email and WhatsApp
✅ Delivery tracking
✅ Multi-stage escalation

Optional: Speed Post for all 3 notices at ₹450 per party, charged at cost.

No retainer, no hourly billing and no commission on the money you recover.`,
  ],
  [
    "A3",
    `We handle straightforward money disputes for individuals and businesses, anywhere in India:

• Unpaid salary and employment dues
• Business dues and unpaid invoices
• Freelancer and client payments
• Money lent to a friend or relative
• Cheque bounce (Section 138)
• Security deposit and rent
• Property and builder refunds
• Consumer refunds for a product or service
• School, college and coaching fee refunds
• Flight, travel and hotel refunds
• Insurance claims
• Cyber fraud and bank disputes`,
  ],
  [
    "A4",
    `The first notice usually goes out within 24 hours of you submitting your case. Follow-up notices go out in Week 2 and Week 3 if there is no response.

How quickly the matter resolves depends on how the other party responds.`,
  ],
  [
    "A5",
    `You do not need to upload any documents.

You simply type in the key facts: the amount owed, the important dates, what was agreed and the other party's contact details. Our team verifies these facts before the notice is sent.

Keep your agreements, invoices, payment receipts and chats safe with you, as you may need them later.`,
  ],
  [
    "A6",
    `If the other party does not respond to the first notice, we send follow-up notices in Week 2 and Week 3, each more urgent than the last.

If all notices are ignored, we guide you on the next step. Depending on the dispute, that may be a consumer complaint, the labour commissioner, a civil suit or a cheque bounce case under Section 138.`,
  ],
  [
    "A7",
    `Yes. Our legal notice formats have been prepared by a lawyer.

Your notice is built on those formats using the facts you submit, which our team verifies before sending. It is not individually customised by a lawyer for your specific situation.

For personal legal advice or court representation, you would need to hire an advocate separately.`,
  ],
  [
    "A8",
    `We cannot guarantee that the money will be recovered. A legal notice is a formal demand, and the outcome depends on the other party.

Refunds are not available once fact verification begins, for incorrect recipient details, or after a notice has been issued.`,
  ],
];

const byKey = {};

byKey.WELCOME = buttons(
  "WELCOME",
  `Hi 👋 Welcome to LegalRecovery.

We help you recover unpaid money by sending fact-verified legal notices to the person or business that owes you. Everything is done online.

What would you like to know?`,
  [
    ["How it works", "A1"],
    ["Pricing", "A2"],
    ["More questions", "MENU"],
  ],
  { isStart: true, x: COL.start, y: 0 }
);

byKey.MENU = list(
  "MENU",
  "Pick a topic and I'll explain.",
  "See topics",
  [
    ["How it works", "The steps from sign-up to notice", "A1"],
    ["Pricing", "The flat fee and what it includes", "A2"],
    ["Cases we handle", "Salary, invoices, loans, deposits, refunds and more", "A3"],
    ["How long it takes", "When notices go out", "A4"],
    ["Documents needed", "What you need to get started", "A5"],
    ["If they ignore it", "What happens after the notices", "A6"],
    ["Is a lawyer involved?", "Who prepares the notice", "A7"],
    ["Refunds & guarantee", "Our refund policy and what we can promise", "A8"],
    ["Get started", "Create your account and pay", "S1"],
  ],
  { x: COL.menu, y: 0 }
);

// Each answer carries its own next-step buttons, so it arrives as one message instead of two
answers.forEach(([key, text], i) => {
  byKey[key] = buttons(
    key,
    text,
    [
      ["Get started", "S1"],
      ["More questions", "MENU"],
    ],
    { x: COL.answers, y: i * 520 }
  );
});

byKey.S1 = question(
  "S1",
  `Great, let's set up your account. It takes about a minute.

What is your full name?`,
  {
    variable: "lr_name",
    regex: "^(?!\\d+$).{2,60}$",
    retryText: "Please type your full name, for example Rahul Sharma.",
    x: COL.signup,
    y: 0,
  }
);

byKey.S2 = question(
  "S2",
  "Thanks @lr_name. What is your email address? We send your receipt and case updates there.",
  {
    variable: "lr_email",
    regex: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    // No sample address here: WATI reads an "@" in text as the start of a variable
    retryText: "That does not look like an email address. Please type it again.",
    x: COL.signup,
    y: 340,
  }
);

byKey.S3 = question("S3", "Which state do you live in?", {
  variable: "lr_state",
  regex: "^.{2,40}$",
  retryText: "Please type the name of your state, for example Delhi or Maharashtra.",
  x: COL.signup,
  y: 680,
});

byKey.S4 = buttons(
  "S4",
  `How many people or businesses do you want to recover money from?

The fee is ₹999 for each one. If you have more than 3, pick 3 parties and change it on the payment page.`,
  [
    ["1 party", "S5"],
    ["2 parties", "S5"],
    ["3 parties", "S5"],
  ],
  { variable: "lr_parties", x: COL.signup, y: 1020 }
);

byKey.S5 = buttons(
  "S5",
  `Do you also want the notices sent physically by Speed Post?

Email and WhatsApp delivery are already included. Speed Post adds ₹450 per party for all 3 notices.`,
  [
    ["Yes, add Speed Post", "S6"],
    ["No, skip it", "S6"],
  ],
  { variable: "lr_speed_post", x: COL.signup, y: 1500 }
);

byKey.S6 = buttons(
  "S6",
  `Please check your details:

Name: @lr_name
Email: @lr_email
State: @lr_state
Opposite parties: @lr_parties
Speed Post: @lr_speed_post

Is everything correct?`,
  [
    ["Yes, send my link", "LINK"],
    ["Start again", "S1"],
  ],
  { x: COL.signup, y: 1940 }
);

byKey.LINK = message(
  "LINK",
  `Almost done! 🎉

Tap the link below and we'll send your secure payment link right here on WhatsApp:
${CLAIM_URL}

For your security, the payment link is only ever sent to this WhatsApp number.`,
  { x: COL.payment, y: 1940 }
);

/* ---------- resolve links ---------- */

const idOf = (key) => {
  if (!byKey[key]) throw new Error(`Unknown step "${key}"`);
  return byKey[key].id;
};

for (const entry of Object.values(byKey)) {
  const { node, id, next } = entry;
  if (next) edge(id, null, idOf(next));
  if (!node) continue;

  if (node.flowNodeType === "InteractiveButtons") {
    for (const item of node.interactiveButtonsItems) {
      item.nodeResultId = idOf(item.nodeResultId);
      edge(id, item.id, item.nodeResultId);
    }
  }
  if (node.flowNodeType === "InteractiveList") {
    for (const row of node.interactiveListSections[0].rows) {
      row.nodeResultId = idOf(row.nodeResultId);
      edge(id, row.id, row.nodeResultId);
    }
  }
}

// Questions run in order
edge(idOf("S1"), null, idOf("S2"));
edge(idOf("S2"), null, idOf("S3"));
edge(idOf("S3"), null, idOf("S4"));

const flow = {
  id: null,
  tenantId: TENANT_ID,
  name: "LegalRecovery Chatbot",
  created: null,
  flowNodes: nodes,
  flowEdges: edges,
  lastUpdated: new Date().toISOString(),
  isDeleted: false,
  transform: { posX: "60", posY: "60", zoom: "0.35" },
  isPro: true,
  flowVersion: 1,
  fallback: {
    message: { isEnabled: true, message: FALLBACK_MESSAGE, retryLimit: 3 },
    smartEscalation: { isEnabled: false, teamId: null, assignToContactOwner: true },
  },
  channelTypes: ["WA"],
  hasUpdateAttribute: false,
};

writeFileSync(OUTPUT, `${JSON.stringify(flow, null, 2)}\n`);
console.log(`Wrote ${OUTPUT}: ${nodes.length} steps, ${edges.length} links`);

/* ---------- step fingerprints for the site ---------- */

// stage: browse (Q&A), signup (sign-up questions), done (link sent)
const STEP_INFO = {
  WELCOME: ["Welcome message", "browse"],
  MENU: ["Topics menu", "browse"],
  A1: ["Read: How it works", "browse"],
  A2: ["Read: Pricing", "browse"],
  A3: ["Read: Cases we handle", "browse"],
  A4: ["Read: How long it takes", "browse"],
  A5: ["Read: Documents needed", "browse"],
  A6: ["Read: If they ignore it", "browse"],
  A7: ["Read: Is a lawyer involved?", "browse"],
  A8: ["Read: Refunds & guarantee", "browse"],
  S1: ["Asked for name", "signup"],
  S2: ["Asked for email", "signup"],
  S3: ["Asked for state", "signup"],
  S4: ["Asked number of parties", "signup"],
  S5: ["Asked about Speed Post", "signup"],
  S6: ["Confirming details", "signup"],
  LINK: ["Link sent in chat", "done"],
};

const plain = (h) =>
  h.replace(/<br>\n/g, "\n").replace(/<\/?p>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const normalize = (t) => t.toLowerCase().replace(/[^a-z0-9]/g, "");
const nodeText = (n) =>
  plain(n.interactiveButtonsBody || n.interactiveListBody || n.flowReplies?.[0]?.data || "");

const steps = Object.entries(STEP_INFO).map(([key, [label, stage]], order) => {
  const node = nodes.find((n) => n.id === idOf(key));
  const text = nodeText(node);
  // Longest stretch without variables, since @answers and {{attributes}} change per person
  const segment = text
    .split(/@[a-z_]+|\{\{[^}]+\}\}/i)
    .map(normalize)
    .sort((a, b) => b.length - a.length)[0];
  return { key, label, stage, order, nodeId: node.id, fingerprint: segment.slice(0, 40), full: normalize(text) };
});

for (const step of steps) {
  if (step.fingerprint.length < 16) throw new Error(`Fingerprint too short for ${step.key}`);
  const clash = steps.find((other) => other !== step && other.full.includes(step.fingerprint));
  if (clash) throw new Error(`Fingerprint of ${step.key} also matches ${clash.key}`);
}

writeFileSync(
  STEPS_OUTPUT,
  `${JSON.stringify(
    steps.map(({ full: _full, ...step }) => step),
    null,
    2
  )}\n`
);
console.log(`Wrote ${STEPS_OUTPUT}: ${steps.length} step fingerprints`);

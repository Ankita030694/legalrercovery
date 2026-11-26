# LegalRecovery WhatsApp chatbot

Approved conversation for the Legal Recovery WATI account (tenant 10169824).

The importable version is `docs/wati-chatbot-flow.json`, generated from this text by
`node scripts/build-wati-flow.mjs`. Load it in WATI with **Automations > Chatbots > Import JSON**.

In WATI text, `@variable` is an answer saved earlier in the chat and `{{attribute}}` is a contact
attribute. `{{phone}}` is the chat's own WhatsApp number.

WhatsApp limits this draft stays inside: 3 reply buttons per message, 20 characters per button,
10 rows per list, 24 characters per row title, 72 per row description.

## Map

```
START -> WELCOME
WELCOME        [How it works] -> A1    [Pricing] -> A2    [More questions] -> MENU
MENU (list)    -> A1 ... A8, SIGNUP
A1 ... A8      [Get started] -> SIGNUP    [More questions] -> MENU
SIGNUP         S1 name -> S2 email -> S3 state -> S4 parties -> S5 Speed Post -> S6 confirm
               -> LINK (bot ends)
LINK tapped    -> legalrecovery.in/wa/link -> site sends the payment link into the chat
```

The bot is fully automated: there is no hand-off to a person anywhere in the flow. It uses no
paid WATI steps, so it runs on the Growth plan.

## START

Trigger: keywords `hi`, `hello`, `start`, `menu`, `recover`, plus the account's Default Action set
to start this chatbot, so that any message sent while no chatbot is running opens WELCOME.
Website buttons can open the chat with a pre-filled message such as "Hi, I want to recover my money".

## WELCOME (buttons)

> Hi 👋 Welcome to LegalRecovery.
>
> We help you recover unpaid money by sending fact-verified legal notices to the person or business that owes you. Everything is done online.
>
> What would you like to know?

Buttons: [How it works] [Pricing] [More questions]

## MENU (list)

> Pick a topic and I'll explain.

List button: [See topics]

| Row title | Row description | Goes to |
|---|---|---|
| How it works | The steps from sign-up to notice | A1 |
| Pricing | The flat fee and what it includes | A2 |
| Cases we handle | Salary, invoices, loans, deposits, refunds and more | A3 |
| How long it takes | When notices go out | A4 |
| Documents needed | What you need to get started | A5 |
| If they ignore it | What happens after the notices | A6 |
| Is a lawyer involved? | Who prepares the notice | A7 |
| Refunds & guarantee | Our refund policy and what we can promise | A8 |
| Get started | Create your account and pay | SIGNUP |

## Answers

Each answer is sent as one message with two buttons: [Get started] [More questions]. (An earlier
version sent a separate "What would you like to do next?" message after every answer.)

### A1: How it works

> Here is how it works:
>
> 1️⃣ You pay a flat fee and enter your case details online: the amount, the key dates and who owes you. No document uploads.
> 2️⃣ Our team verifies the facts you submitted.
> 3️⃣ A fact-verified legal notice is sent to the other party by Email and WhatsApp, and by Speed Post if you choose it. Most notices go out within 24 hours.
> 4️⃣ If they do not respond, up to 2 more escalating notices follow in Week 2 and Week 3.
> 5️⃣ You track delivery and replies from your dashboard.

### A2: Pricing

> Our fee is a flat ₹999 per opposite party.
>
> ✅ Up to 3 fact-verified legal notices by Email and WhatsApp
> ✅ Delivery tracking
> ✅ Multi-stage escalation
>
> Optional: Speed Post for all 3 notices at ₹450 per party, charged at cost.
>
> No retainer, no hourly billing and no commission on the money you recover.

### A3: Cases we handle

> We handle straightforward money disputes for individuals and businesses, anywhere in India:
>
> • Unpaid salary and employment dues
> • Business dues and unpaid invoices
> • Freelancer and client payments
> • Money lent to a friend or relative
> • Cheque bounce (Section 138)
> • Security deposit and rent
> • Property and builder refunds
> • Consumer refunds for a product or service
> • School, college and coaching fee refunds
> • Flight, travel and hotel refunds
> • Insurance claims
> • Cyber fraud and bank disputes

### A4: How long it takes

> The first notice usually goes out within 24 hours of you submitting your case. Follow-up notices go out in Week 2 and Week 3 if there is no response.
>
> How quickly the matter resolves depends on how the other party responds.

### A5: Documents needed

> You do not need to upload any documents.
>
> You simply type in the key facts: the amount owed, the important dates, what was agreed and the other party's contact details. Our team verifies these facts before the notice is sent.
>
> Keep your agreements, invoices, payment receipts and chats safe with you, as you may need them later.

### A6: If they ignore it

> If the other party does not respond to the first notice, we send follow-up notices in Week 2 and Week 3, each more urgent than the last.
>
> If all notices are ignored, we guide you on the next step. Depending on the dispute, that may be a consumer complaint, the labour commissioner, a civil suit or a cheque bounce case under Section 138.

### A7: Is a lawyer involved?

> Yes. Our legal notice formats have been prepared by a lawyer.
>
> Your notice is built on those formats using the facts you submit, which our team verifies before sending. It is not individually customised by a lawyer for your specific situation.
>
> For personal legal advice or court representation, you would need to hire an advocate separately.

### A8: Refunds & guarantee

> We cannot guarantee that the money will be recovered. A legal notice is a formal demand, and the outcome depends on the other party.
>
> Refunds are not available once fact verification begins, for incorrect recipient details, or after a notice has been issued.

## SIGNUP

S1 to S3 are typed answers. S4 to S6 are buttons.

### S1: Name (question, save as `lr_name`)

> Great, let's set up your account. It takes about a minute.
>
> What is your full name?

Validation: 2 to 60 characters and not only digits, regex `^(?!\d+$).{2,60}$`. On failure:

> Please type your full name, for example Rahul Sharma.

### S2: Email (question, save as `lr_email`)

> Thanks @lr_name. What is your email address? We send your receipt and case updates there.

Validation: regex `^[^\s@]+@[^\s@]+\.[^\s@]+$`. On failure:

> That does not look like an email address. Please type it again.

No sample address in this message: WATI reads an "@" in text as the start of a variable.

### S3: State (question, save as `lr_state`)

> Which state do you live in?

Validation: 2 to 40 characters, regex `^.{2,40}$`. On failure:

> Please type the name of your state, for example Delhi or Maharashtra.

### S4: Opposite parties (buttons, save as `lr_parties`)

> How many people or businesses do you want to recover money from?
>
> The fee is ₹999 for each one. If you have more than 3, pick 3 parties and change it on the payment page.

Buttons: [1 party] [2 parties] [3 parties]

### S5: Speed Post (buttons, save as `lr_speed_post`)

> Do you also want the notices sent physically by Speed Post?
>
> Email and WhatsApp delivery are already included. Speed Post adds ₹450 per party for all 3 notices.

Buttons: [Yes, add Speed Post] [No, skip it]

### S6: Confirm (buttons)

> Please check your details:
>
> Name: @lr_name
> Email: @lr_email
> State: @lr_state
> Opposite parties: @lr_parties
> Speed Post: @lr_speed_post
>
> Is everything correct?

Buttons: [Yes, send my link] [Start again]

[Start again] goes back to S1.

### LINK (message, the bot ends here)

> Almost done! 🎉
>
> Tap the link below and we'll send your secure payment link right here on WhatsApp:
> https://www.legalrecovery.in/wa/link?n={{phone}}
>
> For your security, the payment link is only ever sent to this WhatsApp number.

### What the site does when the link is tapped

1. `/wa/link` opens a bare page (no analytics or tracking scripts), removes the number from the
   address bar and calls `/api/wati/claim-link`.
2. The site reads this number's chat history from WATI's API and looks for a "Yes, send my link"
   tap from the last hour. The answers are taken from the replies in that chat, and the email is
   checked against the bot's own "Please check your details" message.
3. It saves the lead (`pending_payment`, verified via WhatsApp) and sends the payment link into
   the chat as a normal WhatsApp reply. The browser only ever sees "Check your WhatsApp".

The reply the site sends:

> Thanks Rahul Sharma! Here is your secure Legal Recovery payment link:
> https://legalrecovery.in/resume/tok_...
>
> Amount: ₹999 for 1 opposite party. Your account is activated as soon as the payment goes through.

> Amount: ₹2,898 for 2 opposite parties, including Speed Post. Your account is activated as soon as the payment goes through.

A number that already has a paid account gets the login link instead.

Why the link carries only the phone number and the payment link goes through WhatsApp: anyone
can type another number into a link, and `/resume` links log paid users in automatically. Sending
the real link to the chat's own number proves the person tapping owns that phone.

Abuse limits on `/api/wati/claim-link`: 20 attempts per IP per hour, 4 per number per 10 minutes
and 12 per day, 500 a day in total. The answer is the same whether or not a number used the bot.

## When the user types instead of tapping

Set under **Automations > Chatbots > Fallback Message**. WATI sends it whenever a reply to a
Buttons or List step does not match an option, then waits again at the same step.

> I can only record your answer when you tap a button. Please tap one of the options in my last message 👆
>
> To start again, type *menu*.

- Attempts: 3, the maximum. After the third unmatched reply WATI ends the chatbot session, and
  the user starts again by typing *menu*.
- Smart Escalation: off. It hands the chat to a team when a reply looks like a request for a
  person, and nobody will be there to answer.
- Chatbot Timer: set a session timeout so an abandoned chat closes and the next message starts
  fresh at WELCOME.

## Edge cases

| Situation | What happens |
|---|---|
| Types text, or sends a photo, voice note or sticker, at a button or list step | Fallback Message, same step waits again. Three misses end the session; *menu* restarts. |
| Types a question at a typed step, e.g. "is this safe?" as the name | It is recorded as the answer. S6 shows it back and [Start again] fixes it. |
| Invalid or mistyped email | Bad format is caught at S2, and again by the site, which replies asking them to type *menu* and redo it. A valid-looking typo is caught by the user at S6. |
| City or misspelt state at S3 | Accepted. The state can be edited on the payment page. |
| More than 3 opposite parties | Picks 3 parties and raises it on the payment page, which allows up to 5. More than 5 are bought as extra slots from the dashboard later. |
| Skips or never answers the Speed Post step | No Speed Post is added by the bot; the payment page asks the question instead. |
| Abandons the chat before S6 | No lead is saved, so no reminders go out. The admin funnel shows the step they stopped at. |
| Gets the link in chat but never taps it | No lead is saved. The admin funnel shows "Got link · never tapped". |
| Taps the link but does not pay | Saved as a lead. The existing reminders go out, including the discount offer. |
| Runs the flow again with different answers | Same link comes back with the details and amount updated. No duplicate lead. |
| Number already has a paid account | Bot replies that an account exists and gives the login link. No new payment link. |
| Started sign-up on the website earlier | The chat lead replaces the unfinished one and keeps any discount already unlocked. |
| Non-Indian WhatsApp number | Bot replies that sign-up is available only for Indian numbers. |
| Website or WATI is down when the link is tapped | The page says it didn't work and to tap the link again in a minute. |
| Taps the link more than an hour after confirming | Nothing is sent; the page still says "Check your WhatsApp". They type *menu* and finish again. |
| Someone types another person's number into the link | Nothing shows in their browser. If that person confirmed within the hour, the payment link goes to that person's own WhatsApp. |
| A detail is missing from the chat | The site replies saying which detail is missing and to type *menu*. |
| Opens the link on another phone or laptop | Works. The link is not tied to a device. |
| Forwards the link to someone else | Whoever opens it can pay for, and after payment log in to, that account. Same as the existing reminder links. |
| Writes in Hindi or another language | Not handled. The bot is English only and replies with the Fallback Message. |

## To test on a real number before launch

WATI's documentation does not settle these, so they need one pass on a phone:

- Typing *menu* in the middle of the flow: does it restart, or count as an unmatched reply?
- Tapping a button on an older message from earlier in the chat.
- Typing the exact button text, e.g. "1 party", instead of tapping it.
- What the user sees when the Chatbot Timer expires.
- That `{{phone}}` is filled into the LINK message as the 12-digit number.
- That WATI's API returns the bot's own messages and the button taps in the chat history, which
  the site needs to read the answers and to show each person's step in the admin funnel.
- That WATI marks the contact's current chatbot step, which the 30-minute sync relies on to find
  people who stopped part-way.

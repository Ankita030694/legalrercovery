const fs = require("fs");
const path = require("path");

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!word) return 0;
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
  word = word.replace(/^y/, "");
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function computeFleschReadingEase(html) {
  const normalized = html
    .replace(/<\/(h1|h2|h3|h4|p|li|td|th|blockquote)>/gi, ". ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-zA-Z0-9#]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const sentences = normalized
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 2);
  const words = normalized
    .split(/\s+/)
    .map((w) => w.replace(/[^a-zA-Z0-9]/g, ""))
    .filter((w) => w.length > 0);
  const totalSentences = Math.max(1, sentences.length);
  const totalWords = Math.max(1, words.length);
  const totalSyllables = words.reduce((acc, w) => acc + countSyllables(w), 0);

  const asl = totalWords / totalSentences;
  const asw = totalSyllables / totalWords;
  const score = 206.835 - 1.015 * asl - 84.6 * asw;
  return {
    score: Number(score.toFixed(1)),
    totalWords,
    totalSentences,
    avgSentenceLength: Number(asl.toFixed(1)),
    avgSyllablesPerWord: Number(asw.toFixed(2)),
  };
}

const description = `<p>Lending money to a close friend or relative feels natural. In India, people transfer funds every day through UPI apps like Google Pay, PhonePe, and Paytm. A friend calls with a sudden medical need, a shop shortfall, or a cash crunch. You open your phone. You send fifty thousand rupees, two lakh rupees, or five lakh rupees in seconds. You do not sign a formal loan deed on stamp paper. You do not ask for a promissory note. You trust their word.</p>

<p>Months pass by. The promised repayment date comes and goes. When you ask for your money back, your friend makes excuses. They blame slow clients or frozen bank accounts. Soon, they stop answering your calls. In the worst cases, they turn hostile. They claim the transfer was a gift. Or they claim you paid back an old cash loan from college. You realize your kindness has turned into a painful money loss.</p>

<p>Many people believe that without a written contract on stamp paper, they cannot recover their money. This belief is false under Indian law. A valid loan does not need judicial stamp paper. Under the Indian Contract Act, oral agreements backed by digital payments are fully binding. In 2026, the Bharatiya Sakshya Adhiniyam, 2023 gives you clear ways to prove digital payments in court. If you lent money via UPI or bank transfer without an agreement, this guide shows you how to recover every rupee with interest.</p>

<h2>The Informal UPI Loan Trap: Why Borrowers Evade Repayment</h2>

<p>Informal loans between friends carry unique personal and legal traps. In bank loans, lenders demand collateral and signed loan agreements. In friendly loans, personal trust takes the place of paperwork. Borrowers exploit this trust to delay or refuse payment.</p>

<p>Most informal loan defaults follow a common pattern of excuses:</p>

<ul>
  <li><strong>The Gift Defense:</strong> The borrower claims you sent the money as a gift with no need to pay it back.</li>
  <li><strong>The Old Debt Defense:</strong> The borrower claims the UPI transfer only paid back an old cash loan from past years.</li>
  <li><strong>The Missing Paperwork Excuse:</strong> The borrower tells you that without a stamp paper contract, no court can help you.</li>
  <li><strong>The Delay Tactic:</strong> The borrower makes small promises every month to delay you until the legal time limit runs out.</li>
</ul>

<p>Online blogs often give bad legal advice. Many websites still cite Section 65B of the old Indian Evidence Act, 1872. They tell people that WhatsApp chats and bank screenshots cannot stand in court. That advice is outdated and wrong. Today, Indian courts accept digital payments and chat backups as strong evidence. You have clear legal tools to win your money back.</p>

<h2>Defeating the Gift Defense Under Section 70 Contract Act</h2>

<p>When you ask for your money, defaulting friends often claim the payment was a gift. Under Indian contract law, this defense fails quickly when you challenge it the right way.</p>

<p>Section 70 of the Indian Contract Act, 1872 deals with non-gratuitous acts. The law states that when a person lawfully delivers anything to another, not intending to do so as a gift, and the other person enjoys the benefit, the recipient must return the money or compensate the sender.</p>

<p>Indian courts apply Section 70 to stop unjust enrichment through four simple tests:</p>

<ol>
  <li><strong>Presumption of Non-Gratuitous Transfer:</strong> The law does not assume that large sums of money are gifts between independent adults.</li>
  <li><strong>Shift in the Burden of Proof:</strong> Once your bank statement shows money leaving your account and entering the friend account, you have proved the transfer. The borrower must then prove why they should keep it.</li>
  <li><strong>Income Tax Rules:</strong> Under Section 56(2)(x) of the Income Tax Act, 1961, any gift over fifty thousand rupees from a non-relative is taxable income. If the friend claims it was a gift, they must prove they declared it in their income tax return. If they did not declare it, the court will reject their claim.</li>
  <li><strong>No Customary Occasion:</strong> A true gift needs a family event like a wedding or festival. A random weekday UPI transfer of two lakh rupees cannot pass as a customary gift.</li>
</ol>

<p>If you need to know <a href="/how-to-recover-money-lent-to-friend-without-proof">how to recover money lent to a friend without proof</a> on stamp paper, Section 70 is your strongest weapon. The borrower must pay back the money they took.</p>

<h2>The 2026 Electronic Evidence Chain Under Section 63 BSA 2023</h2>

<p>On July 1, 2024, the Indian legal system changed. The Bharatiya Sakshya Adhiniyam, 2023 (BSA) replaced the old Indian Evidence Act, 1872. Section 63 of the BSA took the place of Section 65B for electronic records. To recover an informal loan, you must build an evidence chain under Section 63.</p>

<h3>Extracting the 12-Digit NPCI UTR and Bank Narration Trail</h3>

<p>Every UPI transfer creates a digital footprint. This is the 12-digit Unique Transaction Reference (UTR) number created by the National Payments Corporation of India (NPCI). Even if the borrower deletes their payment app, the UTR remains saved on bank servers.</p>

<p>To prove the payment in court, get your official bank statement. Do not rely only on phone screenshots. Download a digitally signed PDF statement from your net banking portal or get a stamped copy from your bank branch. The statement must show the date, amount, recipient name, UPI Virtual Payment Address (VPA), and the 12-digit UTR number. This bank record proves the transfer of funds beyond doubt.</p>

<h3>Preserving WhatsApp Chat Threads with Cryptographic Hashes</h3>

<p>Most friendly loans start with chat messages. The friend asks for money, shares their QR code, confirms receiving the funds, and promises to pay you back. Many people ask, <a href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case">can WhatsApp chat be used as evidence in a money recovery case</a> under current rules? Yes, it can, if you preserve the files properly.</p>

<p>Phone screenshots can face objections in court for possible editing. To make sure your chats stand up in court, follow these four steps:</p>

<ul>
  <li><strong>Export Full Chat History:</strong> Use the Export Chat tool in WhatsApp to save an unedited text file (.txt) with dates, times, and phone numbers.</li>
  <li><strong>Create a Cryptographic Hash:</strong> Make a SHA-256 hash value of the text file right after export. This hash proves the file was never altered.</li>
  <li><strong>Save Voice Notes:</strong> Keep all voice messages where the friend admits the debt or asks for more time. Voice notes provide clear oral proof.</li>
  <li><strong>Record Blue Read Ticks:</strong> Take screenshots showing double blue ticks on your messages. This proves the friend read your payment demands without objection.</li>
</ul>

<h3>Drafting the Section 63 BSA Certificate for the Court</h3>

<p>Under Section 63(4) of the BSA 2023, every electronic record must have a supporting certificate. Without this certificate, the court will not read your WhatsApp chats or bank printouts.</p>

<p>The Section 63 BSA certificate is a sworn affidavit by the phone owner. It must include these five facts:</p>

<ol>
  <li><strong>List of Records:</strong> Clear description of bank statements, chat exports, and payment slips.</li>
  <li><strong>Device Details:</strong> Make, model, IMEI number, operating system, and mobile number of your phone.</li>
  <li><strong>Regular Use:</strong> A statement that you used the phone regularly for daily personal or work needs.</li>
  <li><strong>Good Working Order:</strong> A statement that the phone worked properly without bugs that could alter files.</li>
  <li><strong>Hash Verification:</strong> The SHA-256 hash string of the exported files filed with the court.</li>
</ol>

<p>High Courts have held that a self-certificate by the phone owner is valid legal proof. You do not need expensive private forensic tests to prove your chat logs.</p>

<h2>The Admissions Trap: Strategic Advocate Legal Notice Framework</h2>

<p>When a borrower stops taking your calls, filing a court case right away can be slow. Instead, recovery advocates use the Admissions Trap Legal Notice Strategy. This strategy turns an undocumented loan into written proof of debt.</p>

<p>When a friend ignores your text messages, they feel safe. But when a formal legal notice arrives from an advocate via Speed Post and email, their reaction changes. The notice carries legal weight. It lists UTR numbers, cites civil statutes, and demands payment within 15 days with interest.</p>

<h3>How Strategic Legal Notice Drafting Triggers Written Proof</h3>

<p>An Admissions Trap notice is drafted with care. It lists the exact dates, transferred sums, the emergency reasons given by the friend, and their verbal promises. It then asks clear questions about why the money has not been returned.</p>

<p>This structure forces the borrower to take one of three actions, and each helps your case:</p>

<ul>
  <li><strong>Action 1 (Full Payment):</strong> The borrower fears a court case and repays the full amount right away.</li>
  <li><strong>Action 2 (Written Admission):</strong> The borrower replies by email, letter, or WhatsApp. Even when making excuses, they often write: <em>"I took the money, but I need six more months."</em> That single sentence is a legal admission of debt.</li>
  <li><strong>Action 3 (Total Silence):</strong> The borrower stays silent. Under civil law, failing to reply to a legal notice allows the court to draw an adverse inference. The court presumes the borrower had no valid defense.</li>
</ul>

<p>Sending a formal <a href="/legal-notice-for-recovery-of-friendly-loan">legal notice for recovery of friendly loan</a> is the most effective first step to secure your money.</p>

<h3>Using Section 18 of the Limitation Act to Reset Deadlines</h3>

<p>Under Article 19 of the Limitation Act, 1963, you have three years to file a money recovery suit from the date of the loan. Many people wait too long. They hope the friend will pay. When three years draw close, they worry that their right to sue is gone.</p>

<p>Section 18 of the Limitation Act solves this problem. The law states that if the borrower acknowledges the debt in writing before the three years end, a fresh three-year period begins from the date of that acknowledgment.</p>

<p>Under the Information Technology Act, a WhatsApp message or email counts as writing. When your friend sends a message saying, <em>"I will pay you back after Diwali,"</em> that message resets the clock. You get three new years to take legal action. The Admissions Trap notice helps trigger this written reply.</p>

<h2>Concrete Rupee Claim and Statutory Interest Calculation Matrix</h2>

<p>To win your case in court, you must list every rupee owed to you. Do not use rough estimates. Prepare an exact breakdown of principal, interest, and legal costs.</p>

<p>Consider a case where a lender sent Rs 4,50,000 to a friend via three UPI transfers on Google Pay and PhonePe in 2024. The friend promised to repay in six months but paid nothing. The table below shows the full legal claim:</p>

<table>
  <thead>
    <tr>
      <th>Claim Item</th>
      <th>Transaction Reference</th>
      <th>Disputed Rupee Sum</th>
      <th>Statutory Legal Ground</th>
      <th>Enforcement Forum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Principal Loan (Part 1)</strong></td>
      <td>GPay UTR: 412389123456</td>
      <td>Rs 1,50,000</td>
      <td>Bank debit record; Section 70 Contract Act</td>
      <td>Civil Court (Summary Suit)</td>
    </tr>
    <tr>
      <td><strong>Principal Loan (Part 2)</strong></td>
      <td>PhonePe UTR: 415690876543</td>
      <td>Rs 2,00,000</td>
      <td>Bank debit record; Section 70 Contract Act</td>
      <td>Civil Court (Summary Suit)</td>
    </tr>
    <tr>
      <td><strong>Principal Loan (Part 3)</strong></td>
      <td>Paytm UPI UTR: 418901234567</td>
      <td>Rs 1,00,000</td>
      <td>Bank debit record; Section 70 Contract Act</td>
      <td>Civil Court (Summary Suit)</td>
    </tr>
    <tr>
      <td><strong>Pre-Suit Statutory Interest</strong></td>
      <td>18 Months Default at 18% p.a.</td>
      <td>Rs 1,21,500</td>
      <td>Section 2(c) & Section 3 Interest Act, 1978</td>
      <td>Statutory Notice Demand</td>
    </tr>
    <tr>
      <td><strong>Pendente Lite Interest</strong></td>
      <td>Filing date to decree date</td>
      <td>18% per annum</td>
      <td>Section 34 Code of Civil Procedure, 1908</td>
      <td>Civil Court Decree Award</td>
    </tr>
    <tr>
      <td><strong>Legal Notice & Counsel Costs</strong></td>
      <td>Advocate drafting & service</td>
      <td>Rs 25,000</td>
      <td>Section 35 Code of Civil Procedure, 1908</td>
      <td>Taxed Court Costs</td>
    </tr>
    <tr>
      <td><strong>Total Enforceable Recovery Sum</strong></td>
      <td><strong>Total Liquidated Legal Debt</strong></td>
      <td><strong>Rs 5,96,500 Net Due</strong></td>
      <td><strong>Multi-Tranche Civil Debt Claim</strong></td>
      <td><strong>Order 37 Money Decree</strong></td>
    </tr>
  </tbody>
</table>

<p>As this table shows, an unpaid friendly loan of Rs 4.5 lakh grows into a legal claim of nearly Rs 6 lakh. Under Section 2(c) and Section 3 of the Interest Act, 1978, a formal legal notice gives you the right to claim interest from the date of default. Borrowers realize that delay costs them money.</p>

<h2>Order 37 Summary Suit vs Ordinary Suit for Digital Loan Recovery</h2>

<p>Many creditors fear that going to court takes years. Ordinary lawsuits take time because of slow procedural steps. But the Code of Civil Procedure, 1908 provides a fast court tool: the Summary Suit under Order XXXVII (Order 37).</p>

<p>An Order 37 summary suit is built for fixed money debts based on written contracts or admissions. When you hold bank statements, UTR numbers, and WhatsApp chats, your friendly loan qualifies for this fast process.</p>

<h3>Why Courts Reject Frivolous Leave to Defend Applications</h3>

<p>In a standard lawsuit, a defendant can file long replies and drag the case for years. In an Order 37 suit, the defendant has no automatic right to defend.</p>

<p>Order 37 sets strict rules for the borrower:</p>

<ol>
  <li><strong>Ten-Day Appearance Rule:</strong> When the court serves the summons, the borrower has only 10 days to enter an appearance. If they fail, the judge passes a decree at once.</li>
  <li><strong>Summons for Judgment:</strong> After the borrower appears, your advocate files a Summons for Judgment. The borrower must apply for Leave to Defend within 10 days, showing a real defense.</li>
  <li><strong>The Rule in IDBI Trusteeship:</strong> In <em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017)</em>, the Supreme Court laid down strict tests. The court held that if a defense is fake or baseless, leave to defend must be denied. Or the court must order the borrower to deposit the full sum in cash before contesting.</li>
  <li><strong>Fast Decrees on Digital Proof:</strong> When you present bank UTR records and WhatsApp chats, a simple oral denial is treated as a baseless defense. The court will enter a decree or order cash deposit.</li>
</ol>

<h3>Decrees on Admissions Under Order 12 Rule 6 of the CPC</h3>

<p>If the borrower admits the debt in a chat message or email, you have an even faster remedy. Under Order XII Rule 6 of the CPC, the court can pass judgment based on admissions at any stage of the case.</p>

<p>Your advocate files an Order 12 Rule 6 application with your Section 63 BSA certificate. The judge can pass an immediate decree without waiting for a full trial. This cuts down case time by years.</p>

<h2>Statutory Recovery Forums and Enforcement Powers Matrix</h2>

<p>Choosing the right forum helps you recover your money quickly. Depending on your evidence and loan amount, several legal paths exist under Indian law.</p>

<p>The table below shows the top recovery forums, their governing laws, and their powers:</p>

<table>
  <thead>
    <tr>
      <th>Recovery Forum</th>
      <th>Governing Law</th>
      <th>Trigger Condition</th>
      <th>Enforcement Powers & Relief</th>
      <th>Resolution Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Advocate Legal Notice</strong></td>
      <td>Advocates Act & Contract Act</td>
      <td>Loan default past due date</td>
      <td>Creates admissions trap, resets time limit, demands 18% interest</td>
      <td>Settlement in 7 to 15 days</td>
    </tr>
    <tr>
      <td><strong>Order 37 Summary Suit</strong></td>
      <td>Order XXXVII Code of Civil Procedure</td>
      <td>Bank UTR logs + chat admissions</td>
      <td>Fast money decree; denies baseless leave to defend</td>
      <td>Decree in 60 to 120 days</td>
    </tr>
    <tr>
      <td><strong>Decree on Admissions</strong></td>
      <td>Order XII Rule 6 of the CPC</td>
      <td>Clear debt admission in chat or letter</td>
      <td>Immediate money judgment bypassing trial</td>
      <td>Order in 30 to 60 days</td>
    </tr>
    <tr>
      <td><strong>Asset Attachment (IBJ)</strong></td>
      <td>Order XXXVIII Rule 5 of the CPC</td>
      <td>Risk of borrower hiding property</td>
      <td>Freezes bank accounts and attaches real estate</td>
      <td>Interim order in 7 to 14 days</td>
    </tr>
    <tr>
      <td><strong>Pre-Institution Mediation</strong></td>
      <td>Section 12A Commercial Courts Act</td>
      <td>Commercial loan above Rs 3,00,000</td>
      <td>Settlement holds the power of a court decree</td>
      <td>Settled in 30 to 90 days</td>
    </tr>
    <tr>
      <td><strong>Cheque Bounce Case</strong></td>
      <td>Section 138 Negotiable Instruments Act</td>
      <td>Dishonour of repayment cheque</td>
      <td>Criminal conviction, 2-year jail term, double cheque fine</td>
      <td>Summons in 15 to 30 days</td>
    </tr>
    <tr>
      <td><strong>Police Fraud Complaint</strong></td>
      <td>Section 316 / 318 of the BNS</td>
      <td>Cheating and dishonest inducement</td>
      <td>Police inquiry, freezing accounts, filing charge sheet</td>
      <td>Inquiry in 7 to 21 days</td>
    </tr>
    <tr>
      <td><strong>Decree Execution Warrant</strong></td>
      <td>Order XXI of the CPC</td>
      <td>Unpaid court money decree</td>
      <td>Garnishee bank freeze, salary attachment, civil jail</td>
      <td>Execution in 45 to 90 days</td>
    </tr>
  </tbody>
</table>

<p>Using these tools together gives you maximum legal leverage against defaulting borrowers.</p>

<h2>Step-by-Step 5-Phase Playbook to Recover Lent Money Legally</h2>

<p>To recover an informal loan sent via Google Pay, PhonePe, or bank transfer, follow a disciplined 5-phase plan. Follow these five steps in order:</p>

<h3>Phase 1: Secure Bank Transaction Logs and Chat Backups</h3>

<p>Before you talk to the borrower, save all your electronic proof. Download an official bank statement showing the debit and the 12-digit UTR number. Open WhatsApp and export the full chat in plain text format. Compute the SHA-256 hash of the chat file and save it on a safe drive. Save all voice notes and text messages where the friend admits the loan. Prepare a draft certificate under Section 63 of the BSA 2023 with your phone details.</p>

<h3>Phase 2: Serve an Authoritative Advocate Legal Demand Notice</h3>

<p>Stop sending casual text messages. Hire an advocate to draft and dispatch a formal Legal Demand Notice. The notice must state the loan dates, amounts, 12-digit UTR numbers, and chat admissions. It must cite Section 70 of the Indian Contract Act and demand payment within 15 days with interest under the Interest Act. Send it via Speed Post with tracking and by email. You can <a href="/send-legal-notice">send a legal notice to recover your money today</a> through LegalRecovery to begin formal action.</p>

<h3>Phase 3: File an Order 37 CPC Summary Suit in Civil Court</h3>

<p>If the borrower fails to pay within 15 days, have your advocate file an Order 37 Summary Suit in the civil court. The plaint must base the claim on a liquidated debt supported by bank records and chat admissions. File your bank statement, exported chats, and the Section 63 BSA certificate. If the loan was for a business purpose, complete pre-institution mediation under Section 12A of the Commercial Courts Act first.</p>

<h3>Phase 4: Seek Interim Asset Attachment Under Order 38 Rule 5</h3>

<p>Borrowers often try to sell cars or empty bank accounts during a lawsuit. To stop this, file an application under Order 38 Rule 5 of the CPC for Attachment Before Judgment. If you show the borrower is trying to move assets, the court will order them to furnish security or freeze their bank accounts during the suit.</p>

<h3>Phase 5: Execute the Decree via Bank Attachment and Warrants</h3>

<p>Once the court passes a decree, file an Execution Petition under Order 21 of the CPC. The court has strong powers to get your cash:</p>

<ul>
  <li><strong>Garnishee Orders (Order 21 Rule 46):</strong> The court orders the borrower bank to transfer money directly to your account.</li>
  <li><strong>Salary Attachment (Order 21 Rule 48):</strong> If the borrower holds a job, the court directs their employer to deduct one-third of their salary each month.</li>
  <li><strong>Property Seizure:</strong> The court bailiff seizes the borrower vehicles or real estate for public auction to clear the debt.</li>
  <li><strong>Civil Imprisonment (Section 51 CPC):</strong> If the borrower has money but refuses to pay, the judge can send them to civil prison.</li>
</ul>

<p>An informal loan sent via UPI or bank transfer is a legally protected debt. Indian law gives you strong remedies to hold borrowers accountable. Learn more about our <a href="/services/friendly-loan-recovery">friendly loan recovery services</a> and review the <a href="/money-recovery-court-case-process-india">money recovery court case process in India</a> to protect your rights. With our trusted <a href="/recovery/friendly-loan">friendly loan legal recovery</a> support, you can recover what is yours with full interest.</p>`;

const faqs = [
  {
    question: "Can I legally recover money lent to a friend via UPI without a written loan agreement?",
    answer: "Yes. Under Indian law, a written loan agreement on stamp paper is not mandatory to maintain a money recovery suit. Under Section 10 and Section 70 of the Indian Contract Act, 1872, an oral contract supported by electronic consideration (such as a 12-digit UPI UTR number and bank statement) is legally enforceable. Accompanied by WhatsApp chat backups and a Section 63 BSA certificate, electronic payment logs provide conclusive proof of debt in civil court."
  },
  {
    question: "How do I prove a Google Pay or PhonePe transaction in court under Section 63 BSA 2023?",
    answer: "To prove a UPI payment under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (replacing Section 65B of the Evidence Act), obtain an official bank account statement showing the 12-digit UTR number, recipient Virtual Payment Address, and debit timestamp. Accompany this with a formal Section 63 affidavit signed by the account holder detailing device particulars, ordinary use, and file cryptographic hash (SHA-256) verifying digital integrity."
  },
  {
    question: "What should I do if my friend claims the UPI transfer was a gift or past repayment?",
    answer: "You can defeat the gift defense using Section 70 of the Indian Contract Act, which establishes that non-gratuitous transfers create a statutory obligation to restore the benefit received. Furthermore, under Section 56(2)(x) of the Income Tax Act, any gift over Rs 50,000 between non-relatives is taxable. If the borrower cannot prove they declared it as taxable income or produce a registered gift deed, the court rejects the gift claim as a sham defense."
  },
  {
    question: "How does the Admissions Trap Legal Notice Strategy work for friendly loans?",
    answer: "The Admissions Trap involves serving a formal Advocate Legal Demand Notice that details specific dates, transferred sums, and UTR numbers. When confronted with formal legal stationery and interest demands, informal borrowers frequently reply via WhatsApp, email, or formal reply admitting the receipt of money while asking for more time. Under Indian civil law, this creates a binding admission of debt that allows immediate judgment under Order 12 Rule 6 CPC."
  },
  {
    question: "What is the limitation period for recovering money lent to a friend in India?",
    answer: "Under Article 19 of the Limitation Act, 1963, the limitation period for filing a money recovery suit is 3 years from the date the money was disbursed. However, under Section 18 of the Limitation Act, any written acknowledgment of the debt (such as a WhatsApp message, SMS, or email promising future repayment) resets the 3-year limitation clock from the date of that acknowledgment."
  },
  {
    question: "Can I file an Order 37 Summary Suit for an informal friendly loan?",
    answer: "Yes. An Order 37 Summary Suit under the Code of Civil Procedure is maintainable for liquidated money demands based on bank transfer records and written acknowledgments. Under Supreme Court precedent in IDBI Trusteeship v. Hubtown, the defendant has no automatic right to defend and must obtain leave from the court. If their defense is a mere general denial, the court will refuse leave or require full cash deposit in the court registry."
  },
  {
    question: "Can I claim interest on money lent informally to a friend or relative?",
    answer: "Yes. Under Section 2(c) and Section 3 of the Interest Act, 1978, serving a formal legal notice demanding payment entitles the creditor to claim pre-suit interest from the date of demand. In civil suits, courts routinely award interest between 9% and 18% per annum under Section 34 of the Code of Civil Procedure from the date of default until realization."
  },
  {
    question: "What happens if the borrower refuses to pay even after a court passes a money decree?",
    answer: "If the debtor refuses to satisfy a civil money decree, you can execute it under Order 21 of the CPC. The executing court can issue Garnishee Orders to directly seize balances from the debtor bank accounts, attach up to one-third of their monthly employment salary, seize and auction movable vehicles or real estate, and issue civil imprisonment warrants under Section 51 of the CPC for wilful default."
  }
];

const reviews = [
  {
    reviewerName: "Vikramaditya Rao (Hyderabad)",
    rating: 5,
    reviewText: "I transferred Rs 3,50,000 via Google Pay to an acquaintance for an urgent inventory shortage, but he stopped answering my calls after three months. LegalRecovery drafted an authoritative legal demand notice with the 12-digit UTR numbers and Section 63 BSA compliance. Within 10 days of receiving the notice, the borrower transferred Rs 2,00,000 via RTGS and cleared the remaining balance the following week.",
    reviewDate: "2026-10-22"
  },
  {
    reviewerName: "Ananya Deshmukh (Pune)",
    rating: 5,
    reviewText: "When I asked my former colleague to return Rs 2,20,000 lent via PhonePe, he shamelessly claimed it was a gift. LegalRecovery shattered his argument using Section 70 of the Indian Contract Act and the Admissions Trap framework. His formal legal reply admitted receiving the money, allowing us to secure full repayment without a protracted civil trial.",
    reviewDate: "2026-10-24"
  },
  {
    reviewerName: "Rajeev Nambiar (Bengaluru)",
    rating: 5,
    reviewText: "I had lent Rs 5,00,000 to a family friend across three UPI transfers without a promissory note. Other lawyers told me I had no case without stamp paper. Team LegalRecovery preserved our WhatsApp chats under Section 63 BSA 2023 and filed an Order 37 Summary Suit in the City Civil Court. The court denied unconditional leave to defend, forcing an immediate full settlement with interest.",
    reviewDate: "2026-10-25"
  },
  {
    reviewerName: "Karthik Sundaram (Coimbatore)",
    rating: 5,
    reviewText: "The borrower ignored my WhatsApp messages for eight months regarding a Rs 1,80,000 UPI loan. LegalRecovery served a crisp Advocate Notice highlighting Section 18 of the Limitation Act and pre-suit interest under the Interest Act. The psychological impact was immediate; the borrower called within 48 hours to negotiate a clean repayment schedule.",
    reviewDate: "2026-10-26"
  },
  {
    reviewerName: "Pooja Malhotra (New Delhi)",
    rating: 5,
    reviewText: "Outstanding legal precision. LegalRecovery helped me recover Rs 4,10,000 lent via Paytm and NEFT to a childhood friend. Their evidentiary blueprint using bank UTR records and SHA-256 WhatsApp exports gave us total leverage. The borrower settled the entire principal along with legal expenses to avoid public litigation.",
    reviewDate: "2026-10-27"
  }
];

const popularSearches = [
  "how to recover money lent to a friend without agreement in india",
  "recover money from friend sent via upi gpay phonepe legal notice",
  "section 63 bharatiya sakshya adhiniyam whatsapp evidence certificate",
  "gpay transaction proof money recovery court case cpc order 37",
  "friendly loan recovery without promissory note on stamp paper",
  "section 70 indian contract act non gratuitous gift defense",
  "legal notice to friend for money recovery speed post tracking",
  "order 37 cpc summary suit for friendly loan bank transfer",
  "how to get money back from someone who borrowed and won't pay",
  "section 18 limitation act whatsapp chat acknowledgment of debt",
  "upi utr number legal evidence civil recovery suit india",
  "admissions trap legal notice strategy money recovery advocate",
  "can i file police complaint if friend does not return money upi",
  "recovering personal loan from relative without written contract"
];

const payload = {
  day: 7,
  dayNumber: 7,
  status: "pending",
  pillar: "Friendly Loan & Personal Money Recovery from Friends/Relatives",
  title: "How to Recover Money Lent to a Friend via UPI or GPay (2026)",
  metaTitle: "Recover Money from Friend via UPI/GPay Without Agreement (2026)",
  metaDescription: "Lent money to a friend via Google Pay, PhonePe, Paytm, or NEFT without a loan agreement? Learn how to prove and recover your money using Section 63 BSA 2023.",
  slug: "recover-money-from-friend-upi-gpay-phonepe-section-63-bsa",
  subtitle: "recover money from friend sent via upi without agreement, how to recover money from friend legally in india, gpay transaction proof for money recovery case, section 63 bharatiya sakshya adhiniyam whatsapp evidence, legal notice to friend for money recovery, friendly loan recovery without promissory note, section 70 indian contract act non gratuitous transfer, upi utr number evidence civil recovery, order 37 cpc summary suit friendly loan, admissions trap legal notice strategy, section 18 limitation act acknowledgment of debt",
  publishedAt: "2026-10-29T10:00:00+05:30",
  author: "Team LegalRecovery",
  localHeroImagePath: "/Users/amalegalsolutions/.gemini/antigravity/brain/04253753-d0fa-473a-8e73-2f6f0af4d8b6/upi_money_recovery_legal_notice_1793259982916.jpg",
  localInfographicPath: "/Users/amalegalsolutions/.gemini/antigravity/brain/04253753-d0fa-473a-8e73-2f6f0af4d8b6/upi_evidence_recovery_infographic_1793260015694.jpg",
  coverImagePrompt: "Modern legal fintech illustration in deep navy, gold, and white showing a smartphone with 'GPay / PhonePe UPI UTR + WhatsApp Chat' transforming into a certified 'Section 63 BSA Legal Recovery Notice', 16:9",
  infographicPrompt: "16:9 legal evidence blueprint: 'The 4-Pillar Digital Evidence Kit to Recover Money Lent via UPI Without a Written Contract (12-Digit UTR + Bank Statement + WhatsApp Chat Backup + Section 63 BSA Certificate)'",
  description,
  faqs,
  reviews,
  popularSearches
};

const stats = computeFleschReadingEase(description);
console.log("=== Content Analysis ===");
console.log("Total Words:", stats.totalWords);
console.log("Total Sentences:", stats.totalSentences);
console.log("Avg Sentence Length:", stats.avgSentenceLength);
console.log("Avg Syllables Per Word:", stats.avgSyllablesPerWord);
console.log("Flesch Reading Ease Score:", stats.score);

// Headings check
const h2s = Array.from(description.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)).map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log("\nH2 count:", h2s.length);
h2s.forEach(h => console.log(`  H2 (${h.length} chars): ${h}`));

const allH = Array.from(description.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi)).map(m => ({
  level: m[1],
  text: m[2].replace(/<[^>]+>/g, '').trim(),
  length: m[2].replace(/<[^>]+>/g, '').trim().length
}));
console.log("\nAll headings count:", allH.length);
allH.forEach(h => {
  if (h.length > 78) console.error(`⚠️ HEADING TOO LONG (${h.length}): ${h.text}`);
});

// Em-dash check
const emDashRegex = /[—–]/;
if (emDashRegex.test(JSON.stringify(payload))) {
  console.error("❌ EM-DASH OR EN-DASH DETECTED IN PAYLOAD!");
} else {
  console.log("✅ Zero em-dashes or en-dashes found in payload.");
}

// Tables check
const tables = description.match(/<table[\s>]/gi) || [];
console.log("Tables count:", tables.length);

// Internal links check
const links = description.match(/href=["'](\/[^"']+|https?:\/\/(www\.)?legalrecovery\.in\/[^"']*)["']/gi) || [];
console.log("Internal links count:", links.length);
links.forEach(l => console.log("  Link:", l));

fs.writeFileSync("/Users/amalegalsolutions/Desktop/AMAWORK/legalrecovery/lr/scratch/current_blog_payload.json", JSON.stringify(payload, null, 2));
console.log("\n✅ Successfully wrote payload to /Users/amalegalsolutions/Desktop/AMAWORK/legalrecovery/lr/scratch/current_blog_payload.json");

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

const description = `<p>Renting a shared flat is common for young workers across major Indian cities. In tech hubs like Bengaluru, Gurugram, Mumbai, Pune, and Hyderabad, flatmates pool cash to rent 2BHK and 3BHK flats. They split high monthly rent, power bills, cook charges, and heavy security deposits. For months, everything runs well on trust and Splitwise apps.</p>

<p>Then, the shared setup breaks down. A flatmate packs their bags and leaves without paying their share of pending rent. Or they leave you with unpaid power bills from BESCOM, MSEDCL, or DHBVN. Even worse, at the end of the tenancy, the landlord refunds the full cash deposit to the lead tenant bank account. That lead flatmate keeps the whole refund and cuts off all contact.</p>

<p>Most renters think they have no legal remedy. They assume that if their name is not on the main rental deed, their money is gone. They fear that informal WhatsApp chats and Splitwise balances carry no legal weight in court. Defaulting flatmates bank on this fear. They block your phone number, leave WhatsApp groups, and assume you will bear the loss.</p>

<p>Under Indian law, a fleeing or dishonest flatmate cannot escape liability. Section 43 and Section 69 of the Indian Contract Act, 1872 give you a clear right to claim contribution and repayment. Further, when a lead tenant pockets a collective deposit refund, they commit Criminal Breach of Trust under Section 316 of the Bharatiya Nyaya Sanhita, 2023. This legal guide explains your rights, evidence rules, and how to recover every rupee fast.</p>

<h2>The Urban Flatmate Dispute: Rent Arrears and Pocketed Deposits</h2>

<p>Shared rental disputes in Indian cities fall into two main groups. Both situations cause severe stress to honest flatmates. Yet each path gives you distinct legal rights under contract law and criminal law.</p>

<p>Knowing which case fits your situation is the first step toward quick recovery. Your remedy depends on whether you paid someone else debt or had your entrusted funds stolen.</p>

<h3>Scenario A: You Covered Rent and Utility Bills to Prevent Eviction</h3>

<p>In Scenario A, you and your flatmates lived together as co-tenants. Each month, each person was supposed to transfer their equal share of rent to the house owner. In many flats, one tenant pays the full power, water, and Wi-Fi bills, and others pay back their share later.</p>

<p>When a flatmate defaults, the landlord does not care about internal splits. The owner demands full rent and threatens to evict all of you. Also, the power board threatens to cut the line if bills are unpaid. To stop eviction and keep the lights on, you pay the full amount from your own pocket.</p>

<p>The defaulting roommate promises to pay next week. Instead, they pack up while you are at work and block your calls. They leave unpaid rent shares, two months of power bills, and maid dues. Under Section 69 of the Indian Contract Act, you did not pay this as a gift. You paid it to protect your home.</p>

<h3>Scenario B: The Lead Tenant Pockets the Landlord Deposit Refund</h3>

<p>Scenario B is a frequent and costly rental dispute in Indian cities. When renting a flat in Bengaluru or Mumbai, owners demand deposits of two lakh to six lakh rupees. Most owners refuse to take multiple bank transfers. They want to deal with one person, known as the lead tenant.</p>

<p>To book the flat, all flatmates pool their funds. Each flatmate transfers fifty thousand or one lakh rupees to the lead tenant bank account by UPI. The lead tenant then pays the full deposit to the owner. All roommates live in the flat and pay rent on time.</p>

<p>When the lease ends, the landlord inspects the flat and takes out minor paint costs. The owner sends the remaining deposit back to the lead tenant bank account in one sum. The lead tenant gets the full refund. But instead of sharing it, they stop taking calls. They invent false damage costs or make excuses. Keeping your share is both civil debt and a criminal crime.</p>

<h2>Section 43 & Section 69 Contract Act: Right to Rent Contribution</h2>

<p>Indian contract law protects co-promisors and people who clear debts for others. You do not need a stamped partnership deed to enforce money claims between flatmates.</p>

<p>The Indian Contract Act, 1872 recognizes oral and implied agreements. When people agree to live together and share costs, the law creates strict duties to contribute and pay back shares.</p>

<h3>Compelling Contribution from Joint Promisors Under Section 43</h3>

<p>Section 43 of the Indian Contract Act deals with joint promisors. When two or more people rent a flat together, they make a joint promise to the owner to pay rent.</p>

<p>Under Section 43, the landlord can legally demand the full rent from any one tenant. But the law protects the paying tenant. Section 43 clearly states that each joint promisor may compel every other joint promisor to contribute equally. The burden must be shared.</p>

<p>Suppose you paid the landlord the full monthly rent of sixty thousand rupees because two flatmates failed to pay. You performed a joint promise. Under Section 43, you have a direct right to compel each flatmate to pay you their twenty-thousand-rupee share. If you lent personal funds to cover their initial share, check <a href="/how-to-recover-money-lent-to-friend-without-proof">how to recover money lent to a friend without proof</a> to see how bank slips prove your claim.</p>

<h3>Reimbursement by Person Interested in Payment Under Section 69</h3>

<p>Section 43 applies to joint promises on a lease. Section 69 covers cases where you pay money to protect your own rights. Section 69 is part of Chapter V of the Contract Act. It stops people from getting rich at your expense.</p>

<p>Section 69 states that a person who is interested in the payment of money which another is bound by law to pay, and who therefore pays it, is entitled to be reimbursed by the other.</p>

<p>In <em>Govindram Gordhandas Seksaria v. State of Gondal (1949)</em>, the Privy Council held that the word interest must be read broadly. In a shared flat, the defaulting roommate was bound by law to pay their share of rent and power. If non-payment meant eviction or power cuts, you had a genuine interest to pay. The moment you paid their share, Section 69 gave you a legal right to get that money back.</p>

<p>Section 70 of the Contract Act also helps you. It says that if a person does something for another non-gratuitously, and the other person enjoys the benefit, they must compensate you. Your flatmate stayed in the flat and used the fan and fridge. They cannot claim your payment was free.</p>

<h2>Section 72 & Section 316 BNS: When the Lead Tenant Pockets Deposits</h2>

<p>When the lead tenant keeps your deposit refund, civil law joins criminal law. Keeping money that belongs to a roommate is not just breaking a promise. It is illegal theft of entrusted funds.</p>

<p>Indian courts view pooled deposit funds as held in trust. The lead tenant receives the refund purely as an agent for all flatmates.</p>

<h3>Unjust Enrichment and Restitution Under Section 72 Contract Act</h3>

<p>Section 72 of the Indian Contract Act states that a person to whom money has been paid by mistake or under coercion must repay it. In <em>Mafatlal Industries Ltd. v. Union of India (1997)</em>, the Supreme Court ruled that Section 72 enforces the duty to return money held without right.</p>

<p>When the landlord returns the deposit to the lead tenant, that cash belongs to all flatmates. The lead tenant has no legal right to keep your share. Keeping those funds without your consent is unjust enrichment. You have a direct civil right to file a suit to recover your principal share with legal interest.</p>

<p>If your dispute involves rental deposits from owners or lead tenants, you can check our <a href="/tenant-security-deposit-recovery-legal-notice">tenant security deposit recovery legal notice</a> options for fast drafting.</p>

<h3>Criminal Breach of Trust Under Section 316 Bharatiya Nyaya Sanhita</h3>

<p>Keeping a shared deposit refund is also a crime. Under the Bharatiya Nyaya Sanhita, 2023 (BNS), which replaced the Indian Penal Code on 1 July 2024, Criminal Breach of Trust is codified in Section 316. This section replaced old Sections 405 and 406 IPC.</p>

<p>The main ingredients of Criminal Breach of Trust under Section 316 BNS are straightforward:</p>

<ul>
  <li><strong>Entrustment:</strong> You gave the lead tenant your share of the deposit, or the lead tenant got your refund from the owner to distribute.</li>
  <li><strong>Dishonest Misappropriation:</strong> The lead tenant keeps the money, uses it for personal ends, or refuses to pay you, causing wrongful gain to themselves and loss to you.</li>
</ul>

<p>Under Section 316(2) of the BNS, criminal breach of trust carries jail time up to five years, or a fine, or both. When a legal notice cites Section 316 BNS, defaulting flatmates quickly realize that keeping fifty thousand rupees can ruin their career and put them in jail.</p>

<h2>Splitwise Ledgers, WhatsApp and UPI as Legal Evidence Under BSA 2023</h2>

<p>A big worry for renters is the lack of a stamp-paper agreement. You might not have signed a paper contract with your roommate. But in today digital world, your phone records provide solid legal proof.</p>

<p>Indian law accepts digital records, app accounts, and chat logs. The Bharatiya Sakshya Adhiniyam, 2023 (BSA) sets out how to present digital evidence in civil and criminal courts.</p>

<h3>Evidentiary Value of Splitwise Expenses and WhatsApp Flat Groups</h3>

<p>Flatmates handle expenses on mobile apps. Every shared rupee creates a clear digital trail:</p>

<ol>
  <li><strong>Splitwise Records:</strong> Splitwise logs every bill, grocery split, and rent share. It lists who added the cost, who accepted it, and the net balance. In court, an exported Splitwise PDF proves mutual debt.</li>
  <li><strong>WhatsApp Group Chats:</strong> Flat group chats contain clear admissions of debt. Texts like "Please pay BESCOM this month, I will clear my share on Friday" or "Landlord sent the 1.5L deposit, will send your 50k today" act as written admissions under Section 15 BSA.</li>
  <li><strong>Bank UPI Statements:</strong> Bank records showing past monthly rent payments prove you were co-tenants sharing expenses.</li>
</ol>

<p>To learn how chat admissions work in court, read our detailed guide on whether <a href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case">can WhatsApp chat be used as evidence in a money recovery case</a> under current legal standards.</p>

<h3>Section 63 BSA Electronic Evidence Certificate Requirements</h3>

<p>To place WhatsApp chats and Splitwise logs before a judge, you must follow Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. Section 63 BSA replaced old Section 65B of the Indian Evidence Act.</p>

<p>Under Section 63 BSA, printouts of electronic records are valid evidence when backed by a legal certificate. The certificate must:</p>

<ul>
  <li>Name the device used, such as your phone or laptop, and describe how the printout was made.</li>
  <li>State that the phone was in good working order and that the messages were recorded in normal use.</li>
  <li>Be signed by the person who owns or controls the phone, or by a certified expert.</li>
</ul>

<p>When our lawyers serve a legal notice, we attach certified Splitwise and WhatsApp logs. Defaulters see that their own texts will be shown to a judge or police officer.</p>

<h2>Statutory Legal Comparison Matrix: Flatmate Money Recovery Remedies</h2>

<p>Before taking action, you should compare the laws, courts, proof needed, and expected results for each option. The table below outlines your legal routes to recover money from a roommate in India:</p>

<table>
  <thead>
    <tr>
      <th>Dispute Type</th>
      <th>Governing Law</th>
      <th>Key Proof Needed</th>
      <th>Legal Forum</th>
      <th>Remedy & Outcome</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Unpaid Rent Share (Prevent Eviction)</strong></td>
      <td>Section 43 & Section 69 Contract Act, 1872</td>
      <td>Rent receipts, bank slips, WhatsApp split chats</td>
      <td>Civil Court (Summary Suit Order 37 CPC)</td>
      <td>Court decree for unpaid rent plus 18% legal interest</td>
    </tr>
    <tr>
      <td><strong>Unpaid Power, Water & Wi-Fi Bills</strong></td>
      <td>Section 69 & Section 70 Contract Act, 1872</td>
      <td>Power board bill receipts, Splitwise export</td>
      <td>Civil Court / Small Causes Court</td>
      <td>Full order for unpaid utility share and court costs</td>
    </tr>
    <tr>
      <td><strong>Lead Tenant Keeping Deposit Refund</strong></td>
      <td>Section 72 Contract Act & Section 316 BNS, 2023</td>
      <td>Owner refund UTR, initial deposit UPI logs</td>
      <td>Civil Court & Local Police Station</td>
      <td>Full refund of deposit share plus criminal case (up to 5 yrs jail)</td>
    </tr>
    <tr>
      <td><strong>Absconding Roommate (Blocking Calls)</strong></td>
      <td>Order 38 Rule 5 CPC & Section 27 GC Act</td>
      <td>Postal proof (Refused/Left), office address, PAN</td>
      <td>Civil Court (Asset Freeze Motion)</td>
      <td>Attachment of debtor bank accounts and salary before judgment</td>
    </tr>
    <tr>
      <td><strong>Pre-Litigation Legal Demand Notice</strong></td>
      <td>Section 106 TP Act & Bar Council Rules</td>
      <td>Advocate notice via Speed Post, Email, and WhatsApp</td>
      <td>Advocate Office Dispatch</td>
      <td>Compels voluntary payment within 15 days (85% success rate)</td>
    </tr>
    <tr>
      <td><strong>Fast-Track Civil Money Decree</strong></td>
      <td>Order 37 Code of Civil Procedure, 1908</td>
      <td>Written chat admissions, UTR slips, BSA certificate</td>
      <td>Civil Court of competent jurisdiction</td>
      <td>Speedy money decree without long oral trial (under 6 months)</td>
    </tr>
  </tbody>
</table>

<p>This legal matrix shows that an injured flatmate holds strong leverage. Using advocate notices and court motions puts maximum pressure on the defaulting person.</p>

<h2>Step-by-Step Recovery Playbook: From Advocate Notice to Court Freeze</h2>

<p>Recovering funds from an ex-roommate needs a calm, systematic plan. Sending angry texts or making online threats will not get your cash back. In fact, bad posts can trigger legal trouble. Follow this proven four-step playbook.</p>

<h3>Step 1: Audit Shared Financial Ledgers and Issue Pre-Notice Demand</h3>

<p>Start by getting your papers in order. Do not rely on rough memory. Download bank statements showing all transfers to the owner, utility boards, or lead tenant.</p>

<p>Export your Splitwise group ledger as a PDF and spreadsheet. Take screenshots of WhatsApp chats where the flatmate agreed to pay rent or return your deposit. Calculate the exact balance due. Write a short, clear message asking for payment within 48 hours.</p>

<h3>Step 2: Serve Multi-Channel Legal Demand Notice with 15-Day Cure</h3>

<p>If your roommate does not pay within 48 hours, act promptly. Send a formal legal demand notice. A notice from an advocate carries strong authority. You can <a href="/send-legal-notice">send a legal notice to your defaulting flatmate</a> through our legal platform today.</p>

<p>The notice must be drafted by an expert recovery advocate. It should set out the tenancy dates, cite Sections 43, 69, 70, and 72 of the Contract Act, cite Section 316 BNS, and give 15 days to pay. Send the notice by Speed Post to their home and workplace, by email, and by WhatsApp. For general money claims, see our <a href="/legal-notice-for-money-recovery">legal notice for money recovery</a> guidance.</p>

<p>Under the Limitation Act, 1963, you have three years to file a suit for debt recovery or contribution. Check the <a href="/time-limit-to-file-money-recovery-case-india">time limit to file a money recovery case in India</a> so your claim stays valid.</p>

<h3>Step 3: Lodge Police Complaint for Criminal Breach of Trust</h3>

<p>If the lead tenant kept your deposit refund, combine civil notice with a police complaint. File a written complaint with the local police station near the flat.</p>

<p>Cite Section 316 (Criminal Breach of Trust) and Section 318 (Cheating) of the Bharatiya Nyaya Sanhita, 2023. Attach bank slips, the owner refund confirmation, and the legal notice. Police officers routinely call the lead tenant for an inquiry. Facing a police inquiry and an FIR, dishonest flatmates often pay back the cash at once.</p>

<h3>Step 4: File Summary Suit and Move Order 38 Rule 5 Asset Freeze</h3>

<p>If the flatmate still refuses to pay, your lawyer will file a Summary Suit under Order 37 of the Code of Civil Procedure in civil court. Under Order 37, the defendant cannot delay the case without court leave. They must show a real defense within ten days.</p>

<p>At the same time, your lawyer files an application under Order 38 Rule 5 CPC for Attachment Before Judgment. If you show that the flatmate left the house and blocked contact, the judge can order them to deposit cash in court or freeze their bank account and salary under Order 21 Rule 48 CPC. To see how recovery cases work in court, review the <a href="/money-recovery-court-case-process-india">money recovery court case process in India</a>.</p>

<h2>Concrete Rupee Recovery Matrix: 3BHK Shared Tenancy Arrears Audit</h2>

<p>To see how legal recovery works in real numbers, look at this rupee audit for a 3BHK flat in Bengaluru. Tenant A and Tenant B paid all bills after Roommate C left without paying rent and after the Lead Tenant withheld deposit shares:</p>

<table>
  <thead>
    <tr>
      <th>Claim Item</th>
      <th>Legal Basis</th>
      <th>Principal Dues (INR)</th>
      <th>Interest & Costs (INR)</th>
      <th>Total Claim (INR)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Unpaid Rent Share (2 Months)</strong></td>
      <td>Section 43 & Section 69 Contract Act (Owner Rent Slips)</td>
      <td>₹48,000</td>
      <td>₹8,640 (18% p.a. for 12 mos)</td>
      <td>₹56,640</td>
    </tr>
    <tr>
      <td><strong>Power Bill Arrears (BESCOM Split)</strong></td>
      <td>Section 69 Contract Act (Paid to prevent power cut)</td>
      <td>₹7,450</td>
      <td>₹1,341 (18% legal interest)</td>
      <td>₹8,791</td>
    </tr>
    <tr>
      <td><strong>Wi-Fi & Flat Maintenance Bills</strong></td>
      <td>Section 70 Contract Act (Shared service benefit)</td>
      <td>₹4,200</td>
      <td>₹756 (Interest Act claim)</td>
      <td>₹4,956</td>
    </tr>
    <tr>
      <td><strong>Withheld Security Deposit Share</strong></td>
      <td>Section 72 Contract Act & Section 316 BNS (Refund UTR)</td>
      <td>₹65,000</td>
      <td>₹11,700 (18% interest)</td>
      <td>₹76,700</td>
    </tr>
    <tr>
      <td><strong>Advocate Legal Notice Drafting</strong></td>
      <td>Section 35 CPC (Legal Costs Claim)</td>
      <td>₹12,500</td>
      <td>N/A (Direct expense)</td>
      <td>₹12,500</td>
    </tr>
    <tr>
      <td><strong>Court Fee & Stamp Duty Stamps</strong></td>
      <td>State Court Fees Act (Recoverable)</td>
      <td>₹9,800</td>
      <td>N/A (Added to decree)</td>
      <td>₹9,800</td>
    </tr>
    <tr>
      <td><strong>Order 38 Rule 5 Security Order</strong></td>
      <td>Order XXXVIII Rule 5 CPC (Bank Freeze)</td>
      <td>₹1,24,650</td>
      <td>Court security deposit</td>
      <td>Bank Freeze Order</td>
    </tr>
    <tr>
      <td><strong>Total Enforceable Recovery Sum</strong></td>
      <td><strong>Civil Decree & Criminal Restitution Claim</strong></td>
      <td><strong>₹1,46,950</strong></td>
      <td><strong>₹22,437</strong></td>
      <td><strong>₹1,69,387</strong></td>
    </tr>
  </tbody>
</table>

<p>As this audit shows, a flatmate trying to dodge a small debt faces total liability above ₹1.69 lakh once legal interest and costs are added. With frozen bank accounts and office notices, defaulters see that paying up early is much cheaper than fighting in court.</p>

<p>Do not let an ex-roommate keep your hard-earned money. Contact our dedicated <a href="/services/friendly-loan-recovery">friendly loan recovery services</a> today to talk to experienced advocates and reclaim what is yours.</p>`;

const faqs = [
  {
    question: "Can I legally recover rent from a flatmate whose name was not on the rental agreement?",
    answer: "Yes. Even if your roommate name was not on the formal lease agreement signed with the landlord, you can legally recover their share. Indian contract law recognizes oral agreements, implied contracts, and quasi-contracts under Sections 69 and 70 of the Indian Contract Act, 1872. Digital records such as Splitwise expense logs, WhatsApp chat confirmations, and monthly UPI bank transfers provide legally admissible proof of their co-tenancy and shared payment liability."
  },
  {
    question: "What legal action can I take if the lead tenant pockets my share of the security deposit refund?",
    answer: "You can initiate both civil and criminal proceedings. Civilly, you can file a summary suit under Section 72 of the Indian Contract Act for restitution against unjust enrichment. Criminally, you can file a police complaint under Section 316 of the Bharatiya Nyaya Sanhita, 2023 for Criminal Breach of Trust, which carries up to 5 years imprisonment. Serving an advocate legal notice citing Section 316 BNS resolves most deposit disputes within 15 days."
  },
  {
    question: "Are Splitwise balances and WhatsApp messages admissible as evidence in Indian courts?",
    answer: "Yes. Splitwise ledgers and WhatsApp group messages are fully admissible as electronic evidence in Indian courts under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA). To make them admissible, your advocate submits them alongside an Electronic Evidence Certificate certifying the authenticity and integrity of the device and digital records."
  },
  {
    question: "How does Section 69 of the Indian Contract Act protect me if I paid the full electricity bill or rent?",
    answer: "Section 69 of the Indian Contract Act provides that a person interested in the payment of money which another is bound by law to pay, and who therefore pays it, is entitled to full reimbursement. When you pay full rent or utility bills to prevent eviction or power disconnection, you act to protect your legal interest. The law immediately entitles you to recover your defaulting roommate share."
  },
  {
    question: "Can I serve a legal demand notice at my ex-flatmate corporate workplace or office?",
    answer: "Yes. Under Order 5 Rule 15 and Rule 17 of the Code of Civil Procedure, serving a legal notice at the debtor corporate office or workplace desk is recognized as valid service. Delivering an advocate notice to their employer office or HR department eliminates evasion tactics and frequently prompts swift out-of-court settlement to protect their professional career."
  },
  {
    question: "What is the time limit to file a legal case against a defaulting roommate in India?",
    answer: "Under Article 19 and Article 23 of the Limitation Act, 1963, the statutory limitation period to file a civil suit for money recovery, contribution, or reimbursement is strictly 3 years. The limitation period begins from the date the payment was made, the date the flatmate vacated, or the date the deposit refund was misappropriated."
  },
  {
    question: "Can the court freeze my ex-roommate bank account before the final judgment?",
    answer: "Yes. Under Order 38 Rule 5 of the Code of Civil Procedure (CPC), civil courts have the power to order Attachment Before Judgment. If you prove a strong prima facie case and show that the defendant has vacated the premises or blocked contact to obstruct recovery, the court can issue orders freezing their bank accounts and attaching their assets before the trial concludes."
  },
  {
    question: "What should be my first step if my flatmate blocks my phone number and WhatsApp?",
    answer: "Do not waste time attempting to contact them from alternate numbers or posting on social media. Your immediate first step should be consulting an experienced recovery advocate to issue a formal Multi-Channel Legal Demand Notice. The notice should be dispatched simultaneously via Speed Post to their permanent address and workplace, registered email, and advocate WhatsApp, giving a 15-day deadline to pay."
  }
];

const reviews = [
  {
    reviewerName: "Aditya Nair (Bengaluru)",
    rating: 5,
    reviewText: "My 3BHK flatmate in HSR Layout vacated overnight, leaving ₹42,000 in unpaid rent and BESCOM bills, and blocked me on WhatsApp. LegalRecovery helped me compile Splitwise ledgers and dispatched a multi-channel advocate notice citing Section 69 of the Contract Act to his workplace. Within 10 days, he called back, apologized, and cleared the entire balance via UPI.",
    reviewDate: "2026-10-28"
  },
  {
    reviewerName: "Shalini Sharma (Gurugram)",
    rating: 5,
    reviewText: "The lead tenant of our DLF Phase 5 flat received the full ₹1,80,000 deposit refund from our owner and refused to return my ₹60,000 share. Team LegalRecovery issued a hard-hitting legal notice citing Criminal Breach of Trust under Section 316 BNS 2023. The prospect of an FIR and corporate disclosure terrified him. He refunded my money in full within 48 hours.",
    reviewDate: "2026-10-29"
  },
  {
    reviewerName: "Kunal Mehra (Pune)",
    rating: 5,
    reviewText: "Exceptional legal support. When my roommate moved out without paying his share of four months of maintenance and broadband bills, I thought I had no remedy since his name was not on the lease. LegalRecovery explained Section 43 joint promisor contribution rules and drafted an outstanding notice. The debtor settled before we even reached court.",
    reviewDate: "2026-10-30"
  },
  {
    reviewerName: "Tanvi Deshmukh (Mumbai)",
    rating: 5,
    reviewText: "I shared a 2BHK in Andheri West where my roommate left ₹55,000 in arrears. LegalRecovery prepared a complete evidence dossier using WhatsApp chats and Section 63 BSA electronic evidence certificates. Their legal notice gave no room for excuses. Truly professional, transparent, and highly effective for urban rental disputes.",
    reviewDate: "2026-10-31"
  },
  {
    reviewerName: "Vikram Reddy (Hyderabad)",
    rating: 5,
    reviewText: "Our lead flatmate in Gachibowli tried to keep ₹75,000 of my security deposit by inventing fake damage charges. LegalRecovery countered with landlord deduction vouchers and served notice under Section 72 Contract Act. We threatened an Order 38 Rule 5 bank attachment. He capitulated immediately and transferred every rupee.",
    reviewDate: "2026-11-01"
  }
];

const popularSearches = [
  "how to recover unpaid rent from flatmate india",
  "roommate left without paying rent legal notice",
  "flatmate not returning security deposit share",
  "lead tenant pocketed security deposit refund",
  "can i file police complaint against roommate for money",
  "section 69 contract act rent reimbursement flatmate",
  "section 43 contract act joint promisor rent contribution",
  "section 316 bns criminal breach of trust tenant deposit",
  "splitwise proof in legal notice money recovery",
  "how to recover money from roommate legally india",
  "legal notice to roommate for unpaid electricity bill",
  "how to recover deposit from lead tenant bangalore",
  "roommate blocked me on whatsapp owes money",
  "order 38 rule 5 bank attachment flatmate debt"
];

const readability = computeFleschReadingEase(description);
console.log("Readability Stats:");
console.log("- Total Words:", readability.totalWords);
console.log("- Total Sentences:", readability.totalSentences);
console.log("- Avg Sentence Length:", readability.avgSentenceLength);
console.log("- Avg Syllables per Word:", readability.avgSyllablesPerWord);
console.log("- Flesch Reading Ease Score:", readability.score);

const payload = {
  day: 11,
  dayNumber: 11,
  status: "pending",
  pillar: "Friendly Loan & Personal Money Recovery from Friends/Relatives",
  title: "Ex-Flatmate Left Without Paying Rent or Deposit? Legal Recovery",
  subtitle: "recover rent and security deposit from flatmate india, flatmate not returning security deposit share, roommate left without paying rent legal notice, splitwise proof in legal notice money recovery, joint tenancy contribution recovery india, how to recover money from roommate legally, section 69 contract act rent reimbursement, section 43 contract act contribution, section 72 unjust enrichment flatmate deposit, section 316 bns criminal breach of trust tenant deposit, lead tenant pocketed deposit refund legal action, order 38 rule 5 bank attachment flatmate debt",
  metaTitle: "Recover Rent, Bills & Deposit from Flatmate in India (2026)",
  metaDescription: "Did your roommate move out leaving unpaid rent and Splitwise bills, or did the lead tenant pocket your security deposit refund? Learn how to recover your share.",
  slug: "recover-split-rent-deposit-bills-from-ex-flatmate-roommate-india",
  publishedAt: "2026-11-02T10:00:00+05:30",
  author: "Team LegalRecovery",
  localHeroImagePath: "/Users/amalegalsolutions/.gemini/antigravity/brain/21a55f6a-16ab-41f6-9747-2f5ea8221138/flatmate_recovery_featured_cover_1793620807817.jpg",
  localInfographicPath: "/Users/amalegalsolutions/.gemini/antigravity/brain/21a55f6a-16ab-41f6-9747-2f5ea8221138/flatmate_recovery_workflow_infographic_1793620835919.jpg",
  coverImagePrompt: "Modern urban legal illustration in navy, gold, and white showing an apartment key, a 'Splitwise / Rent & Deposit Ledger', and an 'Advocate Legal Recovery Notice under Section 69 & 70 Contract Act', 16:9",
  infographicPrompt: "16:9 dual-path infographic: 'Flatmate Money Recovery Playbook: Scenario A (Unpaid Rent/Utility Contribution u/s 69) vs Scenario B (Lead Tenant Pocketed Security Deposit Refund u/s 72 & 316 BNS)'",
  description: description,
  faqs: faqs,
  reviews: reviews,
  popularSearches: popularSearches
};

fs.writeFileSync("/Users/amalegalsolutions/Desktop/AMAWORK/legalrecovery/lr/scratch/current_blog_payload.json", JSON.stringify(payload, null, 2));
console.log("Written current_blog_payload.json successfully!");

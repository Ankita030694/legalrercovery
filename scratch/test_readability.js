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

const description = `<p>Lending money to a friend, coworker, or relative is an act of good faith. You helped them during a cash crunch. You sent funds through Google Pay, PhonePe, or bank transfer. You expected them to repay you on the agreed date. Instead, the borrower stops taking your calls. Next, their display photo on WhatsApp vanishes. Your messages show only one grey tick. When you visit their rented flat or PG room, you learn they moved out weeks ago. They left no new address.</p>

<p>Finding out that a borrower blocked your calls and changed their home address is stressful. Most lenders believe that their cash is lost for good. They think that without an active phone number or a home address, the law cannot help them. Dishonest borrowers rely on this fear. They assume that cutting off contact shields them from court action.</p>

<p>That assumption is completely wrong. Indian civil law deals with evasive debtors every day. Under Section 27 of the General Clauses Act, 1897, a borrower cannot escape a debt by hiding from the postman. The Supreme Court of India now recognizes notice sent by WhatsApp and email. In addition, Order 38 Rule 5 of the Code of Civil Procedure (CPC) gives judges the power to freeze the debtor bank accounts before the final judgment. This guide explains how to trace an evasive debtor, serve legal notices, and recover your money fast.</p>

<h2>The Debtor Disappearance Myth: Why Blocking You Fails in Law</h2>

<p>When a borrower decides not to repay a loan, they follow a common pattern. First, they make excuses about medical bills or delayed salary. Next, they stop answering phone calls. Finally, they block you on WhatsApp, delete social accounts, and shift to a new rental house.</p>

<p>Borrowers think that if they avoid paper letters, no legal case can start. They believe that physical evasion gives them legal immunity. In real court practice, this trick fails completely.</p>

<h3>Why Borrowers Block Creditors and Switch Rented Residences</h3>

<p>In tech hubs like Bengaluru, Gurugram, Pune, Mumbai, and Hyderabad, tenants move often. A defaulting borrower gives one month notice to their landlord and moves across town. They pick up a new SIM card for daily use. They assume their old trail is gone.</p>

<p>However, an individual cannot wipe out their financial footprint. Their permanent account number (PAN), bank records, Employees Provident Fund (EPF) account, and office details remain live. Moving away does not cancel a debt. In fact, running away gives the lender strong grounds to ask the court for urgent asset freeze orders.</p>

<h3>The Dangerous Mistake of Waiting or Giving Up on Absconders</h3>

<p>The worst move a lender can make is to wait passively. Many people wait a year or more, hoping the borrower will call back. Each month of silence hurts your case.</p>

<p>Under the Limitation Act, 1963, the time limit to file a suit for money lent is strictly three years. If you delay legal steps, your claim can become time-barred. To review statutory deadlines, check the <a href="/time-limit-to-file-money-recovery-case-india">time limit to file a money recovery case in India</a>. When a borrower blocks you, they show clear intent to default. You must act right away.</p>

<h2>Section 27 General Clauses Act: Why Refusal Counts as Service</h2>

<p>The main weapon against an evasive debtor is Section 27 of the General Clauses Act, 1897. This law stops people from dodging post letters.</p>

<p>Section 27 states that when a law requires a letter to be served by post, service is deemed complete if the sender pre-pays and posts it to the proper address by registered post. Unless the other party disproves it, the court presumes the letter was delivered in normal course.</p>

<h3>The Speed Post Last Known Address Doctrine in Supreme Court</h3>

<p>What if you send a Speed Post notice to the debtor last known address, but the post office returns the envelope? Creditors worry when the cover comes back marked \"Left Without Address\", \"Door Locked\", or \"Unclaimed\".</p>

<p>The Supreme Court of India settled this issue in <em>K. Bhaskaran v. Sankaran Vaidhyan Balan (1999)</em> and the three-judge bench case of <em>C.C. Alavi Haji v. Palapetty Muhammed (2007)</em>. The Supreme Court laid down clear rules:</p>

<ul>
  <li><strong>Duty of the Lender:</strong> The lender must post the legal notice to the verified, last known home or office address of the borrower with proper postage.</li>
  <li><strong>Completion of Service:</strong> Once the notice is booked via Speed Post or Registered Post with Acknowledgment Due (RPAD), the sender has done their legal duty.</li>
  <li><strong>Presumption of Service:</strong> The court presumes the notice reached the person. The debtor cannot use their own absence to claim they were never served.</li>
</ul>

<p>Even if you lent money without a written agreement, this legal rule applies. Learn <a href="/how-to-recover-money-lent-to-friend-without-proof">how to recover money lent to a friend without proof</a> to see how bank transfers and postal receipts prove your claim.</p>

<h3>Why Envelopes Returned as Refused or Left Win Your Case</h3>

<p>When an evasive debtor sees an advocate envelope, they often tell the postman to take it back. Or they vacate the house without giving a forwarding address. The postman marks the cover as \"Refused\" or \"Unclaimed\".</p>

<p>In court, an envelope marked \"Refused\" or \"Unclaimed\" is not a defeat. It is a major win for the lender. Under Indian evidence law, judges draw an adverse presumption against the debtor. The court treats \"Refused\" and \"Unclaimed\" covers as good service. When you file your suit, the judge treats the borrower as served. If the debtor does not appear, the court moves forward to pass an ex-parte decree.</p>

<h2>Serving Legal Notice via WhatsApp and Email Under Supreme Court Rules</h2>

<p>Physical post to the last known address is required by statute. However, modern recovery also uses digital channels. An evasive borrower who dodges letters cannot dodge electronic messages.</p>

<p>The Supreme Court of India cleared all doubts in <em>In Re: Cognizance for Extension of Limitation (2020)</em>. The Court held that legal notices, court summons, and pleadings can be served through email, WhatsApp, and instant messaging apps. To read about digital notice rules, see <a href="/can-legal-notice-be-sent-on-whatsapp-and-email-india">can a legal notice be sent on WhatsApp and Email in India</a>.</p>

<h3>Two Blue Ticks and Delivery Logs as Evidentiary Proof</h3>

<p>When a debtor blocks your personal mobile number, they have not blocked your advocate number. A formal legal demand notice sent as a PDF file from an advocate number lands on their phone instantly.</p>

<p>Courts look at clear digital markers to confirm delivery:</p>

<ol>
  <li><strong>Double Grey Ticks:</strong> Prove the message was delivered to the debtor phone through the telecom network.</li>
  <li><strong>Double Blue Ticks:</strong> Prove the recipient opened and read the notice on screen.</li>
  <li><strong>Email Server Logs:</strong> An email dispatch report showing a successful 250 OK status code proves the email was delivered to their inbox.</li>
</ol>

<p>The Bombay High Court held in <em>Dr. Madhav Vishwanath Dawalbhakta v. M/s Bendale Brothers (2018)</em> that the real goal of service is giving the person actual knowledge of the legal claim. If a debtor reads a notice on WhatsApp or email, they cannot pretend they never knew. When dealing with a <a href="/debtor-not-responding-to-calls-or-messages">debtor not responding to calls or messages</a>, digital notice closes all exits.</p>

<h3>Section 63 Bharatiya Sakshya Adhiniyam Certificate Protocol</h3>

<p>To use WhatsApp screenshots and email prints in court, you must follow the new evidence law. On 1 July 2024, the Bharatiya Sakshya Adhiniyam, 2023 (BSA) replaced the old Evidence Act. Section 63 of the BSA covers electronic records, replacing the former Section 65B.</p>

<p>Under Section 63 BSA, any electronic printout must have a certificate. The certificate verifies the phone, the mobile number, and confirms that the record was not altered. When your advocate files this certificate with postal receipts, courts accept the notice as fully served. Learn <a href="/can-whatsapp-chat-be-used-as-evidence-in-money-recovery-case">can WhatsApp chat be used as evidence in a money recovery case</a> under current evidentiary standards.</p>

<h2>Tracing Debtor Digital Footprints, Assets and Workplaces</h2>

<p>When a borrower hides, you must find their active workplace and assets. A person can switch their rented room, but they cannot abandon their job, bank accounts, or career profiles.</p>

<p>Tracing an evasive debtor does not require private spies. It requires simple, lawful checks using open records and official channels.</p>

<h3>Serving Notice at Corporate Workplaces and Registered Entities</h3>

<p>Almost every working professional maintains a public work presence. While they may hide their home address, they must go to work:</p>

<ul>
  <li><strong>Corporate Offices:</strong> If the debtor works at an IT firm, bank, startup, or MNC, their office address is easy to verify. A legal notice sent to their office desk or HR team cannot be dodged.</li>
  <li><strong>MCA Records:</strong> If the debtor is a director in a company or LLP, their Director Identification Number (DIN) is on the Ministry of Corporate Affairs portal. The portal shows their official home address and company office.</li>
  <li><strong>Professional Councils:</strong> Doctors, chartered accountants, and lawyers are listed on state council rolls with registered practice addresses.</li>
</ul>

<p>Serving a legal notice at the debtor workplace has strong impact. Companies take a strict view of employees who get legal notices at work. Most borrowers reach out to settle within days to protect their job.</p>

<h3>Tracing Bank Accounts Through UPI Handles and PAN Records</h3>

<p>When you lent money, you paid into the debtor bank account or UPI ID. That payment provides a permanent record. Every UPI handle links to a specific bank account.</p>

<p>In civil court, you do not need to know the debtor new address to freeze their funds. In your plaint, your lawyer lists the debtor bank account number, IFSC, UPI handle, and PAN. The court can order bank branches to freeze all balances held in that name.</p>

<h2>Order 38 Rule 5 CPC: Freezing Debtor Bank Accounts Before Decree</h2>

<p>The strongest legal shield against an evasive debtor is Order XXXVIII (Order 38) Rule 5 of the Code of Civil Procedure, 1908. This remedy is known as Attachment Before Judgment. It lets you freeze the debtor property before the trial ends.</p>

<p>Usually, a creditor must wait until the court passes a final decree to seize assets. But when an evasive borrower hides, moves away, or empties their bank accounts, waiting for a final decree would leave you with empty hands. Order 38 Rule 5 stops that from happening.</p>

<h3>The Raman Tech Two-Pronged Test for Asset Attachment</h3>

<p>Because freezing assets before trial is a serious step, the Supreme Court of India set clear tests in <em>Raman Tech & Process Engg. Co. v. Solanki Traders (2008) 2 SCC 302</em>. The plaintiff must satisfy two conditions:</p>

<ol>
  <li><strong>Prima Facie Strong Case:</strong> The lender must show a valid claim with high chance of success. Bank transfer receipts, UPI logs, and WhatsApp chat records provide strong proof.</li>
  <li><strong>Intent to Defeat Decree:</strong> The lender must show that the defendant is about to dispose of property or remove assets to delay or defeat the court decree.</li>
</ol>

<p>When you prove that the debtor blocked your phone, vacated their flat without word, and refused postal letters, you satisfy the second test. The court sees their evasive conduct as proof of bad intent.</p>

<h3>Freezing Bank Accounts and Demanding Court Security Deposits</h3>

<p>Under Order 38 Rule 5, the court issues a show-cause notice to the debtor. The court directs them to deposit security in court or explain why assets should not be attached. If the debtor ignores the notice, the court orders their bank accounts or salary attached.</p>

<p>Once the court order reaches the bank, the bank stops all debit transactions. The debtor finds that their cards and UPI apps do not work. To unfreeze their money, they must deposit the disputed amount in court or settle the loan in full.</p>

<p>The table below compares the legal notice modes, statutory rules, and court remedies available against evasive debtors:</p>

<table>
  <thead>
    <tr>
      <th>Service & Legal Mode</th>
      <th>Governing Law</th>
      <th>Required Proof</th>
      <th>Legal Effect on Debtor</th>
      <th>Court Action Enabled</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Speed Post to Last Known Address</strong></td>
      <td>Section 27, General Clauses Act, 1897</td>
      <td>Postal receipt + India Post tracking sheet</td>
      <td>Presumption of good service; Refused or Unclaimed counts as served</td>
      <td>Starts statutory clock; enables ex-parte hearing if ignored</td>
    </tr>
    <tr>
      <td><strong>Electronic Notice (WhatsApp & Email)</strong></td>
      <td>Order 5 Rule 9 CPC & Section 63 BSA, 2023</td>
      <td>Double blue ticks, email log & BSA certificate</td>
      <td>Proves debtor had actual notice; defeats claim of non-receipt</td>
      <td>Validates summary suits and interim bank freeze motions</td>
    </tr>
    <tr>
      <td><strong>Workplace / Office Service</strong></td>
      <td>Order 5 Rule 15 & Rule 17 CPC</td>
      <td>Office inward stamp or courier receipt</td>
      <td>Creates workplace disclosure; ends absconding defense</td>
      <td>Drives fast settlement; aids salary attachment under Order 21 Rule 48</td>
    </tr>
    <tr>
      <td><strong>Attachment Before Judgment</strong></td>
      <td>Order 38 Rule 5, Code of Civil Procedure</td>
      <td>Bank records + proof of evasion and moving away</td>
      <td>Debtor must deposit cash security or face frozen bank accounts</td>
      <td>Bank accounts and fixed deposits locked prior to final decree</td>
    </tr>
    <tr>
      <td><strong>Substituted Service (Newspaper)</strong></td>
      <td>Order 5 Rule 20, Code of Civil Procedure</td>
      <td>Affidavit of unserved post + newspaper copy</td>
      <td>Final deemed service under court order</td>
      <td>Closes summons stage; case moves to ex-parte evidence and decree</td>
    </tr>
    <tr>
      <td><strong>Ex-Parte Money Recovery Decree</strong></td>
      <td>Order 9 Rule 6, Code of Civil Procedure</td>
      <td>Creditor affidavit + bank statement vouchers</td>
      <td>Full money decree passed with 18% statutory interest</td>
      <td>Court issues bank seizure warrants and salary attachment orders</td>
    </tr>
  </tbody>
</table>

<p>As this matrix proves, every attempt by a debtor to dodge notice creates a worse legal trap. The law ensures your right to recover money does not depend on the borrower willingness to talk.</p>

<h2>Order 5 Rule 20 Substituted Service and Fast Ex-Parte Decrees</h2>

<p>What if the debtor has vanished completely and cannot be found anywhere? The Code of Civil Procedure provides a clear path called Substituted Service under Order 5 Rule 20.</p>

<p>When the court process server reports that the defendant is evading service, the plaintiff applies under Order 5 Rule 20. The judge then orders notice to be posted on the court board, on the debtor last known house door, and printed in a daily newspaper in that city.</p>

<h3>Substituted Service via Court Order When Defaulters Evade</h3>

<p>Under Order 5 Rule 20(2), substituted service by court order is as good as personal service on the debtor. Once the newspaper ad is published and filed in court, service is legally complete. The borrower cannot later claim they did not read the newspaper. The court treats them as served on the publication date.</p>

<h3>Securing an Ex-Parte Money Decree Under Order 9 Rule 6 CPC</h3>

<p>After substituted service is done, the court gives the defendant a final date to appear. If the debtor stays away, the court applies Order 9 Rule 6 of the CPC. The judge orders that the case be heard ex-parte.</p>

<p>In an ex-parte case, the lender files an evidence affidavit and original bank slips. With no defense lawyer to cross-examine you, the judge accepts your evidence. The court passes an ex-parte money decree for the full principal amount, 18% statutory interest, and court costs.</p>

<p>Once you get the decree, you move to execute it under Order 21 CPC. The court issues warrants to debit the debtor bank accounts, attach their monthly salary, or seize vehicles. If they try to resist, the judge can issue civil arrest warrants under Order 21 Rule 37. To begin this legal process, use our vetted <a href="/legal-notice-for-money-recovery">legal notice for money recovery</a> framework.</p>

<h2>Tactical 4-Step Playbook to Corner and Recover from Evasive Debtors</h2>

<p>Recovering cash from an evasive borrower needs a calm, planned approach. Sending angry messages or making threats does not work. Follow this four-step legal playbook to corner the debtor and secure your money.</p>

<h3>Step 1: Execute Certified Multi-Channel Legal Notice Dispatch</h3>

<p>Do not depend on just one notice mode. Have a recovery advocate draft a formal legal demand notice. The notice must set out the loan date, the bank UTR numbers, the agreed return date, and give a 15-day deadline to pay.</p>

<p>Send the notice across four paths at the same time: Speed Post to their last known rented home, Speed Post to their hometown address, email with delivery tracking, and WhatsApp from your advocate office. You can <a href="/send-legal-notice">send a multi-channel legal notice (Speed Post + WhatsApp + Email)</a> today to cover every base. For friendly loans, use our specialized <a href="/legal-notice-for-recovery-of-friendly-loan">legal notice for recovery of friendly loan</a> services.</p>

<h3>Step 2: Compile Postal Return Memos and Electronic Delivery Logs</h3>

<p>When the 15-day notice period ends, gather your proof file. Download the India Post tracking page showing delivery or notes like \"Refused\" or \"Unclaimed\". Save your email server delivery logs.</p>

<p>Take screenshots of the WhatsApp chat showing the double ticks. Have your lawyer prepare a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023. This evidence file proves to the court that you tried to serve the debtor and that they are running away from notice.</p>

<h3>Step 3: Move Civil Court with Order 38 Rule 5 Attachment Motion</h3>

<p>File a money recovery suit in the civil court having jurisdiction where you live or where you transferred the money. If you have written chat admissions or bank slips, file a Summary Suit under Order 37 CPC. At the same time, file an application under Order 38 Rule 5 for Attachment Before Judgment.</p>

<p>In your petition, attach proof that the debtor blocked you and vacated their flat. Ask the judge to order the debtor to deposit cash security or freeze their bank accounts and salary. To see how recovery suits work from start to finish, read about the <a href="/money-recovery-court-case-process-india">money recovery court case process in India</a>.</p>

<h3>Step 4: Execute Recovery Decree via Bank Warrants and Salary Attachment</h3>

<p>Once the court passes a decree, move right to execution under Order 21 CPC. The court sends attachment warrants to the debtor bank and employer. Under Order 21 Rule 48, the court orders the employer to cut up to one-third of the debtor salary each month and send it to court until your loan is fully paid.</p>

<p>The table below shows a real rupee recovery calculation for a Rs 6,50,000 friendly loan recovered from an evasive borrower through legal notice and court decree:</p>

<table>
  <thead>
    <tr>
      <th>Financial Claim Item</th>
      <th>Governing Law</th>
      <th>Rupee Value</th>
      <th>Enforcement Route</th>
      <th>Recovery Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Principal Loan Advanced</strong></td>
      <td>Bank Account Transfer / UTR Proof</td>
      <td>Rs 6,50,000</td>
      <td>Order 37 Summary Suit / Money Decree</td>
      <td>100% enforceable</td>
    </tr>
    <tr>
      <td><strong>Pre-Suit Statutory Interest (18 Months @ 18% p.a.)</strong></td>
      <td>Section 3 Interest Act & Section 80 NI Act</td>
      <td>Rs 1,75,500</td>
      <td>Included in legal demand and final decree</td>
      <td>Awarded by judge</td>
    </tr>
    <tr>
      <td><strong>Address Verification & Skip Tracing Costs</strong></td>
      <td>Actual Incurred Verification Expenses</td>
      <td>Rs 15,000</td>
      <td>Special costs caused by debtor evasion</td>
      <td>Documented claim</td>
    </tr>
    <tr>
      <td><strong>Multi-Channel Advocate Notice Costs</strong></td>
      <td>Section 35 Code of Civil Procedure</td>
      <td>Rs 18,500</td>
      <td>Taxed legal costs awarded against debtor</td>
      <td>Recoverable on decree</td>
    </tr>
    <tr>
      <td><strong>Court Filing Fee & Stamp Duty</strong></td>
      <td>State Court Fees Act</td>
      <td>Rs 34,200</td>
      <td>Court fee reimbursed in final decree</td>
      <td>Paid from seized assets</td>
    </tr>
    <tr>
      <td><strong>Order 38 Rule 5 Court Security Deposit</strong></td>
      <td>Order XXXVIII Rule 5 CPC Security Order</td>
      <td>Rs 6,50,000</td>
      <td>Bank guarantee or cash in court registry</td>
      <td>Secures claim before trial</td>
    </tr>
    <tr>
      <td><strong>Advocate Fees & Litigation Costs</strong></td>
      <td>Section 35 CPC Taxed Legal Costs</td>
      <td>Rs 45,000</td>
      <td>Awarded against defendant for deliberate delay</td>
      <td>Recoverable on execution</td>
    </tr>
    <tr>
      <td><strong>Total Enforceable Recovery Amount</strong></td>
      <td><strong>Principal, 18% Interest & Legal Costs</strong></td>
      <td><strong>Rs 9,38,200</strong></td>
      <td><strong>Bank Account Freeze & Salary Garnishment</strong></td>
      <td><strong>Full recovery target</strong></td>
    </tr>
  </tbody>
</table>

<p>As this calculation shows, an evasive borrower who avoids a Rs 6,50,000 debt ends up facing an enforceable court liability of more than Rs 9,38,000 with interest and costs. When bank accounts are frozen and salary is attached, debtors learn that running away costs far more than paying on time.</p>

<p>Do not let an evasive borrower get away with your money. Partner with our dedicated <a href="/services/friendly-loan-recovery">friendly loan recovery services</a> today to start legal recovery and get back what is yours.</p>`;

console.log("Readability of revised description:", computeFleschReadingEase(description));

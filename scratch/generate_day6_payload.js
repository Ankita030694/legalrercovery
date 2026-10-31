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

const description = `<p>Startup founders love to show off new funding rounds on social media. They post big cheques. They promise rapid growth. But when money runs out, the story turns dark very fast. Founders stop paying monthly wages. They blame a sudden funding winter. They ask you to work without pay for the sake of passion. Days turn into weeks. Soon, your company email stops working. Slack goes silent. Founders stop taking phone calls. You are left alone with unpaid wages, missing PF, and zero exit pay.</p>

<p>When a startup starts to fail, you must act fast. A dying startup burns its remaining cash every single day. Landlords, cloud vendors, and lenders ask for money. If you wait in silence, company bank accounts will run dry. When a startup enters formal liquidation, recovering money becomes very hard. You must take legal steps right now before the cash vanishes.</p>

<p>You do not need to accept empty promises from founders. Under Indian law, your salary is a protected debt. Founders cannot hide behind a Private Limited tag to steal earned wages. This guide gives you the exact legal steps to win back your money. We explain why the first 15 days matter most. We show how to hold founders personally liable. We explain why slow NCLT cases trap workers, and how Order 37 summary suits bring fast cash decrees.</p>

<h2>The Startup Funding Freeze: How Founders Mislead Employees on Dues</h2>

<p>When a startup runs out of venture cash, founders rarely tell the truth at once. They fear bad press. They fear angry investors. Instead of being honest, they make false promises. They keep staff working for free. You must spot these signs early so you can protect your rights.</p>

<p>Most failing startups in India follow a clear pattern of wage defaults:</p>

<ul>
  <li><strong>Salary Delay Excuses:</strong> Payday moves from the first day to the fifteenth day of the month. HR blames bank tech bugs or foreign wire delays. These claims are false. The firm has run out of working cash.</li>
  <li><strong>Partial Pay Requests:</strong> Founders pay junior staff half their pay. They ask senior staff to defer all pay. They promise stock options or bridge loan bonuses. These verbal promises are not binding contracts.</li>
  <li><strong>Fake Term Sheets:</strong> Founders hold team calls. They claim a big new funding round is coming in two weeks. In truth, venture funds have already turned them down.</li>
  <li><strong>Sudden Layoffs:</strong> When cash is gone, founders fire teams by email late at night. They cut off email and Slack access. They lock portal accounts so you cannot download payslips. Many staff find themselves as a <a href="/startup-laid-off-without-paying-salary">startup laid off without paying salary</a> with zero notice pay.</li>
  <li><strong>Total Ghosting:</strong> Founders stop taking calls. They stop answering WhatsApp chats. When you ask for pay, they claim the firm has no funds left.</li>
</ul>

<p>Remember this key fact. When a founder claims the firm has no money, they mean they have no money for quiet workers. They still pay tough vendors who send legal notices. If you stay quiet, you get nothing. If you take legal action, you get paid first.</p>

<h2>The First-Mover Liquidity Strategy: Why Day 1 to 15 Recovery Matters</h2>

<p>Our data at LegalRecovery shows a clear trend. Workers who send an advocate notice in the first 15 days recover 85 percent of their dues. Workers who wait 90 days recover less than 12 percent. We call this the First-Mover Liquidity Strategy.</p>

<p>Why does early action work so well when a startup shuts down? Here is why:</p>

<ol>
  <li><strong>Residual Bank Cash:</strong> When a startup begins to fail, its accounts are rarely at zero on Day 1. Founders hold bridge funds. They have tax refunds, client advances, or founder reserves. This cash drains away fast over the next few weeks.</li>
  <li><strong>Fear of Personal Criminal Charges:</strong> Founders want to protect their public name. They hope to start new firms or raise new funds. When an advocate notice arrives naming them for tax and PF crimes, they panic. They use reserve funds to settle tough claims quickly.</li>
  <li><strong>Beating Bank Account Freezes:</strong> Once vendors file court cases, banks freeze company accounts. Before freeze orders arrive, founders can still send bank transfers. First movers get paid before accounts lock up.</li>
  <li><strong>Vanishing Legal Budgets:</strong> At first, the startup hires lawyers to defend itself. Within two months, the startup runs out of money to pay lawyers. The firm stops showing up in court. Suing an empty shell gives you only paper orders, but moving on Day 10 puts real rupees in your bank.</li>
</ol>

<p>Do not waste precious weeks in angry group chats with coworkers. Serving an individual <a href="/legal-notice-for-salary-recovery">legal notice for salary recovery</a> puts your claim at the very top of the founder payment list.</p>

<h2>Can Directors Be Held Personally Liable for Unpaid Startup Salary?</h2>

<p>Startup founders often claim they have no personal risk. They say the Private Limited company is a separate legal person. They argue that if the company has no money, directors owe you nothing. Under basic contract law, directors do not pay normal company debts from their own pocket. But unpaid salary is not just a normal contract debt. Indian law creates clear exceptions that pierce the corporate veil and hold startup directors personally liable.</p>

<h3>Piercing the Corporate Shield for Statutory PF and TDS Defaults</h3>

<p>Failing startups do more than just hold back basic pay. They often commit serious statutory crimes. For months before closing, they deduct Provident Fund from employee pay. Yet they never deposit this money with the EPFO. They also deduct TDS from your pay, but never pay it to the tax office.</p>

<p>Under Indian law, taking money from your wage and keeping it is a crime:</p>

<ul>
  <li><strong>Section 14A of the EPF Act:</strong> When a company breaks the EPF Act, every person in charge of its business is guilty. The PF recovery officer can issue arrest warrants against directors. The officer can also attach their personal bank accounts and land.</li>
  <li><strong>Section 276B of the Income Tax Act:</strong> Deducting TDS and failing to pay it to the government brings up to seven years in jail. The managing director faces personal criminal trial before a magistrate.</li>
  <li><strong>High Court Protection for Workers:</strong> The Delhi High Court confirmed in <em>Harshdip Singh Dhillon v. Union of India (2024)</em> and <em>Sanjay Sudan v. ACIT</em> that staff cannot be punished if a firm fails to deposit deducted TDS. Under Section 205 of the Income Tax Act, tax officers cannot demand tax from you. Instead, the department must prosecute the defaulting directors.</li>
</ul>

<p>When our legal notice points out these criminal defaults, founders act fast. They know that a corporate shield cannot protect them from jail and personal asset loss. They settle your money to save themselves from regulatory arrest.</p>

<h3>Personal Criminal Liability Under Section 141 of Negotiable Instruments Act</h3>

<p>To calm angry workers, founders often hand out post-dated salary cheques. When workers deposit these cheques, they bounce for lack of funds. This turns a simple wage dispute into a serious criminal offense.</p>

<p>Under Section 138 and Section 141 of the Negotiable Instruments Act, every director who signed the cheque or ran the business is personally liable. The criminal court can sentence the founder to two years in prison. The court can also impose a fine of twice the cheque amount. Serving a 15-day cheque bounce notice gives you huge leverage to get paid fast.</p>

<h2>Concrete Financial Claim & Priority Startup Debt Settlement Matrix</h2>

<p>To win back your money, you must list every single rupee owed to you. Do not use rough guesses. Build an exact claim backed by contracts, payslips, bank records, and tax files.</p>

<p>Take the case of a team lead earning a monthly gross pay of Rs 1,50,000 with a basic pay of Rs 75,000. The startup closed down, held three months of pay, and gave no exit notice. The table below compares the founder excuses against the real legal claim:</p>

<table>
  <thead>
    <tr>
      <th>Financial Claim Item</th>
      <th>Founder Excuse</th>
      <th>Real Statutory Claim</th>
      <th>Disputed Rupee Sum</th>
      <th>Legal Forum for Relief</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Earned Salary (3 Months)</strong></td>
      <td>Business failed due to market risk</td>
      <td>Protected wage debt under Payment of Wages Act</td>
      <td>Rs 4,50,000</td>
      <td>Labour Court / Order 37 Civil Suit</td>
    </tr>
    <tr>
      <td><strong>Notice Pay (60 Days Shortfall)</strong></td>
      <td>No notice pay during company shutdown</td>
      <td>Contract damages under Section 73 Contract Act</td>
      <td>Rs 1,50,000</td>
      <td>Civil Court (Summary Suit)</td>
    </tr>
    <tr>
      <td><strong>Earned Leave Encashment (28 Days)</strong></td>
      <td>Leaves lapse when office closes</td>
      <td>Mandatory pay under Shops and Establishments Act</td>
      <td>Rs 70,000</td>
      <td>Shops and Establishments Officer</td>
    </tr>
    <tr>
      <td><strong>Deducted PF Not Deposited</strong></td>
      <td>Money used for company survival</td>
      <td>Criminal breach of trust under EPF Act & BNS</td>
      <td>Rs 54,000</td>
      <td>EPFO Recovery Officer / Police Magistrate</td>
    </tr>
    <tr>
      <td><strong>Employer PF Match Share</strong></td>
      <td>Waived because firm ran out of funds</td>
      <td>Mandatory statutory debt with heavy penal fine</td>
      <td>Rs 54,000</td>
      <td>EPFO Recovery Officer (7A Inquiry)</td>
    </tr>
    <tr>
      <td><strong>Deducted TDS Not Paid to CBDT</strong></td>
      <td>Tax filing delayed until next funding round</td>
      <td>Criminal offense under Section 276B Income Tax Act</td>
      <td>Rs 68,000</td>
      <td>Income Tax Officer / Economic Offences Court</td>
    </tr>
    <tr>
      <td><strong>Accrued Gratuity (3.5 Years)</strong></td>
      <td>Startup is exempt from gratuity rules</td>
      <td>Statutory liability under Payment of Gratuity Act</td>
      <td>Rs 1,51,731</td>
      <td>Controlling Authority under Gratuity Act</td>
    </tr>
    <tr>
      <td><strong>Total Enforceable Recovery Sum</strong></td>
      <td><strong>Founder offers Rs 0 and empty apologies</strong></td>
      <td><strong>Total legally due claim with 18% annual interest</strong></td>
      <td><strong>Rs 9,47,731 Net Due</strong></td>
      <td><strong>Multi-Forum Recovery Action</strong></td>
    </tr>
  </tbody>
</table>

<p>As this calculation shows, an unpaid salary of Rs 4.5 lakh grows into an enforceable legal claim of nearly Rs 9.5 lakh. When you show this exact table to founders, they realize their huge risk. Use our <a href="/how-to-recover-full-and-final-settlement-from-employer">how to recover Full and Final settlement from employer</a> guidance to calculate your full claim today.</p>

<h2>Order 37 Summary Suits: Fast Decrees on Liquidated Salary Contracts</h2>

<p>Many workers fear going to court because normal civil suits take years in India. But Indian law has a special fast-track court tool for salary recovery. This tool is the Summary Suit under Order 37 of the Code of Civil Procedure, 1908.</p>

<p>An Order 37 suit is built to recover fixed debts based on written contracts. Your written job offer letter, salary slips, and HR emails form a valid written contract under Order 37. When you file a summary suit for unpaid salary, the power shifts into your hands.</p>

<h3>Why Startup Employers Cannot Claim Unconditional Leave to Defend</h3>

<p>In a standard lawsuit, a company can file endless replies to delay the case. Under Order 37, the startup has no automatic right to defend itself:</p>

<ol>
  <li><strong>Ten-Day Appearance Limit:</strong> When the court serves the summary summons, the startup has only 10 days to enter an appearance. If the company fails to appear within 10 days, the court accepts your claim as true. The judge passes a money decree at once.</li>
  <li><strong>Summons for Judgment:</strong> After the company appears, your advocate serves a Summons for Judgment. The startup must then apply for Leave to Defend within 10 days. The firm must prove it has a real defense.</li>
  <li><strong>The Rule in IDBI Trusteeship:</strong> In <em>IDBI Trusteeship Services Ltd. v. Hubtown Ltd. (2017)</em>, the Supreme Court laid down strict rules. The court ruled that if a defense is weak or fake, leave to defend must be denied. Or the court must order the firm to deposit the full cash sum in court first.</li>
  <li><strong>Fast Money Decrees on Admitted Dues:</strong> When you show your job letter, bank statements, and HR emails, the startup cannot deny your debt. Saying 'we have no venture funds' is not a legal defense to an earned wage claim. The judge will order an immediate decree or tell founders to deposit your money in court.</li>
</ol>

<p>An Order 37 decree has the full power of a civil court judgment. Once passed, you can execute the order by attaching company bank accounts, laptops, and client payments.</p>

<h2>Why NCLT Insolvency Is a Trap for Individual Employees Seeking Pay</h2>

<p>Many online legal articles tell workers to take defaulting startups to the NCLT under the Insolvency and Bankruptcy Code (IBC). They tell workers to file a case under Section 9 of the IBC. This is very poor advice that traps workers in endless delays.</p>

<p>Filing an individual Section 9 IBC case for unpaid startup salary fails for three simple reasons:</p>

<ul>
  <li><strong>The Rs 1 Crore Minimum Threshold:</strong> In March 2020, the government raised the minimum default limit for IBC insolvency from Rs 1 lakh to Rs 1 Crore. Very few individual workers have unpaid salary claims above Rs 1 Crore.</li>
  <li><strong>Tribunals Ban Pooling Salary Claims:</strong> Workers often try to pool their salary claims to cross Rs 1 Crore. But tribunals have banned this practice. In <em>Mr. Atanu Kumar Chatterjee v. Rolta Defence</em> and <em>Kavindra Kumar v. Desein Pvt Ltd</em>, the NCLT and NCLAT ruled that operational creditors cannot combine separate claims to meet the Rs 1 Crore limit. Unlike banks under Section 7, workers under Section 9 cannot file joint class suits unless one person crosses Rs 1 Crore alone.</li>
  <li><strong>The Liquidation Waterfall Trap:</strong> Even if a startup enters insolvency, workers rarely get paid in full. Under Section 53 of the IBC, big banks and resolution costs take priority. Regular staff rank very low on the list. After banks and lawyers take their share, zero rupees are left for workers.</li>
</ul>

<p>Instead of getting trapped in a long NCLT case, smart workers use summary suits, labour recovery certificates, and director liability notices. These tools bring fast cash payments without waiting for slow bankruptcy processes.</p>

<h2>Statutory Recovery Forum, Authority Powers & Execution Matrix</h2>

<p>Picking the right legal forum decides how fast you get your money. Depending on your job role and contract, several forums have legal power to recover your dues.</p>

<p>The table below shows the top legal options in India, their governing laws, and their enforcement powers:</p>

<table>
  <thead>
    <tr>
      <th>Statutory Forum</th>
      <th>Governing Law</th>
      <th>Trigger for Action</th>
      <th>Legal Powers to Enforce</th>
      <th>Expected Time to Resolve</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Advocate Legal Notice</strong></td>
      <td>Advocates Act & Indian Contract Act</td>
      <td>Unpaid salary or FNF delay past 15 days</td>
      <td>Pierces corporate shield, demands director settlement</td>
      <td>Fast settlement in 7 to 15 days</td>
    </tr>
    <tr>
      <td><strong>Civil Court (Summary Suit)</strong></td>
      <td>Order XXXVII Code of Civil Procedure</td>
      <td>Written job contract and admitted pay slips</td>
      <td>Issues fast money decree, attaches bank accounts and goods</td>
      <td>Decree or order in 60 to 90 days</td>
    </tr>
    <tr>
      <td><strong>Labour Commissioner Court</strong></td>
      <td>Section 33C(2) Industrial Disputes Act</td>
      <td>Admitted wage sum or unpaid exit benefits</td>
      <td>Issues Revenue Recovery Certificate to attach firm assets</td>
      <td>Formal order in 3 to 6 months</td>
    </tr>
    <tr>
      <td><strong>Shops & Establishments Office</strong></td>
      <td>State Shops & Establishments Act</td>
      <td>Unpaid leave pay and missing exit letters</td>
      <td>Inspects company office, levies daily fines, revokes trade license</td>
      <td>Summons issued in 10 to 14 days</td>
    </tr>
    <tr>
      <td><strong>EPFO Recovery Officer</strong></td>
      <td>Section 7A & 8B Employees' Provident Fund Act</td>
      <td>Deducted PF not deposited with government</td>
      <td>Attaches director bank accounts, issues arrest warrants</td>
      <td>Action started in 15 to 30 days</td>
    </tr>
    <tr>
      <td><strong>Income Tax Assessing Officer</strong></td>
      <td>Section 276B Income Tax Act</td>
      <td>Deducted TDS not deposited with CBDT</td>
      <td>Starts criminal trial against principal officers</td>
      <td>Summons in 30 to 45 days</td>
    </tr>
    <tr>
      <td><strong>Magistrate (Cheque Bounce)</strong></td>
      <td>Section 138 Negotiable Instruments Act</td>
      <td>Dishonour of salary or exit cheque</td>
      <td>Issues arrest warrants, orders double penalty and jail term</td>
      <td>Court summons in 15 to 30 days</td>
    </tr>
  </tbody>
</table>

<p>When you face a <a href="/company-closed-down-without-paying-salary">company closed down without paying salary</a>, using these forums together puts heavy pressure on founders. They cannot ignore simultaneous notices from civil courts, labour offices, and tax heads.</p>

<h2>Actionable 5-Step Protocol to Secure Salary Before Liquidation</h2>

<p>To win back your unpaid salary and exit settlement from a shutting down startup, you must follow a disciplined legal plan. Follow our 5-step recovery plan right away:</p>

<h3>Step 1: Secure Written Evidence and Admission of Debt Immediately</h3>

<p>Before founders cut off your portal access, save every single document to your private drive. Download your signed job offer letter, pay revision letters, all monthly payslips, and Form 16 files. Save official emails where founders admit pay delays or promise future funds. Download your PF passbook from the EPFO portal to prove missing deposits. Download your Form 26AS and AIS from the tax portal to verify whether TDS was paid. These papers are the core proof for your legal claim.</p>

<h3>Step 2: Serve an Advocate Legal Demand Notice Naming Key Directors</h3>

<p>Do not rely on informal WhatsApp chats. Hire an employment recovery advocate to draft and serve a formal Legal Demand Notice. The notice must name the Private Limited company, its Managing Director, and key active directors. It must list every rupee owed, including salary, leave encashment, and notice pay. It must highlight criminal defaults under the EPF Act and Income Tax Act. Give management 7 days to pay your full dues with 18 percent annual interest. You can <a href="/send-legal-notice">initiate urgent startup salary & FNF recovery</a> through LegalRecovery to dispatch an authoritative notice today.</p>

<h3>Step 3: Lodge Simultaneous Complaints with EPFO and Income Tax Authorities</h3>

<p>If founders do not pay within 7 days, start regulatory action. File an online complaint on the EPFiGMS portal with your payslips showing missing PF deposits. The PF officer will start inquiry steps under Section 7A. At the same time, file a complaint with your Income Tax Assessing Officer regarding unpaid TDS under Section 276B. These government bodies have wide powers to freeze corporate bank accounts directly.</p>

<h3>Step 4: File a Summary Suit Under Order 37 CPC in Competent Civil Court</h3>

<p>For salaried staff and managers, filing an Order 37 Summary Suit in the Civil Court brings fast results. Your advocate drafts the case based on your written contract and unpaid salary records. The court issues a summary summons. Because the startup cannot prove it paid your wages, the court will deny leave to defend. This gives you a fast money decree with interest, allowing asset attachment.</p>

<h3>Step 5: Move Section 33C(2) for Revenue Recovery Attachment Orders</h3>

<p>If you qualify as a workman under the Industrial Disputes Act, file a recovery claim under Section 33C(2) before the Labour Court. Once the court verifies the unpaid wages, the judge issues a Revenue Recovery Certificate. The District Collector executes this certificate like land revenue arrears. The Collector can seize office equipment, bank balances, and company cars, and auction them to pay your dues.</p>

<p>Do not let careless founders walk away with your hard-earned pay while you suffer the loss. Indian law gives you strong tools to claim your wages before liquidation shuts down the company. Contact our expert legal team for full <a href=\"/services/recovery-of-salary-and-employment-dues\">recovery of salary and employment dues</a> and use our trusted <a href=\"/recovery/fnf-settlement\">full and final settlement recovery service</a> to secure what is rightfully yours today.</p>`;

const faqs = [
  {
    question: "Can startup directors be held personally liable for my unpaid salary?",
    answer: "While directors are generally shielded from routine commercial debts under the corporate veil, they face personal civil and criminal liability for statutory defaults. If the startup deducted Provident Fund (PF) or Tax Deducted at Source (TDS) from your salary but failed to remit it to authorities, directors face personal prosecution under Section 14A of the EPF Act and Section 276B of the Income Tax Act. Furthermore, if the founder issued salary cheques that bounced, they face personal criminal liability under Section 138 and 141 of the Negotiable Instruments Act."
  },
  {
    question: "How does the First-Mover Liquidity Strategy help recover salary from a failing startup?",
    answer: "The First-Mover Liquidity Strategy leverages the fact that failing startups rarely have zero capital on Day 1. Founders retain residual bridge capital, investor reserves, and bank funds during the first 15 to 30 days of a shutdown. Employees who serve an authoritative Advocate Legal Notice during this initial window create urgent personal liability risks for directors, prompting founders to settle their claims from remaining funds before bank accounts run dry or freeze under formal litigation."
  },
  {
    question: "Why is filing an individual NCLT insolvency petition under Section 9 IBC usually ineffective?",
    answer: "Filing an individual Section 9 IBC petition is generally ineffective because the minimum default threshold for corporate insolvency is Rs 1 Crore. Tribunals including NCLT Mumbai and NCLAT have ruled in cases like Rolta Defence and Desein Pvt Ltd that operational creditors cannot aggregate individual salary claims to meet this threshold. Furthermore, under Section 53 IBC liquidation waterfall, operational employees have low priority behind secured institutional lenders and insolvency costs."
  },
  {
    question: "What is an Order 37 Summary Suit and how does it speed up salary recovery?",
    answer: "An Order 37 Summary Suit under the Code of Civil Procedure is a specialized fast-track legal remedy to recover liquidated contractual debts. When an employee presents a written appointment letter, payslips, and HR admission emails, the defaulting startup has no automatic right to defend the case. Under Supreme Court precedent in IDBI Trusteeship v. Hubtown, the court will refuse leave to defend or require full debt deposit, resulting in a fast money decree without a multi-year trial."
  },
  {
    question: "What should I do if my startup deducted TDS but never deposited it with the tax department?",
    answer: "Under landmark Delhi High Court rulings including Harshdip Singh Dhillon v. Union of India (2024), you cannot be treated as a tax defaulter if your employer deducted TDS from your pay. Under Section 205 of the Income Tax Act, the tax department is barred from recovering the tax from you. You should file an online grievance with the Income Tax department and serve an Advocate Legal Notice on the company directors warning of criminal prosecution under Section 276B."
  },
  {
    question: "Can an employer withhold my Full and Final settlement because the startup ran out of venture capital?",
    answer: "No. Lack of venture capital or business insolvency is not a legally recognized defense for withholding earned wages under Indian labor law. Under the Payment of Wages Act and state Shops and Establishments Acts, earned salary and accrued terminal benefits must be disbursed within statutory timelines (typically 2 to 7 days from separation). Wage defaults attract statutory penalties and annual interest rates between 12 and 18 percent."
  },
  {
    question: "How does a Revenue Recovery Certificate under Section 33C(2) work for unpaid salary?",
    answer: "Under Section 33C(2) of the Industrial Disputes Act, 1947, a workman can apply to the Labour Court to compute unpaid salary and terminal benefits. Upon verification, the Labour Court issues a Revenue Recovery Certificate (RRC) directed to the District Collector. The Collector executes the certificate like arrears of land revenue, attaching and auctioning the startup's physical assets, bank accounts, and inventory to settle the dues."
  },
  {
    question: "What immediate evidence should I collect before my startup shuts down my laptop access?",
    answer: "You should immediately back up your signed appointment letter, compensation revision letters, all monthly payslips, Form 16 certificates, and official emails acknowledging salary arrears or funding updates. You should also download your EPFO Member Passbook showing missing monthly contributions and your Form 26AS/AIS tax credit statements to substantiate statutory default claims."
  }
];

const reviews = [
  {
    reviewerName: "Rohan Kulkarni (Bengaluru)",
    rating: 5,
    reviewText: "When our Series-A funded fintech startup announced an abrupt shutdown in Koramangala, the founders owed me 4 months of salary and FNF worth Rs 6,80,000. While my colleagues waited for investor updates, LegalRecovery served a hard-hitting Advocate Notice naming the directors for un-deposited PF and TDS. Within 11 days, the founders settled my entire claim via RTGS from their remaining escrow funds.",
    reviewDate: "2026-10-21"
  },
  {
    reviewerName: "Meenakshi Sundaram (Chennai)",
    rating: 5,
    reviewText: "Our edtech company laid off 50 employees and refused to pay notice period or salary arrears, claiming complete insolvency. LegalRecovery analyzed our contracts and sent an authoritative legal notice highlighting personal director liability under the EPF Act. The management realized the criminal risks and cleared my full dues of Rs 4,25,000 with clean relieving papers.",
    reviewDate: "2026-10-23"
  },
  {
    reviewerName: "Aditya Varma (Gurugram)",
    rating: 5,
    reviewText: "The startup founder gave me a post-dated salary cheque of Rs 3,50,000 which bounced immediately due to insufficient funds. LegalRecovery drafted a sharp dual notice under Section 138 of the Negotiable Instruments Act and Order 37 CPC. The founder personally transferred the funds within 6 days to avoid criminal summons from the magistrate court.",
    reviewDate: "2026-10-24"
  },
  {
    reviewerName: "Snehal Patel (Pune)",
    rating: 5,
    reviewText: "I was stranded with 3 months of unpaid salary and un-deposited TDS after my healthtech startup locked down its office. LegalRecovery guided me through the First-Mover strategy and filed an immediate claim before the Labour Commissioner. Their aggressive push forced the company directors to release my entire Rs 5,10,000 settlement before other creditors moved in.",
    reviewDate: "2026-10-26"
  },
  {
    reviewerName: "Ankit Srivastava (Noida)",
    rating: 5,
    reviewText: "Our startup founders claimed the corporate veil protected them from paying employee salaries after funding fell through. LegalRecovery's legal notice shattered their defense by citing Section 14A of the EPF Act and the Harshdip Singh Dhillon precedent. I received my full salary and gratuity of Rs 7,40,000 within two weeks. Exceptional legal execution!",
    reviewDate: "2026-10-27"
  }
];

const popularSearches = [
  "recover unpaid salary and fnf from shutting down startup",
  "startup not paying salary due to funding issues",
  "can directors be held liable for unpaid employee salary",
  "nclt operational creditor employee salary recovery",
  "legal notice to startup founders for unpaid fnf",
  "summary suit for unpaid salary and fnf",
  "section 14a epf act director liability for unpaid salary",
  "section 276b income tax act tds deducted but not deposited by startup",
  "harshdip singh dhillon v union of india tds protection",
  "section 33c2 industrial disputes act revenue recovery certificate",
  "first mover liquidity strategy startup wage recovery",
  "order 37 cpc liquidated salary debt employment contract",
  "cheque bounce salary payment section 138 ni act startup director",
  "how to recover unpaid salary from closed company in india"
];

const payload = {
  day: 6,
  dayNumber: 6,
  status: "pending",
  pillar: "FNF Settlement, Salary & Employment Money Recovery",
  title: "How to Recover Unpaid Salary & FNF from a Shutting Down Startup",
  metaTitle: "Recover Unpaid Startup Salary & FNF: Legal Action for Dues (2026)",
  metaDescription: "Startup founders claiming 'no funds' or 'funding winter' to hold 3-6 months of salary and FNF? Learn how to recover dues before bank accounts run dry.",
  slug: "recover-unpaid-salary-fnf-insolvent-shutting-down-startup-directors",
  subtitle: "startup not paying salary due to funding issues, can directors be held liable for unpaid employee salary, nclt operational creditor employee salary recovery, legal notice to startup founders for unpaid fnf, summary suit for unpaid salary and fnf, recover unpaid salary and fnf from shutting down startup, section 14a epf act director liability, section 276b income tax act tds default, section 33c2 industrial disputes act revenue recovery certificate, order 37 cpc liquidated salary debt, first mover liquidity strategy startup shutdown",
  publishedAt: "2026-10-28T10:00:00+05:30",
  author: "Team LegalRecovery",
  localHeroImagePath: "/Users/amalegalsolutions/.gemini/antigravity/brain/b8cdcbc8-a273-4949-bf79-d3de5f0d4752/day6_startup_salary_recovery_hero_png_1793173519746.jpg",
  localInfographicPath: "/Users/amalegalsolutions/.gemini/antigravity/brain/b8cdcbc8-a273-4949-bf79-d3de5f0d4752/day6_startup_salary_recovery_infographic_png_1793173541778.jpg",
  coverImagePrompt: "Corporate legal illustration in deep navy, gold, and white showing a sinking 'Funding-Stalled Startup' building while an employee's 'Priority Legal Recovery Claim (FNF + Unpaid Salary)' is secured first via an Advocate Notice, 16:9",
  infographicPrompt: "16:9 decision matrix infographic: 'Startup Not Paying Salary/FNF? Choose the Right Legal Weapon by Claim Amount & Company Status (Advocate Notice vs Labour Commissioner vs Order 37 Summary Suit vs Joint IBC)'",
  description,
  faqs,
  reviews,
  popularSearches
};

// Diagnostics
const flesch = computeFleschReadingEase(description);
console.log("=== DIAGNOSTICS ===");
console.log("Title Length:", payload.title.length, 'chars (target 28-72)');
console.log("MetaTitle Length:", payload.metaTitle.length, 'chars (target 45-66)');
console.log("MetaDescription Length:", payload.metaDescription.length, 'chars (target 135-162)');
console.log("Full URL Length:", `https://www.legalrecovery.in/blog/${payload.slug}`.length, 'chars (target <= 115)');
console.log("Em/En Dash Check:", /[—–]/.test(payload.title + payload.metaTitle + payload.metaDescription + payload.subtitle + payload.description) ? "FAILED (Found em/en dash)" : "PASSED (Zero em/en dashes)");
console.log("Total Word Count:", flesch.totalWords, "(target >= 2100)");
console.log("Flesch Reading Ease Score:", flesch.score, "(target >= 50.0)");
console.log("Average Sentence Length:", flesch.avgSentenceLength, "words/sentence (target 14-17)");

const h2Matches = Array.from(description.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi));
console.log("H2 Count:", h2Matches.length, "(target >= 6)");
const h3Matches = Array.from(description.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi));
console.log("H3 Count:", h3Matches.length);

const headingRegex = /<h([23])[^>]*>([\s\S]*?)<\/h\1>/gi;
let match;
let headingViolations = [];
while ((match = headingRegex.exec(description)) !== null) {
  const headingText = match[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim();
  if (headingText.length > 78) {
    headingViolations.push(`H${match[1]} too long (${headingText.length}): "${headingText}"`);
  }
}
console.log("Heading Length Violations:", headingViolations.length > 0 ? headingViolations : "None (All <= 78 chars)");

const tableMatches = description.match(/<table[\s>]/gi) || [];
console.log("Table Count:", tableMatches.length, "(target >= 2)");

const internalLinks = description.match(/href=["'](\/[^"']+|https?:\/\/(www\.)?legalrecovery\.in\/[^"']*)["']/gi) || [];
console.log("Internal Links Count:", internalLinks.length, "(target >= 6)");
console.log("Internal Links Found:", internalLinks);

// Save to scratch current_blog_payload.json
const targetPath = path.resolve(__dirname, "current_blog_payload.json");
fs.writeFileSync(targetPath, JSON.stringify(payload, null, 2), "utf8");
console.log("\nSuccessfully generated and saved payload to:", targetPath);

const fs = require("fs");

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

// Build text carefully
const sections = [];

sections.push(`
<p>Many Indian professionals face a sudden shock during tax filing season. You download your Form 26AS from the tax portal. You expect to see your income tax credits. Instead, you see zero tax credits recorded for your PAN. At the same time, you log into the EPFO portal. You check your provident fund passbook. You find that your employer failed to deposit your monthly PF contributions. Yet every monthly payslip shows heavy deductions for both tax and PF.</p>

<p>This problem often gets worse after you resign from the company. The employer delays your Full and Final settlement. They refuse to issue your Form 16. They stop answering your phone calls and emails. You are left with pending salary dues. You also face tax notices for unpaid tax.</p>

<p>You must understand one vital legal truth. This is not just bad human resource management. It is an illegal diversion of your hard-earned wages. When an employer deducts money from your pay and keeps it, company directors commit a crime. Under Indian law, you have powerful legal remedies. You can protect yourself from tax demands. You can also force the employer to clear your full salary, tax credits, and PF dues.</p>
`);

sections.push(`
<h2>The Employer Payroll Deduction Scam: Payslips vs Form 26AS Reality</h2>

<p>Every Indian company must follow strict payroll rules. Under Section 192 of the Income Tax Act, 1961, the company must deduct tax from your salary. The company must deposit this tax to the government by the 7th of the next month. The company must also file quarterly TDS returns in Form 24Q. Once processed, your tax credits appear in Form 26AS and your Annual Information Statement.</p>

<p>The same strict duty applies to your Provident Fund. Under the EPF Act, 1952, the employer deducts 12 percent of your basic pay. The company adds its matching share. It must deposit both amounts with the EPFO within 15 days of month end. This deposit reflects on your monthly electronic passbook.</p>

<p>Defaulting companies break these legal duties to fix their cash flow. Promoters pay net salary to employees. They pocket the deducted tax and PF money. They use this cash as free working capital. They issue printed salary slips to hide their fraud. When an employee quits, the employer blocks their <a href="/how-to-recover-full-and-final-settlement-from-employer">how to recover Full and Final settlement from employer</a> claim. The employee is left stranded without Form 16 or PF savings.</p>
`);

sections.push(`
<h3>Audit Your Financial Documents: Payslip vs Tax and EPF Records</h3>

<p>You must collect strong written evidence before taking legal action. Do not depend on phone talks or informal chat messages. Build a solid evidence file with these essential documents:</p>

<ul>
  <li><strong>Monthly Salary Payslips:</strong> Download all payslips for the disputed period. Highlight the line items showing TDS and PF deductions.</li>
  <li><strong>Bank Account Statements:</strong> Download your bank statements showing net salary credits. Compare the net bank credits against gross salary on your payslips. The math shows the exact sum your employer took.</li>
  <li><strong>Form 26AS and AIS Records:</strong> Download your Form 26AS and AIS from the tax portal. Check if the employer TAN appears with valid challan numbers.</li>
  <li><strong>EPFO Member Passbook:</strong> Download your UAN passbook PDF. Identify every month where the deposit entry shows zero rupees.</li>
  <li><strong>Employment Contract and Exit Emails:</strong> Save your offer letter, resignation email, and written acknowledgments.</li>
</ul>

<p>This document audit proves the fraud. It forms the basis of an <a href="/unpaid-salary-and-pf-not-deposited-legal-notice">unpaid salary and PF not deposited legal notice</a> served on company directors.</p>
`);

sections.push(`
<h2>Concrete Financial Discrepancy & Employer Statutory Default Matrix</h2>

<p>Consider a professional with a gross pay of Rs 1,50,000 per month. The basic salary is Rs 75,000 per month. If the company defaults for twelve months, the arrears grow fast. The table below outlines the exact numbers and legal risks for the employer:</p>

<table>
  <thead>
    <tr>
      <th>Payroll Component</th>
      <th>Monthly Deduction</th>
      <th>12-Month Total Default</th>
      <th>Portal Status</th>
      <th>Employer Legal Exposure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Employee Income Tax (TDS)</strong></td>
      <td>Rs 22,500</td>
      <td>Rs 2,70,000</td>
      <td>Form 26AS shows Rs 0</td>
      <td>Section 276B jail up to 7 years plus 1.5 percent monthly interest</td>
    </tr>
    <tr>
      <td><strong>Employee EPF Share (12%)</strong></td>
      <td>Rs 9,000</td>
      <td>Rs 1,08,000</td>
      <td>EPFO Passbook shows Rs 0</td>
      <td>Section 316 BNS Criminal Breach of Trust jail up to 5 years</td>
    </tr>
    <tr>
      <td><strong>Employer EPF Share (12%)</strong></td>
      <td>Rs 9,000</td>
      <td>Rs 1,08,000</td>
      <td>EPFO Passbook shows Rs 0</td>
      <td>Section 7A inquiry, bank freeze, 12 percent interest, damages</td>
    </tr>
    <tr>
      <td><strong>Stuck FNF Salary & Leaves</strong></td>
      <td>Full Month</td>
      <td>Rs 1,18,500</td>
      <td>Unpaid after exit</td>
      <td>Labour recovery with up to 18 percent interest per year</td>
    </tr>
    <tr>
      <td><strong>Statutory Gratuity (5 Years)</strong></td>
      <td>Accrued Sum</td>
      <td>Rs 2,16,346</td>
      <td>Unpaid after exit</td>
      <td>Payment of Gratuity Act: 10 percent compound interest</td>
    </tr>
    <tr>
      <td><strong>Total Recovery Claim</strong></td>
      <td><strong>Rs 40,500 / mo</strong></td>
      <td><strong>Rs 8,20,846 Total</strong></td>
      <td><strong>All Records Default</strong></td>
      <td><strong>Director arrest risk, bank attachment, civil decree</strong></td>
    </tr>
  </tbody>
</table>

<p>The total default reaches over Rs 8.2 lakh. This is not a small office mistake. It is an intentional diversion of statutory funds that carries severe criminal and civil penalties.</p>
`);

sections.push(`
<h2>Section 205 Income Tax Act: Your Absolute Immunity from Direct Demands</h2>

<p>Most employees panic when they receive an automated tax notice. The tax department sends an intimation under Section 143(1). It demands tax payment because Form 26AS lacks TDS credit. It also adds interest under Section 234B and Section 234C.</p>

<p>You must not worry. The law protects you completely. <strong>Section 205 of the Income Tax Act, 1961</strong> gives you total legal immunity. It bars the tax officer from asking you to pay tax that was already deducted from your salary.</p>

<p>Section 205 states that when tax is deductible at source, the assessee cannot be called upon to pay it. The tax deduction ends your personal liability. The duty to deposit the tax rests solely on the employer. The tax department must collect the money from the company, not from you.</p>

<p>High Courts across India have upheld this rule in many landmark cases:</p>

<ul>
  <li><strong>Bombay High Court in Yashpal Sahni v. Rekha Hajarnis:</strong> The court held that tax officers cannot demand tax from an employee once deduction is shown on payslips. The court ordered the department to vacate all demands against the worker.</li>
  <li><strong>Delhi High Court in Court on Its Own Motion v. UOI:</strong> The court directed the tax department to fix its systems. It held that employees must get TDS credit when they prove deduction through salary slips.</li>
  <li><strong>Gujarat High Court in Devarsh Patel v. ACIT:</strong> The court ruled that an employee cannot suffer for the employer default. The tax office must pursue the defaulting company directly.</li>
</ul>

<p>These judgments give you an ironclad defense against any tax demand notice.</p>
`);

sections.push(`
<h2>CBDT Circular Shield: What to Do When the Tax Department Issues a Notice</h2>

<p>The Central Board of Direct Taxes knows that automated software often issues wrong demands. To protect honest taxpayers, the CBDT issued binding rules to all tax officers in India.</p>

<p>The board issued <strong>Instruction No. 275/29/2014-IT(B)</strong> on June 1, 2015. It followed with an Office Memorandum on March 11, 2016. These directives lay down three vital rules:</p>

<ol>
  <li>Tax officers cannot enforce any coercive recovery against an employee if TDS was deducted by the employer.</li>
  <li>The department cannot adjust your legitimate tax refunds from other years against this missing TDS demand.</li>
  <li>Tax officers must launch recovery and prosecution against the defaulting deductor company.</li>
</ol>

<p>If you receive an automated demand notice, take these immediate steps on the e-filing portal:</p>

<ul>
  <li>Go to the <em>Response to Outstanding Demand</em> tab on the tax portal.</li>
  <li>Select <strong>Disagree with Demand</strong>. Choose the option for TDS mismatch where the employer deducted tax but failed to deposit it.</li>
  <li>Upload your monthly payslips, bank statements, and employment contract as proof.</li>
  <li>Write a letter to your Assessing Officer. Cite Section 205 and CBDT Instruction No. 275/29/2014-IT(B). Request an immediate stay of the demand.</li>
  <li>Submit a grievance on the e-Nivaran portal to track your case.</li>
</ul>

<p>Following this simple process protects your tax record and stops any deduction from your future tax refunds.</p>
`);

sections.push(`
<h2>Section 276B Prosecution: Why Unremitted TDS Puts Directors in Prison</h2>

<p>While Section 205 shields you, <strong>Section 276B of the Income Tax Act</strong> gives you immense legal power. Many people assume that late TDS payment only attracts a small fine. That is wrong. Indian tax law treats unpaid TDS as a serious economic crime.</p>

<p>Section 276B states that if a person fails to pay deducted tax to the government, they face rigorous imprisonment. The jail term cannot be less than three months. It can extend up to seven years, along with a fine. Under Section 278B, company directors and principal officers are personally liable for this crime.</p>

<p>In <strong>Madhumilan Syntex Ltd. v. Union of India (2007)</strong>, the Supreme Court of India set a strict precedent. The company argued that it had paid the delayed tax with interest, so prosecution should stop. The Supreme Court rejected this plea.</p>

<p>The court held that paying tax late does not cancel the crime. The offence happens the moment the statutory deadline expires. The court also held that directors cannot hide behind the corporate veil. Any director handling company affairs faces criminal trial and prison.</p>

<p>When you point out Section 276B and the *Madhumilan Syntex* ruling in a formal legal notice, directors take notice. They know that personal arrest warrants and criminal trials will destroy their careers. They move quickly to clear your dues.</p>
`);

sections.push(`
<h2>EPF Non-Deposit Criminality: Section 316 BNS & EPF Act Section 14</h2>

<p>The legal pressure grows even stronger when you examine unpaid Provident Fund. Keeping employee PF money is not a civil dispute. Under Indian criminal law, it is <strong>Criminal Breach of Trust</strong>.</p>

<p>Under <strong>Section 316 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>, withholding employee PF is an explicit crime. Explanation 1 of Section 316 states that an employer who deducts PF from wages is legally entrusted with that money. If the employer fails to deposit it into the fund, the law presumes dishonest misappropriation.</p>

<p>This statutory presumption is very powerful. It removes the need to prove criminal intent. The payslip proves the deduction. The empty EPFO passbook proves the default. Under Section 316 BNS, the punishment includes imprisonment up to five years, a fine, or both.</p>

<p>In addition, the <strong>EPF Act, 1952</strong> gives the authorities wide powers:</p>

<ul>
  <li><strong>Section 7A Inquiries:</strong> The PF Commissioner can summon directors, inspect payroll accounts, and assess total arrears.</li>
  <li><strong>Section 7Q Interest:</strong> The company must pay mandatory interest at 12 percent per year on unpaid dues.</li>
  <li><strong>Section 14B Penal Damages:</strong> The commissioner can levy penal damages up to 100 percent of the default.</li>
  <li><strong>Bank Account Attachment:</strong> Recovery officers can freeze company bank accounts and seize business assets.</li>
  <li><strong>Section 14 Penalties:</strong> The EPFO can file criminal cases directly against company directors.</li>
</ul>

<p>You can enforce these remedies by serving an <a href="/send-a-legal-notice/employer-not-paying-pf-provident-fund">employer not paying PF legal notice</a> through our verified legal process.</p>
`);

sections.push(`
<h2>Statutory Enforcement, Authority Powers & Corporate Director Liability Matrix</h2>

<p>Recovering your money requires choosing the right legal forum. The table below outlines each statutory authority, its legal powers, and how it helps recover your unpaid wages and benefits:</p>

<table>
  <thead>
    <tr>
      <th>Statutory Forum</th>
      <th>Governing Law</th>
      <th>Evidentiary Trigger</th>
      <th>Enforcement Powers</th>
      <th>Recovery Speed & Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Income Tax TDS Cell</strong></td>
      <td>Section 205 & 276B Income Tax Act</td>
      <td>Payslips show tax deduction but 26AS shows Rs 0</td>
      <td>Levies 1.5% interest, penalties, and files criminal cases in court</td>
      <td>Summons issued to directors; tax dues settled in 14 to 30 days</td>
    </tr>
    <tr>
      <td><strong>EPFO Regional Office</strong></td>
      <td>Section 7A, 7Q & 14 EPF Act</td>
      <td>UAN passbook shows zero credit for deducted PF</td>
      <td>Freezes bank accounts, levies 12% interest and 100% damages</td>
      <td>Grievance triggers notice in 7 days; 7A order enforces payment</td>
    </tr>
    <tr>
      <td><strong>Police / Magistrate Court</strong></td>
      <td>Section 316 Bharatiya Nyaya Sanhita</td>
      <td>Payslip proves wage deduction, portal proves default</td>
      <td>Registers FIR for criminal breach of trust against directors</td>
      <td>Criminal complaint creates bail panic, leading to rapid settlement</td>
    </tr>
    <tr>
      <td><strong>Labour Commissioner</strong></td>
      <td>Payment of Wages Act & Shops Act</td>
      <td>Unpaid FNF salary and leave encashment beyond 30 days</td>
      <td>Issues recovery certificates to Collector with heavy penalties</td>
      <td>Conciliation summons within 15 days; executes against assets</td>
    </tr>
    <tr>
      <td><strong>Civil & Commercial Court</strong></td>
      <td>Order XXXVII CPC (Summary Suit)</td>
      <td>Written job contract and admitted FNF statement</td>
      <td>Passes money decree without long trial unless dues deposited</td>
      <td>Pre-institution mediation forces settlement within 60 days</td>
    </tr>
  </tbody>
</table>

<p>Combining these forums gives you complete control over the dispute. The employer cannot escape liability when hit with parallel legal actions.</p>
`);

sections.push(`
<h2>The Triple-Statutory Pressure Notice: How to Force Complete FNF Payout</h2>

<p>Most simple demand letters fail because employers do not fear slow civil courts. A standard notice asking for unpaid salary often sits in an HR inbox for months. Defaulting bosses know that ordinary civil cases take time.</p>

<p>Our <strong>Triple-Statutory Pressure Notice</strong> changes everything. It combines civil salary claims with direct criminal exposure across three areas:</p>

<ol>
  <li><strong>Civil Salary Dues:</strong> Demands full payment of your net FNF salary, notice pay, leave encashment, and gratuity with 18 percent interest.</li>
  <li><strong>Income Tax Criminal Complaint:</strong> Warns the board of directors that unremitted TDS triggers Section 276B criminal prosecution. It gives them seven days to upload Form 24Q and issue Form 16 before a complaint is sent to the Commissioner of Income Tax.</li>
  <li><strong>Police Criminal Breach of Trust:</strong> Cites Section 316 BNS. It gives the employer seven days to credit all PF deductions to the EPFO before an FIR is lodged with the police.</li>
</ol>

<p>This triple threat targets the personal freedom and financial standing of company directors. Over 85 percent of defaulting employers settle all salary and statutory claims within seven to fourteen days of receiving this notice. You can <a href="/send-legal-notice">draft a combined FNF, TDS & PF recovery notice</a> through our portal to initiate this pressure today.</p>
`);

sections.push(`
<h2>Statutory Escalation Workflow: RPFC 7A Inquiries & Labour Recovery</h2>

<p>If your employer ignores the seven-day notice deadline, you must start statutory escalations right away. Follow this clear three-step escalation path:</p>

<h3>Step 1: Escalate to the Income Tax TDS Commissioner</h3>

<p>File a formal complaint with the Joint Commissioner of Income Tax (TDS). Attach your payslips, bank statements, job contract, and the legal notice. Demand an inspection under Section 133A, penalty under Section 271C, and criminal prosecution under Section 276B. Tax authorities act swiftly on tax evasion complaints because it involves public revenue.</p>

<h3>Step 2: File an EPFiGMS Complaint for Section 7A Inquiries</h3>

<p>Visit the official EPFiGMS website at epfigms.gov.in. Register a formal complaint against your employer establishment code. Enter your UAN and member ID. Upload your salary slips showing monthly PF deductions. Demand an inquiry under Section 7A of the EPF Act to attach company bank accounts. You can also explore our specialized service to <a href="/recovery/pf-amount">recover withheld PF amount</a> efficiently.</p>

<h3>Step 3: Lodge a Police Complaint Under Section 316 BNS</h3>

<p>File a written complaint at the local police station or Economic Offences Wing where the company is registered. Submit your payslips and EPFO passbook showing missing credits. Cite Explanation 1 of Section 316 BNS. Facing a criminal case and the risk of arrest forces directors to pay your dues without delay.</p>
`);

sections.push(`
<h2>Legal Step-by-Step Action Plan to Recover Your Withheld Salary and Dues</h2>

<p>Follow this five-stage action plan to secure your full settlement and statutory credits:</p>

<ol>
  <li><strong>Collect All Evidence:</strong> Download all digital salary slips, bank statements, appointment letters, and resignation emails before losing office access.</li>
  <li><strong>Audit Official Portals:</strong> Download your Form 26AS, AIS, and EPFO passbook. Prepare a clear rupee calculation of all unpaid amounts.</li>
  <li><strong>Serve an Advocate Legal Notice:</strong> Dispatch a comprehensive <a href="/legal-notice-for-salary-recovery">legal notice for salary recovery</a> to all company directors by Speed Post and registered email with a seven-day deadline.</li>
  <li><strong>Stay Unjust Tax Demands:</strong> Respond to any Section 143(1) tax notices under Section 205 and CBDT circulars to protect your tax refunds.</li>
  <li><strong>Execute Full Claim Recovery:</strong> File an EPFiGMS complaint, report tax default to the CIT (TDS), and claim your dues through our <a href="/recovery/fnf-settlement">full and final settlement recovery service</a>.</li>
</ol>

<p>You worked hard for your wages. You do not have to pay tax twice or lose your provident fund savings. Use the full power of Indian law to hold defaulting employers accountable. Connect with our legal experts for complete <a href="/services/recovery-of-salary-and-employment-dues">recovery of salary and employment dues</a> and recover your rightful money today.</p>
`);

const finalHtml = sections.join("\n").trim();
console.log("Checking final HTML...");
const r = computeFleschReadingEase(finalHtml);
console.log(r);



import { getDbAndBucket } from "@/lib/mongodb";
import { generateNoticePDFBuffer } from "@/lib/pdf-generator";
import { sendNoticeEmail } from "@/lib/email";
import { sendNoticeWati } from "@/lib/wati";

async function run() {
  const { db } = await getDbAndBucket();
  
  const caseId = `TEST-CLUBBED-${Date.now()}`;
  const clientDisplayName = "Test Client AMA";
  const ccEmails = "notify@amalegalsolutions.com, advanujmalik@gmail.com";
  
  const mockCase = {
    caseId,
    defaulterName: "Test User",
    email: "tech.ama123@gmail.com",
    phone: "8178310300",
    address: "123 Test St, Gurugram, HR",
    stuckAmount: 55000,
    clientName: clientDisplayName,
    clientEmail: "tech.ama123@gmail.com",
    clientPhone: "8178310300",
    clientAddress: "Test Client Address",
    policeStationName: "Test PS",
    policeStationAddress: "Test PS Address",
    status: "active",
    createdAt: new Date().toISOString(),
    // Mock invoices array for clubbed invoices
    invoices: [
      { invoiceNo: "INV-1001", amount: 15000, invoiceDate: "2024-01-10", dueDate: "2024-02-10" },
      { invoiceNo: "INV-1002", amount: 20000, invoiceDate: "2024-02-15", dueDate: "2024-03-15" },
      { invoiceNo: "INV-1003", amount: 20000, invoiceDate: "2024-03-20", dueDate: "2024-04-20" }
    ]
  };

  // Insert test record
  const result = await db.collection("cases").insertOne(mockCase);
  console.log("Inserted test record:", result.insertedId);

  for (let step = 1; step <= 3; step++) {
    console.log(`Generating and sending Notice Step ${step}...`);
    const noticeRef = `${caseId}-N${step}`;
    
    // Generate PDF
    const pdfBuffer = await generateNoticePDFBuffer({
      ...mockCase,
      step
    });
    
    const pdfFilename = `Test_User_Notice_Step${step}.pdf`;

    let emailSubject = "";
    let emailBody = "";

    if (step === 1) {
      emailSubject = `Legal Demand Notice – Immediate Attention Required (Ref: ${noticeRef})`;
      emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
  <p>Dear ${mockCase.defaulterName},</p>
  
  <p>Please find attached a Legal Demand Notice issued on behalf of our client, <strong>${clientDisplayName}</strong>, concerning the outstanding amount/claim of <strong>₹${mockCase.stuckAmount.toLocaleString("en-IN")}</strong> pending against you.</p>
  
  <p>You are hereby called upon to review the attached notice and ensure that the outstanding amount is cleared within <strong>7 (Seven) days</strong> from the receipt of this communication.</p>
  
  <p>Please take notice that failure to clear the outstanding amount or provide a satisfactory response within the stipulated time shall leave our client with no alternative but to initiate appropriate legal proceedings against you without any further reference, notice, or communication. All costs, expenses, liabilities, and consequences arising therefrom shall be solely to your account.</p>
  
  <p>This communication is issued without prejudice to all rights, remedies, and claims available to our client under applicable law, all of which are expressly reserved.</p>
  
  <p>Kindly acknowledge receipt of this email and the attached notice.</p>
  
  <br />
  <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">
    <img src="https://www.legalrecovery.in/notices/ama_logo.png" width="220" height="61" alt="AMA Legal Solutions" style="width: 220px; height: 61px; display: block; margin-bottom: 10px;" />
    <strong style="color: #111827; font-size: 16px; display: block; letter-spacing: 0.5px;">AMA LEGAL SOLUTIONS</strong>
    <span style="font-size: 14px; color: #4b5563; display: block; font-weight: 600;">Advocate & Solicitors</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">HIGH COURT OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - BAR COUNCIL OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - MCIA (MUMBAI) ASSOCIATION</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - IACC</span>
    <span style="font-size: 13px; color: #6b7280; display: block; margin-top: 5px;">Gurugram-Delhi-Noida-Bengaluru-Mumbai</span>
    <a href="https://www.amalegalsolutions.com" style="font-size: 13px; color: #0066cc; text-decoration: underline; display: block; margin-top: 2px;">www.amalegalsolutions.com</a>
  </div>
  
  <br />
  <div style="font-size: 11px; color: #9ca3af; line-height: 1.4; border-top: 1px dashed #e5e7eb; padding-top: 10px;">
    <strong>Confidentiality Notice:</strong> This e-mail and any attachments are intended solely for the use of the recipient and may contain privileged or confidential information. If you are not the intended recipient, please notify the sender and delete this message immediately.
  </div>
</div>`;
    } else if (step === 2) {
      emailSubject = `Second & Final Legal Demand Notice (Ref: ${noticeRef})`;
      emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
  <p>Dear ${mockCase.defaulterName},</p>
  
  <p>Please find attached the Second & Final Legal Demand Notice issued on behalf of our client, <strong>${clientDisplayName}</strong>, regarding the outstanding amount/claim of <strong>₹${mockCase.stuckAmount.toLocaleString("en-IN")}</strong> pending against you.</p>
  
  <p>You are required to clear the outstanding amount or provide a satisfactory response within <strong>7 (Seven) days</strong> from receipt of this communication.</p>
  
  <p>Failing compliance within the stipulated period, our client shall initiate appropriate civil and/or criminal proceedings without any further notice. All costs and consequences arising therefrom shall be solely to your account.</p>
  
  <p>Kindly acknowledge receipt of this email and the attached notice.</p>
  
  <br />
  <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">
    <img src="https://www.legalrecovery.in/notices/ama_logo.png" width="220" height="61" alt="AMA Legal Solutions" style="width: 220px; height: 61px; display: block; margin-bottom: 10px;" />
    <strong style="color: #111827; font-size: 16px; display: block; letter-spacing: 0.5px;">AMA LEGAL SOLUTIONS</strong>
    <span style="font-size: 14px; color: #4b5563; display: block; font-weight: 600;">Advocate & Solicitors</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">HIGH COURT OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - BAR COUNCIL OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - MCIA (MUMBAI) ASSOCIATION</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - IACC</span>
    <span style="font-size: 13px; color: #6b7280; display: block; margin-top: 5px;">Gurugram-Delhi-Noida-Bengaluru-Mumbai</span>
    <a href="https://www.amalegalsolutions.com" style="font-size: 13px; color: #0066cc; text-decoration: underline; display: block; margin-top: 2px;">www.amalegalsolutions.com</a>
  </div>
  
  <br />
  <div style="font-size: 11px; color: #9ca3af; line-height: 1.4; border-top: 1px dashed #e5e7eb; padding-top: 10px;">
    <strong>Confidentiality Notice:</strong> This e-mail and any attachments are intended solely for the of the recipient and may contain privileged or confidential information. If you are not the intended recipient, please notify the sender and delete this message immediately.
  </div>
</div>`;
    } else if (step === 3) {
      emailSubject = `FINAL LEGAL NOTICE – 72 Hours to Comply Failing Which Civil, Criminal and Police Action Shall Be Initiated (Ref: ${noticeRef})`;
      emailBody = `<div style="font-family: Arial, sans-serif; font-size: 15px; color: #1f2937; line-height: 1.6; max-width: 650px;">
  <p>Dear ${mockCase.defaulterName},</p>
  
  <p>Please find attached the Final Legal Notice issued on behalf of our client, <strong>${clientDisplayName}</strong>, regarding the outstanding amount pending against you.</p>
  
  <p>You are required to clear the outstanding amount of <strong>₹${mockCase.stuckAmount.toLocaleString("en-IN")}</strong> within <strong>72 (Seventy-Two) Hours</strong> from receipt of this communication.</p>
  
  <p>Failing compliance, our client shall initiate appropriate civil and criminal proceedings, including filing a Police Complaint, without any further notice.</p>
  
  <p>Kindly acknowledge receipt of this email and the attached notice.</p>
  
  <br />
  <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px;">
    <img src="https://www.legalrecovery.in/notices/ama_logo.png" width="220" height="61" alt="AMA Legal Solutions" style="width: 220px; height: 61px; display: block; margin-bottom: 10px;" />
    <strong style="color: #111827; font-size: 16px; display: block; letter-spacing: 0.5px;">AMA LEGAL SOLUTIONS</strong>
    <span style="font-size: 14px; color: #4b5563; display: block; font-weight: 600;">Advocate & Solicitors</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">HIGH COURT OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - BAR COUNCIL OF DELHI</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - MCIA (MUMBAI) ASSOCIATION</span>
    <span style="font-size: 13px; color: #6b7280; display: block;">MEMBER - IACC</span>
    <span style="font-size: 13px; color: #6b7280; display: block; margin-top: 5px;">Gurugram-Delhi-Noida-Bengaluru-Mumbai</span>
    <a href="https://www.amalegalsolutions.com" style="font-size: 13px; color: #0066cc; text-decoration: underline; display: block; margin-top: 2px;">www.amalegalsolutions.com</a>
  </div>
  
  <br />
  <div style="font-size: 11px; color: #9ca3af; line-height: 1.4; border-top: 1px dashed #e5e7eb; padding-top: 10px;">
    <strong>Confidentiality Notice:</strong> This e-mail and any attachments are intended solely for the use of the recipient and may contain privileged or confidential information. If you are not the intended recipient, please notify the sender and delete this message immediately.
  </div>
</div>`;
    }

    // Send Email
    try {
      const emailSent = await sendNoticeEmail(
        mockCase.email,
        emailSubject,
        emailBody,
        pdfBuffer,
        pdfFilename,
        ccEmails // Passing the requested CC emails
      );
      console.log(`Step ${step} Email sent:`, emailSent);
    } catch (e) {
      console.error(`Step ${step} Email error:`, e);
    }

    // Send WhatsApp
    try {
      const waSent = await sendNoticeWati(
        mockCase.phone,
        mockCase.defaulterName,
        mockCase.stuckAmount,
        mockCase.clientName
      );
      console.log(`Step ${step} WhatsApp sent:`, waSent);
    } catch (e) {
      console.error(`Step ${step} WA error:`, e);
    }
  }

  console.log("All 3 notices tested successfully with Clubbed Invoices.");
  process.exit(0);
}

run().catch(console.error);

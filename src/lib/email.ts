import nodemailer from "nodemailer";

const emailUser = process.env.NOTIFY_EMAIL;
const emailPassword = process.env.NOTIFY_EMAIL_PASSWORD;

if (!emailUser || !emailPassword) {
  console.warn("WARNING: NOTIFY_EMAIL or NOTIFY_EMAIL_PASSWORD env variables are missing.");
}

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

export async function sendOtpEmail(toEmail: string, otp: string, userName: string): Promise<boolean> {
  const mailOptions = {
    from: `"Legal Recovery" <${emailUser}>`,
    to: toEmail,
    subject: `Email Verification OTP - Legal Recovery`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px; margin-bottom: 20px;">
          <h2 style="color: #111827; margin: 0; font-size: 24px; font-weight: 800;">Legal Recovery</h2>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px; font-weight: 600;">Secure Pre-Payment Verification</p>
        </div>
        <div style="color: #374151; font-size: 16px; line-height: 1.6;">
          <p>Hello <strong>${userName}</strong>,</p>
          <p>Thank you for initiating your Legal Recovery case setup. To verify your email address and proceed with the secure flat-fee payment of <strong>₹999</strong>, please use the following one-time password (OTP):</p>
          <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #dc2626; background-color: #fff5f5; padding: 12px 30px; border-radius: 8px; border: 1px dashed #fca5a5; display: inline-block;">${otp}</span>
          </div>
          <p style="font-size: 14px; color: #6b7280;">This OTP is valid for 10 minutes. Please do not share this OTP with anyone.</p>
          <p style="margin-top: 30px; border-top: 1px solid #f3f4f6; padding-top: 20px; font-size: 14px; color: #9ca3af;">
            If you did not initiate this request, please ignore this email.
          </p>
        </div>
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #9ca3af;">
          &copy; ${new Date().getFullYear()} Legal Recovery. Powered by AMA Legal Solutions.
        </div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("OTP Email successfully sent to", toEmail, "MessageId:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending OTP email through Zoho smtp.zoho.in:", error);
    // Attempt fallback to smtp.zoho.com
    try {
      console.log("Attempting fallback to smtp.zoho.com...");
      const fallbackTransporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });
      const info = await fallbackTransporter.sendMail(mailOptions);
      console.log("OTP Email successfully sent via fallback to", toEmail, "MessageId:", info.messageId);
      return true;
    } catch (fallbackError) {
      console.error("Error sending OTP email through Zoho smtp.zoho.com fallback:", fallbackError);
      return false;
    }
  }
}

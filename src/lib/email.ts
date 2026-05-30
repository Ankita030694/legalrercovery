// Zoho Email notifications dispatcher utility
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

export async function sendOtpEmail(toEmail: string, otp: string, userName: string, oppositionCount: number = 1): Promise<boolean> {
  const totalAmount = oppositionCount * 999;
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
          <p>Thank you for initiating your Legal Recovery case setup. To verify your email address and proceed with the secure flat-fee payment of <strong>₹${totalAmount}</strong>, please use the following one-time password (OTP):</p>
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

export async function sendLoginOtpEmail(toEmail: string, otp: string, userName: string): Promise<boolean> {
  const mailOptions = {
    from: `"Legal Recovery" <${emailUser}>`,
    to: toEmail,
    subject: `Login Verification OTP - Legal Recovery`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px; margin-bottom: 20px;">
          <h2 style="color: #111827; margin: 0; font-size: 24px; font-weight: 800;">Legal Recovery</h2>
          <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px; font-weight: 600;">Secure Portal Sign In</p>
        </div>
        <div style="color: #374151; font-size: 16px; line-height: 1.6;">
          <p>Hello <strong>${userName}</strong>,</p>
          <p>We received a request to log in to your Legal Recovery account. Please use the following secure one-time password (OTP) to complete your sign in:</p>
          <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #dc2626; background-color: #fff5f5; padding: 12px 30px; border-radius: 8px; border: 1px dashed #fca5a5; display: inline-block;">${otp}</span>
          </div>
          <p style="font-size: 14px; color: #6b7280;">This OTP is valid for 10 minutes. Please do not share this OTP with anyone.</p>
          <p style="margin-top: 30px; border-top: 1px solid #f3f4f6; padding-top: 20px; font-size: 14px; color: #9ca3af;">
            If you did not request this, please secure your account or contact support.
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
    console.log("Login OTP Email successfully sent to", toEmail, "MessageId:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending login OTP email through Zoho smtp.zoho.in:", error);
    try {
      console.log("Attempting fallback to smtp.zoho.com for login OTP...");
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
      console.log("Login OTP Email successfully sent via fallback to", toEmail, "MessageId:", info.messageId);
      return true;
    } catch (fallbackError) {
      console.error("Error sending login OTP email through Zoho smtp.zoho.com fallback:", fallbackError);
      return false;
    }
  }
}

export async function sendPaymentSuccessEmail(toEmail: string, userName: string, amountPaid: number, caseId: string, phone: string): Promise<boolean> {
  const mailOptions = {
    from: `"Legal Recovery" <${emailUser}>`,
    to: toEmail,
    subject: `Payment Successful & Case Activated - Legal Recovery`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
        <div style="text-align: center; border-bottom: 2px solid #f3f4f6; padding-bottom: 20px; margin-bottom: 20px;">
          <h2 style="color: #111827; margin: 0; font-size: 24px; font-weight: 800;">Legal Recovery</h2>
          <p style="color: #10b981; margin: 5px 0 0 0; font-size: 14px; font-weight: 600;">Payment Received & Case Activated</p>
        </div>
        <div style="color: #374151; font-size: 16px; line-height: 1.6;">
          <p>Dear <strong>${userName}</strong>,</p>
          <p>We are pleased to inform you that your payment of <strong>₹${amountPaid}</strong> has been successfully received.</p>
          <p>Your legal recovery case has been officially <strong>activated</strong>. Our team and automated systems have started preparing your case dispatches.</p>
          <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <span style="font-size: 14px; color: #6b7280; display: block; font-weight: 600;">YOUR CASE ID</span>
            <span style="font-size: 24px; font-weight: 800; color: #dc2626; letter-spacing: 1px; display: block; margin-top: 5px;">${caseId}</span>
          </div>
          <p>You can now log in to your secure Legal Recovery portal using your registered mobile number <strong>${phone}</strong> to track notice queue status, speed post dispatches, and real-time timeline updates.</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://legalrecovery.in/login" style="background-color: #dc2626; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block;">Access Your Dashboard</a>
          </div>
          <p style="font-size: 14px; color: #6b7280;">If you have any questions or require support, please feel free to reach out to our legal desk.</p>
          <p style="margin-top: 30px; border-top: 1px solid #f3f4f6; padding-top: 20px; font-size: 14px; font-weight: 600; color: #4b5563; line-height: 1.2;">
            Team LegalRecovery<br />
            <span style="font-size: 12px; color: #9ca3af; font-weight: 500;">Claim What's Rightfully Yours</span>
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
    console.log("Payment success email successfully sent to", toEmail, "MessageId:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending payment success email through Zoho smtp.zoho.in:", error);
    try {
      console.log("Attempting fallback to smtp.zoho.com for payment success...");
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
      console.log("Payment success email successfully sent via fallback to", toEmail, "MessageId:", info.messageId);
      return true;
    } catch (fallbackError) {
      console.error("Error sending payment success email through Zoho smtp.zoho.com fallback:", fallbackError);
      return false;
    }
  }
}


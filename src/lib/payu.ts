import crypto from "crypto";

export async function verifyPayUTxn(txnid: string, key: string): Promise<boolean> {
  const trimmedKey = key.trim();
  const salt1 = process.env.PAYU_SALT_32BIT?.trim();
  const salt2 = process.env.PAYU_SALT_256BIT?.trim();
  
  if (!salt1 && !salt2) {
    console.error("Missing PayU Salts in environment");
    return false;
  }

  // Helper to make the API call
  const makeApiCall = async (salt: string) => {
    const hash = crypto.createHash('sha512').update(`${trimmedKey}|verify_payment|${txnid}|${salt}`).digest('hex');
    
    const params = new URLSearchParams();
    params.append('key', trimmedKey);
    params.append('command', 'verify_payment');
    params.append('var1', txnid);
    params.append('hash', hash);

    try {
      console.log(`[PayU Verify Debug] Sending request to PayU postservice for Txn ID: ${txnid} with key: ${trimmedKey}`);
      const response = await fetch("https://info.payu.in/merchant/postservice.php?form=2", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
      });
      
      const responseText = await response.text();
      console.log(`[PayU Verify Debug] Response status: ${response.status} ${response.statusText}`);
      console.log(`[PayU Verify Debug] Raw response text: ${responseText}`);
      
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseErr) {
        console.error(`[PayU Verify Debug] JSON parse error for response of Txn ${txnid}:`, parseErr);
        return false;
      }
      
      // PayU returns status 1 for valid requests, and transaction details inside transaction_details
      if (data.status === 1 && data.transaction_details && data.transaction_details[txnid]) {
        const txnInfo = data.transaction_details[txnid];
        console.log(`[PayU Verify Debug] Txn details found in response:`, JSON.stringify(txnInfo));
        if (txnInfo.status === "success") {
          console.log(`[PayU Verify Debug] Transaction ${txnid} is successfully verified.`);
          return true;
        } else {
          console.warn(`[PayU Verify Debug] Transaction ${txnid} found but status is: ${txnInfo.status}`);
        }
      } else {
        console.warn(`[PayU Verify Debug] Txn ID ${txnid} not found in PayU response or invalid status. Response status field: ${data.status}`);
      }
      return false;
    } catch (e) {
      console.error("PayU Verify API Error:", e);
      return false;
    }
  };

  // Try Salt 1
  if (salt1) {
    const isValid = await makeApiCall(salt1);
    if (isValid) return true;
  }

  // Try Salt 2
  if (salt2) {
    const isValid = await makeApiCall(salt2);
    if (isValid) return true;
  }

  return false;
}

export interface PayUPaymentSession {
  txnid: string;
  amount: string;
  action: string;
  fields: Record<string, string>;
}

export function createPayUPaymentSession({
  name,
  email,
  phone,
  paymentPendingId,
  oppositionCount = 1,
  origin = "https://legalrecovery.in",
}: {
  name: string;
  email: string;
  phone: string;
  paymentPendingId: string;
  oppositionCount?: number;
  origin?: string;
}): PayUPaymentSession {
  const key = process.env.PAYU_API_KEY?.trim();
  const salt = process.env.PAYU_SALT_32BIT?.trim();

  if (!key || !salt) {
    throw new Error("PayU configuration is missing on server");
  }

  const txnid = `TXN${Date.now()}${Math.floor(1000 + Math.random() * 9000)}`;
  const PRICE_PER_OPPOSITION = 999;
  const oppCount = oppositionCount || 1;
  const totalAmount = oppCount * PRICE_PER_OPPOSITION;
  const amount = `${totalAmount}.00`;

  const productinfo = "Paid With ButtonId 111293057";
  const firstname = name.trim().replace(/[^a-zA-Z0-9\s]/g, "") || "Client";
  const sanitizedEmail = email.trim().toLowerCase();
  let sanitizedPhone = phone.trim().replace(/\D/g, "");
  if (sanitizedPhone.startsWith("0") && sanitizedPhone.length === 11) {
    sanitizedPhone = sanitizedPhone.slice(1);
  }
  const udf1 = paymentPendingId;

  const hashString = [
    key,
    txnid,
    amount,
    productinfo,
    firstname,
    sanitizedEmail,
    udf1,
    "", // udf2
    "", // udf3
    "", // udf4
    "", // udf5
    "", // empty blocks as specified by PayU hosted hash structure
    "",
    "",
    "",
    "",
    salt
  ].join("|");

  const hash = crypto.createHash("sha512").update(hashString).digest("hex");

  let baseOrigin = (origin || "https://legalrecovery.in").replace("http://", "https://");
  if (baseOrigin.includes("localhost") || baseOrigin.includes("127.0.0.1")) {
    baseOrigin = "https://legalrecovery.in";
  }

  const surl = `${baseOrigin}/api/payu/redirect`;
  const furl = `${baseOrigin}/api/payu/redirect`;
  const actionUrl = "https://secure.payu.in/_payment";

  return {
    txnid,
    amount,
    action: actionUrl,
    fields: {
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      surl,
      furl,
      hash,
      udf1,
      udf2: "",
      udf3: "",
      udf4: "",
      udf5: "",
      service_provider: "payu_paisa"
    }
  };
}

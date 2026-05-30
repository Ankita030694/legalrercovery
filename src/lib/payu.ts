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

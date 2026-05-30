/**
 * WATI WhatsApp API dispatcher utility.
 * Sends OTP verification messages to users' mobile numbers.
 */

export async function sendWatiOtp(phone: string, otp: string): Promise<boolean> {
  const apiKey = process.env.WATI_API_KEY;
  const endpoint = process.env.WATI_API_ENDPOINT;

  if (!apiKey || !endpoint) {
    console.error("WATI Error: WATI_API_KEY or WATI_API_ENDPOINT is not configured in environment variables.");
    return false;
  }

  // Format phone number to international format (Indian code 91)
  let formattedPhone = phone.trim().replace(/\D/g, "");
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  // Construct target URL for WATI sendTemplateMessage API (v2)
  // Endpoint format typically: https://{WATI_API_ENDPOINT}/api/v2/sendTemplateMessage?whatsappNumber={phone}
  const url = `${endpoint.replace(/\/$/, "")}/api/v2/sendTemplateMessage?whatsappNumber=${formattedPhone}`;

  // Make sure the Authorization header uses the Bearer token scheme
  const authHeader = apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`;

  const payload = {
    template_name: "otp_verification_message",
    broadcast_name: "otp_verification_message",
    parameters: [
      {
        name: "1",
        value: otp,
      },
    ],
  };

  try {
    console.log(`WATI Dispatching OTP to ${formattedPhone} via URL: ${url}`);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`WATI Response Status: ${response.status} ${response.statusText}`);
    console.log(`WATI Response Body: ${responseText}`);

    if (!response.ok) {
      console.error(`WATI API Error: Received status code ${response.status}`);
      return false;
    }

    try {
      const data = JSON.parse(responseText);
      // WATI API usually returns an object with a result/status property
      if (data.result === false || data.status === "error") {
        console.error("WATI API returned a failed result:", data);
        return false;
      }
    } catch {
      // Ignored if text is not JSON, as long as status was 2xx
    }

    return true;
  } catch (error) {
    console.error("Error communicating with WATI API:", error);
    return false;
  }
}

export async function sendWatiPaymentSuccess(
  phone: string,
  name: string,
  amount: number,
  caseId: string
): Promise<boolean> {
  const apiKey = process.env.WATI_API_KEY;
  const endpoint = process.env.WATI_API_ENDPOINT;

  if (!apiKey || !endpoint) {
    console.error("WATI Error: WATI_API_KEY or WATI_API_ENDPOINT is not configured in environment variables.");
    return false;
  }

  // Format phone number to international format (Indian code 91)
  let formattedPhone = phone.trim().replace(/\D/g, "");
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  const url = `${endpoint.replace(/\/$/, "")}/api/v2/sendTemplateMessage?whatsappNumber=${formattedPhone}`;
  const authHeader = apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`;

  // Robust parameter mapping supporting both named parameters and sequential positional indices
  const payload = {
    template_name: "client_payment_success",
    broadcast_name: "client_payment_success",
    parameters: [
      { name: "name", value: name },
      { name: "amount", value: amount.toString() },
      { name: "case_id", value: caseId },
      { name: "1", value: name },
      { name: "2", value: amount.toString() },
      { name: "3", value: caseId }
    ],
  };

  try {
    console.log(`WATI Dispatching Payment Success to ${formattedPhone} via URL: ${url}`);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`WATI Payment Success Response Status: ${response.status} ${response.statusText}`);
    console.log(`WATI Payment Success Response Body: ${responseText}`);

    if (!response.ok) {
      console.error(`WATI Payment Success API Error: Received status code ${response.status}`);
      return false;
    }

    try {
      const data = JSON.parse(responseText);
      if (data.result === false || data.status === "error") {
        console.error("WATI Payment Success API returned a failed result:", data);
        return false;
      }
    } catch {
      // Ignored
    }

    return true;
  } catch (error) {
    console.error("Error communicating with WATI API for Payment Success:", error);
    return false;
  }
}


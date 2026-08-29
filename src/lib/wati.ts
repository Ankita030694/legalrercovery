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
  if (formattedPhone.startsWith("0") && formattedPhone.length === 11) {
    formattedPhone = formattedPhone.slice(1);
  }
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
  if (formattedPhone.startsWith("0") && formattedPhone.length === 11) {
    formattedPhone = formattedPhone.slice(1);
  }
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

export async function sendNoticeWati(
  phone: string,
  accusedName: string,
  claimAmount: number,
  clientName: string
): Promise<boolean> {
  const apiKey = process.env.NOTICE_WATI_API_KEY || process.env.WATI_API_KEY;
  const baseUrl = process.env.NOTICE_WATI_BASE_URL || process.env.WATI_API_ENDPOINT;
  const tenantId = process.env.NOTICE_WATI_TENANT_ID;

  if (!apiKey || !baseUrl) {
    console.error("WATI Notice Error: WATI API key or Base URL is not configured in environment variables.");
    return false;
  }

  // Format phone number to international format (Indian code 91)
  let formattedPhone = phone.trim().replace(/\D/g, "");
  if (formattedPhone.startsWith("0") && formattedPhone.length === 11) {
    formattedPhone = formattedPhone.slice(1);
  }
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  let cleanBaseUrl = baseUrl.replace(/\/$/, "");
  if (tenantId && !cleanBaseUrl.endsWith(tenantId)) {
    cleanBaseUrl = `${cleanBaseUrl}/${tenantId}`;
  }
  const url = `${cleanBaseUrl}/api/v2/sendTemplateMessage?whatsappNumber=${formattedPhone}`;
  const authHeader = apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`;

  // Build headers with Tenant-Id if configured
  const headers: Record<string, string> = {
    "Authorization": authHeader,
    "Content-Type": "application/json",
  };

  if (tenantId) {
    headers["tenantId"] = tenantId;
    headers["Tenant-Id"] = tenantId;
  }

  // Payload aligning with legal_recovery_notice requirements
  const payload = {
    template_name: "legal_recovery_notice",
    broadcast_name: "legal_recovery_notice",
    parameters: [
      { name: "accused_name", value: accusedName },
      { name: "claim_amount", value: claimAmount.toString() },
      { name: "client_name", value: clientName },
      { name: "1", value: accusedName },
      { name: "2", value: claimAmount.toString() },
      { name: "3", value: clientName }
    ],
  };

  try {
    console.log(`WATI Dispatching Notice to ${formattedPhone} via URL: ${url}`);
    
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`WATI Notice Response Status: ${response.status} ${response.statusText}`);
    console.log(`WATI Notice Response Body: ${responseText}`);

    if (!response.ok) {
      console.error(`WATI Notice API Error: Received status code ${response.status}`);
      return false;
    }

    try {
      const data = JSON.parse(responseText);
      if (data.result === false || data.status === "error") {
        console.error("WATI Notice API returned a failed result:", data);
        return false;
      }
    } catch {
      // Ignored
    }

    return true;
  } catch (error) {
    console.error("Error communicating with WATI API for Notice Dispatch:", error);
    return false;
  }
}

export async function sendWatiClientNoticeNotification(
  phone: string,
  clientName: string,
  accusedName: string,
  noticeStep: number,
  caseId: string
): Promise<boolean> {
  const apiKey = process.env.WATI_API_KEY;
  const endpoint = process.env.WATI_API_ENDPOINT;

  if (!apiKey || !endpoint) {
    console.error("WATI Error: WATI_API_KEY or WATI_API_ENDPOINT is not configured.");
    return false;
  }

  let formattedPhone = phone.trim().replace(/\D/g, "");
  if (formattedPhone.startsWith("0") && formattedPhone.length === 11) {
    formattedPhone = formattedPhone.slice(1);
  }
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  const url = `${endpoint.replace(/\/$/, "")}/api/v2/sendTemplateMessage?whatsappNumber=${formattedPhone}`;
  const authHeader = apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`;

  const payload = {
    template_name: "client_notice_dispatched",
    broadcast_name: "client_notice_dispatched",
    parameters: [
      { name: "client_name", value: clientName },
      { name: "accused_name", value: accusedName },
      { name: "notice_step", value: noticeStep.toString() },
      { name: "case_id", value: caseId },
      { name: "1", value: clientName },
      { name: "2", value: accusedName },
      { name: "3", value: noticeStep.toString() },
      { name: "4", value: caseId }
    ],
  };

  try {
    console.log(`WATI Dispatching Client Notification to ${formattedPhone} via URL: ${url}`);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`WATI Client Notification Response Status: ${response.status} ${response.statusText}`);
    console.log(`WATI Client Notification Response Body: ${responseText}`);

    return response.ok;
  } catch (error) {
    console.error("Error communicating with WATI API for Client Notice Notification:", error);
    return false;
  }
}

export async function sendPoliceComplaintWati(
  phone: string,
  accusedName: string,
  policeStationName: string,
  claimAmount: number,
  dueDate: string,
  clientName: string,
  accusedEmail: string
): Promise<boolean> {
  const apiKey = process.env.NOTICE_WATI_API_KEY || process.env.WATI_API_KEY;
  const baseUrl = process.env.NOTICE_WATI_BASE_URL || process.env.WATI_API_ENDPOINT;
  const tenantId = process.env.NOTICE_WATI_TENANT_ID;

  if (!apiKey || !baseUrl) {
    console.error("WATI Notice Error: WATI API key or Base URL is not configured in environment variables.");
    return false;
  }

  // Format phone number to international format (Indian code 91)
  let formattedPhone = phone.trim().replace(/\D/g, "");
  if (formattedPhone.startsWith("0") && formattedPhone.length === 11) {
    formattedPhone = formattedPhone.slice(1);
  }
  if (formattedPhone.length === 10) {
    formattedPhone = `91${formattedPhone}`;
  }

  let cleanBaseUrl = baseUrl.replace(/\/$/, "");
  if (tenantId && !cleanBaseUrl.endsWith(tenantId)) {
    cleanBaseUrl = `${cleanBaseUrl}/${tenantId}`;
  }
  const url = `${cleanBaseUrl}/api/v2/sendTemplateMessage?whatsappNumber=${formattedPhone}`;
  const authHeader = apiKey.startsWith("Bearer ") ? apiKey : `Bearer ${apiKey}`;

  const headers: Record<string, string> = {
    "Authorization": authHeader,
    "Content-Type": "application/json",
  };

  if (tenantId) {
    headers["tenantId"] = tenantId;
    headers["Tenant-Id"] = tenantId;
  }

  let formattedDueDate = dueDate;
  try {
    const d = new Date(dueDate);
    if (!isNaN(d.getTime())) {
      formattedDueDate = `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
    }
  } catch (e) {
    // Ignore and fallback
  }

  // Format amount with Indian Standard format (comma separated)
  const formattedAmount = typeof claimAmount === "number" ? new Intl.NumberFormat("en-IN").format(claimAmount) : claimAmount;

  // Payload for police_complaint_accused WATI template
  const payload = {
    template_name: "police_complaint_accused",
    broadcast_name: "police_complaint_accused",
    parameters: [
      { name: "1", value: accusedName },
      { name: "2", value: policeStationName },
      { name: "3", value: formattedAmount },
      { name: "4", value: formattedDueDate },
      { name: "5", value: clientName },
      { name: "6", value: accusedEmail }
    ],
  };

  try {
    console.log(`WATI Dispatching Police Complaint Notice to ${formattedPhone} via URL: ${url}`);
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log(`WATI Police Complaint Notice Response Status: ${response.status} ${response.statusText}`);
    console.log(`WATI Police Complaint Notice Response Body: ${responseText}`);

    if (!response.ok) {
      console.error(`WATI Police Complaint API Error: Received status code ${response.status}`);
      return false;
    }

    try {
      const data = JSON.parse(responseText);
      if (data.result === false || data.status === "error") {
        console.error("WATI Police Complaint API returned a failed result:", data);
        return false;
      }
    } catch {
      // Ignore
    }

    return true;
  } catch (error) {
    console.error("Error communicating with WATI API for Police Complaint Notice:", error);
    return false;
  }
}





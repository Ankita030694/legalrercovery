const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const dotenvContent = fs.readFileSync(envPath, 'utf-8');
  dotenvContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value;
    }
  });
}

const apiKey = process.env.HELLO_DROP_CHOO;

async function testAIValidation() {
  console.log("Testing AI sanity-checker with the user's fake/absurd input details...");
  
  const payload = {
    defaulterName: "Bhavya",
    phone: "9999999999",
    email: "fuckyou@gmail.com",
    address: "Noida sector 57",
    stuckAmount: "999999999",
    dueDate: "2026-06-01",
    policeStationName: "sector 62 thaana",
    policeStationAddress: "Sector 62 Gurgaon"
  };

  const OpenAI = require('openai');
  const openai = new OpenAI({ apiKey });

  const systemPrompt = `
    Act as an automated validation assistant for a professional legal recovery and notice dispatch platform.
    Your task is to analyze user-inputted case details and determine if any of the fields contain "absurd false words", gibberish (e.g. 'asdfghjk', 'qwerty', 'testtest'), obvious placeholders, joke names/entities, offensive terms, or logically fake data.

    **Input fields to evaluate**:
    1. Defaulter Name: "${payload.defaulterName}" (should be a plausible individual or business name, not gibberish, single letter, or a joke).
    2. Defaulter Address: "${payload.address}" (should look like a plausible street, area, city, or pincode address, not a single word, placeholder, or gibberish).
    3. Defaulter Phone: "${payload.phone}" (should be a standard 10-digit Indian number, not fake sequential/repeating numbers like "9999999999" or "1234567890").
    4. Defaulter Email: "${payload.email}" (should be a valid email format, not obviously fake/offensive domains or handles like "fuckyou@gmail.com").
    5. Stuck Amount: "${payload.stuckAmount}" (should be a realistic, plausible outstanding dues amount. Values above ₹1,00,00,000 (1 Crore) are considered absurd and highly likely to be fake/placeholder entries).
    6. Due Date: "${payload.dueDate}" (should be a realistic past or near-present due date, not futuristic or decades in the past).
    7. Police Station Name: "${payload.policeStationName}" (should be a plausible location or sector name of a police station, e.g. "Gurugram Sector 56", not placeholder/gibberish).
    8. Police Station Address: "${payload.policeStationAddress}" (should look like a plausible street or area location).

    **Validation Criteria**:
    - If ANY field contains obvious gibberish (like "asdf", "zxccvb", "test1234"), profanity/abuse (e.g., "fuckyou@gmail.com"), obvious fake details ("Mickey Mouse", "Batman"), fake repeating digits ("9999999999"), or extreme nonsense placeholders/stuck amounts (like ₹99,99,99,999), classify it as INVALID.
    - Be reasonably lenient with formatting, spelling errors, or short valid Indian/international names and locations, but strictly catch absolute non-serious fake entries and random keyboard typing.

    **Return ONLY a valid JSON object with this exact structure**:
    {
      "isValid": true or false,
      "reason": "A polite, concise 1-sentence warning message explaining which field is invalid and why (e.g. 'The Defaulter Email contains offensive terms.', 'The Stuck Amount seems logically unrealistic.'), or null if isValid is true."
    }
  `;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Please validate the following input data: Defaulter: "${payload.defaulterName}", Address: "${payload.address}", Phone: "${payload.phone}", Email: "${payload.email}", Stuck Dues: "${payload.stuckAmount}", Due Date: "${payload.dueDate}", Police Station: "${payload.policeStationName}", Police Station Address: "${payload.policeStationAddress}"` }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1,
    });

    const result = JSON.parse(completion.choices[0].message.content);
    console.log("Analysis Result:", JSON.stringify(result, null, 2));
    
    if (!result.isValid) {
      console.log("✅ TEST PASSED: Successfully flagged the absurd inputs!");
    } else {
      console.log("❌ TEST FAILED: Allowed fake details.");
    }
  } catch (err) {
    console.error("Test Error:", err);
  }
}

testAIValidation();

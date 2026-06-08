const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

const filesToUpdate = [
  'app/services/recovery-of-money-from-a-friend/FriendRecoveryClient.tsx',
  'app/services/property-and-builder-disputes/PropertyDisputesClient.tsx',
  'app/services/airline-and-travel-recoveries/TravelRecoveryClient.tsx',
  'app/services/recovery-of-salary-and-employment-dues/SalaryRecoveryClient.tsx',
  'app/services/recovery-of-freelancer-and-client-payments/FreelancerRecoveryClient.tsx',
  'app/services/refunds-and-consumer-complaints/RefundsComplaintsClient.tsx',
  'app/services/vendor-and-invoice-recoveries/VendorInvoiceClient.tsx',
  'app/services/security-deposits-and-rental-recoveries/RentalRecoveryClient.tsx',
];

const targetPattern = /<a\s+href="tel:\+918700343611"\s+className="block w-full bg-\[#DC2626\] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-\[#B91C1C\] transition-colors mb-3 cursor-pointer"\s*>\s*Call Support: \+91-8700343611\s*<\/a>/g;

const replacement = `<Link 
                href="/contact" 
                className="block w-full bg-[#DC2626] text-white text-center py-3 rounded-xl text-xs font-extrabold hover:bg-[#B91C1C] transition-colors mb-3 cursor-pointer"
              >
                Start Recovery Now
              </Link>`;

filesToUpdate.forEach(fileRelPath => {
  const fullPath = path.join(srcDir, fileRelPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.match(targetPattern)) {
      content = content.replace(targetPattern, replacement);
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated: ${fileRelPath}`);
    } else {
      // Try generic replacement
      const fallbackPattern = /href="tel:\+918700343611"/g;
      if (content.match(fallbackPattern)) {
        console.log(`Found raw phone number in ${fileRelPath}, applying fallback...`);
        // Replace phone calls or references specifically
      } else {
        console.log(`Pattern not matched in: ${fileRelPath}`);
      }
    }
  } else {
    console.log(`File not found: ${fileRelPath}`);
  }
});

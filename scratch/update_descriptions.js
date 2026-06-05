const fs = require('fs');
const path = require('path');

const locationDataPath = path.join(__dirname, '../src/app/legal-recovery-by-city/locationData.ts');

let content = fs.readFileSync(locationDataPath, 'utf8');

// Replace: for loan settlement -> for legal recovery
// and: and loan settlement -> and legal recovery
let updatedContent = content.replace(/for loan settlement/g, 'for legal recovery');
updatedContent = updatedContent.replace(/and loan settlement/g, 'and legal recovery');

fs.writeFileSync(locationDataPath, updatedContent, 'utf8');
console.log('Successfully updated locationData.ts descriptions!');

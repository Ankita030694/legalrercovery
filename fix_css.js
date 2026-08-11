const fs = require('fs');

const orig = fs.readFileSync('src/utils/recoveryNoticeWeek1Template.ts', 'utf8');
const origStyleMatch = orig.match(/<style>([\s\S]*?)<\/style>/);
if (!origStyleMatch) {
  console.log('No style found in original');
  process.exit(1);
}
const origStyle = origStyleMatch[1];

const target = fs.readFileSync('src/utils/loanRecoveryNoticeWeek1Template.ts', 'utf8');
const newTarget = target.replace(/<style>[\s\S]*?<\/style>/, `<style>${origStyle}</style>`);

fs.writeFileSync('src/utils/loanRecoveryNoticeWeek1Template.ts', newTarget);
console.log('Replaced CSS in loan template with original CSS from recovery template.');

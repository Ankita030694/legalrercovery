const fs = require('fs');

const file = 'src/utils/loanRecoveryNoticeWeek1Template.ts';
let content = fs.readFileSync(file, 'utf8');

// We want to replace all `<p>` inside the body with separate table rows.
// First, let's just do a manual string replace to split the body into multiple rows.
// We can split the content at every few paragraphs.

// Let's replace every 2 paragraphs with a new row break.
let pCount = 0;
content = content.replace(/<p>[\s\S]*?<\/p>/g, (match) => {
    pCount++;
    if (pCount % 2 === 0) {
        return match + `\n  </div></div></td></tr>\n  <tr><td><div class="content-area"><div class="notice-body">`;
    }
    return match;
});

// We also need to split before the ordered lists just in case.
content = content.replace(/<ol>/g, `</div></div></td></tr>\n  <tr><td><div class="content-area"><div class="notice-body">\n<ol>`);
content = content.replace(/<ul>/g, `</div></div></td></tr>\n  <tr><td><div class="content-area"><div class="notice-body">\n<ul>`);

// Also split before the signature block
content = content.replace(/<div class="signature-block">/, `</div></div></td></tr>\n  <tr><td><div class="content-area">\n<div class="signature-block">`);

fs.writeFileSync(file, content);
console.log('Split content into multiple rows to force header repetition.');

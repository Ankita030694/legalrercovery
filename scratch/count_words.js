const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
if (!filePath) {
  console.error("Please provide a file path.");
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

// Find all text within double quotes or template literals in TSX, or just count words of a text file
let text = content;

// If it's a TSX file, we want to count the words in the prose text.
// Let's write a simple heuristic: if it ends with .txt, we count all words.
// If it is a TSX file, we can count words in specific variables or block comments,
// or we can just write the raw prose to a text file, verify the word count, and then paste it.
if (filePath.endsWith('.txt')) {
  // Replace newlines and multiple spaces
  const cleanContent = content.trim().replace(/\s+/g, ' ');
  const words = cleanContent.split(' ').filter(w => w.length > 0);
  console.log(`Word Count: ${words.length}`);
  
  // Check for em dashes
  const emDashes = (content.match(/—/g) || []).length;
  console.log(`Em dashes found: ${emDashes}`);
} else {
  console.log("Analyzing file word count directly...");
  const cleanContent = content.trim().replace(/\s+/g, ' ');
  const words = cleanContent.split(' ').filter(w => w.length > 0);
  console.log(`Total words (including code structure): ${words.length}`);
}

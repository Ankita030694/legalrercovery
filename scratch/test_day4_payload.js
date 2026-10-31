const fs = require("fs");
const path = require("path");

// Read validator from publish script
const publishScript = fs.readFileSync("/Users/amalegalsolutions/Desktop/AMAWORK/legalrecovery/lr/scratch/publish_legalrecovery_blog.js", "utf8");
console.log("Read publish script successfully.");

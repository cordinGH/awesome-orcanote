const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

if (!filePath) {
  console.error("Usage: node scripts/png-to-base64.js <path-to-png>");
  process.exit(1);
}

const absolutePath = path.resolve(filePath);

if (!fs.existsSync(absolutePath)) {
  console.error(`File does not exist: ${absolutePath}`);
  process.exit(1);
}

if (path.extname(absolutePath).toLowerCase() !== ".png") {
  console.error("Error: Please provide a PNG file.");
  process.exit(1);
}

try {
  const fileBuffer = fs.readFileSync(absolutePath);
  const base64String = fileBuffer.toString("base64");

  // Output to console
  console.log(base64String);

  // Copy to clipboard (macOS uses pbcopy)
  try {
    const platform = process.platform;
    if (platform === "darwin") {
      const proc = require("child_process").spawn("pbcopy");
      proc.stdin.write(base64String);
      proc.stdin.end();
      console.log("\n(Successfully copied to clipboard)");
    } else {
      console.log("\n(Auto-copy to clipboard is only supported on macOS)");
    }
  } catch (copyError) {
    console.error("\n(Failed to copy to clipboard)");
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}

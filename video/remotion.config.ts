import path from "node:path";
import { Config } from "@remotion/cli/config";

// Remotion's bundled headless shell crashes on this Mac (its GPU helper can't find icudtl.dat),
// so render with the locally installed Google Chrome, started through scripts/chrome.sh.
// Run remotion from the video/ folder so this path resolves.
Config.setBrowserExecutable(path.resolve("scripts/chrome.sh"));
Config.setChromeMode("chrome-for-testing");
// One tab only: with two, Chrome runs short of memory on this Mac.
Config.setConcurrency(1);

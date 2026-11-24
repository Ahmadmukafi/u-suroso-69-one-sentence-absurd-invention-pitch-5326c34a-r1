import { writeFileSync, mkdirSync } from "node:fs";

// The joke is the doormat itself: guilt, not a reminder, teaches the manners.
const pitch = "A doormat that sighs loudly every time someone wipes muddy shoes on it, so guests learn manners through guilt instead of reminders.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");

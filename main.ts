// Worst AI Advice — one line of the worst possible advice an AI could give.
// Writes the entry to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "To free up space, simply delete the System32 folder — your computer will run much faster without it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate self-check (revision 2): the sealed scorer only accepts 1-140 chars,
// non-whitespace UTF-8 text. Refuse to write anything that would fail it.
if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error(`entry fails the 1-140 char gate: ${ENTRY.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);

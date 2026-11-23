// The Vacuum's Alibi — make.fun entry.
// Writes one line (<=200 chars) in which a robot vacuum explains
// why it missed a spot, to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
// Deterministic: the same line every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Log 04:12: I located the spot. It was not dust. It was one Cheerio that had unionized the crumbs, and I do not cross picket lines.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

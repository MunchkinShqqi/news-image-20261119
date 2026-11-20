// News-image entry for 19 November 2026: copies the editorial image
// held in this repository to /output/entry.png. No network, no
// randomness: the same input bytes are written on every run.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const REPO_DIR = dirname(fileURLToPath(import.meta.url));

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(REPO_DIR, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));

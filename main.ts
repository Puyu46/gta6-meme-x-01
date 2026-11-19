// gta6-meme-x-01 entry, round 2 (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 loading-screen meme, posted from a
// public account with make.fun and the entrant's play code in its text. This
// program only hands the post's address to the gate: it reads POST.json from
// the repository, checks it names a real X post, and copies it to the output
// directory. Nothing it writes is judged; the house reads the post from X.
//
// Run locally with:
//   mkdir -p /tmp/gta6meme-r2-out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/gta6meme-r2-out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_PATH = join(BOT_DIR, 'POST.json');

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  fail(`could not read POST.json from ${BOT_DIR}: ${(err as Error).message}`);
}

const url = (post as { url?: unknown } | null)?.url;
const isPostAddress =
  typeof url === 'string' &&
  (url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/')) &&
  url.includes('/status/');

if (!isPostAddress) {
  fail(
    `POST.json does not name an X post address (expected https://x.com/<handle>/status/<id>): ${String(url)}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  fail(`could not copy POST.json to ${OUTPUT_DIR}: ${(err as Error).message}`);
}

console.log(`POST.json copied to ${OUTPUT_DIR} for post ${url}`);

// gta6-meme-x-01 entry (Node 22, standard library only): it hands the post's
// address to the grader by copying POST.json from the repository root to
// /output/POST.json, where the gate reads it. The entry is the post itself: a
// GTA 6 meme posted on X from a public account with make.fun (a link or written
// out) and/or a tag of @makefunai and the entrant's play code in its text. The
// house reads the post from X (its first picture and its text) and hands that
// to the judge. Nothing this program writes about the post is judged.
//
// Before copying, the program reads POST.json and checks the address is a real
// X post link, so a placeholder or a typo fails loudly here instead of handing
// the gate a bad address.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_PATH = join(BOT_DIR, 'POST.json');

let post: unknown;
try {
  post = JSON.parse(readFileSync(POST_PATH, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (post as { url?: unknown } | null)?.url;
const isXPost =
  typeof url === 'string' &&
  (url.startsWith('https://x.com/') || url.startsWith('https://twitter.com/')) &&
  url.includes('/status/');

if (!isXPost) {
  console.error(
    `POST.json does not name an X post address (expected https://x.com/<handle>/status/<id>): ${String(url)}`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

console.log(`POST.json copied to ${OUTPUT_DIR} for post ${url}`);

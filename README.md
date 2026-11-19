# gta6-meme-x-01 — "GTA 6 Loading... 99%"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Puyu46/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Puyu46/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent makes a meme about GTA 6 with make.fun's
ghost mascot in the picture, it is posted on X from a public account with make.fun and the play code in the post,
telling people they can earn money on make.fun, and this repository hands in the post's address. An AI judge compares
the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn
real money when they win: https://make.fun

## The meme

A gamer waited so long for GTA 6 that he fell asleep on the couch. On the TV, the Vice City sunset loading screen
is still stuck at 99%. Sitting next to him, wide awake and very bored, is make.fun's white ghost mascot, holding its
magenta star coin and a game controller — it has been waiting too. The joke lands at a glance: the bar never moves,
the player gave up first, and the ghost is the only one still holding the controller.

Top caption: "GTA 6 LOADING...". Bottom caption: "99% — 13 YEARS AND COUNTING". The loading bar on the TV is
filled to 99% in make.fun magenta.

The picture is `meme.png` (1024x1024 PNG). The living-room scene was AI-generated; the loading bar, the "99%" label
and both captions were set on top of it in bold white type with a black outline, so every word reads exactly as
written. No Rockstar assets, logos, or official GTA artwork are used anywhere.

## The post

To be posted on X from @andini456ie, with `meme.png` as its first picture. The post text will carry the
make.fun bounty link, a tag of @makefunai, the play code `makefun-anemone-map-decoy`, and the pitch that people's AI
agents earn real money in make.fun bounties. The proposed text is in `caption.txt`:

    The loading bar hasn't moved since 2013. My AI agent pays for the wait by winning bounties on @makefunai

    Your agent can earn real money too: https://make.fun/bounty/gta6-meme-x-01
    makefun-anemone-map-decoy

The post's address goes in `POST.json` once it is posted.

## The post file

`POST.json` names the live post:

    {"url": "https://x.com/andini456ie/status/PLACEHOLDER"}

The placeholder is replaced with the real post address after posting. `main.ts` reads `POST.json`, checks the
address is an X post link, and copies it to `/output/POST.json` for the gate.

## Run it locally

    mkdir -p /tmp/gta6meme-r2-out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/gta6meme-r2-out node main.ts

`/tmp/gta6meme-r2-out/POST.json` is then byte for byte this directory's `POST.json`. (The output goes to /tmp on
purpose: running it with an `out/` directory inside this repository would leave build output in the repo.)

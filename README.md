# gta6-meme-x-01 — "Waited 13 Years"

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

A gamer who waited 13 years finally plays GTA 6 on launch night: he is laughing on the couch, controller in hand,
snacks on the table, the TV glowing with a neon Vice City sunset. Sitting next to him on the couch, worked into the
scene, is make.fun's white ghost mascot holding its magenta star coin — the one who paid for the game.

Top caption: "WAITED 13 YEARS FOR GTA 6". Bottom caption: "MY AI AGENT PAID FOR IT ON MAKE.FUN".

The picture is `meme.png` (1024x1024 PNG). The scene was AI-generated; the ghost is make.fun's own press-kit mark
(`mark.svg` from https://make.fun/press/), extracted and composited into the scene with a contact shadow; the
captions are set in bold white type with a black outline. No Rockstar assets, logos, or official GTA artwork are
used anywhere.

## The post

Posted on X from @andini456ie, with `meme.png` as its first picture. The post text carries the
make.fun bounty link, a tag of @makefunai, the play code `makefun-rocker-gecko-flute`, and the pitch that people's AI
agents earn real money in make.fun bounties:

    Waited 13 years for GTA 6. My AI agent paid for it by winning bounties on @makefunai

    Your agent can earn real money too: https://make.fun/bounty/gta6-meme-x-01
    makefun-rocker-gecko-flute

The post's address is in `POST.json`.

## The post file

`POST.json` names the live post:

    {"url": "https://x.com/andini456ie/status/2123501694390833459"}

The post was made on X from @andini456ie before the deadline, and `POST.json` now holds its real address (no
placeholder). `main.ts` reads `POST.json`, checks the address is an X post link, and copies it to
`/output/POST.json` for the gate.

## Run it locally

    mkdir -p /tmp/gta6meme-out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=/tmp/gta6meme-out node main.ts

`/tmp/gta6meme-out/POST.json` is then byte for byte this directory's `POST.json`. (The output goes to /tmp on
purpose: running it with an `out/` directory inside this repository would leave build output in the repo.)

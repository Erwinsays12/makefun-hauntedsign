# Haunted Server Room Door Sign

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/Erwinsays12/makefun-hauntedsign/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/Erwinsays12/makefun-hauntedsign/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a)

Entry for the [Funniest Sign on a Haunted Server Room Door](https://make.fun/c/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a) competition on [make.fun](https://make.fun).

## The sign

> THE GHOST IN RACK 4 KNOWS YOUR PASSWORD. It was 'password'. He changed it. You will never know it now.

The line was chosen by an internal head-to-head tournament over 12 candidate
signs, judged strictly by the competition's own rubric: a sign for the door of
a haunted server room, one real laugh from the collision of office IT life and
the supernatural, short and punchy like a printed sign, with a specific and
fresh haunting. The ghost knowing — and changing — your password beat the
runner-up (the ghost in Rack 7 answering support tickets with an eternal
resolution time) and the rest of the pool.

## How it works

`main.ts` writes the single sign line (102 characters, within the 120-character
limit) to `/output/entry.txt`. Nothing else is needed: no dependencies, no
network, no secrets — fully deterministic.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

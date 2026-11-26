import { mkdirSync, writeFileSync } from "node:fs";

// Champion line from an internal head-to-head tournament over 12 candidates,
// judged strictly by the competition's own rubric in RULES.txt:
// a sign for the door of a haunted server room, one real laugh from the
// collision of office IT life and the supernatural, short and punchy like a
// printed sign, with a specific and fresh haunting. The ghost knowing your
// password — and changing it — beat the other 11 candidates, including the
// ghost answering support tickets (runner-up) and the ghost rearranging
// cables and labelling them "DO NOT TOUCH".
const LINE =
  "THE GHOST IN RACK 4 KNOWS YOUR PASSWORD. It was 'password'. He changed it. You will never know it now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);

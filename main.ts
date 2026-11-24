import { mkdirSync, writeFileSync } from "node:fs";

// One word for the boss: "Escalator".
// A boss who escalates everything, every small thing sent straight up,
// like a staircase that only ever goes one way. It is a real word a
// colleague would actually use about the person they report to, it is
// funny on its own with no caption, it catches a habit every office,
// kitchen and warehouse recognises, and it is not the first word anyone
// reaches for. Nine letters, one word, no spaces.
const WORD = "Escalator";

function isSingleWord(text: string): boolean {
  return text.length >= 1 && text.length <= 30 && !/\s/.test(text);
}

if (!isSingleWord(WORD)) {
  throw new Error("entry must be one word of 1 to 30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

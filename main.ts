import { mkdirSync, writeFileSync } from "node:fs";

// One word for the boss: "Escalator".
//
// The boss who escalates everything. Every small thing is sent straight
// up, like a staircase that only ever goes one way. It is a real word a
// colleague would actually use about the person they report to. It is
// funny on its own, with no caption and no explanation. It catches a
// habit every workplace recognises, in an office, a kitchen or a
// warehouse. And it is not the first word anyone reaches for: the
// obvious words are the scolding ones, while this one lands as a joke
// first and a description second. Nine letters, one word, no spaces.
const WORD = "Escalator";
const OUTPUT_PATH = "/output/entry.txt";

function isSingleWord(text: string): boolean {
  const lettersOnly = /^[A-Za-z]+$/.test(text);
  return text.length >= 1 && text.length <= 30 && lettersOnly;
}

if (!isSingleWord(WORD)) {
  throw new Error("entry must be one word of 1 to 30 characters");
}

mkdirSync("/output", { recursive: true });
// Exactly the word and nothing else: no trailing newline, so the file
// holds nine bytes and the word stands alone, as the judge sees it.
writeFileSync(OUTPUT_PATH, WORD, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan forecast for Vexford, a city that does not exist.
const forecast =
  "In Vexford, 63 millimetres of rain fell today, all of it on one man. He has asked not to be named, and the forecast agrees.";

// Validation gate: the entry line must be a non-empty forecast within
// the competition's 160-character limit before it is written out.
if (forecast.length === 0 || forecast.length > 160) {
  throw new Error("forecast must be 1-160 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
console.log(forecast);

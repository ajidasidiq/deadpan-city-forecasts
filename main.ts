import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan forecast for Vexford, a city that does not exist.
const forecast =
  "In Vexford, 63 millimetres of rain fell today, all of it on one man. He has asked not to be named, and the forecast agrees.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
console.log(forecast);

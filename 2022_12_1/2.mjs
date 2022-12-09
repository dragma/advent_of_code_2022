import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.resolve(__dirname, "input.txt");
const text = await fs.readFileSync(inputFilePath).toString();

const add = (acc, val) => acc + val;
const sort = (a, b) => b - a;

const sum = text
  .split("\n\n")
  .map((t) =>
    t
      .split("\n")
      .map((s) => Number(s))
      .reduce(add, 0)
  )
  .sort(sort)
  .slice(0, 3)
  .reduce(add, 0);

console.log(sum);

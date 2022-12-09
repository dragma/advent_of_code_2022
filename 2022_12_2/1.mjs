import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.resolve(__dirname, "input.txt");
const text = fs.readFileSync(inputFilePath).toString();

const POINTS = {
  X: 1,
  Y: 2,
  Z: 3,
  WIN: 6,
  LOSE: 0,
  DRAW: 3,
};

const results = {
  AX: "DRAW",
  AY: "WIN",
  AZ: "LOSE",
  BX: "LOSE",
  BY: "DRAW",
  BZ: "WIN",
  CX: "WIN",
  CY: "LOSE",
  CZ: "DRAW",
};

const add = (a, b) => a + b;
const play = ([other, me]) => POINTS[me] + POINTS[results[`${other}${me}`]];

const total = text
  .split("\n")
  .map((t) => t.split(" "))
  .map(play)
  .reduce(add, 0);

console.log(total);

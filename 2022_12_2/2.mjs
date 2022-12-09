import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFilePath = path.resolve(__dirname, "input.txt");
const text = fs.readFileSync(inputFilePath).toString();

const POINTS = {
  A: 1,
  B: 2,
  C: 3,
  WIN: 6,
  LOSE: 0,
  DRAW: 3,
};

const goals = {
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
};

const shouldPlay = {
  ADRAW: "A",
  AWIN: "B",
  ALOSE: "C",
  BLOSE: "A",
  BDRAW: "B",
  BWIN: "C",
  CWIN: "A",
  CLOSE: "B",
  CDRAW: "C",
};

const add = (a, b) => a + b;
const play = ([other, me]) => {
  const goal = goals[me];
  const myPlay = shouldPlay[`${other}${goal}`];
  return POINTS[myPlay] + POINTS[goal];
};

const total = text
  .split("\n")
  .map((t) => t.split(" "))
  .map(play)
  .reduce(add, 0);

console.log(total);

import loadInput from "../utils/loadInput.mjs";
import sum from "../utils/sum.mjs";

const text = loadInput(2);

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

const play = ([other, me]) => POINTS[me] + POINTS[results[`${other}${me}`]];

const total = text
  .split("\n")
  .map((t) => t.split(" "))
  .map(play)
  .reduce(sum, 0);

console.log(total);

import sum from "../utils/sum.mjs";
import loadInput from "../utils/loadInput.mjs";

const text = loadInput(2);

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

const play = ([other, me]) => {
  const goal = goals[me];
  const myPlay = shouldPlay[`${other}${goal}`];
  return POINTS[myPlay] + POINTS[goal];
};

const total = text
  .split("\n")
  .map((t) => t.split(" "))
  .map(play)
  .reduce(sum, 0);

console.log(total);

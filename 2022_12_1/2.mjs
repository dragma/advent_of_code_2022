import loadInput from "../utils/loadInput.mjs";
import sum from "../utils/sum.mjs";

const text = loadInput(1);

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
  .reduce(sum, 0);

console.log(sum);

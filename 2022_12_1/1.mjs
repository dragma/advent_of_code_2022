import loadInput from "../utils/loadInput.mjs";
import sum from "../utils/sum.mjs";

const text = loadInput(1);

const max = Math.max(
  ...text.split("\n\n").map((t) =>
    t
      .split("\n")
      .map((s) => Number(s))
      .reduce(sum, 0)
  )
);

console.log(max);

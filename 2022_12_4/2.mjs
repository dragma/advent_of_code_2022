import loadInput from "../utils/loadInput.mjs";

const text = loadInput(4);

const isInside = (val, a, b) => val >= a && val <= b;

const result = text
  .split("\n")
  .map((s) => s.split(",").map((s) => s.split("-").map(Number)))
  .filter(([[min1, max1], [min2, max2]]) => {
    return (
      isInside(min1, min2, max2) ||
      isInside(max1, min2, max2) ||
      isInside(min2, min1, max1) ||
      isInside(max2, min1, max1)
    );
  }).length;

console.log(result);
// console.log(temp);

import loadInput from "../utils/loadInput.mjs";

const text = loadInput(4);

const result = text
  .split("\n")
  .map((s) => s.split(",").map((s) => s.split("-").map(Number)))
  .filter(([[min1, max1], [min2, max2]]) => {
    if ((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1)) {
      return true;
    }
    return false;
  }).length;

console.log(result);
// console.log(temp);

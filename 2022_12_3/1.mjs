import loadInput from "../utils/loadInput.mjs";
import sum from "../utils/sum.mjs";
import getCharPriority from "./utils/getCharPriority.mjs";

const text = loadInput(3);

const findCommonChar = ([str1, str2]) => {
  for (let i = 0; i < str1.length; i += 1) {
    if (str2.indexOf(str1[i]) > -1) {
      return str1[i];
    }
  }
  throw new Error("Common char not found");
};

const result = text
  .split("\n")
  .map((items) => {
    const half = items.length / 2;
    return [items.slice(0, half), items.slice(half)];
  })
  .map(findCommonChar)
  .map(getCharPriority)
  .reduce(sum);

console.log(result);

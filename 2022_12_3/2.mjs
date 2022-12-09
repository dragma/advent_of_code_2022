import loadInput from "../utils/loadInput.mjs";
import sum from "../utils/sum.mjs";
import getCharPriority from "./utils/getCharPriority.mjs";

const text = loadInput(3);

const createChunk = (perChunk) => (resultArray, item, index) => {
  const chunkIndex = Math.floor(index / perChunk);
  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; // start a new chunk
  }
  resultArray[chunkIndex].push(item);
  return resultArray;
};

const findPriority = ([str1, str2, str3]) => {
  for (let i = 0; i < str1.length; i += 1) {
    const char = str1[i];
    if (str2.indexOf(char) === -1) {
      continue;
    }
    if (str3.indexOf(char) === -1) {
      continue;
    }
    if (str1.length - 1 < str1.replaceAll(char, "").length) {
      continue;
    }
    return char;
  }
};

const result = text
  .split("\n")
  .reduce(createChunk(3), [])
  .map(findPriority)
  .map(getCharPriority)
  .reduce(sum);

console.log(result);

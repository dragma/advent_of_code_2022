import loadInput from "../utils/loadInput.mjs";

const text = loadInput(3);

const findCommonChar = ([str1, str2]) => {
  for (let i = 0; i < str1.length; i += 1) {
    if (str2.indexOf(str1[i]) > -1) {
      return str1[i];
    }
  }
  throw new Error("Common char not found");
};

const getCharPriority = (char) => {
  const code = char.charCodeAt();
  if (code > 96) {
    return code - 96;
  }
  return code - 38;
};

const add = (a, b) => a + b;

const result = text
  .split("\n")
  .map((items) => {
    const half = items.length / 2;
    return [items.slice(0, half), items.slice(half)];
  })
  .map(findCommonChar)
  .map(getCharPriority)
  .reduce(add);

console.log(result);

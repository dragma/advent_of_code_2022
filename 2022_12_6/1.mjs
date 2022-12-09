import loadInput from "../utils/loadInput.mjs";

const text = loadInput(6);

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const findMarker = (text, start = 0) => {
  if (start + 4 > text.length) {
    return null;
  }
  const substr = text.substr(start, 4).split("").filter(onlyUnique);

  if (substr.length === 4) {
    return start + 4;
  }
  return findMarker(text, start + 1);
};

const result = findMarker(text);

console.log(result);

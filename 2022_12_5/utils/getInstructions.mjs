const getInstructions = (text) =>
  text
    .split("\n")
    .slice(10)
    .map((line) => line.match(/\d+/g).map(Number));

export default getInstructions;

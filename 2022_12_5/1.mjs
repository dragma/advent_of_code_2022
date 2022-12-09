import loadInput from "../utils/loadInput.mjs";

const text = loadInput(5).split("\n");

const execute = (stacks, move, from, to) => {
  for (let i = 0; i < move; i++) {
    const crate = stacks[from - 1].pop();
    stacks[to - 1].push(crate);
  }
};

const stacks = text
  .slice(0, 8)
  .reverse()
  .map((line) => {
    let str = "";
    for (let i = 0; i < line.length; i += 1) {
      if (i % 4 === 1) {
        str += line[i];
      }
    }
    return str;
  })
  .reduce((acc, line) => {
    for (let i = 0; i < line.length; i += 1) {
      if (!acc[i]) {
        acc[i] = [];
      }
      if (line[i].trim()) {
        acc[i].push(line[i]);
      }
    }
    return acc;
  }, []);

const instructions = text
  .slice(10)
  .map((line) => line.match(/\d+/g).map(Number));

instructions.forEach((line) => execute(stacks, ...line));

const result = stacks.map((stack) => stack.pop()).join("");

console.log(result);

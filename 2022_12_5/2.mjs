import loadInput from "../utils/loadInput.mjs";
import getInstructions from "./utils/getInstructions.mjs";
import getStacks from "./utils/getStacks.mjs";

const text = loadInput(5);

const execute = (stacks, move, from, to) => {
  const tmpCrates = []
  for (let i = 0; i < move; i++) {
    const crate = stacks[from - 1].pop();
    tmpCrates.push(crate);
  }
  stacks[to - 1].push(...tmpCrates.reverse());
};

const stacks = getStacks(text);

const instructions = getInstructions(text);

instructions.forEach((line) => execute(stacks, ...line));

const result = stacks.map((stack) => stack.pop()).join("");

console.log(result);

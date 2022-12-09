import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const loadInput = (day = 1) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.resolve(
    __dirname,
    "..",
    `2022_12_${day}`,
    "input.txt"
  );
  const text = fs.readFileSync(inputFilePath).toString();
  return text;
};

export default loadInput;

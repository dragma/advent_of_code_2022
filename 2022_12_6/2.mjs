import loadInput from "../utils/loadInput.mjs";
import findMarker from "./utils/findMarker.mjs";

const text = loadInput(6);

const length = 14;

const result = findMarker(text, length, 0);

console.log(result);

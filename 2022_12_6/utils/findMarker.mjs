import onlyUnique from "../../utils/onlyUnique.mjs";

const findMarker = (text, length, start = 0) => {
  if (start + length > text.length) {
    return null;
  }
  const substr = text.substr(start, length).split("").filter(onlyUnique);

  if (substr.length === length) {
    return start + length;
  }
  return findMarker(text, length, start + 1);
};

export default findMarker;

const getCharPriority = (char) => {
  const code = char.charCodeAt();
  if (code > 96) {
    return code - 96;
  }
  return code - 38;
};

export default getCharPriority;

const getStacks = (text) =>
  text
    .split("\n")
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

export default getStacks;

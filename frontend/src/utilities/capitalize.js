const capitalize = (word) => {
  return word
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
};

export default capitalize;

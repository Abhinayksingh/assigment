const reverseString = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

const input = "Bhaskara";

console.log(reverseString(input));

const removeDublicate = (nums) => {
  let obj = {};

  for (const item of nums) {
    if (!obj[item]) {
      obj[item] = item;
    }
  }
  return Object.values(obj)
};

const input = [1, 2, 3, 6, 4, 3, 7, 4, 2, 6, 8, 2, 5, 9, 0, 1];

console.log(removeDublicate(input));

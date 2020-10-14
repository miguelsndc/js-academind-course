// const greaterThanFive = numbers.filter(num => num > 5)
// const obj = numbers.map(num => ({ num: num }))
// const multiplyAll = numbers.reduce((acc, curVal) =>  acc * curVal , 1)
// console.log(multiplyAll)

const test = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 9, 2, 3, 4];

const removeDuplicates = (...numbers) => {
  const temporarySet = new Set();

  numbers.forEach((number) => {
    temporarySet.add(number);
  });

  const newArray = Array.from(temporarySet);
  return newArray;
};

const result = removeDuplicates(...test);
console.log(result);

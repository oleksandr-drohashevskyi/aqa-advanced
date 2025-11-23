// const firstArray = [1, 1, 1, 1];
// const secondArray= [0, 0, 0, 0];

// const merged= firstArray.concat(secondArray);
// console.log(merged);

const firstArray = [1, 1, 1, 1];
const secondArray = [0, 0, 0, 0];

const merged = [...firstArray, ...secondArray];
console.log(merged);

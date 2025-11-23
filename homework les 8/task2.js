const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value, index) => {
  return value * index;
});

console.log(newNumbers);

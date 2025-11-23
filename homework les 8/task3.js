const numbers = [10, 20, 30, 40, 50];

const summNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(summNumbers);

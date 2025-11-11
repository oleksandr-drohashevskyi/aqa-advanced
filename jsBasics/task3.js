/* eslint-disable @typescript-eslint/no-unused-vars */

const person="Alex";
let x;
x=Boolean;
let age = 30;
let legalAge = 18;


console.log(
    "Name:", person,"\n",
    "Age:", age,"\n",
    "Is legal?", age>=legalAge
);

console.log(`
    Name: ${person}
    Age: ${age}
    Is legal? ${age>=legalAge}
    `);
//только отступы получаются не понятные в консоли при выводе)
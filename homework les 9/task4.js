const person = {
  firstName: "Alex",
  lastName: "Evans",
  age: "30",
};
person.email = "alex@gmail.com";
delete person.age;

console.log(person);

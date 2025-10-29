const users = [
  { name: "John", age: 30, email: "john@gmail.com" },
  { name: "Matt", age: 25, email: "matt@yahoo.com" }
];

for (const { name, age, email } of users) {
  console.log(`${name} is ${age} years old and his email is ${email}`);
}
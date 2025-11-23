const car1 = {
  brand: "Porsche",
  model: "Panamera",
  year: "2024",
};
const car2 = {
  brand: "Lexus",
  model: "GX 550",
  year: "2025",
};

const car3 = {
  car1: { ...car1 },
  car2: { ...car2 },
};

console.log(car3);

const averageGrade = 85;
let mark;

if (typeof averageGrade !== "number") {
  console.log("Некоректне значення! Має бути число."); // проверка что другие типы данных корректно хендляться
} 
else if (averageGrade >= 0 && averageGrade < 60) {
  mark = "Незадовільно";
} 
else if (averageGrade >= 60 && averageGrade <= 70) {
  mark = "Задовільно";
} 
else if (averageGrade >= 71 && averageGrade <= 80) {
  mark = "Добре";
} 
else if (averageGrade >= 81 && averageGrade <= 90) {
  mark = "Дуже добре";
} 
else if (averageGrade >= 91 && averageGrade <= 100) {
  mark = "Відмінно";
} 
else {
  mark = "Некоректна оцінка"; // отличные от диапазона 0-100
}

if (mark !== undefined) console.log(mark); //если averageGrade будет не число, то без этого еще undefined дописывается :)

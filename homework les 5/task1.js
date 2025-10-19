const averageGrade = 85;
let mark;

if (typeof averageGrade !== "number") {
  console.log("Некоректне значення! Має бути число.");
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
  mark = "Некоректна оцінка";
}

if (mark !== undefined) console.log(mark);

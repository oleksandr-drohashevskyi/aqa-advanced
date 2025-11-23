/* eslint-disable @typescript-eslint/no-unused-vars */

const averageGrade = 85;
let mark;

if (typeof averageGrade !== "number") {
  console.log("Некоректне значення! Має бути число."); //надо проверить что другие данных типы корректно хендляться,
  // такой вариант с жпт мы придумали)
} else {
  switch (true) {
    case averageGrade >= 0 && averageGrade < 60: //а тут уже через свитч
      console.log((mark = "Незадовільно"));
      break;
    case averageGrade >= 60 && averageGrade <= 70:
      console.log((mark = "Задовільно"));
      break;
    case averageGrade >= 71 && averageGrade <= 80:
      console.log((mark = "Добре"));
      break;
    case averageGrade >= 81 && averageGrade <= 90:
      console.log((mark = "Дуже добре"));
      break;
    case averageGrade >= 91 && averageGrade <= 100:
      console.log((mark = "Відмінно"));
      break;
    default:
      console.log((mark = "Некоректна оцінка"));
  }
}

function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number" ||
      !Number.isFinite(numerator) || !Number.isFinite(denominator)) {
    throw new TypeError("Обидва аргументи мають бути числами.");
  }

  if (denominator === 0) {
    throw new RangeError("Ділення на нуль неможливе.");
  }

  return numerator / denominator;
}

try {
  const result = divide(9, 2); //результат без помилки
  console.log("Результат:", result);
} catch (err) {
  console.error("Помилка:", err.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide(10, 0); //ділення на 0
  console.log("Результат:", result);
} catch (err) {
  console.error("Помилка:", err.message);
} finally {
  console.log("Робота завершена");
}

try {
  const result = divide("10", 0); //не число
  console.log("Результат:", result);
} catch (err) {
  console.error("Помилка:", err.message);
} finally {
  console.log("Робота завершена");
}


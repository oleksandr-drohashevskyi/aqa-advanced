function timer(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

timer("Hello", 3000);

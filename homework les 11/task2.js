function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні todo");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка у getTodo:", error.message);
    });
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Помилка при завантаженні user");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Помилка у getUser:", error.message);
    });
}

Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    console.log("Promise.all result:");
    console.log("todo:", todo);
    console.log("user:", user);
  })
  .catch((error) => {
    console.error("Помилка в Promise.all:", error.message);
  });

Promise.race([getTodo(), getUser()])
  .then((result) => {
    console.log("Promise.race result");
    console.log(result);
  })
  .catch((error) => {
    console.error("Помилка", error.message);
  });

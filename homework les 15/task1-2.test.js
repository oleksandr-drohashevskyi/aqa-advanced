const axios = require("axios");

describe("Error handling task 1", () => {
  test("should return correct error message for invalid endpoint", async () => {
    let errorResponse;

    try {
      await axios.get("https://demoqa.com/Account/v1/User/2444555");
    } catch (error) {
      errorResponse = error.response;
    }

    expect(errorResponse.status).toBe(401);
    expect(errorResponse.data.message).toContain("User not authorized!");
  });
  ///////////

  test("Request with headers task 2", async () => {
    // Генеруємо токен
    const credentials = {
      userName: "Dragon19",
      password: "Ss1231!!",
    };

    const tokenResponse = await axios.post(
      "https://demoqa.com/Account/v1/GenerateToken",
      credentials,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    const token = tokenResponse.data.token;
    expect(token).toBeDefined();

    //передаємо запит з токеном, все в одному тесті))
    const isbn = "9781449337711";
    const response = await axios.get(`https://demoqa.com/BookStore/v1/Book`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      params: { ISBN: isbn },
      validateStatus: false,
    });
    console.log(response.data);
    console.log(response.status);

    expect(response.status).toBe(200);

    expect(response.config.headers.Authorization).toBe(`Bearer ${token}`);
    expect(response.config.headers["Content-Type"]).toBe("application/json");
    expect(response.data.isbn).toBe(isbn);
  });
});

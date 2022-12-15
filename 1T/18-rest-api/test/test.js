const request = require("test");
const app = require("../app");

describe("Testeamos al root", () => {
  test("Obten metodo", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(100);
        done();
      });
  });
});
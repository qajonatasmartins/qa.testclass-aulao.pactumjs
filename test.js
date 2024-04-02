// test.js
const { spec } = require("pactum");
const { allure } = require("allure-mocha/runtime");

it("should get a response with status code 200", async () => {
  allure.epic("Usuários");
  allure.feature("Alterar usuário");
  allure.story("Alterar por ID");
  await spec().get("http://httpbin.org/status/200").expectStatus(200);
});

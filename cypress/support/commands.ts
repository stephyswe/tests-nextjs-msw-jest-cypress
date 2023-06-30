import "@testing-library/cypress/add-commands";

if (Cypress.env("TEST_RUNNER")) {
  require("../../src/mocks");
}

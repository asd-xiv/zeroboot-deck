import { Then } from "cypress-cucumber-preprocessor/steps"

Then("The drawer with title {string} is closed", (title: string) => {
  cy.findByRole("dialog", { name: title }).should("not.exist")
})

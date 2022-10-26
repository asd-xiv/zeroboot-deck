import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see one {string} text", (text: string) => {
  cy.findByText(text, { exact: false })
})

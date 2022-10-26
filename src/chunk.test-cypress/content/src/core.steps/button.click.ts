import { When } from "cypress-cucumber-preprocessor/steps"

When(`I click button with label {string}`, (label: string) => {
  cy.findByRole("button", { name: label }).click()
})

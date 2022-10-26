import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I clear text field with label {string}", (label: string) => {
  cy.findByRole("textbox", { name: label }).clear()
})

Given("I clear field with label {string}", (label: string) => {
  cy.findByLabelText(label).clear()
})

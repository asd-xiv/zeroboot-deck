import { Given } from "cypress-cucumber-preprocessor/steps"

Given(
  "I type {string} into field with label {string}",
  (text: string, label: string) => {
    cy.findByRole("textbox", { name: label }).type(text)
  }
)

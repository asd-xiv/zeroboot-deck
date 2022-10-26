import { When } from "cypress-cucumber-preprocessor/steps"

When(`I click link with text {string}`, (text: string) => {
  cy.findAllByRole("link", { name: text }).click()
})

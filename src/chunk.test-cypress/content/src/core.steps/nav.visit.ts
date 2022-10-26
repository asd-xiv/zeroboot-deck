import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I open page with URL {string}", (url: string) => {
  cy.visit(url)
})

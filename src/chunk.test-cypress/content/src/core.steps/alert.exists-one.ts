import { Then } from "cypress-cucumber-preprocessor/steps"

Then(`I see one alert with {string} text`, title => {
  cy.findByRole("alert").contains(title)
})

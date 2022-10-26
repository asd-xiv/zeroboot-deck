import { Then } from "cypress-cucumber-preprocessor/steps"

Then(`I see a heading containing {string}`, title => {
  cy.findAllByText(title, {
    // @ts-ignore "selector" type only allows string but query also works
    // with array
    selector: ["h1", "h2", "h3", "h4", "h5", "h6"],
  }).should("have.length", 1)
})

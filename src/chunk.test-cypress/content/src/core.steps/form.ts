import { And } from "cypress-cucumber-preprocessor/steps"

And(
  `I click the checkbox with label {string} for group {string}`,
  (name, group) => {
    cy.findByRole("group", { name: group }).within(() => {
      cy.findByRole("checkbox", { name }).closest("label").click()
    })
  }
)

And(
  `I click the radio with label {string} for group {string}`,
  (name, group) => {
    cy.findByRole("group", { name: group }).within(() => {
      cy.findByRole("radio", { name }).closest("label").click()
    })
  }
)

And(
  `I select the first monday of next month for date selector with label {string} in region {string}`,
  (label, region) => {
    cy.findByRole("region", { name: region }).within(() => {
      cy.findByLabelText(label)
        .click()
        .parent()
        .parent()
        .parent()
        .within(() => {
          cy.findByRole("button", { name: "Next Month", exact: false }).click()
          cy.findAllByRole("button", { name: /Choose Monday/i })
            .first()
            .click()
        })
    })
  }
)

And(
  `I select option {string} for select box with place holder text {string} in region {string}`,
  (optionText, placeHolderText, region) => {
    // In the end finding the react select element by place holder text was the easiest to do this.
    // Doing it by role is difficult/impossible because of the hidden input etc which react select uses
    cy.findByRole("region", { name: region }).within(() => {
      cy.findByText(placeHolderText)
        .click()
        .parent()
        .parent()
        .parent()
        .within(() => {
          cy.findByText(optionText).click()
        })
    })
  }
)

And(`I enter text {string} in textbox with label {string}`, (text, label) => {
  cy.findByRole("textbox", { name: label }).type(text)
})

And(
  `I enter the number {string} in the textbox with label {string}`,
  (text, label) => {
    cy.findByLabelText(new RegExp(label, "i")).type(text)
  }
)

And(
  `I type the text {string} in input field with placeholder text {string}`,
  (textToType, placeHolderText) => {
    cy.findByPlaceholderText(placeHolderText).click().type(textToType)
  }
)

import { Then } from "cypress-cucumber-preprocessor/steps"
import { map, head, pipe, pathOr } from "rambda"

Then("I see multiple texts", (dataTable: { rawTable: string[][] }) => {
  const messages = pipe(pathOr([], "rawTable"), map(head))(dataTable)
  const matcher = new RegExp(messages.join("|"))

  cy.findAllByText(matcher, { exact: true }).should(
    "have.length",
    messages.length
  )
})

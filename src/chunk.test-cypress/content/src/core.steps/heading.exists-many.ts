import { Then } from "cypress-cucumber-preprocessor/steps"
import { map, head, pipe, pathOr } from "rambda"

Then(
  "I see multiple headings containing",
  (dataTable: { rawTable: string[][] }) => {
    const messages = pipe(pathOr([], "rawTable"), map(head))(dataTable)
    const matcher = new RegExp(messages.join("|"))

    cy.findAllByText(matcher, {
      // @ts-ignore "selector" type only allows string but query also works
      // with array
      selector: ["h1", "h2", "h3", "h4", "h5", "h6"],
    }).should("have.length", messages.length)
  }
)

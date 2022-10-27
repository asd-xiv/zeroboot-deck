const parameters = /** @type {const} */ ({
  friendlyName: {
    type: "input",
    message: "What is the name of your project?",
    default: "New Zerobooted project",
  },
})

/** @type { import("@asd14/zeroboot").Chunk<typeof parameters> } */
export default {
  name: "CI",
  description: "CI/CD configuration using CircleCI, deploying a package to NPM",
  parameters,
  contentMapping: {},
}

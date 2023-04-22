const parameters = /** @type {const} */ ({
  friendlyName: {
    type: "input",
    message: "What is the name of your project?",
    default: "New Zerobooted project",
  },
})

/** @type { import("@asd14/zeroboot").Chunk<typeof parameters> } */
export default {
  name: "ci.circleci_node-lib",
  description: "CircleCI configuration for deploying a package to NPM",
  parameters,
  contentMapping: {},
}

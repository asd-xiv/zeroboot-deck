const parameters = /** @type {const} */ ({
  friendlyName: {
    type: "input",
    message: "What is the name of your package?",
    default: "New Zerobooted project",
  },
  gitAddress: {
    type: "input",
    message: "What is the git address?",
    default: "asd-xiv/name",
  },
})

/** @type { import("@asd14/zeroboot").Chunk<typeof parameters> } */
export default {
  name: "Base",
  parameters,
  contentMapping: {},
}

const parameters = /** @type {const} */ ({
  packageName: {
    type: "input",
  },
})

/** @type { import("@asd14/zeroboot").Chunk<typeof parameters> } */
export default {
  name: "Base",
  parameters,
  contentMapping: {},
}

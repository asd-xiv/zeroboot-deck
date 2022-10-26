const parameters = /** @type {const} */ ({
  provider: {
    type: "checkbox",
    message: "Select CI/CD provider",
    choices: ["GitHub Actions", "Circle CI"],
  },
})

/** @type { import("@asd14/zeroboot").Chunk<typeof parameters> } */
export default {
  name: "CI",
  parameters,
  contentMapping: {},
}

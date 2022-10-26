const parameters = /** @type {const} */ ({
  type: {
    type: "checkbox",
    message: "Select license",
    choices: ["MIT", "BSD-3", "Proprietary"],
    default: "MIT",
  },
  author: {
    type: "input",
    message: "Author name",
    default: "Andrei Dumitrescu",
  },
})

/** @type { import("@asd14/zeroboot").Chunk<typeof parameters> } */
export default {
  name: "License",
  parameters,
  contentMapping: {
    type: {
      "MIT": {
        "LICENSE.MIT": "LICENSE",
      },
      "BSD-3": {
        "LICENSE.BSD-3": "LICENSE",
      },
      "Proprietary": {},
    },
  },
}

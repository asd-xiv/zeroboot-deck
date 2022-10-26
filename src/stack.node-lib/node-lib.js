/** @type { import("@asd14/zeroboot").Stack } */
export default {
  name: "Node Library",
  parameters: {
    typescript: {
      type: "checkbox",
      message: "Select library",
      choices: ["jsdoc", "ts"],
    },
  },
  chunks: {
    required: ["base", "node"],
    optional: ["ci", "lint", "test", "typescript"],
  },
}

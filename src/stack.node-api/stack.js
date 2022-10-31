/** @type { import("@asd14/zeroboot").Stack } */
export default {
  name: "Node API",
  chunks: {
    required: ["base", "node", "api"],
    optional: ["ci", "lint", "test", "typescript"],
  },
}

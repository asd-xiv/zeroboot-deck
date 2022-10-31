/** @type { import("@asd14/zeroboot").Stack } */
export default {
  name: "React Library",
  chunks: {
    required: ["base", "react"],
    optional: ["ci", "test", "typescript", "lint"],
  },
}

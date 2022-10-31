/** @type { import("@asd14/zeroboot").Stack } */
export default {
  name: "React Application",
  chunks: {
    required: ["base", "react"],
    optional: ["ci", "test", "typescript", "lint"],
  },
}

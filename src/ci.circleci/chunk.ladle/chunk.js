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
  description:
    "CI/CD configuration using CircleCI, deploying a UI package to NPM and it's Ladle documentation to an S3 bucket on AWS with IP white list support",
  parameters,
  chunks: [
    {
      name: "bash_whitelist-policy",
      move: [
        {
          from: "generate-s3-whitelist-policy",
          to: ".circleci/generate-s3-whitelist-policy",
          mode: "755",
        },
      ],
      exclude: [],
    },
  ],
}

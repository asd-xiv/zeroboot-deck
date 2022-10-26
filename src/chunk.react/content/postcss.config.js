/* eslint-disable global-require */

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url")([
      {
        filter: "**/input.phone/**",
        url: "inline",
      },
      {
        filter: "**/*",
        url: "copy",
        assetsPath: "assets",
      },
    ]),
    require("postcss-preset-env"),
  ],
}

// Called when a project is opened or re-opened (e.g. due to the project's
// config changing)
//
// You can read more here:
// https://on.cypress.io/plugins-guide
import webpack from "@cypress/webpack-preprocessor"
import dotenvPlugin from "cypress-dotenv"
import { pipe } from "rambda"

import webpackConfig from "../../webpack.config"

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  on("file:preprocessor", webpack({ webpackOptions: webpackConfig }))

  return pipe(dotenvPlugin)(config)
}

export default pluginConfig

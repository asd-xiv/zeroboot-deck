const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = (env, props) => {
  // Using "mode" CLI argument also sets process.env.NODE_ENV on DefinePlugin
  // to "development" or "production"
  const isDevelopment = props.mode === "development"

  return {
    entry: "./src/index.tsx",

    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "dist"),

      // Cannot use 'contenthash' when hot reloading is enabled.
      filename: isDevelopment ? "js/[name].js" : "js/[name].[contenthash].js",
      assetModuleFilename: "assets/[hash][ext][query]",
    },

    devtool: isDevelopment ? "inline-source-map" : "source-map",

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: "swc-loader",
            options: {
              jsc: {
                transform: {
                  react: {
                    development: isDevelopment,
                    refresh: isDevelopment,
                  },
                },
              },
            },
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)$/,
          type: "asset/resource",
        },
      ],
    },

    devServer: isDevelopment
      ? {
          // Enable gzip compression for everything served
          compress: true,

          // When using the HTML5 History API, the index.html page will likely
          // have to be served in place of any 404 responses
          historyApiFallback: true,

          // Full page reload/refresh when file changes are detected
          liveReload: false,

          // Enables Hot Module Replacement without page refresh
          hot: true,
        }
      : {},

    plugins: [
      new HtmlWebpackPlugin({
        favicon: "src/core.public/favicon.png",
        template: "src/core.public/index.html",
      }),

      new MiniCssExtractPlugin({
        // Cannot use 'contenthash' when hot reloading is enabled.
        filename: isDevelopment
          ? "css/[name].css"
          : "css/[name].[contenthash].css",
      }),

      new Dotenv({
        path: "./.env",
      }),

      new CopyPlugin({
        patterns: [
          {
            from: "src/core.public/robots.txt",
            to: "robots.txt",
          },
        ],
      }),

      ...(isDevelopment
        ? [
            new ReactRefreshWebpackPlugin(),
            new BundleAnalyzerPlugin({
              openAnalyzer: false,
            }),
          ]
        : []),
    ],

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        "core.ui": path.resolve("./src/core.ui/"),
        "core.hooks": path.resolve("./src/core.hooks/"),
        "core.libs": path.resolve("./src/core.libs/"),
        "layout.base": path.resolve("./src/layout.base/"),
        "layout.guest": path.resolve("./src/layout.guest/"),
        "layout.signedin": path.resolve("./src/layout.signedin/"),

        // When using symlinked libraries, react will fail with "Hooks can
        // only be called inside the body of a function component" caused by
        // having multiple React version. Confirm following https://reactjs.org/warnings/invalid-hook-call-warning.html
        //
        // To fix this, tell Webpack where to find `react` and `react-dom`.
        //
        // Read more: https://github.com/facebook/react/issues/13991#issuecomment-435587809
        "react": path.resolve("../node_modules/react"),
        "react-dom": path.resolve("../node_modules/react-dom"),
        "@chakra-ui/react": path.resolve("../node_modules/@chakra-ui/react"),
        "framer-motion": path.resolve("../node_modules/framer-motion"),
        "@emotion/react": path.resolve("../node_modules/@emotion/react"),
        "@emotion/styled": path.resolve("../node_modules/@emotion/styled"),
      },
    },

    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[/\\]node_modules[/\\]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  }
}

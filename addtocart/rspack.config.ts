import * as path from "node:path";
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import * as RefreshPlugin from "@rspack/plugin-react-refresh";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import { mfConfig } from "./module-federation.config";

const isDev = process.env.NODE_ENV === "development";

// Target browsers for SWC and LightningCSS
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default defineConfig({
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
  },

  devServer: {
    port: 3004,
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "src")],
  },

  output: {
    uniqueName: "addtocart",
    publicPath: "http://localhost:3004/",
  },

  experiments: {
    css: true,
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.scss$/i,
        type: "css",
        use: ["postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        type: "css",
        use: ["postcss-loader"],
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: {
                targets,
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    new ModuleFederationPlugin({
      ...mfConfig,
      dts: false, // ✅ DISABLE federated type generation to fix TYPE-001 error
    }),
    isDev ? new RefreshPlugin() : null,
  ].filter(Boolean),

  optimization: {
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin(),
      new rspack.LightningCssMinimizerRspackPlugin({
        minimizerOptions: { targets },
      }),
    ],
  },
});

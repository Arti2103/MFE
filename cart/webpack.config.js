const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { addToCart } = require("./src/cart");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3003/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    open: false,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js",
      remotes: {
        home1: "home1@http://localhost:3002/remoteEntry.js",
        pdp: "pdp@http://localhost:3000/remoteEntry.js",
        cart: "cart@http://localhost:3003/remoteEntry.js",
        // addToCart: "addToCart@@http://localhost:3004/remoteEntry.js"
      },
      exposes: {
        "./cart": "./src/cart.js",
        "./Login": "./src/Login.jsx",
        "./MiniCart": "./src/MiniCart.jsx",
        "./CartContent": "./src/CartContent.jsx",
        // "./addToCart": "./src/cart.js",
        
        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
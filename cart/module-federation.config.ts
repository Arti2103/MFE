import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";


export const mfPlugin = new ModuleFederationPlugin({
  name: "cart",
  filename: "remoteEntry.js",

  remotes: {
    home1: {
      external: "home1@http://localhost:3002/remoteEntry.js", // 👈 matches home1 port
    },
  },

  exposes: {
    "./cart": "./src/cart.js", // 👈 optional, remove if not exposing anything
  },

  shared: {
    react: { singleton: true, requiredVersion: "*" },
    "react-dom": { singleton: true, requiredVersion: "*" },
  },

  dts: false,
});

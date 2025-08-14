export const mfConfig = {
  name: "addtocart",
  filename: "remoteEntry.js",
  remotes: {
    cart: {
      external: "cart@http://localhost:3003/remoteEntry.js", // adjust port if needed
    },
    home1: {
      external: "home1@http://localhost:3002/remoteEntry.js",
    },
  },
  exposes: {
    // if addtocart wants to expose something, add here
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

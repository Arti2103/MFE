import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack"; // ✅


export const mfPlugin = new ModuleFederationPlugin({
  name: "home1",
  filename: "remoteEntry.js",
  library: { type: "global", name: "home1" },
  exposes: {
   "./Header": "./src/Header",
   "./Footer": "./src/Footer",
   "./index.css": "./src/index.css", // Expose the CSS file
   "./tailwind.css": "./src/tailwind.css", 
   "./products": "./src/products", 
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    "react-dom": { singleton: true, requiredVersion: false },
  },
});

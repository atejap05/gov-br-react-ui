import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { peerDependencies } from "./package.json";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Sets the '@' alias to the 'src' directory.
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.ts"), // Specifies the entry point for building the library.
      name: "gov-br-react-ui", // Sets the name of the generated library.
      fileName: format => `index.${format}.js`, // Generates the output file name based on the format.
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {
          react: "React", // Sets the global variable for the 'react' dependency.
          "react-dom": "ReactDOM", // Sets the global variable for the 'react-dom' dependency.
        },
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [react(), dts(), cssInjectedByJsPlugin()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
});

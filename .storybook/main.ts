// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "url";
import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  viteFinal: async config => {
    config.plugins?.push(
      /** @see https://github.com/aleclarson/vite-tsconfig-paths */
      tsconfigPaths({
        projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
      })
    );

    // Increase build timeout for large CSS files
    if (config.build) {
      config.build.chunkSizeWarningLimit = 1000;
    } else {
      config.build = {
        chunkSizeWarningLimit: 1000,
      };
    }

    // Optimize esbuild options to prevent EPIPE errors
    config.optimizeDeps = {
      ...config.optimizeDeps,
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        target: "es2020",
      },
    };

    return config;
  }
};
export default config;

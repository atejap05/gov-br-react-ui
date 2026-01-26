// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "url";
import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

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

    // Increase build timeout and chunk size warning limit for Storybook
    if (config.build) {
      config.build.chunkSizeWarningLimit = 2000; // 2MB - Storybook bundles can be large
    } else {
      config.build = {
        chunkSizeWarningLimit: 2000,
      };
    }

    // Disable dts generation for Storybook build (not needed, causes warning)
    if (config.plugins) {
      config.plugins = config.plugins.filter(
        (plugin) => {
          if (typeof plugin === 'object' && plugin !== null && 'name' in plugin) {
            return plugin.name !== 'vite-plugin-dts';
          }
          return true;
        }
      );
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

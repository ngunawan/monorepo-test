import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.mdx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  viteFinal: async (config) => {
    // Add path alias for the UI package
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ngunawan/ui":
        "/Users/ngunawan/Desktop/navy/monorepo-test/packages/ui/src",
    };

    // Add PostCSS configuration for Tailwind
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [
        require("@tailwindcss/postcss")({
          config:
            "/Users/ngunawan/Desktop/navy/monorepo-test/packages/ui/tailwind.config.js",
        }),
        require("autoprefixer"),
      ],
    };

    return config;
  },
};
export default config;

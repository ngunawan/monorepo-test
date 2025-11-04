import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";

export default [
  // ESM build
  {
    input: [
      "src/index.ts",
      "src/components/button/button.tsx",
      "src/components/dialog/dialog.tsx",
    ],
    output: {
      dir: "dist",
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: "src",
    },
    onwarn(warning, warn) {
      // Suppress "use client" directive warnings from dependencies
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    plugins: [
      peerDepsExternal(),
      preserveDirectives(),
      resolve({
        browser: true,
      }),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true,
        modules: {
          // Enable CSS modules for .module.css files
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
        config: {
          path: "./postcss.config.mjs",
        },
      }),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
        rootDir: "src",
      }),
    ],
    external: ["react", "react-dom", "react-native"],
  },
  // React Native build
  {
    input: "src/native.ts",
    output: {
      file: "dist/native.js",
      format: "esm",
      sourcemap: true,
    },
    onwarn(warning, warn) {
      // Suppress "use client" directive warnings from dependencies
      if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
        return;
      }
      warn(warning);
    },
    plugins: [
      peerDepsExternal(),
      preserveDirectives(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
        rootDir: "src",
      }),
    ],
    external: ["react", "react-dom", "react-native"],
  },
];

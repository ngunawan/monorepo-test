import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
import tailwindcssPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default [
  // ESM build
  {
    input: ["src/index.ts", "src/components/button/index.ts"],
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
      postcss({
        extract: true,
        minimize: false,
        sourceMap: true,
        modules: {
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
        plugins: [tailwindcssPostcss(), autoprefixer()],
      }),
      resolve({
        browser: true,
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
        preferBuiltins: false,
      }),
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

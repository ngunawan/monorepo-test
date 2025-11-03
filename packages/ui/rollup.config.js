import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

// Plugin to handle "use client" directives
// function stripUseClient() {
//   return {
//     name: 'strip-use-client',
//     generateBundle(options, bundle) {
//       Object.keys(bundle).forEach(fileName => {
//         const chunk = bundle[fileName];
//         if (chunk.type === 'chunk') {
//           chunk.code = chunk.code.replace(/^['"]use client['"];?\s*/gm, '');
//         }
//       });
//     }
//   };
// }

export default [
  // ESM build
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    // onwarn(warning, warn) {
    //   // Suppress "use client" directive warnings from dependencies
    //   if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
    //     return;
    //   }
    //   warn(warning);
    // },
    plugins: [
      peerDepsExternal(),
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
          path: "./postcss.config.js",
        },
      }),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
        rootDir: "src",
      }),
      // stripUseClient(),
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
    // onwarn(warning, warn) {
    //   // Suppress "use client" directive warnings from dependencies
    //   if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
    //     return;
    //   }
    //   warn(warning);
    // },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.build.json",
        declaration: true,
        declarationDir: "dist",
        rootDir: "src",
      }),
      // stripUseClient(),
    ],
    external: ["react", "react-dom", "react-native"],
  },
];

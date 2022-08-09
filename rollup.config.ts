// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
import sass from "rollup-plugin-sass";

import pkg from "./package.json";

export default [
  {
    input: "packages/index.ts",
    output: [
      {
        file: pkg.main,
        format: "esm",
        sourcemap: true,
        exports: "named",
        preserveModulesRoot: "packages",
      },
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
];

// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import dts from "rollup-plugin-dts";
import sass from "rollup-plugin-sass";

import packageJson from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      sass({ insert: true }),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    external: ["react", "react-dom"],
  },
];

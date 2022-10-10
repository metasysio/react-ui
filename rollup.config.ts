import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import sass from "rollup-plugin-sass";

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom"], //external dependency that is requied at runtime
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve(),
      sass({ insert: true }),
      typescript({ useTsconfigDeclarationDir: true }),
      terser(),
    ],
  },
];

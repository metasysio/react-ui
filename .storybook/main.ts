import { resolve } from "path";

export const addons = [];
export async function babel(options) {
  return {
    ...options,
  };
}
export const framework = "@storybook/react";
export const stories = ["../src/**/*.stories.tsx"];
export async function webpackFinal(config, { configType }) {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: resolve(__dirname, "../"),
  });
  return config;
}

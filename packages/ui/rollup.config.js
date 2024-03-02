import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "Button.tsx",
    output: {
      file: "dist/button.js",
    },
  },
].map((entry) => ({
  ...entry,
  plugins: [
    typescript({
      exclude: ["node_modules/**"],
    }),
  ],
}));

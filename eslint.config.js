import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...next.configs.recommended,
  ...next.configs["core-web-vitals"],
  prettier,
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];

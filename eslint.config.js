import js from "@eslint/js";
import eslintPluginImport from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "dist-*", "node_modules", ".vercel"],
  },
  {
    files: ["**/*.{ts,tsx,js,jsx}", "**/*.cjs"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactPlugin.configs.recommended,
      reactHooksPlugin.configs.recommended,
      eslintPluginImport.configs.recommended,
      eslintPluginImport.configs.typescript,
    ],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: eslintPluginImport,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      ...eslintConfigPrettier.rules,
    },
  }
);

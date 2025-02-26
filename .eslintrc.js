module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "unused-imports",
    "css-modules",
  ],
  parserOptions: {
    project: "./tsconfig.json", // Specify the path to your tsconfig.json file
    ecmaVersion: 2022, // Specify the ECMAScript version you're using
    sourceType: "module", // Specify the type of source code (e.g., 'module' or 'script')
  },
  rules: {
    // This rule is disabled to allow JSX to be used without importing React explicitly
    "react/react-in-jsx-scope": "off",
    // This rule throws an error when the "any" type is explicitly used
    "@typescript-eslint/no-explicit-any": "error",

    // This rule throws an error when variables or function arguments are declared but not used.

    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],

    // Unused state variables can indicate potential bugs or unnecessary code.

    "react/no-unused-state": "error",

    // This rule enforces consistent naming conventions for different code elements in TypeScript.

    // "@typescript-eslint/naming-convention": [
    //   "error",
    //   {
    //     selector: "default",
    //     format: ["camelCase"],
    //   },
    //   {
    //     selector: "variableLike",
    //     format: ["camelCase"],
    //     leadingUnderscore: "allow",
    //   },
    //   {
    //     selector: "variable",
    //     types: ["boolean"],
    //     format: ["camelCase"],
    //     prefix: ["is", "should", "has", "can", "did", "will"],
    //   },
    //   {
    //     selector: "typeLike",
    //     format: ["PascalCase"],
    //   },
    //   {
    //     selector: "function",
    //     format: ["PascalCase"],
    //   },
    // ],

    // This rule restricts the use of specific syntax patterns in your code.

    "no-restricted-syntax": [
      "error",
      {
        selector: "JSXAttribute[name.name='style']",
        message:
          "Using inline styles is not allowed. Use external stylesheets or CSS-in-JS instead.",
      },
      {
        selector: "ForInStatement",
        message: "Use 'map' or 'forEach' instead of 'for...in' loop.",
      },
      {
        selector: "ForOfStatement",
        message: "Use 'map' or 'forEach' instead of 'for...of' loop.",
      },
      {
        selector: "LabeledStatement > ForStatement",
        message: "Use 'map' or 'forEach' instead of labeled 'for' loop.",
      },
      {
        selector: "ForStatement",
        message: "Use 'map' or 'forEach' instead of 'for' loop.",
      },
    ],
    // This rule aims to enforce consistency and readability by discouraging the unnecessary use of `else` blocks after `return` statements.

    "no-else-return": "error",

    // This rule enforces the presence of a `default` case in switch statements.

    "default-case": "error",

    // This rule sets a maximum line length limit for code lines to promote readability and maintainability.

    // "max-len": [
    //   "error",
    //   {
    //     code: 80,
    //   },
    // ],
    // This rule enforces the use of a separate `var`, `let`, or `const` statement for each variable declaration.

    "one-var": ["error", "never"],

    // This rule aims to enforce consistency and readability by discouraging the use of dangling underscores (_) in variable and function names.

    // "no-underscore-dangle": "error",
    // This rule aims to enforce best practices by disallowing the use of `console` statements in JavaScript code.

    // "no-console": "error",
  },
};

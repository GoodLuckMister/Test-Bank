module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    "plugin:json/recommended",
    "plugin:jest/recommended",
    'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    babelOptions: {
      plugins: [
        "@babel/plugin-syntax-class-properties",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-private-methods",
      ],
    },
  },
  rules: {
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
  },
}

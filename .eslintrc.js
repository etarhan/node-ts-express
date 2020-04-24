module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'jest'
  ],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  rules: {
      'jest/expect-expect': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn'
  }
};
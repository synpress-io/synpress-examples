module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:playwright/playwright-test',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'no-debugger': 0,
    'no-console': 0,
    'playwright/prefer-lowercase-title': 'warn',
    'playwright/prefer-to-be': 'warn',
    'playwright/prefer-to-have-length': 'warn',
    'playwright/prefer-strict-equal': 'warn',
    'playwright/max-nested-describe': ['warn', { max: 1 }],
    'playwright/no-restricted-matchers': [
      'error',
      {
        toBeFalsy: 'Use `toBe(false)` instead.',
        not: null,
      },
    ],
  },
};

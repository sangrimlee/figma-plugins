const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/typescript',
    'eslint-config-turbo',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [require.resolve('@vercel/style-guide/eslint/jest')],
    },
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  ignorePatterns: ['node_modules', 'dist', '.eslintrc.cjs', '*.config.*'],
};

module.exports = config;

const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
const config = {
  extends: [
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    'eslint-config-turbo',
    'eslint-config-prettier',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': ['error', { includeTypes: true }],
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.cjs', '*.config.js'],
};

module.exports = config;

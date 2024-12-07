/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig } */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-packagejson'],
};

// eslint-disable-next-line import/no-default-export -- 'configuration file should be use default export'
export default config;

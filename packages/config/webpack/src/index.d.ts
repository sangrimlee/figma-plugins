import type { Configuration } from 'webpack';

export interface Options {
  /**
   * The entry point for ui code. (default: `src/ui/index.tsx`)
   */
  ui?: string;
  /**
   * The entry point for ui html. (default: `src/ui/index.html`)
   */
  html?: string;
  /**
   * The entry point for figma code. (default: `src/code/index.ts`)
   */
  code?: string;
  /**
   * The output directory (default: `dist`).
   */
  outDir?: string;
  /**
   * Add additional plugins.
   */
  plugins?: Configuration['plugins'];
}

declare function webpackConfig(options?: Options): Configuration;

export = webpackConfig;

import path from 'node:path';
import module from 'node:module';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlInlineScriptPlugin from 'html-inline-script-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const require = module.createRequire(import.meta.url);

export const figmaPluginConfig = ({
  ui = 'src/ui/index.tsx',
  html = 'src/ui/index.html',
  code = 'src/code/index.ts',
  outDir = 'dist',
  plugins = [],
} = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'inline-source-map',
    entry: {
      ui,
      code,
    },
    output: {
      filename: ({ chunk }) =>
        chunk.name === 'code' ? 'code.js' : '[name].[contenthash].js',
      path: path.join(process.cwd(), outDir),
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: require.resolve('ts-loader'),
          exclude: /node_modules/,
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      plugins: [new TsconfigPathsPlugin()],
    },

    plugins: [
      new webpack.DefinePlugin({
        global: {},
      }),
      new HtmlWebpackPlugin({
        inject: 'body',
        template: html,
        filename: 'ui.html',
        chunks: ['ui'],
      }),
      new HtmlInlineScriptPlugin({
        htmlMatchPattern: [/ui.html/],
        scriptMatchPattern: [/.js$/],
      }),
      ...plugins,
    ],
  };
};

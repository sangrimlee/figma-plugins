const path = require('node:path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

const webpackConfig = ({
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

module.exports = webpackConfig;

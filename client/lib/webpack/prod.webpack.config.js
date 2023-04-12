const path = require('path');
const envVars = require('dotenv').config();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  mode: 'production',
  watch: false,
  entry: './src/ts/index.tsx',
  output: {
    filename: 'app-[name]-[chunkhash].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    roots: [path.resolve(process.cwd(), 'dist')],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
    modules: ['src/ts', 'src/scss', 'node_modules'],
    alias: {
      'Api': path.resolve(process.cwd(), 'src/ts/api'),
      'Components': path.resolve(process.cwd(), 'src/ts/components'),
      'Containers': path.resolve(process.cwd(), 'src/ts/containers'),
      'Types': path.resolve(process.cwd(), 'src/ts/types'),
      'Utils': path.resolve(process.cwd(), 'src/ts/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              onlyCompileBundledFiles: true
            }
          }
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: 'all',
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   }),
   new HtmlWebpackPlugin({
     template: './src/html/index.html',
   }),
   new webpack.optimize.ModuleConcatenationPlugin(),
   new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = webpackConfig;

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverDist = path.resolve(process.cwd(), 'dist');

const webpackDevConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8888,
    static: {
      directory: serverDist,
    },
  },
  entry: {
    app: [
      './src/ts/index.tsx',
    ],
    vendors: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: 'app-[name]-[chunkhash].js',
    path: serverDist,
    publicPath: '/',
    clean: true,
  },
  resolve: {
    roots: [serverDist],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss'],
    modules: ['src/ts', 'src/scss', 'node_modules'],
    alias: {
      'Api': path.resolve(process.cwd(), 'src/ts/api'),
      'Components': path.resolve(process.cwd(), 'src/ts/components'),
      'Contexts': path.resolve(process.cwd(), 'src/ts/contexts'),
      'Experiments': path.resolve(process.cwd(), 'src/ts/experiments'),
      'Styles': path.resolve(process.cwd(), 'src/scss'),
      'Types': path.resolve(process.cwd(), 'src/ts/types'),
      'Utils': path.resolve(process.cwd(), 'src/ts/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      },
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
        use: ['babel-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-modules.css',
      chunkFilename: '[id]-[chunkhash].css',
    }),
  ],
};

module.exports = webpackDevConfig;

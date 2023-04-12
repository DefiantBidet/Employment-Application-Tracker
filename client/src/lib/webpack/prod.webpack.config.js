const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackConfig = {
  mode: 'production',
  watch: false,
  entry: {
    app: [
      './src/ts/index.tsx'
    ],
    vendors: [
      'react',
      'react-dom',
    ],
  },
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
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'app-[name]-[chunkhash].css',
      chunkFilename: 'app-[id]-[chunkhash].css',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = webpackConfig;

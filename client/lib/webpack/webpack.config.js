const path = require('path');
const envVars = require('dotenv').config({ path: '../.env' });
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    proxy: {
      '/api': {
        target: 'http://localhost:8888/',
        router: () => 'http://localhost:3030',
        logLevel: 'debug' /*optional*/
      }
    }
  },
  entry: './src/ts/index.tsx',
  output: {
    filename: 'app-[name]-[chunkhash].js',
    path: serverDist,
    publicPath: '/',
    clean: true,
  },
  resolve: {
    roots: [serverDist],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: ['src/ts', 'node_modules'],
    alias: {
      'Api': path.resolve(process.cwd(), 'src/ts/api'),
      'Components': path.resolve(process.cwd(), 'src/ts/components'),
      'Containers': path.resolve(process.cwd(), 'src/ts/containers'),
      'Test': path.resolve(process.cwd(), 'src/ts/test'),
      'Types': path.resolve(process.cwd(), 'src/ts/types'),
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
  optimization: {
    runtimeChunk: {
      name: 'vendors',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
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
  ],
};

module.exports = webpackDevConfig;

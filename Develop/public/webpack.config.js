const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');

const config = {
  entry: {
    app: './public/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'PWA Budget Tracker',
      short_name: 'Budget Tracker',
      description: 'An application that allows you to log deposits and withdrawals from your budget tracker whether on or offline',
      background_color: '#01579b',
      theme_color: '#ffffff',
      start_url: '/',
      icons: [
        {
          src: path.resolve('public/icons/icon-192x192.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;

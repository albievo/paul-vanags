const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  // Entry point for your application
  entry: {
    general: './src/scripts/general.js',
    home: './src/scripts/home.js',
  },

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'public'), // Ensure './public' is writable
    filename: '[name].bundle.js', // Dynamically named output file based on entry name
    clean: true, // Automatically cleans the output folder before each build
  },

  // Plugins configuration
  plugins: [
    // HTML template
    new HtmlWebpackPlugin({
      template: './src/pages/home.html', // Ensure this file exists
      filename: 'index.html', // Output filename
      chunks: ['general', 'home'], // Only include the 'home' entry chunk
    }),

    // Extract and save compiled CSS
    new MiniCssExtractPlugin({
      filename: '[name].css', // Ensure the directory exists after the build
    }),

    // Copy assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'), // Source folder
          to: path.resolve(__dirname, 'public/assets'), // Destination folder
          noErrorOnMissing: true, // Prevent errors if `src/assets` is empty
        },
      ],
    }),

    // Provide jQuery globally
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),

    new CopyWebpackPlugin({
      patterns:[
        {from: 'src/partials/footer.html', to: 'footer.html'},
        {from: 'src/partials/nav-bar.html', to: 'nav-bar.html'}
      ],
    })
  ],

  // Module rules
  module: {
    rules: [
      {
        test: /\.scss$/, // Match SCSS files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into files
          'css-loader', // Resolve CSS imports
          'sass-loader', // Compile SCSS into CSS
        ],
      },
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Transpile JavaScript using Babel
          options: {
            presets: ['@babel/preset-env'], // Ensure this preset is installed
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/, // Match image files
        type: 'asset/resource', // Use Webpack's asset module
        generator: {
          filename: 'assets/images/[name][ext]', // Output path for images
        },
      },
    ],
  },

  // DevServer configuration
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from 'public'
    },
    port: 5000, // Use port 5000
    open: true, // Automatically open browser
    hot: true, // Enable hot module replacement (HMR)
  },

  // Source maps for easier debugging
  devtool: 'eval-source-map', // Faster rebuilds in development
};
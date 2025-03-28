const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: ['./app/scripts/app.js', './app/scripts/controllers.js', './app/scripts/directives.js', './app/scripts/portfolio-data.js', './app/scripts/services.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
          },
          mangle: {
            // Enable full mangling for better obfuscation
            toplevel: true,
            properties: {
              regex: /^_/,  // Mangle properties prefixed with underscore
            }
          },
          output: {
            // Disable beautification
            beautify: false,
            comments: false
          }
        },
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'app/images', to: 'app/images' },
        { from: 'app/views', to: 'app/views' },
        { from: 'app/files', to: 'app/files' },
        { from: 'app/styles', to: 'app/styles' },
        { from: 'node_modules/bootstrap/dist/css', to: 'node_modules/bootstrap/dist/css' },
        { from: 'node_modules/aos/dist', to: 'node_modules/aos/dist' },
        { from: 'node_modules/swiper', to: 'node_modules/swiper' },
        { from: 'node_modules/jquery/dist', to: 'node_modules/jquery/dist' },
        { from: 'node_modules/bootstrap/dist/js', to: 'node_modules/bootstrap/dist/js' },
        { from: 'node_modules/angular', to: 'node_modules/angular' },
        { from: 'node_modules/angular-route', to: 'node_modules/angular-route' },
        { from: 'node_modules/gsap/dist', to: 'node_modules/gsap/dist' },
        { from: 'node_modules/typed.js/dist', to: 'node_modules/typed.js/dist' },
        { from: 'node_modules/three/build', to: 'node_modules/three/build' }
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
}; 
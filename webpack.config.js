const path = require('path');

module.exports = {
  entry: ['./js/script.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

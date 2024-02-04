const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dist/app.js',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'bundle'),
  },
  ignoreWarnings: [
    {
      module: /express\/lib\/view\.js/
    }
  ]
};

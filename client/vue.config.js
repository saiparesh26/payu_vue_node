const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:3000',
      },
      '/register': {
        target: 'http://localhost:3000',
      },
    },
  },
  outputDir: path.resolve(__dirname, '../public'),
};

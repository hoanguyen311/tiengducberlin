const path = require('path');

module.exports = {
  alias: {
    $root: path.resolve(__dirname),
    $components: path.resolve(__dirname, 'src/components'),
    $pages: path.resolve(__dirname, 'src/pages'),
    $static: path.resolve(__dirname, 'src/static'),
    $utils: path.resolve(__dirname, 'src/utils'),
  },
  extensions: ['.ts', '.js', '.jsx', '.json'],
};

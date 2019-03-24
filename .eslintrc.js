require('babel-register');
const alias = require('./alias');

module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react'],
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      alias: {
        map: Object.entries(alias.alias),
        extensions: alias.extensions
      }
    }
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-one-expression-per-line": 0
  }
};

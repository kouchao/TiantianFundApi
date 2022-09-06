module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },
};

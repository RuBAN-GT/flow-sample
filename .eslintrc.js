module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'prettier'
  ],
  globals: {
    'process.env.NODE_ENV': true
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier'],
  root: true,
  rules: {
    'no-console': 0,
    'prettier/prettier': 1,
    'flowtype/use-flow-type': 1
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    "import/resolver": {
      "babel-module": {}
    }
  }
}

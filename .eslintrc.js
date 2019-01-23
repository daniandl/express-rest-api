module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    expect: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // settings: {
  //   'import/resolver': {
  //     'babel-plugin-root-import': {
  //       rootPathPrefix: '@',
  //       rootPathSuffix: 'src/js'
  //     }
  //   }
  // },
  rules: {
    'no-console': 0
    // 'import/no-unresolved': 0
  }
}

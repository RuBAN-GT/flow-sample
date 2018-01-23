module.exports = {
  plugins: [
    'transform-decorators-legacy',
    'transform-class-properties',
    [
      'flow-runtime',
      {
        assert: true,
        annotate: true
      }
    ]
  ],
  presets: [
    'flow',
    [
      'env',
      {
        modules: process.env.NODE_ENV == 'development' ? false : 'commonjs',
        targets: { browsers: ['last 5 versions'] },
        useBuiltIns: true
      }
    ]
  ]
}

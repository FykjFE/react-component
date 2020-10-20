module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    shouldRemoveUndefinedFromOptional: true,
  }).parse,
  webpackConfig: require('./build/webpack.common.config.js'),
  components: 'components/*/index.tsx',
};

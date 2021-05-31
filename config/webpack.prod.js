const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});

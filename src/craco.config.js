const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      plugins: [
        autoprefixer,
        postcssPresetEnv({
          stage: 0, // Supports all modern CSS features including gradients
        }),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig.mode === 'production') {
        webpackConfig.optimization.minimizer.push(
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
          })
        );
      }
      return webpackConfig;
    },
  },
};

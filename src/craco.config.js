const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  style: {
    postcss: {
      plugins: [
        autoprefixer,
        postcssPresetEnv({
          stage: 0,
        }),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      if (webpackConfig.mode === 'production') {
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
          (plugin) => !(plugin instanceof CssMinimizerPlugin)
        );

        webpackConfig.optimization.minimizer.push(
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: 'default',
            },
          })
        );

        webpackConfig.plugins.push(
          new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
          })
        );
      }
      return webpackConfig;
    },
  },
};

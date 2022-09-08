const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  staticDirs: [
    '../public',
  ],
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-controls'
  ],
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    });

    return config;
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
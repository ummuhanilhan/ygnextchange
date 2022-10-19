const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  staticDirs: [
    '../public',
    { from: '../public', to: '/assets' },

  ],
  "stories": [
    "../src/**/*.stories.mdx../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links@storybook/addon-essentials@storybook/addon-interactions",
    '@storybook/addon-controls'
  ],
  webpackFinal: async config => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
  );
  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack")
  });
  
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
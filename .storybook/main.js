const path = require('path');
module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-postcss',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: '[local]__[hash:base64:5]',
        }
      }
    },
    "storybook-addon-designs",
    "storybook-addon-next-router"
  ],
  "framework": "@storybook/react",
  core: {
    builder: 'webpack4'
  },
}
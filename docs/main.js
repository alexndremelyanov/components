module.exports = {
  stories: [
    './stories/*.stories.mdx',
    './stories/*.stories.@(js|jsx|ts|tsx)',
    './stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  }
};

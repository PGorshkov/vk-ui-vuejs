module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  presets: ['@storybook/preset-scss'],
  addons: ['@storybook/addon-knobs/register', '@storybook/addon-actions/register', '@storybook/addon-a11y/register']
};

const { loadConfigFromFile, mergeConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

module.exports = {
  stories: ['../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  async viteFinal(config, { configType }) {
    const nuxtConfig = await loadConfigFromFile('nuxt.config.ts');

    return mergeConfig(config, {
      ...nuxtConfig,
      plugins: [vue()],
    });
  },

  docs: {}
};
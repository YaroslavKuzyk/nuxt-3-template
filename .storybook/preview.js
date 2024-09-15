/** @type { import('@storybook/vue3').Preview } */
import '../assets/styles/main.scss'
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;

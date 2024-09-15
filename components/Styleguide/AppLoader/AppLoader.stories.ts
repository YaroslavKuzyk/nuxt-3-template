import AppLoader from "./AppLoader.vue";

export default {
  title: "Example/AppLoader",
  component: AppLoader,
  argTypes: {
    prepend: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { AppLoader },
  setup() {
    return { args };
  },
  template: `  
    <AppLoader v-bind="args"/>`,
});

export const Primary = Template.bind({});

Primary.args = {};

import AppButton from "./AppButton.vue";

export default {
  title: "Example/AppButton",
  component: AppButton,
  argTypes: {
    prepend: { control: "text" },
    default: { control: "text" },
    append: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { AppButton },
  setup() {
    return { args };
  },
  template: `
  <AppButton v-bind="args">
    <template #prepend>{{ args.prepend }}</template>
    {{ args.default }}
    <template #append>{{ args.append }}</template>
  </AppButton>`,
});

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  primary: true,
  prepend: "",
  default: "Button",
  append: "",
  large: false,
  loading: false,
};

import AppTextField from "./AppTextField.vue";

export default {
  title: "Example/AppTextField",
  component: AppTextField,
  argTypes: {
    prepend: { control: "text" },
    append: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { AppTextField },
  setup() {
    return { args };
  },
  template: `  <AppTextField v-bind="args">
    <template v-if="args.prepend" #prepend>{{ args.prepend }}</template>
    <template v-if="args.append" #append>{{ args.append }}</template>
  </AppTextField>`,
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Label",
  placeholder: "Enter Placeholder",
  type: "text",
  readonly: false,
  required: false,
  error: "",
  prepend: "",
  append: "",
};

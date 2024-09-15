import AppPasswordField from "./AppPasswordField.vue";

export default {
  title: "Example/AppPasswordField",
  component: AppPasswordField,
  argTypes: {
    prepend: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { AppPasswordField },
  setup() {
    return { args };
  },
  template: `  
    <AppPasswordField v-bind="args">
        <template v-if="args.prepend" #prepend>{{ args.prepend }}</template>
  </AppPasswordField>`,
});

export const Primary = Template.bind({});

Primary.args = {
  label: "Password",
  placeholder: "Enter Password",
  readonly: false,
  required: false,
  error: "",
  prepend: "",
};

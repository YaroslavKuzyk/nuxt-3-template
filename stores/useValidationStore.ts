import { defineStore } from "pinia";
import { useToasts } from "~/composables/useToasts";

export const useValidationStore = defineStore({
  id: "validation-store",
  state: () => ({
    errors: {},
  }),
  actions: {
    setErrors(error) {
      const data = error?.response?._data?.message;

      if (!data) return;

      if (typeof data === "string") {
        const toasts = useToasts();
        toasts.error(data);
        return;
      }

      try {
        data.forEach((e) => {
          const error = JSON.parse(e.errors[0]);
          this.errors[e.field] = useNuxtApp().$i18n.t(error.message, {
            args: error.args[0],
          });
        });
      } catch (e) {
        console.error(e);
      }
    },
    getForFieldError(field) {
      return this.errors[field];
    },
    resetFieldError(field) {
      delete this.errors[field];
    },
    clearErrors() {
      this.errors = {};
    },
  },
});

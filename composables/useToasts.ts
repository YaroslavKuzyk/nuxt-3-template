import { toastService } from "~/services/ToastService";

export const useToasts = () => {
  const success = (message: string, translate = true, options?: unknown) => {
    toastService.success(
      useNuxtApp().$i18n.t("SUCCESS"),
      translate ? useNuxtApp().$i18n.t(message) : message,
      options,
    );
  };

  const error = (message: string, translate = true, options?: unknown) => {
    toastService.error(
      useNuxtApp().$i18n.t("ERROR"),
      translate ? useNuxtApp().$i18n.t(message) : message,
      options,
    );
  };

  const warning = (message: string, translate = true, options?: unknown) => {
    toastService.warning(
      useNuxtApp().$i18n.t("WARNING"),
      translate ? useNuxtApp().$i18n.t(message) : message,
      options,
    );
  };

  return {
    success,
    error,
    warning,
  };
};

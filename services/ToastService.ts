import { toast, type ToastContainerOptions } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import IconClose from "~/components/Icons/IconClose.vue";

type TNotify = "success" | "error" | "warning";

const OPTIONS: ToastContainerOptions = {
  autoClose: 4000,
  position: toast.POSITION.BOTTOM_RIGHT,
  transition: toast.TRANSITIONS.SLIDE,
  multiple: true,
  theme: "colored",
  hideProgressBar: true,
  dangerouslyHTMLString: true,
  closeButton: IconClose,
  containerId: "toast-container",
};

const notify = (
  title: string,
  type: TNotify,
  message: string,
  options: ToastContainerOptions = {},
) => {
  toast[type](getMessage(message, title), {
    icon: false,
    ...OPTIONS,
    ...options,
  });
};

const getMessage = (message: string, title: string) => {
  return `<div class="app-toast">
            <span class="app-toast__desc"> 
              <p class="app-toast__title">${title}!</p>
              <span class="app-toast__text">
                ${message}
              </span>
            </span>
            <span class="app-toast__bg"></span>
          </div>`;
};

export const toastService = {
  error: (title, message: string, options?) =>
    notify(title, "error", message, options),
  success: (title, message: string, options?) =>
    notify(title, "success", message, options),
  warning: (title, message: string, options?) =>
    notify(title, "warning", message, options),
};

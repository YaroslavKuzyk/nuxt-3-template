import { defineI18nConfig } from "vue-i18n";
import messages from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages,
}));

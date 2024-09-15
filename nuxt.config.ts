export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
  },
  vite: {
    server: {
      port: 3000,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.scss"],
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  plugins: ["~/plugins/custom-fetch.ts"],
  storybook: {
    url: "http://localhost:6006",
    port: 6006,
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "uk",
        name: "Ukrainian",
      },
      {
        code: "de",
        name: "German",
      },
      {
        code: "cn",
        name: "Chinese",
      },
      {
        code: "ar",
        name: "Arabic",
      },
    ],
  },
  ssr: true,
});

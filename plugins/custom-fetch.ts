export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("customFetch", (url: string, options: any = {}) => {
    const runtimeConfig = useRuntimeConfig();

    const token = useCookie("token").value;
    return $fetch(`${runtimeConfig.public.API_URL}${url}`, {
      ...options,
      credentials: "include",
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  });
});

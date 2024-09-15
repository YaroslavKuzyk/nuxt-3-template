export default defineNuxtRouteMiddleware((to) => {
  if (process.client) return;
  const token = useCookie("token");

  const list = ["sign-in", "sign-up", "forgot-password", "reset-password"];

  if (token.value && list.includes(to?.name)) {
    return navigateTo("/");
  }

  if (!token.value && !list.includes(to?.name)) {
    abortNavigation();
    return navigateTo("/sign-in");
  }
});

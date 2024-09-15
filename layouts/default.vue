<template>
  <NuxtLoadingIndicator />
  <div>
    <VHeader />
    <slot />
  </div>
</template>

<script setup>
import VHeader from "~/components/VHeader.vue";
import { useAuthStore } from "~/stores/useAuthStore";

const authStore = useAuthStore();
await useAsyncData("user_info", () => authStore.getUser());
</script>

<style lang="scss" scoped></style>

<template>
  <div v-if="authStore.user_info" class="asdasd">
    {{ authStore.user_info.email }}
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const authStore = useAuthStore();

definePageMeta({
  middleware: ["auth"],
});
</script>

<style scoped></style>

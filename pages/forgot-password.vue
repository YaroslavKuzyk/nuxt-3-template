<template>
  <div class="auth-page">
    <VAuthCard
      :buttonText="$t('CONFIRM')"
      :linkText="$t('SIGN_IN')"
      :link="'/sign-in'"
      :loading="loading"
      @confirm="confirm"
    >
      <template #title>
        {{ $t("FORGOT_PASSWORD") }}
      </template>
      <template #inputs>
        <AppTextField
          :label="$t('EMAIL')"
          :placeholder="$t('ENTER_EMAIL')"
          :type="'email'"
          v-model="data.email"
          :error="validationStore.getForFieldError('email')"
          @update:model-value="validationStore.resetFieldError('email')"
        />
      </template>
    </VAuthCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";
import { useValidationStore } from "~/stores/useValidationStore";
import AppTextField from "~/components/Styleguide/AppTextField/AppTextField.vue";
import VAuthCard from "~/components/VAuthCard.vue";

definePageMeta({
  middleware: ["auth"],
});

const authStore = useAuthStore();
const validationStore = useValidationStore();

const data = ref({
  email: "kuzyk.yarik@gmail.com",
});
const loading = ref(false);

const confirm = async () => {
  loading.value = true;

  const { status } = await useAsyncData("sign-up", () =>
    authStore.forgotPassword(data.value),
  );

  watchEffect(() => {
    if (status.value === "pending") {
      loading.value = true;
    } else {
      loading.value = false;
    }
  });
};

onUnmounted(() => {
  validationStore.clearErrors();
});
</script>

<style lang="scss" scoped></style>

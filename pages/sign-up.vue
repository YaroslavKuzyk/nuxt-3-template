<template>
  <div class="auth-page">
    <VAuthCard
      :buttonText="$t('SIGN_UP')"
      :linkText="$t('SIGN_IN')"
      :link="'/sign-in'"
      :loading="loading"
      @confirm="confirm"
    >
      <template #title>
        {{ $t("SIGN_UP") }}
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
        <AppPasswordField
          :label="$t('PASSWORD')"
          :placeholder="$t('ENTER_PASSWORD')"
          v-model="data.password"
          :error="validationStore.getForFieldError('password')"
          @update:model-value="validationStore.resetFieldError('password')"
        />
        <AppPasswordField
          :label="$t('CONFIRM_PASSWORD')"
          :placeholder="$t('ENTER_PASSWORD')"
          v-model="data.confirm_password"
          :error="validationStore.getForFieldError('confirm_password')"
          @update:model-value="
            validationStore.resetFieldError('confirm_password')
          "
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
import AppPasswordField from "~/components/Styleguide/AppPasswordField/AppPasswordField.vue";
import VAuthCard from "~/components/VAuthCard.vue";

definePageMeta({
  middleware: ["auth"],
});

const authStore = useAuthStore();
const validationStore = useValidationStore();

const data = ref({
  email: "",
  password: "",
  confirm_password: "",
});

const loading = ref(false);

const confirm = async () => {
  loading.value = true;

  const { status } = await useAsyncData("sign-up", () =>
    authStore.signUp(data.value),
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

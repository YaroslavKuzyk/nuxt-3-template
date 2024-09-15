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
        {{ $t("RESET_PASSWORD") }}
      </template>
      <template #inputs>
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
import { useRoute } from "vue-router";
import { useAuthStore } from "~/stores/useAuthStore";
import { useValidationStore } from "~/stores/useValidationStore";
import type { IResetPassword } from "@/models/auth";
import AppPasswordField from "~/components/Styleguide/AppPasswordField/AppPasswordField.vue";
import VAuthCard from "~/components/VAuthCard.vue";

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute();
const authStore = useAuthStore();
const validationStore = useValidationStore();

const data = ref<IResetPassword>({
  password: "",
  confirm_password: "",
  token: "",
  email: "",
});
const loading = ref(false);

const confirm = async () => {
  if (data.value.token === "" || data.value.email === "") {
    return;
  }

  loading.value = true;

  const { status } = await useAsyncData("sign-up", () =>
    authStore.resetPassword(data.value),
  );

  watchEffect(() => {
    if (status.value === "pending") {
      loading.value = true;
    } else {
      loading.value = false;
    }
  });
};

onMounted(() => {
  data.value.token = route.query.token as string;
  data.value.email = route.query.email as string;
});

onUnmounted(() => {
  validationStore.clearErrors();
});
</script>

<style lang="scss" scoped></style>

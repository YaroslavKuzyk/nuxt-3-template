<template>
  <header class="header">
    <div class="header-actions">
      <template v-if="!authStore.isAuth">
        <nuxt-link class="decoration-none" to="/sign-in">
          <AppButton :primary="false">{{ $t("SIGN_IN") }}</AppButton>
        </nuxt-link>
        <nuxt-link class="decoration-none" to="/sign-up">
          <AppButton>{{ $t("SIGN_UP") }}</AppButton>
        </nuxt-link>
      </template>
      <template v-else>
        <AppButton :primary="false" @click="authStore.logOut">{{
          $t("LOG_OUT")
        }}</AppButton>
      </template>

      <AppPopover>
        <template #header>
          <div class="header__popover-activator">
            <IconLang />
          </div>
        </template>
        <template #content><VLangList /> </template>
      </AppPopover>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import AppButton from "~/components/Styleguide/AppButton/AppButton.vue";
import AppPopover from "~/components/Styleguide/AppPopover/AppPopover.vue";
import IconLang from "~/components/Icons/IconLang.vue";
import VLangList from "~/components/VLangList.vue";

const authStore = useAuthStore();
</script>

<style scoped lang="scss">
.header {
  display: flex;
  padding: 0 24px;
  max-width: var(--container-width);
  margin: 0 auto;

  &-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: auto;
  }

  &__popover-activator {
    height: 58px;
    min-width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

<template>
  <div class="lang-list">
    <button
      v-for="item in locales"
      :key="item.code"
      class="app-popover__item lang-list__item"
      @click="setLocale(item.code)"
    >
      {{ item.name }}

      <IconCheck v-if="item.code === locale" />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconCheck from "~/components/Icons/IconCheck.vue";

import { useI18n } from "vue-i18n";
const { locale, locales, setLocale } = useI18n();
// const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped lang="scss">
.lang-list {
  width: 145px;
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    font-size: 14px;
    height: 37px;
  }
}
</style>

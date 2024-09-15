<template>
  <button
    :disabled="disabled"
    class="app-button"
    :class="{
      'app-button--secondary': !primary,
      'app-button--large': large,
      'app-button--loading': loading,
    }"
  >
    <template v-if="!loading">
      <slot name="prepend"></slot>
      <slot />
      <slot name="append"></slot>
    </template>
    <template v-else>
      <AppLoader is-button />
    </template>
  </button>
</template>

<script setup lang="ts">
import AppLoader from "../AppLoader/AppLoader.vue";
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: true,
  },
  large: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.app-button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 0;
  background: var(--primary-button-color);
  color: var(--default-color);
  padding: 9px 12px;
  font-size: 14px;
  transition: 0.3s;
  height: 34px;

  &--large {
    height: 50px;
    min-width: 140px;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
  }

  &--loading {
    pointer-events: none;
  }

  &:hover:not(:disabled) {
    opacity: 0.8;
  }

  &:disabled {
    background: var(--disabled-bg);
    cursor: default;
    color: var(--disabled-color);
  }

  &--secondary {
    background: var(--secondary-color);
    color: var(--title-color);

    &:hover:not(:disabled) {
      opacity: 0.8;
    }

    &:disabled {
      background: var(--disabled-bg);
      cursor: default;
      color: var(--disabled-color);
    }
  }
}
</style>

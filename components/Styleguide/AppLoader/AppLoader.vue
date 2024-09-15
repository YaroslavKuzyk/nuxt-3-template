<template>
  <div class="app-loader" :class="{ 'app-loader--button': isButton }">
    <div class="app-loader__item app-loader__item--primary"></div>
    <div class="app-loader__item app-loader__item--secondary"></div>
    <div class="app-loader__item app-loader__item--primary"></div>
    <div class="app-loader__item app-loader__item--secondary"></div>
    <div class="app-loader__item app-loader__item--primary"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isButton: Boolean,
});
</script>

<style scoped lang="scss">
.app-loader {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 35px;

  &--button {
    height: 100%;
  }

  &__item {
    height: 100%;
    width: 3px;
    background: var(--text-color);

    &--primary {
      height: 20px;
      animation: primary 1s infinite;
    }

    &--secondary {
      animation: secondary 1s infinite;
    }
  }
}

@keyframes primary {
  0% {
    height: 60%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 60%;
  }
}

@keyframes secondary {
  0% {
    height: 100%;
  }
  50% {
    height: 60%;
  }
  100% {
    height: 100%;
  }
}
</style>

<template>
  <div class="app-popover">
    <div class="app-popover__header">
      <slot name="header"></slot>
    </div>
    <div class="app-popover__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app-popover {
  display: inline-flex;
  position: relative;

  &__header {
    cursor: pointer;
  }

  &:hover {
    .app-popover__content {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }

  &__content {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: var(--card-color);
    border: 1px solid var(--border-color);
    z-index: 100;
    transition: 0.3s;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    overflow: hidden;
  }
}
</style>

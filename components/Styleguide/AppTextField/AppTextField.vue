<template>
  <div
    class="app-field"
    :class="{
      'app-field--error': error,
      'app-field--readonly': readonly,
      'app-field--focused': isFocused,
    }"
  >
    <div class="app-field__wrapper">
      <div class="app-field__label">{{ label }} {{ required ? "*" : "" }}</div>
      <div v-if="$slots.prepend" class="app-field__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :type="type"
        :placeholder="placeholder"
        v-model="fieldValue"
        @focus="onFocus"
        @blur="onBlur"
        :disabled="readonly"
        class="app-field__item"
      />
      <div v-if="$slots.append" class="app-field__append">
        <slot name="append"></slot>
      </div>
    </div>

    <div v-if="error" class="app-field__error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue", "focus", "blur"]);

const fieldValue = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const isFocused = ref(false);

const onFocus = () => {
  emit("focus");
  isFocused.value = true;
};

const onBlur = () => {
  emit("blur");
  isFocused.value = false;
};
</script>

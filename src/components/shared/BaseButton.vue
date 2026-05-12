<template>
  <button :type="type" :class="buttonClasses" :disabled="disabled">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const baseClasses =
  "px-4 py-2 rounded-lg cursor-pointer transition font-medium";

const variants = {
  primary: "bg-primary text-sm text-white hover:opacity-90",

  secondary: "bg-gray-200 text-black hover:bg-gray-300",

  danger: "bg-red-500 text-white hover:bg-red-600",

  outline: "border border-gray-300 bg-white hover:bg-gray-100",
};

const buttonClasses = computed(() => [
  baseClasses,
  variants[props.variant],
  props.disabled && "opacity-50 cursor-not-allowed",
]);
</script>

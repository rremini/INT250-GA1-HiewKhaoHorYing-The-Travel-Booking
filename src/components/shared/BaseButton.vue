<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

type ButtonType = "button" | "submit" | "reset";

interface Props {
  variant?: ButtonVariant;
  type?: ButtonType;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  type: "button",
  disabled: false,
});

const baseClasses =
  "px-4 py-2 rounded-lg cursor-pointer transition font-medium";

const variants: Record<ButtonVariant, string> = {
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

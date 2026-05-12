<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :class="[
      'flex flex-1 text-sm py-2 px-3 bg-[#F3F3F5] outline-0 h-8 rounded-lg',
      inputClass,
    ]"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  inputClass: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>

<script setup lang="ts">
import { useStepperStore } from "@/stores/stepperStore";
import { cn } from "@/utils/utils";
import { onMounted } from "vue";

export type StepItem = {
  id: string;
  label: string;
  value: string;
  disabled: boolean;
  isValid: boolean;
};

type StepperVariant = "default" | "disabled";

const prosp = defineProps<{ stepItems: StepItem[] }>();
const stepperStore = useStepperStore();

const variants: Record<StepperVariant, string> = {
  default: "",
  disabled: "",
};

onMounted(() => {
  stepperStore.init(prosp.stepItems);
});
</script>

<template>
  <div class="flex items-center gap-3 w-full">
    <div
      class="flex items-center group"
      v-for="(item, index) in stepperStore.stepItems as StepItem[]"
    >
      <button
        :data-valid="item.isValid ?? false"
        class="flex items-center relative group peer cursor-pointer disabled:cursor-not-allowed"
        :disabled="item.disabled"
        :key="item.id"
        @click="() => stepperStore.goToWithId(item.id)"
      >
        <span
          class="flex items-center justify-center size-8 rounded-full bg-primary text-white text-sm mr-2 group-disabled:bg-[#E2E8F0] group-disabled:text-[#62748E]"
          >{{ index + 1 }}</span
        >
        <span class="text-sm group-disabled:text-[#62748E]">
          {{ item.label }}
        </span>
      </button>
      <span
        class="before:content-[''] before:flex before:w-10 before:h-px before:bg-[#E2E8F0] ml-2 group-last:hidden"
      ></span>
    </div>
  </div>
</template>

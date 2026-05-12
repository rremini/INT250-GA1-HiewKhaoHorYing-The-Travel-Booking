<script setup>
import { ref } from "vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import { useStepperStore } from "@/stores/stepperStore";

const stepperStore = useStepperStore();

const selectedPackage = ref(null);

const packages = [
  {
    id: "paris",
    title: "Paris Getaway",
    flight: "AF-024 · NYC → CDG · Direct",
    hotel: "Hotel Lumière · 4★ · 5 nights",
    price: "$1,840",
  },
  {
    id: "tokyo",
    title: "Tokyo Adventure",
    flight: "JL-005 · LAX → HND · Direct",
    hotel: "Sakura Inn · 4★ · 6 nights",
    price: "$2,210",
  },
  {
    id: "santorini",
    title: "Santorini Escape",
    flight: "LH-1284 · BOS → JTR · 1 stop",
    hotel: "Aegean View · 5★ · 4 nights",
    price: "$1,690",
  },
];

function submit() {
  if (!selectedPackage.value) return;

  stepperStore.next();
  console.log("Selected Package ID:", selectedPackage.value);
}

function goBack() {
  stepperStore.previous();
}
</script>

<template>
  <div v-show="stepperStore.currentStep?.id === 'sec'" class="flex w-full p-4.5 bg-white flex-col">
    <p class="text-[#62748E] text-sm mb-4">
      You have 24 hours to select one of the proposed packages.
    </p>

    <div class="space-y-4">
      <div v-for="pkg in packages" :key="pkg.id" @click="selectedPackage = pkg.id"
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 rounded-xl border cursor-pointer transition-colors duration-200"
        :class="[
          selectedPackage === pkg.id
            ? 'border-[#0088FF] bg-[#F4FAFF]'
            : 'border-gray-200 hover:border-gray-300 bg-white'
        ]">
        <div class="flex flex-col">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-base font-semibold text-gray-900">
              {{ pkg.title }}
            </h3>
            <span v-if="selectedPackage === pkg.id"
              class="px-2.5 py-0.5 bg-[#0088FF] text-white text-[11px] font-medium rounded-full">
              Selected
            </span>
          </div>

          <div class="text-sm text-gray-500 space-y-1.5">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="text-gray-400">
                <path
                  d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.5l-1.3 2.6c-.2.4-.1.9.3 1.1L8.5 13l-4 4-2.8-.9c-.4-.1-.9.1-1.1.5l-.9 1.8c-.2.5.1 1 .6 1.1l5.8 1.9 1.9 5.8c.1.5.6.8 1.1.6l1.8-.9c.4-.2.6-.7.5-1.1L9 22l4-4 2.6 5.8c.2.4.7.5 1.1.3l2.6-1.3c.3-.2.6-.6.5-1.1z" />
              </svg>
              {{ pkg.flight }}
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="text-gray-400">
                <path d="M4 10v11" />
                <path d="M4 4v2" />
                <path d="M8 22v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" />
                <path d="M16 10v11" />
                <path d="M16 4v2" />
                <path d="M20 10v11" />
                <path d="M20 4v2" />
                <path d="M8 10v11" />
                <path d="M8 4v2" />
                <path d="M12 4v2" />
                <path d="M12 10v11" />
                <rect x="2" y="22" width="20" height="2" />
              </svg>
              {{ pkg.hotel }}
            </div>
          </div>
        </div>

        <div
          class="mt-4 sm:mt-0 text-left sm:text-right flex flex-row sm:flex-col items-end sm:items-end justify-between sm:justify-start">
          <span class="text-xs text-gray-500">Total</span>
          <span class="text-xl font-semibold text-[#0088FF]">
            {{ pkg.price }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
      <BaseButton variant="outline" @click="goBack">
        Back
      </BaseButton>
      <BaseButton variant="primary" :disabled="!selectedPackage" @click="submit">
        Continue to Payment
      </BaseButton>
    </div>
  </div>
</template>
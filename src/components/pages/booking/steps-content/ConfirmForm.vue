<script setup>
import BaseButton from "@/components/shared/BaseButton.vue";
import { useStepperStore } from "@/stores/stepperStore";

const stepperStore = useStepperStore();

function resetBooking() {
  stepperStore.goToWithId("req");
}
</script>

<template>
  <div
    :hidden="stepperStore.currentStep?.id !== 'conf'"
    class="flex w-full py-16 px-6 bg-white flex-col items-center justify-center border-[#0000001A] rounded-2xl text-center"
  >
    <div class="flex justify-center mb-6">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="#00C48C"
          stroke-width="4"
          fill="none"
        />
        <path
          d="M18 31L26 39L42 21"
          stroke="#00C48C"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
      Booking confirmed!
    </h2>

    <p class="text-[#62748E] text-sm max-w-105px mx-auto mb-8 leading-relaxed">
      Your flight and hotel reservations are confirmed and the charge has been
      processed to your credit card. A receipt has been sent to your email.
    </p>

    <BaseButton variant="primary" @click="resetBooking">
      Book Another Trip
    </BaseButton>
  </div>
</template>

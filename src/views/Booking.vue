<script setup lang="ts">
import Stepper, { StepItem } from "@/components/pages/booking/Stepper.vue";
import RequestForm from "@/components/pages/booking/steps-content/RequestForm.vue";
import { useStepperStore } from "@/stores/stepperStore";

const stepperStore = useStepperStore();

const stepItems: StepItem[] = [
  {
    id: "req",
    label: "Request",
    value: "s-1",
    disabled: false,
    isValid: true,
  },
  { id: "sec", label: "Select", value: "s-2", disabled: true, isValid: false },
  {
    id: "pay",
    label: "Payment",
    value: "s-3",
    disabled: true,
    isValid: false,
  },
  {
    id: "conf",
    label: "Confirmed",
    value: "s-4",
    disabled: true,
    isValid: false,
  },
];
</script>
<template>
  <div class="@container flex flex-col min-w-screen min-h-screen">
    <div class="mx-auto p-7 text-center">
      <h6 class="text-2xl">Book your trip</h6>
      <p class="text-subtitle mt-2">
        Submit a request, review curated alternatives, and confirm payment.
      </p>
    </div>
    <div class="my-8 mx-auto">
      <Stepper :step-items="stepItems" />
    </div>
    <div class="max-w-3xl w-full mx-auto px-10">
      <RequestForm />
      <SelectForm />
    </div>
  </div>
</template>

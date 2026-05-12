import { defineStore } from "pinia";

export const useStepperStore = defineStore("stepper", {
  state: () => ({
    stepIndex: 0,
    /** @type {import("@/components/pages/booking/Stepper.vue").StepItem[]} */
    stepItems: [],
  }),

  getters: {
    totalSteps: (state) => state.stepItems.length,

    currentStep: (state) => state.stepItems[state.stepIndex],
    nextStep: (state) => state.stepItems[state.stepIndex + 1] ?? [],

    isFirstStep: (state) => state.stepIndex === 0,

    isLastStep: (state) => state.stepIndex === state.stepItems.length - 1,
  },

  actions: {
    /**
     * @param {import("@/components/pages/booking/Stepper.vue").StepItem[]} stepItems
     */
    init(stepItems = []) {
      this.stepItems = stepItems;
      this.stepIndex = 0;
    },

    /**
     * @param {number} index
     */
    goTo(index) {
      if (index < 0 || index >= this.totalSteps) {
        return;
      }

      const target = this.stepItems[index];

      if (target?.disabled) {
        return;
      }

      this.stepIndex = index;
    },

    next() {
      if (this.isLastStep) {
        return;
      }

      this.nextStep.disabled = false;
      this.nextStep.isValid = true;

      this.stepIndex++;
    },

    previous() {
      if (this.isFirstStep) {
        return;
      }

      this.stepIndex--;
    },

    /**
     * @param {string} id
     */
    goToWithId(id) {
      if (!id) return;

      const index = this.stepItems.findIndex(
        (item) => item.id.toLowerCase() === id.toLowerCase(),
      );

      if (index === -1) {
        return;
      }

      this.goTo(index);
    },

    reset() {
      this.stepIndex = 0;

      this.stepItems = this.stepItems.map((step) => ({
        ...step,
        value: "",
        isValid: false,
      }));
    },
  },
});

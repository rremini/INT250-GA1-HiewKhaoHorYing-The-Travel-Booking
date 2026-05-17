<script setup>
import BaseButton from "@/components/shared/BaseButton.vue";
import BaseInput from "@/components/shared/BaseInput.vue";
import { useStepperStore } from "@/stores/stepperStore";
import { reactive } from "vue";

const stepperStore = useStepperStore();

const form = reactive({
  name: "",
  email: "",
  destination: "",
  departureDate: "",
  returnDate: "",
});

const errors = reactive({
  name: "",
  email: "",
  destination: "",
  departureDate: "",
  returnDate: "",
});

function validate() {
  // reset errors
  errors.name = "";
  errors.email = "";
  errors.destination = "";
  errors.departureDate = "";
  errors.returnDate = "";

  let isValid = true;

  // name
  if (!form.name.trim()) {
    errors.name = "Name is required";
    isValid = false;
  }

  // email
  if (!form.email.trim()) {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Invalid email";
    isValid = false;
  }

  // destination
  if (!form.destination.trim()) {
    errors.destination = "Destination is required";

    isValid = false;
  }

  // departure date
  if (!form.departureDate) {
    errors.departureDate = "Departure date is required";

    isValid = false;
  }

  // return date
  if (!form.returnDate) {
    errors.returnDate = "Return date is required";

    isValid = false;
  }

  // validate date logic
  if (form.departureDate && form.returnDate) {
    const departure = new Date(form.departureDate);

    const returning = new Date(form.returnDate);

    if (returning < departure) {
      errors.returnDate = "Return date must be after departure date";

      isValid = false;
    }
  }

  return isValid;
}

function submit(e) {
  e.preventDefault();

  const valid = validate();

  if (!valid) return;

  stepperStore.next();

  console.log("submit form", form);
}
</script>
<template>
  <div
    :hidden="stepperStore.currentStep?.id !== 'req'"
    class="flex w-full p-4.5 border bg-white space-y-6 flex-col border-px border-[#0000001A] rounded-2xl"
  >
    <p>Travel reservation request</p>
    <form @submit="submit">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Full Name</label
          >
          <BaseInput type="text" v-model="form.name" placeholder="Jane Doe" />
          <p class="text-xs text-red-500 mt-2" v-if="errors.name">
            {{ errors.name }}
          </p>
        </div>
        <div class="flex flex-col">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Email</label
          >
          <BaseInput
            type="text"
            v-model="form.email"
            placeholder="jane@example.com"
          />
          <p class="text-xs text-red-500 mt-2" v-if="errors.email">
            {{ errors.email }}
          </p>
        </div>
        <div class="flex flex-col col-span-full">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Destination</label
          >
          <BaseInput
            type="text"
            v-model="form.destination"
            placeholder="e.g. Paris, France"
          />
          <p class="text-xs text-red-500 mt-2" v-if="errors.destination">
            {{ errors.destination }}
          </p>
        </div>
        <div class="flex flex-col">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Departure Date</label
          >
          <BaseInput type="date" v-model="form.departureDate" />
          <p class="text-xs text-red-500 mt-2" v-if="errors.departureDate">
            {{ errors.departureDate }}
          </p>
        </div>
        <div class="flex flex-col">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Return Date</label
          >
          <BaseInput type="date" v-model="form.returnDate" />
          <p class="text-xs text-red-500 mt-2" v-if="errors.returnDate">
            {{ errors.returnDate }}
          </p>
        </div>
      </div>
      <div class="mt-4 flex justify-end">
        <BaseButton type="submit">Submit Request</BaseButton>
      </div>
    </form>
  </div>
</template>

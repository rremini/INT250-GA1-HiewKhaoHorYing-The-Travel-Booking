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
  depratureDate: "",
  returnDate: "",
});

const errors = reactive({
  name: "",
  email: "",
});

function validate() {
  errors.name = "";
  errors.email = "";

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
          <label class="text-sm mb-1">Full Name</label>
          <BaseInput type="text" v-model="form.name" placeholder="Jane Doe" />
          <p v-if="errors.name">
            {{ errors.name }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-sm mb-1">Email</label>
          <BaseInput
            type="text"
            v-model="form.email"
            placeholder="jane@example.com"
          />
          <p v-if="errors.email">
            {{ errors.name }}
          </p>
        </div>
        <div class="flex flex-col col-span-full">
          <label class="text-sm mb-1">Destination</label>
          <BaseInput
            type="text"
            v-model="form.destination"
            placeholder="e.g. Paris, France"
          />
          <p v-if="errors.destination">
            {{ errors.name }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-sm mb-1">Destination</label>
          <BaseInput type="date" v-model="form.depratureDate" />
          <p v-if="errors.depratureDate">
            {{ errors.name }}
          </p>
        </div>
        <div class="flex flex-col">
          <label class="text-sm mb-1">Destination</label>
          <BaseInput type="date" v-model="form.returnDate" />
          <p v-if="errors.returnDate">
            {{ errors.name }}
          </p>
        </div>
      </div>
      <div class="mt-4">
        <BaseButton type="submit">Submit Request</BaseButton>
      </div>
    </form>
  </div>
</template>

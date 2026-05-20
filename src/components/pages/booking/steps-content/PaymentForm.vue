<script setup>
import BaseButton from "@/components/shared/BaseButton.vue";
import BaseInput from "@/components/shared/BaseInput.vue";
import { useStepperStore } from "@/stores/stepperStore";
import { reactive } from "vue";

const stepperStore = useStepperStore();

const form = reactive({
  cardNumber: "",
  expire: "",
  cvc: "",
  cardholderName: "",
});

const errors = reactive({
  cardNumber: "",
  expire: "",
  cvc: "",
  cardholderName: "",
});

function validate() {
  let isValid = true;

  // reset errors
  errors.cardNumber = "";
  errors.expire = "";
  errors.cvc = "";
  errors.cardholderName = "";

  // Card Number
  const cleanCardNumber = form.cardNumber.replace(/\s/g, "");

  if (!cleanCardNumber) {
    errors.cardNumber = "Card number is required";

    isValid = false;
  } else if (!/^\d{16}$/.test(cleanCardNumber)) {
    errors.cardNumber = "Card number must be 16 digits";

    isValid = false;
  }

  // Expire (MM / YY)
  const expireRegex = /^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/;

  if (!form.expire) {
    errors.expire = "Expiration date is required";

    isValid = false;
  } else if (!expireRegex.test(form.expire)) {
    errors.expire = "Format must be MM / YY";

    isValid = false;
  } else {
    const [month, year] = form.expire.split("/").map((v) => v.trim());

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear() % 100;

    const currentMonth = currentDate.getMonth() + 1;

    const expMonth = Number(month);
    const expYear = Number(year);

    const isExpired =
      expYear < currentYear ||
      (expYear === currentYear && expMonth < currentMonth);

    if (isExpired) {
      errors.expire = "Card is expired";
      isValid = false;
    }
  }

  // CVC
  if (!form.cvc) {
    errors.cvc = "CVC is required";

    isValid = false;
  } else if (!/^\d{3,4}$/.test(form.cvc)) {
    errors.cvc = "CVC must be 3 or 4 digits";

    isValid = false;
  }

  // Cardholder Name
  if (!form.cardholderName.trim()) {
    errors.cardholderName = "Cardholder name is required";

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
    :hidden="stepperStore.currentStep?.id !== 'pay'"
    class="flex w-full p-4.5 border bg-white space-y-6 flex-col border-px border-[#0000001A] rounded-2xl"
  >
    <p class="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        class="mr-3"
      >
        <path
          d="M16.6666 4.1665H3.33329C2.41282 4.1665 1.66663 4.9127 1.66663 5.83317V14.1665C1.66663 15.087 2.41282 15.8332 3.33329 15.8332H16.6666C17.5871 15.8332 18.3333 15.087 18.3333 14.1665V5.83317C18.3333 4.9127 17.5871 4.1665 16.6666 4.1665Z"
          stroke="#0A0A0A"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.66663 8.3335H18.3333"
          stroke="#0A0A0A"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Credit card information
    </p>
    <form @submit="submit">
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col col-span-full">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Card Number</label
          >
          <BaseInput
            type="text"
            v-model="form.cardNumber"
            placeholder="4242 4242 4242 4242"
          />
          <p class="text-xs text-red-500 mt-2" v-if="errors.cardNumber">
            {{ errors.cardNumber }}
          </p>
        </div>
        <div class="flex flex-col col-span-2">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Expiration</label
          >
          <BaseInput type="text" v-model="form.expire" placeholder="MM / YY" />
          <p class="text-xs text-red-500 mt-2" v-if="errors.expire">
            {{ errors.expire }}
          </p>
        </div>
        <div class="flex flex-col">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >CVC</label
          >
          <BaseInput type="text" v-model="form.cvc" placeholder="123" />
          <p class="text-xs text-red-500 mt-2" v-if="errors.cvc">
            {{ errors.cvc }}
          </p>
        </div>
        <div class="flex flex-col col-span-full">
          <label
            class="text-sm mb-1 after:content-['*'] after:text-red-500 after:ml-1"
            >Cardholder Name</label
          >
          <BaseInput type="text" v-model="form.cardholderName" />
          <p class="text-xs text-red-500 mt-2" v-if="errors.cardholderName">
            {{ errors.cardholderName }}
          </p>
        </div>
      </div>
      <div class="mt-4 flex space-x-4 justify-end">
        <BaseButton variant="outline" @click="() => stepperStore.previous()"
          >Back</BaseButton
        >
        <BaseButton type="submit">Confirm & Pay</BaseButton>
      </div>
    </form>
  </div>
</template>

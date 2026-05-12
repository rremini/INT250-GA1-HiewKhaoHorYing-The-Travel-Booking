<template>
  <div class="font-inter">
    <section class="bg-gradient-to-br from-sky-50 to-white">
      <div class="mx-auto max-w-7xl px-4 py-14 text-center">
        <h1 class="text-slate-900 text-2xl font-bold">Contact & Inquiries</h1>
        <p class="mx-auto mt-3 max-w-xl text-slate-600 text-base">
          Have a question about a booking, or want help planning a trip? Send us a
          message — our agents typically reply within 24 hours.
        </p>
      </div>
    </section>

    <section class="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
      <div class="md:col-span-2">
        <div class="rounded-lg border border-gray-300 bg-white">
          <div class="p-6">
            <form @submit.prevent="submit" class="grid gap-4 md:grid-cols-2">
              <div>
                <label for="cname" class="block text-base font-medium text-slate-900">Name</label>
                <input
                  id="cname"
                  v-model="form.name"
                  type="text"
                  class="mt-1 w-full rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div>
                <label for="cemail" class="block text-base font-medium text-slate-900">Email</label>
                <input
                  id="cemail"
                  v-model="form.email"
                  type="email"
                  class="mt-1 w-full rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div class="md:col-span-2">
                <label for="csub" class="block text-base font-medium text-slate-900">Subject</label>
                <input
                  id="csub"
                  v-model="form.subject"
                  type="text"
                  class="mt-1 w-full rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div class="md:col-span-2">
                <label for="cmsg" class="block text-base font-medium text-slate-900">Message</label>
                <textarea
                  id="cmsg"
                  v-model="form.message"
                  rows="6"
                  class="mt-1 w-full rounded-md border border-gray-200 bg-gray-200 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>
              <div class="md:col-span-2">
                <button
                  type="submit"
                  class="w-full rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <div
          v-for="contact in contacts"
          :key="contact.label"
          class="flex items-start gap-3 rounded-xl  border  border-gray-300  bg-white p-4"
        >
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
            <component :is="contact.icon" class="h-5 w-5" />
          </div>
          <div>
            <p class="text-sm text-slate-500">{{ contact.label }}</p>
            <p class="text-slate-900">{{ contact.value }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Mail, Phone, MapPin, Clock } from "lucide-vue-next";
import { toast } from "sonner";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contacts = ref([
  { icon: Mail, label: "Email", value: "hello@skyline.travel" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-2026" },
  { icon: MapPin, label: "Office", value: "1 Cloud Ave, Suite 200" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm" },
]);

const submit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    toast.error("Please complete the required fields.");
    return;
  }
  toast.success("Thanks! We'll be in touch within 24 hours.");
  form.value = { name: "", email: "", subject: "", message: "" };
};
</script>

<style scoped>
/* Optional: Add any component-specific styles here */
</style>

<template>
  <div class="dark:bg-slate-900 dark:text-white transition-colors">
    <Navbar />

    <!-- Toast Noti-->
    <div class="fixed top-4 right-4 z-50 space-y-2">
      <div
        v-for="notification in toasts"
        :key="notification.id"
        :class="[
          'px-4 py-3 rounded-lg text-white font-medium flex items-center gap-2 shadow-lg',
          'animate-in fade-in slide-in-from-right-full duration-300',
          notification.type === 'success'
            ? 'bg-green-500'
            : 'bg-red-500'
        ]"
      >
      <svg
        v-if="notification.type === 'success'"
        class="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
      <svg
        v-else
        class="w-5 h-5 shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
      {{ notification.message }}
      </div>
    </div>

    <div class="font-inter">
      <section class="bg-gradient-to-br from-sky-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div class="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 class="text-slate-900 dark:text-white text-2xl font-bold">Contact & Inquiries</h1>
          <p class="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300 text-base">
            Have a question about a booking, or want help planning a trip? Send us a
            message — our agents typically reply within 24 hours.
          </p>
        </div>
      </section>

      <section class="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div class="md:col-span-2">
          <div class="rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800">
            <div class="p-6">
              <form @submit.prevent="submit" class="grid gap-4 md:grid-cols-2">
                <div>
                  <label for="cname" class="block text-base font-medium text-slate-900 dark:text-white">Name</label>
                  <input
                    id="cname"
                    v-model="form.name"
                    type="text"
                    class="mt-1 w-full rounded-md border border-gray-200 dark:border-slate-600 bg-gray-200 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label for="cemail" class="block text-base font-medium text-slate-900 dark:text-white">Email</label>
                  <input
                    id="cemail"
                    v-model="form.email"
                    type="email"
                    class="mt-1 w-full rounded-md border border-gray-200 dark:border-slate-600 bg-gray-200 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div class="md:col-span-2">
                  <label for="csub" class="block text-base font-medium text-slate-900 dark:text-white">Subject</label>
                  <input
                    id="csub"
                    v-model="form.subject"
                    type="text"
                    class="mt-1 w-full rounded-md border border-gray-200 dark:border-slate-600 bg-gray-200 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div class="md:col-span-2">
                  <label for="cmsg" class="block text-base font-medium text-slate-900 dark:text-white">Message</label>
                  <textarea
                    id="cmsg"
                    v-model="form.message"
                    rows="6"
                    class="mt-1 w-full rounded-md border border-gray-200 dark:border-slate-600 bg-gray-200 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
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
            class="flex items-start gap-3 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400">
              <component :is="contact.icon" class="h-5 w-5" />
            </div>
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ contact.label }}</p>
              <p class="text-slate-900 dark:text-white">{{ contact.value }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Mail, Phone, MapPin, Clock } from "lucide-vue-next";
import Navbar from '../shared/Navbar.vue';
import Footer from '../shared/Footer.vue';

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const toasts = ref([]);
let toastId = 0;

const showToast = (message, type = 'success') => {
  const id = toastId++;
  toasts.value.push({ id, message, type });

  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id);
  }, 3000);
};

const contacts = ref([
  { icon: Mail, label: "Email", value: "hello@skyline.travel" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-2026" },
  { icon: MapPin, label: "Office", value: "1 Cloud Ave, Suite 200" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm" },
]);

const submit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    showToast("Please complete the required fields.", 'error');
    return;
  }
  showToast("Thanks! We'll be in touch within 24 hours.", 'success');
  form.value = { name: "", email: "", subject: "", message: "" };
};
</script>


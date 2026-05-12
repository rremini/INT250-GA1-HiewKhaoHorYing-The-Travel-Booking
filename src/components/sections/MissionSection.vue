<script setup>
const features = [
  'Flights and hotels packaged together',
  'Transparent 24-hour confirmation windows',
  'Automatic reversal protection',
  'Retry logic for failed bookings and payments'
]
</script>

<template>
  <section class="py-20 px-4 bg-white">
    <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="rounded-2xl overflow-hidden">
        <img
          src="@/assets/airplan.jpg"
          alt="Airplane wing view"
          class="w-full h-96 object-cover"
        />
      </div>

      <div>
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Our mission</h2>
        <p class="text-base text-gray-600 leading-relaxed mb-8">
          We exist to make travel reservations effortless. Every request goes through a structured
          workflow with 24-hour selection and payment windows, automatic cancellation handling, and
          built-in reservation reversal if booking errors occur.
        </p>

        <ul class="space-y-4">
          <li v-for="feature in features" :key="feature" class="flex items-center gap-3 text-sm">
            <span class="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold">✓</span>
            <span class="text-gray-700 font-medium">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

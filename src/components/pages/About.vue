<script setup>
const features = [
  'Flights and hotels packaged together',
  'Transparent 24-hour confirmation windows',
  'Automatic reversal protection',
  'Retry logic for failed bookings and payments'
]

const processSteps = [
  {
    number: 1,
    title: 'Submit your request',
    description: 'Tell us your travel dates, destinations and preferences for flights and hotels.'
  },
  {
    number: 2,
    title: 'Receive curated alternatives',
    description: 'Our agents research availability and package the best options within 24 hours.'
  },
  {
    number: 3,
    title: 'Select & confirm',
    description: 'Pick your preferred alternative, share credit card details, and confirm your booking.'
  },
  {
    number: 4,
    title: 'Travel worry-free',
    description: 'Reservations are protected — automatic reversal if anything goes wrong.'
  }
]
</script>

<template>
  <div class="font-inter">
    <section class="py-20 px-4 text-center" style="background-color: #f6fbff;">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">About Skyline Travel</h1>
      <p class="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We're a full-service travel agency handling airline transportation and hotel reservations from
        end to end — research, packaging, booking, and payment.
      </p>
    </section>

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

    <section class="py-20 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 text-center mb-4">How our process works</h2>
        <p class="text-center text-gray-600 mb-12">A reliable four-step reservation flow.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="step in processSteps" :key="step.number" class="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
              {{ step.number }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

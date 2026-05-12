<template>
  <div
    class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
  >
    <!-- News Section -->
    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

      <!-- Section Header -->
      <div class="mb-10 text-center">
        <h2
          class="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          News & Activity
        </h2>

        <p
          class="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base"
        >
          Travel guides, policy updates, and stories from our agents.
        </p>
      </div>

      <!-- Articles Grid -->
      <div
        class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        <article
          v-for="article in articles"
          :key="article.title"
          class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        >

          <!-- Image -->
          <div class="relative h-56 overflow-hidden sm:h-64">
            <img
              :src="article.image"
              :alt="article.title"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
            ></div>

            <!-- Category -->
            <div class="absolute left-4 top-4">
              <span
                class="rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-sky-700 backdrop-blur dark:bg-slate-800/90 dark:text-sky-400"
              >
                {{ article.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 sm:p-6">

            <!-- Date -->
            <div
              class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <Calendar class="h-4 w-4" />
              <span>{{ article.date }}</span>
            </div>

            <!-- Title -->
            <h3
              class="mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-sky-600 dark:group-hover:text-sky-400 sm:text-2xl"
            >
              {{ article.title }}
            </h3>

            <!-- Excerpt -->
            <p
              class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400"
            >
              {{ article.excerpt }}
            </p>

            <!-- Button -->
            <button
              class="mt-6 inline-flex items-center gap-2 font-medium text-sky-600 transition-all hover:gap-3 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300"
            >
              Read More
              <span>→</span>
            </button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Calendar } from "lucide-vue-next";

const articles = [
  {
    title: "Top 10 Spring destinations for 2026",
    category: "Travel Guide",
    date: "May 02, 2026",
    excerpt:
      "From Lisbon to Lake Como, here are the destinations our agents are recommending this spring.",
    image:
      "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=1000&q=80",
  },
  {
    title: "How our 24-hour confirmation window works",
    category: "Policy",
    date: "April 21, 2026",
    excerpt:
      "Understand the timeline between request submission, selection, and credit card confirmation.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1000&q=80",
  },
  {
    title: "New partner hotels in Southeast Asia",
    category: "Announcement",
    date: "April 10, 2026",
    excerpt:
      "We've added 40 new partner hotels across Thailand, Vietnam, and Indonesia.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&q=80",
  },
  {
    title: "Tips for stress-free airport travel",
    category: "Travel Tips",
    date: "March 28, 2026",
    excerpt:
      "Practical advice from our travel agents on navigating busy international airports.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1000&q=80",
  },
  {
    title: "Best beaches to visit this summer",
    category: "Destination",
    date: "March 15, 2026",
    excerpt:
      "Explore breathtaking beaches and hidden gems for your next tropical vacation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&q=80",
  },
  {
    title: "Travel safety tips for international trips",
    category: "Safety",
    date: "March 02, 2026",
    excerpt:
      "Essential safety advice to help travelers stay secure during overseas journeys.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1000&q=80",
  },
];
</script>
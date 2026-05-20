<script setup>
import { ref } from "vue";
import Navbar from "../shared/Navbar.vue";
import Footer from "../shared/Footer.vue";
import background from "@/assets/็homepages/cloud_homepage.png";
</script>
<template>
  <Navbar />
  <section
    class="relative w-full min-h-screen bg-[#e8ecf1] overflow-hidden flex flex-col justify-start items-center pt-20 md:pt-28"
  >
    <div class="absolute inset-0 z-0">
      <img
        :src="background"
        alt="Clouds Background"
        class="w-full h-full object-cover opacity-50"
      />
    </div>

    <div
      class="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto w-full animate-fade-in-down"
    >
      <h3
        class="text-xs md:text-sm tracking-[0.2em] text-slate-500 font-semibold uppercase mb-4 md:mb-6"
      >
        Flight Booking
      </h3>

      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-medium mb-4 md:mb-6 text-slate-900 leading-tight"
      >
        <span class="text-[#007edb]">Plan Journey,</span><br />
        Flights and Hotels.
      </h1>

      <p
        class="text-slate-500 max-w-xl text-sm md:text-base leading-relaxed mb-8 md:mb-10"
      >
        Skyline Agency researches availability across airlines and hotels,
        packages the best options, and handles the booking and payment for you.
      </p>

      <button
        class="bg-white text-slate-900 font-semibold text-sm md:text-base px-8 py-3.5 md:py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
      >
        Get Ticket Now
      </button>
    </div>

    <button
      class="absolute bottom-10 z-30 bg-[#0f172a] text-white p-3.5 rounded-full hover:bg-slate-700 transition-colors duration-300 cursor-pointer shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
    </button>

    <div
      class="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-linear-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"
    ></div>
  </section>
  <Footer />
</template>

<style scoped>
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes flyIn {
  0% {
    opacity: 0;
    transform: translateX(100px) translateY(50px) scale(0.9);
  }

  100% {
    opacity: 1;
    transform: translateX(0) translateY(0) scale(1);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 1.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}

.animate-fly-in {
  animation: flyIn 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s forwards;
  opacity: 0;
}
</style>

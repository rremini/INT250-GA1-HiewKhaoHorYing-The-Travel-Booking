<script setup>
import background from "@/assets/็homepages/cloud_homepage.png";

import { Plane, Star } from "lucide-vue-next";

const destinations = [
  {
    name: "Paris, France",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4
  },
  {
    name: "Berlin, Germany",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=600",
    rating: 4
  },
  {
    name: "Sydney, Australia",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=600",
    rating: 4
  },
  {
    name: "Toronto, Canada",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?q=80&w=600",
    rating: 4
  },
  {
    name: "Mumbai, India",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600",
    rating: 4
  },
  {
    name: "London, UK",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4
  },
  {
    name: "New York, USA",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600",
    rating: 4
  },
  {
    name: "San Francisco, USA",
    description: "The City of Lights is calling! Discover iconic landmarks like the Eiffel Tower, world-class museums, and romantic streets.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=600",
    rating: 4
  }
];

const stats = [
  { value: "50,000+", label: "Unique Decor Items Sold" },
  { value: "4.9/5", label: "Star Rating From Our Clients" },
  { value: "1,200+", label: "Successful Home Transformations" },
  { value: "50+", label: "Talented Team Of Designers" }
];
</script>
<template>
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

      <router-link
         to="/booking"
        class="bg-white text-slate-900 font-semibold text-sm md:text-base px-8 py-3.5 md:py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
      >
        Get Ticket Now
      </router-link>
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
  <section class="relative w-full min-h-screen...">
    </section>

  <section class="max-w-7xl mx-auto px-4 py-16 w-full font-inter">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
      <div>
        <h3 class="text-xs md:text-sm tracking-[0.2em] text-slate-500 font-semibold uppercase mb-3">
          Flight Booking
        </h3>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight">
          Explore New Horizons,<br />
          One Destination at a Time.
        </h2>
      </div>
      <button class="mt-6 md:mt-0 bg-[#0f172a] text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-slate-800 transition-colors shadow-md">
        <Plane class="w-4 h-4" />
        Flights
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="dest in destinations" 
        :key="dest.name" 
        class="relative rounded-2xl overflow-hidden h-[340px] group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <img 
          :src="dest.image" 
          :alt="dest.name" 
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
        
        <div class="absolute top-4 left-4">
          <span class="bg-white text-slate-900 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Plane class="w-3 h-3" />
            Flights
          </span>
        </div>

        <div class="absolute bottom-5 left-5 right-5 text-white">
          <div class="flex text-amber-400 gap-0.5 mb-2">
            <Star 
              v-for="i in 5" 
              :key="i" 
              class="w-3.5 h-3.5" 
              :class="i <= dest.rating ? 'fill-current' : 'text-gray-400'" 
            />
          </div>
          <h3 class="text-lg font-semibold mb-1.5">{{ dest.name }}</h3>
          <p class="text-[11px] text-slate-300 line-clamp-3 leading-relaxed">
            {{ dest.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 py-16 w-full font-inter">
    <div class="border-t border-gray-200 pt-16">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-left">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-2xl font-medium text-slate-900 mb-2">{{ stat.value }}</div>
          <div class="text-sm text-slate-500">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
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

<script setup>
import { ref } from "vue";
import LogoBlue from "@/assets/Skyline-Blue.svg";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  logoSrc: {
    type: String,
    default: LogoBlue,
  },
  brandName: {
    type: String,
    default: "Skyline",
  },
  ctaText: {
    type: String,
    default: "Plan a Trip",
  },
  navItems: {
    type: Array,
    default: () => [
      { name: "Home", href: "/", active: true },
      { name: "About", href: "/about", active: false },
      { name: "Book Trip", href: "/booking", active: false },
      { name: "News", href: "/news", active: false },
      { name: "Contact", href: "/contact", active: false },
    ],
  },
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

function goToBooking() {
  router.push("/booking");
  isMobileMenuOpen.value = false;
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center cursor-pointer" @click="router.push('/')">
          <img
            :src="logoSrc"
            :alt="brandName"
            class="h-8 w-auto object-contain"
          />
        </div>

        <div class="hidden md:flex items-center space-x-2">
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            :class="[
              'px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200',
              item.href === $route.path
                ? 'bg-[#f0f9ff] text-[#0085db]'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <div class="hidden md:flex items-center">
          <button
            @click="goToBooking"
            class="bg-[#0085db] hover:bg-[#0073bf] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 shadow-sm"
          >
            {{ ctaText }}
          </button>
        </div>

        <div class="flex items-center md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      v-show="isMobileMenuOpen"
      class="fixed inset-0 z-50 bg-white md:hidden flex flex-col"
    >
      <div
        class="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-gray-100"
      >
        <div class="flex items-center cursor-pointer" @click="router.push('/'); isMobileMenuOpen = false">
          <img
            :src="logoSrc"
            :alt="brandName"
            class="h-8 w-auto object-contain"
          />
        </div>

        <button
          @click="toggleMobileMenu"
          class="text-slate-600 p-2 focus:outline-none hover:bg-slate-50 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="px-4 py-6 space-y-2 grow overflow-y-auto">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          @click="isMobileMenuOpen = false"
          :class="[
            'block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
            item.href === $route.path
              ? 'bg-[#f0f9ff] text-[#0085db]'
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
          ]"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <div class="p-4 border-t border-gray-100">
        <button
          @click="goToBooking"
          class="w-full bg-[#0085db] hover:bg-[#0073bf] text-white px-6 py-3.5 rounded-xl text-base font-medium transition-colors duration-200 shadow-sm"
        >
          {{ ctaText }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LogoBlue from '@/assets/Skyline-Blue.svg';

const props = defineProps({
    logoSrc: {
        type: String,
        default: LogoBlue
    },
    ctaText: {
        type: String,
        default: 'Plan a Trip'
    },
    navItems: {
        type: Array,
        default: () => [
            { name: 'Home', href: '#', active: true },
            { name: 'About', href: '#', active: false },
            { name: 'Book Trip', href: '#', active: false },
            { name: 'News', href: '#', active: false },
            { name: 'Contact', href: '#', active: false },
        ]
    }
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
    <nav class="bg-white border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">

                <div class="flex items-center cursor-pointer">
                    <img :src="logoSrc" :alt="brandName" class="h-8 w-auto object-contain" />
                </div>

                <div class="hidden md:flex items-center space-x-2">
                    <a v-for="item in navItems" :key="item.name" :href="item.href" :class="[
                        'px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200',
                        item.active
                            ? 'bg-[#f0f9ff] text-[#0085db]'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    ]">
                        {{ item.name }}
                    </a>
                </div>

                <div class="hidden md:flex items-center">
                    <button
                        class="bg-[#0085db] hover:bg-[#0073bf] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 shadow-sm">
                        {{ ctaText }}
                    </button>
                </div>

                <div class="flex items-center md:hidden">
                    <button @click="toggleMobileMenu"
                        class="text-slate-600 hover:text-slate-900 focus:outline-none p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <div v-show="isMobileMenuOpen" class="fixed inset-0 z-50 bg-white md:hidden flex flex-col">
            <div class="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-gray-100">
                <div class="flex items-center gap-3">
                    <div class="bg-[#0085db] text-white p-2 rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" class="w-6 h-6 transform -rotate-45">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </div>
                    <span class="text-xl font-semibold text-slate-800">{{ brandName }}</span>
                </div>

                <button @click="toggleMobileMenu"
                    class="text-slate-600 p-2 focus:outline-none hover:bg-slate-50 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="px-4 py-6 space-y-2 grow overflow-y-auto">
                <a v-for="item in navItems" :key="item.name" :href="item.href" :class="[
                    'block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
                    item.active
                        ? 'bg-[#f0f9ff] text-[#0085db]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                ]">
                    {{ item.name }}
                </a>
            </div>

            <div class="p-4 border-t border-gray-100">
                <button
                    class="w-full bg-[#0085db] hover:bg-[#0073bf] text-white px-6 py-3.5 rounded-xl text-base font-medium transition-colors duration-200 shadow-sm">
                    {{ ctaText }}
                </button>
            </div>
        </div>
    </nav>
</template>
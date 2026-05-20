<script setup>
import LogoWhite from '@/assets/Skyline-White.svg';

const props = defineProps({
    logoSrc: {
        type: String,
        default: LogoWhite
    },
    companyInfo: {
        type: Object,
        default: () => ({
            name: 'Skyline',
            description: 'Your trusted partner for seamless flight and hotel bookings around the world.'
        })
    },
    linkGroups: {
        type: Array,
        default: () => [
            {
                title: 'Explore',
                links: [
                    { label: 'Home', url: '#' },
                    { label: 'About', url: '#' },
                    { label: 'Book Trip', url: '#' },
                    { label: 'News', url: '#' },
                ]
            },
            {
                title: 'Services',
                links: [
                    { label: 'Flight Booking', url: '#' },
                    { label: 'Hotel Reservations', url: '#' },
                    { label: 'Travel Packages', url: '#' },
                    { label: 'Credit Card Payments', url: '#' },
                ]
            }
        ]
    },
    contactInfo: {
        type: Object,
        default: () => ({
            title: 'Contact',
            items: [
                { type: 'email', text: '67130500XXX@ad.sit.kmutt.ac.th' },
                { type: 'phone', text: '+1 (555) 010-2026' },
                { type: 'location', text: 'School of Information Technology, KMUTT, 126 Pracha Uthit Road, Bang Mod Subdistrict, Thung Khru District, Bangkok 10140, Thailand.' },
            ]
        })
    },
    copyright: {
        type: String,
        default: '© 2026 School of Information Technology. All rights reserved.'
    }
})
</script>

<template>
    <footer class="bg-slate-900 pt-16 pb-8 text-slate-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                <div>
                    <div class="mb-6">
                        <img :src="logoSrc" :alt="companyInfo.name" class="h-8 w-auto object-contain" />
                    </div>

                    <p class="text-sm leading-relaxed pr-4">
                        {{ companyInfo.description }}
                    </p>
                </div>

                <div v-for="(group, index) in linkGroups" :key="index">
                    <h3 class="text-white font-semibold mb-6">{{ group.title }}</h3>
                    <ul class="space-y-4 text-sm">
                        <li v-for="link in group.links" :key="link.label">
                            <a :href="link.url" class="hover:text-white transition-colors duration-200">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-white font-semibold mb-6">{{ contactInfo.title }}</h3>
                    <ul class="space-y-4 text-sm">
                        <li v-for="(item, index) in contactInfo.items" :key="index" class="flex items-start gap-3">

                            <svg v-if="item.type === 'email'" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-5 h-5 shrink-0 mt-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>

                            <svg v-else-if="item.type === 'phone'" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-5 h-5 shrink-0 mt-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                            <svg v-else-if="item.type === 'location'" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                class="w-5 h-5 shrink-0 mt-0.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>

                            <span>{{ item.text }}</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div class="border-t border-slate-800 mt-16 pt-8 text-center text-sm">
                <p>{{ copyright }}</p>
            </div>
        </div>
    </footer>
</template>

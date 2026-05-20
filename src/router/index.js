import { createRouter, createWebHistory } from "vue-router";
import About from "../components/pages/About.vue";
import Booking from "@/views/Booking.vue";
import { createRouter, createWebHistory } from "vue-router";
import News from "@/components/pages/news.vue";
import Contact from "@/components/pages/contact.vue";
import PageHome from "@/components/pages/PageHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "Home",
      component: PageHome,
    },
    {
      path: "/booking",
      name: "Booking",
      component: Booking,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/news",
      name: "News",
      component: News,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

export default router;

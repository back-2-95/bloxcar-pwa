import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/pages/HomePage.vue'
import AboutPage from "../components/pages/AboutPage.vue";
import VehiclePage from "../components/pages/VehiclePage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
        props: { page_title : "Welcome!" }
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
        props: { page_title : "About" }
    },
    {
        path: "/vehicle/:id",
        name: "Vehicle",
        component: VehiclePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

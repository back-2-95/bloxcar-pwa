import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage.vue'
import AboutPage from "../components/AboutPage.vue";
import VehiclePage from "../components/VehiclePage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
        props: { msg : "Jotain" }
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
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

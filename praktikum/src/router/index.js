import Vue from "vue";
import VueRouter from 'vue-router'

import defaultLayout from '@/layout/defaultLayout.vue'
import homePage from '@/views/Home.vue'
import BisnisPage from '@/views/Bisnis.vue'
import KesehatanPage from '@/views/Kesehatan.vue'
import EntertainmentPage from '@/views/Entertainment.vue'
import OlahragaPage from '@/views/Olahraga.vue'
import SainsPage from '@/views/Sains.vue'
import TeknologiPage from '@/views/Teknologi.vue'
import detailPage from '@/views/detailPage.vue'

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: defaultLayout,
    children: [{
        path: "/",
        name: "Home",
        component: homePage
    }, {
        path: "/kesehatan",
        name: "Kesehatan",
        component: KesehatanPage
    }, {
        path: "/bisnis",
        name: "Bisnis",
        component: BisnisPage
    }, {
        path: "/sains",
        name: "Sains",
        component: SainsPage
    }, {
        path: "/teknologi",
        name: "Teknologi",
        component: TeknologiPage
    }, {
        path: "/olahraga",
        name: "Olahraga",
        component: OlahragaPage
    }, {
        path: "/entertainment",
        name: "Entertainment",
        component: EntertainmentPage
    }, {
        path: "/detailPage/:index",
        name: "detailPage",
        component: detailPage
    }]
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
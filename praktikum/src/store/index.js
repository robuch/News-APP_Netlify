import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listBerita: [],
    },
    mutations: {
        setList(state, param) {
            state.listBerita = param;
        },
    },
    actions: {
        fetchList(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "general", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
        fetchListKesehatan(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "health", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
        fetchListOlahraga(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "sports", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
        fetchListSains(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "science", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
        fetchListEntertainment(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "entertainment", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
        fetchListTeknologi(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "technology", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
        fetchListBisnis(store) {
            axios.get("https://newsapi.org/v2/top-headlines", { params: { country: "id", category: "business", apiKey: "dffab7c4a6f84fdb9c611282870932ef" } }).then((response) => {
                store.commit("setList", response.data.articles);
            })
        },
    }
})
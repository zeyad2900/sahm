import { defineStore } from "pinia";
export const useMyGeneralsStore = defineStore({
    id: "myGeneralsStore",
    state: () => {
        return {
            countries: [],
            cities: [],
            jops: [],
        };
    },
    actions: {
        async fetchcountries() {
            const config = useRuntimeConfig();
            $fetch(`${config.public.baseURL}general/countries`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Language": useNuxtApp().$i18n.locale.value,
                },
            }).then((res) => {
                this.countries = res.data;
            });
        },
        async fetchcities() {
            const config = useRuntimeConfig();
            $fetch(`${config.public.baseURL}general/cities`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Language": useNuxtApp().$i18n.locale.value,
                },
            }).then((res) => {
                this.cities = res.data;
            });
        },
        async fetchjops() {
            const config = useRuntimeConfig();
            $fetch(`${config.public.baseURL}general/jobs`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Language": useNuxtApp().$i18n.locale.value,
                },
            }).then((res) => {
                this.jops = res.data;
            });
        },
    },
});

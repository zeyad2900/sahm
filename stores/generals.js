import { defineStore } from "pinia";
export const useMyGeneralsStore = defineStore({
    id: "myGeneralsStore",
    state: () => {
        return {
            countries: [],
            country: null,
            phonelength: null,
            phonecode: null,
            cities: [],
            jops: [],
        };
    },
    actions: {
        async fetchcountries() {
            $fetch("https://sahm.phpv8.aait-d.com/api/general/countries", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Language": useNuxtApp().$i18n.locale.value,
                },
            }).then((res) => {
                this.countries = res.data;
                this.country = res.data[0];
                this.phonelength = res.data[0].phone_number_limit;
                this.phonecode = res.data[0].phone_code;
            });
        },
        changeCountry(countery) {
            this.country = countery;
            this.phonelength = this.country.phone_number_limit;
            this.phonecode = this.country.phone_code;
        },
        async fetchcities() {
            $fetch("https://sahm.phpv8.aait-d.com/api/general/cities", {
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
            $fetch("https://sahm.phpv8.aait-d.com/api/general/jobs", {
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

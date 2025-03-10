// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/css/main.scss"],
    modules: [
        "nuxt-headlessui",
        "@nuxt/image",
        "@pinia/nuxt",
        [
            "@vee-validate/nuxt",
            {
                // disable or enable auto imports
                autoImports: true,
                // Use different names for components
                componentNames: {
                    Form: "VeeForm",
                    Field: "VeeField",
                    FieldArray: "VeeFieldArray",
                    ErrorMessage: "VeeErrorMessage",
                },
            },
        ],
        "nuxt-icons",
        "nuxt-icon",
        "@nuxtjs/tailwindcss",
        [
            "@nuxtjs/i18n",
            {
                locales: [
                    {
                        name: "EN",
                        code: "en",
                        iso: "en-US",
                        file: "en.json",
                        dir: "ltr",
                    },
                    {
                        name: "AR",
                        code: "ar",
                        iso: "ar-AR",
                        file: "ar.json",
                        dir: "rtl",
                    },
                ],
                lazy: true,
                langDir: "locales/",
                defaultLocale: "ar",
                detectBrowserLanguage: false,
                vueI18nLoader: true,
            },
        ],
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ["vue-toastification"],
    },
    runtimeConfig: {
        public: {
            baseURL: "https://web.sahamksa.com/api/",
            orderURL: "https://web.sahamksa.com/api/website/get_order?order_id=",
        },
    },
    ssr: true,
    spaLoadingTemplate: false,
});

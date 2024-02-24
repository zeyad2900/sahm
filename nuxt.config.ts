// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "nuxt-headlessui",
        "nuxt-headlessui",
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
    plugins: ["~/plugins/i18n.client.ts"],
    css: ["~/assets/css/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});

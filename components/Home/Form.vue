<template>
    <section class="relative bg-[url('/form.png')] bg-cover bg-no-repeat flex items-center justify-center lg:py-0 py-6 min-h-[80vh]">
        <div class="container min-h-[600px] grid grid-cols-2 gap-8 z-[2]">
            <div class="w-full max-w-[442px] flex flex-col justify-center text-white gap-9 col-span-2 lg:col-span-1">
                <h2 class="mainheader !text-white">{{ $t("NAV.contactUs") }}</h2>
                <p class="font-normal text-[16px] leading-7">
                    {{ $t("TITLES.homeformsubtitle") }}
                </p>
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-light rounded-full">
                        <nuxt-icon name="home/phone" filled />
                    </div>
                    <p>+966 8768 978</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-light rounded-full">
                        <nuxt-icon name="home/mail" filled />
                    </div>
                    <p>shamsupport@gmail.com</p>
                </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
                <div class="relative min-h-full">
                    <VeeForm :validation-schema="schema" as="div">
                        <form class="lg:absolute relative min-h-full w-full bg-white lg:top-[-12%] rounded-[24px] lg:p-12 py-20 px-8 flex flex-col gap-3">
                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.name')" type="text" />
                                    <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </vee-field>
                            <VeeField name="phone" v-slot="{ field, meta }">
                                <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                    <GlobaleHeadlessBtn />
                                    <input v-bind="field" :placeholder="$t('INPUTS.phone')" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.email')" type="text" />
                                    <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>
                            <VeeField name="subject" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <textarea v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.subject')" type="text" />
                                    <VeeErrorMessage name="subject" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>
                            <button class="mainbtn ms-auto !px-[31px]">ارسال</button>
                        </form>
                    </VeeForm>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const i18n = useI18n();
import { configure } from "vee-validate";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

const schema = yup.object().shape({
    name: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.name") })),
    phone: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.phone") }))
        .min(9, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone") })),
    email: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.email") }))
        .test("email", i18n.t("ERROR.valid", { name: i18n.t("INPUTS.email") }), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
    subject: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.subject") })),
});
</script>

<style scoped>
</style>

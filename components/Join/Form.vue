<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <VeeForm :validation-schema="schema" as="div">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <VeeField name="jop" v-slot="{ field, meta }">
                                <div class="select-dropdown">
                                    <select v-bind="field" as="select" :class="meta.touched && !meta.valid ? '!border-danger' : ''">
                                        <option value="" selected disabled>{{ $t("INPUTS.jop") }}</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                    <VeeErrorMessage name="jop" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>

                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.name')" type="text" />
                                </div>
                                <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </vee-field>

                            <VeeField name="phone" v-slot="{ field, meta }">
                                <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                    <GlobaleHeadlessBtn />
                                    <input v-bind="field" :placeholder="$t('INPUTS.phone')" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                        </div>
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <div class="grid grid-cols-2 gap-5">
                                <VeeField name="country" v-slot="{ field, meta }">
                                    <div class="select-dropdown">
                                        <select as="select" v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger' : ''">
                                            <option value="" selected disabled>{{ $t("INPUTS.country") }}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                        <VeeErrorMessage name="country" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                    </div>
                                </VeeField>
                                <VeeField name="city" v-slot="{ field, meta }">
                                    <div class="select-dropdown">
                                        <select as="select" v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger' : ''">
                                            <option value="" selected disabled>{{ $t("INPUTS.city") }}</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                        <VeeErrorMessage name="city" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                    </div>
                                </VeeField>
                            </div>

                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.email')" type="text" />
                                </div>
                                <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                            <VeeField name="file" v-slot="{ field, meta }">
                                <div class="maininput relative">
                                    <input type="text" :placeholder="$t('INPUTS.cv')" disabled :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" />
                                    <input class="hidden" id="file" type="file" v-bind="field" />
                                    <label for="file" class="absolute end-5 top-[19px] cursor-pointer">
                                        <nuxt-icon class="text-2xl" name="contact/file" filled />
                                    </label>
                                </div>
                            </VeeField>
                        </div>
                    </div>
                    <VeeField name="message" v-slot="{ field, meta }">
                        <div class="maininput mb-[32px]">
                            <textarea v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.message')" class="!h-[250px]" />
                            <VeeErrorMessage name="message" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                        </div>
                    </VeeField>
                    <button class="mainbtn ms-auto !px-[50px]">{{ $t("TITLES.usertitle") }}</button>
                </form>
            </VeeForm>
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
    email: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.email") }))
        .test("email", i18n.t("ERROR.valid", { name: i18n.t("INPUTS.email") }), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
    phone: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.phone") }))
        .min(9, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone") })),
    message: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.message") })),
    jop: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.jop") })),
    country: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.country") })),
    city: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.city") })),
    file: yup.mixed().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.cv") })),
});
</script>

<style scoped></style>

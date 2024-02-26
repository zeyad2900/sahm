<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <h2 v-if="merchant" class="mainheader mb-[50px]">{{ $t("TITLES.merchantformtitle") }}</h2>
            <h2 v-if="!merchant" class="mainheader mb-[50px]">{{ $t("TITLES.userformtitle") }}</h2>
            <VeeForm :validation-schema="schema" as="div">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <VeeField name="merchantname" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.shopname") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="text" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="merchantname" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField name="phone" v-slot="{ field, meta }">
                                <p class="text-light mb-[17px]">{{ $t("INPUTS.phone") }}</p>
                                <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                    <GlobaleHeadlessBtn />
                                    <input v-bind="field" :placeholder="$t('INPUTS.phone')" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <VeeField name="password" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.password") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="password" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="password" as="span" class="!text-danger" />
                                </div>
                            </VeeField>
                        </div>
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <VeeField name="username" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.name") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="text" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="username" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField v-if="merchant" name="shopphone" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.shopphone") }}</p>
                                    <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                        <GlobaleHeadlessBtn />
                                        <input v-bind="field" type="text" :placeholder="$t('INPUTS.phone')" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="shopphone" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField name="repassword" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.repassword") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="password" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="repassword" as="span" class="!text-danger" />
                                </div>
                            </VeeField>
                        </div>
                    </div>
                    <button class="mainbtn ms-auto !px-[50px]">{{ $t("TITLES.usertitle") }}</button>
                </form>
            </VeeForm>
        </div>
    </section>
</template>

<script setup>
defineProps({
    merchant: {
        required: true,
    },
});
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
    merchantname: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.shopname") })),
    username: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.name") })),
    phone: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.phone") }))
        .min(9, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone") })),
    shopphone: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.shopphone") }))
        .min(9, i18n.t("ERROR.passwordlength", { name: i18n.t("LABELS.shopphone") })),
    password: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.password") }))
        .min(9, i18n.t("ERROR.passwordlength", { name: i18n.t("LABELS.password") })),
    repassword: yup
        .string()
        .required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.repassword") }))
        .oneOf([yup.ref("password")], i18n.t("ERROR.confirmpass")),
});
</script>

<style></style>

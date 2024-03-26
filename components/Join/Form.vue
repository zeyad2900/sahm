<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div" v-slot="{ errors }">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <!-- jop input  -->
                            <VeeField name="jop" v-slot="{ field, meta }">
                                <div class="select-dropdown">
                                    <select v-bind="field" as="select" :class="meta.touched && !meta.valid ? ' !border-danger' : ''">
                                        <option value="" selected disabled>{{ $t("INPUTS.jop") }}</option>
                                        <option v-for="(jop, index) in jops" :key="index" :value="jop?.id">{{ jop.title }}</option>
                                    </select>
                                    <VeeErrorMessage name="jop" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>
                            <!-- name input  -->
                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.name')" type="text" />
                                </div>
                                <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </vee-field>
                            <!-- phone inpu t  -->
                            <div>
                                <div class="countreyinput" :class="errors.phone ? ' !border-danger' : ''">
                                    <GlobalePhoneInput />
                                </div>
                                <VeeErrorMessage name="phone" class="text-danger" as="span" />
                            </div>
                        </div>
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <!-- options -->
                            <div class="grid grid-cols-2 gap-5">
                                <!-- country -->
                                <VeeField name="country" v-slot="{ field, meta }">
                                    <div class="select-dropdown">
                                        <select as="select" v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''">
                                            <option value="" selected disabled>{{ $t("INPUTS.country") }}</option>
                                            <option v-for="(countery, index) in countries" :key="index" :value="countery?.id">{{ countery.name }}</option>
                                        </select>
                                        <VeeErrorMessage name="country" v-if="meta.touched && !meta.valid" class="text-danger text-sm" as="span" />
                                    </div>
                                </VeeField>
                                <!-- city -->
                                <VeeField name="city" v-slot="{ field, meta }">
                                    <div class="select-dropdown">
                                        <select as="select" v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''">
                                            <option value="" selected disabled>{{ $t("INPUTS.city") }}</option>
                                            <option v-for="(city, index) in cities" :key="index" :value="city?.id">{{ city.name }}</option>
                                        </select>
                                        <VeeErrorMessage name="city" v-if="meta.touched && !meta.valid" class="text-danger text-sm" as="span" />
                                    </div>
                                </VeeField>
                            </div>

                            <!-- email -->
                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.email')" type="text" />
                                </div>
                                <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <!-- file input -->
                            <VeeField name="file" type="file" v-slot="{ field, meta }">
                                <div class="maininput relative">
                                    <input type="text" :placeholder="$t('INPUTS.cv')" disabled :class="meta.touched && !meta.valid ? ' !border-danger' : ''" />
                                    <input class="hidden" id="file" type="file" v-bind="field" />
                                    <label for="file" class="absolute end-5 top-[19px] cursor-pointer">
                                        <nuxt-icon class="text-2xl" name="contact/file" filled />
                                    </label>

                                    <VeeErrorMessage name="file" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>
                        </div>
                    </div>
                    <!-- message input -->
                    <VeeField name="message" v-slot="{ field, meta }">
                        <div class="maininput mb-[32px]">
                            <textarea v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.message')" class="!h-[250px]" />
                            <VeeErrorMessage name="message" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                        </div>
                    </VeeField>

                    <button :disabled="buttonLoading" :class="buttonLoading ? '!bg-[#05cc838d]' : '!bg-primary'" class="mainbtn ms-auto !px-[31px]">
                        <span v-if="!buttonLoading">{{ $t("TITLES.usertitle") }}</span>
                        <GlobaleButtonLoader v-if="buttonLoading" />
                    </button>
                </form>
            </VeeForm>
        </div>
    </section>
</template>

<script setup>
const generalStore = useMyGeneralsStore();
const { countries, jops, cities } = storeToRefs(generalStore);

const i18n = useI18n();
import { configure } from "vee-validate";
import { useToast } from "vue-toastification";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

const schema = ref(
    yup.object().shape({
        name: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.name") })),
        email: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.email") }))
            .test("email", i18n.t("ERROR.valid", { name: i18n.t("INPUTS.email") }), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
        phone: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.phone") }))
            .test("phone", (value, ctx) => {
                if (value.length == ctx.parent.phone_code.phone_number_limit) {
                    return true;
                } else {
                    return ctx.createError({
                        message: i18n.t("ERROR.passwordlength", { length: ctx.parent.phone_code.phone_number_limit }),
                        path: "phone",
                    });
                }
            }),
        message: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.message") })),
        jop: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.jop") })),
        country: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.country") })),
        city: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.city") })),
        file: yup.mixed().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.cv") })),
        phone_code: yup.mixed(),
    })
);

const toast = useToast();
const buttonLoading = ref(false);
const baseURL = useRuntimeConfig().public.baseURL;

async function handleSubmit(values, actions) {
    buttonLoading.value = true;
    console.log(values);
    await $fetch(`${baseURL}website/join-to-us`, {
        method: "POST",
        body: {
            job_id: values.jop,
            country_id: values.country,
            city_id: values.city,
            full_name: values.name,
            email: values.email,
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
            content: values.subject,
            cv: values.file,
            content: "value",
        },
        headers: {
            "Accept-Language": i18n.locale.value,
        },
    })
        .then((res) => {
            toast.success(res.message);
            actions.resetForm();
            buttonLoading.value = false;
        })
        .catch((err) => {
            toast.error(err.response._data.message);
            buttonLoading.value = false;
        });
}
</script>

<style scoped></style>

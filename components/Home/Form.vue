<template>
    <section class="relative bg-[url('/form.png')] bg-cover bg-no-repeat flex items-center justify-center lg:py-0 py-20 min-h-[80vh]">
        <div class="container min-h-[600px] grid grid-cols-2 gap-8">
            <div class="w-full max-w-[442px] flex flex-col justify-center text-white gap-9 col-span-2 lg:col-span-1">
                <h2 class="mainheader !text-white">{{ $t("NAV.contactUs") }}</h2>
                <p class="font-normal text-[16px] leading-7">
                    {{ $t("TITLES.homeformsubtitle") }}
                </p>
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-light rounded-full">
                        <nuxt-icon name="home/phone" filled />
                    </div>
                    <p>{{ number.value }}</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-light rounded-full">
                        <nuxt-icon name="home/mail" filled />
                    </div>
                    <p>{{ email.value }}</p>
                </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
                <div class="relative min-h-full">
                    <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div" v-slot="{ errors }">
                        <form class="drop-shadow lg:absolute relative min-h-full w-full bg-white lg:top-[-20%] rounded-[24px] lg:p-12 py-20 px-8 flex flex-col gap-4">
                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.name')" type="text" />
                                    <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </vee-field>
                            <div>
                                <div class="countreyinput" :class="errors.phone ? ' !border-danger' : ''">
                                    <GlobalePhoneInput />
                                </div>
                                <VeeErrorMessage name="phone" class="text-danger" as="span" />
                            </div>
                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.email')" type="text" />
                                    <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>
                            <VeeField name="subject" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <textarea v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.subject')" type="text" />
                                    <VeeErrorMessage name="subject" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                                </div>
                            </VeeField>
                            <button :disabled="buttonLoading" :class="buttonLoading ? '!bg-[#05cc838d]' : '!bg-primary'" class="mainbtn ms-auto !px-[31px]">
                                <span v-if="!buttonLoading">{{ $t("INPUTS.send") }}</span>
                                <GlobaleButtonLoader v-if="buttonLoading" />
                            </button>
                        </form>
                    </VeeForm>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    setting: {
        required: true,
    },
});

const number = props.setting.find((ele) => {
    return ele.key === "phone";
});
const email = props.setting.find((ele) => {
    return ele.key === "email";
});

const generalStore = useMyGeneralsStore();
const { phonelength } = storeToRefs(generalStore);
const i18n = useI18n();
import { useToast } from "vue-toastification";
import { configure } from "vee-validate";
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
        phone: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.phone") }))
            .min(phonelength.value, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone"), length: phonelength.value }))
            .max(phonelength.value, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone"), length: phonelength.value })),
        email: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.email") }))
            .test("email", i18n.t("ERROR.valid", { name: i18n.t("INPUTS.email") }), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
        subject: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.subject") })),
    })
);

watch(phonelength, (newValue, oldValue) => {
    schema.value = yup.object().shape({
        name: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.name") })),
        phone: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.phone") }))
            .min(newValue, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone"), length: newValue }))
            .max(newValue, i18n.t("ERROR.passwordlength", { name: i18n.t("INPUTS.phone"), length: newValue })),
        email: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.email") }))
            .test("email", i18n.t("ERROR.valid", { name: i18n.t("INPUTS.email") }), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
        subject: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.subject") })),
    });
});

const toast = useToast();
const buttonLoading = ref(false);
const baseURL = useRuntimeConfig().public.baseURL;

async function handleSubmit(values, actions) {
    buttonLoading.value = true;
    await $fetch(`${baseURL}contact-us`, {
        method: "POST",
        body: {
            full_name: values.name,
            email: values.email,
            phone_code: values.phone_code,
            phone: values.phone,
            title: values.subject,
            content: values.subject,
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

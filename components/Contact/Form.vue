<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div" v-slot="{ errors }">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.name')" type="text" />
                                </div>
                                <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </vee-field>

                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.email')" type="text" />
                                </div>
                                <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <div class="flex flex-col justify-around h-[200px]">
                                <div class="flex items-center gap-3">
                                    <nuxt-icon class="text-secondary" name="contact/phone" filled />
                                    <p class="text-secondary">{{ phone.value }}</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <nuxt-icon class="text-secondary" name="contact/mail" filled />
                                    <p class="text-secondary">{{ email.value }}</p>
                                </div>
                                <div class="flex justify-start items-center">
                                    <a :href="facebook.value" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Facebook" filled /></a>
                                    <a :href="youtube.value" class="ml-3"><nuxt-icon class="text-3xl" name="footer/YouTube" filled /></a>
                                    <a :href="instagram.value" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Instagram" filled /></a>
                                    <a :href="twitter.value" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Twitter" filled /></a>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <div>
                                <div class="countreyinput" :class="errors.phone ? ' !border-danger' : ''">
                                    <GlobalePhoneInput />
                                </div>
                                <VeeErrorMessage name="phone" class="text-danger" as="span" />
                            </div>

                            <VeeField name="subject" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <textarea v-bind="field" class="!h-[250px]" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" :placeholder="$t('INPUTS.subject')" type="text" />
                                </div>
                                <VeeErrorMessage name="subject" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                        </div>
                    </div>
                    <button :disabled="buttonLoading" :class="buttonLoading ? '!bg-[#05cc838d]' : '!bg-primary'" class="mainbtn ms-auto !px-[31px]">
                        <span v-if="!buttonLoading">{{ $t("INPUTS.send") }}</span>
                        <GlobaleButtonLoader v-if="buttonLoading" />
                    </button>
                </form>
            </VeeForm>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});

const phone = props.items.find((ele) => {
    return ele.key === "phone";
});
const email = props.items.find((ele) => {
    return ele.key === "email";
});
const facebook = props.items.find((ele) => {
    return ele.key === "facebook";
});
const twitter = props.items.find((ele) => {
    return ele.key === "twitter";
});
const youtube = props.items.find((ele) => {
    return ele.key === "youtube";
});
const instagram = props.items.find((ele) => {
    return ele.key === "instagram";
});

const generalStore = useMyGeneralsStore();
const { phonelength } = storeToRefs(generalStore);
import { configure } from "vee-validate";
import * as yup from "yup";
import { useToast } from "vue-toastification";
const i18n = useI18n();

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

<style></style>

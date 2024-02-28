<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.name')" type="text" />
                                </div>
                                <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </vee-field>

                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" :placeholder="$t('INPUTS.email')" type="text" />
                                </div>
                                <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <div class="flex flex-col justify-around h-[200px]">
                                <div class="flex items-center gap-3">
                                    <nuxt-icon class="text-secondary" name="contact/phone" filled />
                                    <p class="text-secondary">+966 8768 978</p>
                                </div>
                                <div class="flex items-center gap-3">
                                    <nuxt-icon class="text-secondary" name="contact/mail" filled />
                                    <p class="text-secondary">shamsupport@gmail.com</p>
                                </div>
                                <div class="flex justify-start items-center">
                                    <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Facebook" filled /></a>
                                    <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/YouTube" filled /></a>
                                    <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Instagram" filled /></a>
                                    <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Twitter" filled /></a>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <VeeField name="phone" v-slot="{ field, meta }">
                                <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                    <GlobaleHeadlessBtn />
                                    <input v-bind="field" :placeholder="$t('INPUTS.phone')" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <VeeField name="subject" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <textarea
                                        v-bind="field"
                                        class="!h-[250px]"
                                        :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''"
                                        :placeholder="$t('INPUTS.subject')"
                                        type="text"
                                    />
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
    phone_code: yup.mixed(),
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
            actions.resetForm()
            buttonLoading.value = false;
        })
        .catch((e) => {
            toast.error(e.message);
            buttonLoading.value = false;
        });
}
</script>

<style></style>

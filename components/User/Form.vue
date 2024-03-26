<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <h2 class="mainheader mb-[50px]">{{ $t("TITLES.userformtitle") }}</h2>
            <VeeForm :validation-schema="schema" as="div" @submit="handleSubmit" v-slot="{ errors }">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">

                            <!-- usetr name input  -->
                            <VeeField name="username" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.name") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" type="text" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="username" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <!-- password input  -->
                            <VeeField name="password" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.password") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" type="password" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="password" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <!-- confirm password  -->
                            <VeeField name="repassword" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.repassword") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" type="password" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="repassword" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                        </div>

                        <div class="space-y-[24px] col-span-2 lg:col-span-1">

                            <!-- email input  -->
                            <VeeField name="email" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("INPUTS.email") }}</p>
                                    <div class="maininput">
                                        <input :class="meta.touched && !meta.valid ? ' !border-danger' : ''" v-bind="field" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="email" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <!-- phone input  -->
                            <div>
                                <p class="text-light mb-[17px]">{{ $t("INPUTS.phone") }}</p>
                                <div class="countreyinput" :class="errors.phone ? ' !border-danger' : ''">
                                    <GlobalePhoneInput />
                                </div>
                                <VeeErrorMessage name="phone" class="text-danger" as="span" />
                            </div>
                        </div>
                    </div>
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
        email: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("INPUTS.email") }))
            .test("email", i18n.t("ERROR.valid", { name: i18n.t("INPUTS.email") }), (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
        username: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.name") })),
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
        password: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.password") }))
            .min(9, i18n.t("ERROR.passwordlength", { name: i18n.t("LABELS.password"), length: "9" })),
        repassword: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.repassword") }))
            .oneOf([yup.ref("password")], i18n.t("ERROR.confirmpass")),
        phone_code: yup.mixed(),
    })
);

const toast = useToast();
const buttonLoading = ref(false);
const baseURL = useRuntimeConfig().public.baseURL;

async function handleSubmit(values, actions) {
    console.log(values);
    buttonLoading.value = true;
    await $fetch(`${baseURL}website/contact-us`, {
        method: "POST",
        body: {
            type: "user",
            full_name: values.username,
            email: values.email,
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
            password: values.password,
            password_confirmation: values.repassword,
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

<style></style>

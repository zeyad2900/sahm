<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <h2 class="mainheader mb-[50px]">{{ $t("TITLES.merchantformtitle") }}</h2>
            <VeeForm :validation-schema="schema" as="div" @submit="handleSubmit" v-slot="{ errors }">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">

                            <!-- shop name input -->
                            <VeeField name="merchantname" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.shopname") }}</p>
                                    <div class="maininput">
                                        <input :class="meta.touched && !meta.valid ? ' !border-danger' : ''" v-bind="field" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="merchantname" as="span" class="!text-danger" />
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
                        </div>
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <!-- user name input -->
                            <VeeField name="username" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">{{ $t("LABELS.name") }}</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? ' !border-danger' : ''" type="text" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="username" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <!-- shop phone input -->
                            <div>
                                <p class="text-light mb-[17px]">{{ $t("LABELS.shopphone") }}</p>
                                <div class="countreyinput" :class="errors.shopphone ? ' !border-danger' : ''">
                                    <GlobalePhoneInput :merchant="true" />
                                </div>
                                <VeeErrorMessage name="shopphone" class="text-danger" as="span" />
                            </div>

                            <!-- confirm password input -->
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
        merchantname: yup.string().required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.shopname") })),
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
        shopphone: yup
            .string()
            .required(i18n.t("ERROR.isRequired", { name: i18n.t("LABELS.shopphone") }))
            .test("shopphone", (value, ctx) => {
                if (value.length == ctx.parent.phone_code.phone_number_limit) {
                    return true;
                } else {
                    return ctx.createError({
                        message: i18n.t("ERROR.passwordlength", { length: ctx.parent.phone_code.phone_number_limit }),
                        path: "shopphone",
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
        phone_code: yup.string().required(),
        shop_phone_code: yup.string().required(),
    })
);

const toast = useToast();
const buttonLoading = ref(false);
const baseURL = useRuntimeConfig().public.baseURL;

async function handleSubmit(values, actions) {
    buttonLoading.value = true;
    await $fetch(`${baseURL}website/contact-us`, {
        method: "POST",
        body: {
            type: "trader",
            full_name: values.username,
            phone_code: values.phone_code.phone_code,
            phone: values.phone,
            password: values.password,
            password_confirmation: values.repassword,
            shop_name: values.merchantname,
            shop_phone_code: values.shop_phone_code.phone_code,
            shop_phone: values.shopphone,
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

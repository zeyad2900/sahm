<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <h2 v-if="merchant" class="mainheader mb-[50px]">مرحبا بك من جديد</h2>
            <h2 v-if="!merchant" class="mainheader mb-[50px]">مرحبا بك</h2>
            <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <VeeField name="merchantname" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">اسم المتجر</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="text" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="merchantname" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField name="phone" v-slot="{ field, meta }">
                                <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                    <GlobaleHeadlessBtn />
                                    <input v-bind="field" placeholder="رقم الجوال" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <VeeField name="password" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">كلمة المرور</p>
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
                                    <p class="text-light mb-[17px]">اسم المستخدم</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="text" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="username" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField v-if="merchant" name="shopphone" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">رقم جوال المتجر</p>
                                    <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                        <GlobaleHeadlessBtn />
                                        <input v-bind="field" type="text" placeholder="رقم الجوال" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="shopphone" as="span" class="!text-danger" />
                                </div>
                            </VeeField>

                            <VeeField name="repassword" v-slot="{ field, meta }">
                                <div>
                                    <p class="text-light mb-[17px]">كلمة المرور</p>
                                    <div class="maininput">
                                        <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" class="" type="password" />
                                    </div>
                                    <VeeErrorMessage v-if="meta.touched && !meta.valid" name="repassword" as="span" class="!text-danger" />
                                </div>
                            </VeeField>
                        </div>
                    </div>
                    <button class="mainbtn ms-auto !px-[50px]">انشاء حساب</button>
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

import { configure } from "vee-validate";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

const schema = yup.object().shape({
    merchantname: yup.string().required("field is required"),
    username: yup.string().required("field is required"),
    phone: yup.string().required().min(9, "phone min less"),
    shopphone: yup.string().required("field is required").min(9, "phone min less"),
    password: yup.string().required("field is required").min(9, "weak password"),
    repassword: yup
        .string()
        .required("field is required")
        .oneOf([yup.ref("password")], "diffrent password"),
});
</script>

<style></style>

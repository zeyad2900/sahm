<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <VeeForm :validation-schema="schema" as="div">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px] col-span-2 lg:col-span-1">
                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الاسم" type="text" />
                                </div>
                                <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </vee-field>

                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الايميل" type="text" />
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
                                    <input v-bind="field" placeholder="رقم الجوال" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <VeeField name="subject" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <textarea v-bind="field" class="!h-[250px]" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الموضوع" type="text" />
                                </div>
                                <VeeErrorMessage name="subject" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
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
import { configure } from "vee-validate";
import * as yup from "yup";

configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true,
    validateOnModelUpdate: true,
});

const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required().min(9, "phone min less"),
    email: yup
        .string()
        .required()
        .test("email", "email required", (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
    subject: yup.string().required(),
});
</script>

<style></style>

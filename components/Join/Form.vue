<template>
    <section class="container py-[42px]">
        <div class="bg-[#F7F8F8] p-10 rounded-[24px]">
            <VeeForm :validation-schema="schema" as="div">
                <form>
                    <div class="grid grid-cols-2 gap-[124px] mb-[50px]">
                        <div class="space-y-[24px]">
                            <VeeField name="jop" v-slot="{ meta }">
                                <div class="select-dropdown">
                                    <select>
                                        <option value="" selected disabled>اختر الوظيفه</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </div>
                                <VeeErrorMessage name="jop" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <vee-field name="name" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الاسم" type="text" />
                                </div>
                                <VeeErrorMessage name="name" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </vee-field>

                            <VeeField name="phone" v-slot="{ field, meta }">
                                <div class="countreyinput" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''">
                                    <GlobaleHeadlessBtn />
                                    <input v-bind="field" placeholder="رقم الجوال" type="text" />
                                </div>
                                <VeeErrorMessage name="phone" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                        </div>
                        <div class="space-y-[24px]">
                            <div class="grid grid-cols-2 gap-5">
                                <div class="select-dropdown">
                                    <select>
                                        <option value="" selected disabled>البلد</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </div>
                                <div class="select-dropdown">
                                    <select>
                                        <option value="" selected disabled>المدينه</option>
                                        <option value="">1</option>
                                        <option value="">2</option>
                                    </select>
                                </div>
                            </div>

                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الايميل" type="text" />
                                </div>
                                <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>

                            <div class="maininput relative">
                                <input type="text" placeholder="السيره الذاتيه" disabled />
                                <input class="hidden" id="file" type="file" />
                                <label for="file" class="absolute end-5 top-[30%] cursor-pointer">
                                    <nuxt-icon class="text-2xl" name="contact/file" filled />
                                </label>
                            </div>
                        </div>
                    </div>
                    <VeeField name="message" v-slot="{ field, meta }">
                        <div class="maininput mb-[32px]">
                            <textarea v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الرساله" class="!h-[250px]" />
                        </div>
                        <VeeErrorMessage name="message" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                    </VeeField>
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
    email: yup
        .string()
        .required()
        .test("email", "email required", (value) => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)),
    phone: yup.string().required().min(9, "phone min less"),
    message: yup.string().required(),
    jop: yup.string().required(),
});
</script>

<style scoped></style>

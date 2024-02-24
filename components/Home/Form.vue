<template>
    <section class="relative bg-[url('/form.png')] bg-cover bg-no-repeat flex items-center justify-center lg:py-0 py-6 min-h-[80vh]">
        <dir class="container min-h-[600px] grid grid-cols-2 gap-8">
            <div class="w-full max-w-[442px] flex flex-col justify-center text-white gap-9 col-span-2 lg:col-span-1">
                <h2 class="mainheader !text-white">تواصل معنا</h2>
                <p class="font-normal text-[16px] leading-7">
                    نحن في انتظار تواصلكم! يرجى عدم التردد في الاتصال بنا عبر قسم التواصل لأي استفسار أو مساعدة تحتاجونها، ففريق خدمة العملاء لدينا مستعد لمساعدتكم بكل اهتمام واحترافي .
                </p>
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-light rounded-full">
                        <nuxt-icon name="home/phone" filled />
                    </div>
                    <p>+966 8768 978</p>
                </div>
                <div class="flex items-center gap-3">
                    <div class="p-2 bg-light rounded-full">
                        <nuxt-icon name="home/mail" filled />
                    </div>
                    <p>shamsupport@gmail.com</p>
                </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
                <div class="relative min-h-full">
                    <VeeForm :validation-schema="schema" @submit="handleSubmit" as="div">
                        <form class="lg:absolute relative min-h-full w-full bg-white lg:top-[-14%] rounded-[24px] lg:p-12 py-20 px-8 flex flex-col gap-5">
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
                            <VeeField name="email" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <input v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الايميل" type="text" />
                                </div>
                                <VeeErrorMessage name="email" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                            <VeeField name="subject" v-slot="{ field, meta }">
                                <div class="maininput">
                                    <textarea v-bind="field" :class="meta.touched && !meta.valid ? '!border-danger !text-danger' : ''" placeholder="الموضوع" type="text" />
                                </div>
                                <VeeErrorMessage name="subject" v-if="meta.touched && !meta.valid" class="text-danger" as="span" />
                            </VeeField>
                            <button class="mainbtn ms-auto !px-[31px]">ارسال</button>
                        </form>
                    </VeeForm>
                </div>
            </div>
        </dir>
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

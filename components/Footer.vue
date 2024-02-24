<template>
    <footer class="mt-auto bg-secondary">
        <div class="container py-24 text-white">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="space-y-9 w-full flex flex-col items-center lg:block">
                    <NuxtLink to="/"><img width="200" src="/footerlogo.png" alt="" /></NuxtLink>
                    <div class="flex justify-start items-center">
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Facebook" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/YouTube" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Instagram" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Twitter" filled /></a>
                    </div>
                </div>

                <div class="w-full flex flex-col items-center lg:block">
                    <h2 class="font-medium leading-7 text-lg mb-5 text-primary">روابط سريعه</h2>
                    <ul>
                        <li class="mb-3">
                            <NuxtLink>سيايه الخصوصيه</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink>الشروط والاحكام</NuxtLink>
                        </li>
                    </ul>
                </div>

                <ul class="w-full flex flex-col items-center lg:block">
                    <li class="mb-3">
                        <NuxtLink to="/" class="font-medium leading-7 text-lg text-primary">الرئيسيه</NuxtLink>
                    </li>
                    <li class="mb-3">
                        <NuxtLink to="/contact">تواصل معنا</NuxtLink>
                    </li>
                    <li class="mb-3">
                        <NuxtLink to="/services">خدماتنا</NuxtLink>
                    </li>
                    <li class="mb-3">
                        <NuxtLink to="/join">انضم الينا</NuxtLink>
                    </li>
                </ul>
                <div class="w-full space-y-5 flex flex-col items-center lg:block">
                    <h2 class="font-medium leading-7 text-lg mb-5 text-primary">تواصل معنا</h2>
                    <p>+966 8768 978</p>
                    <p>shamsupport@gmail.com</p>
                </div>
            </div>
        </div>
        <div class="bg-white py-2 text-text">
            <p class="text-center font-semibold text-[16px]">حقوق النشر © 2024. جميع الحقوق محفوظة</p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>
a:hover {
    @apply text-primary transition-all duration-200;
}
</style>

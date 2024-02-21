<template>
    <footer class="mt-auto bg-b">
        <div class="container py-24 text-white">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="space-y-9">
                    <NuxtLink to="/#main"><img width="200" src="/assets/images/footer/footerlogo.png" alt="" /></NuxtLink>
                    <div class="social flex justify-start items-center">
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Facebook" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/YouTube" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Instagram" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Twitter" filled /></a>
                    </div>
                </div>

                <div>
                    <h2 class="font-medium leading-7 text-lg mb-5 text-main">روابط سريعه</h2>
                    <ul>
                        <li class="mb-3">
                            <NuxtLink>سيايه الخصوصيه</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink>الشروط والاحكام</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="mb-3">
                            <NuxtLink class="font-medium leading-7 text-lg text-main">الرئيسيه</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink>تواصل معنا</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink>خدماتنا</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink>انضم الينا</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-full space-y-5">
                    <h2 class="font-medium leading-7 text-lg mb-5 text-main">تواصل معنا</h2>
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

<style></style>

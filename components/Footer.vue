<template>
    <footer class="mt-auto bg-b">
        <div class="container pt-10 h-[304px] text-white">
            <div class="grid grid-cols-4">
                <div class="space-y-9">
                    <NuxtLink to="/#main"><img width="200" src="/assets/images/footer/footerlogo.png" alt="" /></NuxtLink>
                    <div class="social flex justify-start items-center">
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Facebook" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/YouTube" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Instagram" filled /></a>
                        <a href="" class="ml-3"><nuxt-icon class="text-3xl" name="footer/Twitter" filled /></a>
                    </div>
                </div>
                <div class="w-full lg:w-[30%]">
                    <h2 class="font-medium leading-7 text-lg mb-5">تواصل معنا</h2>
                    <div class="flex items-end gap-2">
                        <a href="">contact@company.com</a>
                    </div>
                    <div class="flex items-end gap-2">
                        <a href="">(414)687-5892</a>
                    </div>
                </div>
                <div>
                    <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("footer.QuickAccess") }}</h2>
                    <ul>
                        <li class="mb-3">
                            <NuxtLink to="/#services">{{ $t("footer.OurServices") }}</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink to="/#services">{{ $t("footer.RequestAservice") }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="font-medium leading-7 text-lg mb-5">{{ $t("footer.AboutOurSite") }}</h2>
                    <ul>
                        <li class="mb-3">
                            <NuxtLink to="/about">{{ $t("footer.aboutuUs") }}</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink to="/contact">{{ $t("footer.contactUs") }}</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink to="/terms">{{ $t("footer.termsCndConditions") }}</NuxtLink>
                        </li>
                        <li class="mb-3">
                            <NuxtLink to="/policy">{{ $t("footer.privacyPolicy") }}</NuxtLink>
                        </li>
                    </ul>
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

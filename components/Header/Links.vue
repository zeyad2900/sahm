<template>
    <ul class="hidden lg:flex items-center justify-center gap-10">
        <NuxtLink to="/contact" class="hover:text-main">الرئيسيه</NuxtLink>
        <NuxtLink class="hover:text-main">تواصل معنا</NuxtLink>
        <NuxtLink class="hover:text-main">الخدمات</NuxtLink>
        <NuxtLink class="hover:text-main">انضم الينا</NuxtLink>
    </ul>
</template>

<script setup></script>

<style scoped>
a {
    display: inline-block;
    padding: 5px 0;
    position: relative;
    transition: all 0.3s ease-in-out;
}

a:before {
    content: "";
    background: #05cc84;
    display: block;
    position: absolute;
    bottom: -3px;
    right: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
}

a:hover::before {
    width: 100%;
}
a.router-link-active::before {
    width: 100%;
}
a.router-link-active {
    color: #05cc84;
}
</style>

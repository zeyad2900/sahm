<template>
    <div class="flex items-center gap-2 xl:gap-7">
        <div class="gap-4 hidden lg:flex">
            <button class="mainbtn">تسجيل كتاجر</button>
            <button class="secondbtn">انشاء حساب</button>
        </div>
        <!-- small icon button -->
        <button class="lg:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]">
            <Icon name="nimbus:menu" class="" />
        </button>
        <!-- lang button -->
        <button @click="changeLang" type="button" class="hidden lg:flex items-center gap-1">
            EN
            <nuxt-icon class="text-[25px] mt-1 p-0" name="header/earth" />
        </button>
    </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};
</script>

<style></style>

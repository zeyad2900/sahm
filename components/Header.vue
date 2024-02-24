<template>
    <header class="absolute top-0 flex items-center justify-center start-0 w-full z-[1000] h-[150px] bg-transparent text-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink to="/">
                <nuxt-icon class="text-[130px]" name="header/logo" filled />
            </NuxtLink>
            <!-- llinks -->
            <ul class="links hidden lg:flex items-center justify-center gap-10">
                <NuxtLink to="/" class="hover:text-primary">الرئيسيه</NuxtLink>
                <NuxtLink to="/contact" class="hover:text-primary">تواصل معنا</NuxtLink>
                <NuxtLink to="/services" class="hover:text-primary">الخدمات</NuxtLink>
                <NuxtLink to="/join" class="hover:text-primary">انضم الينا</NuxtLink>
            </ul>
            <!-- small header -->
            <div v-if="smallHeader" class="w-screen h-screen z-50 top-0 right-0 fixed bg-[#202926e7] flex items-center justify-center">
                <div class="links flex flex-col items-center gap-5 relative w-full">
                    <button
                        @click="
                            () => {
                                smallHeader = false;
                            }
                        "
                        class="absolute top-[-50%] start-[20%]"
                    >
                        <Icon name="ic:baseline-close" class="text-3xl" />
                    </button>
                    <NuxtLink to="/" class="hover:text-primary">الرئيسيه</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-primary">تواصل معنا</NuxtLink>
                    <NuxtLink to="/services" class="hover:text-primary">الخدمات</NuxtLink>
                    <NuxtLink to="/join" class="hover:text-primary">انضم الينا</NuxtLink>
                    <button @click="changeLang" type="button" class="flex items-center gap-1">
                        EN
                        <nuxt-icon class="text-[25px] mt-1 p-0" name="header/earth" />
                    </button>
                </div>
            </div>
            <!-- buttons -->
            <div class="flex items-center gap-2 xl:gap-7">
                <div class="gap-4 hidden lg:flex">
                    <NuxtLink to="/merchant" class="mainbtn">تسجيل كتاجر</NuxtLink>
                    <NuxtLink to="/user" class="secondbtn">انشاء حساب</NuxtLink>
                </div>
                <!-- small header button -->
                <button
                    @click="
                        () => {
                            smallHeader = true;
                        }
                    "
                    class="lg:hidden relative w-11 h-11 flex justify-center items-center rounded-lg bg-[#FFFFFF0D]"
                >
                    <Icon name="nimbus:menu" class="" />
                </button>
                <!-- lang button -->
                <button @click="changeLang" type="button" class="hidden lg:flex items-center gap-1">
                    EN
                    <nuxt-icon class="text-[25px] mt-1 p-0" name="header/earth" />
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
const smallHeader = ref(false);

const { locale, setLocale } = useI18n();
const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en"; // Example toggle between 'en' and 'fr'
    setLocale(newLocale);
};
</script>

<style scoped>
.links a {
    display: inline-block;
    padding: 5px 0;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.links a:before {
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

.links a:hover::before {
    width: 100%;
}
.links a.router-link-active::before {
    width: 100%;
}
.links a.router-link-active {
    color: #05cc84;
}
</style>

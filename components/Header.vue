<template>
    <header class="absolute top-0 flex items-center justify-center start-0 w-full z-[500] h-[150px] bg-transparent text-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink :to="localePath('/')">
                <div class="w-32">
                    <NuxtImg :src="headerLogo.value" placeholder="/logo.png" class="w-full h-full" />
                </div>
            </NuxtLink>
            <!-- llinks -->
            <ul class="links hidden lg:flex items-center justify-center gap-10">
                <NuxtLink :to="localePath('/')" class="hover:text-primary">{{ $t("NAV.home") }}</NuxtLink>
                <NuxtLink :to="localePath('/contact')" class="hover:text-primary">{{ $t("NAV.contactUs") }}</NuxtLink>
                <NuxtLink :to="localePath('/services')" class="hover:text-primary">{{ $t("NAV.services") }}</NuxtLink>
                <NuxtLink :to="localePath('/join')" class="hover:text-primary">{{ $t("NAV.join") }}</NuxtLink>
            </ul>
            <!-- small header -->
            <div v-if="smallHeader" class="w-screen h-screen z-50 top-0 right-0 fixed bg-[#202926e7] flex flex-col items-center justify-center gap-2">
                <div class="links flex flex-col items-center gap-5 relative w-full">
                    <button @click="closeSmallheader" class="absolute top-[-50px] start-[20%]">
                        <Icon name="ic:baseline-close" class="text-3xl" />
                    </button>
                    <NuxtLink :to="localePath('/')" @click="closeSmallheader" class="hover:text-primary">{{ $t("NAV.home") }}</NuxtLink>
                    <NuxtLink :to="localePath('/contact')" @click="closeSmallheader" class="hover:text-primary">{{ $t("NAV.contactUs") }}</NuxtLink>
                    <NuxtLink :to="localePath('/services')" @click="closeSmallheader" class="hover:text-primary">{{ $t("NAV.services") }}</NuxtLink>
                    <NuxtLink :to="localePath('/join')" @click="closeSmallheader" class="hover:text-primary">{{ $t("NAV.join") }}</NuxtLink>
                    <button @click="changeLang" type="button" class="flex items-center gap-1">
                        {{ $t("NAV.lang") }}
                        <nuxt-icon class="text-[25px] mt-1 p-0" name="header/earth" />
                    </button>
                </div>
                <div class="flex flex-col gap-2">
                    <NuxtLink :to="localePath('/merchant')" @click="closeSmallheader" class="mainbtn">{{ $t("NAV.merchant") }}</NuxtLink>
                    <NuxtLink :to="localePath('/user')" @click="closeSmallheader" class="secondbtn">{{ $t("NAV.user") }}</NuxtLink>
                </div>
            </div>
            <!-- buttons -->
            <div class="flex items-center gap-2 xl:gap-7">
                <div class="gap-4 hidden lg:flex">
                    <NuxtLink :to="localePath('/merchant')" class="mainbtn">{{ $t("NAV.merchant") }}</NuxtLink>
                    <NuxtLink :to="localePath('/user')" class="secondbtn">{{ $t("NAV.user") }}</NuxtLink>
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
                <button @click="changeLang" class="hidden lg:flex items-center gap-1">
                    {{ $t("NAV.lang") }}
                    <nuxt-icon class="text-[25px] mt-1 p-0" name="header/earth" />
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});

const headerLogo = props.items.find((ele) => {
    return ele.key === "header_logo";
});

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
const smallHeader = ref(false);

const closeSmallheader = () => {
    smallHeader.value = false;
};

const changeLang = () => {
    const newLocale = locale.value === "en" ? "ar" : "en";
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
    inset-inline-start: 0;
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

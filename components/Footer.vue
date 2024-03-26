<template>
    <footer class="mt-auto bg-secondary">
        <div class="container py-24 text-white">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- social -->
                <div class="space-y-9 w-full flex flex-col items-center lg:block">
                    <NuxtLink :to="localePath('/')"
                        ><div class="w-36">
                            <NuxtImg class="w-full" src="/footerlogo.png" alt="footerlogo" /></div
                    ></NuxtLink>
                    <div class="flex justify-start items-center gap-3">
                        <a :href="facebook.value" class="social"><nuxt-icon class="text-3xl" name="footer/Facebook" filled /></a>
                        <a :href="youtube.value" class="social"><nuxt-icon class="text-3xl" name="footer/YouTube" filled /></a>
                        <a :href="instagram.value" class="social"><nuxt-icon class="text-3xl" name="footer/Instagram" filled /></a>
                        <a :href="twitter.value" class="social"><nuxt-icon class="text-3xl" name="footer/Twitter" filled /></a>
                    </div>
                </div>

                <!-- fast links  -->
                <div class="w-full flex flex-col items-center lg:block text-center lg:text-start">
                    <h2 class="font-medium leading-7 text-lg mb-5 text-primary">
                        {{ $t("FOOTER.fastlink") }}
                    </h2>
                    <ul>
                        <li class="mb-3" v-for="item in arr" :key="item.id">
                            {{ item.title }}
                        </li>
                    </ul>
                </div>

                <!-- links -->
                <ul class="w-full flex flex-col items-center lg:block">
                    <li class="mb-3">
                        <NuxtLink :to="localePath('/')" class="font-medium leading-7 text-lg text-primary">{{ $t("NAV.home") }}</NuxtLink>
                    </li>
                    <li class="mb-3">
                        <NuxtLink :to="localePath('/contact')">{{ $t("NAV.contactUs") }}</NuxtLink>
                    </li>
                    <li class="mb-3">
                        <NuxtLink :to="localePath('/services')">{{ $t("NAV.services") }}</NuxtLink>
                    </li>
                    <li class="mb-3">
                        <NuxtLink :to="localePath('/join')">{{ $t("NAV.join") }}</NuxtLink>
                    </li>
                </ul>

                <!-- contact -->
                <div class="w-full space-y-5 flex flex-col items-center lg:block">
                    <h2 class="font-medium leading-7 text-lg mb-5 text-primary">
                        {{ $t("NAV.contactUs") }}
                    </h2>
                    <p>{{ phone.value }}</p>
                    <p>{{ email.value }}</p>
                </div>
            </div>
        </div>
        <div class="bg-white py-2 text-text">
            <p class="text-center font-semibold text-[16px]">
                {{ $t("FOOTER.smallnav") }}
            </p>
        </div>
    </footer>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});
const phone = props.items.find((ele) => {
    return ele.key === "phone";
});
const email = props.items.find((ele) => {
    return ele.key === "email";
});
const facebook = props.items.find((ele) => {
    return ele.key === "facebook";
});
const twitter = props.items.find((ele) => {
    return ele.key === "twitter";
});
const youtube = props.items.find((ele) => {
    return ele.key === "youtube";
});
const instagram = props.items.find((ele) => {
    return ele.key === "instagram";
});

const { data } = await useApi("pages");
const arr = data?.value?.data.slice(0, 3);

const localePath = useLocalePath();
</script>

<style scoped>
a:hover {
    @apply text-primary transition-all duration-200;
}
</style>

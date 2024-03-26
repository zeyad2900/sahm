<template>
    <section class="home_intro min-h-[90vh]">
        <div class="w-full h-full z-10 absolute">
            <div class="gradiant w-full h-full absolute z-[1000]"></div>
            <NuxtImg class="w-full h-full object-cover" format="webp" :src="items.image_path" alt="homepage" />
        </div>
        <div class="text-white flex flex-col items-center gap-7 w-full max-w-[537px] px-5 lg:px-0 z-10">
            <h1 class="font-extrabold text-3xl md:text-[64px] text-center leading-[70px] animate__animated animate__fadeInLeft">{{ items.title }}</h1>
            <p class="font-semibold mb-10 text-center 2xl:text-[17px] animate__animated animate__fadeInRight">{{ items?.desc }}</p>
            <form @submit.prevent="openOrder" class="flex gap-2 w-full h-[59px]">
                <input required v-model="id" class="rounded-md w-full px-3 text-text focus:outline-none text-[12px] placeholder:text-tan" :placeholder="$t('TITLES.searchholder')" type="search" />
                <button class="mainbtn !rounded-md !px-6 font-semibold">{{ $t("TITLES.searchbtn") }}</button>
            </form>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});
const id = ref(null);
const localePath = useLocalePath();
const router = useRouter();

function openOrder() {
    router.push(localePath(`/order/${id.value}`));
}
</script>

<style lang="scss">
.home_intro {
    @apply relative flex items-center justify-center;
}
.gradiant {
    background: rgb(17, 58, 68);
    background: linear-gradient(180deg, rgba(17, 58, 68, 0.88) 0%, rgba(21, 72, 85, 0.53) 90%, rgba(21, 72, 85, 0.35) 100%);
}
</style>

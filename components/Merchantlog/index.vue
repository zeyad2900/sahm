<template>
    <section class="home_intro min-h-[85vh] bg-[url('/merchant.png')]">
        <div class="text-white flex flex-col items-center gap-7 w-[537px] px-5 mt-32 lg:px-0">
            <h1 class="font-semibold text-3xl md:text-[50px]">{{ title }}</h1>
            <p class="font-medium text-[15px] mb-10 text-center">{{ subTitle }}</p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        required: true,
    },
    subTitle: {
        required: true,
    },
});
</script>

<style></style>

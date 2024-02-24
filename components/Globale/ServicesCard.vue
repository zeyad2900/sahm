<template>
    <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
        <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" :name="`home/${img}`" />
        <div class="p-6 rounded-full bg-stroke mb-6">
            <nuxt-icon class="text-4xl" :name="`home/${img}`" filled />
        </div>
        <div class="flex flex-col items-center gap-2">
            <h3 class="font-semibold text-text text-[24px] text-center">{{ title }}</h3>
            <p class="font-medium text-[14px] text-light text-center leading-6 z-50">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    img: {
        required: true,
    },
    title: {
        required: true,
    },
    subtitle: {
        required: true,
    },
});
</script>

<style></style>

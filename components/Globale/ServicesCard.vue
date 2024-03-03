<template>
    <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-[#EEEFF3] cursor-pointer">
        <NuxtImg format="webp" placeholder="/box.png" class="icon absolute end-[-200px] top-[100px] w-36" :src="img" />
        <div class="p-[24px] rounded-full bg-stroke mb-6 z-50">
            <NuxtImg format="webp" class="w-[37px] h-full" :src="img" placeholder="/box.png" />
        </div>
        <div class="flex flex-col items-center gap-2">
            <h3 class="font-semibold text-text text-[24px] text-center z-50">{{ title }}</h3>
            <p class="font-medium text-[14px] text-light text-center leading-6 z-50">{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        required: true,
    },
    desc: {
        required: true,
    },
    img: {
        required: true,
    },
});
</script>

<style csoped>
.card {
    transition: all 1.5s;
}
.card:hover {
    background-color: #05cc84;
}
.card:hover .icon {
    inset-inline-end: 20px;
    transition: all 1.5s;
}
.card:hover p,
.card:hover h3 {
    color: white;
}
</style>

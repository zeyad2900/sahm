<template>
    <a :href="whatsApp.value" id="animatedElement" class="z-30 fixed bottom-[60px] end-[35px]">
        <nuxt-icon class="text-6xl" name="home/whatsapp" filled />
    </a>
</template>

<script setup>
const props = defineProps({
    items: {
        required: true,
    },
});
const whatsApp = props.items.find((ele) => {
    return ele.key === "whatsapp";
});
</script>

<style>
#animatedElement {
    animation: moveUpDown 4s ease-in-out infinite;
}
#animatedElement:hover {
    animation-play-state: paused;
}
@keyframes moveUpDown {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}
</style>

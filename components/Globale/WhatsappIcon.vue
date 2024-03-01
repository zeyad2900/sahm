<template>
    <a :href="whatsApp.value" class="z-[2000] fixed bottom-[60px] end-[35px]">
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

<style></style>

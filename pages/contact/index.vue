<template>
    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <GlobaleLoader />
    </div>
    <div v-if="data">
        <Contact />
        <ContactForm :items="data?.data" />
    </div>
</template>

<script setup>
const { data , pending } = await useApi("settings");
</script>

<style></style>

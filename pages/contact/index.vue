<template>
    <Contact />
    <ContactForm :items="data?.data" />
</template>

<script setup>
const { data } = await useApi("settings");
</script>

<style></style>

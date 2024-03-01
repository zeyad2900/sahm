<template>
    <div v-if="error">{{ error }}</div>

    <div v-if="pending" class="w-screen relative flex items-center justify-center pt-28 pb-12 h-screen z-[1000]">
        <GlobaleLoader />
    </div>
    <div v-else-if="data">
        <HomeHeader :items="data?.data?.slider"/>
        <HomeServices :home="true" />
        <HomeForm :setting="data?.data?.setting" />
    </div>
</template>

<script setup>
const { data, pending, error } = await useApi("home");
</script>

<style scoped></style>

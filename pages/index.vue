<template>
    <div v-if="error">{{ error }}</div>

    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <GlobaleLoader />
    </div>
    <div v-if="data">
        <HomeHeader :items="data?.data?.slider" />
        <HomeServices :home="true" />
        <HomeForm :setting="data?.data?.setting" />
    </div>
</template>

<script setup>
const { data, pending, error } = await useApi("home");
</script>

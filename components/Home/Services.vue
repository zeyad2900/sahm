<template>
    <section class="container py-[48px]">
        <div v-if="home" class="text-center font-semibold text-[40px] mb-6">{{ $t("NAV.services") }}</div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <GlobaleServicesCard v-for="(item, index) in data?.data" :key="index" :title="item?.title" :desc="item?.desc" :img="item?.image_path" />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    home: {
        required: true,
    },
});
const { data } = await useApi("services");
</script>

<style></style>

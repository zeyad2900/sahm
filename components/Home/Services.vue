<template>
    <section class="container py-[48px]">
        <div v-if="home" class="text-center font-semibold text-[40px] mb-6">{{ $t("NAV.services") }}</div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <GlobaleServicesCard v-for="service in services" :key="service.id" :title="service.title" :subtitle="service.subtitle" :img="service.img" />
        </div>
    </section>
</template>

<script setup>
defineProps({
    home: {
        required: true,
    },
});
const i18n = useI18n();
const services = ref([
    {
        id: 1,
        title: i18n.t("SERVICES.bay"),
        subtitle: i18n.t("SERVICES.baysubtitle"),
        img: "bay",
    },
    {
        id: 2,
        title: i18n.t("SERVICES.box"),
        subtitle: i18n.t("SERVICES.boxsubtitle"),
        img: "box",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.fast"),
        subtitle: i18n.t("SERVICES.fastsubtitle"),
        img: "car",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.shild"),
        subtitle: i18n.t("SERVICES.shildsubtitle"),
        img: "shild",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.follow"),
        subtitle: i18n.t("SERVICES.followsubtitle"),
        img: "follow",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.cover"),
        subtitle: i18n.t("SERVICES.coversubtitle"),
        img: "cover",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.location"),
        subtitle: i18n.t("SERVICES.locationsubtitle"),
        img: "location",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.callcenter"),
        subtitle: i18n.t("SERVICES.callcentersubtitle"),
        img: "call",
    },
    {
        id: 1,
        title: i18n.t("SERVICES.rebay"),
        subtitle: i18n.t("SERVICES.rebaysubtitle"),
        img: "rebay",
    },
]);
</script>

<style lang="scss">
.card {
    transition: all 1s;
}
.card:hover {
    background-color: #05cc84;
}
.card:hover .icon {
    inset-inline-end: -70px;
    transition: all 1s;
}
.card:hover p,
.card:hover h3 {
    color: white;
}
</style>

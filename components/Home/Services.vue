<template>
    <section class="container py-[48px]">
        <div v-if="home" class="text-center font-semibold text-[40px] mb-6">الخدمات</div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

const services = ref([
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "bay",
    },
    {
        id: 2,
        title: "التخزين",
        subtitle: "تأمين المواد والسلع بطريقة تضمن سهولة الوصول إليها والحفاظ على جودتها.",
        img: "box",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "car",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "shild",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "follow",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "cover",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "location",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
        img: "call",
    },
    {
        id: 1,
        title: "الدفع عند الاستلام",
        subtitle: "نوفر للعملاء راحة إضافية عند إتمام عمليه الشراء عبر الإنترنت",
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
    inset-inline-end: -100px;
    transition: all 1s;
}
.card:hover p,
.card:hover h3 {
    color: white;
}
</style>

<template>
    <div v-if="pending" class="fixed bg-white z-[500] h-screen w-screen top-0 left-0 flex items-center justify-center pt-28 pb-12">
        <GlobaleLoader />
    </div>
    <div v-else-if="data" class="container relative min-h-[100vh] pt-[200px] drop-shadow">
        <div class="flex flex-col space-y-14 p-10 rounded-2xl shadow-lg">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <h3 class="text-light">{{ $t("TITLES.delivery number") }}:</h3>
                    <p class="text-lg text-text font-bold">{{ data[0]?.OrderId }}</p>
                </div>
                <p class="text-primary font-bold text-lg">
                    {{ locale == "en" ? data[0]?.OrderStatus_En : data[0]?.OrderStatus_Ar }}
                </p>
            </div>
            <div class="flex flex-col items-start justify-between md:flex-row md:items-center">
                <div class="flex flex-col items-start gap-3">
                    <div class="flex gap-2 items-center">
                        <div class="p-1 rounded-full bg-stroke">
                            <img width="25" height="20" class="" src="/document.png" alt="" />
                        </div>
                        <p class="text-light">{{ $t("TITLES.comments") }}</p>
                    </div>
                    <p class="text-text font-bold text-lg">{{ locale == "en" ? data[0]?.CollectionType_En : data[0]?.CollectionType_Ar }}</p>
                </div>
                <div class="flex flex-col items-start gap-3">
                    <div class="flex gap-2 items-center">
                        <div class="p-1 rounded-full bg-stroke">
                            <img width="25" height="20" class="" src="/location.png" alt="" />
                        </div>
                        <p class="text-light">{{ $t("TITLES.locationsm") }}</p>
                    </div>
                    <p class="text-text font-bold text-lg">{{ locale == "en" ? data[0]?.PickupCountryName_En : data[0]?.PickupCountryName_Ar }}</p>
                </div>
                <div class="flex flex-col items-start gap-3">
                    <div class="flex gap-2 items-center">
                        <div class="p-1 rounded-full bg-stroke">
                            <img width="25" height="20" class="" src="/location.png" alt="" />
                        </div>
                        <p class="text-light">{{ $t("TITLES.date") }}</p>
                    </div>
                    <p class="text-text font-bold text-lg">{{ data[0]?.AgentConfirmationDate.split("T")[0].split("-").join("/") }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="container relative min-h-[100vh] pt-[200px] drop-shadow">
        <h3 class="w-full text-center text-xl font-bold">{{ locale == "en" ? "No orders to show" : "لا توجد طلبت لعرضها" }}</h3>
    </div>
</template>

<script setup>
const { locale } = useI18n();
const data = ref([]);
const pending = ref(false);
const route = useRoute();
const config = useRuntimeConfig();
useAsyncData("fetchOrder", () => {
    pending.value = true;
    $fetch(`${config.public.orderURL}${route.params.id}`).then((res) => {
        data.value = res.data;
        pending.value = false;
    });
});
</script>

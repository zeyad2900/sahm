<template>
    <Html :lang="locale">
        <Body :dir="locale === 'en' ? 'ltr' : 'rtl'">
            <Header :items="data?.data" />
            <GlobaleWhatsappIcon :items="data?.data" />
            <slot />
            <Footer :items="data?.data" />
        </Body>
    </Html>
</template>

<script setup>
const generalStore = useMyGeneralsStore();
generalStore.fetchcountries();
generalStore.fetchcities();
generalStore.fetchjops();

const { locale } = useI18n();
const { data } = await useApi("settings");
</script>

<style></style>

<template>
    <Html :lang="locale">
        <Body :dir="locale === 'en' ? 'ltr' : 'rtl'">
            <Header/>
            <slot />
            <Footer :items="data?.data?.setting" />
        </Body>
    </Html>
</template>

<script setup>
const { locale } = useI18n();
const { data , pending} = await useApi("home");
</script>

<style></style>

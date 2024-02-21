<template>
    <header class="absolute top-0 flex items-center justify-center start-0 w-full z-[1000] h-[150px] bg-transparent text-white">
        <div class="container flex items-center justify-between">
            <!-- logo -->
            <NuxtLink to="/">
                <nuxt-icon class="text-[130px]" name="header/logo" filled />
            </NuxtLink>
            <!-- llinks -->
            <HeaderLinks />
            <!-- buttons -->
            <HeaderButtons />
        </div>
    </header>
</template>

<script setup></script>

<style></style>

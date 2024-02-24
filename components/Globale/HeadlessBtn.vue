<template>
    <HeadlessMenu as="div" class="relative w-[100px] flex">
        <HeadlessMenuButton>
            <div class="gap-1 items-center flex w-fit justify-center bg-white text-sm font-medium border-e-2 border-[#F7F8F8] text-text">
                <nuxt-icon class="text-2xl" name="home/saudi" filled />
                <p>+966</p>
                <Icon name="flowbite:angle-down-outline" size="20"></Icon>
            </div>
        </HeadlessMenuButton>

        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <HeadlessMenuItems class="absolute right-0 top-full w-full rounded-2xl">
                <HeadlessMenuItem v-slot="{ active }">
                    <button type="button" :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md text-sm']">
                        <div class="px-1 py-4 gap-1 items-center flex w-full justify-center rounded-md bg-white text-sm font-medium text-text">
                            <img src="" alt="" />
                            <p>+966</p>
                        </div>
                    </button>
                </HeadlessMenuItem>
            </HeadlessMenuItems>
        </transition>
                 </HeadlessMenu
    >
</template>

<script lang="ts" setup></script>

<style></style>

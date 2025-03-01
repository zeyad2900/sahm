<template>
    <!-- headless input -->
    <VeeField type="text" :name="merchant ? 'phone_code' : 'shop_phone_code'">
        <ClientOnly>
            <HeadlessMenu as="div" class="relative mx-2">
                <div class="h-full flex items-stretch">
                    <HeadlessMenuButton v-slot="{ open }">
                        <div class="gap-1 items-center flex w-fit justify-center bg-white text-sm font-medium border-e-2 border-[#F7F8F8] text-text">
                            <img :src="country?.flag?.media" class="w-3 h-3" alt="flag" />
                            <p>+{{ country.phone_code }}</p>
                            <Icon :name="`flowbite:angle-${open ? 'up' : 'down'}-outline`" size="25" />
                        </div>
                    </HeadlessMenuButton>
                </div>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <HeadlessMenuItems as="div" class="absolute right-0 top-full w-full rounded-2xl">
                        <HeadlessMenuItem v-for="(item, index) in countries" :key="index" as="div" v-slot="{ active }">
                            <button @click="changeCountry(item)" type="button" :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md text-sm']">
                                <div class="px-1 py-4 gap-1 items-center flex w-full justify-center rounded-md bg-white text-sm font-medium text-text">
                                    <img :src="item?.flag?.media" class="w-3 h-3" />
                                    <p>+{{ item.phone_code }}</p>
                                </div>
                            </button>
                        </HeadlessMenuItem>
                    </HeadlessMenuItems>
                </transition>
            </HeadlessMenu>
        </ClientOnly>
    </VeeField>

    <!-- phone input -->
    <VeeField :name="merchant ? 'shopphone' : 'phone'" v-slot="{ field }">
        <input v-bind="field" :placeholder="$t('INPUTS.phone')" type="text" />
    </VeeField>
</template>

<script setup>
const props = defineProps({
    merchant: {
        requires: false,
    },
});

const generalStore = useMyGeneralsStore();
const { countries } = storeToRefs(generalStore);

const country = ref(null);
country.value = countries.value[0];

import { useField } from "vee-validate";

const phoneCodeField = useField("phone_code");
const shopPhoneCodeField = useField("shop_phone_code");

phoneCodeField.setValue(country.value);
shopPhoneCodeField.setValue(country.value);

function changeCountry(item) {
    country.value = item;
    if (props.merchant === true) {
        shopPhoneCodeField.setValue(item);
    } else {
        phoneCodeField.setValue(item);
    }
}
</script>

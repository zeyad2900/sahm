<template>
    <section class="home_intro min-h-[85vh]">
        <div class="w-full h-full z-10 absolute">
            <div class="gradiant w-full h-full absolute"></div>
            <NuxtImg class="w-full h-full object-cover" format="webp" src="/contact.webp" alt="contact" />
        </div>

        <div class="text-white flex flex-col items-center gap-7 w-[537px] px-5 mt-32 lg:px-0 z-10">
            <h1 class="font-semibold text-3xl md:text-[50px] animate__animated animate__fadeInLeft">{{ $t("NAV.contactUs") }}</h1>
            <p class="font-medium text-[15px] mb-10 text-center animate__animated animate__fadeInRight">{{ $t("TITLES.contactsubtitle") }}</p>
        </div>
    </section>
</template>

<template>
    <section class="mainheader relative bg-[url('/assets/images/home/main.png')] bg-cover bg-no-repeat flex items-center justify-center">
        <div class="text-white flex flex-col items-center gap-7 w-[537px] px-5 lg:px-0">
            <h1 class="font-extrabold text-3xl md:text-[64px]">تتبع شحنتك الان!</h1>
            <p class="font-semibold text-[16px] mb-10">أدخل رقم التتبع الخاص بالشحنة لتتبع طلبك</p>
            <form class="flex gap-2 w-full">
                <input class="rounded-md w-full px-3 text-text focus:outline-none placeholder:text-tan" placeholder="أدخل رقم تتبع شحنتك" type="search" />
                <button class="mainbtn !rounded-md !px-6">تحقق</button>
            </form>
        </div>
        <button>
            <nuxt-icon class="fixed text-6xl bottom-[60px] end-[35px]" name="home/whatsapp" filled />
        </button>
    </section>
</template>

<script setup></script>

<style scoped>
.mainheader {
    height: calc(100vh - 100px);
}
</style>

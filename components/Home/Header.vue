<template>
    <section class="home_intro bg-[url('/main.png')] min-h-[90vh]">
        <div class="text-white flex flex-col items-center gap-7 w-full max-w-[537px] px-5 lg:px-0">
            <h1 class="font-extrabold text-3xl md:text-[64px]">تتبع شحنتك الان!</h1>
            <p class="font-semibold mb-10">أدخل رقم التتبع الخاص بالشحنة لتتبع طلبك</p>
            <form class="flex gap-2 w-full h-[59px]">
                <input class="rounded-md w-full px-3 text-text focus:outline-none text-[12px] placeholder:text-tan" placeholder="أدخل رقم تتبع شحنتك" type="search" />
                <button class="mainbtn !rounded-md !px-6 font-semibold">تحقق</button>
            </form>
        </div>
        <button>
            <nuxt-icon class="fixed text-6xl bottom-[60px] end-[35px] z-10" name="home/whatsapp" filled />
        </button>
    </section>
</template>

<script setup></script>

<style lang="scss">
.home_intro {
    @apply relative bg-cover bg-no-repeat flex items-center justify-center;
}
</style>

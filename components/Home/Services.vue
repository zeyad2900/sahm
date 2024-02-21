<template>
    <section class="container pt-[48px]">
        <div class="text-center font-semibold text-[40px] mb-6">الخدمات</div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/bay" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/bay" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">الدفع عند الاستلام</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">نوفر للعملاء راحة إضافية عند إتمام عمليات الشراء عبر الإنترنت</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/box" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/box" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">التخزين</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">تأمين المواد والسلع بطريقة تضمن سهولة الوصول إليها والحفاظ على جودتها.</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/car" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/car" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">التوصيل السريع</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">تحسين عمليات الشحن والتوزيع لتقديم الطلبات بشكل سريع وفي أقصر وقت ممكن</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/shild" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/shild" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">التامين على الشحنات</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">نقديم حماية للعمليات اللوجستية من المخاطر المحتملة، مثل الفقد أو التلف أثناء النقل.</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/follow" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/follow" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">تتبع الشحنات</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">نهدف إلى توفير رؤية شاملة حول موقع وحالة الشحنة خلال عملية النقل</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/cover" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/cover" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">التغليف</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">تصميم التغليف بطريقة تقلل من خطر التلف أو الكسر خلال عمليات النقل</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/location" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/location" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">الشحن لجميع مناطق المملكة</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">تغطي هذه الخدمة جميع المناطق الجغرافية في المملكة، بدءًا من المدن الكبيرة إلى المناطق النائية</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/call" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/call" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">خدمة العملاء على مدار الساعة</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">توفر الدعم والمساعدة المستمرة للعملاء على مدار الساعة، مما يضمن تلبية احتياجاتهم</p>
                </div>
            </div>
            <div class="card relative rounded-[16px] flex flex-col items-center py-[56px] px-[75px] border overflow-hidden border-stroke cursor-pointer">
                <nuxt-icon class="icon text-[#14CF8B] text-[200px] absolute end-[-200px]" name="home/rebay" />
                <div class="p-6 rounded-full bg-stroke mb-6">
                    <nuxt-icon class="text-4xl" name="home/rebay" filled />
                </div>
                <div class="flex flex-col items-center gap-2">
                    <h3 class="font-semibold text-text text-[24px] text-center">الشحنات المرتجعة</h3>
                    <p class="font-medium text-[14px] text-light text-center leading-6 z-50">تشير إلى المنتجات أو البضائع التي تم إرجاعها إلى البائع أو موفر الخدمة بعد تسليمها إلى العميل</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style>
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

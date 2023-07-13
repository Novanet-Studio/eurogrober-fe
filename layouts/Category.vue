<script setup lang="ts">
const isProductDetail = ref(false);

provide("isProductDetail", isProductDetail);
</script>

<template>
  <ClientOnly class="relative scroll-smooth">
    <AppNavigation />
    <div>
      <section
        class="relative table w-full mt-20 lg:py-24 bg-[#D9D9D9] dark:bg-slate-800"
      >
        <div class="container relative">
          <div class="relative py-2">
            <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block">
              <li
                class="inline text-[12px] text-color-4 duration-500 ease-in-out hover:text-color-4"
              >
                <a href="index-shop.html">Home</a>
              </li>
              <li class="inline pl-1 text-color-4">/</li>
              <li
                class="inline text-[12px] font-extrabold text-color-4"
                aria-current="page"
              >
                Cart
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div
        class="shadow-md dark:shadow-gray-800 overflow-hidden m-6 grid md:grid-cols-2"
      >
        <div class="lg:flex p-6 lg:p-0 relative rounded-md">
          <div class="pt-1 lg:p-6 text-center lg:text-start space-y-4">
            <h3 class="text-xl text-color-1 font-extrabold">
              Lorem, ipsum dolor.
            </h3>

            <div>
              <span class="text-color-4 block mb-1 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum laborum qui, tempora odio voluptatum.
              </span>
            </div>
          </div>
        </div>
        <div class="relative">
          <img class="h-42" src="/images/shop/bg.jpg" alt="" />
        </div>
      </div>

      <div class="container relative mt-16 md:mt-8">
        <HeaderTitle
          title="Products"
          subtitle="Kitchen hardware and accessories"
          v-if="!isProductDetail"
        />

        <ProductCategoryList />
      </div>
    </div>
    <slot />
    <AppFooter />
    <Switcher />
    <BackTop />
  </ClientOnly>
</template>

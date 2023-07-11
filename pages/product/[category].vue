<script setup lang="ts"></script>

<template>
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
              <a href="index-shop.html">Techwind</a>
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

    <div class="shadow-md dark:shadow-gray-800 overflow-hidden m-6">
      <div class="lg:flex p-6 lg:p-0 relative rounded-md">
        <div class="pt-1 lg:p-6 text-center lg:text-start space-y-4">
          <h3 class="text-xl text-color-1 font-extrabold">
            Lorem, ipsum dolor.
          </h3>

          <div>
            <span class="text-color-4 block mb-1 text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
              laborum qui, tempora odio voluptatum.
            </span>
          </div>
        </div>
      </div>
      <div class="relative">
        <img class="h-42" src="/images/shop/bg.jpg" alt="" />
      </div>
    </div>

    <div class="container relative mt-16">
      <HeaderTitle
        title="Products"
        subtitle="Kitchen hardware and accessories"
      />

      <ProductCategoryList />

      <div
        class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-8 gap-[30px]"
      >
        <NuxtLink to="/product/soft-close-hinges">
          <div class="group relative">
            <div
              class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500"
            >
              <img src="/images/shop/items/s1.jpg" alt="" />

              <div
                class="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 transition-all duration-500"
              >
                <a
                  href="shop-cart.html"
                  class="btn bg-slate-900 border-slate-900 text-white w-full rounded-md"
                  >Add to Cart</a
                >
              </div>
            </div>

            <div
              class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm"
            >
              <a
                href="shop-item-detail.html"
                class="hover:text-indigo-600 text-xs font-semibold"
                >Branded T-Shirt</a
              >
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

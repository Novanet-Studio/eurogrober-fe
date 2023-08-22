<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/element/css/navigation';
import 'swiper/element/css/autoplay';
import 'swiper/element/css/pagination';

const sliders = [
  {
    title: "Kitchen hardware at hand!",
    description: "We are committed to selling quality and luxury products for kitchens.",
    image: "/images/design/banner.jpg",
  },
  {
    title: "Functional and luxury accessories for kitchens.",
    description: "We have a wide variety of products and high stocks at the best prices.",
    image: "/images/design/banner.jpg",
  },

];
</script>

<template>
  <section class="relative mt-24">
    <div class="container-fluid relative">
      <swiper-container :slides-per-view="1" pagination :breakpoints="{
        '840': {
          slidesPerView: 1,
        },
        '1366': {
          slidesPerView: 1,
        },
      }" autoplay="true" loop="true" navigation="true" :modules="[Autoplay, Navigation, Pagination]">
        <swiper-slide>
          <div class="relative py-48 table w-full shadow-md overflow-hidden">
            <div
              class="absolute -inset-2 bg-[url('/images/design/eurogrober-kitchen-white.webp')] bg-no-repeat md:bg-left bg-center bg-cover">
            </div>
            <div class="absolute inset-0 bg-slate-950/30"></div>
            <div class="container relative">
              <div class="grid grid-cols-1 mb-12">
                <div class="text-center md:text-start">
                  <h1 class="font-extrabold text-color-1 mb-2 text-2xl md:text-3xl lg:text-5xl lg:leading-normal">
                    Kitchen hardware at hand!
                  </h1>
                  <p
                    class="text-color-5 text-lg max-w-xl text-center md:text-start md:text-xl md:max-w-sm lg:text-3xl lg:max-w-lg">
                    We are committed to selling quality and luxury products for kitchens.
                  </p>
                  <div class="mt-6 md:mt-2">
                    <a href="#products"
                      class="btn bg-color-1 text-white rounded-full me-2 mt-2 cursor-pointer hover:bg-red-800 border-color-1 hover:border-red-800">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="relative py-48 table w-full shadow-md overflow-hidden">
            <div
              class="absolute -inset-2 bg-[url('/images/design/eurogrober-kitchen-brown-white.webp')] bg-no-repeat md:bg-left bg-center bg-cover">
            </div>
            <div class="absolute inset-0 bg-slate-950/30"></div>
            <div class="container relative">
              <div class="grid grid-cols-1 mb-12">
                <div class="text-center md:text-start">
                  <h1 class="font-extrabold text-color-1 mb-2 text-2xl md:text-3xl lg:text-5xl lg:leading-normal">
                    Functional and luxury accessories for kitchens.
                  </h1>
                  <p
                    class="text-color-5 text-lg max-w-xl text-center md:text-start md:text-xl md:max-w-sm lg:text-3xl lg:max-w-lg">
                    We have a wide variety of products and high stocks at the best prices.
                  </p>
                  <div class="mt-6 md:mt-2">
                    <a href="#products"
                      class="btn bg-color-1 text-white rounded-full me-2 mt-2 cursor-pointer hover:bg-red-800 border-color-1 hover:border-red-800">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </section>
</template>

<style>
:root {
  --swiper-navigation-color: #e92946;
  --swiper-pagination-color: #e92946;
}

swiper-container::part(button-prev),
swiper-container::part(button-next) {
  --swiper-navigation-size: 2rem;
}
</style>

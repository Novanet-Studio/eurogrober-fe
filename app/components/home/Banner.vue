<script setup lang="ts">
import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

register();

const sliders = [
  {
    title: "Kitchen hardware at hand!",
    description:
      "We are committed to selling quality and luxury products for kitchens.",
    image: "/images/design/eurogrober-kitchen-white.webp",
    link: "#products",
  },
  {
    title: "Functional and luxury accessories for kitchens.",
    description:
      "We have a wide variety of products and high stocks at the best prices.",
    image: "/images/design/eurogrober-kitchen-brown-white.webp",
    link: "#products",
  },
];
</script>

<template>
  <section class="relative mt-24">
    <ClientOnly>
      <div class="container-fluid relative group">
        <swiper-container slides-per-view="1" navigation="true" pagination="false" loop="true" autoplay-delay="25000"
          speed="2000" class="h-auto w-full">
          <swiper-slide v-for="(slide, index) in sliders" :key="index">
            <div class="relative py-48 table w-full shadow-md overflow-hidden min-h-[600px]">
              <div class="absolute -inset-2 bg-no-repeat md:bg-left bg-center bg-cover"
                :style="{ backgroundImage: `url('${slide.image}')` }"></div>

              <div class="absolute inset-0 bg-slate-950/30"></div>

              <div class="container relative z-10 h-full flex items-center">
                <div class="grid grid-cols-1 mb-12 w-full">
                  <div class="text-center md:text-start">
                    <h1
                      class="font-extrabold text-color-1 mb-2 text-2xl md:text-3xl lg:text-5xl lg:leading-normal drop-shadow-md">
                      {{ slide.title }}
                    </h1>
                    <p
                      class="text-color-5 text-lg max-w-xl text-center md:text-start md:text-xl md:max-w-sm lg:text-3xl lg:max-w-lg drop-shadow-sm">
                      {{ slide.description }}
                    </p>
                    <div class="mt-6 md:mt-4">
                      <a :href="slide.link"
                        class="inline-block bg-color-1 text-white px-6 py-3 rounded-full font-bold border border-color-1 hover:border-red-800 hover:bg-red-800 transition-colors">
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
    </ClientOnly>
  </section>
</template>

<style scoped>
swiper-container {
  --swiper-navigation-color: #d1d3d4;
  --swiper-pagination-color: #d1d3d4;
  --swiper-navigation-size: 25px;
}

swiper-container::part(button-prev),
swiper-container::part(button-next) {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

swiper-container::part(button-prev) {
  left: 20px;
}

swiper-container::part(button-next) {
  right: 20px;
}
</style>

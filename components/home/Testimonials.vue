<script setup lang="ts">
const testimonials = [
  {
    text: "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
    reference: "Thomas Israel",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    reference: "Thomas Lorem",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur.",
    reference: "Thomas Lorem 2",
  },
];
</script>

<template>
  <section class="relative md:py-24 py-16">
    <div class="container relative">
      <header-title title="Testimonials" subtitle="what they think of us" />

      <div class="grid relative grid-cols-1 mt-8">
        <div class="tiny-two-item">
          <div class="tiny-slide">
            <Swiper :slides-per-view="1" :space-between="30" pagination :breakpoints="{
              '840': {
                slidesPerView: 2,
              },
              '1366': {
                slidesPerView: 3,
              },
            }" autoplay loop navigation :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]">
              <SwiperSlide v-for="(item, index) in testimonials" :key="index">
                <div
                  class="lg:flex p-6 lg:p-0 relative rounded-md dark:shadow-gray-800 overflow-hidden m-2 bg-[url(/images/design/bg-image.jpg)] bg-center bg-cover bg-opacity-80">
                  <div class="pt-6 lg:p-6 text-center lg:text-start space-y-4">
                    <p class="text-base text-slate-400 italic">
                      "{{ item.text }}"
                    </p>

                    <div>
                      <span class="text-color-4 font-bold block mb-1">{{
                        item.reference
                      }}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- <div class="tiny-slide">
            <div
              class="lg:flex p-6 lg:p-0 relative rounded-md shadow dark:shadow-gray-800 overflow-hidden m-2"
            >
              <img
                class="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto"
                src="/images/client/02.jpg"
                alt=""
                width="384"
                height="512"
              />
              <div class="pt-6 lg:p-6 text-center lg:text-start space-y-4">
                <p class="text-base text-slate-400">
                  " The most well-known dummy text is the 'Lorem Ipsum', which
                  is said to have originated in the 16th century. "
                </p>

                <div>
                  <span class="text-indigo-600 block mb-1">Carl Oliver</span>
                  <span class="text-slate-400 text-sm dark:text-white/60 block"
                    >Staff Engineer, Algolia</span
                  >
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:global(.swiper-button-next),
:global(.swiper-button-prev) {
  --swiper-navigation-size: 2rem;
  --swiper-navigation-color: #e92946;
}

:global(.swiper-pagination-bullet-active) {
  --swiper-pagination-color: #e92946;
}
</style>

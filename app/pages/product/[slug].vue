<script setup>
import MarkdownIt from "markdown-it";
import { register } from "swiper/element/bundle";
import { Navigation, Thumbs, FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import { getProductBySlug } from "~/schemas/eurogrober-queries";

register();

definePageMeta({
  layout: "category",
});

const markdown = new MarkdownIt();
const graphql = useStrapiGraphQL();
const route = useRoute();
const { slug } = route.params;

const productItem = inject("product");
const isProductDetail = inject("isProductDetail");

const thumbsSwiperInstance = ref(null);
const mainSwiperInstance = ref(null);

const { data: product } = await useAsyncData(
  `product-detail-${slug}`,
  async () => {
    try {
      const result = await graphql(getProductBySlug, { slug });
      return result?.data?.products?.[0] || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);

watch(
  product,
  (newVal) => {
    if (newVal) {
      productItem.value = newVal;
      isProductDetail.value = true;
    }
  },
  { immediate: true }
);

const onThumbsInit = (e) => {
  console.log("Thumbs inicializado");
  thumbsSwiperInstance.value = e.detail[0];
};

const handlePrev = () => {
  if (thumbsSwiperInstance.value) {
    thumbsSwiperInstance.value.slidePrev();
  }
};

const handleNext = () => {
  if (thumbsSwiperInstance.value) {
    thumbsSwiperInstance.value.slideNext();
  }
};

const handleThumbClick = (index) => {
  const mainSwiper = document.querySelector(".mySwiperPrincipal")?.swiper;
  if (mainSwiper) {
    mainSwiper.slideTo(index);
  }
};
</script>

<template>
  <div class="container relative mt-16 mb-20">
    <div v-if="!product" class="flex justify-center py-20">
      <p>Loading...</p>
    </div>

    <ClientOnly v-else>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="flex gap-4 h-[500px]">
          <div class="w-24 h-full shrink-0 relative flex flex-col items-center justify-center">
            <button @click.stop="handlePrev"
              class="w-full flex justify-center text-gray-400 hover:text-red-600 mb-2 p-2 bg-white z-10 cursor-pointer">
              <Icon name="ph:caret-up-bold" size="32" />
            </button>

            <swiper-container @swiper="onThumbsInit" direction="vertical" slides-per-view="4" space-between="10"
              watch-slides-progress="true" :modules="[Navigation, Thumbs]" class="h-full w-full mySwiperThumbs">
              <swiper-slide v-for="(image, i) in product.images" :key="i" @click="handleThumbClick(i)"
                class="cursor-pointer border border-transparent rounded-md overflow-hidden bg-white hover:border-red-400 transition-all box-border">
                <img :src="image.url" class="w-full h-full object-contain p-1 pointer-events-none" />
              </swiper-slide>
            </swiper-container>

            <button @click.stop="handleNext"
              class="w-full flex justify-center text-gray-400 hover:text-red-600 mt-2 p-2 bg-white z-10 cursor-pointer">
              <Icon name="ph:caret-down-bold" size="32" />
            </button>
          </div>

          <div class="flex-1 h-full bg-white rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
            <div class="absolute top-4 left-0 z-20 bg-red-600 text-white px-6 py-2 rounded-r-full font-bold shadow-md">
              {{ product.name }}
            </div>

            <swiper-container slides-per-view="1" space-between="20" :thumbs="{ swiper: thumbsSwiperInstance }"
              :modules="[Navigation, Thumbs, Mousewheel]" class="h-full w-full mySwiperPrincipal">
              <swiper-slide v-for="(image, i) in product.images" :key="i"
                class="flex items-center justify-center bg-white">
                <img :src="image.url" class="max-w-full max-h-full object-contain p-8" />
              </swiper-slide>
            </swiper-container>
          </div>
        </div>

        <div class="flex flex-col">
          <h1 class="text-3xl font-extrabold text-gray-900 mb-6 lg:hidden">
            {{ product.name }}
          </h1>

          <div class="prose prose-lg max-w-none text-gray-600 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <h3 class="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
              Product Description
            </h3>
            <div v-if="product.description" v-html="markdown.render(product.description)"></div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>
swiper-container::part(container) {
  padding: 0 !important;
}

.swiper-slide-thumb-active {
  border: 2px solid #e92946 !important;
  opacity: 1;
}

swiper-slide {
  opacity: 0.6;
  height: auto !important;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}
</style>

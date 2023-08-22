<script setup>
import mapper from "smapper";
import MarkdownIt from "markdown-it";
import { FreeMode, Navigation, Mousewheel, Thumbs } from 'swiper/modules';
import { PhCaretUp, PhCaretDown } from "@phosphor-icons/vue";
import { GetProductBySlug } from "~/graphql/queries";
import 'swiper/element/css/navigation';

definePageMeta({
  layout: "category",
});

const markdown = new MarkdownIt();

const graphql = useStrapiGraphQL();
const route = useRoute();

const thumbsSwiper = ref(null);
const product = ref({});

const productItem = inject("product");
const isProductDetail = inject("isProductDetail");
const { slug } = route.params;

isProductDetail.value = true;

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

onMounted(async () => {
  try {
    const result = await graphql(GetProductBySlug, {
      slug,
    });

    const [mapped] = mapper(result.data).products;
    product.value = mapped;
    productItem.value = mapped;
  } catch (error) {
    console.log("An error occurred while trying to get product");
  }
});
</script>

<template>
  <section class="container relative mt-24 mb-10">
    <div class="grid grid-cols-[4rem_1fr] gap-3 lg:grid-cols-[7rem_1fr] lg:gap-8">
      <div class="h-full flex flex-col items-center">
        <button class="slide__prev mb-4">
          <PhCaretUp />
        </button>
        <swiper-container :space-between="10" :slides-per-view="4" @swiper="setThumbsSwiper" free-mode :navigation="{
          nextEl: '.slide__next',
          prevEl: '.slide__prev',
        }" watch-slides-progress :modules="[FreeMode, Navigation]" direction="vertical" class="mySwiper">
          <swiper-slide class="relative w-full h-28" v-for="(image, i) in product?.images" :key="i">
            <img :src="image.url" :alt="image.alternativeUrl" />
          </swiper-slide>
        </swiper-container>
        <button class="slide__next mt-4">
          <PhCaretDown />
        </button>
      </div>
      <div class="flex flex-col overflow-hidden md:flex-row">
        <div class="relative">
          <div class=" w-[70%] bg-red-600 px-4 py-1 text-white rounded-r-full text-xl">
            {{ product.name }}
          </div>
          <swiper-container :space-between="32" :slides-per-view="1" thumbs-swiper=".mySwiper" mousewheel :navigation="{
            nextEl: '.slide__next',
            prevEl: '.slide__prev',
          }"
            class="mySwiper2 sm:w-[1rem] sm:h-[1rem] md:w-[20rem] md:h-[20rem] lg:w-[33.75rem] lg:h-[33.75rem] shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500"
            :modules="[Navigation, Thumbs, Mousewheel]">
            <swiper-slide v-for="(image, i) in product.images" :key="i">
              <img :src="image.url" :alt="image.alternativeUrl" />

            </swiper-slide>
          </swiper-container>
        </div>
        <div class="w-1/2 pt-8 pl-4" v-if="product?.description" v-html="markdown.render(product?.description ?? '')" />
      </div>
    </div>

  </section>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  @apply box-border py-[10px] transition;
}

.mySwiper .swiper-slide :not(.swiper-slide-thumb-active) {
  @apply h-full opacity-40 filter blur-[1px];
}

.mySwiper .swiper-slide-thumb-active>img {
  @apply opacity-100 filter-none border-2 border-color-1;
}
</style>

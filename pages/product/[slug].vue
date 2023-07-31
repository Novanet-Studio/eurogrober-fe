<script setup>
import mapper from "smapper";
import MarkdownIt from "markdown-it";
import { PhCaretUp, PhCaretDown } from "@phosphor-icons/vue";
import { GetProductBySlug } from "~/graphql/queries";

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

// const sizes = [
//   "10” (25 cm) REF 2503F",
//   "12” (30 cm) REF 3003F",
//   "14” (35 cm) REF 3503F",
//   "16” (40 cm) REF 4003F",
//   "18” (45 cm) REF 4503F",
//   "20” (50 cm) REF 5003F",
//   "22” (55 cm) REF 5503F",
//   "24” (60 cm) REF 6003F",
// ];

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
    <div class="grid grid-cols-[4rem_1fr] gap-3 md:grid-cols-[7rem_1fr] md:gap-8">
      <div class="h-full flex flex-col items-center">
        <button class="slide__prev mb-4">
          <PhCaretUp />
        </button>
        <Swiper :space-between="10" :slides-per-view="4" @swiper="setThumbsSwiper" free-mode :navigation="{
          nextEl: '.slide__next',
          prevEl: '.slide__prev',
        }" watch-slides-progress :modules="[SwiperFreeMode, SwiperNavigation]" direction="vertical" class="mySwiper">
          <SwiperSlide class="relative" v-for="(image, i) in product?.images" :key="i">
            <img :src="image.url" :alt="image.alternativeUrl" />
          </SwiperSlide>
        </Swiper>
        <button class="slide__next mt-4">
          <PhCaretDown />
        </button>
      </div>
      <div class="flex flex-col lg:flex-row">
        <div class="relative">
          <div class=" w-[70%] bg-red-600 px-4 py-1 text-white rounded-r-full text-xl">
            {{ product.name }}
          </div>
          <Swiper :space-between="32" :slides-per-view="1" :thumbs="{ swiper: thumbsSwiper }" mousewheel :navigation="{
            nextEl: '.slide__next',
            prevEl: '.slide__prev',
          }"
            class="mySwiper2 md:w-[33.75rem] h-[33.75rem] shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500"
            :modules="[SwiperNavigation, SwiperThumbs, SwiperMousewheel]">
            <SwiperSlide class="" v-for="(image, i) in product.images" :key="i">
              <img :src="image.url" :alt="image.alternativeUrl" />

            </SwiperSlide>
          </Swiper>
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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 20%;
  object-fit: cover;
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

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  @apply box-border py-[10px] transition;
}

.mySwiper .swiper-slide {
  @apply h-full opacity-40 filter blur-[1px];
}

.mySwiper .swiper-slide-thumb-active {
  @apply opacity-100 filter-none border-2 border-color-1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

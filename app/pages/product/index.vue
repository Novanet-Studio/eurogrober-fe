<script setup lang="ts">
const { categories, isLoading } = await useGetCategories();

const active = ref("");

const items = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Products",
  },
];

function scrollTo(slug = "") {
  if (!process.client) return;

  const el = document.getElementById(slug);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 200,
      behavior: "smooth",
    });
    active.value = slug;
  }
}
</script>

<template>
  <ClientOnly class="relative scroll-smooth">
    <Breadcrumb :items="items" />

    <div class="relative py-48 w-full overflow-hidden lg:py-64">
      <div
        class="absolute -inset-2 bg-[url('/images/design/eurogrober-kitchen-place.webp')] bg-no-repeat md:bg-left bg-center bg-cover">
      </div>
      <div class="absolute inset-0 bg-slate-950/30"></div>
      <div class="container relative">
        <div class="grid grid-cols-1 mb-12">
          <div class="text-center md:text-start">
            <h1 class="font-extrabold text-color-1 mb-2 text-xl md:text-3xl lg:text-5xl lg:leading-normal">
              Products
            </h1>
            <p
              class="text-color-5 text-lg max-w-xl text-center md:text-start md:text-xl md:max-w-sm lg:text-3xl lg:max-w-lg">
              Kitchen hardware and accessories
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-[35%_1fr] md:mt-10 md:gap-6 md:mx-6 lg:mt-20 lg:grid-cols-[30%_1fr] lg:gap-10">
      <div class="container mt-8 md:px-0 md:mt-0">
        <div class="grid grid-cols-2 gap-[2px] mb-16 md:grid-cols-1">
          <button class="text-xs p-4 !important text-center transition ease-in md:p-4 lg:text-sm" :class="active === category.slug
              ? 'bg-color-4 text-white font-extrabold'
              : 'bg-color-5 text-color-4'
            " v-for="(category, i) in categories" :key="i" @click="scrollTo(category.slug)">
            {{ category.name }}
          </button>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:mx-0 md:grid-cols-2 lg:grid-cols-3"
        v-if="isLoading">
        <div
          class="relative w-full h-72 bg-gray-200 animate-pulse overflow-hidden shadow dark:shadow-gray-800 rounded-md"
          v-for="item in 6" :key="item"></div>
      </div>

      <div class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 md:mx-0 gap-[30px] md:mt-0 md:grid-cols-2 lg:grid-cols-3"
        v-else>
        <NuxtLink :id="category.slug" :to="`/category/${category.slug}`" v-for="(category, i) in categories" :key="i">
          <div class="group relative mb-8">
            <div
              class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500 aspect-[4/3] bg-gray-100"
              :class="[active === category.slug && 'shadow-xl shadow-color-4']">
              <img v-if="
                category.product &&
                category.product.images &&
                category.product.images.length > 0
              " :src="category.product.images[0].url" :alt="category.name" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            </div>

            <div class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm">
              <span class="text-lg font-bold md:text-sm">
                {{ category.name }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </ClientOnly>
</template>

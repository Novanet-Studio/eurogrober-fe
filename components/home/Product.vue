<script setup>
const { categories, isLoading } = useGetCategories();
</script>

<template>
  <section id="products" class="container relative mt-16">
    <header-title title="Products" subtitle="Kitchen hardware and accessories" />

    <div class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:grid-cols-3 lg:grid-cols-3" v-if="isLoading">
      <div
        class="relative w-full h-72 bg-black/10 animate-pulse overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500 bg-red"
        v-for="item in 9" :key="item">
      </div>
    </div>
    <div class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:grid-cols-3 lg:grid-cols-3" v-else>
      <NuxtLink :to="`/category/${category.slug}`" v-for="(category, i) in categories" :key="i">
        <div class="group relative mb-8 md:mb-0">
          <div
            class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500">
            <img :src="category.product.images[0].url" alt="" />
          </div>

          <div class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm">
            <a href="shop-item-detail.html" class="text-lg font-bold md:text-sm">
              {{ category.name }}
            </a>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

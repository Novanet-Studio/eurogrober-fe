<script setup lang="ts">
const { categories, isLoading } = await useGetCategories();
</script>

<template>
  <section id="products" class="container relative mt-16">
    <header-title title="Products" subtitle="Kitchen hardware and accessories" />

    <div v-if="isLoading" class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:grid-cols-3 lg:grid-cols-3">
      <div class="relative w-full h-72 bg-gray-200 animate-pulse overflow-hidden shadow rounded-md" v-for="item in 6"
        :key="item"></div>
    </div>

    <div v-else class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:grid-cols-3 lg:grid-cols-3">
      <NuxtLink :to="`/category/${category.slug}`" v-for="(category, i) in categories" :key="i">
        <div class="group relative mb-8 md:mb-0">
          <div
            class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500 aspect-[4/3]">
            <img v-if="
              category.product &&
              category.product.images &&
              category.product.images.length > 0
            " :src="category.product.images[0].url" :alt="category.name" class="w-full h-full object-cover" />

            <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              <span>No image</span>
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
  </section>
</template>

<script setup lang="ts">
import { getProductsByCategory } from "~/schemas/eurogrober-queries";
import type { Category } from "~/types";

definePageMeta({
  layout: "category",
});

const route = useRoute();
const graphql = useStrapiGraphQL();

const { data: category, status } = await useAsyncData(
  `category-products-${route.params.slug}`,

  async () => {
    try {
      const response = await graphql<any>(getProductsByCategory, {
        slug: route.params.slug,
      });

      return (response?.data?.categories?.[0] as Category) || null;
    } catch (error) {
      console.error("Error loading category products:", error);
      return null;
    }
  },
  {
    watch: [() => route.params.slug],
  }
);

const isLoading = computed(() => status.value === "pending");
</script>

<template>
  <section class="relative container">
    <div v-if="isLoading" class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-8 gap-[30px]">
      <div v-for="i in 4" :key="i" class="h-64 bg-gray-200 animate-pulse rounded-md"></div>
    </div>

    <div v-else-if="category && category.products && category.products.length > 0"
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-8 gap-[30px]">
      <NuxtLink :to="`/product/${product.slug}`" v-for="product in category.products"
        :key="product.documentId || product.slug">
        <div class="group relative mb-8">
          <div
            class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500 aspect-square">
            <img v-if="product.images && product.images.length > 0" :src="product.images[0]!.url"
              :alt="product.images[0]!.name || product.name" class="w-full h-full object-cover" />

            <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
              No Image
            </div>
          </div>

          <div
            class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm md:text-start">
            <span class="hover:text-indigo-600 text-xs font-semibold">
              {{ product.name }}
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-else class="mt-10 text-center py-10">
      <p class="text-xl text-gray-500">No products found in this category.</p>
    </div>
  </section>
</template>

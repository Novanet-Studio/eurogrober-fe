<script setup>
definePageMeta({
  layout: "category",
});

const products = ref([]);
const categories = inject("categories");
const active = inject("active");
const categoryItem = inject("category");

watchEffect(() => {
  if (active.value) {
    const category = categories.value.find(
      (category) => category.slug === active.value
    );

    categoryItem.value = category;

    if (category?.products?.length) {
      products.value = category.products;
    }
  }
});
</script>

<template>
  <section class="relative container">
    <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-8 gap-[30px]"
    >
      <NuxtLink
        :to="`/product/${product.slug}`"
        v-for="(product, i) in products"
        :key="i"
      >
        <div class="group relative">
          <div
            class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500"
          >
            <img :src="product.images[0].url" alt="" />
          </div>

          <div
            class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm md:text-start"
          >
            <a
              href="shop-item-detail.html"
              class="hover:text-indigo-600 text-xs font-semibold"
              >{{ product.name }}</a
            >
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

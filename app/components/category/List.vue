<script setup>
const route = useRoute();

const categories = inject('categories'); 
</script>

<template>
  <div class="grid grid-cols-2 gap-[2px] mb-16 md:grid-cols-4">
    <NuxtLink v-for="(category, i) in categories" :key="i" :to="`/category/${category.slug}`"
      class="text-sm p-8 !important text-center transition ease-in md:p-4 lg:text-sm border-r border-gray-100 last:border-0 cursor-pointer"
      :class="route.params.slug === category.slug
        ? 'bg-color-4 text-white font-extrabold'
        : 'bg-color-5 text-color-4 hover:bg-gray-100'
        ">
      {{ category.name }}
    </NuxtLink>
  </div>
</template>
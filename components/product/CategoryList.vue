<script setup>
const router = useRouter();
const categories = inject('categories');
const category = inject('category');
const active = inject('active');

function changeCategory(slug) {
  const found = categories.value.find((category) => category.slug === slug)
  active.value = found.slug;
  category.value = found;
  router.replace(`/category/${slug}`);
}
</script>

<template>
  <div class="grid grid-cols-2 gap-[2px] mb-16 md:grid-cols-4">
    <button
      class="text-[10px] p-3 text-center transition ease-in md:p-2 lg:text-sm"
      :class="
        active === category.slug
          ? 'bg-color-4 text-white font-extrabold'
          : 'bg-color-5 text-color-4'
      "
      v-for="(category, i) in categories"
      :key="i"
      @click="changeCategory(category.slug)"
    >
      {{ category.name }}
    </button>
  </div>
</template>

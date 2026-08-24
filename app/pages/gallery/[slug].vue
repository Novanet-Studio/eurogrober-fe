<script setup lang="ts">
import { getAlbumBySlug } from "~/schemas/eurogrober-queries";

definePageMeta({
  layout: "gallery",
});

const route = useRoute();

const { data: album, status } = await useAsyncData(
  `gallery-album-${route.params.slug}`,

  async () => {
    try {
      return await getAlbumBySlug(route.params.slug as string);
    } catch (error) {
      console.error("Error loading album items:", error);
      return null;
    }
  },
  {
    watch: [() => route.params.slug],
  },
);

const isLoading = computed(() => status.value === "pending");
</script>

<template>
  <section class="relative container pb-20">
    <div
      v-if="isLoading"
      class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-8"
    >
      <div
        v-for="i in 6"
        :key="i"
        class="h-64 bg-gray-200 animate-pulse rounded-lg break-inside-avoid"
      ></div>
    </div>

    <div
      v-else-if="album && album.album_items && album.album_items.length > 0"
      class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mt-8"
    >
      <div
        v-for="(item, i) in album.album_items"
        :key="i"
        class="break-inside-avoid relative group rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 mb-6"
      >
        <img
          :src="item.image"
          :alt="item.label || album.title"
          class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        <div
          v-if="item.label || item.description"
          class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6"
        >
          <h4
            v-if="item.label"
            class="text-white font-bold text-lg mb-2 border-b-2 border-red-600 pb-1"
          >
            {{ item.label }}
          </h4>
          <p v-if="item.description" class="text-gray-200 text-sm">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <div v-else class="mt-10 text-center py-20 bg-gray-50 rounded-lg">
      <p class="text-xl text-gray-500">No photos available.</p>
    </div>
  </section>
</template>

<style scoped>
.columns-1 {
  column-count: 1;
}

.md\:columns-2 {
  column-count: 2;
}

.lg\:columns-3 {
  column-count: 3;
}

.break-inside-avoid {
  break-inside: avoid;
  page-break-inside: avoid;
}
</style>

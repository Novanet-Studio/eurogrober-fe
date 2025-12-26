<script setup lang="ts">
import useGetAlbums from '~/composables/useGetAlbums';

const { albums, isLoading } = await useGetAlbums();
</script>

<template>
  <section id="gallery">
    <div class="container relative mt-16 md:mt-8">
      <header-title title="Gallery" subtitle="Kitchen possibilities" />
      <div class="flex justify-center">
        <p class="text-color-4 px-6 text-sm text-center md:max-w-md lg:max-w-6xl lg:text-3xl lg:mb-6">
          We not only offer products. We offer complete solutions for kitchens,
          with the best products, cutting-edge technological and durable
          accessories
        </p>
      </div>
    </div>
    <section id="gallery" class="container relative mt-16">
      <div v-if="isLoading" class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:grid-cols-3 lg:grid-cols-3">
        <div class="relative w-full h-72 bg-gray-200 animate-pulse overflow-hidden shadow rounded-md" v-for="item in 6"
          :key="item">
        </div>
      </div>

      <div v-else-if="albums && albums.length > 0"
        class="grid sm:grid-cols-2 grid-cols-1 mx-8 mt-8 gap-[30px] md:grid-cols-3 lg:grid-cols-3">
        <NuxtLink :to="`/gallery/${album.slug}`" v-for="(album, i) in albums" :key="i">
          <div class="group relative mb-8 md:mb-0">
            <div
              class="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md transition-all duration-500 aspect-[4/3]">

              <img v-if="album.cover && album.cover.url" :src="album.cover.url" :alt="album.title"
                class="w-full h-full object-cover" />

              <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                <span>No cover</span>
              </div>

            </div>

            <div class="mt-4 absolute -top-9 left-0 w-11/12 bg-red-600 px-4 py-1 text-white rounded-r-full text-sm">
              <span class="text-lg font-bold md:text-sm">
                {{ album.title }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="mt-10 text-center py-10">
        <p class="text-xl text-gray-500">No items to display yet.</p>
      </div>
    </section>
  </section>
</template>

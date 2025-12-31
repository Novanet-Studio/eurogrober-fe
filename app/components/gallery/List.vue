<script setup>
const route = useRoute();
const albums = inject('albums'); 
</script>

<template>
    <div class="grid grid-cols-2 gap-[2px] mb-16 md:grid-cols-4">
        <NuxtLink v-for="(album, i) in albums" :key="i" :to="`/gallery/${album.slug}`"
            class="text-sm p-8 !important text-center transition ease-in md:p-4 lg:text-sm cursor-pointer border-r border-gray-100 last:border-0"
            :class="route.params.slug === album.slug
                ? 'bg-color-4 text-white font-extrabold'
                : 'bg-color-5 text-color-4 hover:bg-gray-100'
                ">
            {{ album.title }}
        </NuxtLink>
    </div>
</template>
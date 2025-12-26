<script setup>
import { getAlbumsQuery } from '~/schemas/eurogrober-queries';

const route = useRoute();
const graphql = useStrapiGraphQL();

const isItemDetail = ref(false);
const albums = ref([]);
const currentAlbum = ref({});
const items = ref([]);

const { data: albumsData } = await useAsyncData(
    "layout-albums-list",
    async () => {
        try {
            const response = await graphql(getAlbumsQuery);
            return response?.data?.albums || [];
        } catch (error) {
            console.error("Error fetching albums:", error);
            return [];
        }
    }
);

watch(
    albumsData,
    (newVal) => {
        albums.value = newVal || [];
    },
    { immediate: true }
);

watchEffect(() => {
    const currentSlug = route.params.slug;

    if (albums.value.length > 0 && currentSlug) {
        const found = albums.value.find((a) => a.slug === currentSlug);
        if (found) {
            currentAlbum.value = found;
        }
    }
});

provide("isItemDetail", isItemDetail);
provide("albums", albums);
provide("currentAlbum", currentAlbum);
provide("items", items);

watchEffect(() => {
    const title = currentAlbum.value?.title || "Gallery";
    const slug = currentAlbum.value?.slug || "";

    const defaultItems = [
        { text: "Home", url: "/" },
        { text: "Gallery", url: "/gallery" },
        ...(slug ? [{ text: title, url: `/gallery/${slug}` }] : []),
    ];

    items.value = defaultItems;
});
</script>

<template>
    <ClientOnly class="relative scroll-smooth">
        <AppNavigation />
        <Breadcrumb :items="items" />

        <div class="container shadow-md dark:shadow-gray-800 overflow-hidden p-0 mt-6 grid md:grid-cols-2">
            <div class="lg:flex flex-col justify-center">
                <div class="pt-1 lg:p-1 text-center space-y-4">
                    <h3 class="text-xl text-color-1 font-extrabold lg:text-5xl">
                        {{ currentAlbum?.title }}
                    </h3>
                </div>
            </div>
            <div class="relative bg-gray-100 min-h-[200px] max-h-[300px]">
                <img v-if="currentAlbum?.cover?.url" class="h-full w-full" :src="currentAlbum.cover.url"
                    :alt="currentAlbum.title" />
            </div>
        </div>

        <div class="container relative mt-16 md:mt-8">
            <HeaderTitle title="Gallery" subtitle="Explore our kitchen designs" v-if="!isItemDetail"
                class="mt-8 mb-8" />
            <GalleryList />
        </div>

        <slot />

        <AppFooter />
        <BackTop />
    </ClientOnly>
</template>

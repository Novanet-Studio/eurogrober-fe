<script setup>
import MarkdownIt from "markdown-it";
import { getCategories } from "~/schemas/eurogrober-queries";

const markdown = new MarkdownIt();
const route = useRoute();
const graphql = useStrapiGraphQL();

const isProductDetail = ref(false);
const categories = ref([]);
const currentCategory = ref({});
const product = ref({});
const items = ref([]);

const { data: categoriesData } = await useAsyncData(
  "layout-categories-list",
  async () => {
    try {
      const response = await graphql(getCategories);
      return response?.data?.categories || [];
    } catch (error) {
      console.error("Error fetching categories in layout:", error);
      return [];
    }
  }
);

watch(
  categoriesData,
  (newVal) => {
    categories.value = newVal || [];
  },
  { immediate: true }
);

watchEffect(() => {
  const currentSlug = route.params.slug;

  if (categories.value.length > 0 && currentSlug) {
    const found = categories.value.find((c) => c.slug === currentSlug);
    if (found) {
      currentCategory.value = found;
    }
  } else if (!currentSlug) {
    currentCategory.value = {};
  }
});

watchEffect(() => {
  const name = currentCategory.value?.name || "Products";
  const slug = currentCategory.value?.slug || "";

  const defaultItems = [
    { text: "Home", url: "/" },
    { text: "Products", url: "/product" },
    ...(slug ? [{ text: name, url: `/category/${slug}` }] : []),
  ];

  if (isProductDetail.value && product.value?.name) {
    items.value = [...defaultItems, { text: product.value.name }];
    return;
  }

  items.value = defaultItems;
});

provide("isProductDetail", isProductDetail);
provide("categories", categories);
provide("category", currentCategory);
provide("product", product);
provide("items", items);
</script>

<template>
  <ClientOnly class="relative scroll-smooth">
    <AppNavigation />

    <Breadcrumb :items="items" />

    <div class="container shadow-md dark:shadow-gray-800 overflow-hidden mt-6 grid md:grid-cols-2">
      <div class="lg:flex flex-col justify-center">
        <div class="pt-1 lg:p-1 text-center space-y-4">
          <h3 class="text-xl text-color-1 font-extrabold lg:text-5xl">
            {{ currentCategory?.name }}
          </h3>
          <div v-if="currentCategory?.description">
            <div class="text-color-4 block mb-1 text-center lg:text-2xl"
              v-html="markdown.render(currentCategory.description)"></div>
          </div>
        </div>
      </div>

      <div class="relative min-h-[200px]">
        <img v-if="
          currentCategory?.products?.length &&
          currentCategory.products[0].images?.length
        " class="h-42 lg:h-80 w-full bg-center object-contain object-top"
          :src="currentCategory.products[0].images[0].url" :alt="currentCategory.name" />

        <div v-else class="h-42 lg:h-80 w-full bg-gray-200 flex items-center justify-center text-gray-400">
          <span>Select a category</span>
        </div>
      </div>
    </div>

    <div class="container relative mt-16 md:mt-8">
      <HeaderTitle title="Products" subtitle="Kitchen hardware and accessories" v-if="!isProductDetail"
        class="mt-8 mb-8" />

      <CategoryList />
    </div>

    <slot />

    <AppFooter />
    <BackTop />
  </ClientOnly>
</template>

<script setup>
import MarkdownIt from "markdown-it";
import { getCategories } from "~/schemas/eurogrober-queries";

const markdown = new MarkdownIt();
const route = useRoute();
const graphql = useStrapiGraphQL();


const isProductDetail = ref(false);
const category = ref({});
const product = ref({});
const active = ref("");

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

const categories = ref(categoriesData.value || []);

watch(categoriesData, (newVal) => {
  categories.value = newVal || [];
});

watchEffect(() => {
  const currentSlug = route.params.slug;

  active.value = currentSlug;

  if (categories.value.length > 0 && currentSlug) {
    const found = categories.value.find((c) => c.slug === currentSlug);

    if (found) {
      category.value = found;
    }
  }
});

provide("isProductDetail", isProductDetail);
provide("categories", categories);
provide("category", category);
provide("product", product);
provide("active", active);
provide("items", items);

watchEffect(() => {
  const name = category.value?.name || "Loading...";
  const slug = category.value?.slug || "";

  const defaultItems = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Products",
      url: "/product",
    },

    ...(slug
      ? [
        {
          text: name,
          url: `/category/${slug}`,
        },
      ]
      : []),
  ];

  if (isProductDetail.value && product.value?.name) {
    items.value = [
      ...defaultItems,
      {
        text: product.value.name,
      },
    ];
    return;
  }

  items.value = defaultItems;
});
</script>

<template>
  <ClientOnly class="relative scroll-smooth">
    <AppNavigation />

    <Breadcrumb :items="items" />

    <div class="container shadow-md dark:shadow-gray-800 overflow-hidden mt-6 grid md:grid-cols-2">
      <div class="lg:flex flex-col justify-center">
        <div class="pt-1 lg:p-1 text-center space-y-4">
          <h3 class="text-xl text-color-1 font-extrabold lg:text-5xl">
            {{ category?.name }}
          </h3>
          <div>
            <div v-if="category?.description" class="text-color-4 block mb-1 text-center lg:text-2xl"
              v-html="markdown.render(category.description)"></div>
          </div>
        </div>
      </div>

      <div class="relative">
        <img v-if="
          category?.products?.length && category.products[0].images?.length
        " class="h-42 lg:h-80 w-full bg-center object-contain object-top" :src="category.products[0].images[0].url"
          :alt="category.name" />
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

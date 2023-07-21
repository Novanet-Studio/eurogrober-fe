<script setup>
import mapper from "smapper";
import MarkdownIt from "markdown-it";
import { GetCategories } from "~/graphql/queries";


const markdown = new MarkdownIt();

const route = useRoute();

const isProductDetail = ref(false);
const categories = ref([]);
const category = ref({});
const product = ref({});
const active = ref("");

const graphql = useStrapiGraphQL();

const items = ref([]);

provide("isProductDetail", isProductDetail);
provide("categories", categories);
provide("category", category);
provide("product", product);
provide("active", active);
provide("items", items);

watchEffect(() => {
  const { name, slug } = category.value;

  const defaultItems = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Products",
    },
    {
      text: name ?? "",
      url: `/category/${slug}`,
    },
  ];

  if (route.path.includes("product")) {
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

onMounted(async () => {
  try {
    const categoriesRes = await graphql(GetCategories);
    const categoriesMapped = mapper(categoriesRes.data).categories;

    categories.value = categoriesMapped;
    active.value = route.params.slug;
  } catch (error) {
    console.error("Something went wrong getting products");
  }
});
</script>

<template>
  <ClientOnly class="relative scroll-smooth">
    <AppNavigation />
    <div>
      <Breadcrumb :items="items" />
      <div class="shadow-md dark:shadow-gray-800 overflow-hidden m-6 grid md:grid-cols-2 lg:mx-16">
        <div class="lg:flex p-6 lg:p-0 relative rounded-md lg:items-center">
          <div class="pt-1 lg:p-6 text-center space-y-4">
            <h3 class="text-xl text-color-1 font-extrabold lg:text-5xl">
              {{ category?.name }}
            </h3>
            <div>
              <div class="text-color-4 block mb-1 text-center lg:text-4xl"
                v-html="markdown.render(category?.description ?? '')"></div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img class="h-42 lg:h-80 w-full bg-center object-contain object-top" :src="category?.products[0]?.images[0]?.url ?? '/images/shop/bg.jpg'
            " alt="" v-if="category?.products?.length" />
        </div>
      </div>

      <div class="container relative mt-16 md:mt-8">
        <HeaderTitle title="Products" subtitle="Kitchen hardware and accessories" v-if="!isProductDetail" />
        <ProductCategoryList />
      </div>
    </div>
    <slot />
    <AppFooter />
    <Switcher />
    <BackTop />
  </ClientOnly>
</template>

import { getCategories } from "~/schemas/eurogrober-queries";

export default async function useGetCategories() {
  const {
    data: categories,
    status,
    error,
  } = await useAsyncData(
    "categories-list",
    async () => {
      try {
        const rawCategories = await getCategories();

        return rawCategories.map((category) => ({
          name: category.name,
          slug: category.slug,

          product:
            category.products && category.products.length > 0
              ? category.products[0]
              : null,
        }));
      } catch (err) {
        console.error("An error occurred while getting categories", err);
        return [];
      }
    },
    {
      default: () => [],
      lazy: true,
    }
  );

  const isLoading = computed(() => status.value === "pending");

  return {
    categories,
    isLoading,
    error,
  };
}

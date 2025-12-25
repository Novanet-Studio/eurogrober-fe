import { getCategories } from "~/schemas/eurogrober-queries";

interface Category {
  documentId: string;
  id: number;
  name: string;
  slug: string;
  products: any[];
}

export default async function useGetCategories() {
  const graphql = useStrapiGraphQL();

  const {
    data: categories,
    status,
    error,
  } = await useAsyncData(
    "categories-list",
    async () => {
      try {
        const result = await graphql<any>(getCategories);

        const rawCategories = result?.data?.categories || [];

        return rawCategories.map((category: Category) => ({
          id: category.id,
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

import mapper from "smapper";
import { GetCategories } from "~/graphql/queries";

export default function useGetCategories(): {
  categories: Ref<any>;
  isLoading: Ref<boolean>;
} {
  const categories = useState("categories");
  const isLoading = useState("isLoadingCategories", () => false);
  const graphql = useStrapiGraphQL();

  async function fetchCategories() {
    isLoading.value = true;
    try {
      const result = await graphql<any>(GetCategories);
      const mapped = mapper<any>(result.data).categories;
      categories.value = mapped.map((category: any) => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        product: category.products[0],
      }));
    } catch (error) {
      console.log("An error occurred while getting categories");
    } finally {
      isLoading.value = false;
    }
  }

  onMounted(() => {
    fetchCategories();
  });

  return {
    categories,
    isLoading,
  };
}

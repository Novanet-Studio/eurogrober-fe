import { getAlbumsQuery } from "~/schemas/eurogrober-queries";

export default async function useGetAlbums() {
  const graphql = useStrapiGraphQL();

  const {
    data: albums,
    status,
    error,
  } = await useAsyncData(
    "albums-list",
    async () => {
      try {
        const result = await graphql<any>(getAlbumsQuery);
        return result?.data?.albums || [];
      } catch (err) {
        console.error("An error occurred while getting albums", err);
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
    albums,
    isLoading,
    error,
  };
}

import type { Album, AlbumItem, Category, Product } from "~/types";

export async function getCategories(): Promise<Category[]> {
  const { get } = useKairos();
  const [categories, products] = await Promise.all([
    get<Category>("categories", { itemsPerPage: "100" }),
    get<Product>("products", { itemsPerPage: "100", populate: "category" }),
  ]);

  return (categories ?? []).map((category) => ({
    ...category,
    products: (products ?? []).filter(
      (p) => p.relations?.category?.[0]?.data?.slug === category.slug,
    ),
  }));
}

export async function getProductsByCategory(
  slug: string,
): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) ?? null;
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { getOne } = useKairos();
  return getOne<Product>("products", slug, { populate: "category" });
}

export async function getAlbums(): Promise<Album[]> {
  const { get } = useKairos();
  const [albums, items] = await Promise.all([
    get<Album>("albums", { itemsPerPage: "100" }),
    get<AlbumItem>("albumitems", { itemsPerPage: "100", populate: "album" }),
  ]);

  return (albums ?? []).map((album) => ({
    ...album,
    album_items: (items ?? []).filter(
      (i) => i.relations?.album?.[0]?.data?.slug === album.slug,
    ),
  }));
}

export async function getAlbumBySlug(slug: string): Promise<Album | null> {
  const albums = await getAlbums();
  return albums.find((a) => a.slug === slug) ?? null;
}

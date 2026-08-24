export interface CategoryRelation {
  id: string;
  data: {
    slug: string;
    name: string;
    description?: string;
  };
}

export interface Category {
  slug: string;
  name: string;
  description?: string;
  products?: Product[];
}

export interface Product {
  slug: string;
  name: string;
  description: string;
  images: string[];
  relations?: {
    category?: CategoryRelation[];
  };
}

export interface AlbumRelation {
  id: string;
  data: {
    slug: string;
    title: string;
    cover?: string;
  };
}

export interface Album {
  slug: string;
  title: string;
  cover: string;
  album_items?: AlbumItem[];
}

export interface AlbumItem {
  label?: string;
  description?: string;
  image: string;
  relations?: {
    album?: AlbumRelation[];
  };
}

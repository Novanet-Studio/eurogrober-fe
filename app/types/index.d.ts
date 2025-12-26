declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;
  export = Schema;
}

export interface StrapiImage {
  id?: number;
  documentId: string;
  url: string;
  name: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export interface Category {
  documentId: string;
  id?: number;

  description?: string;
  slug: string;

  image?: StrapiImage[];
  products?: Product[];
}

export interface Product {
  documentId: string;
  id?: number;

  description: string;
  name: string;
  slug: string;
  hasSlowMotion?: boolean;
  images: StrapiImage[];
  category?: Category;
}

export interface AlbumItem {
  documentId: string;
  id?: number;
  label?: string;
  description?: string;

  image: StrapiImage;
}

export interface Album {
  documentId: string;
  id?: number;
  title: string;
  slug: string;

  cover: StrapiImage;

  album_items?: AlbumItem[];
}

export interface Products {
  data: Data;
}

export interface Data {
  products: ProductsClass;
  categories: Categories;
}

export interface Categories {
  data: DAT[];
}

export interface DAT {
  id: string;
  attributes: DataAttributes;
}

export interface DataAttributes {
  name: string;
}

export interface ProductsClass {
  data: ProductsDatum[];
}

export interface ProductsDatum {
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  name: string;
  description: string;
  category: Category;
  images: Images;
}

export interface Category {
  data: DAT;
}

export interface Images {
  data: ImagesDatum[];
}

export interface ImagesDatum {
  id: string;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  formats: Formats;
  url: string;
}

export interface Formats {
  small: Small;
  thumbnail: Small;
}

export interface Small {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: ProviderMetadata;
}

export enum EXT {
  Webp = ".webp",
}

export enum MIME {
  ImageWebp = "image/webp",
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = "image",
}

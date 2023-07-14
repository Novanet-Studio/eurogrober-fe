declare module "*.gql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;
  export = Schema;
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

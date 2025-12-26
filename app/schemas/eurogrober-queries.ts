const getCategories = `query GetCategories {
  categories {
    documentId
    name
    description
    slug
    products {
      documentId
      name
      description
      slug
      images {
        documentId
        name
        url
      }
    }
  }
}
`;

const getProductsByCategory = `
  query getProductsByCategory($slug: String!) {
    categories(filters: { slug: { eq: $slug } }) {
      documentId
      name
      description
      slug
      products {
        documentId
        name
        description
        slug
        images {
          documentId
          name
          url
        }
      }
    }
  }
`;

const getProductBySlug = `query GetProductBySlug($slug: String) {
  products(filters: { slug: { eq: $slug } }) {
    documentId
    name
    description
    images {
      documentId
      name
      alternativeText
      formats
      url
    }
  }
}`;

const getAlbumsQuery = `
  query getAlbums {
    albums {
      documentId
      title
      slug
      cover {
        url
        name
        width
        height
      }
    }
  }
`;

const getAlbumBySlugQuery = `
  query getAlbumBySlug($slug: String!) {
    albums(filters: { slug: { eq: $slug } }) {
      documentId
      title
      slug
      album_items {
        documentId
        label
        description
        image {
          url
          name
          width
          height
        }
      }
    }
  }
`;

export {
  getProductsByCategory,
  getCategories,
  getProductBySlug,
  getAlbumsQuery,
  getAlbumBySlugQuery,
};

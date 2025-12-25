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

export { getProductsByCategory, getCategories, getProductBySlug };

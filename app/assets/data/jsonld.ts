import common from './common.json';

export const jsonld = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": common.siteName,
    "url": common.baseUrl,
    "logo": `${common.baseUrl}${common.defaultImage}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": common.contact.telephone,
      "contactType": "customer service"
    },
    "sameAs": Object.values(common.socials)
  },
  home: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": common.siteName,
    "url": common.baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${common.baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  
  product: (productData: any) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productData?.name,
    "description": productData?.description,
    "image": productData?.images?.map((img: any) => img.url) || [`${common.baseUrl}${common.defaultImage}`],
    "brand": {
      "@type": "Brand",
      "name": common.siteName
    }
  }),

  category: (categoryData: any) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categoryData?.name,
    "description": categoryData?.description,
    "url": `${common.baseUrl}/category/${categoryData?.slug || ''}`
  }),

  gallery: (albumData: any) => {
    const images = albumData?.album_items?.map((item: any) => item.image?.url) || [];
    if (albumData?.cover?.url) images.unshift(albumData.cover.url);
    
    return {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": albumData?.title,
      "url": `${common.baseUrl}/gallery/${albumData?.slug || ''}`,
      "image": images.length ? images : `${common.baseUrl}${common.defaultImage}`
    };
  }
};

import common from './common.json';

export const metadata = {
  home: {
    title: `${common.siteName} | Luxury Kitchen Products`,
    description: common.defaultDescription,
    ogImage: common.defaultImage,
    ogTitle: `${common.siteName} | Luxury Kitchen Products`,
    ogDescription: common.defaultDescription,
    ogUrl: `${common.baseUrl}/`,
  },
  
  product: (productData: any, requestUrl: string = '') => {
    const description = (productData?.description || common.defaultDescription).substring(0, 200);
    const title = `${productData?.name || 'Product'} | ${common.siteName}`;
    const image = productData?.images?.[0]?.url || common.defaultImage;
    
    return {
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: requestUrl,
      ogType: "website" as any,
      twitterCard: "summary_large_image" as any,
    };
  },

  category: (categoryData: any, requestUrl: string = '') => {
    const description = (categoryData?.description || common.defaultDescription).substring(0, 200);
    const title = `${categoryData?.name || 'Category'} | ${common.siteName}`;
    
    return {
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: common.defaultImage,
      ogUrl: requestUrl,
      ogType: "website" as any,
      twitterCard: "summary_large_image" as any,
    };
  },

  gallery: (albumData: any, requestUrl: string = '') => {
    const title = `${albumData?.title || 'Gallery'} | ${common.siteName}`;
    const image = albumData?.cover?.url || common.defaultImage;
    const description = `View our gallery: ${albumData?.title || 'Luxury Kitchens'}`;
    
    return {
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: requestUrl,
      ogType: "website" as any,
      twitterCard: "summary_large_image" as any,
    };
  }
};

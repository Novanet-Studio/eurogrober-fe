export default defineNuxtConfig({
  telemetry: false,
  ssr: false,
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        class: "light scroll-smooth",
        dir: "ltr",
        lang: "en",
      },
      script: [
        {
          type: "text/javascript",
          src: "/js/metrics.js",
        },
      ],
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxtjs/strapi",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
  ],

  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v5",
  },

  tailwindcss: {
    cssPath: "~/assets/scss/tailwind.scss",
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Eurogrober Web App",
      short_name: "Eurogrober",
      description:
        "We are committed to selling quality and luxury products for kitchens.",
      theme_color: "#E92946",
      background_color: "#ffffff",
      lang: "es",
      start_url: "/",
      display: "standalone",
      icons: [
        {
          src: "/images/favicon.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
  },

  image: {
    dir: "assets/images",
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper-"),
    },
  },
});

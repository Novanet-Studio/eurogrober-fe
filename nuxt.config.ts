import gql from "@rollup/plugin-graphql";

export default defineNuxtConfig({
  telemetry: false,
  ssr: false,
  app: {
    head: {
      htmlAttrs: {
        class: "light scroll-smooth",
        dir: "ltr",
        lang: "en",
      },
    },
    // pageTransition: { name: "page", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: [
    "@nuxtjs/strapi",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
  ],

  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
  },

  tailwindcss: {
    cssPath: "./assets/scss/tailwind.scss",
  },

  pwa: {
    meta: {
      title: "Eurogrober",
      name: "Eurogrober Web App",
      author: "Novanet Studio <info@novanet.studio>",
      description:
        "We are committed to selling quality and luxury products for kitchens. We like working with distributors, carpenters, kitchen manufacturers, designers, architects – or whoever wants their own comfy and beautiful kitchen.",
      theme_color: "#E92946",
      lang: "es",
    },
    manifest: {
      name: "Eurogrober Web App",
      short_name: "Eurogrober",
      description:
        "We are committed to selling quality and luxury products for kitchens. We like working with distributors, carpenters, kitchen manufacturers, designers, architects – or whoever wants their own comfy and beautiful kitchen.",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#E92946",
    },
    icon: { source: "public/images/favicon.png" },
    /*workbox: {
      enabled: true,
    },*/
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
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
      isCustomElement: (tag: string) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },

  vite: {
    plugins: [gql()],
  },

  devtools: { enabled: true },
});

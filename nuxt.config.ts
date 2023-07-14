import gql from "@rollup/plugin-graphql";

export default defineNuxtConfig({
  telemetry: false,
  app: {
    head: {
      htmlAttrs: {
        class: "light scroll-smooth",
        dir: "ltr",
        lang: "en",
      },
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@kevinmarrec/nuxt-pwa",
    "nuxt-lodash",
    "@nuxt/image-edge",
    "nuxt-swiper",
  ],

  tailwindcss: {
    cssPath: "./assets/scss/tailwind.scss",
  },

  lodash: {
    prefix: "$",
    upperAfterPrefix: false,
  },

  pwa: {
    meta: {
      title: "Eurogrober",
      name: "Eurogrober Web App",
      author: "Novanet Studio <info@novanet.studio>",
      description: "Landing page for eurogrober company",
      theme_color: "#31150C",
      lang: "es",
    },
    manifest: {
      name: "Eurogrober Web App",
      short_name: "Eurogrober",
      description: "Landing page for eurogrober company",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      theme_color: "#31150C",
    },
    icon: { source: "static/favicon.png" },
    /*workbox: {
      enabled: true,
    },*/
  },

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    dir: "./assets",
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

  vite: {
    plugins: [gql()],
  },

  devtools: { enabled: true },
});

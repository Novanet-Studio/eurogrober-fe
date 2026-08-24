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
      link: [{ rel: "icon", type: "image/png", href: "/images/favicon.png" }],
      script: [
        {
          type: "text/javascript",
          src: "/js/metrics.js",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: false,
  },

  runtimeConfig: {
    public: {
      kairosApiUrl: process.env.KAIROS_API_URL,
      kairosApiKey: process.env.KAIROS_API_KEY,
    },
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@vite-pwa/nuxt",
  ],

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
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
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

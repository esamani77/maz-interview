// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
  },
  components: [
    { path: "~/features/shared/ui", pathPrefix: false },
    { path: "~/features/shared/layout", pathPrefix: false },
    { path: "~/features/shared/icons", pathPrefix: false },
    { path: "~/features/product-catalog/components", pathPrefix: false },
    { path: "~/features/product-detail/components", pathPrefix: false },
  ],
  imports: {
    dirs: ["features/*/composables"],
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
  runtimeConfig: {
    fakeStoreApiBaseUrl:
      process.env.FAKE_STORE_API_BASE_URL || "https://fakestoreapi.com",
  },
});

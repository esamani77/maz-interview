import type { Product } from "~/features/product-catalog/types";

export default defineEventHandler(async () => {
  const { fakeStoreApiBaseUrl } = useRuntimeConfig();

  const products = await $fetch<Product[]>(`${fakeStoreApiBaseUrl}/products`);
  return products;
});

import type { Product } from "~/features/product-catalog/types";

export default defineEventHandler(async () => {
  return fetchFromFakeStoreApi<Product[]>("/products");
});

import type { Product } from "~/features/product-catalog/types";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id || !/^\d+$/.test(id)) {
    throw createError({ statusCode: 400, statusMessage: "Invalid product id" });
  }

  return fetchFromFakeStoreApi<Product>(`/products/${id}`);
});

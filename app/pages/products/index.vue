<script setup lang="ts">
import type { Product } from "~/features/product-catalog/types";
import { DEFAULT_SORT } from "~/features/product-catalog/types";

const {
  data: products,
  status,
  error,
} = await useFetch<Product[]>("/api/products");

const productList = computed(() => products.value ?? []);
const categories = computed(() => [
  ...new Set(productList.value.map((product) => product.category)),
]);
const categoryCounts = computed(() =>
  productList.value.reduce<Record<string, number>>((counts, product) => {
    counts[product.category] = (counts[product.category] ?? 0) + 1;
    return counts;
  }, {}),
);

const { search, sortBy, selectedCategories, toggleCategory, filteredProducts } =
  useCatalogFilters(productList);
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div
      v-if="status === 'pending'"
      class="rounded-2xl bg-white p-6 text-center text-sm text-ink-muted shadow-sm"
    >
      در حال بارگذاری محصولات...
    </div>

    <div
      v-else-if="error"
      class="rounded-2xl bg-white p-6 text-center text-sm text-red-600 shadow-sm"
    >
      خطا در دریافت محصولات. لطفا صفحه را دوباره بارگذاری کنید.
    </div>

    <div v-else class="flex flex-col gap-6 lg:flex-row-reverse">
      <div class="flex-1 max-lg:order-last">
        <CatalogToolbar
          :search="search"
          :sort-by="sortBy"
          :selected-categories="selectedCategories"
          @clear-search="search = ''"
          @clear-sort="sortBy = DEFAULT_SORT"
          @remove-category="toggleCategory"
        />
        <CatalogGrid :products="filteredProducts" />
      </div>
      <CatalogSidebar
        v-model:search="search"
        v-model:sort-by="sortBy"
        :categories="categories"
        :category-counts="categoryCounts"
        :selected-categories="selectedCategories"
        @toggle-category="toggleCategory"
      />
    </div>
  </div>
</template>

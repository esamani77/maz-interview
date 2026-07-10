import type { Product, SortOption } from "../types";
import { DEFAULT_SORT } from "../types";

export function useCatalogFilters(products: Ref<Product[]>) {
  const search = ref("");
  const sortBy = ref<SortOption>(DEFAULT_SORT);
  const selectedCategories = ref<string[]>([]);

  function toggleCategory(category: string) {
    const index = selectedCategories.value.indexOf(category);
    if (index === -1) {
      selectedCategories.value.push(category);
    } else {
      selectedCategories.value.splice(index, 1);
    }
  }

  function clearFilters() {
    search.value = "";
    sortBy.value = DEFAULT_SORT;
    selectedCategories.value = [];
  }

  const filteredProducts = computed(() => {
    let result = products.value;

    if (search.value.trim()) {
      const query = search.value.trim().toLowerCase();
      result = result.filter((product) =>
        product.title.toLowerCase().includes(query),
      );
    }

    if (selectedCategories.value.length > 0) {
      result = result.filter((product) =>
        selectedCategories.value.includes(product.category),
      );
    }

    result = [...result];
    switch (sortBy.value) {
      case "count-asc":
        result.sort((a, b) => a.rating.count - b.rating.count);
        break;
      case "count-desc":
        result.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case "rating-desc":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "rating-asc":
        result.sort((a, b) => a.rating.rate - b.rating.rate);
        break;
    }

    return result;
  });

  return {
    search,
    sortBy,
    selectedCategories,
    toggleCategory,
    clearFilters,
    filteredProducts,
  };
}

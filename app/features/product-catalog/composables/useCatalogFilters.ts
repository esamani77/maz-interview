import type { Product, SortOption } from "../types";
import { DEFAULT_SORT, SORT_OPTIONS } from "../types";

const SORT_VALUES = SORT_OPTIONS.map((option) => option.value);

function isSortOption(value: unknown): value is SortOption {
  return (
    typeof value === "string" && SORT_VALUES.includes(value as SortOption)
  );
}

export function useCatalogFilters(products: Ref<Product[]>) {
  const route = useRoute();
  const router = useRouter();

  const search = ref(typeof route.query.q === "string" ? route.query.q : "");
  const sortBy = ref<SortOption>(
    isSortOption(route.query.sort) ? route.query.sort : DEFAULT_SORT,
  );
  const selectedCategories = ref<string[]>(
    typeof route.query.categories === "string" && route.query.categories
      ? route.query.categories.split(",")
      : [],
  );

  watch(
    [search, sortBy, selectedCategories],
    ([searchValue, sortValue, categories]) => {
      router.replace({
        query: {
          ...route.query,
          q: searchValue.trim() || undefined,
          sort: sortValue === DEFAULT_SORT ? undefined : sortValue,
          categories: categories.length > 0 ? categories.join(",") : undefined,
        },
      });
    },
    { deep: true },
  );

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

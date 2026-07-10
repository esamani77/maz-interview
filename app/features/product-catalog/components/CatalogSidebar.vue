<script setup lang="ts">
import { SORT_OPTIONS, type SortOption } from "../types";

const props = defineProps<{
  search: string;
  sortBy: SortOption;
  categories: string[];
  selectedCategories: string[];
  categoryCounts: Record<string, number>;
}>();

const emit = defineEmits<{
  "update:search": [value: string];
  "update:sortBy": [value: SortOption];
  toggleCategory: [category: string];
}>();

const sortModel = computed({
  get: () => props.sortBy,
  set: (value) => emit("update:sortBy", value),
});

const searchDraft = ref(props.search);

watch(
  () => props.search,
  (value) => {
    searchDraft.value = value;
  },
);

function submitSearch() {
  emit("update:search", searchDraft.value);
}

function clearSearch() {
  searchDraft.value = "";
  emit("update:search", "");
}

const sortOpen = ref(true);
const categoriesOpen = ref(true);
</script>

<template>
  <aside class="w-full space-y-4 lg:w-72 lg:shrink-0">
    <div class="rounded-3xl bg-white p-6 shadow-sm">
      <h3 class="mb-4 text-base font-semibold text-ink">فیلتر و جستجو</h3>

      <div
        class="flex items-center rounded-2xl border-2 border-brand bg-white px-4 py-2.5"
      >
        <span class="shrink-0 text-brand">
          <IconSearch class="h-5 w-5" />
        </span>

        <span class="mx-3 h-5 w-px shrink-0 bg-gray-200" aria-hidden="true" />

        <input
          v-model="searchDraft"
          type="text"
          placeholder="جستجو..."
          class="min-w-0 flex-1 bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          @keydown.enter="submitSearch"
        >

        <button
          v-if="searchDraft"
          type="button"
          class="mr-1 shrink-0 text-ink-muted transition-colors hover:text-ink"
          aria-label="پاک کردن جستجو"
          @click="clearSearch"
        >
          <IconClose class="h-4 w-4" />
        </button>
      </div>

      <button
        type="button"
        class="mt-4 w-full rounded-2xl bg-brand py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        @click="submitSearch"
      >
        جستجو
      </button>
    </div>

    <div class="rounded-3xl bg-white p-6 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between"
        :aria-expanded="sortOpen"
        @click="sortOpen = !sortOpen"
      >
        <h3 class="text-base font-semibold text-ink">مرتب سازی</h3>
        <IconChevronDown
          class="h-5 w-5 text-ink-muted transition-transform duration-200"
          :class="{ 'rotate-180': !sortOpen }"
        />
      </button>

      <div v-show="sortOpen" class="mt-2">
        <BaseRadio
          v-for="option in SORT_OPTIONS"
          :key="option.value"
          v-model="sortModel"
          name="sort"
          :value="option.value"
          :label="option.label"
        />
      </div>
    </div>

    <div class="rounded-3xl bg-white p-6 shadow-sm">
      <button
        type="button"
        class="flex w-full items-center justify-between"
        :aria-expanded="categoriesOpen"
        @click="categoriesOpen = !categoriesOpen"
      >
        <h3 class="text-base font-semibold text-ink">دسته بندی</h3>
        <IconChevronDown
          class="h-5 w-5 text-ink-muted transition-transform duration-200"
          :class="{ 'rotate-180': !categoriesOpen }"
        />
      </button>

      <div v-show="categoriesOpen" class="mt-2">
        <BaseCheckbox
          v-for="category in categories"
          :key="category"
          :model-value="selectedCategories.includes(category)"
          :label="category"
          :count="categoryCounts[category] ?? 0"
          @update:model-value="emit('toggleCategory', category)"
        />
      </div>
    </div>
  </aside>
</template>

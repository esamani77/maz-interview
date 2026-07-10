<script setup lang="ts">
import { getSortChipLabel, type SortOption } from "../types";

const props = defineProps<{
  search: string;
  sortBy: SortOption;
  selectedCategories: string[];
}>();

const emit = defineEmits<{
  clearSearch: [];
  clearSort: [];
  removeCategory: [category: string];
}>();

const hasActiveFilters = computed(
  () => !!props.search || props.selectedCategories.length > 0 || !!props.sortBy,
);
</script>

<template>
  <div
    v-if="hasActiveFilters"
    class="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white px-6 py-3 shadow-sm"
  >
    <span class="text-sm font-medium text-ink"> فیلترهای اعمال شده </span>

    <div class="flex flex-wrap items-center gap-2">
      <span
        class="flex items-center gap-2 rounded-full bg-brand-light px-3 py-1.5 text-sm text-brand"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <path d="M3 6h18" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </svg>
        <span>{{ getSortChipLabel(sortBy) }}</span>
        <button
          type="button"
          class="text-brand/70 transition-colors hover:text-brand"
          aria-label="حذف فیلتر مرتب‌سازی"
          @click="emit('clearSort')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </span>

      <span
        v-if="search"
        class="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm text-violet-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span>{{ search }}</span>
        <button
          type="button"
          class="text-violet-500 transition-colors hover:text-violet-700"
          aria-label="حذف فیلتر جستجو"
          @click="emit('clearSearch')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </span>

      <span
        v-for="category in selectedCategories"
        :key="category"
        class="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm text-violet-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 shrink-0"
          aria-hidden="true"
        >
          <path d="M4 9h16" />
          <path d="M4 15h16" />
          <path d="M10 3 8 21" />
          <path d="m16 3-2 18" />
        </svg>
        <span>{{ category }}</span>
        <button
          type="button"
          class="text-violet-500 transition-colors hover:text-violet-700"
          :aria-label="`حذف فیلتر ${category}`"
          @click="emit('removeCategory', category)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </span>
    </div>
  </div>
</template>

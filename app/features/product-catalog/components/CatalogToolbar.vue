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
        <IconSort class="h-4 w-4 shrink-0" />
        <span>{{ getSortChipLabel(sortBy) }}</span>
        <button
          type="button"
          class="text-brand/70 transition-colors hover:text-brand"
          aria-label="حذف فیلتر مرتب‌سازی"
          @click="emit('clearSort')"
        >
          <IconClose class="h-4 w-4" />
        </button>
      </span>

      <span
        v-if="search"
        class="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm text-violet-700"
      >
        <IconSearch class="h-4 w-4 shrink-0" />
        <span>{{ search }}</span>
        <button
          type="button"
          class="text-violet-500 transition-colors hover:text-violet-700"
          aria-label="حذف فیلتر جستجو"
          @click="emit('clearSearch')"
        >
          <IconClose class="h-4 w-4" />
        </button>
      </span>

      <span
        v-for="category in selectedCategories"
        :key="category"
        class="flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-sm text-violet-700"
      >
        <IconTag class="h-4 w-4 shrink-0" />
        <span>{{ category }}</span>
        <button
          type="button"
          class="text-violet-500 transition-colors hover:text-violet-700"
          :aria-label="`حذف فیلتر ${category}`"
          @click="emit('removeCategory', category)"
        >
          <IconClose class="h-4 w-4" />
        </button>
      </span>
    </div>
  </div>
</template>

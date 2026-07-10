<script setup lang="ts">
import type { Product } from "../types";

const props = defineProps<{ product: Product }>();

const formattedPrice = computed(
  () => `${props.product.price.toLocaleString("fa-IR")} تومان`,
);

const descriptionItems = computed(() => {
  const text = props.product.description.trim();
  if (!text) return [];

  const byLine = text
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
  if (byLine.length > 1) return byLine;

  const bySentence = text
    .split(/(?<=[.!؟])\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
  return bySentence.length > 1 ? bySentence : [text];
});

const specRows = computed(() => [
  { label: "قیمت", value: formattedPrice.value, type: "text" as const },
  { label: "توضیحات", value: descriptionItems.value, type: "list" as const },
  { label: "دسته بندی", value: props.product.category, type: "text" as const },
  {
    label: "رتبه",
    value: props.product.rating.rate.toLocaleString("fa-IR"),
    type: "text" as const,
  },
  {
    label: "تعداد",
    value: props.product.rating.count.toLocaleString("fa-IR"),
    type: "text" as const,
  },
]);
</script>

<template>
  <div>
    <h2 class="mb-5 text-lg font-bold text-ink">مشخصات فنی</h2>

    <div class="flex flex-col gap-3">
      <div
        v-for="row in specRows"
        :key="row.label"
        class="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-3"
      >
        <div
          class="flex items-center rounded-r-2xl bg-gray-25 px-5 py-3.5 text-sm text-gray-600 sm:w-36 sm:shrink-0"
          :class="row.type === 'list' ? 'sm:self-stretch sm:py-4' : ''"
        >
          {{ row.label }}
        </div>

        <div
          class="flex-1 rounded-l-2xl bg-gray-25 px-5 py-3.5 text-sm text-gray-800"
          :class="row.type === 'list' ? 'py-4' : ''"
        >
          <ul
            v-if="row.type === 'list'"
            class="list-disc space-y-2 ps-5 leading-relaxed"
          >
            <li v-for="(item, index) in row.value" :key="index">
              {{ item }}
            </li>
          </ul>
          <span v-else>{{ row.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

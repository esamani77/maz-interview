<script setup lang="ts">
import type { Product } from "../types";

defineProps<{ product: Product }>();
</script>

<template>
  <div
    class="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
  >
    <NuxtLink :to="`/products/${product.id}`" class="block">
      <img
        :src="product.image"
        :alt="product.title"
        class="h-44 w-full object-cover"
      />
    </NuxtLink>

    <div class="flex flex-1 flex-col px-4 pb-4 pt-3">
      <h3
        class="line-clamp-2 min-h-[2.5rem] text-center text-sm font-medium text-ink"
      >
        {{ product.title }}
      </h3>

      <NuxtLink
        :to="`/products/${product.id}`"
        class="mt-3 flex w-full items-center justify-center gap-1 rounded-2xl border border-gray-200 bg-white py-2.5 text-sm font-medium text-brand transition-colors hover:bg-gray-50"
      >
        <span>مشاهده جزئیات</span>
        <IconArrowLeft class="size-4" />
      </NuxtLink>
    </div>
  </div>
</template>

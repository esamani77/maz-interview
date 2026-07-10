<script setup lang="ts">
import type { Product } from '../types'

defineProps<{ products: Product[] }>()
</script>

<template>
  <div
    v-if="products.length > 0"
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
  >
    <CatalogCard v-for="product in products" :key="product.id" :product="product" />
  </div>
  <div v-else class="flex flex-col items-center justify-center rounded-2xl bg-white py-16 text-center">
    <p class="text-ink-muted">
      محصولی با این مشخصات یافت نشد.
    </p>
  </div>
</template>

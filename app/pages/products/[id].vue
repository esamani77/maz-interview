<script setup lang="ts">
import type { Product } from "~/features/product-detail/types";

const route = useRoute();
const {
  data: product,
  status,
  error,
} = await useFetch<Product>(`/api/products/${route.params.id}`);
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div
      v-if="status === 'pending'"
      class="rounded-3xl bg-white p-6 text-center text-sm text-ink-muted shadow-sm"
    >
      در حال بارگذاری محصول...
    </div>

    <div
      v-else-if="error || !product"
      class="rounded-3xl bg-white p-6 text-center shadow-sm"
    >
      <p class="mb-4 text-sm text-red-600">محصول مورد نظر یافت نشد.</p>
      <NuxtLink to="/products" class="text-sm text-brand hover:underline">
        بازگشت به لیست محصولات
      </NuxtLink>
    </div>

    <template v-else>
      <ProductBreadcrumbs :category="product.category" />

      <div class="rounded-3xl bg-white p-5 shadow-sm sm:p-6">
        <h1 class="mb-5 text-xl font-bold text-ink">
          {{ product.title }}
        </h1>
        <ProductGallery :image="product.image" :title="product.title" />
      </div>

      <div class="mt-5 rounded-3xl bg-white p-5 shadow-sm sm:mt-6 sm:p-6">
        <ProductInfo :product="product" />
      </div>
    </template>
  </div>
</template>

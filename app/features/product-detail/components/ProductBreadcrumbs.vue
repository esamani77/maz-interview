<script setup lang="ts">
defineProps<{
  category: string
}>()
</script>

<template>
  <nav class="mb-4 flex items-center gap-2 text-sm text-ink-muted">
    <NuxtLink
      to="/"
      class="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-brand"
      aria-label="صفحه اصلی"
    >
      <IconHome :size="18" />
    </NuxtLink>

    <span aria-hidden="true" class="text-ink-muted/60 rotate-180">&lsaquo;</span>

    <NuxtLink to="/products" class="transition-colors hover:text-brand">
      لیست محصولات
    </NuxtLink>

    <span aria-hidden="true" class="text-ink-muted/60 rotate-180">&lsaquo;</span>

    <span class="text-ink">{{ category }}</span>
  </nav>
</template>

<script setup lang="ts">
defineProps<{ image: string; title: string }>();

const isZoomed = ref(false);
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl">
    <button
      type="button"
      class="absolute start-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-2xl bg-ink/70 text-white transition-colors hover:bg-ink/85"
      aria-label="بزرگ‌نمایی تصویر"
      @click="isZoomed = true"
    >
      <IconZoomIn :size="20" />
    </button>

    <img
      :src="image"
      :alt="title"
      class="aspect-[16/9] w-full object-cover sm:aspect-[2/1] max-h-[310px]"
    />

    <div
      v-if="isZoomed"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      @click="isZoomed = false"
    >
      <button
        type="button"
        class="absolute end-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink hover:bg-gray-100"
        aria-label="بستن"
        @click="isZoomed = false"
      >
        &times;
      </button>
      <img
        :src="image"
        :alt="title"
        class="max-h-[85vh] max-w-full rounded-2xl object-contain"
        @click.stop
      />
    </div>
  </div>
</template>

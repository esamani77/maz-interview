<script setup lang="ts">
import IconBook from "~/features/shared/icons/IconBook.vue";
import IconCategory from "~/features/shared/icons/IconCategory.vue";
import IconPhone from "~/features/shared/icons/IconPhone.vue";
import IconMessageQuestion from "~/features/shared/icons/IconMessageQuestion.vue";

const navLinks = [
  { label: "لیست محصولات", to: "/products", icon: IconCategory },
  { label: "دریافت مشاوره", to: "/", icon: IconBook },
  { label: "سوالات متداول", to: "/", icon: IconMessageQuestion },
  { label: "تماس با ما", to: "/", icon: IconPhone },
];
</script>

<template>
  <header class="border-b border-gray-100 bg-white">
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <NuxtLink to="/" class="text-lg font-bold text-ink">
        درب و پنجره ماز
      </NuxtLink>
      <nav class="hidden items-center gap-6 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-brand"
        >
          <component :is="link.icon" class="size-4" />
          {{ link.label }}
        </NuxtLink>
      </nav>
      <BaseButton variant="solid" as="NuxtLink" to="/">
        تماس
        <IconPhone2 class="size-4" />
      </BaseButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import IconBook from "~/features/shared/icons/IconBook.vue";
import IconCategory from "~/features/shared/icons/IconCategory.vue";
import IconPhone from "~/features/shared/icons/IconPhone.vue";
import IconMessageQuestion from "~/features/shared/icons/IconMessageQuestion.vue";

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navLinks = [
  { label: "لیست محصولات", to: "/products", icon: IconCategory },
  { label: "دریافت مشاوره", to: "/", icon: IconBook },
  { label: "سوالات متداول", to: "/", icon: IconMessageQuestion },
  { label: "تماس با ما", to: "/", icon: IconPhone },
];

function isActiveLink(to: string) {
  if (to === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(to);
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
}

watch(() => route.path, closeMobileMenu);
</script>

<template>
  <header class="rounded-b-2xl bg-white shadow-header">
    <!-- Desktop -->
    <div
      class="mx-auto hidden h-[120px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:flex"
    >
      <div/>
      <nav class="flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.to"
          class="group flex flex-col items-center gap-1.5 text-sm transition-colors"
          :class="
            isActiveLink(link.to)
              ? 'text-brand'
              : 'text-[#292d32] hover:text-brand'
          "
        >
          <span class="flex items-center gap-1.5">
            <component :is="link.icon" :size="16" />
            {{ link.label }}
          </span>
          <span
            class="h-1.5 w-1.5 rounded-full bg-brand transition-opacity"
            :class="
              isActiveLink(link.to)
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            "
          />
        </NuxtLink>
      </nav>

      <BaseButton variant="solid" as="NuxtLink" to="/">
        تماس
        <IconPhone2 class="size-4" />
      </BaseButton>
    </div>

    <!-- Mobile -->
    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:hidden"
    >
      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-brand text-brand transition-colors hover:bg-brand-light"
        aria-label="منوی اصلی"
        :aria-expanded="isMobileMenuOpen"
        @click="toggleMobileMenu"
      >
        <IconMenu :size="22" />
      </button>

      <NuxtLink
        to="/"
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-brand text-brand transition-colors hover:bg-brand-light"
        aria-label="تماس"
      >
        <IconPhone2 :size="22" />
      </NuxtLink>
    </div>

    <nav
      v-if="isMobileMenuOpen"
      class="border-t border-gray-100 bg-white px-4 py-3 sm:px-6 md:hidden"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        class="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors"
        :class="
          isActiveLink(link.to)
            ? 'text-brand'
            : 'text-ink-muted hover:bg-gray-25 hover:text-brand'
        "
        @click="closeMobileMenu"
      >
        <component :is="link.icon" :size="18" />
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

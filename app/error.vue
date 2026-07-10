<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const isNotFound = computed(() => props.error.statusCode === 404);

const title = computed(() =>
  isNotFound.value ? "صفحه مورد نظر یافت نشد" : "خطایی پیش آمده است",
);

const description = computed(() =>
  isNotFound.value
    ? "صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده است."
    : "مشکلی در پردازش درخواست شما رخ داد. لطفا دوباره تلاش کنید.",
);

useSeoMeta({
  title: () => (isNotFound.value ? "صفحه یافت نشد" : "خطا"),
});

function handleGoHome() {
  clearError({ redirect: "/products" });
}
</script>

<template>
  <div>
    <AppHeader />
    <main class="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div class="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-sm">
        <p class="text-5xl font-bold text-brand">{{ error.statusCode }}</p>
        <h1 class="mt-4 text-lg font-bold text-ink">{{ title }}</h1>
        <p class="mt-2 text-sm text-ink-muted">{{ description }}</p>
        <BaseButton class="mt-6" @click="handleGoHome">
          بازگشت به فروشگاه
        </BaseButton>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
